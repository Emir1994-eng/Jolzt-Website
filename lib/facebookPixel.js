import ReactPixel from "react-facebook-pixel";

export const logFacebookEvent = (eventName, eventData) => {
  if (typeof window !== "undefined") {
    ReactPixel.track(eventName, eventData);
  }
};