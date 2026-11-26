import * as React from "react"
import { cn } from "cn"
import type { LucideIcon } from "lucide-react"

import { Card } from "./card.js"

/** A small metric tile, e.g. "Services 4". */
function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  tone,
}: {
  icon: LucideIcon
  label: React.ReactNode
  value: React.ReactNode
  hint?: React.ReactNode
  tone?: "good" | "warn" | "bad"
}) {
  return (
    <Card size="sm" className="gap-1 px-3">
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="size-3.5" />
        {label}
      </p>
      <p
        className={cn(
          "text-2xl font-semibold tabular-nums",
          tone === "good" && "text-emerald-600 dark:text-emerald-400",
          tone === "warn" && "text-amber-600 dark:text-amber-400",
          tone === "bad" && "text-destructive",
        )}
      >
        {value}
      </p>
      {hint && <p className="truncate text-xs text-muted-foreground">{hint}</p>}
    </Card>
  )
}

export { StatCard }
