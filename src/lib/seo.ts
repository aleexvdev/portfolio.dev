const SITE_ORIGIN = "https://alexvalverde.dev";

export const SITE_NAME = "Alexander Valverde";
export const TWITTER_SITE = "@alexvdev";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function toAbsoluteUrl(
  pathname: string,
  site: URL | string | undefined = SITE_ORIGIN,
): string {
  const base =
    typeof site === "string"
      ? site
      : site?.origin ?? SITE_ORIGIN;
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalizedPath, base).href;
}

export function getAlternatePathnames(pathname: string): {
  es: string;
  en: string;
} {
  const normalized = pathname === "" ? "/" : pathname;

  if (normalized.startsWith("/en")) {
    const esPath = normalized.replace(/^\/en/, "") || "/";
    return { es: esPath, en: normalized };
  }

  const enPath = normalized === "/" ? "/en" : `/en${normalized}`;
  return { es: normalized, en: enPath };
}

export const personSameAs = [
  "https://www.linkedin.com/in/alexvdev/",
  "https://github.com/aleexvdev",
];

export function getPersonJsonLd(lang: "es" | "en", site: URL | string | undefined) {
  const jobTitle =
    lang === "es" ? "Desarrollador Full Stack" : "Full Stack Developer";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexander Valverde",
    jobTitle,
    url: toAbsoluteUrl("/", site),
    sameAs: personSameAs,
  };
}
