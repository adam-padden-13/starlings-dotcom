import { useTheme } from "./theme-provider"
import NavDrawer from "./NavDrawer"
import type { NavButton } from "@/app/types/NavButton"

const Header = () => {
  return (
    <header className="relative flex h-16 items-center">
      <NavDrawer className="md:hidden" buttons={NAV_BUTTONS} />
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  )
}
export default Header

const Logo = () => {
  const theme = useTheme()

  return (
    <div>
      {theme.theme === "dark" ? (
        <img
          src="/src/assets/starlings-logo-white.png"
          alt="Starlings Logo"
          className="max-w-60"
        />
      ) : (
        <img
          src="/src/assets/starlings-logo-black.png"
          alt="Starlings Logo"
          className="max-w-60"
        />
      )}
    </div>
  )
}

const NAV_BUTTONS: NavButton[] = [
  { label: "HOME", href: "/" },
  { label: "SHOWS", href: "/shows" },
  { label: "MUSIC", href: "/music" },
  { label: "SONG EXPLORER", href: "/song-explorer" },
]
