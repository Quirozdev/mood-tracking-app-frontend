import { HomeContainer } from "@/features/home/components/HomeContainer";
import SleepIcon from "@/assets/images/icon-sleep.svg";
import type { SleepHours } from "@/features/mood/model/mood.types";
import { SLEEP_HOURS_OPTIONS } from "@/features/mood/model/mood.constants";
import type React from "react";

interface Props extends React.ComponentPropsWithRef<typeof HomeContainer> {
  sleepHours: SleepHours;
}

export function SleepCard({ sleepHours, className }: Props) {
  const sleepHoursMetadata = SLEEP_HOURS_OPTIONS.find(
    (sleepHoursOptions) => sleepHoursOptions.value === sleepHours,
  );

  return (
    <HomeContainer variant="small" className={className}>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <img src={SleepIcon} alt="Sleep Icon" />
          <p className="text-preset-6 text-neutral-600">Sleep</p>
        </div>
        <p className="text-preset-3 text-neutral-900">
          {sleepHoursMetadata?.label}
        </p>
      </div>
    </HomeContainer>
  );
}
