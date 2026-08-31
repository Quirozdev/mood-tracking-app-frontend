import clsx from "clsx";

interface Props {
  isActive: boolean;
}

export function ProgressLine({ isActive }: Props) {
  return (
    <div className={clsx("h-1.5 flex-1 rounded-full bg-blue-200")}>
      <div
        className={clsx(
          "h-full w-full rounded-full",
          isActive && "animate-width-grow origin-left bg-blue-600",
        )}
      ></div>
    </div>
  );
}
