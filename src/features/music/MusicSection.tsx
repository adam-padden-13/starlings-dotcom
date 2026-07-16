import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/shadcn-components/ui/button"

const MusicSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6">
      <h2 className="self-start text-4xl">MUSIC</h2>

      <Card>
        <img
          src="/src/assets/try-hard-town-ep.png"
          alt="Try Hard Town EP"
          className="max-w-70"
        />
        <CardHeader>
          <CardTitle>Try Hard Town E.P.</CardTitle>
          <CardDescription>2025</CardDescription>
        </CardHeader>

        <CardFooter className="flex w-full justify-center">
          <Button>STREAM</Button>
        </CardFooter>
      </Card>
    </section>
  )
}

export default MusicSection
