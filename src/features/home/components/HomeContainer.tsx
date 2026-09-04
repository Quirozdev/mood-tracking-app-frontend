import clsx from "clsx";
import type React from "react";

interface Props extends React.ComponentPropsWithRef<"section"> {
  variant?: "small" | "large";
}

export function HomeContainer({ children, className, ...props }: Props) {
  const variant = props.variant ?? "small";
  return (
    <article
      className={clsx(
        "rounded-16 bg-neutral-0 relative overflow-hidden border border-blue-100 md:flex md:justify-between md:gap-x-8",
        variant === "small" && "p-5",
        variant === "large" && "px-4 py-8 md:px-8",
        className,
      )}
    >
      {children}
    </article>
  );
}
