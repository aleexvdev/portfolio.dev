import { f as createComponent, n as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dx6Wyndb.mjs';
import 'kleur/colors';
import { $ as $$Layout, P as Particles, a as $$Hero, b as $$Experience, c as $$CallToAction, d as $$Projects, e as $$About, f as $$Contact } from '../chunks/Particles_m4D0nzfX.mjs';
import { $ as $$Footer } from '../chunks/Footer_D_PgQmee.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Alexander Valverde | Computer Engineer";
  const description = "Hello! I'm Alexander Valverde, a computer engineer specialized in software development and web programming. I'm committed to creating innovative and useful solutions to enhance user experience. Skilled in both frontend and backend development.";
  const canonicalPathname = "https://alexvdev.netlify.app";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonicalPathname": canonicalPathname }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div> ${renderComponent($$result2, "Particles", Particles, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/background/Particles", "client:component-export": "Particles" })} ${renderComponent($$result2, "Hero", $$Hero, {})} </div> ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "CallToAction", $$CallToAction, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> ` })}`;
}, "E:/Repositorios/Astro/portfolio.dev/src/pages/en/index.astro", void 0);

const $$file = "E:/Repositorios/Astro/portfolio.dev/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
