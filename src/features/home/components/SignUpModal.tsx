import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/shadcn-components/ui/dialog"

const SignUpModal = () => {
  return (
    <Dialog>
      <DialogTrigger className="mx-auto w-fit rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
        Sign Up
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle>Mailing List</DialogTitle> */}
          <DialogDescription>
            Sign up for the Starlings mailing list for updates, and sneak peaks.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SignUpModal
