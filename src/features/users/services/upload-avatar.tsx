import { api } from "@/api/client";
import type { User } from "@/features/users/model/user.types";

export async function uploadAvatar(id: string, file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await api.put<User>(`/users/${id}/upload-avatar`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}
