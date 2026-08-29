import { Logo } from "@/shared/components/Logo";
import { ProfileDropdown } from "@/shared/components/ProfileDropdown";

export function AppHeader() {
  return (
    <header className="mb-12 flex items-center justify-between xl:mb-16">
      <Logo />
      <ProfileDropdown />
    </header>
  );
}
