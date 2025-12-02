import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { VisitTracker } from "@/components/visit-tracker"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "GDOZ Technology Solutions | Software Engineering, Cloud, Cybersecurity & AI",
  description:
    "Enterprise-grade consulting in software engineering, cloud architecture, cybersecurity, and artificial intelligence. Over 15 years delivering mission-critical digital solutions.",
  keywords: [
    "software engineering",
    "cloud architecture",
    "cybersecurity",
    "artificial intelligence",
    "consulting",
    "digital products",
    "technology solutions",
  ],
  authors: [{ name: "GDOZ Technology Solutions" }],
  openGraph: {
    title: "GDOZ Technology Solutions",
    description: "Enterprise-grade consulting in software engineering, cloud architecture, cybersecurity, and AI.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon-16x16.png",
        sizes: '16x16',
        type: "image/png",
      },
      {
        url: "/icon-32x32.png",
        sizes: '32x32',
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <VisitTracker />
      </body>
    </html>
  )
}
