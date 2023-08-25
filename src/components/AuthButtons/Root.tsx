import { ComponentProps } from "react";

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...props }: RootProps) {
  return <div {...props} className="flex flex-col  gap-4" />;
}
