import { Separator } from "@/components/ui/separator"
import ShowsSection from "./sections/ShowsSection"
import SignUpModal from "./components/SignUpModal"
import { pastShows, upcomingShows } from "@/app/constants/shows-data"
import { useState } from "react"
import MusicSection from "../music/MusicSection"
import mainPhoto from "@/assets/nick-1.jpg"
import mainPhoto2 from "@/assets/nick-3.jpg"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RiCheckboxCircleLine } from "@remixicon/react"

const HomeScreen = () => {
  const [showPastShows, setShowPastShows] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)

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

      {successAlert ? (
        <Alert className="w-70 gap-2 border-green-500 p-3">
          <div className="flex flex-row items-center gap-3">
            <RiCheckboxCircleLine className="text-green-500" size={20} />
            <AlertTitle className="text-xs">Success</AlertTitle>
          </div>
          <AlertDescription className="text-[10px]">
            You're on the list, stay tuned for updates.
          </AlertDescription>
        </Alert>
      ) : (
        <SignUpModal handleSuccess={() => setSuccessAlert(true)} />
      )}

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
