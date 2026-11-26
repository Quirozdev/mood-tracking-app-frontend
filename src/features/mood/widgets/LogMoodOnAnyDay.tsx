import { MoodCalendar } from "@/features/mood/components/MoodCalendar";
import { PrefilledLogForm } from "@/features/mood/widgets/PrefilledLogForm";
import { Button } from "@/shared/components/Button";
import { useState } from "react";

export function LogMoodOnAnyDay() {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [isLogMoodFormVisible, setIsLogMoodFormVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <>
      <Button
        className="w-fit self-center"
        onClick={() => {
          setIsCalendarVisible(true);
        }}
      >
        Log mood
      </Button>
      {isCalendarVisible && (
        <MoodCalendar
          onPick={(date) => {
            setSelectedDate(date);
            setIsLogMoodFormVisible(true);
          }}
        />
      )}
      {selectedDate && (
        <PrefilledLogForm
          date={selectedDate}
          isVisible={isLogMoodFormVisible}
          onVisibilityChange={setIsLogMoodFormVisible}
        />
      )}
    </>
  );
}
