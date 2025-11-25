"use client";

import { useFeature, useGrowthBook } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";

/**
 * Type definitions for feature flag values
 */
type FeatureFlagValue = boolean | string | number | object | null | undefined;

type FeatureFlagResult<T extends FeatureFlagValue = FeatureFlagValue> = {
  value: T;
  isOn: boolean;
  isOff: boolean;
  isLoading: boolean;
};

/**
 * Helper function to coerce any value to boolean
 * Handles strings, numbers, objects, etc.
 */
const coerceToBoolean = (value: FeatureFlagValue): boolean => {
  // For strings, check if it's not empty and not "false"
  if (typeof value === 'string') {
    return value !== '' && value !== 'false' && value !== '0';
  }
  // For numbers, 0 is false, anything else is true
  if (typeof value === 'number') {
    return value !== 0;
  }
  // For objects/arrays, non-null is true
  if (typeof value === 'object') {
    return value !== null;
  }
  // Fallback for booleans, null, undefined
  return !!value;
};

/**
 * Custom hook for using GrowthBook feature flags with support for any value type
 * Supports: boolean, string, number, object, and any other JSON-serializable type
 * 
 * @param key - The feature flag key
 * @param defaultValue - Default value if feature flag is not found
 * @returns {object} - { value, isOn, isOff, isLoading }
 * 
 * @example
 * // Boolean flag (backward compatible)
 * const { isOn, isOff } = useFeatureFlag("feature-enabled", false);
 * 
 * @example
 * // String value (e.g., for multi-variant experiments)
 * const { value } = useFeatureFlag("variant-a", "default");
 * if (value === "text-0") { ... }
 * 
 * @example
 * // Object value (e.g., for complex configurations)
 * const { value } = useFeatureFlag("config", { enabled: false });
 */
export const useFeatureFlag = <T extends FeatureFlagValue = boolean>(
  key: string,
  defaultValue: T = false as T
): FeatureFlagResult<T> => {
  try {
    const growthbook = useGrowthBook();
    const [updateTrigger, setUpdateTrigger] = useState(0);
    
    // Subscribe to changes in the GrowthBook instance to trigger re-renders
    // This ensures React components update when extension overrides change values
    useEffect(() => {
      if (!growthbook) return;
      
      const unsubscribe = growthbook.subscribe(() => {
        // Force re-render when GrowthBook state changes (e.g., from extension overrides)
        setUpdateTrigger(prev => prev + 1);
      });
      
      return () => unsubscribe();
    }, [growthbook]);
    
    // Get feature value - this will re-evaluate when updateTrigger changes
    const { value, isOn, isOff, isLoading } = useFeature(key, defaultValue);
    
    // Use the actual value or fallback to default
    const actualValue = (value !== undefined ? value : defaultValue) as T;
    
    // Compute isOn/isOff from value with intelligent coercion
    // This maintains backward compatibility with boolean flags
    // while supporting multi-value experiments
    const computedIsOn = isOn !== undefined ? isOn : coerceToBoolean(actualValue);
    const computedIsOff = isOff !== undefined ? isOff : !computedIsOn;
    
    return {
      value: actualValue,
      isOn: computedIsOn,
      isOff: computedIsOff,
      isLoading: isLoading !== undefined ? isLoading : false,
    };
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return {
      value: defaultValue as T,
      isOn: false,
      isOff: true,
      isLoading: false,
    };
  }
};


/**
 * Hook for getting feature flag value with type safety
 * Best for when you only care about the value, not the boolean state
 * 
 * @param key - The feature flag key
 * @param defaultValue - Default value if feature flag is not found
 * @returns The feature flag value typed as T
 * 
 * @example
 * const variant = useFeatureValue<string>("variant-a", "default");
 * 
 * @example
 * const config = useFeatureValue<{color: string}>('color-config', {color: 'blue'});
 */
