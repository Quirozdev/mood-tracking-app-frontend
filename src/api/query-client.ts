import { handleApiError } from "@/api/error-handler";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: Error) => {
      handleApiError(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: Error) => {
      handleApiError(error);
    },
  }),
});
