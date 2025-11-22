"use client";

import { Suspense } from "react";
import GrowthBookProvider from "./GrowthBookProvider";
import PageViewTracker from "../components/PageViewTracker";

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <GrowthBookProvider>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      {children}
    </GrowthBookProvider>
  );
};

export default ClientProviders;

