import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import {
  formatDateToIsoStringWithoutTime,
  getStartAndEndDateOfDateMonth,
} from "@/shared/lib/dates";
import { useGetMoodEntries } from "@/features/mood/hooks/use-get-mood-entries";
import dayjs from "dayjs";
import type { Mood } from "@/features/mood/model/mood.types";
import { HighlightedMoodDay } from "@/features/mood/components/mood-calendar/HighlightedMoodDay";

interface Props {
  onPick: (date: string) => void;
}

export function MoodCalendar({ onPick }: Props) {
  const currentDate = dayjs();
  const { startOfMonth, endOfMonth } = getStartAndEndDateOfDateMonth(
    formatDateToIsoStringWithoutTime(currentDate.toDate()),
  );

  const [monthDateRange, setMonthDateRange] = useState<{
    from: string;
    to: string;
  }>({
    from: startOfMonth,
    to: endOfMonth,
  });

  const { data, isLoading } = useGetMoodEntries(monthDateRange);

  const highlightedDays = data
    ? data.map((moodEntry) => ({
        day: dayjs(moodEntry.day).date(),
        mood: moodEntry.mood,
      }))
    : [];

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          loading={isLoading}
          renderLoading={() => <DayCalendarSkeleton />}
          slots={{ day: HighlightedMoodDay }}
          onMonthChange={(month) => {
            const { startOfMonth: from, endOfMonth: to } =
              getStartAndEndDateOfDateMonth(
                formatDateToIsoStringWithoutTime(month.toDate()),
              );

            setMonthDateRange({
              from,
              to,
            });
          }}
          onChange={(value) => {
            if (value?.toDate()) {
              onPick(formatDateToIsoStringWithoutTime(value?.toDate()));
            }
          }}

          slotProps={{
            day: { highlightedDays } as unknown as {
              day: number;
              mood: Mood;
            }[],
          }}
        />
      </LocalizationProvider>
    </>
  );
}
