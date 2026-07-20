import type { NavButton } from "@/app/types/NavButton"
import { Button } from "@/shadcn-components/ui/button"

const DesktopNav = ({
  buttons,
  className,
}: {
  buttons: NavButton[]
  className?: string
}) => {
  return (
    <div className={className}>
      {buttons.map((button) => (
        <Button
          key={button.href}
          className="text-lg md:inline-flex"
          variant="ghost"
          asChild
        >
          <a href={button.href}>{button.label}</a>
        </Button>
      ))}
    </div>
  )
}

export default DesktopNav
