import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog"
import { Button } from "@/components/ui/button"

const SignUpModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Sign Up</Button>
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
