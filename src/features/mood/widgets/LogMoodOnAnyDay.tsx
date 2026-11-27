import { LogDayPickerContainer } from "@/features/mood/widgets/LogDayPickerContainer";
import { PrefilledLogForm } from "@/features/mood/widgets/PrefilledLogForm";
import { Button } from "@/shared/components/Button";
import { Overlay } from "@/shared/components/Overlay";
import { useState } from "react";

export function LogMoodOnAnyDay() {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isLogMoodFormVisible, setIsLogMoodFormVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center">
      <Button
        className="w-fit self-center"
        onClick={() => {
          setIsCalendarVisible(true);
        }}
      >
        Log mood
      </Button>
      <Overlay
        isVisible={isCalendarVisible}
        onVisibilityChange={setIsCalendarVisible}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <LogDayPickerContainer
          onPick={(date) => {
            setSelectedDate(date);
            setIsCalendarVisible(false);
            setIsLogMoodFormVisible(true);
          }}
        />
      </Overlay>
      {selectedDate && (
        <PrefilledLogForm
          date={selectedDate}
          isVisible={isLogMoodFormVisible}
          onVisibilityChange={setIsLogMoodFormVisible}
        />
      )}
    </div>
  );
}
