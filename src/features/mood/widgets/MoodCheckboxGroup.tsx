import { MoodCheckbox } from "@/features/mood/components/MoodCheckbox";
import type { Mood } from "@/features/mood/model/mood.types";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  selectedMood: Mood;
  setSelectedMood: Dispatch<SetStateAction<Mood>>;
}

export function MoodCheckboxGroup({ selectedMood, setSelectedMood }: Props) {
  return (
    <div className="flex flex-col gap-y-3">
      <MoodCheckbox
        mood="very_happy"
        isSelected={selectedMood === "very_happy"}
        setSelectedMood={setSelectedMood}
      />
      <MoodCheckbox
        mood="happy"
        isSelected={selectedMood === "happy"}
        setSelectedMood={setSelectedMood}
      />
      <MoodCheckbox
        mood="neutral"
        isSelected={selectedMood === "neutral"}
        setSelectedMood={setSelectedMood}
      />
      <MoodCheckbox
        mood="sad"
        isSelected={selectedMood === "sad"}
        setSelectedMood={setSelectedMood}
      />
      <MoodCheckbox
        mood="very_sad"
        isSelected={selectedMood === "very_sad"}
        setSelectedMood={setSelectedMood}
      />
    </div>
  );
}
