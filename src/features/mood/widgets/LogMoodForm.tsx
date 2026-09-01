import { FormContainer } from "@/shared/widgets/FormContainer";
import CloseIcon from "@/assets/images/icon-close.svg";
import { useState } from "react";
import type { Mood } from "@/features/mood/model/mood.types";
import { MoodFormFirstStep } from "@/features/mood/widgets/MoodFormFirstStep";
import { Button } from "@/shared/components/Button";
import { MoodFormSecondStep } from "@/features/mood/widgets/MoodFormSecondStep";
import { ProgressLine } from "@/features/mood/components/ProgressLine";
import { MoodFormThirdStep } from "@/features/mood/widgets/MoodFormThirdStep";

interface Props {
  onClose: () => void;
}

export function LogMoodForm({ onClose }: Props) {
  const [step, setCurrentStep] = useState<number>(1);
  const [selectedMood, setSelectedMood] = useState<Mood>("very_happy");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [journalEntry, setJournalEntry] = useState<string>("");

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
          <ProgressLine isActive={step >= 1} />
          <ProgressLine isActive={step >= 2} />
          <ProgressLine isActive={step >= 3} />
          <ProgressLine isActive={step >= 4} />
        </div>
        {step === 1 && (
          <MoodFormFirstStep
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
          />
        )}
        {step === 2 && (
          <MoodFormSecondStep
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        )}
        {step === 3 && (
          <MoodFormThirdStep
            journalEntry={journalEntry}
            onJournalEntryChange={(value) => {
              setJournalEntry(value);
            }}
          />
        )}
        {step < 4 && (
          <Button
            onClick={() => {
              setCurrentStep((prevStep) => prevStep + 1);
            }}
          >
            Continue
          </Button>
        )}
        {step === 4 && <Button type="submit">Submit</Button>}
      </div>
    </FormContainer>
  );
}
