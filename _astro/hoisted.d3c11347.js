import"./hoisted.46fb0bad.js";const o=document.getElementById("btnMenu"),g=document.getElementById("navbar"),u=document.getElementById("bg-white-navbar"),n=document.getElementById("ulNavbar"),m=document.getElementById("btnCloseNav"),b=document.querySelector(".darkModeToggler"),v=t=>{g.classList.toggle("opacity-0"),u.classList.toggle("translate-y-full"),n.classList.toggle("hidden"),n.classList.toggle("flex"),o.classList.add("opacity-0"),o.classList.add("hidden"),b.classList.add("hidden")},y=t=>{g.classList.add("opacity-0"),u.classList.toggle("translate-y-full"),n.classList.toggle("hidden"),n.classList.toggle("flex"),o.classList.remove("opacity-0"),o.classList.remove("hidden"),b.classList.remove("hidden")};o.addEventListener("click",v);m.addEventListener("click",y);const d=document.querySelector("#ComeUpBtn"),p={root:null,rootMargin:"0px",threshold:.9},h=new IntersectionObserver(t=>{t.forEach(e=>{const{isIntersecting:c}=e;if(c){const l=e.target.getAttribute("data-ComeUpBtn-color"),r=e.target.getAttribute("data-ComeUpBtn-background-color"),a=e.target.getAttribute("data-ComeUpBtn-display");d.style.color=l,d.style.backgroundColor=r,d.style.display=a}})},p),C=document.querySelectorAll(".landing-section");C.forEach(t=>h.observe(t));const s=document.querySelector("#ComeDownBtn"),i=document.querySelector("#scroller");s.addEventListener("click",function(){i.scrollTop+=i.clientHeight});const B={root:null,rootMargin:"0px",threshold:.9},L=new IntersectionObserver(t=>{t.forEach(e=>{const{isIntersecting:c}=e;if(c){const l=e.target.getAttribute("data-ComeDownBtn-color"),r=e.target.getAttribute("data-ComeDownBtn-background-color"),a=e.target.getAttribute("data-ComeDownBtn-display");s.style.color=l,s.style.backgroundColor=r,s.style.display=a}})},B),k=document.querySelectorAll(".landing-section");k.forEach(t=>L.observe(t));