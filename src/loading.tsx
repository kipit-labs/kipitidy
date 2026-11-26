import { cn } from "cn"

import { Spinner } from "./spinner.js"

/** What a page or block shows while its data loads. */
function Loading({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center py-12 text-muted-foreground", className)}>
      <Spinner className="size-6" />
    </div>
  )
}

export { Loading }
