import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { Navigate, Outlet } from "react-router";

export default function AppLayout() {
  const { data: user, isLoading } = useGetMe();

  if (isLoading) {
    return <div>Loading...!!</div>;
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!user.name) {
    return <Navigate to="/auth/onboarding" replace />;
  }

  return (
    <div className="bg-light-gradient min-h-screen w-full">
      <Outlet />
    </div>
  );
}
