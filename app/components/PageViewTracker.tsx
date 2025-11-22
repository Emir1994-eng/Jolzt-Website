/**
 * PageViewTracker Component
 * 
 * Tracks page views for analytics and GrowthBook
 * - Tracks initial page load
 * - Tracks route changes (Next.js navigation)
 * - Sends events to both GA4 (for BigQuery) and GrowthBook
 */

"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useGrowthBook } from "@growthbook/growthbook-react";
import { analytics } from "@/lib/firebase";
import { trackEvent } from "../utils/growthbook";

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { growthbook } = useGrowthBook();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    // Skip tracking on initial mount if it's the same path (to avoid double tracking)
    const currentPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
    
    // Only track if pathname has changed (route navigation)
    if (previousPathname.current !== currentPath) {
      // Track page view event
      const pageViewData = {
        page_path: pathname,
        page_url: typeof window !== "undefined" ? window.location.href : pathname,
        page_title: typeof window !== "undefined" ? document.title : "",
        page_location: typeof window !== "undefined" ? window.location.href : pathname,
        // Additional context
        referrer: typeof window !== "undefined" ? document.referrer : "",
        user_agent: typeof window !== "undefined" ? window.navigator.userAgent : "",
      };

      // Track to both GA4 and GrowthBook
      trackEvent("page_view", pageViewData, growthbook || null, analytics || null).catch((err) => {
        console.warn("Failed to track page_view event:", err);
      });

      // Update previous pathname
      previousPathname.current = currentPath;
    }
  }, [pathname, searchParams, growthbook]);

  // Track initial page load (only once)
  useEffect(() => {
    if (previousPathname.current === null) {
      const initialPageData = {
        page_path: pathname,
        page_url: typeof window !== "undefined" ? window.location.href : pathname,
        page_title: typeof window !== "undefined" ? document.title : "",
        page_location: typeof window !== "undefined" ? window.location.href : pathname,
        is_initial_load: true,
        referrer: typeof window !== "undefined" ? document.referrer : "",
        user_agent: typeof window !== "undefined" ? window.navigator.userAgent : "",
      };

      // Track initial visit
      trackEvent("website_visit", initialPageData, growthbook || null, analytics || null).catch((err) => {
        console.warn("Failed to track website_visit event:", err);
      });
    }
  }, []); // Only run once on mount

  // This component doesn't render anything
  return null;
}

