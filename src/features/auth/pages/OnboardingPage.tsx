import { AuthFormContainer } from "@/features/auth/components/AuthFormContainer";
import { Avatar } from "@/shared/components/Avatar";
import { Button } from "@/shared/components/Button";
import { Input } from "@/shared/components/Input";
import { useRef, useState } from "react";

export function OnboardingPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  return (
    <AuthFormContainer
      title="Personalize your experience"
      subtitle="Add your name and a profile picture to make Mood yours."
      buttonText="Start Tracking"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-preset-6-regular text-neutral-900"
          >
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Jane Appleseed"
          />
        </div>
        <div className="flex gap-5">
          <Avatar src={src} />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <span className="text-preset-6-regular text-neutral-900">
                Upload Image
              </span>
              <span className="text-preset-7 text-neutral-600">
                Max 250KB, PNG or JPEG
              </span>
            </div>
            <Button
              type="button"
              variant="secondary"
              className="w-fit"
              onClick={() => {
                inputFileRef.current?.click();
              }}
            >
              Upload
            </Button>
            <input
              type="file"
              accept="image/pmg,image/jpeg"
              className="hidden"
              ref={inputFileRef}
              onChange={(e) => {
                console.log(e);
                const files = e.target.files;
                console.log(files);
                if (files) {
                  const url = URL.createObjectURL(files[0]);
                  console.log(url);
                  setSrc(url);
                }
              }}
            />
          </div>
        </div>
      </div>
    </AuthFormContainer>
  );
}
