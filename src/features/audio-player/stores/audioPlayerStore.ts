import type { Song } from "@/app/types/Song"
import { create } from "zustand"

interface AudioPlayerState {
  songs: Song[]
  currentSong: Song | undefined
  setSongs: SetSongs
  setCurrentSong: SetCurrentSong
}

interface SetSongs {
  (songs: Song[]): void
}

interface SetCurrentSong {
  (song: Song): void
}

export const useAudioPlayer = create<AudioPlayerState>((set) => ({
  songs: [],
  currentSong: undefined,
  setSongs: (songs) => set({ songs }),
  setCurrentSong: (currentSong) => set({ currentSong }),
}))
