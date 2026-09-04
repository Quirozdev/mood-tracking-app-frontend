import { api } from "@/api/client";
import type { MoodAverages } from "@/features/mood/model/mood.types";

export async function getAveragesByDateRange(from: string, to: string) {
  const { data } = await api.get<MoodAverages>("/moods/averages", {
    params: {
      from,
      to,
    },
  });
  return data;
}
