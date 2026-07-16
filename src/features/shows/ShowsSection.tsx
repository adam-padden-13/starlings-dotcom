import type { Show } from "@/app/types/Show"
import { ItemGroup, ItemSeparator } from "@/components/ui/item"
import ShowItem from "./ShowItem"
import { ToggleGroupItem, ToggleGroup } from "@/components/ui/toggle-group"

interface ShowsSectionProps {
  shows: Show[]
  toggleShows: (value: "upcoming" | "past") => void
}

const ShowsSection = ({ shows, toggleShows }: ShowsSectionProps) => {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h2 className="self-start text-4xl">SHOWS</h2>
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
        {shows.map((show) => (
          <ShowItem show={show} />
        ))}
        <ItemSeparator />
      </ItemGroup>
    </section>
  )
}

export default ShowsSection
