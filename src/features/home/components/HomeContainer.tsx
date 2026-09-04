import type React from "react";

type Props = React.ComponentPropsWithRef<"section">;

export function HomeContainer({ children }: Props) {
  return (
    <article className="rounded-16 bg-neutral-0 relative overflow-hidden border border-blue-100 px-4 py-8 md:flex md:justify-between md:gap-x-8 md:px-8">
      {children}
    </article>
  );
}
