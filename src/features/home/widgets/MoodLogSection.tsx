import type { MoodEntry } from "@/features/mood/model/mood.types";
import { MoodCard } from "@/features/home/components/MoodCard";
import { SleepCard } from "@/features/home/components/SleepCard";
import { ReflectionCard } from "@/features/home/components/ReflectionCard";

interface Props {
  moodEntry: MoodEntry;
}

export function MoodLogSection({ moodEntry }: Props) {
  return (
    <section className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-8">
      <MoodCard mood={moodEntry.mood} className="xl:max-w-2xl" />
      <div className="flex flex-1 flex-col gap-y-5">
        <SleepCard sleepHours={moodEntry.sleepHours} />
        <ReflectionCard
          journalEntry={moodEntry.journalEntry}
          feelings={moodEntry.feelings}
          className="flex-1"
        />
      </div>
    </section>
  );
}
