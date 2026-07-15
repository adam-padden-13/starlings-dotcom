import {
  RiInstagramLine,
  RiSpotifyLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "@remixicon/react"
import type { NavButton } from "../types/NavButton"

export const NAV_BUTTONS: NavButton[] = [
  { label: "HOME", href: "/" },
  { label: "SHOWS", href: "/shows" },
  { label: "MUSIC", href: "/music" },
  { label: "SONG EXPLORER", href: "/song-explorer" },
]

export const SOCIAL_BUTTONS: NavButton[] = [
  {
    label: "INSTAGRAM",
    href: "https://www.instagram.com/starlings_detroit/",
    icon: <RiInstagramLine size={30} />,
  },
  {
    label: "SPOTIFY",
    href: "https://open.spotify.com/artist/5g0Z1k3r6l7J8j8j8j8j8j",
    icon: <RiSpotifyLine size={30} />,
  },
  {
    label: "YOUTUBE",
    href: "https://www.youtube.com/channel/UC5g5g5g5g5g5g5g5g5g5g",
    icon: <RiYoutubeLine size={30} />,
  },
  {
    label: "TWITTER",
    href: "https://twitter.com/starlingsband",
    icon: <RiTwitterLine size={30} />,
  },
]
