import {
  RiAppleLine,
  RiInstagramLine,
  RiMailLine,
  RiSpotifyLine,
  RiYoutubeLine,
} from "@remixicon/react"
import type { NavButton } from "../types/NavButton"
import { SOCIALS } from "./urls"
import bandcampLogo from "@/assets/bandcamp.svg"

export const NAV_BUTTONS: NavButton[] = [
  { label: "HOME", href: "/" },
  { label: "SHOWS", href: "/shows" },
  { label: "MUSIC", href: "/music" },
  // { label: "SONG EXPLORER", href: "/song-explorer" },
]

export const SOCIAL_BUTTONS: NavButton[] = [
  {
    label: "EMAIL",
    href: SOCIALS.email,
    icon: <RiMailLine size={30} />,
  },
  {
    label: "INSTAGRAM",
    href: SOCIALS.instagram,
    icon: <RiInstagramLine size={30} />,
  },
  {
    label: "SPOTIFY",
    href: SOCIALS.spotify,
    icon: <RiSpotifyLine size={30} />,
  },
  {
    label: "Apple Music",
    href: SOCIALS.appleMusic,
    icon: <RiAppleLine size={30} />,
  },
  {
    label: "Bandcamp",
    href: SOCIALS.bandcamp,
    icon: <img src={bandcampLogo} alt="Bandcamp" className="w-8" />,
  },
  {
    label: "YOUTUBE",
    href: SOCIALS.youtube,
    icon: <RiYoutubeLine size={30} />,
  },
]
