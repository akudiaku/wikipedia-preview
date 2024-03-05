import{i as y,r as ee,v as J,a as K,b as W,g as te,c as ne,d as ie,e as oe}from"./fullscreen-5dStlOow.js";import{g as re,r as Y,a as ae,c as se,b as le,d as ce}from"./preview-LEUtCW7N.js";const de=e=>{let i=[],t=[];const a=(n,s)=>{const r=setTimeout(n,s);return t.push(r),r},f=()=>{t.forEach(n=>{clearTimeout(n)}),t=[]},c=(n,s,r,o=void 0)=>{n.addEventListener(s,r,o),i.push([n,s,r,o])},v=()=>{i.forEach(n=>{const[s,r,o,p]=n;s.removeEventListener(r,o,p)}),i=[]},d=n=>{const s=n.toElement||n.relatedTarget||n.target,r=e.element.currentTargetElement;if(s!==r&&!e.element.contains(s)){const o=a(e.hide,300),p=()=>{clearTimeout(o)};c(e.element,"mouseenter",p)}},S=n=>{const s=e.element.querySelector(".wikipediapreview-body"),r=e.element.querySelector(".wikipediapreview-header"),o=e.element.querySelector(".wikipediapreview-footer-cta")||e.element.querySelector(".wikipediapreview-footer-loading");if(s)if(e.element.style[2]==="bottom"||e.element.style.bottom){const p=e.element.getBoundingClientRect().top,u=parseInt(window.getComputedStyle(s).maxHeight.slice(0,-2));s.style.maxHeight=Math.min(n,u+p)+"px"}else{const p=e.element.getBoundingClientRect().top,u=window.getComputedStyle(r).height.slice(0,-2),w=o?window.getComputedStyle(o).height.slice(0,-2):0,h=window.innerHeight-p-u-w;s.style.maxHeight=Math.min(n,h)+"px"}},l=()=>{const{lang:s,title:r}=e;e.element.component.wikipediapreview.classList.add("expanded"),y||S(496),!e.loading&&s&&r&&ee(s,r,o=>{const p=e.element.component.wikipediapreviewGallery;o&&o.length>0?p.appendChild(re(o,e)):e.element.component.body.removeChild(p)})},P=n=>{let s,r,o,p;const u=n.querySelector(".wikipediapreview-header"),w=n.querySelector(".wikipediapreview-body"),h=m=>{s=m.touches[0].clientY,o=window.getComputedStyle(w),p=Number(o.height.slice(0,-2))},x=(m,H)=>{H&&m.preventDefault();const k=m.touches[0].clientY,L=s-k,A=p+L,Z=!n.querySelector(".wikipediapreview.expanded")&&!H||H;w.style.transition="auto",r=k,Z&&(w.style.maxHeight=A+"px")},T=m=>{const H=n.querySelector(".wikipediapreview.expanded"),k=s-r,L=Math.abs(k)>80,A=!H&&!m||m;w.style.transition="all 0.25s ease-in-out",k<0&&L&&A?e.hide():k>0&&L&&A&&!H?(w.style.maxHeight="70vh",l()):w.style.maxHeight=p+"px"};c(w,"touchstart",h),c(w,"touchmove",m=>{x(m,!1)}),c(w,"touchend",()=>T(!1)),c(u,"touchstart",h),c(u,"touchmove",m=>{x(m,!0)}),c(u,"touchend",()=>T(!0))};return{onHide:()=>{e.element.component.wikipediapreview.classList.remove("expanded"),e.lang=null,e.title=null,e.loading=!1;const n=e.element.querySelector(".wikipediapreview-body");n.style.transition="auto",v(),f()},onShow:n=>{if(n.component={body:n.querySelector(".wikipediapreview-body"),wikipediapreview:n.querySelector(".wikipediapreview"),wikipediapreviewGallery:n.querySelector(".wikipediapreview-gallery"),closeBtn:n.querySelector(".wikipediapreview-header-closebtn"),readMore:n.querySelector(".wikipediapreview-footer-cta-readmore"),content:n.querySelector(".wikipediapreview-body > p")},n.component.content&&n.component.content.getBoundingClientRect().height<248?l():y||S(248),c(n.component.closeBtn,"click",e.hide),n.component.readMore&&c(n.component.readMore,"click",l),y){const s=document.querySelector(".wp-dark-screen");c(s,"click",e.hide,!0),P(n)}else c(n,"mouseleave",d),c(n.currentTargetElement,"mouseleave",d)},onExpand:l}};let g;const pe=(e,i,t,a,f)=>{const c=e.left+e.width/2,v=e.top+e.height/2,d=c<=a/2,S=v<=f/2,l=d?e.left:e.left+e.width-i,P=S?e.top+e.height:"",b=S?"":f-e.top;return{left:l,top:P,bottom:b}},I=e=>e&&e+"px",ue=e=>({left:e.left-3,right:e.right+3,top:e.top-3,bottom:e.bottom+3}),we=(e,{x:i,y:t})=>{const a=e.getClientRects();for(let f=0;f<a.length;f++){const c=ue(a[f]);if(i>=c.left&&i<=c.right&&t>=c.top&&t<=c.bottom)return a[f]}return a[0]||e.getBoundingClientRect()},he=(e,i=window)=>{g||(g=i.document.createElement("div"),g.classList.add("wp-popup"),g.style.visibility="hidden",e.appendChild(g));const t={};return{show:(v,d,S)=>{g.innerHTML=v;const l=pe(we(d,S),g.offsetWidth,g.offsetHeight,i.innerWidth,i.innerHeight);g.style.left=I(l.left),g.style.top=I(l.top),g.style.bottom=I(l.bottom),g.currentTargetElement=d,g.style.visibility="visible",t.onShow&&t.onShow(g)},hide:()=>{t.onHide&&t.onHide(g),g.style.visibility="hidden",g.currentTargetElement=null},subscribe:(v={})=>{v.onShow&&(t.onShow=v.onShow),v.onHide&&(t.onHide=v.onHide)},element:g}};let E,V;const me=e=>{if(!e.querySelector(".wp-dark-screen")){const i=e.createElement("div");i.classList.add("wp-dark-screen"),e.body.appendChild(i),V=e.body.style.overflow,e.body.style.overflow="hidden"}},ge=e=>{const i=e.getElementsByClassName("wp-dark-screen");e.body.removeChild(i[0]),e.body.style.overflow=V},fe=(e,i=window)=>{E||(E=i.document.createElement("div"),E.classList.add("wp-touch-popup"),E.style.visibility="hidden",e.appendChild(E));const t={};return{show:d=>{E.innerHTML=d,E.style.visibility="visible",me(i.document),t.onShow&&t.onShow(E)},hide:()=>{t.onHide&&t.onHide(E),E.style.visibility="hidden",ge(i.document)},expand:()=>{t.onExpand&&t.onExpand()},subscribe:(d={})=>{d.onShow&&(t.onShow=d.onShow),d.onHide&&(t.onHide=d.onHide),d.onExpand&&(t.onExpand=d.onExpand)},element:E}},q=(e,i,t)=>{const a=e&&e[i];if(a instanceof Function)try{a.apply(null,t)}catch(f){console.log("Error invoking Wikipedia Preview custom callback",f)}},ye=(e,i,t)=>{K(i,e,a=>{t(Y(i,a,y))})},O=(e,i)=>{const t=[];(typeof e=="string"||e instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(e),a=>{t.push(a)}),(e instanceof Document||e instanceof Element)&&t.push(e),Array.isArray(e)&&e.forEach(a=>{a instanceof Element&&t.push(a)}),t.forEach(a=>i(a))};let U;function ve({root:e=document,selector:i="[data-wikipedia-preview]",lang:t="en",detectLinks:a=!1,popupContainer:f=document.body,events:c={},debug:v=!1,prefersColorScheme:d="detect"}){const S=t,l=y?fe(f):he(f),P=de(l),b={},$=[],n=[],s=(r,o=!1)=>{r.preventDefault();const p=Date.now(),{currentTarget:u}=o?b:r,w=o?b.title:decodeURIComponent(u.getAttribute("data-wp-title")||u.textContent),h=o?b.lang:u.getAttribute("data-wp-lang")||S,x=o?b.pointerPosition:{x:r.clientX,y:r.clientY},T=oe(h);l.element.currentTargetElement===u&&!o||(U=p,l.element.style.visibility==="visible"&&l.hide(),l.loading=!0,l.dir=T,l.show(ae(y,h,T,d),u,x),K(h,w,m=>{if(p===U&&l.loading){if(l.loading=!1,m){if(l.lang=h,l.title=w,m.type==="standard")l.show(Y(h,m,y,d),u,x),q(c,"onShow",[w,h,"standard"]);else if(m.type==="disambiguation"){const k=m.extractHtml?Y(h,m,y,d):se(y,h,m.title,m.dir,d);l.show(k,u,x),q(c,"onShow",[w,h,"disambiguation"])}}else if(ne())l.show(le(y,h,w,T,d),u,x),q(c,"onShow",[w,h,"error"]);else{l.show(ce(y,h,T,d),u,x),q(c,"onShow",[w,h,"offline"]);const k=document.querySelector(".wikipediapreview-body-action");b.lang=h,b.title=w,b.pointerPosition=x,b.target=u,k.addEventListener("click",L=>{s(L,!0)})}const H=l.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(H&&H.addEventListener("click",()=>{q(c,"onWikiRead",[w,h])}),u.tagName==="A"){const k=ie().split("="),L=new URL(u.href);L.searchParams.set(k[0],k[1]),u.href=L.href}}}))};l.subscribe(P),O(e,r=>{Array.prototype.forEach.call(r.querySelectorAll(i),o=>{y?o.addEventListener("click",s):o.addEventListener("mouseenter",s),$.push({text:o.textContent,title:o.getAttribute("data-wp-title")||o.textContent,lang:o.getAttribute("data-wp-lang")||S})})}),a&&O(e,r=>{Array.prototype.forEach.call(r.querySelectorAll("a"),o=>{const p=te(o.getAttribute("href"));p&&(o.setAttribute("data-wp-title",p.title),o.setAttribute("data-wp-lang",p.lang),y?o.addEventListener("click",s):o.addEventListener("mouseenter",s),n.push({text:o.textContent,title:p.title,lang:p.lang}))})}),v&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${i}" inside ${e}, Total links found: ${$.length}`),$.forEach((r,o)=>{console.log(o+1,`${r.text} -> ${W(r.lang,r.title,y,!1)}`)}),console.groupEnd(),a&&(console.group(`Searching for links to Wikipedia, Total links found: ${n.length}`),n.forEach((r,o)=>{console.log(o+1,`${r.text} -> ${W(r.lang,r.title,y,!1)}`)}),console.groupEnd()),console.groupEnd())}J();const D={init:ve,version:J,getPreviewHtml:ye},Se={title:"Targets",argTypes:{lang:{name:"Language",control:"select",options:["en","fr","hi","ks","he","sv"]},title:{name:"Article Title",control:"text"}},args:{lang:"en",title:"Cat"}},M=({lang:e,title:i})=>{const t=document.createElement("div"),a=`<a href="${W(e,i,!0,!1)}">${i} (${e})</a>`;return t.innerHTML=a,D.init({root:t,detectLinks:!0}),t},B=({lang:e,title:i})=>{const t=document.createElement("div"),a=`<a href="${W(e,i,!0,!1)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`;return t.innerHTML=a,D.init({root:t,detectLinks:!0}),t},C=({lang:e,title:i})=>{const t=document.createElement("div"),a=`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${i}">${i} (${e})</span>`;return t.innerHTML=a,D.init({root:t,lang:e}),t};var N,G,R;M.parameters={...M.parameters,docs:{...(N=M.parameters)==null?void 0:N.docs,source:{originalSource:`({
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
}`,...(R=(G=M.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var _,F,X;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`({
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
}`,...(X=(F=B.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var Q,j,z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`({
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
}`,...(z=(j=C.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};const xe=["Hyperlink","Image","Text"];export{M as Hyperlink,B as Image,C as Text,xe as __namedExportsOrder,Se as default};
