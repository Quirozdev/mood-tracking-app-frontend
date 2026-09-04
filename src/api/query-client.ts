import { handleApiError } from "@/api/api-error-handler";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: Error, query) => {
      if (query?.meta?.shouldBeHandledByGlobalErrorHandler === false) {
        return;
      }
      handleApiError(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: Error, _, __, mutation) => {
      if (mutation?.meta?.shouldBeHandledByGlobalErrorHandler === false) {
        return;
      }
      handleApiError(error);
    },
  }),
});
