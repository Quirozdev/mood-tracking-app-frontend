import clsx from "clsx";
import VeryHappyFaceIcon from "@/assets/images/icon-very-happy-color.svg";
import HappyFaceIcon from "@/assets/images/icon-happy-color.svg";
import NeutralFaceIcon from "@/assets/images/icon-neutral-color.svg";
import SadFaceIcon from "@/assets/images/icon-sad-color.svg";
import VerySadFaceIcon from "@/assets/images/icon-very-sad-color.svg";
import type { Mood } from "@/features/mood/model/mood.types";

interface Props {
  mood: Mood;
  isSelected: boolean;
  onMoodChange: (mood: Mood) => void;
}

export function SelectableMood({ mood, isSelected, onMoodChange }: Props) {
  const metadata = getMetadata();

  function getMetadata(): { icon: string; text: string } {
    switch (mood) {
      case "very_sad":
        return {
          icon: VerySadFaceIcon,
          text: "Very sad face",
        };
      case "sad":
        return {
          icon: SadFaceIcon,
          text: "Sad face",
        };
      case "neutral":
        return {
          icon: NeutralFaceIcon,
          text: "Neutral face",
        };
      case "happy":
        return {
          icon: HappyFaceIcon,
          text: "Happy face",
        };
      case "very_happy":
        return {
          icon: VeryHappyFaceIcon,
          text: "Very happy face",
        };
    }
  }

  return (
    <label
      htmlFor={`mood-${mood}`}
      className={clsx(
        "rounded-10 bg-neutral-0 flex cursor-pointer items-center justify-between px-5 py-3 outline-2 focus-within:shadow-[0px_0px_0px_3px_var(--color-neutral-0),0px_0px_0px_5px_var(--color-blue-600)]",
        isSelected ? "outline-blue-600" : "outline-blue-100",
      )}
    >
      <span className="flex items-center gap-3">
        <input
          type="radio"
          name={`mood-${mood}`}
          id={`mood-${mood}`}
          value={mood}
          checked={isSelected}
          onChange={() => onMoodChange(mood)}
          className={clsx(
            "h-5 w-5 appearance-none rounded-full",
            isSelected
              ? "border-5 border-blue-600"
              : "border-[1.5px] border-blue-200",
          )}
        />
        <span className="text-preset-5 text-neutral-900">{metadata.text}</span>
      </span>
      <img src={metadata.icon} alt={metadata.text} className="h-9.5 w-9.5" />
    </label>
  );
}
