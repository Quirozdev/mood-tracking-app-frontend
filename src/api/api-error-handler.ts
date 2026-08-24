import type { ApiError } from "@/api/types/errors";
import { showToast } from "@/features/toast/lib/toast";
import axios from "axios";

export function handleApiError(error: Error) {
  if (axios.isAxiosError<ApiError>(error) && error.response?.data?.message) {
    showToast("error", error.response.data.message);
    return;
  }
  showToast("error", "An unexpected error occured, please try again later");
}
