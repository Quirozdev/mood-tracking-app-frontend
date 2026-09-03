import { api } from "@/api/client";
import type { LogMoodInput, MoodEntry } from "@/features/mood/model/mood.types";

export async function logMoodEntry(day: string, logMoodInput: LogMoodInput) {
  const { data } = await api.put<MoodEntry>(`/moods/${day}`, logMoodInput);
  return data;
}
