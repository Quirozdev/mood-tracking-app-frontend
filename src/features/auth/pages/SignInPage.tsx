import { AuthFormContainer } from "@/features/auth/components/AuthFormContainer";
import { Input } from "@/shared/components/Input";

export function SignInPage() {
  return (
    <AuthFormContainer
      title="Welcome back!"
      subtitle="Log in to continue tracking your mood and sleep"
      button={{
        text: "Log In",
        isLoading: false,
      }}
      redirection={{
        text: "Haven't got an account?",
        linkText: "Sign up.",
        linkTo: "/auth/register",
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
            type="text"
            id="email"
            name="email"
            placeholder="name@email.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-preset-6-regular text-neutral-900"
          >
            Password
          </label>
          <Input type="password" id="password" name="password" />
        </div>
      </div>
    </AuthFormContainer>
  );
}
