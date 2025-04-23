"use client";
import { useEffect } from "react";

export default function FacebookPixelInitializer() {
  useEffect(() => {
    const loadPixel = async () => {
      const ReactPixel = (await import('react-facebook-pixel')).default;
      ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID, {}, { debug: true, autoConfig: true });
      ReactPixel.pageView();
    };

    if (typeof window !== "undefined") {
      loadPixel();
    }
  }, []);

  return null;
}
