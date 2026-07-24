import { useEffect, useState } from "react"
import { Drawer } from "vaul"
import FooterPlayer from "./FooterPlayer"
import type { Song } from "@/app/types/Song"
import { fetchSongs } from "@/service/AudioPlayerService"

const snapPoints = ["80px", "300px"]

const AudioPlayer = () => {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0])
  const [isOpen, setIsOpen] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const [songs, setSongs] = useState<Song[]>([])

  useEffect(() => {
    fetchSongs().then((response) => {
      if (response && response?.length > 0) {
        setSongs(response)
      }
    })
  }, [])

  return (
    <Drawer.Root
      snapPoints={snapPoints}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      modal={false}
      open={isOpen}
      onOpenChange={setIsOpen}
      dismissible={false} // TODO: Figure out dismissable behavior
    >
      {!isOpen && (
        <Drawer.Trigger className="fixed top-0 left-0 w-full items-center">
          OPEN MUSIC PLAYER
        </Drawer.Trigger>
      )}
      <Drawer.Portal>
        <Drawer.Content
          data-testid="content"
          className="fixed inset-x-3 bottom-3 z-50 flex h-full max-h-[calc(97%-0.75rem)] flex-col rounded-xl border bg-background p-2 shadow-xl shadow-blue-700"
        >
          {snap === "80px" ? (
            <>
              <FooterPlayer
                songs={songs}
                isPlaying={isPlaying}
                togglePlayPause={() => setIsPlaying((prev) => !prev)}
              />
            </>
          ) : (
            <>
              {songs && songs[0] && (
                <audio
                  controlsList="nodownload noplaybackrate"
                  controls
                  src={songs[0].cloudAudioURL}
                />
              )}
            </>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default AudioPlayer
