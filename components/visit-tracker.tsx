"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

// ============================================================
// VISIT TRACKER CONFIGURATION
// ============================================================

// Environment vars
const VISIT_API_URL = process.env.NEXT_PUBLIC_VISIT_API_URL || ""
const VISIT_API_TOKEN = process.env.NEXT_PUBLIC_VISIT_API_TOKEN || ""

// Hostnames where tracking should be DISABLED
const BLOCKED_HOSTNAMES = [
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
]

// ============================================================

interface VisitPayload {
  pagePath: string
  referrer: string
}

// Check if current hostname is blocked
function isBlockedHostname(): boolean {
  if (typeof window === "undefined") return true
  return BLOCKED_HOSTNAMES.includes(window.location.hostname)
}

async function trackVisit(pagePath: string): Promise<void> {
  if (!VISIT_API_URL || !VISIT_API_TOKEN) {
    return
  }

  if (isBlockedHostname()) {
    return
  }

  const payload: VisitPayload = {
    pagePath: pagePath,
    referrer: document.referrer || "",
  }

  try {
    const response = await fetch(`${VISIT_API_URL}/backend/api/visit.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Visit-Token": VISIT_API_TOKEN,
      },
      body: JSON.stringify(payload),
      keepalive: true,
    })

    if (!response.ok) {
      console.warn(`[VisitTracker] API responded with status: ${response.status}`)
    }
  } catch (error) {
    console.warn("[VisitTracker] Failed to send visit data:", error instanceof Error ? error.message : "Unknown error")
  }
}

export function VisitTracker() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Track on first render (initial page load)
    if (isFirstRender.current) {
      isFirstRender.current = false
      trackVisit(pathname)
      return
    }

    // Track on subsequent navigations
    trackVisit(pathname)
  }, [pathname])

  // Also track on page visibility changes (user returning to tab)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        trackVisit(pathname)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [pathname])

  return null
}
