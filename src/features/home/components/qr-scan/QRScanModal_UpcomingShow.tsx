import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/shadcn-components/ui/dialog"
import { useState } from "react"
import { Button } from "@/shadcn-components/ui/button"
import { RiArrowRightLine } from "@remixicon/react"
import { useNavigate } from "react-router"
import Poster from "@/assets/starlings-nov-13.jpeg"

const QRScanModal_UpcomingShow = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        onInteractOutside={() => {
          navigate("/")
          setOpen(false)
        }}
      >
        <div className="mx-auto">
          <DialogTitle className="text-center text-2xl">
            UPCOMING SHOW
          </DialogTitle>
          <img
            src={Poster}
            alt="Starlings show poster. Show details: Friday, November 13th at Orchid Theatre in Ferndale, MI. WSG/ Masha Marjieh band & Pia the band"
            className="max-w-70 self-center"
          />
          <DialogDescription className="text-center text-lg font-bold">
            TICKETS COMING SOON
          </DialogDescription>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/")
              setOpen(false)
            }}
          >
            Close
          </Button>
          <Button
            disabled
            onClick={() => {
              window.open("https://starlingsdetroit.com", "_blank")
              setOpen(false)
              navigate("/")
            }}
          >
            GET TICKETS {<RiArrowRightLine />}{" "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default QRScanModal_UpcomingShow
