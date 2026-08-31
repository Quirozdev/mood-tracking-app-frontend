import { SelectableMood } from "@/features/mood/components/SelectableMood";
import type { Mood } from "@/features/mood/model/mood.types";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  selectedMood: Mood;
  setSelectedMood: Dispatch<SetStateAction<Mood>>;
}

export function MoodFormFirstStep({ selectedMood, setSelectedMood }: Props) {
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
        How was your mood today?
      </h4>
      <div className="flex flex-col gap-y-3">
        <SelectableMood
          mood="very_happy"
          isSelected={selectedMood === "very_happy"}
          setSelectedMood={setSelectedMood}
        />
        <SelectableMood
          mood="happy"
          isSelected={selectedMood === "happy"}
          setSelectedMood={setSelectedMood}
        />
        <SelectableMood
          mood="neutral"
          isSelected={selectedMood === "neutral"}
          setSelectedMood={setSelectedMood}
        />
        <SelectableMood
          mood="sad"
          isSelected={selectedMood === "sad"}
          setSelectedMood={setSelectedMood}
        />
        <SelectableMood
          mood="very_sad"
          isSelected={selectedMood === "very_sad"}
          setSelectedMood={setSelectedMood}
        />
      </div>
    </div>
  );
}
