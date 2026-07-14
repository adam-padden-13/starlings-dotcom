import { RiCloseLargeLine, RiMenuLine } from "@remixicon/react"
import { Button } from "./ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer"

const NavDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <RiMenuLine size={24} className="shrink-0" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose>
            <RiCloseLargeLine size={24} className="shrink-0" />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex flex-col gap-4">
          <Button className="text-2xl" variant="link">
            Home
          </Button>
          <Button className="text-2xl" variant="link">
            Shows
          </Button>
          <Button className="text-2xl" variant="link">
            Music
          </Button>
        </div>

        <DrawerFooter>{/* <Button>Submit</Button> */}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default NavDrawer
