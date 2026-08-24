import { api } from "@/api/client";
import type {
  LoginInput,
  LoginResponse,
} from "@/features/auth/types/auth.types";

export async function signIn({ email, password }: LoginInput) {
  const { data } = await api.post<LoginResponse>("/auth/login", {
    email,
    password,
  });
  return data;
}
