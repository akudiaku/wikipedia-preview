import{i as f,r as Z,v as j,a as z,g as ee,b as W,c as te,d as ie,e as ne}from"./fullscreen-d8a6dc70.js";import{g as oe,a as re,r as J,c as ae,b as se,d as le}from"./preview-37a83e43.js";const ce=e=>{let o=[],n=[];const d=(i,t)=>{const r=setTimeout(i,t);return n.push(r),r},g=()=>{n.forEach(i=>{clearTimeout(i)}),n=[]},s=(i,t,r,p=void 0)=>{i.addEventListener(t,r,p),o.push([i,t,r,p])},y=()=>{o.forEach(i=>{const[t,r,p,a]=i;t.removeEventListener(r,p,a)}),o=[]},u=i=>{const t=i.toElement||i.relatedTarget||i.target,r=e.element.currentTargetElement;if(t!==r&&!e.element.contains(t)){let p;const a=()=>{clearTimeout(p)};p=d(e.hide,300),s(e.element,"mouseenter",a)}},c=i=>{const t=e.element.querySelector(".wikipediapreview-body"),r=e.element.querySelector(".wikipediapreview-header"),p=e.element.querySelector(".wikipediapreview-footer-cta")||e.element.querySelector(".wikipediapreview-footer-loading");if(t)if(e.element.style[2]==="bottom"||e.element.style.bottom){const a=e.element.getBoundingClientRect().top,h=parseInt(window.getComputedStyle(t).maxHeight.slice(0,-2));t.style.maxHeight=Math.min(i,h+a)+"px"}else{const a=e.element.getBoundingClientRect().top,h=window.getComputedStyle(r).height.slice(0,-2),l=p?window.getComputedStyle(p).height.slice(0,-2):0,b=window.innerHeight-a-h-l;t.style.maxHeight=Math.min(i,b)+"px"}},v=()=>{const{lang:t,title:r}=e;e.element.component.wikipediapreview.classList.add("expanded"),f||c(496),!e.loading&&t&&r&&Z(t,r,p=>{const a=e.element.component.wikipediapreviewGallery;p&&p.length>0?a.appendChild(oe(p,e)):e.element.component.body.removeChild(a)})},k=i=>{let t,r,p,a;const h=i.querySelector(".wikipediapreview-header"),l=i.querySelector(".wikipediapreview-body"),b=m=>{t=m.touches[0].clientY,p=window.getComputedStyle(l),a=Number(p.height.slice(0,-2))},L=(m,E)=>{E&&m.preventDefault();const S=m.touches[0].clientY,$=t-S,q=a+$,V=!i.querySelector(".wikipediapreview.expanded")&&!E||E;l.style.transition="auto",r=S,V&&(l.style.maxHeight=q+"px")},H=m=>{const E=i.querySelector(".wikipediapreview.expanded"),S=t-r,$=Math.abs(S)>80,q=!E&&!m||m;l.style.transition="all 0.25s ease-in-out",S<0&&$&&q?e.hide():S>0&&$&&q&&!E?(l.style.maxHeight="70vh",v()):l.style.maxHeight=a+"px"};s(l,"touchstart",b),s(l,"touchmove",m=>{L(m,!1)}),s(l,"touchend",()=>H(!1)),s(h,"touchstart",b),s(h,"touchmove",m=>{L(m,!0)}),s(h,"touchend",()=>H(!0))};return{onHide:()=>{e.element.component.wikipediapreview.classList.remove("expanded"),e.lang=null,e.title=null,e.loading=!1;const i=e.element.querySelector(".wikipediapreview-body");i.style.transition="auto",y(),g()},onShow:i=>{if(i.component={body:i.querySelector(".wikipediapreview-body"),wikipediapreview:i.querySelector(".wikipediapreview"),wikipediapreviewGallery:i.querySelector(".wikipediapreview-gallery"),closeBtn:i.querySelector(".wikipediapreview-header-closebtn"),readMore:i.querySelector(".wikipediapreview-footer-cta-readmore"),content:i.querySelector(".wikipediapreview-body > p")},i.component.content&&i.component.content.getBoundingClientRect().height<248?v():f||c(248),s(i.component.closeBtn,"click",e.hide),i.component.readMore&&s(i.component.readMore,"click",v),f){const t=document.querySelector(".wp-dark-screen");s(t,"click",e.hide,!0),k(i)}else s(i,"mouseleave",u),s(i.currentTargetElement,"mouseleave",u)},onExpand:v}};let w;const de=(e,o,n,d,g)=>{const s=e.left+e.width/2,y=e.top+e.height/2,u=s<=d/2,c=y<=g/2,v=u?e.left:e.left+e.width-o,k=c?e.top+e.height:"",T=c?"":g-e.top;return{left:v,top:k,bottom:T}},I=e=>e&&e+"px",pe=e=>({left:e.left-3,right:e.right+3,top:e.top-3,bottom:e.bottom+3}),ue=(e,{x:o,y:n})=>{const d=e.getClientRects();for(let g=0;g<d.length;g++){const s=pe(d[g]);if(o>=s.left&&o<=s.right&&n>=s.top&&n<=s.bottom)return d[g]}return d[0]||e.getBoundingClientRect()},we=(e,o=window)=>{w||(w=o.document.createElement("div"),w.classList.add("wp-popup"),w.style.visibility="hidden",e.appendChild(w));const n={};return{show:(y,u,c)=>{w.innerHTML=y;const v=de(ue(u,c),w.offsetWidth,w.offsetHeight,o.innerWidth,o.innerHeight);w.style.left=I(v.left),w.style.top=I(v.top),w.style.bottom=I(v.bottom),w.currentTargetElement=u,w.style.visibility="visible",n.onShow&&n.onShow(w)},hide:()=>{n.onHide&&n.onHide(w),w.style.visibility="hidden",w.currentTargetElement=null},subscribe:(y={})=>{y.onShow&&(n.onShow=y.onShow),y.onHide&&(n.onHide=y.onHide)},element:w}};let x,K;const he=e=>{if(!e.querySelector(".wp-dark-screen")){const o=e.createElement("div");o.classList.add("wp-dark-screen"),e.body.appendChild(o),K=e.body.style.overflow,e.body.style.overflow="hidden"}},ge=e=>{const o=e.getElementsByClassName("wp-dark-screen");e.body.removeChild(o[0]),e.body.style.overflow=K},me=(e,o=window)=>{x||(x=o.document.createElement("div"),x.classList.add("wp-touch-popup"),x.style.visibility="hidden",e.appendChild(x));const n={};return{show:u=>{x.innerHTML=u,x.style.visibility="visible",he(o.document),n.onShow&&n.onShow(x)},hide:()=>{n.onHide&&n.onHide(x),x.style.visibility="hidden",ge(o.document)},expand:()=>{n.onExpand&&n.onExpand()},subscribe:(u={})=>{u.onShow&&(n.onShow=u.onShow),u.onHide&&(n.onHide=u.onHide),u.onExpand&&(n.onExpand=u.onExpand)},element:x}};const C=(e,o,n)=>{const d=e&&e[o];if(d instanceof Function)try{d.apply(null,n)}catch(g){console.log("Error invoking Wikipedia Preview custom callback",g)}},fe=(e,o,n)=>{z(o,e,d=>{n(J(o,d,f))})};let O;function ye({root:e=document,selector:o="[data-wikipedia-preview]",lang:n="en",detectLinks:d=!1,popupContainer:g=document.body,events:s={},debug:y=!1}){const u=n,c=f?me(g):we(g),v=ce(c),k={},T=[],P=[],i=(t,r=!1)=>{t.preventDefault();const p=Date.now(),{currentTarget:a}=r?k:t,h=r?k.title:decodeURIComponent(a.getAttribute("data-wp-title")||a.textContent),l=r?k.lang:a.getAttribute("data-wp-lang")||u,b=r?k.pointerPosition:{x:t.clientX,y:t.clientY},L=te(l);c.element.currentTargetElement===a&&!r||(O=p,c.element.style.visibility==="visible"&&c.hide(),c.loading=!0,c.dir=L,c.show(re(f,l,L),a,b),z(l,h,H=>{if(p===O&&c.loading){if(c.loading=!1,H)c.lang=l,c.title=h,H.type==="standard"?(c.show(J(l,H,f),a,b),C(s,"onShow",[h,l,"standard"])):H.type==="disambiguation"&&(c.show(ae(f,l,H.title,H.dir),a,b),C(s,"onShow",[h,l,"disambiguation"]));else if(ie())c.show(se(f,l,h,L),a,b),C(s,"onShow",[h,l,"error"]);else{c.show(le(f,l,L),a,b),C(s,"onShow",[h,l,"offline"]);const E=e.querySelector(".wikipediapreview-body-action");k.lang=l,k.title=h,k.pointerPosition=b,k.target=a,E.addEventListener("click",S=>{i(S,!0)})}const m=c.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(m&&m.addEventListener("click",()=>{C(s,"onWikiRead",[h,l])}),a.tagName==="A"){const E=ne().split("="),S=new URL(a.href);S.searchParams.set(E[0],E[1]),a.href=S.href}}}))};c.subscribe(v),Array.prototype.forEach.call(e.querySelectorAll(o),t=>{f?t.addEventListener("click",i):t.addEventListener("mouseenter",i),T.push({text:t.textContent,title:t.getAttribute("data-wp-title")||t.textContent,lang:t.getAttribute("data-wp-lang")||u})}),d&&Array.prototype.forEach.call(e.querySelectorAll("a"),t=>{const r=ee(t.getAttribute("href"));r&&(t.setAttribute("data-wp-title",r.title),t.setAttribute("data-wp-lang",r.lang),f?t.addEventListener("click",i):t.addEventListener("mouseenter",i),P.push({text:t.textContent,title:r.title,lang:r.lang}))}),y&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${o}" inside ${e}, Total links found: ${T.length}`),T.forEach((t,r)=>{console.log(r+1,`${t.text} -> ${W(t.lang,t.title,f,!1)}`)}),console.groupEnd(),d&&(console.group(`Searching for links to Wikipedia, Total links found: ${P.length}`),P.forEach((t,r)=>{console.log(r+1,`${t.text} -> ${W(t.lang,t.title,f,!1)}`)}),console.groupEnd()),console.groupEnd())}j();const Y={init:ye,version:j,getPreviewHtml:fe},Ee={title:"Targets",argTypes:{lang:{name:"Language",control:"select",options:["en","fr","hi","ks","he","sv"]},title:{name:"Article Title",control:"text"}},args:{lang:"en",title:"Cat"}},M=({lang:e,title:o})=>{const n=document.createElement("div"),d=`<a href="${W(e,o,!0,!1)}">${o} (${e})</a>`;return n.innerHTML=d,Y.init({root:n,detectLinks:!0}),n},A=({lang:e,title:o})=>{const n=document.createElement("div"),d=`<a href="${W(e,o,!0,!1)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`;return n.innerHTML=d,Y.init({root:n,detectLinks:!0}),n},B=({lang:e,title:o})=>{const n=document.createElement("div"),d=`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${o}">${o} (${e})</span>`;return n.innerHTML=d,Y.init({root:n,lang:e}),n};var U,D,N;M.parameters={...M.parameters,docs:{...(U=M.parameters)==null?void 0:U.docs,source:{originalSource:`({
  lang,
  title
}) => {
  const container = document.createElement('div');
  const template = \`<a href="\${buildWikipediaUrl(lang, title, true, false)}">\${title} (\${lang})</a>\`;
  container.innerHTML = template;
  wikipediaPreview.init({
    root: container,
    detectLinks: true
  });
  return container;
}`,...(N=(D=M.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var G,_,F;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`({
  lang,
  title
}) => {
  const container = document.createElement('div');
  const template = \`<a href="\${buildWikipediaUrl(lang, title, true, false)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>\`;
  container.innerHTML = template;
  wikipediaPreview.init({
    root: container,
    detectLinks: true
  });
  return container;
}`,...(F=(_=A.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var R,X,Q;B.parameters={...B.parameters,docs:{...(R=B.parameters)==null?void 0:R.docs,source:{originalSource:`({
  lang,
  title
}) => {
  const container = document.createElement('div');
  const template = \`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="\${title}">\${title} (\${lang})</span>\`;
  container.innerHTML = template;
  wikipediaPreview.init({
    root: container,
    lang
  });
  return container;
}`,...(Q=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};const Se=["Hyperlink","Image","Text"];export{M as Hyperlink,A as Image,B as Text,Se as __namedExportsOrder,Ee as default};
//# sourceMappingURL=target.stories-8f409335.js.map
