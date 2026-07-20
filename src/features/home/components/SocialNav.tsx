import type { NavButton } from "@/app/types/NavButton"

const SocialNav = ({
  buttons,
  className,
}: {
  buttons: NavButton[]
  className?: string
}) => {
  return (
    <div className={className}>
      {buttons.map((button) => (
        <a target="_blank" key={button.href} href={button.href}>
          {button.icon}
        </a>
      ))}
    </div>
  )
}
export default SocialNav
