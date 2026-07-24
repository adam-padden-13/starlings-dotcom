import { RiPauseCircleLine, RiPlayCircleLine } from "@remixicon/react"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import type { Song } from "@/app/types/Song"

interface NowPlayingContainerProps {
  songs: Song[]
  isPlaying: boolean
  togglePlayPause: () => void
  showButton: boolean
}

const NowPlayingContainer = ({
  songs,
  isPlaying,
  togglePlayPause,
  showButton,
}: NowPlayingContainerProps) => {
  return (
    <div className="flex items-center justify-between">
      <img src={tryHardTownArtwork} alt="Try Hard Town EP" className="w-10" />
      <div className="w-full overflow-hidden whitespace-nowrap">
        {songs && songs[0] && (
          <span className="inline-block animate-marquee text-sm md:animate-none md:p-2">
            {`${songs[0].title} - ${songs[0].collectionName} - Starlings`}
          </span>
        )}
      </div>
      {showButton ? (
        isPlaying ? (
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
        )
      ) : (
        <></>
      )}
    </div>
  )
}

export default NowPlayingContainer
