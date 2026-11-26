import * as React from "react"

import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./card.js"

/** A card holding irreversible actions. */
function DangerZone({
  children,
  title = "Danger zone",
  description,
}: {
  children: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
}) {
  return (
    <Card className="ring-destructive/30">
      <CardHeader>
        <CardTitle className="text-destructive">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        <CardAction className="flex items-center gap-2">{children}</CardAction>
      </CardHeader>
    </Card>
  )
}

export { DangerZone }
