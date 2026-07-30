import type { Song } from "@/app/types/Song"
import {
  ItemActions,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/shadcn-components/ui/item"
import { useAudioPlayer } from "../stores/audioPlayerStore"
import { RiPlayCircleLine } from "@remixicon/react"
import Wave from "@/assets/wave.svg?react"
import { logEvent } from "firebase/analytics"
import { analytics } from "@/firebase"

interface SongItemProps {
  song: Song
  selectSong: () => void
}

const SongItem = ({ song, selectSong }: SongItemProps) => {
  const { currentSong } = useAudioPlayer()

  const isSelected = song.id === currentSong?.id

  const handleSelect = () => {
    selectSong()
    logEvent(analytics, "play_song", { songTitle: currentSong?.title })
  }

  return (
    <Item
      variant="outline"
      className={`bg-background ${isSelected ? "border-accent-foreground" : "border-accent"} shadow-sm dark:shadow-xs dark:shadow-gray-400`}
    >
      <ItemContent className={`w-full`} onClick={handleSelect}>
        <ItemTitle>
          {song.title} - {song.type.toUpperCase()}
        </ItemTitle>
        <ItemDescription>{song.collectionName}</ItemDescription>
      </ItemContent>
      <ItemActions>
        {isSelected ? (
          <Wave className="w-16 text-primary" />
        ) : (
          <RiPlayCircleLine
            aria-label="play music"
            size={40}
            onClick={handleSelect}
          />
        )}
      </ItemActions>
    </Item>
  )
}

export default SongItem
