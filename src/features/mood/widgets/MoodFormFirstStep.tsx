import { SelectableMood } from "@/features/mood/components/SelectableMood";
import { MOOD_OPTIONS } from "@/features/mood/model/mood.constants";
import type { Mood } from "@/features/mood/model/mood.types";

interface Props {
  selectedMood: Mood;
  onMoodChange: (mood: Mood) => void;
}

export function MoodFormFirstStep({ selectedMood, onMoodChange }: Props) {
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        How was your mood today?
      </h4>
      <div className="flex flex-col gap-y-3">
        {MOOD_OPTIONS.map((moodOption) => {
          return (
            <SelectableMood
              key={moodOption.value}
              mood={moodOption.value}
              label={moodOption.label}
              icon={moodOption.icon}
              isSelected={selectedMood === moodOption.value}
              onMoodChange={onMoodChange}
            />
          );
        })}
      </div>
    </div>
  );
}
