import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { Navigate, Outlet } from "react-router";
import { AppHeader } from "@/shared/widgets/AppHeader";

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
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 xl:py-10">
        <AppHeader />
        <Outlet />
      </div>
    </div>
  );
}
