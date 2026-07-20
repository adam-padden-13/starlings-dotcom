import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import tryToArtwork from "@/assets/try-to-acoustic.png"
import { TRY_HARD_TOWN_EP, TRY_TO_ACOUSTIC } from "@/app/constants/urls"
import StreamPopover from "./StreamPopover"

const MusicSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h2 className="self-center text-4xl">MUSIC</h2>
      <section className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
        <Card>
          <img
            src={tryHardTownArtwork}
            alt="Try Hard Town EP"
            className="max-w-70"
          />
          <CardHeader>
            <CardTitle>Try Hard Town E.P.</CardTitle>
            <CardDescription>2025</CardDescription>
          </CardHeader>
          <CardFooter className="flex w-full justify-center gap-4">
            <StreamPopover
              spotify={TRY_HARD_TOWN_EP.spotify}
              appleMusic={TRY_HARD_TOWN_EP.appleMusic}
              bandcamp={TRY_HARD_TOWN_EP.bandcamp}
            />
          </CardFooter>
        </Card>
        <Card>
          <img
            src={tryToArtwork}
            alt="Try To (Have a Good Time) artwork"
            className="max-w-70"
          />
          <CardHeader>
            <CardTitle>Try To (Have a Good Time) - Acoustic single</CardTitle>
            <CardDescription>2025</CardDescription>
          </CardHeader>
          <CardFooter className="flex w-full justify-center gap-4">
            <StreamPopover
              spotify={TRY_TO_ACOUSTIC.spotify}
              appleMusic={TRY_TO_ACOUSTIC.appleMusic}
              bandcamp={TRY_TO_ACOUSTIC.bandcamp}
            />
          </CardFooter>
        </Card>
      </section>
    </section>
  )
}

export default MusicSection
