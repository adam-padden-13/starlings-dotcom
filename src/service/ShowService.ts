import type { Show } from "@/app/types/Show"
import { store } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export const fetchShows = async () => {
  const loadedShows: Show[] = []
  try {
    const response = await getDocs(collection(store, "shows"))
    response.forEach((song) => {
      let show = song.data() as Show
      loadedShows.push(show)
    })
    return loadedShows
  } catch (error) {
    console.error("error")
  }
}
