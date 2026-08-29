import type React from "react";

interface Props extends React.ComponentPropsWithRef<"div"> {
  isVisible: boolean;
}

export function Overlay({ children, isVisible, ref }: Props) {
  return (
    isVisible && (
      <div>
        <div className="fixed top-0 left-0 z-10 min-h-screen w-full bg-neutral-900 opacity-70"></div>
        <div ref={ref} className="fixed left-1/2 z-20 w-full -translate-x-1/2">
          {children}
        </div>
      </div>
    )
  );
}
