import clsx from "clsx";
import type React from "react";
import CheckIcon from "@/assets/images/icon-check.svg";

interface Props extends React.ComponentPropsWithRef<"input"> {
  label: string;
  value: string;
  checked: boolean;
}

export function FeelTagCheckbox({ label, value, checked, ...props }: Props) {
  return (
    <label
      htmlFor={`feel_tag_checkbox_${value}`}
      className={clsx(
        "rounded-10 bg-neutral-0 flex items-center gap-x-2 border-2 px-4 py-3",
        checked ? "border-blue-600" : "border-blue-100",
      )}
    >
      <div className="relative flex items-center">
        <input
          type="checkbox"
          value={value}
          id={`feel_tag_checkbox_${value}`}
          checked={checked}
          className={clsx(
            "rounded-4 h-4 w-4 appearance-none",
            checked
              ? "bg-blue-600"
              : "bg-neutral-0 border-[1.5px] border-blue-200",
          )}
          {...props}
        />
        {checked && (
          <img
            src={CheckIcon}
            alt="Check icon"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </div>
      <span className="text-preset-6-regular text-neutral-900">{label}</span>
    </label>
  );
}
