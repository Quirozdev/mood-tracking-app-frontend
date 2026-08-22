import AvatarPlaceholder from "@/assets/images/avatar-placeholder.svg";

interface Props {
  src: string | null;
}

export function Avatar({ src }: Props) {
  return (
    <img
      className="h-16 w-16 rounded-full"
      src={src || AvatarPlaceholder}
      alt="Avatar"
    />
  );
}
