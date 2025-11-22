"use client";

import GrowthBookProvider from "./GrowthBookProvider";
import PageViewTracker from "../components/PageViewTracker";

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <GrowthBookProvider>
      <PageViewTracker />
      {children}
    </GrowthBookProvider>
  );
};

export default ClientProviders;

