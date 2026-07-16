import {
  RiAppleLine,
  RiInstagramLine,
  RiSpotifyLine,
  RiYoutubeLine,
} from "@remixicon/react"
import type { NavButton } from "../types/NavButton"

export const NAV_BUTTONS: NavButton[] = [
  { label: "HOME", href: "/" },
  { label: "SHOWS", href: "/shows" },
  { label: "MUSIC", href: "/music" },
  // { label: "SONG EXPLORER", href: "/song-explorer" },
]

export const SOCIAL_BUTTONS: NavButton[] = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/starlings_detroit/",
    icon: <RiInstagramLine size={30} />,
  },
  {
    label: "SPOTIFY",
    href: "https://open.spotify.com/artist/5vqvxxV7O5X2K0pB1jSUXH?si=elcDhQrCStGCGiPaKuz5FQ",
    icon: <RiSpotifyLine size={30} />,
  },
  {
    label: "YOUTUBE",
    href: "https://www.youtube.com/@Starlings-Detroit",
    icon: <RiYoutubeLine size={30} />,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/us/artist/starlings/1785026454",
    icon: <RiAppleLine size={30} />,
  },
]
