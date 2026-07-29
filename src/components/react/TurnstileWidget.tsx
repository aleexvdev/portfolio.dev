import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        options: Record<string, unknown>,
      ) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

const siteKey =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? "0x4AAAAAAAxB3NisfwmGnTy7";

function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) {
    return Promise.resolve();
  }

  const existing = document.getElementById(
    TURNSTILE_SCRIPT_ID,
  ) as HTMLScriptElement | null;

  if (existing) {
    return new Promise((resolve, reject) => {
      if (window.turnstile) {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("No se pudo cargar Turnstile")),
        { once: true },
      );
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar Turnstile"));
    document.head.appendChild(script);
  });
}

export const TurnstileWidget = ({
  onVerify,
  onError,
  onExpire,
}: TurnstileWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const renderWidget = async () => {
      try {
        await loadTurnstileScript();

        if (cancelled || !containerRef.current || !window.turnstile) {
          return;
        }

        window.turnstile.ready(() => {
          if (cancelled || !containerRef.current || !window.turnstile) {
            return;
          }

          if (widgetIdRef.current) {
            window.turnstile.remove(widgetIdRef.current);
            widgetIdRef.current = null;
          }

          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme: "dark",
            callback: onVerify,
            "error-callback": onError,
            "expired-callback": onExpire,
            "timeout-callback": onExpire,
            retry: "auto",
            "refresh-expired": "auto",
          });
        });
      } catch (error) {
        console.error("Turnstile:", error);
        onError?.();
      }
    };

    void renderWidget();

    return () => {
      cancelled = true;

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onVerify, onError, onExpire]);

  return <div ref={containerRef} className="min-h-[65px]" />;
};
