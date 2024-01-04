/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../astro.2c04946c.mjs';
import 'html-escaper';
import { $ as $$Projects, P as PAGES, a as $$Article, b as $$ProjectSectionLayout } from './games.astro.24bc152c.mjs';
import './about.astro.738e6d6a.mjs';
/* empty css                           *//* empty css                           */
const $$Astro = createAstro("https://irvinreal.github.io");
const $$LandingPages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LandingPages;
  return renderTemplate`${renderComponent($$result, "ProjectSectionLayout", $$ProjectSectionLayout, { "title": "Irvin Real | About me" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Projects", $$Projects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/layouts/Projects.astro", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`${PAGES.landingPages.map((page) => {
    return renderTemplate`${renderComponent($$result3, "Article", $$Article, { "id": page.id, "url": page.url, "title": page.title })}`;
  })}` })}
` })}`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/my-projects/landing-pages.astro", void 0);

const $$file = "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/my-projects/landing-pages.astro";
const $$url = "/irvin-landing/my-projects/landing-pages";

export { $$LandingPages as default, $$file as file, $$url as url };
