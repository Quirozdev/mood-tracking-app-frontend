import AvatarPlaceholder from "@/assets/images/avatar-placeholder.svg";
import clsx from "clsx";

interface Props {
  src: string | null;
  size?: "sm" | "lg";
}

export function Avatar({ ...props }: Props) {
  const size = props.size || "lg";

  return (
    <img
      className={clsx(
        "rounded-full",
        size === "sm" && "h-10 w-10",
        size === "lg" && "h-16 w-16",
      )}
      src={props.src || AvatarPlaceholder}
      alt="Avatar"
    />
  );
}
