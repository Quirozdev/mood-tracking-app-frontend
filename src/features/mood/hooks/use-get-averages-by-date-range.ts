import { getAveragesByDateRange } from "@/features/mood/services/get-averages-by-date-range";
import { useQuery } from "@tanstack/react-query";

export function useGetAveragesByDateRange(from: string, to: string) {
  return useQuery({
    queryKey: ["mood-averages", from, to],
    queryFn: () => {
      return getAveragesByDateRange(from, to);
    },
  });
}
