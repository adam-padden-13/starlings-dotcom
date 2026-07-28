import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/ui/card"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import tryToArtwork from "@/assets/try-to-acoustic.png"
import { TRY_HARD_TOWN_EP, TRY_TO_ACOUSTIC } from "@/app/constants/urls"
import StreamPopover from "./StreamPopover"
import { Button } from "@/shadcn-components/ui/button"
import { useAudioPlayer } from "@/features/audio-player/stores/audioPlayerStore"

const MusicSection = () => {
  const { openPlayer } = useAudioPlayer()

  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h2 className="self-center text-4xl">MUSIC</h2>
      <section className="flex w-full flex-col items-center justify-center gap-6 md:flex-row md:items-baseline md:gap-10">
        <Card className="shadow-md">
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
        <Card className="shadow-md">
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
      <Card className="w-full max-w-150 bg-accent shadow-md">
        <CardHeader>
          <CardTitle>Unreleased Music</CardTitle>
          <CardDescription>
            Open the audio player to check out some of our unreleased music.
            <br />
            <br />
            Here you'll find things like work in progress demos & live versions
            of songs.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex w-full justify-center gap-4">
          <Button
            className="dark:bg-highlight h-12 w-full border-primary bg-mint-green text-sm dark:border-accent dark:text-accent"
            variant="outline"
            onClick={openPlayer}
          >
            OPEN AUDIO PLAYER
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

export default MusicSection
