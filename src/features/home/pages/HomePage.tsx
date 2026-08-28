import { useGetMe } from "@/features/auth/hooks/use-get-me";
import { Avatar } from "@/shared/components/Avatar";
import { Button } from "@/shared/components/Button";
import { Logo } from "@/shared/components/Logo";
import IconDropdownArrow from "@/assets/images/icon-dropdown-arrow.svg";
import BgPatternAverages from "@/assets/images/bg-pattern-averages.svg";

export function HomePage() {
  const { data: user } = useGetMe();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 xl:py-10">
      <div className="flex flex-col gap-y-12 xl:gap-y-16">
        <header className="flex items-center justify-between">
          <Logo />
          <button className="flex cursor-pointer items-center gap-2.5">
            <Avatar src={user?.avatarUrl || null} size="sm" />
            <img src={IconDropdownArrow} alt="Dropdown icon" />
          </button>
        </header>
        <section className="flex flex-col gap-y-4 text-center md:gap-y-2.5">
          <h2 className="text-preset-3-mobile md:text-preset-3 truncate text-blue-600">
            Hello, {user?.name}
          </h2>
          <h1 className="text-preset-1-mobile md:text-preset-1 text-neutral-900">
            How are you feeling today?
          </h1>
          <span className="text-preset-6 text-neutral-600">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </section>
        <Button className="w-fit self-center">Log today's mood</Button>

        <div>
          <div className="bg-neutral-0 rounded-16 flex flex-col gap-y-6 px-4 py-5 md:px-5 md:py-6">
            <div className="relative flex flex-col gap-y-3 overflow-hidden">
              <span className="text-preset-5 text-neutral-900">
                Average Mood {""}
                <span className="text-preset-7 text-neutral-600">
                  (Last 5 Check-ins)
                </span>
              </span>
              <div className="rounded-16 flex flex-col gap-3 bg-blue-100 px-4 py-10 md:px-5">
                <span className="text-preset-4 text-neutral-900">
                  Keep tracking!
                </span>
                <p className="text-preset-7 text-neutral-900">
                  Log 5 check-ins to see your average mood.
                </p>
                <img
                  src={BgPatternAverages}
                  alt="Background averages pattern"
                  className="absolute top-0 -right-40"
                />
              </div>
            </div>

            <div className="relative flex flex-col gap-y-3 overflow-hidden">
              <span className="text-preset-5 text-neutral-900">
                Average Sleep {""}
                <span className="text-preset-7 text-neutral-600">
                  (Last 5 Check-ins)
                </span>
              </span>
              <div className="rounded-16 flex flex-col gap-3 bg-blue-100 px-4 py-10 md:px-5">
                <span className="text-preset-4 text-neutral-900">
                  Not enough data yet!
                </span>
                <p className="text-preset-7 text-neutral-900">
                  Track 5 nights to view average sleep.
                </p>
                <img
                  src={BgPatternAverages}
                  alt="Background averages pattern"
                  className="absolute top-0 -right-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
