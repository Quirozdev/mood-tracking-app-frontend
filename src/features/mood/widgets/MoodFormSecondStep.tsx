import { FeelTagCheckbox } from "@/features/mood/components/FeelTagCheckbox";
import { FEEL_TAGS } from "@/features/mood/model/mood.constants";
import type { ChangeEvent } from "react";

interface Props {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

export function MoodFormSecondStep({ selectedTags, onTagsChange }: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    if (checked) {
      onTagsChange([...selectedTags, e.target.value]);
      return;
    }
    onTagsChange(selectedTags.filter((tag) => tag !== e.target.value));
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
        {FEEL_TAGS.map((feelTag) => {
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
