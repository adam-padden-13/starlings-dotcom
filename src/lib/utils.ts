import type { Show } from "@/app/types/Show"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isFutureDate = (date: Date) => date.getTime() > Date.now()

export function sortShows(shows: Show[]): Show[] {
  return [...shows].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
}
