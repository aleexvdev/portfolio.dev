import { e as createAstro, f as createComponent, h as addAttribute, r as renderTemplate } from './astro/server_Dx6Wyndb.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("http://localhost:4321/");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    canonicalPathname,
    site = Astro2.site?.origin,
    noindex = false,
    nofollow = false,
    ...props
  } = Astro2.props;
  const makeProductionUrl = (pathname) => `${pathname}`;
  const cleanTitle = title.trim();
  const cleanDescription = description.replace(/\s+/g, " ").trim();
  const canonicalURL = makeProductionUrl(canonicalPathname);
  const keywords = "desarrollo de software, programaci\xF3n web, ingeniero inform\xE1tico, Php, Laravel, Node.js, React, Full Stack, aplicaciones web, SEO, programador web, JavaScript, tecnolog\xEDas web";
  const imageAltText = "Desarrollador Full Stack - Alexander Valverde";
  const ogImage = makeProductionUrl(canonicalPathname + "/og-image-es.png");
  return renderTemplate`<!-- Meta Tags esenciales --><title>${cleanTitle}</title><meta name="description"${addAttribute(cleanDescription, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Noindex y Nofollow Condicional -->${noindex && renderTemplate`<meta name="robots" content="noindex">`}${nofollow && renderTemplate`<meta name="robots" content="nofollow">`}<!-- Open Graph para Redes Sociales --><meta property="og:title"${addAttribute(cleanTitle, "content")}><meta property="og:description"${addAttribute(cleanDescription, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:image:alt"${addAttribute(imageAltText, "content")}><!-- Twitter Cards --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(cleanTitle, "content")}><meta name="twitter:description"${addAttribute(cleanDescription, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><meta name="twitter:image:alt"${addAttribute(imageAltText, "content")}><!-- Favicon y precarga de recursos críticos --><link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><!-- Meta para la accesibilidad y rendimiento --><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">`;
}, "E:/Repositorios/Astro/portfolio.dev/src/layouts/seo.astro", void 0);

export { $$Seo as $ };
