import React from "react"
import { useTheme } from "@/shadcn-components/theme-provider"
import whiteLogo from "@/assets/starlings-logo-white.png"
import blackLogo from "@/assets/starlings-logo-black.png"

const Header = () => {
  return (
    <header className="relative flex h-16 items-center justify-between">
      {/* <NavDrawer
        className="md:hidden"
        navButtons={NAV_BUTTONS}
        socialButtons={SOCIAL_BUTTONS}
      /> */}
      {/* <DesktopNav buttons={NAV_BUTTONS} className="hidden md:flex" /> */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>
      {/* <SocialNav buttons={SOCIAL_BUTTONS} className="hidden gap-2 md:flex" /> */}
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
        <img src={whiteLogo} alt="Starlings Logo" className="max-w-60" />
      ) : (
        <img src={blackLogo} alt="Starlings Logo" className="max-w-60" />
      )}
    </div>
  )
}
