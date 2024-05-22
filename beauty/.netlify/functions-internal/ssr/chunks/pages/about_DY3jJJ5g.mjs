/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as createAstro, h as renderTransition, i as renderComponent } from '../astro_rDwG0oiB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                          */
/* empty css                          */

const $$Astro = createAstro();
const $$AboutButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="m-auto mb-5 text-sm rounded-3xl border-2 border-black p-3 md:p-5 font-bold uppercase w-full flex md:place-content-center justify-center"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a> <!--  -->`;
}, "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/AboutButton.astro", void 0);

const image = new Proxy({"src":"/_astro/about.Blqzw67c.jpg","width":4480,"height":6720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/assets/about.jpg";
							}
							
							return target[name];
						}
					});

const video = "/_astro/video-loop-3.C6_YvqbO.mp4";

const $$InteractiveBgAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full min-h-full relative top-0 overflow-hidden text-center justify-center items-center block" data-astro-cid-4f2eqvyx> <video data-astro-transition-persist="media-player-about"${addAttribute(video, "src")} autoplay loop data-astro-cid-4f2eqvyx${addAttribute(renderTransition($$result, "lhehrln5", "", "media-player-about"), "data-astro-transition-scope")}></video> <!-- slot de la imagen --> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/components/InteractiveBgAbout.astro", "self");

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative min-h-full" data-astro-transition-persist="about" data-astro-cid-kh7btl4r${addAttribute(renderTransition($$result, "s7izgn67", "initial", "about"), "data-astro-transition-scope")}> <div class="w-[50%]" data-astro-cid-kh7btl4r> <h3 class="text-2xl md:text-5xl font-bold font-serif text-teal-400 left-0 top-0 p-8 mb-5" data-astro-cid-kh7btl4r> <span class="text-2xl md:text-5xl font-thin font-serif text-teal-400" data-astro-cid-kh7btl4r>Nuestro</span> <a href="/" class="underline" data-astro-cid-kh7btl4r>Beauty!!</a> </h3> <h1 class="text-4xl md:text-5xl p-8 mb-5" data-astro-cid-kh7btl4r>Sin Cambios no hay vida</h1> <p class="p-5 mb-5 text-sm md:text-2xl" data-astro-cid-kh7btl4r>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            iusto nulla facere sit? Sint, quam.
</p> ${renderComponent($$result, "AboutButton", $$AboutButton, { "href": "https://www.instagram.com/carolare___/", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`
Aprende sobre Beauty!!
` })} </div> ${renderComponent($$result, "InteractiveBgAbout", $$InteractiveBgAbout, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` <div class="about" data-astro-cid-kh7btl4r> <img${addAttribute(image.src, "src")} ; alt="" class="rounded-2xl" data-astro-cid-kh7btl4r> </div> ` })} </div> `;
}, "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/about.astro", "self");

const $$file = "C:/Users/Carolina/Desktop/1Astro/Landing/beauty/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$InteractiveBgAbout as $, $$About as a, about as b };
