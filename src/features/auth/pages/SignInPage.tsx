import { AuthFormContainer } from "@/features/auth/components/AuthFormContainer";
import { useSignIn } from "@/features/auth/hooks/use-sign-in";
import { signInSchema } from "@/features/auth/schemas/sign-in-schema";
import { showToast } from "@/features/toast/lib/toast";
import { Input } from "@/shared/components/Input";
import { setItem } from "@/shared/lib/local-storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as z from "zod";

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const { mutateAsync: signIn, isPending } = useSignIn();

  async function onSubmit(data: z.infer<typeof signInSchema>) {
    const { accessToken } = await signIn({
      email: data.email,
      password: data.password,
    });

    setItem("accessToken", accessToken);
    showToast("success", "Logged in successfully");
    navigate("/", { replace: true });
  }

  return (
    <AuthFormContainer
      title="Welcome back!"
      subtitle="Log in to continue tracking your mood and sleep"
      button={{
        text: "Log In",
        isLoading: isPending,
      }}
      redirection={{
        text: "Haven't got an account?",
        linkText: "Sign up.",
        linkTo: "/auth/register",
      }}
      onSubmit={handleSubmit(onSubmit)}
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
