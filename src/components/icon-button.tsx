import { ComponentProps } from "react";


interface IconButtonProps extends ComponentProps <'button'> {
  transparent?: boolean
}


export function IconButton({transparent, ...props}: IconButtonProps){
  return(
    <button 
    className={transparent 
      ? "bg-black/10 border border-white/40 rounded-md p-1.5 hover:bg-white/40" 
      : 'border border-gray-300/30 rounded-md p-1.5 bg-white/10 hover:bg-white/40 transition'} 
    {...props}
    />
  )
}