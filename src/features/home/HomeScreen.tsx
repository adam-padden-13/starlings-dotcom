import { Separator } from "@/components/ui/separator"
import ShowsSection from "../shows/ShowsSection"
import SignUpModal from "./components/SignUpModal"
import { pastShows, upcomingShows } from "@/app/constants/shows-data"
import { useState } from "react"

const HomeScreen = () => {
  const [showPastShows, setShowPastShows] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <img src="/src/assets/nick.jpg" alt="Nick" className="max-w-70" />
      <SignUpModal />
      <Separator />
      <ShowsSection
        shows={showPastShows ? pastShows : upcomingShows}
        toggleShows={(value) => {
          if (value === "past") setShowPastShows(true)
          else setShowPastShows(false)
        }}
      />
    </section>
  )
}

export default HomeScreen
