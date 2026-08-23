import { api } from "@/api/client";
import type { CreateUserInput, User } from "@/features/users/types/user.types";

export async function createUser({ email, password }: CreateUserInput) {
  const { data } = await api.post<User>("/users", {
    email,
    password,
  });
  return data;
}
