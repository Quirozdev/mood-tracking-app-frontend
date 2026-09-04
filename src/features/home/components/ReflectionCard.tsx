import { HomeContainer } from "@/features/home/components/HomeContainer";
import ReflectionIcon from "@/assets/images/icon-reflection.svg";
import type React from "react";
import { FEEL_TAGS } from "@/features/mood/model/mood.constants";

interface Props extends React.ComponentPropsWithRef<typeof HomeContainer> {
  journalEntry: string;
  feelings: string[];
}

export function ReflectionCard({ journalEntry, feelings, className }: Props) {
  return (
    <HomeContainer variant="small" className={className}>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-3">
          <img
            src={ReflectionIcon}
            alt="Reflection Icon"
            className="h-5.5 w-5.5"
          />
          <p className="text-preset-6 text-neutral-600">
            Reflection of the day
          </p>
        </div>
        <p className="text-preset-6 min-h-20 text-neutral-900">
          {journalEntry}
        </p>
        <div className="mt-auto flex flex-wrap gap-3">
          {feelings.map((feeling) => (
            <p className="text-preset-6-italic text-neutral-600 italic">
              #{FEEL_TAGS.find((feelTag) => feelTag.value === feeling)?.label}
            </p>
          ))}
        </div>
      </div>
    </HomeContainer>
  );
}
