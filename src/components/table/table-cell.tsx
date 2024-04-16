import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps <'td'> {}

export function TableCell(props: TableHeaderProps){
  return (
    <td className="py-3 px-2.5 text-sm text-zinc-300" {...props}/>
  )
}