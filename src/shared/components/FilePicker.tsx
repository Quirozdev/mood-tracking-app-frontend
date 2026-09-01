import { Button } from "@/shared/components/Button";
import { ErrorMessage } from "@/shared/components/ErrorMessage";
import React, { useRef, useState, type ChangeEvent } from "react";

interface Props extends React.ComponentPropsWithRef<"input"> {
  onFilesChange: (files: FileList | null) => void;
  // in bytes
  maxFileSize: number;
}

export function FilePicker({ onFilesChange, maxFileSize, ...props }: Props) {
  const [fileErrorMessage, setFileErrorMessage] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setFileErrorMessage(null);
    const files = e.target.files;
    if (files) {
      const file = files[0];
      if (props.accept && !isValidMimetype(props.accept, file.type)) {
        setFileErrorMessage(
          "Unsupported file type. Please upload a PNG or JPEG",
        );
        resetInput();
        return;
      }
      if (file.size > maxFileSize) {
        setFileErrorMessage(
          `Please upload a file with a max size of ${maxFileSize / 1024}KB`,
        );
        resetInput();
        return;
      }
      onFilesChange(files);
    }

    function resetInput() {
      onFilesChange(null);
      if (inputFileRef.current) {
        inputFileRef.current.value = "";
      }
    }

    function isValidMimetype(mimeTypes: string, fileType: string) {
      const types = mimeTypes.split(",");
      for (let i = 0; i < types.length; i++) {
        const isWildCard = types[i].includes("*");
        if (isWildCard && fileType.includes(types[i].split("/")[0])) {
          return true;
        }
        if (types[i].includes(fileType)) {
          return true;
        }
      }
      return false;
    }
  }

  return (
    <div className="flex flex-col gap-2">
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
      {fileErrorMessage && <ErrorMessage text={fileErrorMessage} />}
      <input
        type="file"
        className="hidden"
        ref={inputFileRef}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
