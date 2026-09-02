import VeryHappyFaceIcon from "@/assets/images/icon-very-happy-color.svg";
import HappyFaceIcon from "@/assets/images/icon-happy-color.svg";
import NeutralFaceIcon from "@/assets/images/icon-neutral-color.svg";
import SadFaceIcon from "@/assets/images/icon-sad-color.svg";
import VerySadFaceIcon from "@/assets/images/icon-very-sad-color.svg";
import type { Mood } from "@/features/mood/model/mood.types";
import { RadioInput } from "@/shared/components/RadioInput";

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
    <RadioInput
      label={metadata.text}
      value={mood}
      name="mood"
      icon={metadata.icon}
      checked={isSelected}
      onChange={() => onMoodChange(mood)}
    />
  );
}
