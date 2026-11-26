import { getAveragesByLastCheckIns } from "@/features/mood/services/get-averages-by-last-check-ins";
import { useQuery } from "@tanstack/react-query";

export function useGetAveragesByLastCheckIns(lastCheckIns: number) {
  return useQuery({
    queryKey: ["mood-averages", lastCheckIns],
    queryFn: () => {
      return getAveragesByLastCheckIns(lastCheckIns);
    },
  });
}
