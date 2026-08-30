import VerySadFaceWhiteIcon from "@/assets/images/icon-very-sad-white.svg";
import SadFaceWhiteIcon from "@/assets/images/icon-sad-white.svg";
import NeutralFaceWhiteIcon from "@/assets/images/icon-neutral-white.svg";
import HappyFaceWhiteIcon from "@/assets/images/icon-happy-white.svg";
import VeryHappyFaceWhiteIcon from "@/assets/images/icon-very-happy-white.svg";
import type { Mood, SleepHours } from "@/features/mood/model/mood.types";
import clsx from "clsx";

interface Props {
  mood: Mood;
  sleepHours: SleepHours;
  heightPerYValue: number;
}

export function TrendXAxisElement({
  mood,
  sleepHours,
  heightPerYValue,
}: Props) {
  const { icon, alt, colorClass } = getMetadata();
  const height = getHeight();

  function getMetadata(): { icon: string; alt: string; colorClass: string } {
    switch (mood) {
      case "very_sad":
        return {
          icon: VerySadFaceWhiteIcon,
          alt: "Very sad face",
          colorClass: "bg-red-300",
        };
      case "sad":
        return {
          icon: SadFaceWhiteIcon,
          alt: "Sad face",
          colorClass: "bg-indigo-200",
        };
      case "neutral":
        return {
          icon: NeutralFaceWhiteIcon,
          alt: "Neutral face",
          colorClass: "bg-blue-300",
        };
      case "happy":
        return {
          icon: HappyFaceWhiteIcon,
          alt: "Happy face",
          colorClass: "bg-green-300",
        };
      case "very_happy":
        return {
          icon: VeryHappyFaceWhiteIcon,
          alt: "Very happy face",
          colorClass: "bg-amber-300",
        };
    }
  }

  function getHeight(): number {
    switch (sleepHours) {
      case "0-2_hours":
        return heightPerYValue * 1;
      case "3-4_hours":
        return heightPerYValue * 2;
      case "5-6_hours":
        return heightPerYValue * 3;
      case "7-8_hours":
        return heightPerYValue * 4;
      case "9":
        return heightPerYValue * 5;
    }
  }

  return (
    <div>
      <div
        /* mb is a little patch to avoid vertical scroll to appear when horizontal one appears */
        className="mb-0.5 flex flex-col justify-end gap-y-1.5 text-center"
        style={{
          minHeight: `${height}px`,
        }}
      >
        <div
          className={clsx(
            "animate-height-grow w-10 origin-bottom rounded-full",
            colorClass,
          )}
          style={{
            height: `${height}px`,
          }}
        >
          <img
            src={icon}
            alt={alt}
            className="mx-auto animate-[opacity_4s_ease-in-out_1,spin_4s_ease-in-out_1] px-1.25 py-1.25"
          />
        </div>
        <span className="text-preset-9 text-neutral-900">April</span>
        <span className="text-preset-8 text-neutral-900">02</span>
      </div>
    </div>
  );
}
