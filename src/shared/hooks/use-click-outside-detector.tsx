import React, { useEffect } from "react";

interface Props extends React.ComponentPropsWithRef<any> {
  onClickOutside: (e: PointerEvent) => void;
}

export function useClickOutsideDetector({ ref, onClickOutside }: Props) {
  useEffect(() => {
    const handleOutsideClick = (e: PointerEvent) => {
      if (!ref.current) return;

      const refContainsClickedElement = ref.current?.contains(e.target as Node);

      if (!refContainsClickedElement) {
        onClickOutside(e);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);
}
