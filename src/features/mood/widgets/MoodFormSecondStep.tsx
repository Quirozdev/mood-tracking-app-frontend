import { FeelTagCheckbox } from "@/features/mood/components/FeelTagCheckbox";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
}

export function MoodFormSecondStep({ selectedTags, setSelectedTags }: Props) {
  const feelTags = [
    { label: "Joyful", value: "joyful" },
    { label: "Down", value: "down" },
    { label: "Anxious", value: "anxious" },
    { label: "Calm", value: "calm" },
    { label: "Excited", value: "excited" },
    { label: "Frustrated", value: "frustrated" },
    { label: "Overwhelmed", value: "lonely" },
    { label: "Motivated", value: "motivated" },
    { label: "Irritable", value: "irritable" },
    { label: "Peaceful", value: "peaceful" },
    { label: "Tired", value: "tired" },
    { label: "Hopeful", value: "hopeful" },
    { label: "Confident", value: "confident" },
    { label: "Stressed", value: "stressed" },
    { label: "Content", value: "content" },
    { label: "Disappointed", value: "disappointed" },
    { label: "Optimistic", value: "optimistic" },
    { label: "Restless", value: "restless" },
  ];

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setSelectedTags((prevSelectedTags) => {
      if (checked) {
        return [...prevSelectedTags, e.target.value];
      }
      return prevSelectedTags.filter((tag) => tag !== e.target.value);
    });
  }

  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8">
      <div className="flex flex-col gap-1.5">
        <h4 className="text-preset-3-mobile md:text-preset-3 text-neutral-900">
          How did you feel?
        </h4>
        <span className="text-preset-6 text-neutral-600">
          Select up to three tags:
        </span>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-3">
        {feelTags.map((feelTag) => {
          return (
            <FeelTagCheckbox
              key={feelTag.value}
              label={feelTag.label}
              value={feelTag.value}
              checked={selectedTags.includes(feelTag.value)}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
}
