import { FormContainer } from "@/shared/widgets/FormContainer";
import CloseIcon from "@/assets/images/icon-close.svg";
import { useState } from "react";
import { MoodFormFirstStep } from "@/features/mood/widgets/MoodFormFirstStep";
import { Button } from "@/shared/components/Button";
import { MoodFormSecondStep } from "@/features/mood/widgets/MoodFormSecondStep";
import { ProgressLine } from "@/features/mood/components/ProgressLine";
import { MoodFormThirdStep } from "@/features/mood/widgets/MoodFormThirdStep";
import { MoodFormFourthStep } from "@/features/mood/widgets/MoodFormFourthStep";
import { FormProvider, useForm } from "react-hook-form";
import type z from "zod";
import { logMoodSchema } from "@/features/mood/schemas/log-mood.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@/shared/components/ErrorMessage";
import { useLogMood } from "@/features/mood/hooks/use-log-mood";
import { showToast } from "@/features/toast/lib/toast";
import { formatDateToIsoStringWithoutTime } from "@/shared/lib/dates";

interface Props {
  onClose: () => void;
}

export function LogMoodForm({ onClose }: Props) {
  const [step, setCurrentStep] = useState<number>(1);

  const methods = useForm<z.infer<typeof logMoodSchema>>({
    resolver: zodResolver(logMoodSchema),
    mode: "onChange",
    defaultValues: {
      feelings: [],
      journalEntry: "",
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors },
  } = methods;

  const { mutateAsync: logMood, isPending: isLoggingMood } = useLogMood();

  const stepsMapping: Record<
    number,
    "mood" | "feelings" | "journalEntry" | "sleepHours"
  > = {
    1: "mood",
    2: "feelings",
    3: "journalEntry",
    4: "sleepHours",
  };

  const currentStepError = errors[stepsMapping[step]]?.message;

  async function onSubmit(data: z.infer<typeof logMoodSchema>) {
    await logMood({
      day: formatDateToIsoStringWithoutTime(new Date()),
      logMoodInput: {
        mood: data.mood,
        feelings: data.feelings,
        journalEntry: data.journalEntry,
        sleepHours: data.sleepHours,
      },
    });

    showToast("success", "Mood logged!");
    onClose();
  }

  return (
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
          {step === 1 && <MoodFormFirstStep />}
          {step === 2 && <MoodFormSecondStep />}
          {step === 3 && <MoodFormThirdStep />}
          {step === 4 && <MoodFormFourthStep />}
          <div className="flex flex-col gap-y-4">
            {currentStepError && <ErrorMessage text={currentStepError} />}
            {step < 4 && (
              <Button
                type="button"
                onClick={async () => {
                  const isValid = await trigger(stepsMapping[step]);

                  if (!isValid) {
                    return;
                  }
                  setCurrentStep((prevStep) => prevStep + 1);
                }}
              >
                Continue
              </Button>
            )}
            {step === 4 && (
              <Button
                type="submit"
                disabled={isLoggingMood}
                isLoading={isLoggingMood}
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </FormContainer>
    </FormProvider>
  );
}
