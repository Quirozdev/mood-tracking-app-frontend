import { signIn } from "@/features/auth/services/sign-in";
import type { LoginInput } from "@/features/auth/model/auth.types";
import { useMutation } from "@tanstack/react-query";

export function useSignIn() {
  return useMutation({
    mutationFn: ({ email, password }: LoginInput) => {
      return signIn({ email, password });
    },
  });
}
