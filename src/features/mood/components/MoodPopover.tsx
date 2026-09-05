import {
  FEEL_TAGS,
  MOOD_OPTIONS,
  SLEEP_HOURS_OPTIONS,
} from "@/features/mood/model/mood.constants";
import type { GetMoodEntriesResponse } from "@/features/mood/model/mood.types";
import { useClickOutsideDetector } from "@/shared/hooks/use-click-outside-detector";
import { useKeyDown } from "@/shared/hooks/use-key-press";
import { useRef } from "react";

interface Props {
  moodEntry: GetMoodEntriesResponse;
  isPopOverVisible: boolean;
  position: {
    top: number;
    left: number;
    right: number;
  };
  onChangeVisibility: () => void;
}

export function MoodPopOver({
  moodEntry,
  isPopOverVisible,
  position,
  onChangeVisibility,
}: Props) {
  const horizontalPositioning = position.left < 200 ? "right" : "left";
  const ref = useRef<HTMLDivElement>(null);
  const { icon, label: moodLabel } = MOOD_OPTIONS.find(
    (moodOption) => moodOption.value === moodEntry.mood,
  )!;

  const { label: sleepHoursLabel } = SLEEP_HOURS_OPTIONS.find(
    (sleepHoursOption) => {
      return sleepHoursOption.value === moodEntry.sleepHours;
    },
  )!;

  useClickOutsideDetector({
    ref: ref,
    onClickOutside: () => {
      onChangeVisibility();
    },
  });

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      onChangeVisibility();
    },
  });

  return isPopOverVisible ? (
    <div
      ref={ref}
      className="rounded-16 bg-neutral-0 absolute z-10 flex w-44 flex-col gap-y-3 border border-blue-100 p-3"
      style={{
        top: `${position.top}px`,
        left: horizontalPositioning === "left" ? `${position.left - 8}px` : "",
        right:
          horizontalPositioning === "right" ? `${position.right - 24}px` : "",
        transform:
          horizontalPositioning === "left"
            ? "translateX(-100%)"
            : "translateX(100%)",
      }}
    >
      <div className="flex flex-col items-start gap-y-2">
        <p className="text-preset-8 text-neutral-600">Mood</p>
        <div className="flex items-center gap-x-1.5">
          <img src={icon} alt={moodLabel} className="h-4 w-4" />
          <p className="text-preset-7 text-neutral-900">{moodLabel}</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <p className="text-preset-8 text-neutral-600">Sleep</p>
        <p className="text-preset-7 text-neutral-900">{sleepHoursLabel}</p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <p className="text-preset-8 text-neutral-600">Reflection</p>
        <p
          className="text-preset-7 text-neutral-900"
          style={{
            overflowWrap: "break-word",
            wordBreak: "break-all",
          }}
        >
          {moodEntry.journalEntry}
        </p>
      </div>
      <div className="flex flex-col items-start gap-y-2">
        <p className="text-preset-8 text-neutral-600">Tags</p>
        <p className="text-preset-7 text-neutral-900">
          {moodEntry.feelings
            .map(
              (feeling) =>
                FEEL_TAGS.find((feelTag) => feelTag.value === feeling)!.label,
            )
            .join(", ")}
        </p>
      </div>
      {horizontalPositioning === "left" ? (
        <div className="bg-neutral-0 absolute -right-1 h-2 w-2 rotate-45 border-t border-r border-blue-100"></div>
      ) : (
        <div className="bg-neutral-0 absolute -left-1 h-2 w-2 rotate-45 border-b border-l border-blue-100"></div>
      )}
    </div>
  ) : null;
}
