import{S as w,a as v,i as u}from"./assets/vendor-Byks891O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const m=e=>` 
  <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
      />
    </a>
    <div class="img-details">
      <p class="detail-item"><b>Likes:</b> ${e.likes}</p>
      <p class="detail-item"><b>Views:</b> ${e.views}</p>
      <p class="detail-item"><b>Comments:</b> ${e.comments}</p>
      <p class="detail-item"><b>Downloads:</b> ${e.downloads}</p>
    </div>
  </li>`,E=()=>{new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},P="https://pixabay.com/api/?",S="45497823-3ee11a5b90ff874601dfe7178",h=async(e,s)=>{const o=new URLSearchParams({key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:18,page:s});try{return(await v.get(`${P}${o}`)).data}catch(i){throw new Error(i.message)}},n=document.querySelector(".js-page-form"),c=document.querySelector(".js-gallery"),g=document.querySelector(".js-loader"),d=document.querySelector(".load-more-btn-js"),r={searchedValue:"",page:1,total:100},$=async e=>{e.preventDefault(),r.searchedValue=n.elements.user_query.value.trim(),r.page=1,y();const s=await h(r.searchedValue,r.page);if(s.hits&&s.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="",n.reset();return}const o=s.hits.map(i=>m(i)).join("");c.innerHTML=o,r.total=s.totalHits,L(),f(),p()},q=async()=>{b(),y(),r.page+=1;const s=(await h(r.searchedValue,r.page)).hits.map(o=>m(o)).join("");c.insertAdjacentHTML("beforeend",s),E(),f(),p(),L()},y=()=>{g.classList.remove("is-hidden")},f=()=>{g.classList.add("is-hidden")},p=()=>{d.classList.remove("is-hidden")},b=()=>{d.classList.add("is-hidden")},L=()=>{const s=Math.ceil(r.total/18);r.page>=s?(b(),u.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):p()};d.addEventListener("click",q);n.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
