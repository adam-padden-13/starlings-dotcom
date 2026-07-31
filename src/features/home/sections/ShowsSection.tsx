import type { Show } from "@/app/types/Show"
import { ItemGroup, ItemSeparator } from "@/shadcn-components/ui/item"
import ShowItem from "../../shows/ShowItem"
import {
  ToggleGroupItem,
  ToggleGroup,
} from "@/shadcn-components/ui/toggle-group"
import { sortShows } from "@/lib/utils"

interface ShowsSectionProps {
  shows: Show[]
  toggleShows: (value: "upcoming" | "past") => void
}

const ShowsSection = ({ shows, toggleShows }: ShowsSectionProps) => {
  const sortedShows = sortShows(shows).slice(0, 5)
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h2 className="self-center text-4xl">SHOWS</h2>
      <ToggleGroup className="self-start" type="single" defaultValue="upcoming">
        <ToggleGroupItem
          variant="outline"
          value="upcoming"
          onClick={() => toggleShows("upcoming")}
        >
          Upcoming
        </ToggleGroupItem>
        <ToggleGroupItem
          variant={"outline"}
          value="past"
          onClick={() => toggleShows("past")}
        >
          Past
        </ToggleGroupItem>
      </ToggleGroup>
      <ItemGroup className="w-full">
        {sortedShows.map((show) => (
          <ShowItem key={show.venue} show={show} />
        ))}
        <ItemSeparator />
      </ItemGroup>
    </section>
  )
}

export default ShowsSection
