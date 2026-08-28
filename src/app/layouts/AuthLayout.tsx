import { Logo } from "@/shared/components/Logo";
import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div className="bg-light-gradient flex min-h-screen w-full justify-center">
      <div className="mt-20 flex flex-col items-center gap-12">
        <Logo />
        <Outlet />
      </div>
    </div>
  );
}
