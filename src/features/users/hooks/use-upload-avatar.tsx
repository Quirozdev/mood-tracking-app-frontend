import { uploadAvatar } from "@/features/users/services/upload-avatar";
import { useMutation } from "@tanstack/react-query";

export function useUploadAvatar() {
  return useMutation({
    mutationFn: ({ id, file }: { id: string; file: File }) => {
      return uploadAvatar(id, file);
    },
  });
}
