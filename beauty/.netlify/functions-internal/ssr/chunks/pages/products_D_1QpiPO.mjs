/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, d as addAttribute, h as renderTransition, i as renderComponent } from '../astro_rDwG0oiB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */
/* empty css                          */

const $$Cards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- card -->${maybeRenderHead()}<div class="rounded-xl shadow-lg bg-[#cbf3f0] mb-10 mr-10" data-astro-cid-i5mwzbw6> <div class="p-5 flex flex-col" data-astro-cid-i5mwzbw6> <div class="rounded-xl overflow-hidden" data-astro-cid-i5mwzbw6> ${renderSlot($$result, $$slots["default"])} </div> ${renderSlot($$result, $$slots["title"])} <p class="text-slate-600 text-lg mt-3" data-astro-cid-i5mwzbw6>
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis ut itaque ducimus atque! Natus doloribus fugit nemo
            nobis non consequuntur odio laudantium veritatis corrupti, autem ex
            obcaecati quas doloremque a?
</p> <a href="https://wa.link/u924ok" class="text-center bg-blue-400 text-blue-800 py-2 rounded-lg font-semibold mt-4 hover:bg-[#2ec4b6] focus:scale-95 transition-all duration-200 uppercase" data-astro-cid-i5mwzbw6>Comprar</a> </div> </div> `;
}, "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/Cards.astro", void 0);

const Slide1 = new Proxy({"src":"/_astro/slide1.BImJ7lSV.jpg","width":3500,"height":2333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/assets/slide1.jpg";
							}
							
							return target[name];
						}
					});

const Slide2 = new Proxy({"src":"/_astro/slide2.r82mDlbx.jpg","width":4592,"height":3448,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/assets/slide2.jpg";
							}
							
							return target[name];
						}
					});

const Slide3 = new Proxy({"src":"/_astro/slide3.D1ke07tj.jpg","width":4592,"height":3448,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/assets/slide3.jpg";
							}
							
							return target[name];
						}
					});

const Slide4 = new Proxy({"src":"/_astro/slide4.DubVr-IY.jpg","width":4592,"height":3064,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/assets/slide4.jpg";
							}
							
							return target[name];
						}
					});

const Slide5 = new Proxy({"src":"/_astro/slide5.B3zZHCPo.jpg","width":6221,"height":4147,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/assets/slide5.jpg";
							}
							
							return target[name];
						}
					});

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex-row relative w-full min-h-full bg-transparent p-10" data-astro-transition-persist="products"${addAttribute(renderTransition($$result, "hbjsdh6e", "initial", "products"), "data-astro-transition-scope")}> <div class="mb-10 text-4xl md:text-7xl p-8"> <h1 class="capitalize">Nuestros Productos Destacados</h1> </div> <div class="mb-10 p-8 text-sm md:text-2xl text-start"> <h3 class="">Felicita a Mamá, con un grandioso regalo!!</h3> </div> <div class="flex items-center justify-center min-h-screen container rounded-2xl shadow-black/10"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> ${renderComponent($$result, "Cards", $$Cards, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(Slide1.src, "src")} alt="" class="">  `, "title": ($$result2) => renderTemplate`<h3 class="text-2xl md:text-4xl font-medium mt-3">
Product 1
</h3>` })} ${renderComponent($$result, "Cards", $$Cards, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(Slide2.src, "src")} alt="" class="">  `, "title": ($$result2) => renderTemplate`<h3 class="text-2xl md:text-4xl font-medium mt-3">
Product 2
</h3>` })} ${renderComponent($$result, "Cards", $$Cards, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(Slide3.src, "src")} alt="" class="">  `, "title": ($$result2) => renderTemplate`<h3 class="text-2xl md:text-4xl font-medium mt-3">
Product 3
</h3>` })} ${renderComponent($$result, "Cards", $$Cards, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(Slide4.src, "src")} alt="" class="">  `, "title": ($$result2) => renderTemplate`<h3 class="text-2xl md:text-4xl font-medium mt-3">
Product 4
</h3>` })} ${renderComponent($$result, "Cards", $$Cards, {}, { "default": ($$result2) => renderTemplate` <img${addAttribute(Slide5.src, "src")} alt="" class="">  `, "title": ($$result2) => renderTemplate`<h3 class="text-2xl md:text-4xl font-medium mt-3">
Product 5
</h3>` })} </div> </div> <div> <a href="/" class="relative inset-0 m-auto w-full h-full flex justify-center"> <svg width="50" height="50" viewBox="0 0 512 512"><path fill="none" stroke="#2ec4b6" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M249.38 336L170 256l79.38-80M181.03 256H342"></path><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="#2ec4b6" stroke-miterlimit="10" stroke-width="32"></path></svg></a> </div> </div>`;
}, "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/products.astro", "self");

const $$file = "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/products.astro";
const $$url = "/products";

export { $$Products as default, $$file as file, $$url as url };
