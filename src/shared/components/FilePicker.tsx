import { Button } from "@/shared/components/Button";
import React, { useRef, type ChangeEvent, type Dispatch } from "react";

interface Props extends React.ComponentPropsWithRef<"input"> {
  setSelectedFiles: Dispatch<React.SetStateAction<FileList | null>>;
  // in bytes
  maxFileSize: number;
  onHigherMaxFileSizeReached: (size: number) => void;
}

export function FilePicker({
  setSelectedFiles,
  maxFileSize,
  onHigherMaxFileSizeReached,
  ...props
}: Props) {
  const inputFileRef = useRef<HTMLInputElement>(null);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      if (file.size > maxFileSize) {
        onHigherMaxFileSizeReached(file.size);
        return;
      }
      setSelectedFiles(files);
    }
  }

  return (
    <>
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
        className="hidden"
        ref={inputFileRef}
        onChange={onChange}
        {...props}
      />
    </>
  );
}
