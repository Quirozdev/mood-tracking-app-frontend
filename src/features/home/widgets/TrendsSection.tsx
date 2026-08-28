import clsx from "clsx";
import type React from "react";

interface Props extends React.ComponentPropsWithRef<"section"> {}

export function TrendsSection({ className }: Props) {
  return (
    <section
      className={clsx(
        "bg-neutral-0 border-box rounded-16 border border-blue-100 px-4 py-5 md:px-5 md:py-8 xl:px-8",
        className,
      )}
    >
      <span className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        Mood and sleep trends
      </span>
    </section>
  );
}
