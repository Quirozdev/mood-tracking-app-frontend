import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { formatDateToIsoStringWithoutTime } from "@/shared/lib/dates";

interface Props {
  onPick: (date: string) => void;
}

export function MoodCalendar({ onPick }: Props) {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          onChange={(value) => {
            if (value?.toDate()) {
              onPick(formatDateToIsoStringWithoutTime(value?.toDate()));
            }
          }}
        />
      </LocalizationProvider>
    </>
  );
}
