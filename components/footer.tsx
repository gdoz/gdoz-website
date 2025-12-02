import Image from "next/image"
import { Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image src="/images/gdoz.png" alt="GDOZ" width={32} height={32} className="w-8 h-8" />
            <span className="text-lg font-semibold text-foreground">GDOZ Technology Solutions</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:contact@gdoz.net"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
              <span>contact@gdoz.net</span>
            </a>
            <a
              href="https://linkedin.com/company/gdoz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Brazil</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} GDOZ Technology Solutions. All rights reserved.
          </p>
          <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
