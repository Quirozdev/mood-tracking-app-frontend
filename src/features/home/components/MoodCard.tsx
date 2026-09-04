import { HomeContainer } from "@/features/home/components/HomeContainer";
import { MOOD_OPTIONS } from "@/features/mood/model/mood.constants";
import QuoteIcon from "@/assets/images/icon-quote.svg";
import type { Mood } from "@/features/mood/model/mood.types";
import { getMoodQuote } from "@/features/mood/lib/mood";

interface Props {
  mood: Mood;
}

export function MoodCard({ mood }: Props) {
  const moodMetadata = MOOD_OPTIONS.find(
    (moodOption) => moodOption.value === mood,
  );

  const moodQuote = getMoodQuote(mood);

  return (
    <HomeContainer>
      <div className="flex flex-col items-center gap-y-8 md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <h3 className="text-preset-3 text-neutral-900 opacity-70">
            I’m feeling
          </h3>
          <p className="text-preset-2 text-neutral-900">
            {moodMetadata?.label}
          </p>
        </div>
        <img
          src={moodMetadata?.icon}
          alt={moodMetadata?.label}
          className="w-50 md:hidden"
        />
        <div className="flex flex-col items-center gap-y-4 md:items-start">
          <img src={QuoteIcon} alt="Quote icon" />
          <p className="text-preset-6-italic text-center text-neutral-900 italic md:text-left">
            “{moodQuote}”
          </p>
        </div>
      </div>
      <img
        src={moodMetadata?.icon}
        alt={moodMetadata?.label}
        className="-mb-16 hidden w-full max-w-80 md:block"
      />
    </HomeContainer>
  );
}
