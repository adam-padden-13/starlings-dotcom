import { Separator } from "@/shadcn-components/ui/separator"
import ShowsSection from "./sections/ShowsSection"
import SignUpModal from "./components/SignUpModal"
import { useEffect, useState } from "react"
import MusicSection from "../music/MusicSection"
import MOBILE_HERO from "@/assets/hero-mobile.jpg"
import DESKTOP_HERO from "@/assets/hero-desktop.jpg"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shadcn-components/ui/alert"
import { RiCheckboxCircleLine } from "@remixicon/react"
import QRScanModal from "./components/QRScanModal"
import { fetchPhotoUrls } from "@/service/GalleryService"
import PhotoCarousel from "./components/PhotoCarousel"
import PhotoCredit from "@/app/components/PhotoCredit"
import type { Show } from "@/app/types/Show"
import { fetchShows } from "@/service/ShowService"
import { isFutureDate, sortShows } from "@/lib/utils"
interface HomeScreenProps {
  isQRPath: boolean
}

const HomeScreen = ({ isQRPath }: HomeScreenProps) => {
  const [showPastShows, setShowPastShows] = useState(false)
  const [successAlert, setSuccessAlert] = useState(false)
  const [photoURLs, setPhotoURLs] = useState<string[]>([])
  const [upcomingShows, setUpcomingShows] = useState<Show[]>([])
  const [pastShows, setPastShows] = useState<Show[]>([])

  const sortedUpcomingShows = sortShows(upcomingShows)
  const sortedPastShows = sortShows(pastShows).reverse()

  useEffect(() => {
    fetchPhotoUrls().then((res) => setPhotoURLs(res))
    fetchShows().then((res) => {
      const isPast: Show[] = []
      const isUpcoming: Show[] = []
      if (res) {
        res.forEach((show) => {
          const showDate = new Date(show.date)
          if (isFutureDate(showDate)) {
            isUpcoming.push(show)
          } else {
            isPast.push(show)
          }
        })
      }
      setUpcomingShows(isUpcoming)
      setPastShows(isPast)
    })
  }, [])

  return (
    <section className="flex flex-col items-center justify-center gap-6">
      {isQRPath && <QRScanModal />}
      <div className="relative md:hidden">
        <img
          src={MOBILE_HERO}
          alt="Nick & Adam from Starlings. Photographer: Kris Herrmann"
          className="max-w-70"
        />
        <PhotoCredit name="Kris Herrmann" />
      </div>
      <div className="relative hidden md:block">
        <img
          src={DESKTOP_HERO}
          alt="Nick from Starlings. Photographer: Alex Flegal"
          className="max-w-160"
        />
        <PhotoCredit name="Alex Flegal" />
      </div>

      {successAlert ? (
        <Alert className="w-70 gap-2 border-green-500 p-3">
          <div className="flex flex-row items-center gap-3">
            <RiCheckboxCircleLine className="text-green-500" size={20} />
            <AlertTitle className="text-xs">Thank you!</AlertTitle>
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
        shows={showPastShows ? sortedPastShows : sortedUpcomingShows}
        toggleShows={(value) => {
          if (value === "past") setShowPastShows(true)
          else setShowPastShows(false)
        }}
      />
      <MusicSection />
      <section className="flex w-full flex-col items-center gap-4">
        <h2 className="self-center text-4xl">PHOTOS</h2>
        <PhotoCarousel photoURLs={photoURLs} />
      </section>
    </section>
  )
}

export default HomeScreen
