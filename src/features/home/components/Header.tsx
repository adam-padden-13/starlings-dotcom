import whiteLogo from "@/assets/starlings-logo-white.png"
import blackLogo from "@/assets/starlings-logo-black.png"

interface HeaderProps {
  resolvedTheme: "light" | "dark"
}

const Header = ({ resolvedTheme }: HeaderProps) => {
  return (
    <header className="relative flex h-16 items-center justify-between">
      {/* <NavDrawer
        className="md:hidden"
        navButtons={NAV_BUTTONS}
        socialButtons={SOCIAL_BUTTONS}
      /> */}
      {/* <DesktopNav buttons={NAV_BUTTONS} className="hidden md:flex" /> */}
      <div className="absolute left-1/2 -translate-x-1/2">
        {resolvedTheme === "dark" ? (
          <img src={whiteLogo} alt="Starlings Logo" className="max-w-60" />
        ) : (
          <img src={blackLogo} alt="Starlings Logo" className="max-w-60" />
        )}
      </div>
      {/* <SocialNav buttons={SOCIAL_BUTTONS} className="hidden gap-2 md:flex" /> */}
    </header>
  )
}
export default Header
