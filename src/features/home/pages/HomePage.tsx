import { Button } from "@/shared/components/Button";
import { HeroSection } from "@/features/home/widgets/HeroSection";
import { AveragesSection } from "@/features/home/widgets/AveragesSection";
import { TrendsSection } from "@/features/home/widgets/TrendsSection";
import { useState } from "react";
import { Overlay } from "@/shared/components/Overlay";
import { LogMoodForm } from "@/features/mood/widgets/LogMoodForm";
import { useGetMoodEntryByDay } from "@/features/mood/hooks/use-get-mood-entry-by-day";
import {
  formatDateToIsoStringWithoutTime,
  getCurrentDate,
  subtractDaysFromDate,
} from "@/shared/lib/dates";
import { MoodLogSection } from "@/features/home/widgets/MoodLogSection";
import { LoadingFullScreen } from "@/shared/components/LoadingFullScreen";
import { useGetAveragesByDateRange } from "@/features/mood/hooks/use-get-averages-by-date-range";

export function HomePage() {
  const [isLogMoodFormVisible, setIsLogMoodFormVisible] =
    useState<boolean>(false);

  const currentDate = getCurrentDate();

  const { data: moodEntry, isLoading: isLoadingMoodEntry } =
    useGetMoodEntryByDay(formatDateToIsoStringWithoutTime(currentDate));

  const { data: averages, isLoading: isLoadingAverages } =
    useGetAveragesByDateRange(
      formatDateToIsoStringWithoutTime(subtractDaysFromDate(currentDate, 5)),
      formatDateToIsoStringWithoutTime(subtractDaysFromDate(currentDate, 1)),
    );

  if (isLoadingMoodEntry || isLoadingAverages) {
    return <LoadingFullScreen />;
  }

  return (
    <div className="flex flex-col gap-y-12 xl:gap-y-16">
      <HeroSection />
      {moodEntry ? (
        <MoodLogSection moodEntry={moodEntry} />
      ) : (
        <Button
          className="w-fit self-center"
          onClick={() => {
            setIsLogMoodFormVisible(true);
          }}
        >
          Log today's mood
        </Button>
      )}
      <div className="flex flex-col gap-8 xl:flex-row">
        <AveragesSection
          todayMoodEntry={moodEntry}
          averages={averages}
          className="shrink-0"
        />
        <TrendsSection className="flex-1" />
      </div>
      <Overlay
        isVisible={isLogMoodFormVisible}
        onVisibilityChange={setIsLogMoodFormVisible}
      >
        <div className="mx-auto max-w-xl">
          <LogMoodForm onClose={() => setIsLogMoodFormVisible(false)} />
        </div>
      </Overlay>
    </div>
  );
}
