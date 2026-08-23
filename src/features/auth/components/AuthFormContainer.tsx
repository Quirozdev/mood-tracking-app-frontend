import { Button } from "@/shared/components/Button";
import { Link } from "react-router";

interface Props extends React.ComponentPropsWithRef<"form"> {
  title: string;
  subtitle: string;
  button: {
    text: string;
    isLoading: boolean;
  };
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
  button,
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
        <Button
          type="submit"
          disabled={button.isLoading}
          className="flex justify-center text-center"
        >
          {button.isLoading ? (
            <>
              <span className="border-neutral-0 block h-6 w-6 animate-spin rounded-full border-t-2"></span>
              <span className="invisible">s</span>
            </>
          ) : (
            <span>{button.text}</span>
          )}
        </Button>
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
