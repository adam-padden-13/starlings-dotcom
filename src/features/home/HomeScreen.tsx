import { Separator } from "@/components/ui/separator"
import ShowsSection from "./sections/ShowsSection"
import SignUpModal from "./components/SignUpModal"
import { pastShows, upcomingShows } from "@/app/constants/shows-data"
import { useState } from "react"
import MusicSection from "../music/MusicSection"
import mainPhoto from "@/assets/nick-1.jpg"
import mainPhoto2 from "@/assets/nick-3.jpg"

const HomeScreen = () => {
  const [showPastShows, setShowPastShows] = useState(false)

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <div className="relative md:hidden">
        <img
          src={mainPhoto}
          alt="Nick & Adam from Starlings. Photographer: Kris Herrmann"
          className="max-w-70"
        />
        <span className="absolute right-1 bottom-1 rounded-sm bg-black px-1 text-[8px] text-gray-300">
          © Kris Herrmann
        </span>
      </div>
      <div className="relative hidden md:block">
        <img
          src={mainPhoto2}
          alt="Nick from Starlings. Photographer: Alex Flegal"
          className="max-w-160"
        />
        <span className="absolute right-1 bottom-1 rounded-sm bg-black px-1 text-[8px] text-gray-300">
          © Alex Flegal
        </span>
      </div>
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
