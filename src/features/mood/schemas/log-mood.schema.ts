import {
  FEEL_TAGS,
  MOOD_OPTIONS,
  SLEEP_HOURS_OPTIONS,
} from "@/features/mood/model/mood.constants";
import * as z from "zod";

export const logMoodSchema = z.object({
  mood: z.enum(
    MOOD_OPTIONS.map((moodOption) => moodOption.value),
    {
      error: "Please select a mood before continuing.",
    },
  ),
  feelings: z
    .array(z.enum(FEEL_TAGS.map((feelTag) => feelTag.value)))
    .min(1, {
      error: "Please select atleast a tag before continuing.",
    })
    .max(3, {
      error: "You can only select a maximum of 3 tags.",
    }),
  journalEntry: z
    .string()
    .min(1, {
      error: "Please write a few words about your day before continuing.",
    })
    .max(150),
  sleepHours: z.enum(
    SLEEP_HOURS_OPTIONS.map((sleepHoursOption) => sleepHoursOption.value),
    {
      error: "Please select how many hours did you sleep before continuing.",
    },
  ),
});
