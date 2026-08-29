import { useEffect } from "react";

interface Props {
  key: string;
  onKeyDown: () => void;
}

export function useKeyDown({ key, onKeyDown }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        onKeyDown();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
