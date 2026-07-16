import type { Show } from "../types/Show"

export const upcomingShows: Show[] = [
  {
    date: new Date("2026-08-01T17:00:00"),
    location: "Corktown, Detroit",
    venue: "Pig & Whiskey Festival",
    ticketLink: "https://pigandwhiskeycorktown.com/",
  },
]

export const pastShows: Show[] = [
  {
    date: new Date("2026-06-12T18:00:00"),
    location: "Ferndale, MI",
    venue: "Orchid Theatre",
  },
  {
    date: new Date("2026-06-05T18:00:00"),
    location: "Fendale, MI",
    venue: "Loving Touch",
  },
]
