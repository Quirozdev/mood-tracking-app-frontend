import SleepIcon from "@/assets/images/icon-sleep.svg";
import clsx from "clsx";

interface Props extends React.ComponentPropsWithRef<"div"> {
  text: string;
}

export function TrendYAxisElement({ text, className, ref }: Props) {
  return (
    <div className={clsx("flex items-center gap-1.5", className)} ref={ref}>
      <img src={SleepIcon} alt="Sleep icon" className="h-2.5 w-2.5" />
      <span className="text-preset-9 text-neutral-600">{text}</span>
    </div>
  );
}
