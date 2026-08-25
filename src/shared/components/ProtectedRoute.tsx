import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { Outlet, useNavigate } from "react-router";

export function ProtectedRoute() {
  const navigate = useNavigate();
  const { data: user, isLoading } = useGetMe();

  if (isLoading) {
    return <div>Loading...!!</div>;
  }

  if (!user) {
    navigate("/auth/login");
    return;
  }

  return <Outlet />;
}
