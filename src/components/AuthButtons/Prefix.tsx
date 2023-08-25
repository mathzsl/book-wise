import { ComponentProps } from "react";

interface PrefixProps extends ComponentProps<"img"> {}

export function Prefix({ ...props }: PrefixProps) {
  return <img {...props} alt={props.alt} />;
}
