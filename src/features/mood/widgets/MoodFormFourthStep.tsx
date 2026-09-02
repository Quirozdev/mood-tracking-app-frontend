import { SLEEP_HOURS_OPTIONS } from "@/features/mood/model/mood.constants";
import type { SleepHours } from "@/features/mood/model/mood.types";
import { RadioInput } from "@/shared/components/RadioInput";

interface Props {
  selectedSleepHours: SleepHours;
  onSleepHoursChange: (selectedSleepHours: SleepHours) => void;
}

export function MoodFormFourthStep({
  selectedSleepHours,
  onSleepHoursChange,
}: Props) {
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        How many hours did you sleep last night?
      </h4>
      <div className="flex flex-col gap-y-3">
        {SLEEP_HOURS_OPTIONS.map((sleepHourOption) => {
          return (
            <RadioInput
              key={sleepHourOption.value}
              name="sleep_hours"
              label={sleepHourOption.label}
              value={sleepHourOption.value}
              checked={selectedSleepHours === sleepHourOption.value}
              onChange={() => {
                onSleepHoursChange(sleepHourOption.value);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
