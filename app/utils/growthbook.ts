import { GROWTHBOOK_CONFIG, getUserAttributes } from "../config/growthbook";
import { GrowthBook } from "@growthbook/growthbook-react";
import type { Analytics } from "firebase/analytics";

declare global {
  interface Window {
    gtag?: any;
    dataLayer?: any[];
    ga_debug?: {
      trace?: boolean;
      user_pseudo_id?: string;
      [key: string]: any;
    };
  _growthbook?: GrowthBook<Record<string, any>>;
    _ga4PseudoIdDebug?: boolean;
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const extractFromGtagInstances = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  const { gtag } = window;

  if (!gtag || typeof gtag.getAll !== "function") return undefined;

  try {
    const instances = gtag.getAll();
    if (!Array.isArray(instances)) return undefined;

    for (const instance of instances) {
      if (!instance) continue;

      const privateValue = instance?.user_pseudo_id || instance?.u;
      if (typeof privateValue === "string" && privateValue.length) {
        return privateValue;
      }

      if (typeof instance.get === "function") {
        const clientId = instance.get("client_id") || instance.get("clientId");
        if (clientId) {
          return clientId;
        }
      }
    }
  } catch (error) {
    // Silently fail GA4 pseudo ID extraction
  }

  return undefined;
};

const extractFromGaDebug = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  const pseudoId = window.ga_debug?.user_pseudo_id;
  return typeof pseudoId === "string" && pseudoId.length ? pseudoId : undefined;
};

const extractFromDataLayer = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  const layer = window.dataLayer;

  if (!Array.isArray(layer) || !layer.length) return undefined;

  for (let i = layer.length - 1; i >= 0; i -= 1) {
    const entry = layer[i];
    if (!entry) continue;

    const payload = Array.isArray(entry) ? entry[1] : entry;
    if (!payload || typeof payload !== "object") continue;

    const candidate =
      payload.user_pseudo_id ||
      payload.userPseudoId ||
      payload.client_id ||
      payload.clientId;

    if (typeof candidate === "string" && candidate.length) {
      return candidate;
    }
  }

  return undefined;
};

const extractFromGaCookie = (): string | undefined => {
  if (typeof document === "undefined") return undefined;

  const cookieMatch = document.cookie.match(/(?:^|;\s*)_ga=([^;]+)/);
  if (!cookieMatch) return undefined;

  try {
    const rawValue = decodeURIComponent(cookieMatch[1]);
    // Typical GA cookie format: GA1.1.123456789.123456789
    const parts = rawValue.split(".");
    if (parts.length >= 4) {
      return `${parts[2]}.${parts[3]}`;
    }
    if (parts.length >= 2) {
      return parts.slice(-2).join(".");
    }
    return rawValue;
  } catch (error) {
    return undefined;
  }
};

const getMeasurementId = (analytics?: Analytics | null): string | undefined => {
  return (
    analytics?.app?.options?.measurementId ||
    (analytics as any)?.config?.measurementId ||
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  );
};

const getClientIdViaGtagCommand = async (measurementId: string): Promise<string | undefined> => {
  if (typeof window === "undefined") return undefined;
  const gtag = window.gtag;

  if (typeof gtag !== "function") return undefined;

  return new Promise((resolve) => {
    let resolved = false;

    try {
      gtag("get", measurementId, "client_id", (id: string) => {
        resolved = true;
        resolve(id);
      });
    } catch (error) {
      resolved = true;
      resolve(undefined);
    }

    setTimeout(() => {
      if (!resolved) {
        resolve(undefined);
      }
    }, 300);
  });
};

const extractGa4UserPseudoId = async (
  analyticsInstance?: Analytics | null,
  attempt?: number
): Promise<string | undefined> => {
  const directMatch =
    extractFromGtagInstances() ||
    extractFromGaDebug() ||
    extractFromDataLayer() ||
    extractFromGaCookie();

  if (directMatch) {
    return directMatch;
  }

  const measurementId = getMeasurementId(analyticsInstance);
  if (measurementId) {
    const clientId = await getClientIdViaGtagCommand(measurementId);
    if (clientId) {
      return clientId;
    }
  }

  return undefined;
};

export const getGa4UserPseudoId = async (
  analyticsInstance?: Analytics | null
): Promise<string | undefined> => {
  if (typeof window === "undefined") return undefined;

  const maxAttempts = 15;
  const delayMs = 120;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const result = await extractGa4UserPseudoId(analyticsInstance, attempt);
    if (result) {
      return result;
    }

    await sleep(delayMs);
  }

  return undefined;
};

