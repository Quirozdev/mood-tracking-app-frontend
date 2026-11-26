import { api } from "@/api/client";
import type { MoodAverages } from "@/features/mood/model/mood.types";

export async function getAveragesByLastCheckIns(lastCheckIns: number) {
  const { data } = await api.get<MoodAverages>("/moods/averages", {
    params: {
      lastCheckIns,
    },
  });
  return data;
}
