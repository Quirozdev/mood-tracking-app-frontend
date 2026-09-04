import BgPatternAverages from "@/assets/images/bg-pattern-averages.svg";
import { EmptyStateAverageCard } from "@/features/home/components/EmptyStateAverageCard";
import { getMetadata } from "@/features/mood/lib/mood";
import type { MoodAverages, MoodEntry } from "@/features/mood/model/mood.types";
import {
  moodToValue,
  SLEEP_HOURS_OPTIONS,
  sleepHoursToValue,
} from "@/features/mood/model/mood.constants";
import clsx from "clsx";
import { SameTrendArrow } from "@/assets/icons/SameTrendArrow";
import { IncreasedTrendArrow } from "@/assets/icons/IncreasedTrendArrow";
import { DecreasedTrendArrow } from "@/assets/icons/DecreasedTrendArrow";
import { SleepIcon } from "@/assets/icons/SleepIcon";

type Props = {
  todayMoodEntry?: MoodEntry;
  title: string;
  emptyStateTitle: string;
  emptyStateText: string;
} & (
  | {
      type: "mood";
      data: MoodAverages["mood"];
    }
  | {
      type: "sleepHours";
      data: MoodAverages["sleepHours"];
    }
);

export function AverageCard({ ...props }: Props) {
  if (props.data.days === 0) {
    return <EmptyStateAverageCard type={props.type} />;
  }

  const { alt, colorClass, icon } = getCardMetadata();

  const { component, text } = getTrend();

  function getTrend() {
    switch (props.type) {
      case "mood": {
        if (!props.todayMoodEntry?.mood) {
          return {
            component: null,
            text: "Please log your mood today to compare it to average",
          };
        }
        const moodValue = moodToValue[props.todayMoodEntry?.mood];
        if (moodValue > props.data.average) {
          return {
            component: <IncreasedTrendArrow fill="var(--color-neutral-900)" />,
            text: `Increase from the previous ${props.data.days} check-ins`,
          };
        } else if (moodValue < props.data.average) {
          return {
            component: <DecreasedTrendArrow fill="var(--color-neutral-900)" />,
            text: `Decrease from the previous ${props.data.days} check-ins`,
          };
        } else {
          return {
            component: <SameTrendArrow fill="var(--color-neutral-900)" />,
            text: `Same as the previous ${props.data.days} check-ins`,
          };
        }
      }

      case "sleepHours": {
        if (!props.todayMoodEntry?.sleepHours) {
          return {
            component: null,
            text: "Please log your mood today to compare it to average",
          };
        }
        const sleepHoursValue =
          sleepHoursToValue[props.todayMoodEntry.sleepHours];
        if (sleepHoursValue > props.data.average) {
          return {
            component: <IncreasedTrendArrow fill="var(--color-neutral-0)" />,
            text: `Increase from the previous ${props.data.days} check-ins`,
          };
        } else if (sleepHoursValue < props.data.average) {
          return {
            component: <DecreasedTrendArrow fill="var(--color-neutral-0)" />,
            text: `Decrease from the previous ${props.data.days} check-ins`,
          };
        } else {
          return {
            component: <SameTrendArrow fill="var(--color-neutral-0)" />,
            text: `Same as the previous ${props.data.days} check-ins`,
          };
        }
      }
    }
  }

  function getCardMetadata(): {
    alt: string;
    colorClass: string;
    icon: string | null;
  } {
    switch (props.type) {
      case "mood":
        return getMetadata(props.data.value);

      case "sleepHours":
        return {
          alt: SLEEP_HOURS_OPTIONS.find(
            (sleepHoursOption) => sleepHoursOption.value === props.data.value,
          )?.label as string,
          colorClass: "bg-blue-600",
          icon: null,
        };
    }
  }

  return (
    <article>
      <div className="relative flex flex-col gap-y-3 overflow-hidden">
        <span className="text-preset-5 text-neutral-900">
          {props.title} {""}
          <span className="text-preset-7 text-neutral-600">
            Last {props.data.days} Check-ins
          </span>
        </span>
        <div
          className={clsx(
            "rounded-16 flex flex-col gap-3 px-4 py-10 md:px-5",
            colorClass,
          )}
        >
          <div className="flex items-center gap-x-3 xl:gap-x-4">
            {props.type === "mood" ? (
              <img src={icon} alt={alt} className="h-6 w-6" />
            ) : (
              <SleepIcon fill="var(--color-neutral-0" />
            )}
            <span
              className={clsx(
                "text-preset-4",
                props.type === "mood" && "text-neutral-900",
                props.type === "sleepHours" && "text-neutral-0",
              )}
            >
              {alt}
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            {component}
            <p
              className={clsx(
                "text-preset-7",

                props.type === "mood" && "text-neutral-900",
                props.type === "sleepHours" && "text-neutral-0",
              )}
            >
              {text}
            </p>
          </div>
          <img
            src={BgPatternAverages}
            alt="Background averages pattern"
            className="absolute top-0 -right-40"
          />
        </div>
      </div>
    </article>
  );
}