// Type for GrowthBook instance
type GrowthBookInstance = InstanceType<typeof GrowthBook>;
type FeatureRule = {
  hashAttribute?: string;
  hashVersion?: number;
  variations?: unknown[];
  experiment?: {
    hashAttribute?: string;
    hashVersion?: number;
    variations?: unknown[];
    [key: string]: any;
  };
  [key: string]: any;
};

type FeatureDefinition = {
  rules?: FeatureRule[];
  [key: string]: any;
};

type FeatureMap = Record<string, FeatureDefinition>;

/**
 * Utility functions for GrowthBook integration
 */

/**
 * Update user attributes in GrowthBook
 * This should be called when user data changes
 * @param user - User object
 * @param growthbook - GrowthBook instance
 */
export const updateUserAttributes = (user: any, growthbook: GrowthBookInstance | null) => {
  if (!growthbook) return;
  
  const existingAttributes: Record<string, any> = typeof growthbook.getAttributes === "function"
    ? (growthbook.getAttributes() as Record<string, any>)
    : {};

  const attributes: Record<string, any> = {
    ...existingAttributes,
    ...getUserAttributes(user),
  };

  // Preserve anonymous_id used for experiment hashing
  if (existingAttributes?.anonymous_id && !attributes.anonymous_id) {
    attributes.anonymous_id = existingAttributes.anonymous_id;
  }

  // Ensure fallback id attribute stays consistent for experiments without explicit hashAttribute
  if (existingAttributes?.id && !attributes.id) {
    attributes.id = existingAttributes.id;
  }

  growthbook.setAttributes(attributes);
};

/**
 * Track events in Google Analytics 4 (GA4)
 * This ensures events are available in BigQuery for GrowthBook analysis
 * Note: GrowthBook SDK handles experiment tracking via the trackingCallback in GrowthBookProvider
 * @param eventName - Name of the event
 * @param properties - Event properties
 * @param growthbook - GrowthBook instance (kept for backwards compatibility)
 * @param analytics - Firebase Analytics instance (optional)
 */
