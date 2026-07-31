import type { Show } from "@/app/types/Show"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/shadcn-components/ui/item"
import { Button } from "@/shadcn-components/ui/button"
import { isFutureDate } from "@/lib/utils"
const ShowItem = ({ show }: { show: Show }) => {
  const showDate = new Date(show.date)
  return (
    <Item
      variant="outline"
      className="shadow-md dark:shadow-xs dark:shadow-gray-400"
    >
      <ItemContent className="w-full">
        <ItemTitle>
          {showDate.toDateString()} |{" "}
          {showDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </ItemTitle>
        <ItemDescription>{show.location}</ItemDescription>
        <ItemDescription>{show.venue}</ItemDescription>
      </ItemContent>
      <ItemActions>
        {isFutureDate(showDate) && (
          <a target="_blank" href={show.ticketLink}>
            <Button>TICKETS</Button>
          </a>
        )}
      </ItemActions>
    </Item>
  )
}

export default ShowItem
