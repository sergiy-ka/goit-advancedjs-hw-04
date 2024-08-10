import{a as u,S as v,i as c}from"./assets/vendor-e8d7d58c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();u.defaults.baseURL="https://pixabay.com";const g=(r,t,a)=>{const i={params:{key:"45255368-572b15c7c49880eb3615da83a",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:a}};return u.get("/api/",i)},f=r=>r.map(({webformatURL:t,largeImageURL:a,tags:i,likes:e,views:s,comments:l,downloads:L})=>`
            <li class="gallery__item">
                <a href="${a}">
                    <img class="gallery__image" src="${t}" alt="${i}" />
                </a>
                <div class="gallery__info">
                    <div class="gallery__likes gallery__info__item">
                        <p class="fas fa-heart">Likes</p>
                        <span>${e}</span>
                    </div>
                    <div class="gallery__views gallery__info__item">
                        <p class="fas fa-eye">Views</p>
                        <span>${s}</span>
                    </div>
                    <div class="gallery__comments gallery__info__item">
                        <p class="fas fa-comment">Comments</p>
                        <span>${l}</span>
                    </div>
                    <div class="gallery__downloads gallery__info__item">
                        <p class="fas fa-download">Downloads</p>
                        <span>${L}</span>
                    </div>
                </div>
            </li>
        `).join(""),y=document.querySelector(".js-search-form"),p=document.querySelector(".js-gallery"),o=document.querySelector(".js-loader"),n=document.querySelector(".js-load-more-btn"),_=new v(".gallery a",{captionsData:"alt",captionDelay:250});let d=1;const h=15;let m="";const b=async r=>{try{if(r.preventDefault(),m=r.currentTarget.elements.user_query.value.trim(),m===""){c.error({title:"Error",message:"Please enter something to search.",position:"topRight"}),y.reset();return}n.classList.add("is-hidden"),p.innerHTML="",o.classList.remove("is-hidden"),d=1;const{data:t}=await g(m,d,h);if(o.classList.add("is-hidden"),t.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p.innerHTML=f(t.hits),_.refresh(),n.classList.remove("is-hidden")}catch{c.error({title:"Error",message:"Failed to load images.",position:"topRight"}),o.classList.add("is-hidden")}},w=async r=>{try{o.classList.remove("is-hidden"),n.classList.add("is-hidden"),d+=1;const{data:t}=await g(m,d,h);o.classList.add("is-hidden"),p.insertAdjacentHTML("beforeend",f(t.hits)),n.classList.remove("is-hidden"),_.refresh(),d*h>=t.totalHits&&(n.classList.add("is-hidden"),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}));let a=document.querySelector(".gallery__item").getBoundingClientRect();window.scrollBy({top:a.height*2,behavior:"smooth"})}catch{c.error({title:"Error",message:"Failed to load more images.",position:"topRight"}),o.classList.add("is-hidden")}};y.addEventListener("submit",b);n.addEventListener("click",w);
//# sourceMappingURL=commonHelpers.js.map
