import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shadcn-components/ui/dialog"
import MailingListSection from "./MailingListSection"

const SignUpModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="mx-auto w-fit rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
        SIGN UP
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Starlings Mailing List</DialogTitle>
          <DialogDescription>
            Sign up for updates and sneak peaks
          </DialogDescription>
        </DialogHeader>
        <MailingListSection />
      </DialogContent>
    </Dialog>
  )
}

export default SignUpModal
