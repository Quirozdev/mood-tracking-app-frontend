import { SLEEP_HOURS_OPTIONS } from "@/features/mood/model/mood.constants";
import type { logMoodSchema } from "@/features/mood/schemas/log-mood.schema";
import { RadioInput } from "@/shared/components/RadioInput";
import { Controller, useFormContext } from "react-hook-form";
import type z from "zod";

export function MoodFormFourthStep() {
  const { control } = useFormContext<z.infer<typeof logMoodSchema>>();

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        How many hours did you sleep last night?
      </h4>
      <Controller
        name="sleepHours"
        control={control}
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-y-3">
              {SLEEP_HOURS_OPTIONS.map((sleepHourOption) => {
                return (
                  <RadioInput
                    name={field.name}
                    key={sleepHourOption.value}
                    label={sleepHourOption.label}
                    value={sleepHourOption.value}
                    checked={field.value === sleepHourOption.value}
                    onChange={field.onChange}
                  />
                );
              })}
            </div>
          );
        }}
      />
    </div>
  );
}
