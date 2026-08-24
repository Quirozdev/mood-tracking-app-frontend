import { showToast } from "@/features/toast/lib/toast";
import { AxiosError } from "axios";

export function handleApiError(error: Error) {
  if (error instanceof AxiosError && error.response?.data?.message) {
    showToast("error", error.response.data.message);
    return;
  }
  showToast("error", "An unexpected error occured, please try again later");
}
