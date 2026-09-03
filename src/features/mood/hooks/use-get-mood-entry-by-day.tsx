import { getMoodEntryByDay } from "@/features/mood/services/get-mood-entry-by-day";
import { useQuery } from "@tanstack/react-query";

export function useGetMoodEntryByDay(day: string) {
  return useQuery({
    queryKey: ["mood-entries", day],
    queryFn: () => {
      return getMoodEntryByDay(day);
    },
  });
}
