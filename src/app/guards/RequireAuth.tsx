import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { LoadingFullScreen } from "@/shared/components/LoadingFullScreen";
import { Navigate, Outlet } from "react-router";

export default function RequireAuth() {
  const { data: user, isLoading } = useGetMe();

  if (isLoading) {
    return <LoadingFullScreen />;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
