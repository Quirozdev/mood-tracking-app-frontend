import { Avatar } from "@/shared/components/Avatar";
import { Logo } from "@/shared/components/Logo";
import IconDropdownArrow from "@/assets/images/icon-dropdown-arrow.svg";
import { useGetMe } from "@/features/auth/hooks/use-get-me";

export function AppHeader() {
  const { data: user } = useGetMe();

  return (
    <header className="mb-12 flex items-center justify-between xl:mb-16">
      <Logo />
      <button className="flex cursor-pointer items-center gap-2.5">
        <Avatar src={user?.avatarUrl || null} size="sm" />
        <img src={IconDropdownArrow} alt="Dropdown icon" />
      </button>
    </header>
  );
}
