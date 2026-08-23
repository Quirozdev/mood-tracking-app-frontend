import HintIcon from "@/assets/images/icon-hint.svg";

interface Props {
  text: string;
}

export function ErrorMessage({ text, ...props }: Props) {
  return (
    <div className="flex items-center gap-1.5" {...props}>
      <img src={HintIcon} alt="Hint icon" />
      <span className="text-preset-9 text-red-700">{text}</span>
    </div>
  );
}
