"use client" // Required for hooks using browser APIs

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false) // Initialize as false

  React.useEffect(() => {
    // Safety check for window object
    if (typeof window === "undefined") return

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    // Set initial value
    setIsMobile(mql.matches)
    
    // Modern event listener (supports both add/remove)
    mql.addEventListener("change", handler)
    
    return () => mql.removeEventListener("change", handler)
  }, [])

  return isMobile
}