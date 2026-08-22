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

export function AuthFormContainer({ children, ...props }: Props) {
  return (
    <form className="rounded-16 mx-4 flex flex-col gap-8 px-8 py-10 shadow-[0px_8px_16px_rgba(32,37,41,0.08)] md:min-w-lg">
      <div className="flex flex-col gap-2">
        <h1 className="text-preset-3 text-neutral-900">{props.title}</h1>
        <p className="text-neutral-600">{props.subtitle}</p>
      </div>
      {children}
      <div className="flex flex-col gap-5">
        <Button type="submit">{props.buttonText}</Button>
        {props.redirection && (
          <p className="text-preset-6-regular text-center text-neutral-600">
            {props.redirection.text}{" "}
            <Link to={props.redirection.linkTo} className="text-blue-600">
              {props.redirection.linkText}
            </Link>
          </p>
        )}
      </div>
    </form>
  );
}
