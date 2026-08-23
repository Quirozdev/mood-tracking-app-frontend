import { Button } from "@/shared/components/Button";
import { Link } from "react-router";

interface Props extends React.ComponentPropsWithRef<"form"> {
  title: string;
  subtitle: string;
  buttonText: string;
  redirection?: {
    text: string;
    linkTo: string;
    linkText: string;
  };
}

export function AuthFormContainer({
  children,
  title,
  subtitle,
  buttonText,
  redirection,
  ...props
}: Props) {
  return (
    <form
      className="rounded-16 mx-4 flex flex-col gap-8 px-8 py-10 shadow-[0px_8px_16px_rgba(32,37,41,0.08)] md:min-w-lg"
      {...props}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-preset-3 text-neutral-900">{title}</h1>
        <p className="text-neutral-600">{subtitle}</p>
      </div>
      {children}
      <div className="flex flex-col gap-5">
        <Button type="submit">{buttonText}</Button>
        {redirection && (
          <p className="text-preset-6-regular text-center text-neutral-600">
            {redirection.text}{" "}
            <Link to={redirection.linkTo} className="text-blue-600">
              {redirection.linkText}
            </Link>
          </p>
        )}
      </div>
    </form>
  );
}
