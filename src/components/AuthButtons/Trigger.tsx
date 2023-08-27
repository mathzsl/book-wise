"use client";

import { ComponentProps } from "react";
import { useAuthButtons } from "./Root";

interface TriggerProps extends ComponentProps<"button"> {
  provider?: string;
}

export function Trigger({ provider, ...props }: TriggerProps) {
  const { onHandleSignIn } = useAuthButtons();

  function handleSignIn() {
    onHandleSignIn(provider);
  }

  return (
    <button
      onClick={handleSignIn}
      className="w-full flex items-center gap-5 px-6 py-5 rounded-lg bg-grayApp-600 text-grayApp-200 font-bold text-lg hover:bg-grayApp-500"
      {...props}
    />
  );
}
