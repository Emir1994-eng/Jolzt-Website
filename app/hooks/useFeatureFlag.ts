"use client";

import { useFeature, useGrowthBook } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";

/**
 * Custom hook for using GrowthBook feature flags
 * @param key - The feature flag key
 * @param defaultValue - Default value if feature flag is not found
 * @returns {object} - { value, isOn, isOff, isLoading }
 */
export const useFeatureFlag = (key: string, defaultValue: boolean | string | number | object = false) => {
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
    
    // Compute isOn from value if it's undefined (fallback for when hook doesn't provide it)
    const computedIsOn = isOn !== undefined ? isOn : (value !== undefined ? !!value : !!defaultValue);
    const computedIsOff = isOff !== undefined ? isOff : !computedIsOn;
    
    return {
      value: value !== undefined ? value : defaultValue,
      isOn: computedIsOn,
      isOff: computedIsOff,
      isLoading: isLoading !== undefined ? isLoading : false,
    };
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return {
      value: defaultValue,
      isOn: false,
      isOff: true,
      isLoading: false,
    };
  }
};

/**
 * Hook for getting feature flag value with type safety
 * @param key - The feature flag key
 * @param defaultValue - Default value if feature flag is not found
 * @returns The feature flag value
 */
export const useFeatureValue = <T = any>(key: string, defaultValue: T): T => {
  try {
    const { value } = useFeature(key, defaultValue);
    return (value !== undefined ? value : defaultValue) as T;
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return defaultValue;
  }
};

/**
 * Hook for checking if a feature is enabled
 * @param key - The feature flag key
 * @returns Whether the feature is enabled
 */
export const useFeatureEnabled = (key: string): boolean => {
  try {
    const { isOn } = useFeature(key, false);
    return isOn ?? false;
  } catch (error) {
    console.warn("GrowthBook hook error, using fallback:", error);
    return false;
  }
};

/**
 * Hook for running experiments
 * @param key - The experiment key
 * @param options - Experiment options
 * @returns {object} - { value, variation, inExperiment }
 */
export const useExperiment = (key: string, options: { defaultValue?: any; variations?: any[] } = {}) => {
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

export default useFeatureFlag;

