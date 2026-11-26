import * as React from "react"

/** A large pick in a "choose one" step, e.g. a database engine or a password manager. */
function ChoiceTile({
  icon,
  title,
  description,
  badge,
  disabled,
  onClick,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  badge?: React.ReactNode
  disabled?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="group flex min-w-0 flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all outline-none hover:-translate-y-px hover:border-foreground/30 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
    >
      <span className="flex w-full items-start justify-between gap-2">
        <span className="flex size-11 items-center justify-center rounded-lg bg-muted [&>svg]:size-6">{icon}</span>
        {badge}
      </span>
      <span className="w-full min-w-0 space-y-0.5">
        <span className="block font-medium">{title}</span>
        {description && <span className="block text-xs text-muted-foreground">{description}</span>}
      </span>
    </button>
  )
}

export { ChoiceTile }
