import { getMe } from "@/features/auth/services/get-me";
import { useQuery } from "@tanstack/react-query";

export const GET_ME_QUERY_KEY = "me";

export function useGetMe() {
  return useQuery({
    queryKey: [GET_ME_QUERY_KEY],
    queryFn: () => {
      return getMe();
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
}
