import { api } from "@/api/client";
import type {
  GetMoodEntriesInput,
  GetMoodEntriesResponse,
} from "@/features/mood/model/mood.types";

export async function getMoodEntries(
  getMoodEntriesInput?: GetMoodEntriesInput,
) {
  const { data } = await api.get<GetMoodEntriesResponse[]>("/moods/entries", {
    params: {
      ...getMoodEntriesInput,
    },
  });
  return data;
}
