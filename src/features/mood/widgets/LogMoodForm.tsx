import { FormContainer } from "@/shared/widgets/FormContainer";
import CloseIcon from "@/assets/images/icon-close.svg";
import { useState } from "react";
import type { Mood } from "@/features/mood/model/mood.types";
import { MoodCheckboxGroup } from "@/features/mood/widgets/MoodCheckboxGroup";
import { Button } from "@/shared/components/Button";

interface Props {
  onClose: () => void;
}

export function LogMoodForm({ onClose }: Props) {
  const [selectedMood, setSelectedMood] = useState<Mood>("very_happy");

  return (
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-y-6 md:gap-y-8">
        <div className="flex flex-col gap-1">
          <button
            type="button"
            className="hidden cursor-pointer self-end md:block"
            onClick={onClose}
          >
            <img src={CloseIcon} alt="Close icon" className="h-4 w-4" />
          </button>
          <h3 className="text-preset-3 md:text-preset-2 text-neutral-900">
            Log your mood
          </h3>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="h-1.5 flex-1 rounded-full bg-blue-600"></div>
          <div className="h-1.5 flex-1 rounded-full bg-blue-200"></div>
          <div className="h-1.5 flex-1 rounded-full bg-blue-200"></div>
          <div className="h-1.5 flex-1 rounded-full bg-blue-200"></div>
        </div>
        <MoodCheckboxGroup
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
        <Button>Continue</Button>
      </div>
    </FormContainer>
  );
}
