interface Props {
  src: string;
  alt: string;
}

export function ToastIcon({ src, alt }: Props) {
  return <img className="h-6 w-6" src={src} alt={alt} />;
}
