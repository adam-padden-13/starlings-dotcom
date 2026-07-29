import {
  RiArrowLeftDoubleLine,
  RiArrowRightDoubleLine,
  RiForward5Line,
  RiPauseCircleLine,
  RiPlayCircleLine,
  RiRepeatLine,
  RiReplay5Line,
  RiVolumeMuteLine,
  RiVolumeUpLine,
} from "@remixicon/react"
import { useRef } from "react"
import type H5AudioPlayer from "react-h5-audio-player"
import AudioPlayer from "react-h5-audio-player"
import { useAudioPlayer } from "../stores/audioPlayerStore"

interface PlayerControlProps {
  resolvedTheme: "light" | "dark"
}

const PlayerControls = ({ resolvedTheme }: PlayerControlProps) => {
  const audioPlayerRef = useRef<H5AudioPlayer>(null)
  const { currentSong } = useAudioPlayer()

  return (
    <AudioPlayer
      ref={audioPlayerRef}
      style={{
        background: resolvedTheme === "dark" ? "#1E1E1E" : "#F8F8F8",
        position: "fixed",
        left: 0,
        bottom: 0,
        paddingBlock: 6,
        paddingInline: 20,
      }}
      className="border-t border-b border-muted"
      src={currentSong?.cloudAudioURL}
      onPlayError={() => console.log("onPlayError")}
      preload="none"
      autoPlay={true}
      showJumpControls={true}
      showFilledVolume={false}
      timeFormat="auto"
      customIcons={{
        play: <RiPlayCircleLine className="text-foreground" size={40} />,
        pause: <RiPauseCircleLine className="text-foreground" size={40} />,
        previous: (
          <RiArrowLeftDoubleLine className="inline text-foreground" size={24} />
        ),
        next: (
          <RiArrowRightDoubleLine
            className="inline text-foreground"
            size={24}
          />
        ),
        rewind: <RiReplay5Line className="inline text-foreground" size={28} />,
        forward: (
          <RiForward5Line className="inline text-foreground" size={28} />
        ),
        volume: <RiVolumeUpLine className="text-foreground" size={24} />,
        volumeMute: <RiVolumeMuteLine className="text-foreground" size={24} />,
        loop: <RiRepeatLine className="text-foreground" size={24} />,
        loopOff: <RiRepeatLine className="text-foreground-muted" size={24} />,
      }}
    />
  )
}

export default PlayerControls
