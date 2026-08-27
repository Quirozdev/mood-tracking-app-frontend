import clsx from "clsx";

interface Props extends React.ComponentPropsWithRef<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({ children, className, ...props }: Props) {
  const variant = props.variant || "primary";

  return (
    <button
      className={clsx(
        className,
        "not-disabled:cursor-pointer focus:shadow-[0px_0px_0px_3px_var(--color-neutral-0),0px_0px_0px_5px_var(--color-blue-600)] disabled:bg-blue-200",
        variant === "primary" &&
          "text-preset-5 text-neutral-0 rounded-10 bg-blue-600 px-8 py-3 hover:bg-blue-700",
        variant === "secondary" &&
          "text-preset-6 bg-neutral-0 rounded-8 px-4 py-2 text-neutral-900 outline-1 outline-neutral-300 hover:outline-neutral-900 focus:outline-neutral-900",
      )}
      {...props}
    >
      {children}
    </button>
  );
}
