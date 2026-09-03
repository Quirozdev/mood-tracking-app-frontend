import { api } from "@/api/client";
import type { MoodEntry } from "@/features/mood/model/mood.types";

export async function getMoodEntryByDay(day: string) {
  const { data } = await api.get<MoodEntry>(`/moods/${day}`);
  return data;
}
