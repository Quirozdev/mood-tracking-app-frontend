import { Avatar } from "@/shared/components/Avatar";
import IconDropdownArrow from "@/assets/images/icon-dropdown-arrow.svg";
import { useGetMe } from "@/features/auth/hooks/use-get-me";
import SettingsIcon from "@/assets/images/icon-settings.svg";
import LogoutIcon from "@/assets/images/icon-logout.svg";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useClickOutsideDetector } from "@/shared/hooks/use-click-outside-detector";
import { useKeyDown } from "@/shared/hooks/use-key-press";
import { Overlay } from "@/shared/components/Overlay";
import { UpdateUserForm } from "@/features/users/widgets/UpdateUserForm";
import { useLogout } from "@/features/auth/hooks/use-logout";
import { removeItem } from "@/shared/lib/local-storage";
import { ACCESS_TOKEN_KEY } from "@/features/auth/model/auth.types";
import { useNavigate } from "react-router";

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: user } = useGetMe();
  const { mutateAsync: logOut, isPending: isLoggingOut } = useLogout();
  const navigate = useNavigate();

  useClickOutsideDetector({
    ref: containerRef,
    onClickOutside: () => {
      setIsOpen(false);
    },
  });

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      setIsOpen(false);
      setIsOverlayVisible(false);
    },
  });

  async function onLogout() {
    await logOut();
    removeItem(ACCESS_TOKEN_KEY);
    navigate("/auth/login");
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        className="flex cursor-pointer items-center gap-2.5"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        <Avatar src={user?.avatarUrl || null} size="sm" />
        <img src={IconDropdownArrow} alt="Dropdown icon" />
      </button>
      <div
        className={clsx(
          /* the calc is to adjust to app layout horizontal paddings */
          "rounded-8 bg-neutral-0 absolute right-0 mt-4 flex w-[calc(100vw-3rem)] flex-col gap-y-3 px-4 py-3 shadow-[0px_5px_8px_0px_rgb(from_var(--color-neutral-900)_r_g_b_/1.6%)] md:mt-2 md:w-fit",
          isOpen && "visible",
          !isOpen && "invisible",
        )}
      >
        <div className="flex flex-col gap-0.5">
          <span className="text-preset-6 truncate text-neutral-900">
            {user?.name}
          </span>
          <span className="text-preset-7 truncate text-neutral-300">
            {user?.email}
          </span>
        </div>
        <div className="h-px w-full bg-blue-100"></div>
        <div className="flex flex-col gap-y-3">
          <button
            className="flex cursor-pointer items-center gap-2.5"
            onClick={() => {
              setIsOpen(false);
              setIsOverlayVisible(true);
            }}
          >
            <img src={SettingsIcon} alt="Settings icon" />
            <span className="text-preset-7 text-neutral-900">Settings</span>
          </button>
          <button
            className="flex cursor-pointer items-center gap-2.5 disabled:cursor-not-allowed"
            onClick={() => {
              onLogout();
            }}
            disabled={isLoggingOut}
          >
            <img src={LogoutIcon} alt="Settings icon" />
            <span className="text-preset-7 text-neutral-900">
              {isLoggingOut ? "Logging out..." : "Logout"}
            </span>
          </button>
        </div>
      </div>
      <Overlay isVisible={isOverlayVisible} setIsVisible={setIsOverlayVisible}>
        <div className="mx-auto max-w-xl">
          <UpdateUserForm
            variant="update"
            onClose={() => {
              setIsOverlayVisible(false);
            }}
            onUpdatedUser={() => {
              setIsOverlayVisible(false);
            }}
          />
        </div>
      </Overlay>
    </div>
  );
}
