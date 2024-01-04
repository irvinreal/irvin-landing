/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderSlot, f as renderHead } from '../astro.2c04946c.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                           */
const $$Astro$9 = createAstro("https://irvinreal.github.io");
const $$DarkModeToggler = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$DarkModeToggler;
  return renderTemplate`${maybeRenderHead()}<div class="absolute top-5 md:top-4 left-10 md:left-[unset] md:right-12 z-50 darkModeToggler astro-HIOZUQCQ">
  <input type="checkbox" id="check" class="toggle astro-HIOZUQCQ">
  <label for="check" class="flex flex-col items-center md:flex-row gap-2 text-xs md:text-sm astro-HIOZUQCQ"> Dark mode</label>
</div>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/DarkModeToggler.astro", void 0);

const $$Astro$8 = createAstro("https://irvinreal.github.io");
const $$CloseNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CloseNav;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
</svg>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/icons/CloseNav.astro", void 0);

const $$Astro$7 = createAstro("https://irvinreal.github.io");
const $$IconNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$IconNav;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
</svg>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/icons/IconNav.astro", void 0);

const $$Astro$6 = createAstro("https://irvinreal.github.io");
const $$LandingHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LandingHeader;
  const { pathname } = Astro2.url;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="header-container" class="sticky z-[1000] top-0 left-0 right-0 min-w-full h-20 md:h-14 text-center flex flex-col justify-center items-center gap-6 bg-white dark:bg-gray-800">
  <div id="bg-white-navbar" class="absolute -top-[100vh] left-0 z-40 w-full  bg-white dark:bg-gray-950 dark:text-gray-100 transition-all ease-out duration-500">
    <div class="absolute bottom-10 left-0 right-0 flex justify-center w-full h-5">
      <button id="btnCloseNav" class="drop-shadow-[0_4px_9px_rgba(255,255,255)]">
        ${renderComponent($$result, "CloseNav", $$CloseNav, {})}
      </button>
    </div>
  </div>
  <div class="bg-transparent group flex justify-end md:justify-start items-center absolute top-0 left-0 w-full h-14 group transition-all ease-in-out duration-200 dark:md:shadow-md dark:md:shadow-white/5 md:hover:bg-zinc-800 md:hover:dark:bg-transparent md:hover:shadow-md md:hover:shadow-zinc-800 dark:md:hover:shadow-white/10 px-4">
    <div class="absolute top-3 right-3 z-50 md:sticky flex justify-center items-center w-fit md:hidden">
      <button id="btnMenu" class="text-gray-700 border border-gray-700 dark:text-gray-200 dark:border-gray-200 shadow-sm shadow-gray-800/30 dark:shadow-md dark:shadow-gray-950 rounded-md px-1 py-1 transition-all ease-out duration-200">
          ${renderComponent($$result, "IconNav", $$IconNav, {})}
      </button>
    </div>
    <nav id="navbar" class="opacity-0 md:opacity-100 absolute top-0 left-0 z-40 bg-white text-zinc-600 dark:bg-gray-950 dark:md:bg-gray-800 h-full py-10 md:py-0 md:h-fit md:bg-transparent dark:md:text-gray-100 w-full md:inline md:px-4 transition-all ease-out duration-700 md:group-hover:text-gray-200">
      <ul id="ulNavbar" class="hidden md:flex flex-col bg-white  dark:bg-gray-950 dark:text-gray-300/80 md:bg-transparent dark:md:bg-gray-800 gap-10 md:pt-3 md:h-fit w-full md:px-10 md:flex-row md:gap-20">
        <a href="/irvin-landing/" class="w-8 h-8 bg-white p-1 rounded-full ms-8 transition-all ease-in-out duration-200 md:group-hover:invert">
          ${pathname.endsWith("/irvin-landing/") || pathname.endsWith("/about") ? renderTemplate`<img src="irvin.svg" alt="logotipo de irvin" width="30" height="auto">` : null}
          ${pathname.endsWith("/my-projects/landing-pages") || pathname.endsWith("/my-projects/games") || pathname.endsWith("/my-projects/react") ? renderTemplate`<img src="../irvin.svg" alt="logotipo de irvin" width="30" height="auto">` : null}
        </a>
        <li${addAttribute(`relative h-full cursor-pointer transition-all ease-out duration-150 md:hover:text-gray-100 group/item ${pathname === "/irvin-landing/" ? "dark:text-gray-100" : ""}`, "class")}>
          <a href="/irvin-landing/">Hi!</a>
          <div${addAttribute(`absolute -z-10 -bottom-4 left-0 bg-transparent w-full h-12 transition-colors ease-out duration-200 md:group-hover/item:border-b-2 ${pathname === "/irvin-landing/" ? "border-b-2 border-gray-400 dark:border-gray-100" : ""}`, "class")}>
          </div>
        </li>
        <li${addAttribute(`relative h-full cursor-pointer transition-all ease-out duration-150 md:hover:text-gray-100 group/item ${pathname.endsWith("/landing-pages") || pathname.endsWith("/react") || pathname.endsWith("/games") ? "dark:text-gray-100" : ""}`, "class")}>
          <a href="/irvin-landing/my-projects/landing-pages" class="a-menu">My Projects</a>
          <div${addAttribute(`absolute -z-10 -bottom-4 left-0 bg-transparent w-full h-12 transition-colors ease-out duration-200 md:group-hover/item:border-b-2 ${pathname.endsWith("/landing-pages") || pathname.endsWith("/full-stack") || pathname.endsWith("/games") ? "border-b-2 border-gray-400 dark:border-gray-100" : ""}`, "class")}>
          </div>
        </li>
        <li${addAttribute(`relative h-full cursor-pointer transition-all ease-out duration-150 md:hover:text-gray-100 group/item ${pathname === "/irvin-landing/about" ? "dark:text-gray-100" : ""}`, "class")}>
          <a href="/irvin-landing/about">About me</a>
          <div${addAttribute(`absolute -z-10 -bottom-4 left-0 bg-transparent w-full h-12 transition-colors ease-out duration-200 md:group-hover/item:border-b-2 ${pathname === "/irvin-landing/about" ? "border-b-2 border-gray-400 dark:border-gray-100" : ""}`, "class")}>
          </div>
        </li>
      </ul>
    </nav>
    <span>
      ${renderComponent($$result, "DarkModeToggler", $$DarkModeToggler, {})}
    </span>
  </div>
</header>

<!-- script for: navbar < btnMenu > -->`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/LandingHeader.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro("https://irvinreal.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="description" content="Astro description">\n    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">\n    <link rel="shortcut icon" type="image/x-icon" href="favicon.svg">\n    <link rel="shortcut icon" type="image/x-icon" href="../../favicon.svg">\n    <meta name="generator"', '>\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;400;500;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;1,6..12,200&display=swap" rel="stylesheet">\n    <title>', "</title>\n  ", '</head>\n  <body class="bg-white dark:bg-slate-800 relative">\n    ', "\n    ", "\n  <script>\nconst theme = (() => {\n  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n    return localStorage.getItem('theme')\n  }\n  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n    return 'dark'\n  }\n  return 'light'\n})()\n\nif (theme === 'light') {\n  document.documentElement.classList.remove('dark')\n} else {\n  document.documentElement.classList.add('dark')\n}\nwindow.localStorage.setItem('theme', theme)\n<\/script>\n\n\n<!-- <style>\n  body::-webkit-scrollbar {\n    width: 10px;\n    background: #00000033;\n  }\n\n  body::-webkit-scrollbar-thumb {\n  background: #ffffff5d;\n  border-radius: 4px;\n}\n</style> --></body></html><!-- <script>\n  console.log(window.scrollbars.visible)\n<\/script> -->"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "LandingHeader", $$LandingHeader, {}), renderSlot($$result, $$slots["default"]));
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro("https://irvinreal.github.io");
const $$HtmlSkill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HtmlSkill;
  const { imgId, img, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(imgId, "id")}${addAttribute(`h-6 w-auto mx-auto rounded-sm`, "class")}${addAttribute(img, "src")}${addAttribute(alt, "alt")} width="40" height="auto">`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/HtmlSkill.astro", void 0);

const $$Astro$3 = createAstro("https://irvinreal.github.io");
const $$Component = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Component;
  return renderTemplate`${maybeRenderHead()}<img alt="astro logo" src="/imgs/astro-logo-light-gradient.svg" width="60px">`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/icons/Astro.astro", void 0);

const $$Astro$2 = createAstro("https://irvinreal.github.io");
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Email;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
</svg>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/icons/Email.astro", void 0);

const $$Astro$1 = createAstro("https://irvinreal.github.io");
const $$Github = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
</svg>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/icons/Github.astro", void 0);

// Todo: reducir peso de imagenes https://compressjpeg.com/es/


const SKILLS = [
  {
    imgId: 'html',
    title: 'HTML 5',
    spanId: 'htmlSpan',
    img: 'imgs/skillsImgs/html.png',
    alt: 'HTML Logo'
  },
  {
    imgId: 'css',
    title: 'CSS 3',
    spanId: 'cssSpan',
    img: 'imgs/skillsImgs/css.png',
    alt: 'CSS Logo'
  },
  {
    imgId: 'javascript',
    title: 'JavaScript',
    spanId: 'javascriptSpan',
    img: 'imgs/skillsImgs/javascript.png',
    alt: 'JavaScript Logo'
  },
  {
    imgId: 'tailwindcss',
    title: 'Tailwind CSS',
    spanId: 'tailwindcssSpan',
    img: 'imgs/skillsImgs/tailwindcss.png',
    alt: 'Tailwind CSS Logo'
  },
  {
    imgId: 'bootstrap',
    title: 'Bootstrap',
    spanId: 'bootstrapSpan',
    img: 'imgs/skillsImgs/bootstrap.png',
    alt: 'Bootstrap Logo'
  },
  {
    imgId: 'reactjs',
    title: 'React js',
    spanId: 'reactjsSpan',
    img: 'imgs/skillsImgs/reactjs.png',
    alt: 'Reactjs Logo'
  },
  {
    imgId: 'nextjs',
    title: 'Next js',
    spanId: 'nextjsSpan',
    img: 'imgs/skillsImgs/nextjs.png',
    alt: 'Nextjs Logo'
  },
  {
    imgId: 'git',
    title: 'Git',
    spanId: 'gitSpan',
    img: 'imgs/skillsImgs/git.png',
    alt: 'Git Logo'
  },
  {
    imgId: 'github',
    title: 'Github',
    spanId: 'githubSpan',
    img: 'imgs/skillsImgs/github.png',
    alt: 'Github Logo'
  },
  {
    imgId: 'msql',
    title: 'mySql',
    spanId: 'mysqlSpan',
    img: 'imgs/skillsImgs/mysql.png',
    alt: 'MongoDB Logo'
  },
  {
    imgId: 'mongodb',
    title: 'MongoDB',
    spanId: 'mongodbSpan',
    img: 'imgs/skillsImgs/mongodb.webp',
    alt: 'MongoDB Logo'
  },
  {
    imgId: 'nodejs',
    title: 'nodejs',
    spanId: 'nodejsSpan',
    img: 'imgs/skillsImgs/nodejs.png',
    alt: 'Node js Logo'
  },
  {
    imgId: 'expressjs',
    title: 'expressjs',
    spanId: 'expressjsSpan',
    img: 'imgs/skillsImgs/expressjs.png',
    alt: 'Express js Logo'
  },
  {
    imgId: 'astrojs',
    title: 'astrojs',
    spanId: 'Astro js',
    img: 'imgs/skillsImgs/astro.png',
    alt: 'Astro js Logo'
  },
  {
    imgId: 'mongoose',
    title: 'mongoose',
    spanId: 'Mongoose',
    img: 'imgs/skillsImgs/mongoose.png',
    alt: 'Mongoose logo'
  }
];

const $$Astro = createAstro("https://irvinreal.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About me", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="relative w-full astro-KH7BTL4R">

    <!-- Saludo inicial -->
      <h1 class="text-center md:text-start md:ps-24 mt-5 py-4 tracking-wider dark:text text-xl dark:text-gray-400 font-semibold astro-KH7BTL4R">Irvin Real</h1>
      <h2 class="px-6 md:ps-24 dark:text-gray-400 font-medium astro-KH7BTL4R">Hola 👋, Gracias por entrar a ver mi portafolio.</h2>

    <div class="flex flex-col md:gap-10 md:mx-20 py-10 astro-KH7BTL4R">
      <article class="mx-8 py-4 flex-1 astro-KH7BTL4R">

        <h3 class="dark:text-gray-400 tracking-wide font-semibold py-1 text-justify astro-KH7BTL4R">El proposito de este sitio es tener un portfolio donde pueda mostrar mi conocimiento y experiencia en el mundo del desarrollo web por lo tanto me gustaría presentarme..</h3>
        <!-- <p class="dark:text-gray-400 font-thin text-justify mt-2">Hablaré un poco de mi vida porque creo que cada suceso me ha hido formando.
        </p> -->

        <!-- borrador 1 -->
        <!-- <p class="dark:text-gray-400 font-thin text-justify">Escribo esto a la edad de 26 años y aunque me gustaría decir que tengo muchos años de experiencia en el mundo del desarrollo web o de software en general la realidad es que solo tengo 2 años aprendiendo y desarrollando diferentes proyectos en las diferentes tecnologías que ya dije que tengo <a href="/irvin-landing/#contactme" target="_blank" class="bg-gray-600 rounded-sm px-1 underline duration-100 relative z-50 hover:bg-gray-500 hover:text-gray-200">experiencia</a> y</p> -->

        <!-- borrador 2 -->
        <p class="dark:text-gray-400 font-thin text-justify astro-KH7BTL4R">Me gustaría decir que tengo varios años de experiencia trabajando en el mundo del desarrollo de software aunque la realidad es que sólo tengo 2 años aprendiendo y desarrollando diferentes proyectos <a id="a-about-experiencia" href="/irvin-landing/#contactme" target="_blank" class="bg-gray-500/70 rounded-sm px-1 underline text-gray-200 border border-gray-200 duration-100 relative z-50 hover:bg-gray-950 hover:text-gray-400 hover:border-gray-600 astro-KH7BTL4R">en las técnologias listadas dentro de mis skills.</a></p>

        <p class="astro-KH7BTL4R"></p>

      </article>

      <article class="text-center astro-KH7BTL4R">
        <h3 class="font-medium text-teal-950 dark:text-gray-100 inline-block tracking-widest astro-KH7BTL4R">
          My Skills
        </h3>
        <div class="relative md:px-10 my-5 w-full gap-y-3 flex justify-center items-center flex-wrap py-2 astro-KH7BTL4R">
          ${SKILLS.map(({ img, alt, imgId = "" }) => renderTemplate`<article class="min-w-fit relative group art-skill-An astro-KH7BTL4R">
                <div class="md:w-fit mx-3 dark:drop-shadow-[0_8px_6px_rgba(0,0,0,0.5)] drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)] astro-KH7BTL4R">
                  ${renderTemplate`${renderComponent($$result2, "HtmlSkill", $$HtmlSkill, { "img": img, "alt": alt, "imgId": imgId, "class": "astro-KH7BTL4R" })}`}
                </div>
              </article>`)}
        </div>

      </article>

      <!-- Habilidades blandas -->
      <article class="mx-8 py-4 astro-KH7BTL4R">
        <h3 class="dark:text-gray-100 tracking-wide font-semibold py-1 astro-KH7BTL4R">Soft Skills</h3>
        <ul class="[&>li]:dark:text-gray-400 [&>li]:font-thin px-6 list-disc astro-KH7BTL4R">
          <li class="astro-KH7BTL4R">Capacidad de hablar en público</li>
          <li class="astro-KH7BTL4R">Interacción con clientes</li>
          <li class="astro-KH7BTL4R">Trabajo en equipo</li>
          <li class="astro-KH7BTL4R">Alta Capacidad de apatación al cambio</li>
          <li class="astro-KH7BTL4R">Aprendizaje autónomo</li>
          <li class="astro-KH7BTL4R">Integridad y valores</li>
          <li class="astro-KH7BTL4R">Habilidades interpersonales como:
            <ul class="list-disc ms-3 dark:text-gray-400 astro-KH7BTL4R">
              <li class="astro-KH7BTL4R">Paciencia</li>
              <li class="astro-KH7BTL4R">Empatía</li>
              <li class="astro-KH7BTL4R">Buena actitud</li>
              <li class="astro-KH7BTL4R">Buen sentido del humor</li>
            </ul>
          </li>
          <li class="astro-KH7BTL4R">Inteligencia emocional</li>
          <li class="astro-KH7BTL4R">Responsabilidad</li>
          <li class="astro-KH7BTL4R">Disciplina</li>
          <li class="astro-KH7BTL4R">Capacidad de Negociar, ceder o acordar</li>
          <li class="astro-KH7BTL4R">Proactividad</li>
          <li class="astro-KH7BTL4R">Capacidad para enseñar</li>
          <li class="astro-KH7BTL4R">Creatividad</li>
        </ul>
      </article>
    </div>
    <footer class=" w-full flex justify-center items-center gap-14 py-2 px-12 bg-black/20 astro-KH7BTL4R">
      <a href="mailto:irvin.glez.real@hotmail.com" target="_blank" class="w-fit dark:text-gray-200 text-sm font-extralight tracking-widest flex justify-center items-center gap-2 cursor-pointer astro-KH7BTL4R">
        <span class="astro-KH7BTL4R">${renderComponent($$result2, "Email", $$Email, { "class": "astro-KH7BTL4R" })}</span>
        <span class="astro-KH7BTL4R">Mail</span>
      </a>
      <a href="https://github.com/irvinreal" target="_blank" class="w-fit dark:text-gray-200 text-sm font-extralight tracking-widest flex justify-center items-center gap-2 cursor-pointer astro-KH7BTL4R">
        <span class="astro-KH7BTL4R">${renderComponent($$result2, "Github", $$Github, { "class": "astro-KH7BTL4R" })}</span>
        <span class="astro-KH7BTL4R">irvinreal</span>
      </a>
      <a href="https://astro.build/" target="_blank" class="w-fit dark:text-gray-200 text-sm font-extralight tracking-widest flex justify-center items-center gap-1 cursor-pointer astro-KH7BTL4R">
        <span class="astro-KH7BTL4R">Created with</span>
        <span class="pt-1 astro-KH7BTL4R">${renderComponent($$result2, "AstroSVG", $$Component, { "class": "astro-KH7BTL4R" })}</span>
      </a>
    </footer>
  </main>
` })}`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/about.astro", void 0);

const $$file = "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/about.astro";
const $$url = "/irvin-landing/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HtmlSkill as $, SKILLS as S, $$Email as a, $$Github as b, $$Component as c, $$Layout as d, $$IconNav as e, about as f };
