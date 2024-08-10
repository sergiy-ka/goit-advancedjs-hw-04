import{S as f,i as n}from"./assets/vendor-96ed78f5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="45255368-572b15c7c49880eb3615da83a",p=o=>{const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},g=o=>o.map(({webformatURL:s,largeImageURL:t,tags:i,likes:e,views:r,comments:a,downloads:u})=>`
            <li>
                <a href="${t}">
                    <img class="gallery__image" src="${s}" alt="${i}" />
                </a>
                <div class="gallery__info">
                    <div class="gallery__likes gallery__info__item">
                        <p class="fas fa-heart">Likes</p>
                        <span>${e}</span>
                    </div>
                    <div class="gallery__views gallery__info__item">
                        <p class="fas fa-eye">Views</p>
                        <span>${r}</span>
                    </div>
                    <div class="gallery__comments gallery__info__item">
                        <p class="fas fa-comment">Comments</p>
                        <span>${a}</span>
                    </div>
                    <div class="gallery__downloads gallery__info__item">
                        <p class="fas fa-download">Downloads</p>
                        <span>${u}</span>
                    </div>
                </div>
            </li>
        `).join(""),l=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",y);function y(o){o.preventDefault();const s=o.currentTarget.elements.user_query.value.trim();if(s===""){n.error({title:"Error",message:"Please enter something to search.",position:"topRight"}),l.reset();return}c.innerHTML="",d.classList.remove("is-hidden"),p(s).finally(()=>{d.classList.add("is-hidden")}).then(({hits:t})=>{if(t.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.innerHTML=g(t),h.refresh()}).catch(t=>{n.error({title:"Error",message:"Failed to load images.",position:"topRight"})}),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
