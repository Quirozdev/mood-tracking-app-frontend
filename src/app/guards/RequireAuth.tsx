import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { LoadingAuth } from "@/features/auth/pages/LoadingAuth";
import { Navigate, Outlet } from "react-router";

export default function RequireAuth() {
  const { data: user, isLoading } = useGetMe();

  if (isLoading) {
    return <LoadingAuth />;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