export const useFeatureValue = <T extends FeatureFlagValue = string>(
  key: string,
  defaultValue: T
): T => {
  try {
    const { value } = useFeature(key, defaultValue);
    return (value !== undefined ? value : defaultValue) as T;
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return defaultValue;
  }
};

/**
 * Hook for checking if a feature is enabled (boolean coercion)
 * Use this when you have multi-value flags but only need to check if they're "truthy"
 * 
 * @param key - The feature flag key
 * @returns Whether the feature is enabled (coerced to boolean)
 * 
 * @example
 * const isEnabled = useFeatureEnabled("feature");
 * if (isEnabled) { ... }
 */
export const useFeatureEnabled = (key: string): boolean => {
  try {
    const growthbook = useGrowthBook();
    const [updateTrigger, setUpdateTrigger] = useState(0);
    
    useEffect(() => {
      if (!growthbook) return;
      const unsubscribe = growthbook.subscribe(() => {
        setUpdateTrigger((prev: number) => prev + 1);
      });
      return () => unsubscribe();
    }, [growthbook]);
    
    const { value } = useFeature(key, false);
    return coerceToBoolean(value !== undefined ? value : false);
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return false;
  }
};

/**
 * Hook specifically for multi-value experiments or string-based feature flags
 * Returns the exact string/value without boolean coercion
 * Includes helper methods to check specific values
 * 
 * @param key - The feature flag key
 * @param options - Configuration options
 * @returns {object} - { value, isValue(), variation, inExperiment }
 * 
 * @example
 * const variant = useExperimentValue("variant-a", {
 *   defaultValue: "text-0",
 *   possibleValues: ["text-0", "text-1", "text-2"]
 * });
 * 
 * if (variant.value === "text-1") {
 *   // Show variant 1
 * }
 * 
 * // Or use the helper method
 * if (variant.isValue("text-1")) {
 *   // Show variant 1
 * }
 */
export const useExperimentValue = <T extends FeatureFlagValue = string>(
  key: string,
  options: {
    defaultValue?: T;
    possibleValues?: T[];
  } = {}
): {
  value: T;
  variation: string | undefined;
  inExperiment: boolean;
  isValue: (val: T) => boolean;
} => {
  try {
    const growthbook = useGrowthBook();
    const [updateTrigger, setUpdateTrigger] = useState(0);
    
    useEffect(() => {
      if (!growthbook) return;
      const unsubscribe = growthbook.subscribe(() => {
        setUpdateTrigger((prev: number) => prev + 1);
      });
      return () => unsubscribe();
    }, [growthbook]);
    
    const defaultValue = options.defaultValue || ("default" as T);
    const { value, variation, inExperiment } = useFeature(key, defaultValue);
    
    const actualValue = (value !== undefined ? value : defaultValue) as T;
    
    return {
      value: actualValue,
      variation,
      inExperiment: inExperiment ?? false,
      isValue: (val: T) => actualValue === val,
    };
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return {
      value: options.defaultValue || ("default" as T),
      variation: undefined,
      inExperiment: false,
      isValue: () => false,
    };
  }
};

/**
 * Hook for running experiments (backward compatible)
 * Use when you want both the value and experiment metadata
 * 
 * @param key - The experiment key
 * @param options - Experiment options
 * @returns {object} - { value, variation, inExperiment }
 * 
 * @example
 * const experiment = useExperiment("checkout-flow");
 * if (experiment.inExperiment) {
 *   // User is in experiment
 * }
 */
export const useExperiment = (
  key: string,
  options: { defaultValue?: FeatureFlagValue; variations?: FeatureFlagValue[] } = {}
): {
  value: FeatureFlagValue;
  variation: string | undefined;
  inExperiment: boolean;
} => {
  try {
    const { value, variation, inExperiment } = useFeature(key, options.defaultValue || "control");
    return {
      value,
      variation,
      inExperiment: inExperiment ?? false,
    };
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return {
      value: options.defaultValue || "control",
      variation: "control",
      inExperiment: false,
    };
  }
};

