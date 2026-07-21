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
            We're currently in the studio recording some of the newer songs in
            our set. In the meantime follow the link below to hear demos. They
            rock.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button>Listen {<RiArrowRightLine />} </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default QRScanModal
