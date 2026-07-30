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
import { useAudioPlayer } from "@/features/audio-player/stores/audioPlayerStore"
import { useNavigate } from "react-router"

const QRScanModal = () => {
  const [open, setOpen] = useState(true)
  const { openPlayer } = useAudioPlayer()
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
        <DialogHeader>
          <DialogTitle>Want a sneak peak?</DialogTitle>
          <DialogDescription>
            If you've scanned this QR code chances are you saw Starlings at a
            recent show.
            <br />
            <br />
            Open the audio player to checkout some of unreleased material that
            they have been playing live.
          </DialogDescription>
        </DialogHeader>
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
            onClick={() => {
              navigate("/")
              openPlayer()
              setOpen(false)
            }}
          >
            Open Audio Player {<RiArrowRightLine />}{" "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default QRScanModal
