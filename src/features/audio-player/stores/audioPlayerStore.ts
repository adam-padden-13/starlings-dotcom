import type { Song } from "@/app/types/Song"
import { create } from "zustand"

export const PlayerSnapPoints = {
  sm: "80px",
  lg: "500px",
}

type SnapValue = string | number | null

interface AudioPlayerState {
  songs: Song[]
  currentSong: Song | undefined
  playerSnap: SnapValue
  setSongs: SetSongs
  setCurrentSong: SetCurrentSong
  setPlayerSnap: SetPlayerSnap
  openPlayer: OpenPlayer
}

interface SetSongs {
  (songs: Song[]): void
}

interface SetCurrentSong {
  (song: Song): void
}

interface SetPlayerSnap {
  (snap: SnapValue): void
}

interface OpenPlayer {
  (): void
}

export const useAudioPlayer = create<AudioPlayerState>((set) => ({
  songs: [],
  currentSong: undefined,
  playerSnap: PlayerSnapPoints.sm,
  setSongs: (songs) => set({ songs }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  setPlayerSnap: (playerSnap) => set({ playerSnap }),
  openPlayer: () => set({ playerSnap: PlayerSnapPoints.lg }),
}))
