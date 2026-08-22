import clsx from "clsx";
import React, { useState } from "react";

interface Props extends React.ComponentPropsWithRef<"input"> {}

export function Input({ ...props }: Props) {
  const [invalid, setInvalid] = useState<boolean>(false);

  return (
    <input
      className={clsx(
        "rounded-10 text-preset-6-regular px-4 py-3 text-neutral-900 shadow-[0px_1px_2px_rgba(33,33,77,0.05)] outline-1 outline-neutral-300 placeholder:text-neutral-600",
        invalid
          ? "outline-red-700"
          : "hover:outline-neutral-600 focus:shadow-[0px_0px_0px_3px_var(--color-neutral-0),0px_0px_0px_5px_var(--color-blue-600)]",
      )}
      {...props}
    />
  );
}
