import { api } from "@/api/client";
import type { GetMoodEntriesResponse } from "@/features/mood/model/mood.types";

export async function getMoodEntries() {
  const { data } = await api.get<GetMoodEntriesResponse[]>("/moods/entries");
  return data;
}
