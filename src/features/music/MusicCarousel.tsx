import PhotoCredit from "@/app/components/PhotoCredit"
import { TRY_HARD_TOWN_EP, TRY_TO_ACOUSTIC } from "@/app/constants/urls"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn-components/ui/carousel"
import StreamPopover from "./StreamPopover"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import tryToArtwork from "@/assets/try-to-acoustic.png"

const MusicCarousel = () => {
  return (
    <Carousel className="w-full shadow-md md:hidden dark:shadow-sm dark:shadow-gray-400">
      <CarouselContent>
        <CarouselItem className="relative flex justify-center">
          <Card>
            <img
              src={tryHardTownArtwork}
              alt="Try Hard Town EP"
              className="max-w-full"
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
        </CarouselItem>
        <CarouselItem>
          <Card>
            <img
              src={tryToArtwork}
              alt="Try To (Have a Good Time) artwork"
              className="max-w-full"
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
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="max-sm:text-bg h-8 w-8 bg-accent max-sm:left-1" />
      <CarouselNext className="max-sm:text-bg h-8 w-8 bg-accent max-sm:right-1" />
    </Carousel>
  )
}

export default MusicCarousel
