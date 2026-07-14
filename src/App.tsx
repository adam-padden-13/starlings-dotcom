import { Button } from "@/components/ui/button"
import Header from "./components/Header"

export function App() {
  return (
    <div className="flex min-h-svh flex-col gap-6 border px-5 py-2">
      <Header />
      <section className="flex flex-col items-center justify-center gap-4">
        <img src="/src/assets/nick.jpg" alt="Nick" className="max-w-70" />
      </section>
    </div>
  )
}

export default App

// <div>
//   <h1 className="font-medium">Project ready!</h1>
//   <p>You may now add components and start building.</p>
//   <p>We&apos;ve already added the button component for you.</p>
//   <Button className="mt-2">Button</Button>
// </div>
// <div className="font-mono text-xs text-muted-foreground">
//   (Press <kbd>d</kbd> to toggle dark mode)
// </div>
