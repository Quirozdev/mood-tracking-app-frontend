import { AverageCard } from "@/features/home/components/AverageCard";
import type { MoodAverages, MoodEntry } from "@/features/mood/model/mood.types";
import clsx from "clsx";

interface Props extends React.ComponentPropsWithRef<"section"> {
  todayMoodEntry?: MoodEntry;
  averages: MoodAverages;
}

export function AveragesSection({
  averages,
  todayMoodEntry,
  className,
}: Props) {
  return (
    <section
      className={clsx(
        "bg-neutral-0 rounded-16 box-border flex flex-col gap-y-6 border border-blue-100 px-4 py-5 md:px-5 md:py-6",
        className,
      )}
    >
      <AverageCard
        type="mood"
        todayMoodEntry={todayMoodEntry}
        data={averages.mood}
        title="Average Mood"
        emptyStateTitle="Keep tracking!"
        emptyStateText="Log 5 check-ins to see your average mood."
      />
      <AverageCard
        type="sleepHours"
        todayMoodEntry={todayMoodEntry}
        data={averages.sleepHours}
        title="Average Sleep"
        emptyStateTitle="Not enough data yet!"
        emptyStateText="Track 5 nights to view average sleep."
      />
    </section>
  );
}
