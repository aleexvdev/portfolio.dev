import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile: any;
  }
}

const publicKey = "0x4AAAAAAAxB3NisfwmGnTy7";

export const TurnstileWidget = () => {

  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    script.onload = () => {
      if (window.turnstile) {
        window.turnstile.render(widgetRef.current, {
          sitekey: publicKey, 
        });
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div ref={widgetRef} className="cf-turnstile"></div>;
}
