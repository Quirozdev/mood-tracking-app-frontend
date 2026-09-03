import type { LogMoodInput } from "@/features/mood/model/mood.types";
import { logMood } from "@/features/mood/services/log-mood";
import { useMutation } from "@tanstack/react-query";

export function useLogMood() {
  return useMutation({
    mutationFn: ({
      day,
      logMoodInput,
    }: {
      day: string;
      logMoodInput: LogMoodInput;
    }) => {
      return logMood(day, logMoodInput);
    },
  });
}
