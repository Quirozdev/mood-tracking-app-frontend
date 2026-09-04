import { MOOD_QUOTES } from "@/features/mood/model/mood.constants";
import type { Mood } from "@/features/mood/model/mood.types";

export function getMoodQuote(mood: Mood) {
  const moodQuotes = MOOD_QUOTES[mood];
  return moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
}
