const PIXEL_ID = "1208878434780081";

type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  push?: MetaPixelFunction;
  loaded?: boolean;
  version?: string;
  queue?: unknown[];
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
    __sobraGranaPixelInitialized?: boolean;
  }
}

export function initMetaPixel() {
  if (typeof window === "undefined") return;

  if (!window.fbq) {
    const fbq: MetaPixelFunction = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue?.push(args);
      }
    };

    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  if (!window.__sobraGranaPixelInitialized) {
    window.fbq?.("init", PIXEL_ID);
    window.__sobraGranaPixelInitialized = true;
  }
}

export function trackMetaEvent(eventName: string, parameters?: Record<string, unknown>) {
  initMetaPixel();
  window.fbq?.("track", eventName, parameters);
}

export const checkoutEventParameters = {
  content_ids: ["sobragrana"],
  content_name: "SobraGrana",
  content_type: "product",
  currency: "BRL",
  value: 47,
};
