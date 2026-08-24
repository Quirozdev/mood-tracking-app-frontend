import { AuthFormContainer } from "@/features/auth/components/AuthFormContainer";
import { signUpSchema } from "@/features/auth/schemas/sign-up.schema";
import { useCreateUser } from "@/features/users/hooks/use-create-user";
import { Input } from "@/shared/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { showToast } from "@/features/toast/lib/toast";

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const { mutateAsync: createUser, isPending } = useCreateUser();

  async function onSubmit(data: z.infer<typeof signUpSchema>) {
    try {
      await createUser({
        email: data.email,
        password: data.password,
      });
      showToast("success", "Account created successfully, please log in");
      navigate("/auth/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error?.response?.status === 409) {
          setError("email", {
            message: "Email already taken",
          });
        }
        return;
      }
    }
  }

  return (
    <AuthFormContainer
      onSubmit={handleSubmit(onSubmit)}
      title="Create an account"
      subtitle="Join to track your daily mood and sleep with ease."
      button={{ text: "Sign Up", isLoading: isPending }}
      redirection={{
        text: "Already got an account",
        linkText: "Log in.",
        linkTo: "/auth/login",
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-preset-6-regular text-neutral-900"
          >
            Email address
          </label>
          <Input
            {...register("email")}
            type="text"
            id="email"
            name="email"
            placeholder="name@email.com"
            invalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-preset-6-regular text-neutral-900"
          >
            Password
          </label>
          <Input
            {...register("password")}
            type="password"
            id="password"
            name="password"
            invalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
      </div>
    </AuthFormContainer>
  );
}
