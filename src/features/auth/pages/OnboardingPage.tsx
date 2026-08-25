import { AuthFormContainer } from "@/features/auth/components/AuthFormContainer";
import { Avatar } from "@/shared/components/Avatar";
import { FilePicker } from "@/shared/components/FilePicker";
import { Input } from "@/shared/components/Input";
import { useState } from "react";

export function OnboardingPage() {
  const [files, setFiles] = useState<FileList | null>(null);

  const maxFileSize = 250 * 1024;

  const src = files && files.length > 0 ? URL.createObjectURL(files[0]) : null;

  return (
    <AuthFormContainer
      title="Personalize your experience"
      subtitle="Add your name and a profile picture to make Mood yours."
      button={{
        text: "Start Tracking",
        isLoading: false,
      }}
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
            type="text"
            id="name"
            name="name"
            placeholder="Jane Appleseed"
          />
        </div>
        <div className="flex gap-5">
          <Avatar src={src} />
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
              setSelectedFiles={setFiles}
              maxFileSize={maxFileSize}
              onHigherMaxFileSizeReached={(size) => {
                console.log(
                  `File size is ${size * 1024}KB which is larger than allowed limit (${maxFileSize}KB)`,
                );
              }}
              accept="image/pmg,image/jpeg"
            />
          </div>
        </div>
      </div>
    </AuthFormContainer>
  );
}
