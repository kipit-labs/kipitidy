import * as React from "react"
import { cn } from "cn"

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./card.js"

/** A card, titled unless the page header already names it; every block of a page is one. */
function Section({
  title,
  description,
  actions,
  children,
  className,
  plain,
  id,
}: {
  /** Anchor for links to the card, e.g. `?tab=settings#maintenance`. */
  id?: string
  title?: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  children?: React.ReactNode
  className?: string
  /** No card: the block is the page's (or tab's) only content, already named by it. */
  plain?: boolean
}) {
  if (plain)
    return (
      <section id={id} className={cn("scroll-mt-20 space-y-4", className)}>
        {(title || description || actions) && (
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <div className="space-y-1">
              {title && <h2 className="font-medium">{title}</h2>}
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        )}
        {children}
      </section>
    )
  return (
    <Card id={id} className={cn("scroll-mt-20", className)}>
      {(title || description || actions) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
          {actions && <CardAction className="flex items-center gap-2">{actions}</CardAction>}
        </CardHeader>
      )}
      {children && <CardContent className="space-y-4">{children}</CardContent>}
    </Card>
  )
}

export { Section }
