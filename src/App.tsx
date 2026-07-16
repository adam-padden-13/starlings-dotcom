import Header from "./features/home/components/Header"
import SignUpModal from "./features/home/components/SignUpModal"

export function App() {
  return (
    <main className="flex min-h-svh flex-col gap-6 border px-5 py-2">
      <Header />
      <section className="flex flex-col items-center justify-center gap-4">
        <img src="/src/assets/nick.jpg" alt="Nick" className="max-w-70" />
      </section>
      <SignUpModal />
    </main>
  )
}

export default App

// CREATE MODELS
// SHOW
// SONG
// chances are you saw usat our last show. heres the setlist from that night
