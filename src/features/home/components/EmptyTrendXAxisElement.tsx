import {
  getDayFromDateString,
  getMonthNameFromDateString,
} from "@/shared/lib/dates";

interface Props {
  day: string;
}

export function EmptyTrendXAxisElement({ ...props }: Props) {
  const monthName = getMonthNameFromDateString(props.day);
  const day = getDayFromDateString(props.day);

  return (
    <div>
      <div className="mb-0.5 flex flex-col items-center justify-end gap-y-1.5 text-center">
        <span className="text-preset-9 text-neutral-900">{monthName}</span>
        <span className="text-preset-8 text-neutral-900">{day}</span>
      </div>
    </div>
  );
}
