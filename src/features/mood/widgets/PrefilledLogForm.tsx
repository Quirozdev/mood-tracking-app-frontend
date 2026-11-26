import { useGetMoodEntryByDay } from "@/features/mood/hooks/use-get-mood-entry-by-day";
import { LogMoodForm } from "@/features/mood/widgets/LogMoodForm";
import { Overlay } from "@/shared/components/Overlay";
import VeryHappyFaceIcon from "@/assets/images/icon-very-happy-color.svg";

interface Props {
  date: string;
  isVisible: boolean;
  onVisibilityChange: (isVisible: boolean) => void;
}

export function PrefilledLogForm({
  date,
  isVisible,
  onVisibilityChange,
}: Props) {
  const { data, isLoading } = useGetMoodEntryByDay(date);

  return (
    <Overlay isVisible={isVisible} onVisibilityChange={onVisibilityChange}>
      <div className="mx-auto h-full max-w-xl">
        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-300">
            <img
              src={VeryHappyFaceIcon}
              alt="Very happy face"
              className="max-h-20 max-w-20 animate-spin"
            />
          </div>
        ) : (
          <LogMoodForm
            initialValues={data ? { ...data, day: date } : { day: date }}
            onClose={() => onVisibilityChange(false)}
          />
        )}
      </div>
    </Overlay>
  );
}
