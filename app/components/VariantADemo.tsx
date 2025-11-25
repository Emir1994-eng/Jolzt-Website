"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useExperimentValue } from "@/app/hooks/useFeatureFlag";
import { GROWTHBOOK_CONFIG } from "@/app/config/growthbook";

/**
 * Demo component for multi-value experiments like variant-a
 * Shows how to handle string-based feature flag values
 */
const VariantADemo = () => {
  // Define the possible text values for this experiment
  const TEXT_VALUES = {
    "0": "This is Text 0 - The default variant or control group",
    "1": "This is Test Text 1 - The first variation",
    "2": "This is Test Text 2 - The second variation",
  } as const;

  // Use the new useExperimentValue hook for multi-value experiments
  const variant = useExperimentValue<string>(
    GROWTHBOOK_CONFIG.EXPERIMENTS.VARIANT_A,
    {
      defaultValue: "0",
      possibleValues: ["0", "1", "2"],
    }
  );

  // Get the text to display based on the variant value
  const displayText =
    TEXT_VALUES[variant.value as keyof typeof TEXT_VALUES] || TEXT_VALUES["0"];

  // Determine styling based on variant
  const getVariantStyles = () => {
    switch (variant.value) {
      case "0":
        return {
          bg: "bg-blue-50 dark:bg-blue-950",
          border: "border-blue-200 dark:border-blue-800",
          text: "text-blue-800 dark:text-blue-200",
          badge: "bg-blue-500",
        };
      case "1":
        return {
          bg: "bg-green-50 dark:bg-green-950",
          border: "border-green-200 dark:border-green-800",
          text: "text-green-800 dark:text-green-200",
          badge: "bg-green-500",
        };
      case "2":
        return {
          bg: "bg-purple-50 dark:bg-purple-950",
          border: "border-purple-200 dark:border-purple-800",
          text: "text-purple-800 dark:text-purple-200",
          badge: "bg-purple-500",
        };
      default:
        return {
          bg: "bg-gray-50 dark:bg-gray-950",
          border: "border-gray-200 dark:border-gray-800",
          text: "text-gray-800 dark:text-gray-200",
          badge: "bg-gray-500",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Variant-A Multi-Value Experiment Demo</CardTitle>
        <CardDescription>
          This demonstrates how to use string-based feature flag values with the
          new multi-value support
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Variant Display */}
        <div>
          <h3 className="font-semibold mb-3">Current Variant</h3>
          <div className="flex gap-2 items-center mb-4">
            <Badge className={styles.badge}>
              Variant {variant.value}
            </Badge>
            {variant.inExperiment && (
              <Badge variant="outline">In Experiment</Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            Variation ID: <code className="bg-muted px-2 py-1 rounded">{variant.variation}</code>
          </p>
        </div>

        {/* Main Content Box */}
        <div
          className={`p-6 rounded-lg border ${styles.bg} ${styles.border}`}
        >
          <p className={`text-lg font-semibold ${styles.text}`}>
            {displayText}
          </p>
        </div>

        {/* Individual Variant Checks */}
        <div>
          <h3 className="font-semibold mb-3">Variant Checks (using isValue method)</h3>
          <div className="space-y-2">
            {Object.entries(TEXT_VALUES).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between p-3 rounded-lg border"
              >
                <span className="text-sm">
                  Variant {key}: {variant.isValue(key) && "✓"}
                </span>
                <Badge variant={variant.isValue(key) ? "default" : "outline"}>
                  {variant.isValue(key) ? "Active" : "Inactive"}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Experiment Metadata */}
        <div>
          <h3 className="font-semibold mb-3">Experiment Metadata</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground">In Experiment</p>
              <p className="font-mono text-sm">
                {variant.inExperiment ? "Yes" : "No"}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Variation ID</p>
              <p className="font-mono text-sm">
                {variant.variation || "N/A"}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Current Value</p>
              <p className="font-mono text-sm">{variant.value}</p>
            </div>
          </div>
        </div>

        {/* Usage Example Code */}
        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm font-semibold mb-2">Usage Example:</p>
          <pre className="text-xs overflow-x-auto">
            {`const variant = useExperimentValue(
  "variant-a",
  { defaultValue: "0" }
);

if (variant.isValue("0")) {
  // Show text 0
} else if (variant.isValue("1")) {
  // Show text 1
} else if (variant.isValue("2")) {
  // Show text 2
}`}
          </pre>
        </div>

        {/* Instructions */}
        <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>💡 Tip:</strong> Toggle this experiment's value using the
            GrowthBook extension to see the content update in real-time. Try
            changing the value to "0", "1", or "2"!
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VariantADemo;
