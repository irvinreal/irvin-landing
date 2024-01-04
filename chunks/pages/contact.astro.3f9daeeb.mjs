/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../astro.2c04946c.mjs';
import 'html-escaper';
import { S as SKILLS, $ as $$HtmlSkill, a as $$Email, b as $$Github, c as $$Component, d as $$Layout } from './about.astro.738e6d6a.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$1 = createAstro("https://irvinreal.github.io");
const $$WhatsApp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhatsApp;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
</svg>`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/components/icons/WhatsApp.astro", void 0);

const $$Astro = createAstro("https://irvinreal.github.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact me" }, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<section data-ComeUpBtn-color="rgb(17 24 39)" data-ComeUpBtn-background-color="rgb(229 231 235)" data-ComeUpBtn-display="block" data-ComeDownBtn-display="none" class="landing-section w-full h-screen text-white flex flex-col justify-center items-center gap-10 relative">
<!-- Skills -->
<section id="container-skills" class="h-full w-full text-center flex flex-col justify-center items-center">
<h3 class="font-medium text-teal-950 dark:text-gray-100 inline-block tracking-widest">
  My Skills
</h3>
<div class="relative md:px-10 my-5 w-full gap-y-3 flex justify-center items-center flex-wrap py-2">
  ${SKILLS.map(({ title, img, alt, imgId = "", spanId }) => renderTemplate`<article class="min-w-fit relative group art-skill-An">
        <div class="md:w-fit mx-3 dark:drop-shadow-[0_8px_6px_rgba(0,0,0,0.5)] drop-shadow-[0_4px_3px_rgba(0,0,0,0.4)]">
          ${renderTemplate`${renderComponent($$result2, "HtmlSkill", $$HtmlSkill, { "img": img, "alt": alt, "imgId": imgId })}`}
        </div>
      </article>`)}
</div>
</section>

<!-- Contacto -->
<section id="#contact" class="h-full w-full px-8 pt-10 relative">
<h3 class="h-full font-medium ps-2 text-teal-950 dark:text-gray-100 tracking-widest">
  Contact
</h3>
<div class="absolute top-20 flex flex-col gap-3 [&>a]:flex [&>a]:items-center [&>a]:gap-2 [&>a]:text-sm [&>a]:text-teal-950 [&>a]:font-thin">
  <!-- hover: mostrar la dirección de correo o el número de whatsApp mediante animación -->
  <div class="relative">
    <div class="relative z-10 w-40 h-6 hover:w-80 group/email flex items-center">
      <a href="mailto:irvin.glez.real@hotmail.com" target="_blank" class="flex w-40 items-center gap-2 absolute z-40 bg-neutral-800 dark:bg-gray-950 text-white px-4 py-1 rounded-sm transition-colors ease-out duration-200 md:cursor-pointer md:hover:bg-neutral-700 dark:md:hover:bg-gray-900"><span class="text-white">${renderTemplate`${renderComponent($$result2, "Email", $$Email, {})}`}</span><span class="text-white text-xs">E-mail</span></a>

      <div class="a-reference flex justify-center items-center bg-white absolute -z-10 top-0 left-0 w-40 h-7 rounded transition-all duration-500 ease-in-out group-hover/email:translate-x-full group-hover/email:ms-3 hover:cursor-pointer">
        <div class="relative w-full h-full flex justify-center items-center group/item">
          <p class="text-xs h-full w-full flex justify-center items-center email-text-to-copy">
            irvin.glez.real@hotmail.com
          </p>
          <p class="copyMessage_reference bg-white/30 opacity-0 hidden w-fit h-7 border rounded absolute left-full ms-1 top-0 px-2 text-xs transition-all duration-500 ease-in-out group-hover/item:flex group-hover/item:items-center group-hover/item:opacity-100 text-white">
            copiar!
          </p>
        </div>
      </div>
      <div class="absolute z-30 top-0 left-0 w-40 h-7 bg-white rounded">
      </div>
    </div>
  </div>
  <div class="relative z-10 w-40 h-6 hover:w-80 group flex items-center">
    <a href="https://wa.me/3333533176?text=Hola+Irvin!" target="_blank" class="flex w-40 items-center gap-2 absolute z-50 bg-neutral-800 dark:bg-gray-950 text-white px-4 py-1 rounded-sm transition-all ease-out duration-500 md:cursor-pointer md:hover:bg-neutral-700 dark:md:hover:bg-gray-900"><span class="text-white">${renderTemplate`${renderComponent($$result2, "WhatsApp", $$WhatsApp, {})}`}</span><span class="text-white text-xs">whatsApp</span></a>

    <div class="a_box-reference flex md:hidden w-40 items-center gap-2 absolute z-40 bg-neutral-800 dark:bg-gray-950 text-white px-4 py-1 rounded-sm transition-all ease-out duration-500 md:cursor-pointer md:hover:bg-neutral-700 dark:md:hover:bg-gray-900">
      <span class="text-white">${renderTemplate`${renderComponent($$result2, "WhatsApp", $$WhatsApp, {})}`}</span><span class="text-white text-xs">whatsApp</span>
    </div>

    <div class="a-reference flex justify-center items-center bg-white absolute z-10 top-0 left-0 w-40 h-7 rounded transition-all duration-500 ease-in-out group-hover:translate-x-full md:group-hover:ms-3 hover:cursor-pointer group-focus:z-50">
      <div class="relative w-full h-full flex justify-center items-center group/item">
        <p class="text-xs h-full w-full flex justify-center items-center wapp-text-to-copy">
          (+52) 33 33 53 31 76
        </p>
        <p class="copyMessage_reference bg-white/30 opacity-0 hidden w-fit h-7 border rounded absolute left-full ms-1 top-0 px-2 text-xs transition-all duration-500 ease-in-out group-hover:flex group-hover:items-center group-hover/item:opacity-100 text-white">
          copiar!
        </p>
      </div>
    </div>
    <div class="absolute z-30 top-0 left-0 w-40 h-7 bg-white rounded"></div>
  </div>
</div>

<div class="absolute bottom-0 left-0 w-full flex justify-center items-center gap-14 py-2 px-12 bg-black/20">
  <a href="https://github.com/irvinreal" target="_blank" class="w-fit text-gray-200 text-sm font-extralight tracking-widest flex justify-center items-center gap-2 cursor-pointer">
    <span>${renderComponent($$result2, "Github", $$Github, {})}</span>
    <span>irvinreal</span>
  </a>
  <a href="https://astro.build/" target="_blank" class="w-fit text-gray-200 text-sm font-extralight tracking-widest flex justify-center items-center gap-1 cursor-pointer">
    <span>Created with</span>
    <span class="pt-1">${renderComponent($$result2, "AstroSVG", $$Component, {})}</span>
  </a>
</div>
</section>
</section>
` })}`;
}, "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/contact.astro", void 0);

const $$file = "D:/irvin/workspace/web/Front-end/vanilla/astro/irvin-landing/src/pages/contact.astro";
const $$url = "/irvin-landing/contact";

export { $$Contact as default, $$file as file, $$url as url };
