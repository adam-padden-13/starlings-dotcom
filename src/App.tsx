import AudioPlayer from "./features/audio-player/AudioPlayer"
import Footer from "./features/home/components/Footer"
import Header from "./features/home/components/Header"
import HomeScreen from "./features/home/HomeScreen"

export default function App() {
  return (
    <main className="mx-auto flex min-h-svh max-w-280 flex-col gap-6 px-5 pt-4 pb-18">
      <Header />
      <HomeScreen isQRPath={location.pathname === "/qr-scan" ? true : false} />
      <Footer />
      <AudioPlayer />
    </main>
  )
}
