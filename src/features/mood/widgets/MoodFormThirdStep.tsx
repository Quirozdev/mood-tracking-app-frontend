import type { logMoodSchema } from "@/features/mood/schemas/log-mood.schema";
import { Counter } from "@/shared/components/Counter";
import { TextArea } from "@/shared/components/TextArea";
import { Controller, useFormContext } from "react-hook-form";
import type z from "zod";

export function MoodFormThirdStep() {
  const { control } = useFormContext<z.infer<typeof logMoodSchema>>();

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        Write about your day...
      </h4>
      <Controller
        name="journalEntry"
        control={control}
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-y-2">
              <TextArea
                name={field.name}
                placeholder="Today, I felt..."
                maxLength={150}
                rows={5}
                value={field.value}
                onChange={field.onChange}
              />
              <Counter
                count={field.value.length}
                max={150}
                className="self-end"
              />
            </div>
          );
        }}
      />
    </div>
  );
}
