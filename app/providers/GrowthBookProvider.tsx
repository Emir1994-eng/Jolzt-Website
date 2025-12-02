"use client";

import { GrowthBook, GrowthBookProvider as GBProvider } from "@growthbook/growthbook-react";
import { GROWTHBOOK_CONFIG } from "../config/growthbook";
import { useEffect, useMemo } from "react";
import { analytics } from "@/lib/firebase";
import { enforceHashAttributeOnGrowthBookExperiments, getGa4UserPseudoId } from "../utils/growthbook";

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

  // Create a singleton GrowthBook instance for the page
  const gb = useMemo(() => {
    if (!clientKey) return null;

    const instance = new GrowthBook({
      apiHost,
      clientKey,
      enableDevMode,
      attributes: GROWTHBOOK_CONFIG.defaultAttributes,
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

    return instance;
  }, [apiHost, clientKey, enableDevMode]);

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
        console.error("GrowthBook initialization failed:", error);
        try {
          await gb.setAttributes(GROWTHBOOK_CONFIG.defaultAttributes);
          await gb.init({
            streaming: streamingEnabled,
            skipCache: true,
          });
          enforceHashAttributeOnGrowthBookExperiments(gb);
        } catch (loadError) {
          console.error("GrowthBook fallback init failed:", loadError);
        }
      }
    };

    initializeGrowthBook();

    return () => {
      isMounted = false;
    };
  }, [gb, enableDevMode, streamingEnabled]);

  if (!gb) {
    console.error("GrowthBook client key is missing!");
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

