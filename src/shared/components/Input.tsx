import { ErrorMessage } from "@/shared/components/ErrorMessage";
import clsx from "clsx";
import React from "react";

interface Props extends React.ComponentPropsWithRef<"input"> {
  invalid?: boolean;
  errorMessage?: string;
}

export function Input({ invalid, errorMessage, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      <input
        className={clsx(
          "rounded-10 text-preset-6-regular px-4 py-3 text-neutral-900 shadow-[0px_1px_2px_rgba(33,33,77,0.05)] outline-1 outline-neutral-300 placeholder:text-neutral-600",
          invalid
            ? "outline-red-700"
            : "hover:outline-neutral-600 focus:shadow-[0px_0px_0px_3px_var(--color-neutral-0),0px_0px_0px_5px_var(--color-blue-600)]",
        )}
        {...props}
      />
      {errorMessage && <ErrorMessage text={errorMessage} />}
    </div>
  );
}
