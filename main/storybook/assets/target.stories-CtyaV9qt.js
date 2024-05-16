import{i as y,r as te,v as K,a as V,b as I,g as ne,c as ie,d as oe,e as re}from"./fullscreen-Dx-5M_c3.js";import{g as ae,r as D,a as se,c as le,b as ce,d as de}from"./preview-0msw_aPE.js";const pe=e=>{let i=[],t=[];const a=(n,s)=>{const r=setTimeout(n,s);return t.push(r),r},f=()=>{t.forEach(n=>{clearTimeout(n)}),t=[]},c=(n,s,r,o=void 0)=>{n.addEventListener(s,r,o),i.push([n,s,r,o])},v=()=>{i.forEach(n=>{const[s,r,o,d]=n;s.removeEventListener(r,o,d)}),i=[]},m=n=>{const s=n.toElement||n.relatedTarget||n.target,r=e.element.currentTargetElement;if(s!==r&&!e.element.contains(s)){const o=a(e.hide,300),d=()=>{clearTimeout(o)};c(e.element,"mouseenter",d)}},S=n=>{const s=e.element.querySelector(".wikipediapreview-body"),r=e.element.querySelector(".wikipediapreview-header"),o=e.element.querySelector(".wikipediapreview-footer-cta")||e.element.querySelector(".wikipediapreview-footer-loading");if(s)if(e.element.style[2]==="bottom"||e.element.style.bottom){const d=e.element.getBoundingClientRect().top,p=parseInt(window.getComputedStyle(s).maxHeight.slice(0,-2));s.style.maxHeight=Math.min(n,p+d)+"px"}else{const d=e.element.getBoundingClientRect().top,p=window.getComputedStyle(r).height.slice(0,-2),u=o?window.getComputedStyle(o).height.slice(0,-2):0,h=window.innerHeight-d-p-u;s.style.maxHeight=Math.min(n,h)+"px"}},l=()=>{const{lang:s,title:r}=e;e.element.component.wikipediapreview.classList.add("expanded"),y||S(496),!e.loading&&s&&r&&te(s,r,o=>{const d=e.element.component.wikipediapreviewGallery;o&&o.length>0?d.appendChild(ae(o,e)):e.element.component.body.removeChild(d)})},q=n=>{let s,r,o,d;const p=n.querySelector(".wikipediapreview-header"),u=n.querySelector(".wikipediapreview-body"),h=w=>{s=w.touches[0].clientY,o=window.getComputedStyle(u),d=Number(o.height.slice(0,-2))},x=(w,H)=>{H&&w.preventDefault();const k=w.touches[0].clientY,L=s-k,C=d+L,ee=!n.querySelector(".wikipediapreview.expanded")&&!H||H;u.style.transition="auto",r=k,ee&&(u.style.maxHeight=C+"px")},T=w=>{const H=n.querySelector(".wikipediapreview.expanded"),k=s-r,L=Math.abs(k)>80,C=!H&&!w||w;u.style.transition="all 0.25s ease-in-out",k<0&&L&&C?e.hide():k>0&&L&&C&&!H?(u.style.maxHeight="70vh",l()):u.style.maxHeight=d+"px"};c(u,"touchstart",h),c(u,"touchmove",w=>{x(w,!1)}),c(u,"touchend",()=>T(!1)),c(p,"touchstart",h),c(p,"touchmove",w=>{x(w,!0)}),c(p,"touchend",()=>T(!0))};return{onHide:()=>{e.element.component.wikipediapreview.classList.remove("expanded"),e.lang=null,e.title=null,e.loading=!1;const n=e.element.querySelector(".wikipediapreview-body");n.style.transition="auto",v(),f()},onShow:n=>{if(n.component={body:n.querySelector(".wikipediapreview-body"),wikipediapreview:n.querySelector(".wikipediapreview"),wikipediapreviewGallery:n.querySelector(".wikipediapreview-gallery"),closeBtn:n.querySelector(".wikipediapreview-header-closebtn"),readMore:n.querySelector(".wikipediapreview-footer-cta-readmore"),content:n.querySelector(".wikipediapreview-body > p")},n.component.content&&n.component.content.getBoundingClientRect().height<248?l():y||S(248),y&&c(n.component.closeBtn,"click",e.hide),n.component.readMore&&c(n.component.readMore,"click",l),y){const s=document.querySelector(".wp-dark-screen");c(s,"click",e.hide,!0),q(n)}else c(n,"mouseleave",m),c(n.currentTargetElement,"mouseleave",m)},onExpand:l}};let g;const ue=(e,i,t,a,f)=>{const c=e.left+e.width/2,v=e.top+e.height/2,m=c<=a/2,S=v<=f/2,l=m?e.left:e.left+e.width-i,q=S?e.top+e.height:"",b=S?"":f-e.top;return{left:l,top:q,bottom:b}},Y=e=>e&&e+"px",he=e=>({left:e.left-3,right:e.right+3,top:e.top-3,bottom:e.bottom+3}),we=(e,{x:i,y:t})=>{const a=e.getClientRects();for(let f=0;f<a.length;f++){const c=he(a[f]);if(i>=c.left&&i<=c.right&&t>=c.top&&t<=c.bottom)return a[f]}return a[0]||e.getBoundingClientRect()},me=(e,i=window)=>{g||(g=i.document.createElement("div"),g.classList.add("wp-popup"),g.style.visibility="hidden",e.appendChild(g));const t={};return{show:(v,m,S)=>{g.innerHTML=v;const l=ue(we(m,S),g.offsetWidth,g.offsetHeight,i.innerWidth,i.innerHeight);g.style.left=Y(l.left),g.style.top=Y(l.top),g.style.bottom=Y(l.bottom),g.currentTargetElement=m,g.style.visibility="visible",t.onShow&&t.onShow(g)},hide:()=>{t.onHide&&t.onHide(g),g.style.visibility="hidden",g.currentTargetElement=null},subscribe:(v={})=>{v.onShow&&(t.onShow=v.onShow),v.onHide&&(t.onHide=v.onHide)},element:g}};let E,Z;const ge=e=>{if(!e.querySelector(".wp-dark-screen")){const i=e.createElement("div");i.classList.add("wp-dark-screen"),e.body.appendChild(i),Z=e.body.style.overflow,e.body.style.overflow="hidden"}},fe=e=>{const i=e.getElementsByClassName("wp-dark-screen");e.body.removeChild(i[0]),e.body.style.overflow=Z},ye=(e,i=window)=>{E||(E=i.document.createElement("div"),E.classList.add("wp-touch-popup"),E.style.visibility="hidden",e.appendChild(E));const t={};return{show:m=>{E.innerHTML=m,E.style.visibility="visible",ge(i.document),t.onShow&&t.onShow(E)},hide:()=>{t.onHide&&t.onHide(E),E.style.visibility="hidden",fe(i.document)},expand:()=>{t.onExpand&&t.onExpand()},subscribe:(m={})=>{m.onShow&&(t.onShow=m.onShow),m.onHide&&(t.onHide=m.onHide),m.onExpand&&(t.onExpand=m.onExpand)},element:E}},$=(e,i,t)=>{const a=e&&e[i];if(a instanceof Function)try{a.apply(null,t)}catch(f){console.log("Error invoking Wikipedia Preview custom callback",f)}},ve=(e,i,t)=>{V(i,e,a=>{t(D(i,a,y))})},U=(e,i)=>{const t=[];(typeof e=="string"||e instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(e),a=>{t.push(a)}),(e instanceof Document||e instanceof Element)&&t.push(e),Array.isArray(e)&&e.forEach(a=>{a instanceof Element&&t.push(a)}),t.forEach(a=>i(a))};let N,P;function ke({root:e=document,selector:i="[data-wikipedia-preview]",lang:t="en",detectLinks:a=!1,popupContainer:f=document.body,events:c={},debug:v=!1,prefersColorScheme:m="detect"}){const S=t,l=y?ye(f):me(f),q=pe(l),b={},A=[],n=[];P=m;const s=(r,o=!1)=>{r.preventDefault();const d=Date.now(),{currentTarget:p}=o?b:r,u=o?b.title:decodeURIComponent(p.getAttribute("data-wp-title")||p.textContent),h=o?b.lang:p.getAttribute("data-wp-lang")||S,x=o?b.pointerPosition:{x:r.clientX,y:r.clientY},T=re(h);l.element.currentTargetElement===p&&!o||(N=d,l.element.style.visibility==="visible"&&l.hide(),l.loading=!0,l.dir=T,l.show(se(y,h,T,P),p,x),V(h,u,w=>{if(d===N&&l.loading){if(l.loading=!1,w){if(l.lang=h,l.title=u,w.type==="standard")l.show(D(h,w,y,P),p,x),$(c,"onShow",[u,h,"standard"]);else if(w.type==="disambiguation"){const k=w.extractHtml?D(h,w,y,P):le(y,h,w.title,w.dir,P);l.show(k,p,x),$(c,"onShow",[u,h,"disambiguation"])}}else if(ie())l.show(ce(y,h,u,T,P),p,x),$(c,"onShow",[u,h,"error"]);else{l.show(de(y,h,T,P),p,x),$(c,"onShow",[u,h,"offline"]);const k=document.querySelector(".wikipediapreview-body-action");b.lang=h,b.title=u,b.pointerPosition=x,b.target=p,k.addEventListener("click",L=>{s(L,!0)})}const H=l.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(H&&H.addEventListener("click",()=>{$(c,"onWikiRead",[u,h])}),p.tagName==="A"){const k=oe().split("="),L=new URL(p.href);L.searchParams.set(k[0],k[1]),p.href=L.href}}}))};l.subscribe(q),U(e,r=>{Array.prototype.forEach.call(r.querySelectorAll(i),o=>{y?o.addEventListener("click",s):o.addEventListener("mouseenter",s),A.push({text:o.textContent,title:o.getAttribute("data-wp-title")||o.textContent,lang:o.getAttribute("data-wp-lang")||S})})}),a&&U(e,r=>{Array.prototype.forEach.call(r.querySelectorAll("a"),o=>{const d=ne(o.getAttribute("href"));d&&(o.setAttribute("data-wp-title",d.title),o.setAttribute("data-wp-lang",d.lang),y?o.addEventListener("click",s):o.addEventListener("mouseenter",s),n.push({text:o.textContent,title:d.title,lang:d.lang}))})}),v&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${i}" inside ${e}, Total links found: ${A.length}`),A.forEach((r,o)=>{console.log(o+1,`${r.text} -> ${I(r.lang,r.title,y,!1)}`)}),console.groupEnd(),a&&(console.group(`Searching for links to Wikipedia, Total links found: ${n.length}`),n.forEach((r,o)=>{console.log(o+1,`${r.text} -> ${I(r.lang,r.title,y,!1)}`)}),console.groupEnd()),console.groupEnd())}K();const O={init:ke,version:K,getPreviewHtml:ve},xe={title:"Targets",argTypes:{lang:{name:"Language",control:"select",options:["en","fr","hi","ks","he","sv"]},title:{name:"Article Title",control:"text"}},args:{lang:"en",title:"Cat"}},M=({lang:e,title:i})=>{const t=document.createElement("div"),a=`<a href="${I(e,i,!0,!1)}">${i} (${e})</a>`;return t.innerHTML=a,O.init({root:t,detectLinks:!0}),t},B=({lang:e,title:i})=>{const t=document.createElement("div"),a=`<a href="${I(e,i,!0,!1)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`;return t.innerHTML=a,O.init({root:t,detectLinks:!0}),t},W=({lang:e,title:i})=>{const t=document.createElement("div"),a=`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${i}">${i} (${e})</span>`;return t.innerHTML=a,O.init({root:t,lang:e}),t};var G,R,_;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`({
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
}`,...(_=(R=M.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var F,X,Q;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(Q=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var j,z,J;W.parameters={...W.parameters,docs:{...(j=W.parameters)==null?void 0:j.docs,source:{originalSource:`({
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
}`,...(J=(z=W.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const He=["Hyperlink","Image","Text"];export{M as Hyperlink,B as Image,W as Text,He as __namedExportsOrder,xe as default};
