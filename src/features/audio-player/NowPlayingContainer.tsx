import { RiPauseCircleLine, RiPlayCircleLine } from "@remixicon/react"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import type { Song } from "@/app/types/Song"

interface NowPlayingContainerProps {
  song: Song | undefined
  isPlaying: boolean
  togglePlayPause: () => void
  showButton: boolean
  toggleDrawer: () => void
}

const NowPlayingContainer = ({
  song,
  isPlaying,
  togglePlayPause,
  showButton,
  toggleDrawer,
}: NowPlayingContainerProps) => {
  return (
    <div
      className="flex items-center justify-between bg-background-alt text-[12px]"
      onClick={toggleDrawer}
    >
      <img src={tryHardTownArtwork} alt="Try Hard Town EP" className="w-8" />

      {song && (
        <span className="inline-block w-full animate-marquee overflow-hidden text-center whitespace-nowrap md:animate-none md:p-2">
          {`${song.title} - ${song.collectionName}`}
        </span>
      )}
      {showButton ? (
        isPlaying ? (
          <RiPauseCircleLine
            size={48}
            onClick={(e) => {
              e.stopPropagation()
              togglePlayPause()
            }}
          />
        ) : (
          <RiPlayCircleLine
            size={48}
            onClick={(e) => {
              e.stopPropagation()
              togglePlayPause()
            }}
          />
        )
      ) : null}
    </div>
  )
}

export default NowPlayingContainer
