import { useClickOutsideDetector } from "@/shared/hooks/use-click-outside-detector";
import { useKeyDown } from "@/shared/hooks/use-key-press";
import type React from "react";
import { useRef } from "react";

interface Props extends React.ComponentPropsWithRef<"div"> {
  isVisible: boolean;
  onVisibilityChange: (isVisible: boolean) => void;
}

export function Overlay({ children, isVisible, onVisibilityChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      onVisibilityChange(false);
    },
  });

  useClickOutsideDetector({
    ref: ref,
    onClickOutside: (e) => {
      const mouseButtonPressed = e.button;
      // right click, i dont want to close overlay on right click
      if (mouseButtonPressed === 2) return;
      onVisibilityChange(false);
    },
  });

  return (
    isVisible && (
      <div>
        <div className="fixed inset-0 z-10 min-h-screen w-full bg-neutral-900 opacity-70"></div>
        <div
          ref={ref}
          className="fixed top-20 left-1/2 z-20 w-full -translate-x-1/2"
          onClick={(e) => {
            // because i put w-full, when clicking at the sides of children, that will count as still
            // clicking this div container, so this is a little patching for that case
            if (e.target === ref.current) {
              onVisibilityChange(false);
            }
          }}
        >
          {children}
        </div>
      </div>
    )
  );
}
