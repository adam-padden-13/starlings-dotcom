import { RiPauseCircleLine, RiPlayCircleLine } from "@remixicon/react"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"

interface FooterPlayerProps {
  isPlaying: boolean
  togglePlayPause: () => void
}

const FooterPlayer = ({ isPlaying, togglePlayPause }: FooterPlayerProps) => {
  return (
    <div className="flex items-center justify-between">
      <img src={tryHardTownArtwork} alt="Try Hard Town EP" className="w-10" />
      <div className="w-full overflow-hidden whitespace-nowrap">
        <span className="inline-block animate-marquee text-sm md:animate-none md:p-2">
          Grasping Reaching - Demo Drop #1 - Starlings
        </span>
      </div>
      {isPlaying ? (
        <RiPauseCircleLine
          aria-label="pause music"
          size={50}
          onClick={togglePlayPause}
        />
      ) : (
        <RiPlayCircleLine
          aria-label="play music"
          size={50}
          onClick={togglePlayPause}
        />
      )}
    </div>
  )
}

export default FooterPlayer
