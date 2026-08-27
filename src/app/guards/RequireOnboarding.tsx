import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { Navigate, Outlet } from "react-router";

export default function RequireOnboarding() {
  const { data: user } = useGetMe();

  if (!user?.name) {
    return <Navigate to="/auth/onboarding" replace />;
  }

  return <Outlet />;
}
