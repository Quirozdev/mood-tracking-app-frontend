import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { Navigate, Outlet } from "react-router";

export default function RequireAuth() {
  const { data: user, isLoading } = useGetMe();

  if (isLoading) {
    return <div>Loading...!!</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
}
