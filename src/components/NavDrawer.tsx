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
      <DrawerContent className="w-10">
        <DrawerHeader>
          <DrawerClose>
            <RiCloseLargeLine size={24} className="shrink-0" />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex flex-col items-start gap-4 px-3 py-6">
          <Button className="text-2xl" variant="ghost">
            HOME
          </Button>
          <Button className="text-2xl" variant="ghost">
            SHOWS
          </Button>
          <Button className="text-2xl" variant="ghost">
            MUSIC
          </Button>
          <Button className="text-2xl" variant="ghost">
            SONG EXPLORER
          </Button>
        </div>

        <DrawerFooter>{/* <Button>Submit</Button> */}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default NavDrawer
