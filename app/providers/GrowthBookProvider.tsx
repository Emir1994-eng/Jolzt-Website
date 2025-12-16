"use client";

import { GrowthBook, GrowthBookProvider as GBProvider } from "@growthbook/growthbook-react";
import { GROWTHBOOK_CONFIG } from "../config/growthbook";
import { useCallback, useEffect, useMemo } from "react";
import { analytics } from "@/lib/firebase";
import { enforceHashAttributeOnGrowthBookExperiments, getGa4UserPseudoId, createGa4TrackingCallback } from "../utils/growthbook";

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

  const streamingEnabled = process.env.NEXT_PUBLIC_GROWTHBOOK_STREAMING === "true";

  // Create the GA4 tracking callback (memoized to avoid recreating on every render)
  const trackingCallback = useCallback(() => createGa4TrackingCallback(analytics || null), []);

  // Create a singleton GrowthBook instance for the page
  const gb = useMemo(() => {
    if (!clientKey) return null;

    const instance = new GrowthBook({
      apiHost,
      clientKey,
      enableDevMode,
      attributes: GROWTHBOOK_CONFIG.defaultAttributes,
      // Use the dedicated GA4 tracking callback
      trackingCallback: trackingCallback(),
    });

    return instance;
  }, [apiHost, clientKey, enableDevMode, trackingCallback]);

  // Load features and keep attributes in sync
  useEffect(() => {
    if (!gb) return;
    let isMounted = true;

    const initializeGrowthBook = async () => {
      try {
        const ga4UserPseudoId = await getGa4UserPseudoId(analytics);
        const attributes: Record<string, any> = {
          ...GROWTHBOOK_CONFIG.defaultAttributes,
          ...(ga4UserPseudoId && { anonymous_id: ga4UserPseudoId }),
        };

        if (ga4UserPseudoId && !attributes.id) {
          attributes.id = ga4UserPseudoId;
        }

        if (!isMounted) return;

        await gb.setAttributes(attributes);

        if (enableDevMode && typeof window !== "undefined") {
          (window as any)._growthbook = gb;
        }

        await gb.init({
          streaming: streamingEnabled,
        });
        enforceHashAttributeOnGrowthBookExperiments(gb);

        if (!isMounted) return;

        if (enableDevMode && typeof window !== "undefined") {
          (window as any)._growthbook = gb;
        }
      } catch (error) {
        try {
          await gb.setAttributes(GROWTHBOOK_CONFIG.defaultAttributes);
          await gb.init({
            streaming: streamingEnabled,
            skipCache: true,
          });
          enforceHashAttributeOnGrowthBookExperiments(gb);
        } catch (loadError) {
          // Silently fail fallback init
        }
      }
    };

    initializeGrowthBook();

    return () => {
      isMounted = false;
    };
  }, [gb, enableDevMode, streamingEnabled]);

  if (!gb) {
    return <>{children}</>;
  }

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

