import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
      <CookieConsent />
    </main>
  )
}
