import { AuthFormContainer } from "@/features/auth/components/AuthFormContainer";
import { Input } from "@/shared/components/Input";

export function SignUpPage() {
  return (
    <AuthFormContainer
      title="Create an account"
      subtitle="Join to track your daily mood and sleep with ease."
      buttonText="Sign Up"
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
