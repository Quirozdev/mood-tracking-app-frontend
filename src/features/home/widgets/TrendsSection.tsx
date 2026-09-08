import clsx from "clsx";
import { TrendYAxisElement } from "@/features/home/components/TrendYAxisElement";
import { TrendXAxisElement } from "@/features/home/components/TrendXAxisElement";
import { useEffect, useRef, useState } from "react";
import type { GetMoodEntriesResponse } from "@/features/mood/model/mood.types";
import { EmptyTrendXAxisElement } from "@/features/home/components/EmptyTrendXAxisElement";
import {
  formatDateToIsoStringWithoutTime,
  getNextDaysInIsoStringFromNow,
  getPreviousDaysInIsoStringFromNow,
  subtractDaysFromDate,
} from "@/shared/lib/dates";

interface Props extends React.ComponentPropsWithRef<"section"> {
  moodEntries: GetMoodEntriesResponse[];
}

const MINIMUM_BARS_TO_SHOW_BEFORE_PREVIOUS_DAY = 0;
const MINIMUM_BARS_TO_SHOW_AFTER_LAST_DAY = 16;

export function TrendsSection({ moodEntries, className }: Props) {
  const yFirstAxisElementRef = useRef<HTMLDivElement>(null);
  const ySecondAxisElementRef = useRef<HTMLDivElement>(null);

  const [separation, setSeparation] = useState<number>(0);

  const { previousDays, nextDays } = getEmptyFilingDays();

  function getEmptyFilingDays() {
    const previousDay =
      moodEntries.length > 0
        ? moodEntries[0].day
        : formatDateToIsoStringWithoutTime(new Date());
    const nextDay =
      moodEntries.length > 0
        ? moodEntries[moodEntries.length - 1].day
        : formatDateToIsoStringWithoutTime(subtractDaysFromDate(new Date(), 1));

    const previousDays = getPreviousDaysInIsoStringFromNow(
      previousDay,
      MINIMUM_BARS_TO_SHOW_BEFORE_PREVIOUS_DAY,
    ).reverse();

    const nextDays = getNextDaysInIsoStringFromNow(
      nextDay,
      MINIMUM_BARS_TO_SHOW_AFTER_LAST_DAY - moodEntries.length,
    );

    return { previousDays, nextDays };
  }

  useEffect(() => {
    // so i can dinamycally put x axis labels at exact position and to fill each bar dynamically with correct heights instead of hardcoded ones
    function calculateSeparationFromYAxisElements() {
      return (
        (ySecondAxisElementRef.current?.offsetTop || 0) -
        (yFirstAxisElementRef.current?.offsetTop || 0)
      );
    }

    setSeparation(calculateSeparationFromYAxisElements());
  }, [yFirstAxisElementRef, ySecondAxisElementRef]);

  return (
    <section
      className={clsx(
        "bg-neutral-0 rounded-16 box-border flex min-w-0 flex-col gap-y-8 border border-blue-100 px-4 py-5 md:px-5 md:py-8 xl:px-8",
        className,
      )}
    >
      <span className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        Mood and sleep trends
      </span>

      <div className="flex gap-x-4">
        <div className="flex shrink-0 flex-col gap-y-10">
          <TrendYAxisElement text="9+ hours" ref={yFirstAxisElementRef} />
          <TrendYAxisElement text="7-8 hours" ref={ySecondAxisElementRef} />
          <TrendYAxisElement text="5-6 hours" />
          <TrendYAxisElement text="3-4 hours" />
          <TrendYAxisElement text="0-2 hours" />
        </div>
        <div className="flex w-full scrollbar-thin scrollbar-thumb-blue-200 items-end gap-x-4 self-end overflow-x-auto xl:gap-x-4.5">
          {previousDays.map((previousDay) => {
            return (
              <EmptyTrendXAxisElement key={previousDay} day={previousDay} />
            );
          })}
          {moodEntries.map((moodEntry) => {
            return (
              <TrendXAxisElement
                key={moodEntry.id}
                moodEntry={moodEntry}
                heightPerYValue={separation}
              />
            );
          })}
          {nextDays.map((nextDay) => {
            return <EmptyTrendXAxisElement key={nextDay} day={nextDay} />;
          })}
        </div>
      </div>
    </section>
  );
}
