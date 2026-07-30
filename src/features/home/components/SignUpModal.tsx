import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn-components/ui/dialog"
import MailingListSection from "../sections/MailingListSection"
import { useState } from "react"
import { Button } from "@/shadcn-components/ui/button"
import { analytics } from "@/firebase"
import { logEvent } from "firebase/analytics"

interface SignUpModalProps {
  handleSuccess: () => void
}

const SignUpModal = ({ handleSuccess }: SignUpModalProps) => {
  const [open, setOpen] = useState(false)

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)

    if (!nextOpen) {
      logEvent(analytics, "mailing_list - dialog_closed")
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        asChild
        onClick={() => {
          logEvent(analytics, "mailing_list - open_dialog")
        }}
        className="mx-auto w-fit rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        <Button>Sign Up For Mailing List</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Starlings Mailing List</DialogTitle>
          <DialogDescription>
            Sign up for updates and sneak peaks
          </DialogDescription>
        </DialogHeader>
        <MailingListSection
          closeDialog={() => {
            handleSuccess()
            setOpen(false)
          }}
        />
      </DialogContent>
    </Dialog>
  )
}

export default SignUpModal
