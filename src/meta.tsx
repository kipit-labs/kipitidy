import * as React from "react"
import { cn } from "cn"
import type { LucideIcon } from "lucide-react"

/** A row of small facts, each led by its icon instead of a separator. */
function Meta({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("flex min-w-0 flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-muted-foreground", className)}>{children}</span>
  )
}

function MetaItem({ icon: Icon, children, className }: { icon?: LucideIcon; children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-1 [&>svg]:size-3 [&>svg]:shrink-0", className)}>
      {Icon && <Icon />}
      {children}
    </span>
  )
}

export { Meta, MetaItem }
