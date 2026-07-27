import type { Song } from "@/app/types/Song"
import {
  ItemActions,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/shadcn-components/ui/item"
import { useAudioPlayer } from "./stores/audioPlayerStore"
import { RiPlayCircleLine } from "@remixicon/react"
import Wave from "@/assets/wave.svg?react"

interface SongItemProps {
  song: Song
  selectSong: () => void
}

const SongItem = ({ song, selectSong }: SongItemProps) => {
  const { currentSong } = useAudioPlayer()

  const isSelected = song.id === currentSong?.id

  return (
    <Item
      variant="outline"
      className={`bg-background ${isSelected ? "border-accent-foreground" : "border-accent"} shadow-sm`}
    >
      <ItemContent className={`w-full`} onClick={selectSong}>
        <ItemTitle>{song.title}</ItemTitle>
        <ItemDescription>{song.collectionName}</ItemDescription>
      </ItemContent>
      <ItemActions>
        {isSelected ? (
          <Wave className="w-16 text-primary" />
        ) : (
          <RiPlayCircleLine
            aria-label="play music"
            size={40}
            onClick={selectSong}
          />
        )}
      </ItemActions>
    </Item>
  )
}

export default SongItem
