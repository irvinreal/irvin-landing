/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, e as renderSlot } from '../astro.2c04946c.mjs';
import 'html-escaper';
import { e as $$IconNav, d as $$Layout } from './about.astro.738e6d6a.mjs';

const PAGES = {
  landingPages: [
    {
      id: '#porsche',
      title: 'Porsche',
      url: 'https://porsche-landing-khaki.vercel.app/'
    },
    {
      id: '#tesla',
      title: 'Tesla',
      url: 'https://tesla-landing-theta.vercel.app/'
    },
    {
      id: '#pinterest',
      title: 'Pinteres',
      url: 'https://pinterest-clone-2022-my-version-2.vercel.app/'
    }
  ],
  games: [
    {
      id: '#snake-game',
      title: 'Snake Game',
      url: 'https://snake-game-js-virid-delta.vercel.app/'
    },
    {
      id: '#tic-tac-toe',
      title: 'Tic tac toe',
      url: 'https://react-tic-tac-toe-dusky.vercel.app/'
    }
  ],
  react: []
};

const $$Astro$5 = createAstro("https://irvinreal.github.io");
const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Article;
  const { id, url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(id, "id")} class="md:landing h-full bg-white landing-1 relative overflow-hidden transition-all duration-500 ease-in-out group border-b border-white">
<iframe${addAttribute(url, "src")} frameborder="" width="100%" height="100%">
</iframe>
<!-- class for div below: md:group-hover:-z-10 -->
<div class="frontLayout absolute top-0 left-0 z-40 w-full h-full bg-gray-800/30 dark:bg-gray-950/80 backdrop-blur-sm transition-all duration-500 ease-in-out flex flex-col justify-center items-center">
  <span class="text-white dark:text-white/70 text-6xl font-semibold tracking-wider">${title}</span>
  <span class="text-white dark:text-white/70 text-lg font-light tracking-widest">Landing</span>
</div>
<!-- class for anchor below: md:-z-10 -->
  <a class="absolute z-50 top-0 left-0 w-full h-full"${addAttribute(url, "href")} target="_blank">
    <div class="flex items-center gap-2 absolute z-[51] top-0 left-0 text-white pt-14 ps-4 font-thin duration-100 opacity-0 -translate-x-36 group-hover:translate-x-0 group-hover:opacity-100 group-hover:cursor-pointer">Go to <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
    </svg></div>
  </a>
  <!-- colocar descripción de las tecnologias y tecnicas usadas y codigo de github -->
  
</article>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/layouts/Article.astro", void 0);

const $$Astro$4 = createAstro("https://irvinreal.github.io");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const { titleBtn, stnVisible, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`sidebar-link-li w-full text-center ${stnVisible ? "block" : "hidden"}`, "class")}>
  <a${addAttribute(href, "href")}${addAttribute(`w-full block font-extralight tracking-wider text-start ps-6 duration-100 hover:bg-zinc-800/70 hover:dark:bg-gray-700/80 hover:text-white py-1 px-4 rounded-sm ${stnVisible ? "bg-zinc-800/90 text-white dark:bg-gray-950/40 md:dark:bg-gray-700/80 dark:text-white" : "bg-transparent text-zinc-400"}`, "class")}>${titleBtn}</a>
</li>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/SectionProjects/Link.astro", void 0);

const $$Astro$3 = createAstro("https://irvinreal.github.io");
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideBar;
  const { pathname } = Astro2.url;
  const path = "/irvin-landing/my-projects";
  const landingP = `${path}/landing-pages`;
  const games = `${path}/games`;
  const react = `${path}/react`;
  return renderTemplate`${maybeRenderHead()}<div id="aside-container" class="relative w-screen md:w-fit h-10 md:h-full">

  <aside class="dark:bg-gray-900 md:dark:bg-gray-950/40 py-1 md:pt-0 w-full md:w-1/4 md:h-full absolute md:z-[1000] md:sticky top-0 left-0 flex md:block">
    <ul class="flex-1 md:mt-32 ms-1 md:me-6 md:pb-10 dark:text-white text-center flex flex-col gap-3 md:border-l md:border-r border-gray-800">
          ${renderComponent($$result, "Link", $$Link, { "titleBtn": "Landing Pages", "stnVisible": pathname.endsWith("/landing-pages"), "href": landingP })}
          ${renderComponent($$result, "Link", $$Link, { "titleBtn": "Games", "stnVisible": pathname.endsWith("/games"), "href": games })}
          ${renderComponent($$result, "Link", $$Link, { "titleBtn": "React", "stnVisible": pathname.endsWith("/react"), "href": react })}
    </ul>
    <div class="md:hidden">
      <button id="aside-btn" class="text-white px-2 mx-2 py-1">${renderComponent($$result, "IconNav", $$IconNav, {})}</button>
    </div>
  </aside>
</div>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/SectionProjects/SideBar.astro", void 0);

const $$Astro$2 = createAstro("https://irvinreal.github.io");
const $$ProjectSectionLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectSectionLayout;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Irvin Real | My projects" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="relative flex flex-col md:flex-row h-full" id="container">
    ${renderComponent($$result2, "SideBar", $$SideBar, {})}
    ${renderSlot($$result2, $$slots["default"])}
  </div>
` })}`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/layouts/ProjectSectionLayout.astro", void 0);

const $$Astro$1 = createAstro("https://irvinreal.github.io");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`<!-- flex flex-col justify-center -->${maybeRenderHead()}<section class="w-full h-full md:min-h-screen flex flex-col justify-start relative overflow-y-scroll">   
    ${renderSlot($$result, $$slots["default"])}
</section>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/layouts/Projects.astro", void 0);

const $$Astro = createAstro("https://irvinreal.github.io");
const $$Games = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Games;
  return renderTemplate`${renderComponent($$result, "ProjectSectionLayout", $$ProjectSectionLayout, { "title": "Irvin Real | About me" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Projects", $$Projects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/layouts/Projects.astro", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate`${PAGES.games.map((page) => {
    return renderTemplate`${renderComponent($$result3, "Article", $$Article, { "url": page.url, "title": page.title })}`;
  })}` })}
` })}`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/my-projects/games.astro", void 0);

const $$file = "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/my-projects/games.astro";
const $$url = "/irvin-landing/my-projects/games";

const games = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Games,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Projects as $, PAGES as P, $$Article as a, $$ProjectSectionLayout as b, games as g };
