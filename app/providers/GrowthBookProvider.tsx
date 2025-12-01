"use client";

import { GrowthBook, GrowthBookProvider as GBProvider } from "@growthbook/growthbook-react";
import { GROWTHBOOK_CONFIG } from "../config/growthbook";
import { useEffect, useMemo } from "react";
import { analytics } from "@/lib/firebase";

const GrowthBookProvider = ({ children }: { children: React.ReactNode }) => {
  // Determine when to enable DevTools integration
  const enableDevMode = useMemo(() => {
    const isDevEnv = process.env.NODE_ENV === "development";
    const envOverride = process.env.NEXT_PUBLIC_GROWTHBOOK_DEV_MODE === "true";
    return isDevEnv || envOverride;
  }, []);
  
  
  // Determine client key and host
  const clientKey = GROWTHBOOK_CONFIG.clientKey || GROWTHBOOK_CONFIG.apiKey;
  const apiHost = GROWTHBOOK_CONFIG.apiHost || "https://cdn.growthbook.io";

  // Check if client key exists
  if (!clientKey) {
    console.error("GrowthBook client key is missing!");
    return <>{children}</>;
  }

  // Create a singleton GrowthBook instance for the page
  const gb = useMemo(() => {
    const instance = new GrowthBook({
      apiHost,
      clientKey,
      enableDevMode,
      attributes: GROWTHBOOK_CONFIG.defaultAttributes,
      // Keep streaming updates enabled by default; can be disabled via env if needed
      backgroundSync: true,
      // Add tracking callback to automatically track experiment exposures
      trackingCallback: (experiment, result) => {
        try {
          // Track experiment exposure data
          const trackingData = {
            experiment_id: experiment.key,
            experiment_name: experiment.key,
            variation_id: result.variationId || "control",
            variation_name: result.variationId || "control",
            // Include rule information if available
            rule_id: experiment.namespace?.[0] || undefined,
            user_id: (GROWTHBOOK_CONFIG.defaultAttributes as any)?.userId || undefined,
          };

          // Track to GrowthBook (this ensures it's available for analysis in GB)
          if (typeof window !== "undefined") {
            if (GROWTHBOOK_CONFIG.TRACKING.debug) {
              console.log("[GrowthBook] Experiment exposure tracked:", trackingData);
            }
          }

          // Also track to Firebase Analytics (for BigQuery export and additional analysis)
          if (analytics && typeof window !== "undefined") {
            try {
              const { logEvent } = require("firebase/analytics");
              logEvent(analytics, "experiment_viewed", {
                experiment_id: trackingData.experiment_id,
                variation_id: trackingData.variation_id,
                variation_name: trackingData.variation_name,
                timestamp: new Date().toISOString(),
              });
            } catch (error) {
              console.warn("[GrowthBook] Failed to track to Firebase Analytics:", error);
            }
          }
        } catch (error) {
          console.error("[GrowthBook] Tracking callback error:", error);
        }
      },
    });

    // Explicitly expose instance to window for DevTools extension
    if (enableDevMode && typeof window !== "undefined") {
      (window as any)._growthbook = instance;
    }


    return instance;
  }, [apiHost, clientKey, enableDevMode]);

  // Load features and keep attributes in sync
  useEffect(() => {
    gb.setAttributes(GROWTHBOOK_CONFIG.defaultAttributes);
    
    // Ensure instance is exposed to window for extension (in case it wasn't set in useMemo)
    if (enableDevMode && typeof window !== "undefined") {
      (window as any)._growthbook = gb;
    }
    
    // Load features
    gb.loadFeatures()
      .then(() => {
        if (enableDevMode) {
          // Ensure instance is still exposed after features load
          if (typeof window !== "undefined") {
            (window as any)._growthbook = gb;
          }
        }
      })
      .catch((err) => {
        console.error("GrowthBook loadFeatures failed:", err);
      });
  }, [gb, enableDevMode]);

  return (
    <div data-growthbook-provider="true">
      <GBProvider
        growthbook={gb}
      >
        {children}
      </GBProvider>
    </div>
  );
};

export default GrowthBookProvider;

