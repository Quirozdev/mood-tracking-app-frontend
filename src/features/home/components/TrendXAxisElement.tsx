import { MoodPopOver } from "@/features/mood/components/MoodPopover";
import { getMetadata } from "@/features/mood/lib/mood";
import type { GetMoodEntriesResponse } from "@/features/mood/model/mood.types";
import {
  getDayFromDateString,
  getMonthNameFromDateString,
} from "@/shared/lib/dates";
import clsx from "clsx";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  moodEntry: GetMoodEntriesResponse;
  heightPerYValue: number;
}

export function TrendXAxisElement({ moodEntry, heightPerYValue }: Props) {
  const [isPopOverVisible, setIsPopoverVisible] = useState<boolean>(false);
  const [popoverPosition, setPopoverPosition] = useState({
    top: 0,
    left: 0,
    right: 0,
  });
  const barRef = useRef<HTMLDivElement>(null);

  const { icon, alt, colorClass } = getMetadata(moodEntry.mood);
  const monthName = getMonthNameFromDateString(moodEntry.day);
  const day = getDayFromDateString(moodEntry.day);

  const height = getHeight();

  function getHeight(): number {
    switch (moodEntry.sleepHours) {
      case "0-2_hours":
        return heightPerYValue * 1;
      case "3-4_hours":
        return heightPerYValue * 2;
      case "5-6_hours":
        return heightPerYValue * 3;
      case "7-8_hours":
        return heightPerYValue * 4;
      case "9+":
        return heightPerYValue * 5;
    }
  }

  function handlePopover() {
    const rect = barRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPopoverPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      right: window.innerWidth - rect.right,
    });
    setIsPopoverVisible(true);
  }

  return (
    <div>
      <div
        /* mb is a little patch to avoid vertical scroll to appear when horizontal one appears */
        className="mb-0.5 flex flex-col items-center justify-end gap-y-1.5 text-center"
        style={{
          minHeight: `${height}px`,
        }}
      >
        <div
          ref={barRef}
          className={clsx(
            "animate-height-grow w-10 origin-bottom cursor-pointer rounded-full",
            colorClass,
          )}
          style={{
            height: `${height}px`,
          }}
          onClick={handlePopover}
        >
          <img
            src={icon}
            alt={alt}
            className="mx-auto animate-[opacity_4s_ease-in-out_1,spin_4s_ease-in-out_1] px-1.25 py-1.25"
          />
          {createPortal(
            <MoodPopOver
              moodEntry={moodEntry}
              isPopOverVisible={isPopOverVisible}
              position={popoverPosition}
              onChangeVisibility={() => {
                setIsPopoverVisible(false);
              }}
            />,
            document.body,
          )}
        </div>
        <span className="text-preset-9 text-neutral-900">{monthName}</span>
        <span className="text-preset-8 text-neutral-900">{day}</span>
      </div>
    </div>
  );
}
