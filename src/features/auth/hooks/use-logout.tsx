import { logOut } from "@/features/auth/services/log-out";
import { useMutation } from "@tanstack/react-query";

export function useLogout() {
  return useMutation({
    mutationFn: () => {
      return logOut();
    },
  });
}
