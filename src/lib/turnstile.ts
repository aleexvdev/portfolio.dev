export function getTurnstileSiteKey(): string {
  return (
    import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ||
    import.meta.env.PUBLIC_TURNSTILE_PUBLIC_KEY ||
    "0x4AAAAAAAxB3NisfwmGnTy7"
  );
}
