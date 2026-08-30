import SadFaceIcon from "@/assets/images/icon-sad-color.svg";
import { Button } from "@/shared/components/Button";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
      <img
        src={SadFaceIcon}
        alt="Sad face"
        className="max-h-20 max-w-20 animate-bounce"
      />
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-preset-3-mobile md:text-preset-3 text-center text-neutral-600">
          We couldn't find that page
        </h1>
        <Link to="/">
          <Button>Go to Home</Button>
        </Link>
      </div>
    </div>
  );
}
