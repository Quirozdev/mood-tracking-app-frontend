import type { ClassValue } from "clsx";
import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "preset-1",
        "preset-1-mobile",
        "preset-2",
        "preset-2-mobile",
        "preset-3",
        "preset-3-mobile",
        "preset-4",
        "preset-4-regular",
        "preset-5",
        "preset-6",
        "preset-6-italic",
        "preset-6-regular",
        "preset-7",
        "preset-8",
        "preset-9",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
