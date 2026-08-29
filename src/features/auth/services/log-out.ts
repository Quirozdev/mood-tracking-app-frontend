import { api } from "@/api/client";

export async function logOut() {
  return await api.post("/auth/logout");
}
