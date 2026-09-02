import type { Mood } from "@/features/mood/model/mood.types";
import { RadioInput } from "@/shared/components/RadioInput";

interface Props {
  mood: Mood;
  isSelected: boolean;
  label: string;
  icon: string;
  name: string;
  onMoodChange: (mood: Mood) => void;
}

export function SelectableMood({
  mood,
  isSelected,
  label,
  icon,
  name,
  onMoodChange,
}: Props) {
  return (
    <RadioInput
      label={label}
      value={mood}
      name={name}
      icon={icon}
      checked={isSelected}
      onChange={() => onMoodChange(mood)}
    />
  );
}
