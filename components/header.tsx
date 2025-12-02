import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/gdoz.png" alt="GDOZ Technology Solutions" width={40} height={40} className="w-10 h-10" />
          <span className="text-xl font-semibold tracking-tight text-foreground">GDOZ</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a
            href="mailto:contact@gdoz.net"
            className="text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
