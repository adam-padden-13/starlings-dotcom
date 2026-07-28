import { RiPauseCircleLine, RiPlayCircleLine } from "@remixicon/react"
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
      {song && (
        <span className="inline-block w-full overflow-hidden text-center text-pretty md:p-2">
          {`${song.title} - ${song.collectionName}`}
        </span>
      )}
      {showButton ? (
        isPlaying ? (
          <RiPauseCircleLine
            size={40}
            onClick={(e) => {
              e.stopPropagation()
              togglePlayPause()
            }}
          />
        ) : (
          <RiPlayCircleLine
            size={40}
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
