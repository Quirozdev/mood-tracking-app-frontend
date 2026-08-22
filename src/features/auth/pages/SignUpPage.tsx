import { useState } from "react";
import clsx from "clsx";

export function SignUpPage() {
  const [invalid, setInvalid] = useState<boolean>(false);
  return (
    <form className="rounded-16 flex flex-col gap-8 px-8 py-10 shadow-[0px_8px_16px_rgba(32,37,41,0.08)]">
      <div className="flex flex-col gap-2">
        <h1 className="text-preset-3 text-neutral-900">Create an account</h1>
        <p className="text-neutral-600">
          Join to track your daily mood and sleep with ease.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-preset-6-regular text-neutral-900"
        >
          Email address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className={clsx(
            "rounded-10 text-preset-6-regular px-4 py-3 text-neutral-900 shadow-[0px_1px_2px_rgba(33,33,77,0.05)] outline-1 outline-neutral-300 placeholder:text-neutral-600",
            invalid
              ? "outline-red-700"
              : "hover:outline-neutral-600 focus:shadow-[0px_0px_0px_3px_var(--color-neutral-0),0px_0px_0px_5px_var(--color-blue-600)]",
          )}
          placeholder="name@email.com"
        />
      </div>
    </form>
  );
}
