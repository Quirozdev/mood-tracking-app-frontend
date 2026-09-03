import type { LogMoodInput } from "@/features/mood/model/mood.types";
import { logMoodEntry } from "@/features/mood/services/log-mood-entry";
import { useMutation } from "@tanstack/react-query";

export function useLogMoodEntry() {
  return useMutation({
    mutationFn: ({
      day,
      logMoodInput,
    }: {
      day: string;
      logMoodInput: LogMoodInput;
    }) => {
      return logMoodEntry(day, logMoodInput);
    },
  });
}
