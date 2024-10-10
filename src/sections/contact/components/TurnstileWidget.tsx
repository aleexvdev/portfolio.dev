import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile: any;
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
}

const publicKey = "0x4AAAAAAAxB3NisfwmGnTy7";

export const TurnstileWidget = ({ onVerify }: TurnstileWidgetProps) => {

  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.turnstile && turnstileRef.current) {
      window.turnstile.render(turnstileRef.current, {
        sitekey: publicKey,
        callback: onVerify,
      });
    }
  }, [onVerify]);

  return <div ref={turnstileRef} className="cf-turnstile"></div>;
}
