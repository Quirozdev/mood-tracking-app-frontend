import { api } from "@/api/client";
import type { User } from "@/features/users/model/user.types";

export async function getMe() {
  const { data } = await api.get<User>("/auth/me");
  return data;
}
