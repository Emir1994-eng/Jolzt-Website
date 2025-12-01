import { GROWTHBOOK_CONFIG, getUserAttributes } from "../config/growthbook";
import { GrowthBook } from "@growthbook/growthbook-react";
import type { Analytics } from "firebase/analytics";

// Type for GrowthBook instance
type GrowthBookInstance = InstanceType<typeof GrowthBook>;

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
  
  const attributes = getUserAttributes(user);
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
      console.warn('Failed to log event to GA4:', error);
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
    await growthbook.loadFeatures();
  } catch (error) {
    console.error("Failed to refresh GrowthBook features:", error);
  }
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

