import type { Song } from "@/app/types/Song"
import { store } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export const fetchSongs = async () => {
  const loadedSongs: Song[] = []
  try {
    const response = await getDocs(collection(store, "songs"))
    response.forEach((song) => {
      let currentSong = song.data() as Song
      loadedSongs.push(currentSong)
    })
    return loadedSongs
  } catch (error) {
    console.error("error")
  }
}
