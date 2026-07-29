import PhotoCredit from "@/app/components/PhotoCredit"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcn-components/ui/carousel"

interface PhotoCarouselProps {
  photoURLs: string[]
}

const PhotoCarousel = ({ photoURLs }: PhotoCarouselProps) => {
  const photographerName = (url: string) => {
    const match = url.match(/starlings_([^_]+)_/)
    return match?.[1].replace(/-/g, " ") ?? ""
  }

  return (
    <Carousel className="w-full max-w-150">
      <CarouselContent>
        {photoURLs.map((url, index) => (
          <CarouselItem
            key={`${url}-${index}`}
            className="relative flex justify-center"
          >
            <img src={url} className="max-h-140 border" />
            <PhotoCredit name={photographerName(url)} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-sm:text-bg h-8 w-8 bg-accent max-sm:left-1" />
      <CarouselNext className="max-sm:text-bg h-8 w-8 bg-accent max-sm:right-1" />
    </Carousel>
  )
}

export default PhotoCarousel
