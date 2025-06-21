import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile: any;
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

const getPublicKey = () => {
  const key = import.meta.env.PUBLIC_TURNSTILE_PUBLIC_KEY;  
  if (typeof key === 'string' && key.trim() !== '') {
    return key;
  }
  return "1x00000000000000000000AA"; // Test key for development
};

const publicKey = getPublicKey();

export const TurnstileWidget = ({ onVerify }: TurnstileWidgetProps) => {

  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    if (window.turnstile && turnstileRef.current && publicKey) {
      console.log("Rendering Turnstile with key:", publicKey);
      window.turnstile.render(turnstileRef.current, {
        sitekey: publicKey,
        callback: onVerify,
      });
    }
  }, [onVerify]);

  return <div ref={turnstileRef} className="cf-turnstile"></div>;
}