export interface Song {
  id: number
  title: string
  cloudStoragePath: string
  cloudAudioURL: string
  type: "demo" | "live"
  collectionName: string
}
