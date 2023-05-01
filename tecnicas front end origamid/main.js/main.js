(()=>{"use strict";function t(t){const e=function(t){const e=document.createElement("div");e.classList.add("tooltip");const n=t.getAttribute("aria-label");return e.innerText=n,document.body.appendChild(e),e}(this);function n(t){e.style.top=t.pageY+20+"px",e.style.left=t.pageX+20+"px"}this.addEventListener("mousemove",n),this.addEventListener("mouseleave",(function t(){e.remove(),this.removeEventListener("mouseleave",t),this.removeEventListener("mousemove",n)}))}document.querySelectorAll("[data-tooltip]").forEach((e=>{e.addEventListener("mouseover",t)})),function(){function t(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('[data-menu="suave"] a[href^="#"]').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll('[data-anime="scroll"]');if(t.length){const e=.6*window.innerHeight;function n(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}n(),window.addEventListener("scroll",n)}}(),function(){const t=document.querySelectorAll('[data-anime="accordion"] dt'),e="ativo";if(t.length){function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t[0].classList.add(e),t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)}))}}(),function(){const t=document.querySelectorAll('[data-tab="menu"] li'),e=document.querySelectorAll('[data-tab="content"] section');if(t.length&&e.length){function n(t){e.forEach((t=>{t.classList.remove("ativo")}));const n=e[t].dataset.anime;e[t].classList.add("ativo",n)}e[0].classList.add("ativo"),t.forEach(((t,e)=>{t.addEventListener("click",(()=>{n(e)}))}))}}(),function(){const t=document.querySelector('[data-modal="abrir"]'),e=document.querySelector('[data-modal="fechar"]'),n=document.querySelector('[data-modal="container"]');if(t&&e&&n){function o(t){t.preventDefault(),n.classList.toggle("ativo")}function a(t){t.target===this&&o(t)}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",a)}}(),function(){function t(t){t.preventDefault(),this.classList.add("active"),function(t,e,n){const o=document.documentElement,a="data-outside";function c(i){t.contains(i.target)||(n(),e.forEach((t=>{o.removeEventListener(t,c)})),t.removeAttribute(a))}t.hasAttribute(a,"")||(e.forEach((t=>{o.addEventListener(t,c)})),t.setAttribute(a,""))}(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown]").forEach((e=>{["touchstart","click"].forEach((n=>{e.addEventListener(n,t)}))}))}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),c=o.getHours(),i=-1!==e.indexOf(a),s=c>=n[0]&&c<n[1];i&&s&&t.classList.add("aberto")}(),async function(t){const e=await fetch("./animaisApi.json"),n=await e.json(),o=document.querySelector(".numeros-grid");n.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`\n            <h3>${t.Specie}</h3>\n            <span data-numero>${t.Total}</span>\n      \n      `,e}(t);o.appendChild(e)})),function(){const t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("ativo")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.floor(e/100);let o=0;const a=setInterval((()=>{o+=n,t.innerText=o,o>e&&(t.innerText=e,clearInterval(a))}),25*Math.random())})))}));e.observe(t,{attributes:!0})}()}()})();