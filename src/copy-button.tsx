import { useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "./button.js"

function CopyButton({ value, label = "Copy", onCopy }: { value: string; label?: string; onCopy?: () => void }) {
  const [copied, setCopied] = useState(false)
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-xs"
      aria-label={label}
      title={label}
      onClick={() => {
        navigator.clipboard.writeText(value)
        setCopied(true)
        onCopy?.()
        setTimeout(() => setCopied(false), 1500)
      }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}

/** A value in a bordered box with a copy button, e.g. a token or a URL. */
function CopyField({ value, label, onCopy }: { value: string; label?: string; onCopy?: () => void }) {
  return (
    <div className="flex items-center gap-1 rounded-lg border bg-muted/40 py-1 pr-1 pl-2.5">
      <code className="flex-1 font-mono text-xs break-all">{value}</code>
      <CopyButton value={value} label={label} onCopy={onCopy} />
    </div>
  )
}

export { CopyButton, CopyField }
