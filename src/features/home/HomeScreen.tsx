import { Separator } from "@/components/ui/separator"
import ShowsSection from "./sections/ShowsSection"
import SignUpModal from "./components/SignUpModal"
import { pastShows, upcomingShows } from "@/app/constants/shows-data"
import { useState } from "react"
import MusicSection from "../music/MusicSection"
import mainPhoto from "@/assets/nick.jpg"

const HomeScreen = () => {
  const [showPastShows, setShowPastShows] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <img
        src={mainPhoto}
        alt="Nick & Adam from Starlings"
        className="max-w-70"
      />
      <SignUpModal />
      <Separator />
      <ShowsSection
        shows={showPastShows ? pastShows : upcomingShows}
        toggleShows={(value) => {
          if (value === "past") setShowPastShows(true)
          else setShowPastShows(false)
        }}
      />
      <MusicSection />
    </section>
  )
}

export default HomeScreen
