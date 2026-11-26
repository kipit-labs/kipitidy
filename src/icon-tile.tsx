import { cn } from "cn"
import type { LucideIcon } from "lucide-react"

/** An icon in a tinted rounded square, the visual anchor of a card. */
function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", className)}>
      <Icon className="size-5" />
    </span>
  )
}

export { IconTile }
