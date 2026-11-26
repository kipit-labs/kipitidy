import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { Card } from "./card.js"
import { IconTile } from "./icon-tile.js"

/** What a list shows before it has anything, with the action that fills it. */
function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon: LucideIcon
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <Card className="items-center gap-3 border border-dashed py-12 text-center ring-0">
      <IconTile icon={icon} className="size-11" />
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        {description && <p className="mx-auto max-w-sm text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </Card>
  )
}

export { EmptyState }
