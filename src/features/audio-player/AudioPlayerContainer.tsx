import { useEffect, useRef, useState } from "react"
import { Drawer } from "vaul"
import NowPlayingContainer from "./NowPlayingContainer"
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
import { useAudioPlayer } from "./stores/audioPlayerStore"
import SongItem from "./SongItem"

const SnapPoints = {
  sm: "80px",
  lg: "500px",
}

const snapPoints = [SnapPoints.sm, SnapPoints.lg]

interface AudioPlayerContainerProps {
  resolvedTheme: "light" | "dark"
}

const AudioPlayerContainer = ({ resolvedTheme }: AudioPlayerContainerProps) => {
  const { currentSong, songs, setSongs, setCurrentSong } = useAudioPlayer()
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0])
  const [isOpen, setIsOpen] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const audioPlayerRef = useRef<H5AudioPlayer>(null)

  useEffect(() => {
    fetchSongs().then((response) => {
      if (response && response?.length > 0) {
        setSongs(response)
        // setCurrentSong(response[0])
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
          className="fixed inset-x-3 bottom-3 z-50 flex h-full max-h-[calc(97%-0.75rem)] flex-col gap-4 rounded-xl border bg-background-alt px-2 py-1 shadow-xl shadow-blue-700"
        >
          {currentSong ? (
            <>
              <NowPlayingContainer
                song={currentSong}
                isPlaying={isPlaying}
                showButton={snap === SnapPoints.sm && !!currentSong}
                togglePlayPause={() => {
                  if (audioPlayerRef.current?.audio.current.paused)
                    audioPlayerRef.current?.audio.current.play()
                  else audioPlayerRef.current?.audio.current.pause()
                }}
                openDrawer={() => setSnap(SnapPoints.lg)}
              />
              <AudioPlayer
                ref={audioPlayerRef}
                style={{
                  background: resolvedTheme === "dark" ? "black" : "white",
                }}
                className="rounded-lg border border-muted"
                src={currentSong?.cloudAudioURL}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onCanPlay={(e) => {
                  console.log("can play")
                  audioPlayerRef.current?.audio.current.play()
                }}
                onPlayError={(e) => console.log("onPlayError")}
                preload="none"
                autoPlay={true}
                // showSkipControls={true}
                showJumpControls={true}
                showFilledVolume={false}
                timeFormat="auto"
                customIcons={{
                  play: (
                    <RiPlayCircleLine className="text-foreground" size={40} />
                  ),
                  pause: <RiPauseLine className="text-foreground" size={40} />,
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
                  rewind: (
                    <RiReplay5Line className="text-foreground" size={30} />
                  ),
                  forward: (
                    <RiForward5Line className="text-foreground" size={30} />
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
            </>
          ) : (
            <>
              {snap === SnapPoints.sm && (
                <>
                  <div className="mt-1 w-[40%] self-center border border-muted-foreground" />
                  <span
                    onClick={() => setSnap(SnapPoints.lg)}
                    className="text-center text-[12px]"
                  >
                    Tap or drag to open player
                  </span>
                </>
              )}
              {snap === SnapPoints.lg && (
                <span mt-1 className="text-center text-[12px]">
                  Select a song to play
                </span>
              )}
            </>
          )}
          {snap === SnapPoints.lg && (
            <section className="flex flex-col gap-2">
              {songs.length > 0 &&
                songs.map((song) => (
                  <SongItem
                    key={song.id}
                    song={song}
                    selectSong={() => {
                      setCurrentSong(song)
                    }}
                  />
                ))}
            </section>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default AudioPlayerContainer
