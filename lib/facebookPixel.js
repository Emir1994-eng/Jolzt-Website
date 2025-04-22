export const logFacebookEvent = async (eventName, eventData) => {
  if (typeof window !== "undefined") {
    const ReactPixel = (await import("react-facebook-pixel")).default;
    ReactPixel.track(eventName, eventData);
  }
};
