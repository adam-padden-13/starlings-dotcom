import { useTheme } from "./theme-provider"
import NavDrawer from "./NavDrawer"

const Header = () => {
  return (
    <section className="relative flex h-16 items-center">
      <NavDrawer />
      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>
    </section>
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
