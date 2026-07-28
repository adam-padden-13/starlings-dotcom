import React from "react"
import AudioPlayer from "./features/audio-player/AudioPlayerContainer"
import Footer from "./features/home/components/Footer"
import Header from "./features/home/components/Header"
import HomeScreen from "./features/home/HomeScreen"
import { useTheme } from "./shadcn-components/theme-provider"
import { Route, Routes, useLocation } from "react-router"

export default function App() {
  const theme = useTheme()
  const location = useLocation()
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    "light"
  )

  // TODO: set resolved theme in global state with zustand
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
    <main className="mx-auto flex min-h-svh max-w-280 flex-col gap-6 px-5 pt-4 pb-18">
      <Header resolvedTheme={resolvedTheme} />

      <Routes>
        <Route
          index
          element={<HomeScreen isQRPath={location.pathname === "/qr-scan"} />}
        />
        <Route
          element={<HomeScreen isQRPath={location.pathname === "/qr-scan"} />}
          path="/qr-scan"
        />
      </Routes>
      <Footer />
      {location.pathname !== "/qr-scan" && (
        <AudioPlayer resolvedTheme={resolvedTheme} />
      )}
    </main>
  )
}
