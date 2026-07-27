import { RiPauseCircleLine, RiPlayCircleLine } from "@remixicon/react"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import type { Song } from "@/app/types/Song"

interface NowPlayingContainerProps {
  song: Song | undefined
  isPlaying: boolean
  togglePlayPause: () => void
  showButton: boolean
}

const NowPlayingContainer = ({
  song,
  isPlaying,
  togglePlayPause,
  showButton,
}: NowPlayingContainerProps) => {
  return (
    <div className="flex items-center justify-between bg-background-alt">
      <img src={tryHardTownArtwork} alt="Try Hard Town EP" className="w-8" />
      <div className="w-full overflow-hidden whitespace-nowrap">
        {song && (
          <span className="inline-block animate-marquee text-sm md:animate-none md:p-2">
            {`${song.title} - ${song.collectionName} - Starlings`}
          </span>
        )}
      </div>
      {showButton ? (
        isPlaying ? (
          <RiPauseCircleLine
            aria-label="pause music"
            size={40}
            onClick={togglePlayPause}
          />
        ) : (
          <RiPlayCircleLine
            aria-label="play music"
            size={40}
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
