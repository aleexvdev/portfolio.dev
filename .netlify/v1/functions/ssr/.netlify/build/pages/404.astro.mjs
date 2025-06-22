import { e as createAstro, f as createComponent, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dx6Wyndb.mjs';
import 'kleur/colors';
import { $ as $$Seo } from '../chunks/seo_CbbYWVyX.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:4321/");
const $$ErrorPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ErrorPage;
  const { title, description, canonicalPathname } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width">', '<link rel="manifest" href="/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff"><meta name="generator"', "><title>", '</title><script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer><\/script>', "</head> <body> ", " </body></html>"])), renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "canonicalPathname": canonicalPathname }), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "E:/Repositorios/Astro/portfolio.dev/src/layouts/error-page.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const title = "Alexander Valverde | Ingeniero Inform\xE1tico";
  const description = "Hola! Soy Alexander Valverde, un ingeniero inform\xE1tico especializado en desarrollo de software y programaci\xF3n web. Estoy comprometido con la creaci\xF3n de soluciones innovadoras y \xFAtiles para mejorar la experiencia de los usuarios. H\xE1bil tanto en frontend como en backend.";
  const canonicalPathname = "https://alexvdev.netlify.app";
  const logo = "{av.}";
  return renderTemplate`${renderComponent($$result, "ErrorPage", $$ErrorPage, { "title": title, "description": description, "canonicalPathname": canonicalPathname, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="fixed z-[99999] h-max w-full transition-colors duration-300" data-astro-cid-zetdm5md> <div class="relative mx-auto flex h-full w-full max-w-screen-lg justify-center" data-astro-cid-zetdm5md> <div class="flex h-max w-full items-center justify-between rounded-3xl px-6 py-1 transition-all duration-300 md:py-3" data-astro-cid-zetdm5md> <div class="flex h-max w-max items-center" data-astro-cid-zetdm5md> <a href="/#" class="gradient-text flex flex-col items-center justify-center text-2xl leading-6 font-bold transition-transform duration-200 select-none lg:text-3xl"${addAttribute({
    background: "linear-gradient(90deg, #9845e8 0%, #3377ff 55%, #dd5789 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }, "style")} data-astro-cid-zetdm5md> ${logo} </a> </div> </div> </div> </header> <main class="relative mx-auto flex min-h-screen w-full max-w-screen-lg flex-col items-center justify-center" data-astro-cid-zetdm5md> <img src="./thinking-face.png" alt="404: Página no encontrada" class="animate-float mb-5" data-astro-cid-zetdm5md> <h1 class="mb-5 text-6xl font-bold text-black/80 dark:text-white/80" data-astro-cid-zetdm5md>
Hmmm...
</h1> <p class="text-2xl font-bold text-black/80 dark:text-white/80" data-astro-cid-zetdm5md>
Parece que aquí no hay nada.
</p> <p class="mt-1 text-2xl font-bold text-black/80 dark:text-white/80" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md>Quizás deberías volver a</span> <a href="/#" class="group relative inline-block rounded font-bold text-blue-700 transition duration-300 ease-in-out hover:text-blue-700" data-astro-cid-zetdm5md>
casa
<span class="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" data-astro-cid-zetdm5md></span> </a>.
</p> </main> ` })} `;
}, "E:/Repositorios/Astro/portfolio.dev/src/pages/404.astro", void 0);

const $$file = "E:/Repositorios/Astro/portfolio.dev/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
