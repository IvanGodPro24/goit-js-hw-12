import{a as h,S as v,i as p}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(i,t){return h.defaults.baseURL="https://pixabay.com/api",(await h.get("/",{params:{key:"43411884-3619a4282f4626ec6920d1cff",q:encodeURIComponent(i),image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}function y(i){return i.hits.map(({largeImageURL:t,webformatURL:s,tags:r,likes:e,views:o,comments:l,downloads:L})=>`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${s}"
      data-source="${t}"
      alt="${r}"
      title="${r}"
    />
  </a>
        <div class="image-info">
        <div class="info-container">
          <p class="info-paragraph">Likes</p>
          <p class="info-value">${e}</p>
        </div>
        <div class="info-container">
          <p class="info-paragraph">Views</p>
          <p class="info-value">${o}</p>
        </div>
        <div class="info-container">
          <p class="info-paragraph">Comments</p>
          <p class="info-value">${l}</p>
        </div>
        <div class="info-container">
          <p class="info-paragraph">Downloads</p>
          <p class="info-value">${L}</p>
        </div>
      </div>
</li>`).join("")}const g="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_57)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.96912C7.03867%206.89927%207.12143%206.84386%207.21255%206.80605C7.30366%206.76824%207.40135%206.74878%207.5%206.74878C7.59865%206.74878%207.69633%206.76824%207.78745%206.80605C7.87857%206.84386%207.96133%206.89927%208.031%206.96912L12%2010.9396L15.969%206.96912C16.0387%206.89939%2016.1215%206.84407%2016.2126%206.80633C16.3037%206.7686%2016.4014%206.74917%2016.5%206.74917C16.5986%206.74917%2016.6963%206.7686%2016.7874%206.80633C16.8785%206.84407%2016.9613%206.89939%2017.031%206.96912C17.1007%207.03885%2017.156%207.12164%2017.1938%207.21274C17.2315%207.30385%2017.2509%207.4015%2017.2509%207.50012C17.2509%207.59874%2017.2315%207.69639%2017.1938%207.7875C17.156%207.8786%2017.1007%207.96139%2017.031%208.03112L13.0605%2012.0001L17.031%2015.9691C17.1007%2016.0389%2017.156%2016.1216%2017.1938%2016.2127C17.2315%2016.3039%2017.2509%2016.4015%2017.2509%2016.5001C17.2509%2016.5987%2017.2315%2016.6964%2017.1938%2016.7875C17.156%2016.8786%2017.1007%2016.9614%2017.031%2017.0311C16.9613%2017.1009%2016.8785%2017.1562%2016.7874%2017.1939C16.6963%2017.2316%2016.5986%2017.2511%2016.5%2017.2511C16.4014%2017.2511%2016.3037%2017.2316%2016.2126%2017.1939C16.1215%2017.1562%2016.0387%2017.1009%2015.969%2017.0311L12%2013.0606L8.031%2017.0311C7.96127%2017.1009%207.87848%2017.1562%207.78737%2017.1939C7.69626%2017.2316%207.59861%2017.2511%207.5%2017.2511C7.40138%2017.2511%207.30373%2017.2316%207.21262%2017.1939C7.12151%2017.1562%207.03873%2017.1009%206.969%2017.0311C6.89927%2016.9614%206.84395%2016.8786%206.80621%2016.7875C6.76847%2016.6964%206.74905%2016.5987%206.74905%2016.5001C6.74905%2016.4015%206.76847%2016.3039%206.80621%2016.2127C6.84395%2016.1216%206.89927%2016.0389%206.969%2015.9691L10.9395%2012.0001L6.969%208.03112C6.89915%207.96145%206.84374%207.87869%206.80593%207.78757C6.76812%207.69645%206.74866%207.59877%206.74866%207.50012C6.74866%207.40147%206.76812%207.30379%206.80593%207.21267C6.84374%207.12155%206.89915%207.03879%206.969%206.96912Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_57'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",b="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_101)'%3e%3cpath%20d='M12%2024.0001C12.7956%2024.0001%2013.5587%2023.684%2014.1213%2023.1214C14.6839%2022.5588%2015%2021.7957%2015%2021.0001H9C9%2021.7957%209.31607%2022.5588%209.87868%2023.1214C10.4413%2023.684%2011.2044%2024.0001%2012%2024.0001ZM12%202.87709L10.8045%203.11859C9.44844%203.39489%208.2295%204.13125%207.35398%205.20302C6.47846%206.2748%206.00015%207.61617%206%209.00009C6%209.94209%205.799%2012.2956%205.3115%2014.6131C5.0715%2015.7636%204.7475%2016.9621%204.317%2018.0001H19.683C19.2525%2016.9621%2018.93%2015.7651%2018.6885%2014.6131C18.201%2012.2956%2018%209.94209%2018%209.00009C17.9995%207.61643%2017.521%206.27541%2016.6455%205.20394C15.7701%204.13247%2014.5513%203.39634%2013.1955%203.12009L12%202.87709ZM21.33%2018.0001C21.6645%2018.6706%2022.0515%2019.2016%2022.5%2019.5001H1.5C1.9485%2019.2016%202.3355%2018.6706%202.67%2018.0001C4.02%2015.3001%204.5%2010.3201%204.5%209.00009C4.5%205.37009%207.08%202.34009%2010.5075%201.64859C10.4866%201.44002%2010.5096%201.22938%2010.5751%201.03025C10.6405%200.831122%2010.747%200.647926%2010.8876%200.492479C11.0283%200.337031%2011.1999%200.212784%2011.3915%200.127749C11.5831%200.0427135%2011.7904%20-0.0012207%2012%20-0.0012207C12.2096%20-0.0012207%2012.4169%200.0427135%2012.6085%200.127749C12.8001%200.212784%2012.9717%200.337031%2013.1124%200.492479C13.253%200.647926%2013.3595%200.831122%2013.4249%201.03025C13.4904%201.22938%2013.5134%201.44002%2013.4925%201.64859C15.1879%201.99344%2016.7121%202.91363%2017.8069%204.25334C18.9016%205.59305%2019.4998%207.26995%2019.5%209.00009C19.5%2010.3201%2019.98%2015.3001%2021.33%2018.0001Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_101'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",w=document.querySelector(".form"),f=document.querySelector(".loader-container"),C=document.querySelector(".loader-under-container"),u=document.querySelector(".gallery"),d=document.querySelector(".load-more-btn");let n=1,a,c=new v(".gallery .gallery-item a");w.addEventListener("submit",O);d.addEventListener("click",I);async function O(i){if(i.preventDefault(),n=1,a=i.target.elements.search.value.trim(),a===""){p.error({position:"topRight",iconUrl:g,backgroundColor:"#ef4040",transitionIn:"flipInX",transitionOut:"flipOutX",title:"Error",titleColor:"#fff",titleSize:"16",message:"The field must not be empty",messageColor:"#fff",close:!1,buttons:[['<button class="close-bnt"> <svg class="close-icon" width="16" height="16"><path d="M8 8l-4-4m4 4l4-4m-4 4l4 4m-4-4l-4 4" /></svg>  </button>',function(t,s){t.hide({transitionOut:"fadeOutUp"},s)}]]});return}f.classList.remove("hidden");try{const t=await m(a,n);if(u.innerHTML="",i.target.reset(),t.total===0){p.error({position:"topRight",iconUrl:g,backgroundColor:"#ef4040",transitionIn:"flipInX",transitionOut:"flipOutX",title:"Error",titleColor:"#fff",titleSize:"16",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fff",close:!1,buttons:[['<button class="close-bnt"> <svg class="close-icon" width="16" height="16"><path d="M8 8l-4-4m4 4l4-4m-4 4l4 4m-4-4l-4 4" /></svg>  </button>',function(s,r){s.hide({transitionOut:"fadeOutUp"},r)}]]}),f.classList.add("hidden"),d.classList.add("hidden");return}u.insertAdjacentHTML("beforeend",y(t)),c.refresh("show.simplelightbox"),c.on("show.simplelightbox"),c.on("error.simplelightbox",function(s){console.log(s)}),n+=1,f.classList.add("hidden"),d.classList.remove("hidden")}catch(t){console.error(t)}}async function I(){C.classList.remove("hidden");try{const i=await m(a,n);u.insertAdjacentHTML("beforeend",y(i)),c.refresh("show.simplelightbox"),n+=1;const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"});const r=Math.ceil(i.totalHits/15);n>r&&(d.classList.add("hidden"),p.info({position:"topRight",iconUrl:b,backgroundColor:"#09f",transitionIn:"flipInX",transitionOut:"flipOutX",title:"Info",titleColor:"#fff",titleSize:"16",message:"We're sorry, but you've reached the end of search results.",messageColor:"#fff",close:!1,buttons:[['<button class="close-bnt"> <svg class="close-icon" width="16" height="16"><path d="M8 8l-4-4m4 4l4-4m-4 4l4 4m-4-4l-4 4" /></svg>  </button>',function(e,o){e.hide({transitionOut:"fadeOutUp"},o)}]]})),C.classList.add("hidden")}catch(i){console.error(i)}}
//# sourceMappingURL=index.js.map