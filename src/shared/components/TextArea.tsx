import type React from "react";

interface Props extends React.ComponentPropsWithRef<"textarea"> {}

export function TextArea({ ...props }: Props) {
  return (
    <textarea
      className="rounded-10 bg-neutral-0 text-preset-6-italic resize-none border border-neutral-300 px-4 py-3 text-neutral-600 italic focus:outline-blue-600"
      {...props}
    ></textarea>
  );
}
