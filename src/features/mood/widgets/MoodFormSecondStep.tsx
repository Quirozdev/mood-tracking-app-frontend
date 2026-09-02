import { FeelTagCheckbox } from "@/features/mood/components/FeelTagCheckbox";
import { FEEL_TAGS } from "@/features/mood/model/mood.constants";
import type { logMoodSchema } from "@/features/mood/schemas/log-mood.schema";
import type React from "react";
import { Controller, useFormContext } from "react-hook-form";
import * as z from "zod";

export function MoodFormSecondStep() {
  const { control } = useFormContext<z.infer<typeof logMoodSchema>>();

  function getUpdatedTags(
    selectedTags: string[],
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    const checked = e.target.checked;
    if (checked) {
      return [...selectedTags, e.target.value];
    }
    return selectedTags.filter((tag) => tag !== e.target.value);
  }

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <div className="flex flex-col gap-1.5">
        <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
          How did you feel?
        </h4>
        <span className="text-preset-6 text-neutral-600">
          Select up to three tags:
        </span>
      </div>
      <Controller
        name="feelings"
        control={control}
        render={({ field }) => {
          return (
            <div className="flex flex-wrap gap-x-4 gap-y-3">
              {FEEL_TAGS.map((feelTag) => {
                return (
                  <FeelTagCheckbox
                    key={feelTag.value}
                    name={field.name}
                    label={feelTag.label}
                    value={feelTag.value}
                    checked={field.value?.includes(feelTag.value)}
                    onChange={(e) => {
                      field.onChange(getUpdatedTags(field.value, e));
                    }}
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
