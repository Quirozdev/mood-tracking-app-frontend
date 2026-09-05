import clsx from "clsx";
import { TrendYAxisElement } from "@/features/home/components/TrendYAxisElement";
import { TrendXAxisElement } from "@/features/home/components/TrendXAxisElement";
import { useEffect, useRef, useState } from "react";
import type { GetMoodEntriesResponse } from "@/features/mood/model/mood.types";

interface Props extends React.ComponentPropsWithRef<"section"> {
  moodEntries: GetMoodEntriesResponse[];
}

export function TrendsSection({ moodEntries, className }: Props) {
  const yFirstAxisElementRef = useRef<HTMLDivElement>(null);
  const ySecondAxisElementRef = useRef<HTMLDivElement>(null);

  const [separation, setSeparation] = useState<number>(0);

  // so i can dinamycally put x axis labels at exact position and to fill each bar dynamically with correct heights instead of hardcoded ones
  function calculateSeparationFromYAxisElements() {
    return (
      (ySecondAxisElementRef.current?.offsetTop || 0) -
      (yFirstAxisElementRef.current?.offsetTop || 0)
    );
  }

  useEffect(() => {
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
        <div className="flex scrollbar-thin scrollbar-thumb-blue-200 items-end gap-x-4 self-end overflow-x-auto xl:gap-x-4.5">
          {moodEntries.map((moodEntry) => {
            return (
              <TrendXAxisElement
                key={moodEntry.id}
                moodEntry={moodEntry}
                heightPerYValue={separation}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
