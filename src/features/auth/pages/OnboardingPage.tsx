import { UpdateUserForm } from "@/features/users/widgets/UpdateUserForm";
import { useNavigate } from "react-router";

export function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <UpdateUserForm
      variant="onboarding"
      onUpdatedUser={(nameHasValue) => {
        if (nameHasValue) {
          navigate("/");
        }
      }}
    />
  );
}
