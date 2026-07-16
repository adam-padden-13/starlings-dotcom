import type { Show } from "@/app/types/Show"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Button } from "@/shadcn-components/ui/button"
const ShowItem = ({ show }: { show: Show }) => {
  return (
    <Item variant="outline">
      <ItemContent className="w-full">
        <ItemTitle>
          {show.date.toDateString()} |{" "}
          {show.date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </ItemTitle>
        <ItemDescription>{show.location}</ItemDescription>
        <ItemDescription>{show.venue}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button>RSVP</Button>
        <a target="_blank" href={show.ticketLink}>
          <Button>TICKETS</Button>
        </a>
      </ItemActions>
    </Item>
  )
}

export default ShowItem
