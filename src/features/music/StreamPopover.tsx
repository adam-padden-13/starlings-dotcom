import { Button } from "@/shadcn-components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn-components/ui/popover"
import { RiAppleLine, RiSpotifyLine } from "@remixicon/react"
import bandcampLogo from "@/assets/bandcamp.svg"

interface StreamPopoverProps {
  spotify: string
  appleMusic: string
  bandcamp: string
}

const StreamPopover = ({
  spotify,
  appleMusic,
  bandcamp,
}: StreamPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="lg">STREAM</Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit flex-row">
        <a aria-label="Spotify link" href={spotify} target="_blank">
          <RiSpotifyLine size={30} />
        </a>
        <a aria-label="Apple Music link" href={appleMusic} target="_blank">
          <RiAppleLine size={30} />
        </a>
        <a aria-label="Bandcamp link" href={bandcamp} target="_blank">
          <img src={bandcampLogo} alt="Bandcamp" className="w-8" />
        </a>
      </PopoverContent>
    </Popover>
  )
}

export default StreamPopover
