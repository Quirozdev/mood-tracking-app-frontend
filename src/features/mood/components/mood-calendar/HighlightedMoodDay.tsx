import Badge from "@mui/material/Badge";
import { PickerDay, type PickerDayProps } from "@mui/x-date-pickers/PickerDay";
import { getMoodOptionData } from "@/features/mood/lib/mood";
import type { Mood } from "@/features/mood/model/mood.types";

export function HighlightedMoodDay(
  props: PickerDayProps & {
    highlightedDays?: {
      day: number;
      mood: Mood;
    }[];
  },
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const highlightedMood = highlightedDays.find(
    (highlightedDay) => props.day.date() === highlightedDay.day,
  );

  const isSelected = !props.outsideCurrentMonth && highlightedMood;

  const metadata = highlightedMood
    ? getMoodOptionData(highlightedMood.mood)
    : undefined;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      //   to avoid badge being cut at the top by calendar
      classes={{
        anchorOriginTopRightCircular: "p-0!  top-2!",
      }}
      badgeContent={
        isSelected ? (
          <img src={metadata?.icon} alt={metadata?.label} className="size-5" />
        ) : undefined
      }
    >
      <PickerDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}
