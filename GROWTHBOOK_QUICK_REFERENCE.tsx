// ============================================================================
// QUICK REFERENCE: GrowthBook Multi-Value Feature Flags
// ============================================================================

// ============================================================================
// 1. BOOLEAN FLAGS (Backward Compatible)
// ============================================================================

import { useFeatureFlag, useFeatureEnabled } from "@/app/hooks/useFeatureFlag";

// Option 1: Use isOn/isOff
function FeatureToggle() {
  const { isOn, isOff } = useFeatureFlag("my-feature", false);
  
  return (
    <>
      {isOn && <NewUI />}
      {isOff && <LegacyUI />}
    </>
  );
}

// Option 2: Use useFeatureEnabled for simple checks
function FeatureToggle2() {
  const isEnabled = useFeatureEnabled("my-feature");
  return isEnabled ? <NewUI /> : <LegacyUI />;
}


// ============================================================================
// 2. STRING/MULTI-VALUE FLAGS (NEW)
// ============================================================================

import { useFeatureValue, useExperimentValue } from "@/app/hooks/useFeatureFlag";

// For simple string values
function ThemeSwitcher() {
  const theme = useFeatureValue<string>("theme", "light");
  // theme is: "light", "dark", or "auto"
  
  return <div className={`theme-${theme}`} />;
}

// For experiments with multiple variations (RECOMMENDED FOR variant-a)
function VariantComponent() {
  const variant = useExperimentValue<string>("variant-a", {
    defaultValue: "0",
    possibleValues: ["0", "1", "2"]
  });
  
  // Method 1: Using isValue helper
  if (variant.isValue("0")) return <Variant0 />;
  if (variant.isValue("1")) return <Variant1 />;
  if (variant.isValue("2")) return <Variant2 />;
  
  // Method 2: Using switch
  switch (variant.value) {
    case "0": return <Variant0 />;
    case "1": return <Variant1 />;
    case "2": return <Variant2 />;
    default: return <DefaultVariant />;
  }
  
  // Method 3: Using object mapping
  const components = {
    "0": <Variant0 />,
    "1": <Variant1 />,
    "2": <Variant2 />
  };
  return components[variant.value as "0" | "1" | "2"] || <DefaultVariant />;
}


// ============================================================================
// 3. NUMBER FLAGS (NEW)
// ============================================================================

import { useFeatureValue } from "@/app/hooks/useFeatureFlag";

function PriceMultiplier() {
  // Number-based feature flag for pricing
  const multiplier = useFeatureValue<number>("price-multiplier", 1.0);
  
  const price = 100;
  return <div>${price * multiplier}</div>;
}

function MaxResults() {
  // Number-based flag for pagination
  const perPage = useFeatureValue<number>("results-per-page", 10);
  
  return <Pagination pageSize={perPage} />;
}


// ============================================================================
// 4. OBJECT FLAGS (NEW)
// ============================================================================

import { useFeatureValue } from "@/app/hooks/useFeatureFlag";

interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundColor: string;
  showAnimation: boolean;
  animationDuration: number;
}

function HeroSection() {
  const heroConfig = useFeatureValue<HeroConfig>(
    "hero-section-config",
    {
      title: "Welcome",
      subtitle: "To Jolzt",
      backgroundColor: "#ffffff",
      showAnimation: false,
      animationDuration: 1000
    }
  );
  
  return (
    <div
      style={{ backgroundColor: heroConfig.backgroundColor }}
      className={heroConfig.showAnimation ? "animate-in" : ""}
    >
      <h1>{heroConfig.title}</h1>
      <p>{heroConfig.subtitle}</p>
    </div>
  );
}


// ============================================================================
// 5. REAL-WORLD EXAMPLE: variant-a Implementation
// ============================================================================

"use client";

import { useExperimentValue } from "@/app/hooks/useFeatureFlag";
import { GROWTHBOOK_CONFIG } from "@/app/config/growthbook";

// Text mapping for variant-a
const VARIANT_A_TEXTS = {
  "0": "This is Text 0 - Default/Control Group",
  "1": "This is Test Text 1 - Variation A",
  "2": "This is Test Text 2 - Variation B"
} as const;

function MyVariantComponent() {
  // Get the experiment value
  const variant = useExperimentValue<string>(
    GROWTHBOOK_CONFIG.EXPERIMENTS.VARIANT_A,
    {
      defaultValue: "0",
      possibleValues: ["0", "1", "2"]
    }
  );

  // Get the text
  const text = VARIANT_A_TEXTS[variant.value as keyof typeof VARIANT_A_TEXTS];

  // Determine styling
  const getStyles = () => {
    const styles: Record<"0" | "1" | "2", string> = {
      "0": "bg-blue-50 border-blue-200",
      "1": "bg-green-50 border-green-200",
      "2": "bg-purple-50 border-purple-200"
    };
    return styles[variant.value as "0" | "1" | "2"];
  };

  return (
    <div className={`p-4 rounded border ${getStyles()}`}>
      <p className="font-semibold">{text}</p>
      {variant.inExperiment && (
        <p className="text-xs text-gray-600 mt-2">
          Variant ID: {variant.variation}
        </p>
      )}
    </div>
  );
}


