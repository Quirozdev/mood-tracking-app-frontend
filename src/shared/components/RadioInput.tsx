import clsx from "clsx";
import type React from "react";

interface Props extends React.ComponentPropsWithRef<"input"> {
  label: string;
  value: string;
  icon?: string;
  checked: boolean;
}

export function RadioInput({ label, value, icon, checked, ...props }: Props) {
  return (
    <label
      htmlFor={`radio-${value}`}
      className={clsx(
        "rounded-10 bg-neutral-0 flex cursor-pointer items-center justify-between px-5 py-3 outline-2 focus-within:shadow-[0px_0px_0px_3px_var(--color-neutral-0),0px_0px_0px_5px_var(--color-blue-600)]",
        checked ? "outline-blue-600" : "outline-blue-100",
      )}
    >
      <span className="flex items-center gap-3">
        <input
          type="radio"
          name={`radio-${value}`}
          id={`radio-${value}`}
          value={value}
          checked={checked}
          className={clsx(
            "h-5 w-5 appearance-none rounded-full focus:outline-0",
            checked
              ? "border-5 border-blue-600"
              : "border-[1.5px] border-blue-200",
          )}
          {...props}
        />
        <span className="text-preset-5 text-neutral-900">{label}</span>
      </span>
      {icon && <img src={icon} alt={label} className="h-9.5 w-9.5" />}
    </label>
  );
}
