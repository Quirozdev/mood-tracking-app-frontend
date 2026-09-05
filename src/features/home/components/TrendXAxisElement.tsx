import { getMetadata } from "@/features/mood/lib/mood";
import type { GetMoodEntriesResponse } from "@/features/mood/model/mood.types";
import {
  getDayFromDateString,
  getMonthNameFromDateString,
} from "@/shared/lib/dates";
import clsx from "clsx";

interface Props {
  moodEntry: GetMoodEntriesResponse;
  heightPerYValue: number;
}

export function TrendXAxisElement({ moodEntry, heightPerYValue }: Props) {
  const { icon, alt, colorClass } = getMetadata(moodEntry.mood);
  const monthName = getMonthNameFromDateString(moodEntry.day);
  const day = getDayFromDateString(moodEntry.day);

  const height = getHeight();

  function getHeight(): number {
    switch (moodEntry.sleepHours) {
      case "0-2_hours":
        return heightPerYValue * 1;
      case "3-4_hours":
        return heightPerYValue * 2;
      case "5-6_hours":
        return heightPerYValue * 3;
      case "7-8_hours":
        return heightPerYValue * 4;
      case "9+":
        return heightPerYValue * 5;
    }
  }

  return (
    <div>
      <div
        /* mb is a little patch to avoid vertical scroll to appear when horizontal one appears */
        className="mb-0.5 flex flex-col items-center justify-end gap-y-1.5 text-center"
        style={{
          minHeight: `${height}px`,
        }}
      >
        <div
          className={clsx(
            "animate-height-grow w-10 origin-bottom rounded-full",
            colorClass,
          )}
          style={{
            height: `${height}px`,
          }}
        >
          <img
            src={icon}
            alt={alt}
            className="mx-auto animate-[opacity_4s_ease-in-out_1,spin_4s_ease-in-out_1] px-1.25 py-1.25"
          />
        </div>
        <span className="text-preset-9 text-neutral-900">{monthName}</span>
        <span className="text-preset-8 text-neutral-900">{day}</span>
      </div>
    </div>
  );
}
