import { api } from "@/api/client";
import type { UpdateUserInput, User } from "@/features/users/model/user.types";

export async function updateUser(id: string, updateUserInput: UpdateUserInput) {
  const { data } = await api.put<User>(`/users/${id}`, updateUserInput);
  return data;
}
