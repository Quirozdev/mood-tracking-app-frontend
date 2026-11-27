import { MoodCalendar } from "@/features/mood/components/MoodCalendar";

interface Props {
  onPick: (date: string) => void;
}

export function LogDayPickerContainer({ onPick }: Props) {
  return (
    <div className="rounded-16 bg-neutral-0 mx-auto flex max-w-xl flex-col gap-4 px-8 py-10 shadow-[0px_8px_16px_rgba(32,37,41,0.08)] md:min-w-lg">
      <h3 className="text-preset-3 md:text-preset-2 text-center text-neutral-900">
        Select a day
      </h3>
      <MoodCalendar onPick={onPick} />
    </div>
  );
}
