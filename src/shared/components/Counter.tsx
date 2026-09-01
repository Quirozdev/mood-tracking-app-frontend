import clsx from "clsx";
import type React from "react";

interface Props extends React.ComponentPropsWithRef<"span"> {
  count: number;
  max: number;
}

export function Counter({ count, max, className, ...props }: Props) {
  return (
    <span
      className={clsx("text-preset-8 text-neutral-600", className)}
      {...props}
    >
      {count}/{max}
    </span>
  );
}
