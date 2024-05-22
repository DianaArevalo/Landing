/* empty css                          */
import { c as createComponent, r as renderTemplate, i as renderComponent, f as createAstro, m as maybeRenderHead } from '../astro_rDwG0oiB.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_DYK01KLx.mjs';
import { a as $$About } from './about_DY3jJJ5g.mjs';
import $$Content from './content_B1viSj_X.mjs';
import $$Products from './products_D_1QpiPO.mjs';
import $$Contact from './contact_BLzpXR3e.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="text-black justify-center items-center place-content-center min-h-full"> <section class="bg-[rgb(255,255,255)] w-[95%] m-5 md:m-10 rounded-2xl outline-offset-0 shadow-2xl overflow-auto touch-auto place-content-center bottom-0"> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Content", $$Content, {})} ${renderComponent($$result2, "Products", $$Products, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </section> </main> ` })}`;
}, "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/index.astro", void 0);

const $$file = "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
