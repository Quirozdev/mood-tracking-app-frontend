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
} from "@/shared/lib/dates";
import { MoodLogSection } from "@/features/home/widgets/MoodLogSection";
import { LoadingFullScreen } from "@/shared/components/LoadingFullScreen";
import { useGetMoodEntries } from "@/features/mood/hooks/use-get-mood-entries";
import type {
  GetMoodEntriesResponse,
  MoodAverages,
} from "@/features/mood/model/mood.types";
import { useGetAveragesByLastCheckIns } from "@/features/mood/hooks/use-get-averages-by-last-check-ins";

export function HomePage() {
  const [isLogMoodFormVisible, setIsLogMoodFormVisible] =
    useState<boolean>(false);

  const currentDate = getCurrentDate();

  const { data: todayMoodEntry, isLoading: isLoadingMoodEntry } =
    useGetMoodEntryByDay(formatDateToIsoStringWithoutTime(currentDate));

  const { data: averages, isLoading: isLoadingAverages } =
    useGetAveragesByLastCheckIns(5);

  const { data: moodEntries, isLoading: isLoadingMoodEntries } =
    useGetMoodEntries();

  if (isLoadingMoodEntry || isLoadingAverages || isLoadingMoodEntries) {
    return <LoadingFullScreen />;
  }

  return (
    <div className="flex flex-col gap-y-12 xl:gap-y-16">
      <HeroSection />
      <Button
        className="w-fit self-center"
        onClick={() => {
          setIsLogMoodFormVisible(true);
        }}
      >
        {todayMoodEntry ? "Log mood" : "Log today's mood"}
      </Button>
      {todayMoodEntry && <MoodLogSection moodEntry={todayMoodEntry} />}
      <div className="flex flex-col gap-8 xl:flex-row">
        <AveragesSection
          averages={averages as MoodAverages}
          className="shrink-0"
        />
        <TrendsSection
          moodEntries={moodEntries as GetMoodEntriesResponse[]}
          className="flex-1"
        />
      </div>
      <Overlay
        isVisible={isLogMoodFormVisible}
        onVisibilityChange={setIsLogMoodFormVisible}
      >
        <div className="mx-auto max-w-xl">
          <LogMoodForm
            initialValues={todayMoodEntry}
            onClose={() => setIsLogMoodFormVisible(false)}
          />
        </div>
      </Overlay>
    </div>
  );
}
