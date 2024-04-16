import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<"input"> {}

export function TableInput(props: TableHeaderProps) {
  return (
    <input
      {...props}
      type="checkbox"
      className="size-4 bg-black/20 rounded border border-white/10"
    />
  );
}
