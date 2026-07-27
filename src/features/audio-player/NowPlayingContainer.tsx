import { RiPauseCircleLine, RiPlayCircleLine } from "@remixicon/react"
import tryHardTownArtwork from "@/assets/try-hard-town-ep.png"
import type { Song } from "@/app/types/Song"

interface NowPlayingContainerProps {
  song: Song | undefined
  isPlaying: boolean
  togglePlayPause: () => void
  showButton: boolean
  openDrawer: () => void
}

const NowPlayingContainer = ({
  song,
  isPlaying,
  togglePlayPause,
  showButton,
  openDrawer,
}: NowPlayingContainerProps) => {
  return (
    <div
      className="flex items-center justify-between bg-background-alt text-[12px]"
      onClick={openDrawer}
    >
      <img src={tryHardTownArtwork} alt="Try Hard Town EP" className="w-8" />

      {song && (
        <span className="inline-block h-10 w-full animate-marquee overflow-hidden whitespace-nowrap md:animate-none md:p-2">
          {`${song.title} - ${song.collectionName}`}
        </span>
      )}
      {showButton ? (
        isPlaying ? (
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 hover:bg-muted/20 focus:ring-2 focus:ring-ring focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              togglePlayPause()
            }}
            aria-label="pause music"
          >
            <RiPauseCircleLine size={44} />
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 hover:bg-muted/20 focus:ring-2 focus:ring-ring focus:outline-none"
            onClick={(e) => {
              e.stopPropagation()
              togglePlayPause()
            }}
            aria-label="play music"
          >
            <RiPlayCircleLine size={44} />
          </button>
        )
      ) : null}
    </div>
  )
}

export default NowPlayingContainer
