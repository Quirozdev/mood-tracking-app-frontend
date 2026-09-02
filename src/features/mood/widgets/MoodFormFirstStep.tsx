import { SelectableMood } from "@/features/mood/components/SelectableMood";
import { MOOD_OPTIONS } from "@/features/mood/model/mood.constants";
import { logMoodSchema } from "@/features/mood/schemas/log-mood.schema";
import { Controller, useFormContext } from "react-hook-form";
import * as z from "zod";

export function MoodFormFirstStep() {
  const { control } = useFormContext<z.infer<typeof logMoodSchema>>();

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        How was your mood today?
      </h4>
      <div className="flex flex-col gap-y-3">
        <Controller
          name="mood"
          control={control}
          render={({ field }) => {
            return (
              <>
                {MOOD_OPTIONS.map((moodOption) => {
                  return (
                    <SelectableMood
                      key={moodOption.value}
                      name={field.name}
                      mood={moodOption.value}
                      label={moodOption.label}
                      icon={moodOption.icon}
                      isSelected={field.value === moodOption.value}
                      onMoodChange={field.onChange}
                    />
                  );
                })}
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
