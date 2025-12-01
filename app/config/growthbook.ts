// GrowthBook Configuration
export const GROWTHBOOK_CONFIG = {
  // Client key (preferred) or legacy API key
  clientKey: process.env.NEXT_PUBLIC_GROWTHBOOK_CLIENT_KEY || process.env.NEXT_PUBLIC_GROWTHBOOK_API_KEY,
  apiKey: process.env.NEXT_PUBLIC_GROWTHBOOK_API_KEY, // backward compatibility
  
  // GrowthBook CDN host
  apiHost: process.env.NEXT_PUBLIC_GROWTHBOOK_HOST || "https://cdn.growthbook.io",
  
  // Enable dev mode in development (override handled in provider)
  enableDevMode: true,
  
  // Default attributes for all users
  defaultAttributes: {
    environment: process.env.NODE_ENV,
    // Add any default user attributes here
  },
  
  // Tracking configuration
  // The trackingCallback is now configured in the GrowthBookProvider
  // It automatically tracks experiment exposures to both GrowthBook and Firebase Analytics (GA4)
  TRACKING: {
    // Enable tracking callback (now enabled by default in provider)
    enabled: true,
    
    // Track to Firebase Analytics/BigQuery
    trackToFirebase: true,
    
    // Log tracking events to console in development
    debug: process.env.NEXT_PUBLIC_GROWTHBOOK_DEV_MODE === "true",
    
    // Event names used for tracking
    EXPERIMENT_VIEWED: "experiment_viewed",
    EXPERIMENT_CONVERTED: "experiment_converted",
  },
  
  // Feature flag keys - define your feature flags here for better type safety
  FEATURES: {
    // Example feature flags - replace with your actual feature flags
    NEW_BOOKING_FLOW: "new-booking-flow",
    ENHANCED_SEARCH: "enhanced-search",
    PREMIUM_FEATURES: "premium-features",
    BETA_DASHBOARD: "beta-dashboard",
    SOCIAL_LOGIN: "social-login",
    ADVANCED_FILTERS: "advanced-filters",
  },
  
  // Experiment keys
  EXPERIMENTS: {
    // Example experiments - replace with your actual experiments
    HOMEPAGE_LAYOUT: "homepage-layout",
    PRICING_DISPLAY: "pricing-display",
    CHECKOUT_FLOW: "checkout-flow",
    VARIANT_A: "variant-a",
  },
};

// Helper function to get user attributes
export const getUserAttributes = (user?: {
  id?: string;
  email?: string;
  [key: string]: any;
}) => {
  if (!user) return GROWTHBOOK_CONFIG.defaultAttributes;
  
  return {
    ...GROWTHBOOK_CONFIG.defaultAttributes,
    userId: user.id,
    email: user.email,
    // Add any user-specific attributes here
    // userType: user.type,
    // subscription: user.subscription,
    // etc.
  };
};

