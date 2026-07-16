import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
          <DialogTitle>Sign Up for our mailling list</DialogTitle>
          <DialogDescription>NEED TO FINISH</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SignUpModal
