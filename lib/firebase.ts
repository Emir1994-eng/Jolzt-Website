import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

declare global {
  interface Window {
    ga_debug?: {
      trace?: boolean;
    };
    _growthbook?: any; // GrowthBook instance for DevTools extension
  }
}

export function initializeFirebase() {
  if (typeof window === "undefined") return;

  try {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
      analytics = getAnalytics(app);
      
      if (process.env.NODE_ENV === "development") {
        window.ga_debug = { trace: true };
        console.log("Firebase Analytics initialized in debug mode");
      }
    }
    return analytics;
  } catch (error) {
    console.error("Firebase initialization error:", error);
    return undefined;
  }
}
initializeFirebase();

export { analytics };