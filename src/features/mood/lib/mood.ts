import { MOOD_QUOTES } from "@/features/mood/model/mood.constants";
import type { Mood } from "@/features/mood/model/mood.types";
import VerySadFaceWhiteIcon from "@/assets/images/icon-very-sad-white.svg";
import SadFaceWhiteIcon from "@/assets/images/icon-sad-white.svg";
import NeutralFaceWhiteIcon from "@/assets/images/icon-neutral-white.svg";
import HappyFaceWhiteIcon from "@/assets/images/icon-happy-white.svg";
import VeryHappyFaceWhiteIcon from "@/assets/images/icon-very-happy-white.svg";

export function getMoodQuote(mood: Mood) {
  const moodQuotes = MOOD_QUOTES[mood];
  return moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
}

export function getMetadata(mood: Mood): {
  icon: string;
  alt: string;
  colorClass: string;
} {
  switch (mood) {
    case "very_sad":
      return {
        icon: VerySadFaceWhiteIcon,
        alt: "Very sad face",
        colorClass: "bg-red-300",
      };
    case "sad":
      return {
        icon: SadFaceWhiteIcon,
        alt: "Sad face",
        colorClass: "bg-indigo-200",
      };
    case "neutral":
      return {
        icon: NeutralFaceWhiteIcon,
        alt: "Neutral face",
        colorClass: "bg-blue-300",
      };
    case "happy":
      return {
        icon: HappyFaceWhiteIcon,
        alt: "Happy face",
        colorClass: "bg-green-300",
      };
    case "very_happy":
      return {
        icon: VeryHappyFaceWhiteIcon,
        alt: "Very happy face",
        colorClass: "bg-amber-300",
      };
  }
}
