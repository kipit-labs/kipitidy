import * as React from "react"
import { cn } from "cn"

import { Checkbox } from "./checkbox.js"
import { Label } from "./label.js"

/** A checkbox with its label and an optional line of help under it. */
function CheckboxField({
  label,
  description,
  checked,
  onCheckedChange,
  className,
}: {
  label: React.ReactNode
  description?: React.ReactNode
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  className?: string
}) {
  const id = React.useId()
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <Checkbox id={id} className="mt-0.5" checked={checked} onCheckedChange={(v) => onCheckedChange(v === true)} />
      <div className="grid gap-1">
        <Label htmlFor={id}>{label}</Label>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </div>
  )
}

export { CheckboxField }
