import{S as b,a as L,i as w}from"./assets/vendor-Byks891O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u=t=>` 
  <li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img
        class="gallery-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>
    <div class="img-details">
      <p class="detail-item"><b>Likes:</b> ${t.likes}</p>
      <p class="detail-item"><b>Views:</b> ${t.views}</p>
      <p class="detail-item"><b>Comments:</b> ${t.comments}</p>
      <p class="detail-item"><b>Downloads:</b> ${t.downloads}</p>
    </div>
  </li>`,m=()=>{new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},v="https://pixabay.com/api/?",p=async(t,o)=>{const r=new URLSearchParams({key:"45497823-3ee11a5b90ff874601dfe7178",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:o});try{return(await L.get(`${v}${r}`)).data}catch(a){throw new Error(a.message)}},l=document.querySelector(".js-page-form"),c=document.querySelector(".js-gallery"),h=document.querySelector(".js-loader"),d=document.querySelector(".load-more-btn-js"),y=()=>{d.classList.remove("is-hidden")},S=()=>{d.classList.add("is-hidden")},g=()=>{h.classList.remove("is-hidden")},f=()=>{h.classList.add("is-hidden")};let i=1;S();const E=async t=>{t.preventDefault();const o=l.elements.user_query.value;g();const r=await p(o,i);if(r.hits&&r.hits.length===0){w.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",l.reset();return}const a=r.hits.map(e=>u(e)).join("");c.innerHTML=a,i=1,m(),f(),y()},q=async()=>{g(),i=i+1;const t=l.elements.user_query.value,r=(await p(t,i)).hits.map(a=>u(a)).join("");c.insertAdjacentHTML("beforeend",r),m(),f(),y()};d.addEventListener("click",q);l.addEventListener("submit",E);
//# sourceMappingURL=index.js.map
