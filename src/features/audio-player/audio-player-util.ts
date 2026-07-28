import type { Song } from "@/app/types/Song"

export const sortSongs = (songs: Song[]) => {
  return [...songs].sort((a, b) => a.id - b.id)
}