// ============================================================================
// 6. CHECKING EXPERIMENT METADATA
// ============================================================================

import { useExperimentValue } from "@/app/hooks/useFeatureFlag";

function ExperimentDebug() {
  const variant = useExperimentValue<string>("variant-a", {
    defaultValue: "0"
  });

  return (
    <div>
      <p>Current Value: {variant.value}</p>
      <p>Variation Name: {variant.variation}</p>
      <p>In Experiment: {variant.inExperiment ? "Yes" : "No"}</p>
      
      {/* Check specific values */}
      <p>Is Control: {variant.isValue("0") ? "Yes" : "No"}</p>
      <p>Is Variant 1: {variant.isValue("1") ? "Yes" : "No"}</p>
      <p>Is Variant 2: {variant.isValue("2") ? "Yes" : "No"}</p>
    </div>
  );
}


// ============================================================================
// 7. CONDITIONAL RENDERING PATTERNS
// ============================================================================

import { useExperimentValue, useFeatureValue } from "@/app/hooks/useFeatureFlag";

// Pattern 1: If-else with isValue
function Pattern1() {
  const variant = useExperimentValue<string>("variant-a", {defaultValue: "0"});
  
  if (variant.isValue("0")) return <div>Control</div>;
  if (variant.isValue("1")) return <div>Variant 1</div>;
  if (variant.isValue("2")) return <div>Variant 2</div>;
}

// Pattern 2: Switch statement
function Pattern2() {
  const variant = useExperimentValue<string>("variant-a", {defaultValue: "0"});
  
  switch (variant.value) {
    case "0": return <div>Control</div>;
    case "1": return <div>Variant 1</div>;
    case "2": return <div>Variant 2</div>;
  }
}

// Pattern 3: Object mapping
function Pattern3() {
  const variant = useExperimentValue<string>("variant-a", {defaultValue: "0"});
  
  const components = {
    "0": <div>Control</div>,
    "1": <div>Variant 1</div>,
    "2": <div>Variant 2</div>
  };
  
  return components[variant.value as "0" | "1" | "2"] || <div>Unknown</div>;
}

// Pattern 4: Ternary operators
function Pattern4() {
  const variant = useExperimentValue<string>("variant-a", {defaultValue: "0"});
  
  return variant.isValue("0")
    ? <div>Control</div>
    : variant.isValue("1")
    ? <div>Variant 1</div>
    : <div>Variant 2</div>;
}


// ============================================================================
// 8. USING IN CONFIGURATION
// ============================================================================

// Update app/config/growthbook.ts to add your experiments:

export const GROWTHBOOK_CONFIG = {
  // ... existing config ...
  
  EXPERIMENTS: {
    VARIANT_A: "variant-a",              // NEW
    HOMEPAGE_LAYOUT: "homepage-layout",
    PRICING_DISPLAY: "pricing-display",
    CHECKOUT_FLOW: "checkout-flow",
  },
};


// ============================================================================
// 9. TESTING WITH EXTENSION
// ============================================================================

/*
1. Install GrowthBook DevTools extension (Chrome/Firefox)
2. Start dev server: npm run dev
3. Go to: http://localhost:3000/growthbook-demo
4. Open DevTools (F12)
5. Go to "GrowthBook" tab
6. Find "variant-a" experiment
7. Toggle value between "0", "1", "2"
8. Watch UI update in real-time! ✨
*/


// ============================================================================
// 10. ERROR HANDLING & LOADING STATES
// ============================================================================

import { useExperimentValue } from "@/app/hooks/useFeatureFlag";

function ComponentWithLoadingState() {
  const variant = useExperimentValue<string>("variant-a", {
    defaultValue: "0"
  });

  // The hook handles errors internally, but you can still check
  if (!variant.value) {
    return <div>Error loading variant</div>;
  }

  return <div>Variant {variant.value}</div>;
}


// ============================================================================
// SUMMARY TABLE
// ============================================================================

/*
┌──────────────────────────┬──────────────────┬──────────────────────┐
│ Hook                     │ Best For         │ Returns              │
├──────────────────────────┼──────────────────┼──────────────────────┤
│ useFeatureFlag<T>        │ Any type         │ value, isOn, isOff   │
│                          │ (universal)      │ isLoading            │
├──────────────────────────┼──────────────────┼──────────────────────┤
│ useFeatureValue<T>       │ Just the value   │ T (the value)        │
│                          │ (no boolean)     │                      │
├──────────────────────────┼──────────────────┼──────────────────────┤
│ useFeatureEnabled        │ Boolean checks   │ boolean              │
│                          │ (simple)         │ (with coercion)      │
├──────────────────────────┼──────────────────┼──────────────────────┤
│ useExperimentValue<T>    │ Multi-value      │ value, isValue()     │
│                          │ experiments      │ variation, inExp     │
├──────────────────────────┼──────────────────┼──────────────────────┤
│ useExperiment            │ General exps     │ value, variation     │
│                          │ (backward compat)│ inExperiment         │
└──────────────────────────┴──────────────────┴──────────────────────┘
*/
