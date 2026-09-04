import VeryHappyFaceIcon from "@/assets/images/icon-very-happy-color.svg";

export function LoadingFullScreen() {
  return (
    <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
      <img
        src={VeryHappyFaceIcon}
        alt="Very happy face"
        className="max-h-20 max-w-20 animate-bounce"
      />
      <h1 className="text-preset-3-mobile md:text-preset-3 text-center text-blue-600">
        Loading...
      </h1>
    </div>
  );
}
