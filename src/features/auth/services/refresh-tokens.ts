import { authApi } from "@/api/client";
import type { RefreshTokensResponse } from "@/features/auth/model/auth.types";

export async function refreshTokens() {
  const { data } = await authApi.post<RefreshTokensResponse>(
    "/auth/refresh-tokens",
  );
  return data;
}
