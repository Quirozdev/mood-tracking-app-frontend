import type { MoodEntry } from "@/features/mood/model/mood.types";
import { MoodCard } from "@/features/home/components/MoodCard";

interface Props {
  moodEntry: MoodEntry;
}

export function MoodLogSection({ moodEntry }: Props) {
  return (
    <section className="flex flex-col gap-y-5 xl:flex-row xl:gap-x-8">
      <MoodCard mood={moodEntry.mood} />
    </section>
  );
}
