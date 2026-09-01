import { AuthFormContainer } from "@/features/auth/components/AuthFormContainer";
import { GET_ME_QUERY_KEY, useGetMe } from "@/features/auth/hooks/use-get-me";
import { onboardingSchema } from "@/features/auth/schemas/onboarding-schema";
import { showToast } from "@/features/toast/lib/toast";
import { useUpdateUser } from "@/features/users/hooks/use-update-user";
import { useUploadAvatar } from "@/features/users/hooks/use-upload-avatar";
import {
  updateUserFormVariantsMapping,
  type UpdateUserFormVariants,
} from "@/features/users/model/update-user-form-variants.types";
import type { User } from "@/features/users/model/user.types";
import { Avatar } from "@/shared/components/Avatar";
import { FilePicker } from "@/shared/components/FilePicker";
import { Input } from "@/shared/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface Props extends React.ComponentPropsWithRef<"form"> {
  variant?: UpdateUserFormVariants;
  onUpdatedUser?: (nameHasValue: boolean, avatarHasValue: boolean) => void;
  onClose?: () => void;
}

export function UpdateUserForm(props: Props) {
  const variant = props.variant || "onboarding";

  const { data: user, isLoading: isLoadingUser } = useGetMe();
  const [files, setFiles] = useState<FileList | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<z.infer<typeof onboardingSchema>>({
    resolver: zodResolver(onboardingSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (user && !getValues("name")) {
      reset({
        name: user.name ?? "",
      });
    }
  }, [user]);

  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();

  const { mutateAsync: uploadAvatar, isPending: isUploadingAvatar } =
    useUploadAvatar();

  const queryClient = useQueryClient();

  const maxFileSize = 250 * 1024;
  const src = files && files.length > 0 ? URL.createObjectURL(files[0]) : null;

  async function onSubmit(data: z.infer<typeof onboardingSchema>) {
    const [userUpdateResult, avatarUploadResult] = await Promise.allSettled([
      updateUser({
        id: user?.id as string,
        updateUserInput: {
          name: data.name,
        },
      }),
      files?.[0]
        ? uploadAvatar({
            id: user?.id as string,
            file: files[0],
          })
        : Promise.resolve(null),
    ]);

    let newName = user?.name || null;
    let newAvatarUrl = user?.avatarUrl || null;

    if (userUpdateResult.status === "fulfilled") {
      showToast("success", "Name updated successfully!");
      newName = userUpdateResult.value?.name;
    }

    if (
      avatarUploadResult.status === "fulfilled" &&
      avatarUploadResult.value !== null
    ) {
      showToast("success", "Avatar updated successfully!");
      newAvatarUrl = avatarUploadResult.value.avatarUrl;
    }

    queryClient.setQueryData<User>([GET_ME_QUERY_KEY], (currentUser) => {
      if (!currentUser) return currentUser;

      return {
        ...currentUser,
        name: newName,
        avatarUrl: newAvatarUrl,
      };
    });

    if (props.onUpdatedUser) {
      props.onUpdatedUser(!!newName, !!newAvatarUrl);
    }
  }

  return (
    <AuthFormContainer
      title={updateUserFormVariantsMapping[variant].title}
      subtitle={updateUserFormVariantsMapping[variant].subtitle}
      button={{
        text: updateUserFormVariantsMapping[variant].buttonText,
        isLoading: isLoadingUser || isUpdatingUser || isUploadingAvatar,
      }}
      onClose={props.onClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-preset-6-regular text-neutral-900"
          >
            Name
          </label>
          <Input
            {...register("name")}
            type="text"
            id="name"
            name="name"
            placeholder="Jane Appleseed"
            invalid={!!errors.name}
            errorMessage={errors.name?.message}
          />
        </div>
        <div className="flex gap-5">
          <Avatar src={src ?? user?.avatarUrl ?? null} />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-preset-6-regular text-neutral-900">
                Upload Image
              </span>
              <span className="text-preset-7 text-neutral-600">
                Max 250KB, PNG or JPEG
              </span>
            </div>
            <FilePicker
              onFilesChange={setFiles}
              maxFileSize={maxFileSize}
              accept="image/png,image/jpeg"
            />
          </div>
        </div>
      </div>
    </AuthFormContainer>
  );
}
