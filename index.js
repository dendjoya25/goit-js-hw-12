import{S as P,a as v,i as d}from"./assets/vendor-Byks891O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const h=t=>` 
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
  </li>`,w=()=>{new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},E="https://pixabay.com/api/?",S="45497823-3ee11a5b90ff874601dfe7178",m=async(t,s,o)=>{const i=new URLSearchParams({key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:o,page:s});try{return(await v.get(`${E}${i}`)).data}catch{d.error({message:"Error. Please try again!",position:"topRight"})}},c=document.querySelector(".js-page-form"),l=document.querySelector(".js-gallery"),g=document.querySelector(".js-loader"),p=document.querySelector(".load-more-btn-js"),r={searchedValue:"",page:null,total:null,perPage:18},$=async t=>{t.preventDefault(),r.searchedValue=c.elements.user_query.value.trim(),r.page=1,y();const s=await m(r.searchedValue,r.page,r.perPage);if(s.hits&&s.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",c.reset();return}const o=s.hits.map(i=>h(i)).join("");l.innerHTML=o,r.total=s.totalHits,L(),f(),u()},q=async()=>{b(),y(),r.page+=1;const s=(await m(r.searchedValue,r.page)).hits.map(o=>h(o)).join("");l.insertAdjacentHTML("beforeend",s),w(),f(),u(),L(),x()},y=()=>{g.classList.remove("is-hidden")},f=()=>{g.classList.add("is-hidden")},u=()=>{p.classList.remove("is-hidden")},b=()=>{p.classList.add("is-hidden")},L=()=>{const s=Math.ceil(r.total/18);r.page>=s?(b(),d.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):u()},x=()=>{const s=l.firstElementChild.getBoundingClientRect().height+102;scrollBy({behavior:"smooth",top:s*2})};p.addEventListener("click",q);c.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
