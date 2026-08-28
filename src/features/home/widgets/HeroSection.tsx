import { useGetMe } from "@/features/auth/hooks/use-get-me";

export function HeroSection() {
  const { data: user } = useGetMe();

  const currentDateFormatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="flex flex-col gap-y-4 text-center md:gap-y-2.5">
      <h2 className="text-preset-3-mobile md:text-preset-3 truncate text-blue-600">
        Hello, {user?.name}
      </h2>
      <h1 className="text-preset-1-mobile md:text-preset-1 text-neutral-900">
        How are you feeling today?
      </h1>
      <span className="text-preset-6 text-neutral-600">
        {currentDateFormatted}
      </span>
    </section>
  );
}
