import { SOCIAL_BUTTONS } from "@/app/constants/button-values"
import SocialNav from "./SocialNav"

const Footer = () => {
  return (
    <footer className="mt-6 border-t-2 pt-4">
      <SocialNav
        buttons={SOCIAL_BUTTONS}
        className="flex flex-row items-start justify-center gap-4"
      />
    </footer>
  )
}

export default Footer
