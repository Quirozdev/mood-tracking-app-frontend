import { Outlet } from "react-router";
import Logo from "@/assets/images/logo.svg";

export function AuthLayout() {
  return (
    <div className="bg-light-gradient flex min-h-screen w-full justify-center">
      <div className="mt-20 flex flex-col items-center gap-12">
        <img src={Logo} alt="Logo" className="max-w-44" />
        <Outlet />
      </div>
    </div>
  );
}
