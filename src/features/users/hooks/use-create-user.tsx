import { createUser } from "@/features/users/services/create-user";
import type { CreateUserInput } from "@/features/users/types/user.types";
import { useMutation } from "@tanstack/react-query";

export function useCreateUser() {
  return useMutation({
    mutationFn: ({ email, password }: CreateUserInput) => {
      return createUser({ email, password });
    },
  });
}
