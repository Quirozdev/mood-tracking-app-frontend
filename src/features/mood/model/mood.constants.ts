import type { Mood, SleepHours } from "@/features/mood/model/mood.types";

export const MOOD_OPTIONS: Mood[] = [
  "very_happy",
  "happy",
  "neutral",
  "sad",
  "very_sad",
];

export const SLEEP_HOURS_OPTIONS: { label: string; value: SleepHours }[] = [
  {
    value: "9",
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
