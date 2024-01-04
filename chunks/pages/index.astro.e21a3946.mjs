/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../astro.2c04946c.mjs';
import 'html-escaper';
import { d as $$Layout } from './about.astro.738e6d6a.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$1 = createAstro("https://irvinreal.github.io");
const $$IrvinHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IrvinHeader;
  return renderTemplate`${maybeRenderHead()}<section class="landing-section relative min-w-full h-full text-center flex flex-col justify-center items-center gap-6">
  <div>
    <img class="w-fit h-auto" src="imgs/irvin-foto-transparente.png" alt="irvin png">
  </div>
  <h1 class="text-3xl font-medium text-gray-800 dark:text-blue-100 dark:animate-coloringDark dark:font-semibold">
    Hi!, I'm Irvin Real
  </h1>
  <h2 class="[&>span]:text-4xl md:[&>span]:text-[4rem] md:[&>span]:leading-none [&>span]:block lg:[&>span]:inline [&>span]:font-semibold animate-coloring dark:animate-coloringDark">
    <span class="md:me-5">Front End</span>
    <span>Web Developer</span>
  </h2>
</section>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/IrvinHeader.astro", void 0);

const $$Astro = createAstro("https://irvinreal.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Irvin Real | Front End Web Developer" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="w-full h-full flex flex-col pt-28">
      ${renderComponent($$result2, "IrvinHeader", $$IrvinHeader, {})}
      <!-- <IrvinFooter /> -->
  </main>
` })}`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/index.astro", void 0);

const $$file = "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/index.astro";
const $$url = "/irvin-landing";

export { $$Index as default, $$file as file, $$url as url };
