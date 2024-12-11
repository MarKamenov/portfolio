import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../lib/utils"
import styles from "./button.module.scss"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          styles.button,
          styles[variant],
          styles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)



