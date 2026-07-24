import { createRef, useEffect, useState, type Ref } from "react"
import { Drawer } from "vaul"
import NowPlayingContainer from "./NowPlayingContainer"
import type { Song } from "@/app/types/Song"
import { fetchSongs } from "@/service/AudioPlayerService"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import {
  RiArrowLeftDoubleLine,
  RiArrowRightDoubleLine,
  RiForward5Line,
  RiPauseLine,
  RiPlayCircleLine,
  RiRepeatLine,
  RiReplay5Line,
  RiVolumeMuteLine,
  RiVolumeUpLine,
} from "@remixicon/react"
import type H5AudioPlayer from "react-h5-audio-player"

const snapPoints = ["80px", "200px", "500px"]

interface AudioPlayerContainerProps {
  resolvedTheme: "light" | "dark"
}

const AudioPlayerContainer = ({ resolvedTheme }: AudioPlayerContainerProps) => {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0])
  const [isOpen, setIsOpen] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const [songs, setSongs] = useState<Song[]>([])

  const audioPlayerRef: Ref<H5AudioPlayer> | undefined = createRef()

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
          <NowPlayingContainer
            songs={songs}
            isPlaying={isPlaying}
            showButton={snap === "80px"}
            togglePlayPause={() => {
              if (audioPlayerRef.current?.audio.current.paused)
                audioPlayerRef.current?.audio.current.play()
              else audioPlayerRef.current?.audio.current.pause()
            }}
          />
          {songs && songs[0] && (
            <AudioPlayer
              ref={audioPlayerRef}
              style={{
                background: resolvedTheme === "dark" ? "black" : "white",
              }}
              className="mt-4 rounded-lg border border-muted"
              src={songs[0].cloudAudioURL}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onPlayError={(e) => console.log("onPlayError")}
              preload="none"
              autoPlay={true}
              // showSkipControls={true}
              showJumpControls={true}
              showFilledVolume={false}
              timeFormat="auto"
              customIcons={{
                play: (
                  <RiPlayCircleLine className="text-foreground" size={32} />
                ),
                pause: <RiPauseLine className="text-foreground" size={32} />,
                previous: (
                  <RiArrowLeftDoubleLine
                    className="text-foreground"
                    size={32}
                  />
                ),
                next: (
                  <RiArrowRightDoubleLine
                    className="text-foreground"
                    size={32}
                  />
                ),
                rewind: <RiReplay5Line className="text-foreground" size={24} />,
                forward: (
                  <RiForward5Line className="text-foreground" size={24} />
                ),
                volume: (
                  <RiVolumeUpLine className="text-foreground" size={24} />
                ),
                volumeMute: (
                  <RiVolumeMuteLine className="text-foreground" size={24} />
                ),
                loop: <RiRepeatLine className="text-foreground" size={24} />,
                loopOff: (
                  <RiRepeatLine className="text-foreground-muted" size={24} />
                ),
              }}
            />
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default AudioPlayerContainer
