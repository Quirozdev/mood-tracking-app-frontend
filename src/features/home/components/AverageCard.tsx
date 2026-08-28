import BgPatternAverages from "@/assets/images/bg-pattern-averages.svg";

interface Props {
  title: string;
  emptyStateTitle: string;
  emptyStateText: string;
}

export function AverageCard({ ...props }: Props) {
  return (
    <article>
      <div className="relative flex flex-col gap-y-3 overflow-hidden">
        <span className="text-preset-5 text-neutral-900">
          {props.title} {""}
          <span className="text-preset-7 text-neutral-600">
            (Last 5 Check-ins)
          </span>
        </span>
        <div className="rounded-16 flex flex-col gap-3 bg-blue-100 px-4 py-10 md:px-5">
          <span className="text-preset-4 text-neutral-900">
            {props.emptyStateTitle}
          </span>
          <p className="text-preset-7 text-neutral-900">
            {props.emptyStateText}
          </p>
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
