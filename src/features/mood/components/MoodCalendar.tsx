interface Props {
  onPick: (date: string) => void;
}

export function MoodCalendar({ onPick }: Props) {
  return (
    <input
      type="date"
      onChange={(e) => {
        onPick(e.target.value);
      }}
    />
  );
}
