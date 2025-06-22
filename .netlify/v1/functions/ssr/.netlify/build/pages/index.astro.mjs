import { f as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dx6Wyndb.mjs';
import 'kleur/colors';
import { $ as $$Layout, P as Particles, a as $$Hero, b as $$Experience, c as $$CallToAction, d as $$Projects, e as $$About, f as $$Contact } from '../chunks/Particles_m4D0nzfX.mjs';
import { $ as $$Footer } from '../chunks/Footer_D_PgQmee.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Alexander Valverde | Ingeniero Inform\xE1tico";
  const description = "Hola! Soy Alexander Valverde, un ingeniero inform\xE1tico especializado en desarrollo de software y programaci\xF3n web. Estoy comprometido con la creaci\xF3n de soluciones innovadoras y \xFAtiles para mejorar la experiencia de los usuarios. H\xE1bil tanto en frontend como en backend.";
  const canonicalPathname = "https://alexvdev.netlify.app";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonicalPathname": canonicalPathname }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div> ${renderComponent($$result2, "Particles", Particles, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/background/Particles", "client:component-export": "Particles" })} ${renderComponent($$result2, "Hero", $$Hero, {})} </div> ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "E:/Repositorios/Astro/portfolio.dev/src/pages/index.astro", void 0);

const $$file = "E:/Repositorios/Astro/portfolio.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
