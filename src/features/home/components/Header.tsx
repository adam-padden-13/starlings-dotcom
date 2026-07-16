import React from "react"
import { useTheme } from "@/shadcn-components/theme-provider"
import NavDrawer from "@/features/home/components/NavDrawer"
import type { NavButton } from "@/app/types/NavButton"
import { Button } from "@/shadcn-components/ui/button"
import { NAV_BUTTONS, SOCIAL_BUTTONS } from "@/app/constants/button-values"

const Header = () => {
  return (
    <header className="relative flex h-16 items-center justify-between">
      <NavDrawer
        className="md:hidden"
        navButtons={NAV_BUTTONS}
        socialButtons={SOCIAL_BUTTONS}
      />
      <DesktopNav buttons={NAV_BUTTONS} className="hidden md:flex" />
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>
      <SocialNav buttons={SOCIAL_BUTTONS} className="hidden gap-2 md:flex" />
    </header>
  )
}
export default Header

const Logo = () => {
  const theme = useTheme()
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    "light"
  )

  React.useEffect(() => {
    const resolveTheme = () => {
      if (theme.theme === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setResolvedTheme(isDark ? "dark" : "light")
      } else {
        setResolvedTheme(theme.theme)
      }
    }

    resolveTheme()
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    mediaQuery.addEventListener("change", resolveTheme)
    return () => mediaQuery.removeEventListener("change", resolveTheme)
  }, [theme.theme])

  return (
    <div>
      {resolvedTheme === "dark" ? (
        <img
          src="/src/assets/starlings-logo-white.png"
          alt="Starlings Logo"
          className="max-w-60 md:max-w-48 lg:max-w-50"
        />
      ) : (
        <img
          src="/src/assets/starlings-logo-black.png"
          alt="Starlings Logo"
          className="max-w-60 md:max-w-48 lg:max-w-50"
        />
      )}
    </div>
  )
}

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
          className="text-xs md:inline-flex"
          variant="ghost"
          asChild
        >
          <a href={button.href}>{button.label}</a>
        </Button>
      ))}
    </div>
  )
}

const SocialNav = ({
  buttons,
  className,
}: {
  buttons: NavButton[]
  className?: string
}) => {
  return <div className={className}>{buttons.map((button) => button.icon)}</div>
}
