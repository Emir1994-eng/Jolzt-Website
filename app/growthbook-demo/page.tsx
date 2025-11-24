"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useFeatureFlag } from "@/app/hooks/useFeatureFlag";
import { GROWTHBOOK_CONFIG } from "@/app/config/growthbook";
import GrowthBookConnectionTest from "@/app/components/GrowthBookConnectionTest";
import SimpleFeatureTest from "@/app/components/SimpleFeatureTest";
import VariantADemo from "@/app/components/VariantADemo";

const GrowthBookDemoPage = () => {
  // Use React hooks so changes update in real-time when toggling in extension
  const firstFeatureResult = useFeatureFlag("first-feature", false);
  const guidedFilterResult = useFeatureFlag("guided-filter-pop-up", false);
  // first-test is not in SDK payload - enable it in GrowthBook dashboard for your environment
  const firstTestResult = useFeatureFlag("first-test", false);

  const { isOn: firstFeature, isLoading: loadingFirst } = firstFeatureResult;
  const { isOn: guidedFilter, isLoading: loadingGuided } = guidedFilterResult;
  const { isOn: firstTest, isLoading: loadingTest } = firstTestResult;

  return (
    <div className="container max-w-5xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl text-center">GrowthBook Feature Flags Demo</CardTitle>
          <CardDescription className="text-center">
            This page demonstrates how GrowthBook feature flags and experiments work in the Jolzt-Website application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Feature Flag Status */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Feature Flag Status (Toggle in Extension to see changes instantly!)
            </h2>
            <div className="flex gap-2 flex-wrap mb-4">
              <Badge variant={firstFeature ? "default" : "outline"} className="text-sm px-3 py-1">
                first-feature: {firstFeature ? "ENABLED" : "DISABLED"}
              </Badge>
              <Badge variant={guidedFilter ? "default" : "outline"} className="text-sm px-3 py-1">
                guided-filter-pop-up: {guidedFilter ? "ENABLED" : "DISABLED"}
              </Badge>
              <Badge 
                variant={firstTest ? "default" : "outline"} 
                className="text-sm px-3 py-1"
              >
                first-test: {firstTest ? "ENABLED" : "DISABLED"} (may not be in payload)
              </Badge>
            </div>
            
            {loadingFirst || loadingGuided || loadingTest ? (
              <p className="text-sm text-muted-foreground">Loading feature flags...</p>
            ) : (
              <div className="space-y-4">
                {firstFeature ? (
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-lg font-semibold text-green-800 dark:text-green-200">
                      🎉 First Feature is ENABLED!
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-lg font-semibold text-red-800 dark:text-red-200">
                      ❌ First Feature is DISABLED!
                    </p>
                  </div>
                )}
                
                <div>
                  {guidedFilter ? (
                    <p className="text-base font-semibold text-green-600 dark:text-green-400">
                      ✅ Guided Filter Pop-up is ENABLED!
                    </p>
                  ) : (
                    <p className="text-base text-muted-foreground">
                      ⚪ Guided Filter Pop-up is DISABLED
                    </p>
                  )}
                </div>
                
                {!firstTest && (
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      ⚠️ "first-test" is not in SDK payload. Enable it in GrowthBook dashboard for your environment to see it here.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Connection Test */}
          <div>
            <GrowthBookConnectionTest />
          </div>

          {/* Simple Feature Test */}
          <div>
            <SimpleFeatureTest />
          </div>

          {/* Variant-A Multi-Value Experiment Demo */}
          <div>
            <VariantADemo />
          </div>

          {/* Success Message */}
          <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                ✅ GrowthBook Integration Successful!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-green-700 dark:text-green-300">
                Your GrowthBook integration is working correctly. The connection test shows that your API key is being read and the provider is initialized.
              </p>
              <div className="text-sm text-green-700 dark:text-green-300">
                <p className="font-semibold mb-2">Next Steps:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Create feature flags in your GrowthBook dashboard</li>
                  <li>Add feature flag logic to your components</li>
                  <li>Test feature toggles in real-time using the browser extension</li>
                  <li>Set up webhooks for production deployment</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Integration Complete */}
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle>🎉 Integration Complete</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Your GrowthBook integration is successfully set up and ready for feature flag implementation.
                When you're ready to add feature flags, you can use the GrowthBook hooks and components we've prepared in your codebase.
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default GrowthBookDemoPage;

