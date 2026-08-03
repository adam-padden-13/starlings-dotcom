import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn-components/ui/card"
import SongItem from "../components/SongItem"
import { useAudioPlayer } from "../stores/audioPlayerStore"
import { fetchSongs } from "@/service/AudioPlayerService"
import { useEffect } from "react"
import { sortSongs } from "../audio-player-util"

const EmbeddedAudioPlayer = () => {
  const { songs, setSongs, setCurrentSong } = useAudioPlayer()

  useEffect(() => {
    fetchSongs().then((response) => {
      if (response && response?.length > 0) {
        setSongs(response)
      }
    })
  }, [])

  return (
    <Card
      className="w-full bg-accent shadow-md dark:shadow-sm dark:shadow-gray-400"
      id="embedded-audio-player"
    >
      <CardHeader>
        <CardTitle className="text-center text-lg">UNRELEASED MUSIC</CardTitle>
        <CardDescription className="text-center">
          DEMOS | SONG SKETCHES | LIVE VERSIONS
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-2">
          {songs.length > 0 &&
            sortSongs(songs).map((song) => (
              <SongItem
                key={song.id}
                song={song}
                selectSong={() => setCurrentSong(song)}
              />
            ))}
        </section>
      </CardContent>
      <CardFooter className="flex w-full justify-center gap-4"></CardFooter>
    </Card>
  )
}

export default EmbeddedAudioPlayer
