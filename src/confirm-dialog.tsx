import * as React from "react"
import { TriangleAlert } from "lucide-react"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog.js"
import { Button } from "./button.js"
import { FloatingInput } from "./floating-input.js"

/**
 * Asks before a destructive action. With typeToConfirm, the user must type
 * that name first; onConfirm receives what they typed.
 */
function ConfirmDialog({
  trigger,
  title,
  description,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  destructive = true,
  typeToConfirm,
  typeToConfirmLabel,
  onConfirm,
}: {
  trigger: React.ReactNode
  title: string
  description?: React.ReactNode
  confirmLabel?: string
  cancelLabel?: string
  destructive?: boolean
  typeToConfirm?: string
  /** Label of the field typeToConfirm asks for; defaults to `Type "<name>" to confirm`. */
  typeToConfirmLabel?: string
  onConfirm: (typed: string) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [typed, setTyped] = React.useState("")
  const ok = !typeToConfirm || typed === typeToConfirm

  const onOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) setTyped("")
  }
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!ok) return
    onConfirm(typed)
    onOpenChange(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <form onSubmit={onSubmit} className="contents">
          <AlertDialogHeader>
            {destructive && (
              <AlertDialogMedia className="bg-destructive/10 text-destructive">
                <TriangleAlert />
              </AlertDialogMedia>
            )}
            <AlertDialogTitle>{title}</AlertDialogTitle>
            {description && <AlertDialogDescription>{description}</AlertDialogDescription>}
          </AlertDialogHeader>
          {typeToConfirm && (
            <FloatingInput
              label={typeToConfirmLabel ?? `Type "${typeToConfirm}" to confirm`}
              autoComplete="off"
              autoFocus
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
            />
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
            <Button
              type="submit"
              disabled={!ok}
              className={destructive ? "bg-destructive text-white hover:bg-destructive/80" : undefined}
            >
              {confirmLabel}
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { ConfirmDialog }
