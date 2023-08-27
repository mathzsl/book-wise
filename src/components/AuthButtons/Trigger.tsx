import { ComponentProps } from "react";
import { useAuthButtons } from "./Root";

interface TriggerProps extends ComponentProps<"button"> {}

export function Trigger({ ...props }: TriggerProps) {
  return (
    <button
      className="flex items-center gap-5 px-6 py-5 rounded-lg bg-grayApp-600 text-grayApp-200 font-bold text-lg hover:bg-grayApp-500"
      {...props}
    />
  );
}
