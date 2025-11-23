"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useFeatureFlag } from "@/app/hooks/useFeatureFlag";
import { GROWTHBOOK_CONFIG } from "@/app/config/growthbook";

const SimpleFeatureTest = () => {
  // Test with predefined feature flags from config
  const newBookingFlow = useFeatureFlag(GROWTHBOOK_CONFIG.FEATURES.NEW_BOOKING_FLOW, false);
  const enhancedSearch = useFeatureFlag(GROWTHBOOK_CONFIG.FEATURES.ENHANCED_SEARCH, false);
  const premiumFeatures = useFeatureFlag(GROWTHBOOK_CONFIG.FEATURES.PREMIUM_FEATURES, false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Simple Feature Flag Test</CardTitle>
        <CardDescription>
          Testing feature flags defined in GROWTHBOOK_CONFIG
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">New Booking Flow:</span>
            <Badge variant={newBookingFlow.isOn ? "default" : "outline"}>
              {newBookingFlow.isOn ? "Enabled" : "Disabled"}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Enhanced Search:</span>
            <Badge variant={enhancedSearch.isOn ? "default" : "outline"}>
              {enhancedSearch.isOn ? "Enabled" : "Disabled"}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Premium Features:</span>
            <Badge variant={premiumFeatures.isOn ? "default" : "outline"}>
              {premiumFeatures.isOn ? "Enabled" : "Disabled"}
            </Badge>
          </div>
        </div>
        
        {(newBookingFlow.isLoading || enhancedSearch.isLoading || premiumFeatures.isLoading) && (
          <p className="text-sm text-muted-foreground">Loading...</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SimpleFeatureTest;

