import type { Mood, SleepHours } from "@/features/mood/model/mood.types";
import VeryHappyFaceIcon from "@/assets/images/icon-very-happy-color.svg";
import HappyFaceIcon from "@/assets/images/icon-happy-color.svg";
import NeutralFaceIcon from "@/assets/images/icon-neutral-color.svg";
import SadFaceIcon from "@/assets/images/icon-sad-color.svg";
import VerySadFaceIcon from "@/assets/images/icon-very-sad-color.svg";

export const MOOD_OPTIONS: { label: string; value: Mood; icon: string }[] = [
  {
    label: "Very Happy",
    value: "very_happy",
    icon: VeryHappyFaceIcon,
  },
  {
    label: "Happy",
    value: "happy",
    icon: HappyFaceIcon,
  },
  {
    label: "Neutral",
    value: "neutral",
    icon: NeutralFaceIcon,
  },
  {
    label: "Sad",
    value: "sad",
    icon: SadFaceIcon,
  },
  {
    label: "Very Sad",
    value: "very_sad",
    icon: VerySadFaceIcon,
  },
];

export const moodToValue = {
  very_sad: -2,
  sad: -1,
  neutral: -0,
  happy: 1,
  very_happy: 2,
};

export const SLEEP_HOURS_OPTIONS: { label: string; value: SleepHours }[] = [
  {
    value: "9+",
    label: "9+ hours",
  },
  {
    value: "7-8_hours",
    label: "7-8 hours",
  },
  {
    value: "5-6_hours",
    label: "5-6 hours",
  },
  {
    value: "3-4_hours",
    label: "3-4 hours",
  },
  {
    value: "0-2_hours",
    label: "0-2 hours",
  },
];

export const sleepHoursToValue = {
  "0-2_hours": 0,
  "3-4_hours": 1,
  "5-6_hours": 2,
  "7-8_hours": 3,
  "9+": 4,
};

export const FEEL_TAGS = [
  { label: "Joyful", value: "joyful" },
  { label: "Down", value: "down" },
  { label: "Anxious", value: "anxious" },
  { label: "Calm", value: "calm" },
  { label: "Excited", value: "excited" },
  { label: "Frustrated", value: "frustrated" },
  { label: "Overwhelmed", value: "lonely" },
  { label: "Motivated", value: "motivated" },
  { label: "Irritable", value: "irritable" },
  { label: "Peaceful", value: "peaceful" },
  { label: "Tired", value: "tired" },
  { label: "Hopeful", value: "hopeful" },
  { label: "Confident", value: "confident" },
  { label: "Stressed", value: "stressed" },
  { label: "Content", value: "content" },
  { label: "Disappointed", value: "disappointed" },
  { label: "Optimistic", value: "optimistic" },
  { label: "Restless", value: "restless" },
];

export const MOOD_QUOTES: Record<Mood, string[]> = {
  very_sad: [
    "You are stronger than you think; the storm will pass.",
    "It's okay to cry. Healing begins when you let your feelings flow.",
    "Even in darkness, a spark of hope can shine bright.",
    "This moment is tough, but you've overcome challenges before.",
    "A gentle step forward, no matter how small, is still progress.",
  ],
  sad: [
    "Pain is temporary, brighter days lie ahead.",
    "Each setback is a chance to grow and learn.",
    "One small positive thought can change your entire day.",
    "It's okay to rest; self-care isn't selfish.",
    "Healing takes time - be patient and kind to yourself.",
  ],
  neutral: [
    "A calm mind can find opportunity in every moment.",
    "Sometimes the greatest triumph is simply finding peace.",
    "Take a moment to breathe; every breath is a fresh start.",
    "Even an ordinary day can hold a pleasant surprise.",
    "Balance isn't found, it's created.",
  ],
  happy: [
    "Happiness grows when it's shared with others.",
    "Celebrate even the small victories to make life extraordinary.",
    "Gratitude can turn what you have into enough.",
    "Keep smiling; your joy can be contagious.",
    "Where focus goes, energy flows - keep your focus on what lifts you.",
  ],
  very_happy: [
    "When your heart is full, share your light with the world.",
    "Savor the highs in life; they become precious memories.",
    "Joy multiplies when spread among friends.",
    "Trust your journey; you're in a beautiful place right now.",
    "Let your happiness ripple out and inspire others.",
  ],
};
