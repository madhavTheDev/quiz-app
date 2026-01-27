import { ModeToggle } from "../theme/mode-toggle"


export const Footer = () => {
  return (
    <div className="w-full border-t border-t-border px-6 flex flex-row items-center justify-center shrink-0 h-14 py-2 sticky bottom-0 inset-x-0 bg-background text-foreground z-50">
            <ModeToggle />
    </div>
  )
}
