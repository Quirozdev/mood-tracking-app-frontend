import { getMoodEntries } from "@/features/mood/services/get-mood-entries";
import { useQuery } from "@tanstack/react-query";

export function useGetMoodEntries() {
  return useQuery({
    queryKey: ["mood-entries"],
    queryFn: () => {
      return getMoodEntries();
    },
  });
}
