import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shadcn-components/ui/dialog"
import { useState } from "react"
import { Button } from "@/shadcn-components/ui/button"
import { RiArrowRightLine } from "@remixicon/react"

const QRScanModal = () => {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Want a sneak peak?</DialogTitle>
          <DialogDescription>
            If you've scanned this QR code chances are you saw us at a recent
            show.
            <br />
            <br />
            Many song we play live have not been recorded yet, but will be soon.
            In the meantime, open the audio player to checkout some of our
            unreleased material.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button>Open Audio Player {<RiArrowRightLine />} </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default QRScanModal
