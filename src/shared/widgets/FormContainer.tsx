import type React from "react";

type Props = React.ComponentPropsWithRef<"form">;

export function FormContainer({ children, ...props }: Props) {
  return (
    <form
      className="rounded-16 bg-neutral-0 mx-4 flex flex-col gap-8 px-8 py-10 shadow-[0px_8px_16px_rgba(32,37,41,0.08)] md:min-w-lg"
      {...props}
    >
      {children}
    </form>
  );
}
