import * as React from "react"
import { cn } from "../lib/utils"
import styles from "./badge.module.scss"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export const Badge = ({ className, variant = 'default', ...props }: Readonly<BadgeProps>) => {
  return (
    <div className={cn(styles.badge, styles[variant], className)} {...props} />
  )
}

