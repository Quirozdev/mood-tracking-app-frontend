import type { UpdateUserInput } from "@/features/users/model/user.types";
import { updateUser } from "@/features/users/services/update-user";
import { useMutation } from "@tanstack/react-query";

export function useUpdateUser() {
  return useMutation({
    mutationFn: ({
      id,
      updateUserInput,
    }: {
      id: string;
      updateUserInput: UpdateUserInput;
    }) => {
      return updateUser(id, updateUserInput);
    },
  });
}
