import { RiLinksLine } from "@remixicon/react"
import { useTheme } from "./theme-provider"
import NavDrawer from "./NavDrawer"

const Header = () => {
  return (
    <section className="flex flex-row items-center justify-between">
      {/* <RiMenuLine size={24} className="shrink-0" /> */}
      <NavDrawer />
      <Logo />
      <div className="flex flex-row gap-3">
        <RiLinksLine size={24} className="shrink-0" />
      </div>
    </section>
  )
}
export default Header

const Logo = () => {
  const theme = useTheme()

  return (
    <>
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
    </>
  )
}
