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
import type { NavButton } from "@/app/types/NavButton"

interface NavDrawerProps {
  navButtons: NavButton[]
  socialButtons: NavButton[]
  className?: string
}

const NavDrawer = ({
  className,
  navButtons,
  socialButtons,
}: NavDrawerProps) => {
  return (
    <div className={`${className}`}>
      <Drawer direction="left">
        <DrawerTrigger>
          <RiMenuLine size={24} className="shrink-0" aria-label="Open Menu" />
        </DrawerTrigger>
        <DrawerContent className="w-10">
          <DrawerHeader>
            <DrawerClose>
              <RiCloseLargeLine
                size={24}
                className="shrink-0"
                aria-label="Close Menu"
              />
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col items-start gap-4 px-3 py-6">
            {navButtons.map((button) => (
              <Button
                key={button.href}
                className="text-2xl"
                variant="ghost"
                aria-label={button.label}
                asChild
              >
                <a href={button.href}>{button.label}</a>
              </Button>
            ))}
          </div>
          <div className="flex flex-row items-start gap-4 px-3 py-6">
            {socialButtons.map((button) => (
              <a aria-label={button.label} href={button.href}>
                {button.icon}
              </a>
            ))}
          </div>
          <DrawerFooter>{/* <Button>Submit</Button> */}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default NavDrawer
