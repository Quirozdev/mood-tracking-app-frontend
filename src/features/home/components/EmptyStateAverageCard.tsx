import BgPatternAverages from "@/assets/images/bg-pattern-averages.svg";

interface Props {
  type: "mood" | "sleepHours";
}

export function EmptyStateAverageCard({ type }: Props) {
  const { title, emptyStateTitle, emptyStateText } = getTexts();

  function getTexts() {
    switch (type) {
      case "mood":
        return {
          title: "Average Mood",
          emptyStateTitle: "Keep tracking!",
          emptyStateText: "Log 5 check-ins to see your average mood.",
        };
      case "sleepHours":
        return {
          title: "Average Sleep",
          emptyStateTitle: "Not enough data yet!",
          emptyStateText: "Track 5 nights to view average sleep.",
        };
    }
  }
  return (
    <article>
      <div className="relative flex flex-col gap-y-3 overflow-hidden">
        <span className="text-preset-5 text-neutral-900">
          {title} {""}
          <span className="text-preset-7 text-neutral-600">
            Last 5 Check-ins
          </span>
        </span>
        <div className="rounded-16 flex flex-col gap-3 bg-blue-100 px-4 py-10 md:px-5">
          <span className="text-preset-4 text-neutral-900">
            {emptyStateTitle}
          </span>
          <p className="text-preset-7 text-neutral-900">{emptyStateText}</p>
          <img
            src={BgPatternAverages}
            alt="Background averages pattern"
            className="absolute top-0 -right-40"
          />
        </div>
      </div>
    </article>
  );
}
