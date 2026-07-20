import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import tryToArtwork from "@/assets/try-to-acoustic.png"
import { TRY_HARD_TOWN_EP } from "@/app/constants/urls"
import { RiAppleLine, RiSpotifyLine } from "@remixicon/react"
import bandcampLogo from "@/assets/bandcamp.svg"

const MusicSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h2 className="self-center text-4xl">MUSIC</h2>
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
          <a
            aria-label="Spotify link"
            href={TRY_HARD_TOWN_EP.spotify}
            target="_blank"
          >
            <RiSpotifyLine size={36} />
          </a>
          <a
            aria-label="Apple Music link"
            href={TRY_HARD_TOWN_EP.appleMusic}
            target="_blank"
          >
            <RiAppleLine size={36} />
          </a>
          <a
            aria-label="Bandcamp link"
            href={TRY_HARD_TOWN_EP.bandcamp}
            target="_blank"
          >
            <img src={bandcampLogo} alt="Bandcamp" className="w-8" />
          </a>
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
          <a
            aria-label="Spotify link"
            href={TRY_HARD_TOWN_EP.spotify}
            target="_blank"
          >
            <RiSpotifyLine size={36} />
          </a>
          <a
            aria-label="Apple Music link"
            href={TRY_HARD_TOWN_EP.appleMusic}
            target="_blank"
          >
            <RiAppleLine size={36} />
          </a>
          <a
            aria-label="Bandcamp link"
            href={TRY_HARD_TOWN_EP.bandcamp}
            target="_blank"
          >
            <img src={bandcampLogo} alt="Logo" className="w-8" />
          </a>
        </CardFooter>
      </Card>
    </section>
  )
}

export default MusicSection
