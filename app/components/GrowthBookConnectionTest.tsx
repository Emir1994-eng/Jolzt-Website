"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GrowthBookConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState("Checking...");

  useEffect(() => {
    // Simple connection test without using the hook
    const testConnection = () => {
      try {
        // Check if we're in a GrowthBook context by looking for the provider
        const hasGrowthBookProvider = document.querySelector('[data-growthbook-provider]');
        
        if (hasGrowthBookProvider) {
          setConnectionStatus("✅ GrowthBook Provider Found");
        } else {
          setConnectionStatus("❌ GrowthBook Provider Not Found");
        }
      } catch (error) {
        console.error("Connection test error:", error);
        setConnectionStatus("❌ Error");
      }
    };

    testConnection();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>GrowthBook Connection Test</CardTitle>
        <CardDescription>
          This test checks if the GrowthBook provider is properly initialized.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Status:</span>
          <Badge 
            variant={
              connectionStatus.includes("✅") 
                ? "default" 
                : connectionStatus.includes("❌") 
                ? "destructive" 
                : "outline"
            }
          >
            {connectionStatus}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default GrowthBookConnectionTest;

