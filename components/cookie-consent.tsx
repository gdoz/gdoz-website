"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

// ============================================================
// CONFIGURATION - Toggle GA4 on/off and set the Measurement ID
// ============================================================
const GA4_ENABLED = true // Set to false to disable cookie consent and GA4
const GA4_MEASUREMENT_ID = "G-KF6J52TFE2"
// ============================================================

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    if (!GA4_ENABLED) return

    const consent = localStorage.getItem("gdoz-cookie-consent")
    if (!consent) {
      setShowBanner(true)
    } else if (consent === "accepted") {
      loadGA4()
    }
  }, [])

  const loadGA4 = () => {
    if (typeof window === "undefined" || !GA4_ENABLED) return

    // Check if already loaded
    if (document.querySelector(`script[src*="gtag/js?id=${GA4_MEASUREMENT_ID}"]`)) return

    // Load GA4 script
    const script = document.createElement("script")
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
    script.async = true
    document.head.appendChild(script)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", GA4_MEASUREMENT_ID)
  }

  const acceptCookies = () => {
    localStorage.setItem("gdoz-cookie-consent", "accepted")
    setShowBanner(false)
    loadGA4()
  }

  if (!GA4_ENABLED || !showBanner || !isLoaded) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto">
        <div className="bg-card border border-border rounded-lg shadow-xl p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your experience and analyze site traffic.{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:bg-primary/90 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={acceptCookies}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Type declaration for gtag
declare global {
  interface Window {
    dataLayer: unknown[]
  }
}
