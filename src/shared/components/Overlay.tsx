import { useClickOutsideDetector } from "@/shared/hooks/use-click-outside-detector";
import { useKeyDown } from "@/shared/hooks/use-key-press";
import type React from "react";
import { useRef, type Dispatch, type SetStateAction } from "react";

interface Props extends React.ComponentPropsWithRef<"div"> {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export function Overlay({ children, isVisible, setIsVisible }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      setIsVisible(false);
    },
  });

  useClickOutsideDetector({
    ref: ref,
    onClickOutside: () => {
      setIsVisible(false);
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
              setIsVisible(false);
            }
          }}
        >
          {children}
        </div>
      </div>
    )
  );
}
