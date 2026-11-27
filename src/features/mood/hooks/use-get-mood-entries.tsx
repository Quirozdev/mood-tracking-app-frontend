import type { GetMoodEntriesInput } from "@/features/mood/model/mood.types";
import { getMoodEntries } from "@/features/mood/services/get-mood-entries";
import { useQuery } from "@tanstack/react-query";

export function useGetMoodEntries(getMoodEntriesInput?: GetMoodEntriesInput) {
  return useQuery({
    queryKey: [
      "mood-entries",
      getMoodEntriesInput?.from,
      getMoodEntriesInput?.to,
    ],
    queryFn: () => {
      return getMoodEntries(getMoodEntriesInput);
    },
    staleTime: 60 * 1000,
  });
}
