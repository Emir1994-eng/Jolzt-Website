"use client";

import { GrowthBook, GrowthBookProvider as GBProvider } from "@growthbook/growthbook-react";
import { GROWTHBOOK_CONFIG } from "../config/growthbook";
import { useEffect, useMemo } from "react";

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

