import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import "react-h5-audio-player/lib/styles.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/shadcn-components/theme-provider.tsx"
import { BrowserRouter } from "react-router"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