export const trackEvent = async (
  eventName: string,
  properties: Record<string, any> = {},
  growthbook: GrowthBookInstance | null,
  analytics: Analytics | null | undefined = null
) => {
  // Note: GrowthBook SDK v1.6.2 doesn't have a track() method
  // Instead, tracking is handled by the trackingCallback in GrowthBookProvider
  // This function focuses on tracking to GA4/Firebase Analytics
  
  // Track in GA4 for BigQuery export
  if (analytics && typeof window !== 'undefined') {
    try {
      const { logEvent } = await import('firebase/analytics');
      await logEvent(analytics, eventName, {
        ...properties,
        // Add timestamp for better analysis
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      // Silently fail event tracking
    }
  }
};

/**
 * Track experiment exposure to both GrowthBook and GA4
 * This is critical for experiment analysis in GrowthBook
 * @param experimentKey - Experiment key
 * @param variation - Variation name (e.g., "control", "variant-a")
 * @param growthbook - GrowthBook instance
 * @param analytics - Firebase Analytics instance (optional)
 * @param additionalProps - Additional properties to track
 */
export const trackExperimentExposure = async (
  experimentKey: string,
  variation: string,
  growthbook: GrowthBookInstance | null,
  analytics: Analytics | null | undefined = null,
  additionalProps: Record<string, any> = {}
) => {
  const eventProps = {
    experiment: experimentKey,
    variation: variation,
    ...additionalProps,
  };
  
  // Track as experiment_viewed event
  await trackEvent('experiment_viewed', eventProps, growthbook, analytics);
  
  // Also track as a specific experiment event for easier querying
  await trackEvent(`experiment_${experimentKey}`, eventProps, growthbook, analytics);
};

/**
 * Get feature flag value with fallback
 * @param key - Feature flag key
 * @param defaultValue - Default value
 * @param growthbook - GrowthBook instance
 * @returns Feature flag value
 */
export const getFeatureValue = <T = any>(key: string, defaultValue: T, growthbook: GrowthBookInstance | null): T => {
  if (!growthbook) return defaultValue;
  
  return growthbook.getFeatureValue(key, defaultValue) as T;
};

/**
 * Check if feature is enabled
 * @param key - Feature flag key
 * @param growthbook - GrowthBook instance
 * @returns Whether feature is enabled
 */
export const isFeatureEnabled = (key: string, growthbook: GrowthBookInstance | null): boolean => {
  if (!growthbook) return false;
  
  return growthbook.isOn(key);
};

/**
 * Run an experiment and get the result
 * Note: Use hooks instead (useExperiment, useExperimentValue) for React components
 * This is a fallback for non-React contexts
 * @param key - Experiment key
 * @param growthbook - GrowthBook instance
 * @returns Experiment result
 */
export const runExperiment = (key: string, growthbook: GrowthBookInstance | null) => {
  if (!growthbook) return { value: null, variation: null, inExperiment: false };
  
  // Use getFeatureValue which is the primary API for getting experiment results
  const value = growthbook.getFeatureValue(key, null);
  const features = growthbook.getFeatures();
  const feature = features[key];
  
  return {
    value: value as any,
    variation: value ? String(value) : "unknown",
    inExperiment: !!feature,
  };
};

/**
 * Get all feature flags as an object
 * @param growthbook - GrowthBook instance
 * @returns All feature flags
 */
export const getAllFeatures = (growthbook: GrowthBookInstance | null) => {
  if (!growthbook) return {};
  
  return growthbook.getFeatures();
};

/**
 * Force refresh features from GrowthBook
 * @param growthbook - GrowthBook instance
 */
export const refreshFeatures = async (growthbook: GrowthBookInstance | null) => {
  if (!growthbook) return;
  
  try {
    await growthbook.refreshFeatures();
    enforceHashAttributeOnGrowthBookExperiments(growthbook);
  } catch (error) {
    // Silently fail feature refresh
  }
};

const ruleContainsVariations = (rule: FeatureRule): boolean => {
  if (!rule || typeof rule !== "object") return false;

  if (Array.isArray(rule.variations) && rule.variations.length > 0) {
    return true;
  }

  const experiment = rule.experiment;
  return Array.isArray(experiment?.variations) && experiment.variations.length > 0;
};

const patchRuleHashing = (
  rule: FeatureRule,
  hashAttribute: string,
  hashVersion: number
): boolean => {
  if (!ruleContainsVariations(rule)) {
    return false;
  }

  let modified = false;

  if (!rule.hashAttribute) {
    rule.hashAttribute = hashAttribute;
    modified = true;
  }

  if (!rule.hashVersion) {
    rule.hashVersion = hashVersion;
    modified = true;
  }

  if (rule.experiment) {
    if (!rule.experiment.hashAttribute) {
      rule.experiment.hashAttribute = hashAttribute;
      modified = true;
    }

    if (!rule.experiment.hashVersion) {
      rule.experiment.hashVersion = hashVersion;
      modified = true;
    }
  }

  return modified;
};

export const enforceHashAttributeOnGrowthBookExperiments = (
  growthbook: GrowthBookInstance | null,
  hashAttribute: string = GROWTHBOOK_CONFIG.hashing?.attribute || "anonymous_id",
  hashVersion: number = GROWTHBOOK_CONFIG.hashing?.version ?? 2
) => {
  if (!growthbook) return;

  const features = (growthbook.getFeatures?.() as FeatureMap) || {};
  let mutated = false;

  Object.entries(features).forEach(([featureKey, featureDefinition]) => {
    if (!featureDefinition?.rules?.length) return;

    const rulesMutated = featureDefinition.rules.some((rule) =>
      patchRuleHashing(rule, hashAttribute, hashVersion)
    );

    if (rulesMutated) {
      mutated = true;
    }
  });
};

/**
 * Track experiment conversion event
 * This should be called when a user completes a conversion goal in an experiment
 * @param experimentKey - Experiment key
 * @param conversionMetric - Conversion metric name (e.g., "booking_completed", "purchase")
 * @param conversionValue - Optional conversion value (e.g., revenue amount)
 * @param growthbook - GrowthBook instance
 * @param analytics - Firebase Analytics instance (optional)
 */
export const trackExperimentConversion = async (
  experimentKey: string,
  conversionMetric: string,
  conversionValue?: number,
  growthbook: GrowthBookInstance | null = null,
  analytics: Analytics | null | undefined = null
) => {
  const conversionProps = {
    experiment: experimentKey,
    metric: conversionMetric,
    ...(conversionValue !== undefined && { value: conversionValue }),
  };
  
  // Track conversion event
  await trackEvent('experiment_converted', conversionProps, growthbook, analytics);
  
  // Also track specific conversion metric
  await trackEvent(`conversion_${conversionMetric}`, conversionProps, growthbook, analytics);
};

/**
 * Create a GA4 tracking callback for GrowthBook experiments
 * This is the critical function that logs experiment exposure events to Firebase Analytics (GA4)
 * which then export to BigQuery for analysis in GrowthBook
 * 
 * @param analyticsInstance - Firebase Analytics instance
 * @returns A tracking callback function for GrowthBook
 */
export const createGa4TrackingCallback = (analyticsInstance: Analytics | null) => {
  return async (experiment: any, result: any) => {
    if (!analyticsInstance || typeof window === "undefined") {
      return;
    }

    try {
      // Dynamically import logEvent to avoid blocking
      const { logEvent } = await import("firebase/analytics");
      
      const experimentId = experiment?.key;
      
      // Skip if no experiment key
      if (!experimentId) {
        return;
      }

      // Get variation ID from result
      // GrowthBook provides variationId as the index (0, 1, 2, etc.)
      // But it can also be undefined if user is not in experiment
      const variationId = result?.variationId;
      
      // Only track if we have a variation ID or we know they're in the experiment
      if (variationId === undefined && !result?.inExperiment) {
        return;
      }

      // Use variation ID or default to 0 (control)
      const trackVariationId = variationId !== undefined ? String(variationId) : "0";

      // Log the critical experiment_viewed event with params GA4/BigQuery will see
      await logEvent(analyticsInstance, "experiment_viewed", {
        experiment_id: experimentId,
        variation_id: trackVariationId,
        // Add additional context
        experiment_name: experimentId,
        rule_id: experiment?.namespace?.[0],
      });
    } catch (error) {
      // Silently fail - tracking errors shouldn't break the app
    }
  };
};

/**
 * Track feature flag evaluation to GA4
 * This handles feature flags that are used as experiments (e.g., var-exp-a)
 * 
 * @param featureKey - Feature flag key (e.g., "var-exp-a")
 * @param featureValue - The evaluated value of the feature
 * @param analyticsInstance - Firebase Analytics instance
 */
export const trackFeatureFlagToGA4 = async (
  featureKey: string,
  featureValue: any,
  analyticsInstance: Analytics | null | undefined
) => {
  if (!analyticsInstance || typeof window === "undefined") {
    return;
  }

  try {
    const { logEvent } = await import("firebase/analytics");
    
    // Map feature values to variation IDs for consistency
    // This handles string values like "Control", "Variation 1", etc.
    let variationId: string;
    
    if (typeof featureValue === "number") {
      variationId = String(featureValue);
    } else if (featureValue === "Control" || featureValue === "control" || featureValue === 0) {
      variationId = "0";
    } else if (featureValue === "Variation 1" || featureValue === "variation-1" || featureValue === 1) {
      variationId = "1";
    } else if (featureValue === "Variation 2" || featureValue === "variation-2" || featureValue === 2) {
      variationId = "2";
    } else {
      // For any other string value, use it as-is
      variationId = String(featureValue);
    }

    // Log to GA4 with experiment_viewed event (same as experiment tracking)
    await logEvent(analyticsInstance, "experiment_viewed", {
      experiment_id: featureKey,
      variation_id: variationId,
      experiment_name: featureKey,
      feature_flag: "true", // Mark this as from a feature flag
    });
  } catch (error) {
    // Silently fail - tracking errors shouldn't break the app
  }
};

/**
 * Helper to track feature flag usage after a useFeatureValue hook call
 * Call this after you read a feature flag value to log it to GA4
 * 
 * @param featureKey - The feature flag key
 * @param featureValue - The value returned from useFeatureValue
 * @param analyticsInstance - Firebase Analytics instance
 * 
 * @example
 * const variant = useFeatureValue("var-exp-a", "Control");
 * useEffect(() => {
 *   trackFeatureFlagUsage("var-exp-a", variant, analytics);
 * }, [variant]);
 */
export const trackFeatureFlagUsage = (
  featureKey: string,
  featureValue: any,
  analyticsInstance: Analytics | null | undefined
) => {
  // Call tracking function immediately (it's already async-safe)
  trackFeatureFlagToGA4(featureKey, featureValue, analyticsInstance);
};

