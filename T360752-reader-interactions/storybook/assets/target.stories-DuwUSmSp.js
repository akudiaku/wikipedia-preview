import{h as A,j as ne,v as qt,k as oe,b as lt,n as ie,i as re,g as se,c as ce}from"./utils--lAEzUWD.js";import{s as le,r as ae,a as _t}from"./fullscreen-CSWzRxZO.js";import{r as mt,a as fe,c as de,b as ue,d as me}from"./preview-BbiNIUep.js";const pe=(t,e)=>{const n=document.createElement("div");return n.classList.add("wikipediapreview-gallery-row"),t.forEach(o=>{const i=document.createElement("div");i.classList.add("wikipediapreview-gallery-image"),i.style.backgroundImage=`url(${o.thumb})`,i.addEventListener("click",r=>{const s=r.target.style.backgroundImage.slice(4,-1).replace(/"/g,"");le(t,s,e.lang,e.dir)}),n.appendChild(i)}),n},ge=t=>{let e=[],n=[];const o=(c,p)=>{const a=setTimeout(c,p);return n.push(a),a},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,p,a,g=void 0)=>{c.addEventListener(p,a,g),e.push([c,p,a,g])},s=()=>{e.forEach(c=>{const[p,a,g,m]=c;p.removeEventListener(a,g,m)}),e=[]},f=()=>{const{lang:c,title:p}=t;!t.loading&&c&&p&&ae(c,p,a=>{const g=t.element.component.wikipediapreviewGallery;a&&a.length>0?g.appendChild(pe(a,t)):t.element.component.body.removeChild(g)})},d=c=>{const p=c.toElement||c.relatedTarget||c.target,a=t.element.currentTargetElement;if(p!==a&&!t.element.contains(p)){const g=o(t.hide,300),m=()=>{clearTimeout(g)};r(t.element,"mouseenter",m)}};return{onHide:()=>{t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewGallery:c.querySelector(".wikipediapreview-gallery"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),content:c.querySelector(".wikipediapreview-body > p")},c.component.wikipediapreviewGallery&&c.component.wikipediapreviewGallery.children.length===0&&f(),A&&r(c.component.closeBtn,"click",t.hide),A){const p=document.querySelector(".wp-dark-screen");r(p,"click",t.hide,!0)}else r(c,"mouseleave",d),r(c.currentTargetElement,"mouseleave",d);ne(c.component.body)&&(c.component.body.classList.add("scroll-cue"),r(c.component.body,"scroll",p=>{p.target.scrollTop>0?c.component.body.classList.remove("scroll-cue"):c.component.body.classList.add("scroll-cue")}))}}},he=["top","right","bottom","left"],kt=["start","end"],St=he.reduce((t,e)=>t.concat(e,e+"-"+kt[0],e+"-"+kt[1]),[]),F=Math.min,B=Math.max,at=Math.round,V=t=>({x:t,y:t}),we={left:"right",right:"left",bottom:"top",top:"bottom"},ye={start:"end",end:"start"};function pt(t,e,n){return B(t,F(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function M(t){return t.split("-")[1]}function It(t){return t==="x"?"y":"x"}function ht(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(q(t))?"y":"x"}function wt(t){return It(nt(t))}function xe(t,e,n){n===void 0&&(n=!1);const o=M(t),i=wt(t),r=ht(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Lt(s)),[s,Lt(s)]}function ve(t){return t.replace(/start|end/g,e=>ye[e])}function Lt(t){return t.replace(/left|right|bottom|top/g,e=>we[e])}function be(t){return{top:0,right:0,bottom:0,left:0,...t}}function yt(t){return typeof t!="number"?be(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Tt(t,e,n){let{reference:o,floating:i}=t;const r=nt(e),s=wt(e),f=ht(s),d=q(e),l=r==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,p=o[f]/2-i[f]/2;let a;switch(d){case"top":a={x:h,y:o.y-i.height};break;case"bottom":a={x:h,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:c};break;case"left":a={x:o.x-i.width,y:c};break;default:a={x:o.x,y:o.y}}switch(M(e)){case"start":a[s]-=p*(n&&l?-1:1);break;case"end":a[s]+=p*(n&&l?-1:1);break}return a}const Ee=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,f=r.filter(Boolean),d=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=Tt(l,o,d),p=o,a={},g=0;for(let m=0;m<f.length;m++){const{name:u,fn:y}=f[m],{x:w,y:x,data:v,reset:E}=await y({x:h,y:c,initialPlacement:o,placement:p,strategy:i,middlewareData:a,rects:l,platform:s,elements:{reference:t,floating:e}});h=w??h,c=x??c,a={...a,[u]:{...a[u],...v}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(p=E.placement),E.rects&&(l=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):E.rects),{x:h,y:c}=Tt(l,p,d)),m=-1)}return{x:h,y:c,placement:p,strategy:i,middlewareData:a}};async function Xt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:f,strategy:d}=t,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:p=!1,padding:a=0}=Q(e,t),g=yt(a),u=f[p?c==="floating"?"reference":"floating":c],y=z(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(u)))==null||n?u:u.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(f.floating)),boundary:l,rootBoundary:h,strategy:d})),w=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f.floating)),v=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},E=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:x,strategy:d}):w);return{top:(y.top-E.top+g.top)/v.y,bottom:(E.bottom-y.bottom+g.bottom)/v.y,left:(y.left-E.left+g.left)/v.x,right:(E.right-y.right+g.right)/v.x}}const ke=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:f,middlewareData:d}=e,{element:l,padding:h=0}=Q(t,e)||{};if(l==null)return{};const c=yt(h),p={x:n,y:o},a=wt(i),g=ht(a),m=await s.getDimensions(l),u=a==="y",y=u?"top":"left",w=u?"bottom":"right",x=u?"clientHeight":"clientWidth",v=r.reference[g]+r.reference[a]-p[a]-r.floating[g],E=p[a]-r.reference[a],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let k=L?L[x]:0;(!k||!await(s.isElement==null?void 0:s.isElement(L)))&&(k=f.floating[x]||r.floating[g]);const X=v/2-E/2,T=k/2-m[g]/2-1,b=F(c[y],T),C=F(c[w],T),W=b,N=k-m[g]-C,$=k/2-m[g]/2+X,Y=pt(W,$,N),G=!d.arrow&&M(i)!=null&&$!==Y&&r.reference[g]/2-($<W?b:C)-m[g]/2<0,Z=G?$<W?$-W:$-N:0;return{[a]:p[a]+Z,data:{[a]:Y,centerOffset:$-Y-Z,...G&&{alignmentOffset:Z}},reset:G}}});function Se(t,e,n){return(t?[...n.filter(i=>M(i)===t),...n.filter(i=>M(i)!==t)]:n.filter(i=>q(i)===i)).filter(i=>t?M(i)===t||(e?ve(i)!==i:!1):!0)}const Le=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:f,platform:d,elements:l}=e,{crossAxis:h=!1,alignment:c,allowedPlacements:p=St,autoAlignment:a=!0,...g}=Q(t,e),m=c!==void 0||p===St?Se(c||null,a,p):p,u=await Xt(e,g),y=((n=s.autoPlacement)==null?void 0:n.index)||0,w=m[y];if(w==null)return{};const x=xe(w,r,await(d.isRTL==null?void 0:d.isRTL(l.floating)));if(f!==w)return{reset:{placement:m[0]}};const v=[u[q(w)],u[x[0]],u[x[1]]],E=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],L=m[y+1];if(L)return{data:{index:y+1,overflows:E},reset:{placement:L}};const k=E.map(b=>{const C=M(b.placement);return[b.placement,C&&h?b.overflows.slice(0,2).reduce((W,N)=>W+N,0):b.overflows[0],b.overflows]}).sort((b,C)=>b[1]-C[1]),T=((i=k.filter(b=>b[2].slice(0,M(b[0])?2:3).every(C=>C<=0))[0])==null?void 0:i[0])||k[0][0];return T!==f?{data:{index:y+1,overflows:E},reset:{placement:T}}:{}}}};function Yt(t){const e=F(...t.map(r=>r.left)),n=F(...t.map(r=>r.top)),o=B(...t.map(r=>r.right)),i=B(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function Te(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>z(Yt(i)))}const Ae=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:f=2,x:d,y:l}=Q(t,e),h=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),c=Te(h),p=z(Yt(h)),a=yt(f);function g(){if(c.length===2&&c[0].left>c[1].right&&d!=null&&l!=null)return c.find(u=>d>u.left-a.left&&d<u.right+a.right&&l>u.top-a.top&&l<u.bottom+a.bottom)||p;if(c.length>=2){if(nt(n)==="y"){const b=c[0],C=c[c.length-1],W=q(n)==="top",N=b.top,$=C.bottom,Y=W?b.left:C.left,G=W?b.right:C.right,Z=G-Y,ee=$-N;return{top:N,bottom:$,left:Y,right:G,width:Z,height:ee,x:Y,y:N}}const u=q(n)==="left",y=B(...c.map(b=>b.right)),w=F(...c.map(b=>b.left)),x=c.filter(b=>u?b.left===w:b.right===y),v=x[0].top,E=x[x.length-1].bottom,L=w,k=y,X=k-L,T=E-v;return{top:v,bottom:E,left:L,right:k,width:X,height:T,x:L,y:v}}return p}const m=await r.getElementRects({reference:{getBoundingClientRect:g},floating:o.floating,strategy:s});return i.reference.x!==m.reference.x||i.reference.y!==m.reference.y||i.reference.width!==m.reference.width||i.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}};async function Re(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=q(n),f=M(n),d=nt(n)==="y",l=["left","top"].includes(s)?-1:1,h=r&&d?-1:1,c=Q(e,t);let{mainAxis:p,crossAxis:a,alignmentAxis:g}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return f&&typeof g=="number"&&(a=f==="end"?g*-1:g),d?{x:a*h,y:p*l}:{x:p*l,y:a*h}}const Ce=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:f}=e,d=await Re(e,t);return s===((n=f.offset)==null?void 0:n.placement)&&(o=f.arrow)!=null&&o.alignmentOffset?{}:{x:i+d.x,y:r+d.y,data:{...d,placement:s}}}}},Pe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:u=>{let{x:y,y:w}=u;return{x:y,y:w}}},...d}=Q(t,e),l={x:n,y:o},h=await Xt(e,d),c=nt(q(i)),p=It(c);let a=l[p],g=l[c];if(r){const u=p==="y"?"top":"left",y=p==="y"?"bottom":"right",w=a+h[u],x=a-h[y];a=pt(w,a,x)}if(s){const u=c==="y"?"top":"left",y=c==="y"?"bottom":"right",w=g+h[u],x=g-h[y];g=pt(w,g,x)}const m=f.fn({...e,[p]:a,[c]:g});return{...m,data:{x:m.x-n,y:m.y-o}}}}};function J(t){return jt(t)?(t.nodeName||"").toLowerCase():"#document"}function R(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(jt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jt(t){return t instanceof Node||t instanceof R(t).Node}function H(t){return t instanceof Element||t instanceof R(t).Element}function D(t){return t instanceof HTMLElement||t instanceof R(t).HTMLElement}function At(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof R(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Oe(t){return["table","td","th"].includes(J(t))}function xt(t){const e=vt(),n=O(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function $e(t){let e=_(t);for(;D(e)&&!K(e);){if(xt(e))return e;e=_(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function O(t){return R(t).getComputedStyle(t)}function ft(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||I(t);return At(e)?e.host:e}function Gt(t){const e=_(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:D(e)&&ot(e)?e:Gt(e)}function gt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Gt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=R(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?gt(s.frameElement):[]):e.concat(i,gt(i,[],n))}function Ut(t){const e=O(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=D(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,f=at(n)!==r||at(o)!==s;return f&&(n=r,o=s),{width:n,height:o,$:f}}function zt(t){return H(t)?t:t.contextElement}function U(t){const e=zt(t);if(!D(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Ut(e);let s=(r?at(n.width):n.width)/o,f=(r?at(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const He=V(0);function Kt(t){const e=R(t);return!vt()||!e.visualViewport?He:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function De(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==R(t)?!1:e}function et(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=zt(t);let s=V(1);e&&(o?H(o)&&(s=U(o)):s=U(t));const f=De(r,n,o)?Kt(r):V(0);let d=(i.left+f.x)/s.x,l=(i.top+f.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(r){const p=R(r),a=o&&H(o)?R(o):o;let g=p,m=g.frameElement;for(;m&&o&&a!==g;){const u=U(m),y=m.getBoundingClientRect(),w=O(m),x=y.left+(m.clientLeft+parseFloat(w.paddingLeft))*u.x,v=y.top+(m.clientTop+parseFloat(w.paddingTop))*u.y;d*=u.x,l*=u.y,h*=u.x,c*=u.y,d+=x,l+=v,g=R(m),m=g.frameElement}}return z({width:h,height:c,x:d,y:l})}const We=[":popover-open",":modal"];function bt(t){return We.some(e=>{try{return t.matches(e)}catch{return!1}})}function Be(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),f=e?bt(e.floating):!1;if(o===s||f&&r)return n;let d={scrollLeft:0,scrollTop:0},l=V(1);const h=V(0),c=D(o);if((c||!c&&!r)&&((J(o)!=="body"||ot(s))&&(d=ft(o)),D(o))){const p=et(o);l=U(o),h.x=p.x+o.clientLeft,h.y=p.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-d.scrollLeft*l.x+h.x,y:n.y*l.y-d.scrollTop*l.y+h.y}}function Me(t){return Array.from(t.getClientRects())}function Qt(t){return et(I(t)).left+ft(t).scrollLeft}function Ne(t){const e=I(t),n=ft(t),o=t.ownerDocument.body,i=B(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=B(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Qt(t);const f=-n.scrollTop;return O(o).direction==="rtl"&&(s+=B(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:f}}function Fe(t,e){const n=R(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,f=0,d=0;if(i){r=i.width,s=i.height;const l=vt();(!l||l&&e==="fixed")&&(f=i.offsetLeft,d=i.offsetTop)}return{width:r,height:s,x:f,y:d}}function Ve(t,e){const n=et(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=D(t)?U(t):V(1),s=t.clientWidth*r.x,f=t.clientHeight*r.y,d=i*r.x,l=o*r.y;return{width:s,height:f,x:d,y:l}}function Rt(t,e,n){let o;if(e==="viewport")o=Fe(t,n);else if(e==="document")o=Ne(I(t));else if(H(e))o=Ve(e,n);else{const i=Kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return z(o)}function Jt(t,e){const n=_(t);return n===e||!H(n)||K(n)?!1:O(n).position==="fixed"||Jt(n,e)}function qe(t,e){const n=e.get(t);if(n)return n;let o=gt(t,[],!1).filter(f=>H(f)&&J(f)!=="body"),i=null;const r=O(t).position==="fixed";let s=r?_(t):t;for(;H(s)&&!K(s);){const f=O(s),d=xt(s);!d&&f.position==="fixed"&&(i=null),(r?!d&&!i:!d&&f.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!d&&Jt(t,s))?o=o.filter(h=>h!==s):i=f,s=_(s)}return e.set(t,o),o}function _e(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?bt(e)?[]:qe(e,this._c):[].concat(n),o],f=s[0],d=s.reduce((l,h)=>{const c=Rt(e,h,i);return l.top=B(c.top,l.top),l.right=F(c.right,l.right),l.bottom=F(c.bottom,l.bottom),l.left=B(c.left,l.left),l},Rt(e,f,i));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Ie(t){const{width:e,height:n}=Ut(t);return{width:e,height:n}}function Xe(t,e,n){const o=D(e),i=I(e),r=n==="fixed",s=et(t,!0,r,e);let f={scrollLeft:0,scrollTop:0};const d=V(0);if(o||!o&&!r)if((J(e)!=="body"||ot(i))&&(f=ft(e)),o){const c=et(e,!0,r,e);d.x=c.x+e.clientLeft,d.y=c.y+e.clientTop}else i&&(d.x=Qt(i));const l=s.left+f.scrollLeft-d.x,h=s.top+f.scrollTop-d.y;return{x:l,y:h,width:s.width,height:s.height}}function dt(t){return O(t).position==="static"}function Ct(t,e){return!D(t)||O(t).position==="fixed"?null:e?e(t):t.offsetParent}function Zt(t,e){const n=R(t);if(bt(t))return n;if(!D(t)){let i=_(t);for(;i&&!K(i);){if(H(i)&&!dt(i))return i;i=_(i)}return n}let o=Ct(t,e);for(;o&&Oe(o)&&dt(o);)o=Ct(o,e);return o&&K(o)&&dt(o)&&!xt(o)?n:o||$e(t)||n}const Ye=async function(t){const e=this.getOffsetParent||Zt,n=this.getDimensions,o=await n(t.floating);return{reference:Xe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function je(t){return O(t).direction==="rtl"}const Ge={convertOffsetParentRelativeRectToViewportRelativeRect:Be,getDocumentElement:I,getClippingRect:_e,getOffsetParent:Zt,getElementRects:Ye,getClientRects:Me,getDimensions:Ie,getScale:U,isElement:H,isRTL:je},Ue=Ce,ze=Le,Ke=Pe,Qe=ke,Je=Ae,Ze=(t,e,n)=>{const o=new Map,i={platform:Ge,...n},r={...i.platform,_c:o};return Ee(t,e,{...i,platform:r})};let S,ut;const it=t=>t&&t+"px",tn=(t,e=window)=>{S||(S=e.document.createElement("div"),S.classList.add("wp-popup"),S.style.visibility="hidden",t.appendChild(S),ut=e.document.createElement("div"),ut.classList.add("wp-popup-arrow"));const n={};return{show:(s,f,{x:d,y:l})=>{S.innerHTML=s+ut.outerHTML;const h=S.querySelector(".wp-popup-arrow");Ze(f,S,{middleware:[Je({x:d,y:l}),Ke(),ze({allowedPlacements:["top","bottom"]}),Ue(10),Qe({element:h})]}).then(({x:c,y:p,middlewareData:a,placement:g})=>{if(S.style.top=it(p),S.style.left=it(c),a.arrow&&h){const{x:m,y:u}=a.arrow;h.style.left=m!==null?it(m):"",h.style.top=u!==null?it(u):"",g==="left"?(h.style.right="-8px",h.style.transform="rotate(90deg)"):g==="right"?(h.style.left="-8px",h.style.transform="rotate(-90deg)"):g==="top"?(h.style.bottom="-8px",h.style.transform="rotate(180deg)"):g==="bottom"&&(h.style.top="-8px")}S.currentTargetElement=f,S.style.visibility="visible",n.onShow&&n.onShow(S)})},hide:()=>{n.onHide&&n.onHide(S),S.style.visibility="hidden",S.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:S}};let P,te;const en=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),te=t.body.style.overflow,t.body.style.overflow="hidden"}},nn=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=te},on=(t,e=window)=>{P||(P=e.document.createElement("div"),P.classList.add("wp-touch-popup"),P.style.visibility="hidden",t.appendChild(P));const n={};return{show:s=>{P.innerHTML=s,P.style.visibility="visible",en(e.document),n.onShow&&n.onShow(P)},hide:()=>{n.onHide&&n.onHide(P),P.style.visibility="hidden",nn(e.document)},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:P}},tt=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},rn=(t,e,n)=>{_t(e,t,o=>{n(mt(e,o,A))})},Pt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Ot,j;function sn({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:f="detect"}){i=oe(i)||document.body;const d=n,l=A?on(i):tn(i),h=ge(l),c={},p=[],a=[];j=f;const g=(m,u=!1)=>{m.preventDefault();const y=Date.now(),{currentTarget:w}=u?c:m,x=u?c.title:decodeURIComponent(w.getAttribute("data-wp-title")||w.textContent),v=u?c.lang:w.getAttribute("data-wp-lang")||d,E=u?c.pointerPosition:{x:m.clientX,y:m.clientY},L=ce(v);l.element.currentTargetElement===w&&!u||(Ot=y,l.element.style.visibility==="visible"&&l.hide(),l.loading=!0,l.dir=L,l.show(fe(A,v,L,j),w,E),_t(v,x,k=>{if(y===Ot&&l.loading){if(l.loading=!1,k){if(l.lang=v,l.title=x,k.type==="standard")l.show(mt(v,k,A,j),w,E),tt(r,"onShow",[x,v,"standard"]);else if(k.type==="disambiguation"){const T=k.extractHtml?mt(v,k,A,j):de(A,v,k.title,k.dir,j);l.show(T,w,E),tt(r,"onShow",[x,v,"disambiguation"])}}else if(re())l.show(ue(A,v,x,L,j),w,E),tt(r,"onShow",[x,v,"error"]);else{l.show(me(A,v,L,j),w,E),tt(r,"onShow",[x,v,"offline"]);const T=document.querySelector(".wikipediapreview-body-action");c.lang=v,c.title=x,c.pointerPosition=E,c.target=w,T.addEventListener("click",b=>{g(b,!0)})}const X=l.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(X&&X.addEventListener("click",()=>{tt(r,"onWikiRead",[x,v])}),w.tagName==="A"){const T=se().split("="),b=new URL(w.href);b.searchParams.set(T[0],T[1]),w.href=b.href}}}))};l.subscribe(h),Pt(t,m=>{Array.prototype.forEach.call(m.querySelectorAll(e),u=>{A?u.addEventListener("click",g):u.addEventListener("mouseenter",g),p.push({text:u.textContent,title:u.getAttribute("data-wp-title")||u.textContent,lang:u.getAttribute("data-wp-lang")||d})})}),o&&Pt(t,m=>{Array.prototype.forEach.call(m.querySelectorAll("a"),u=>{const y=ie(u.getAttribute("href"));y&&(u.setAttribute("data-wp-title",y.title),u.setAttribute("data-wp-lang",y.lang),A?u.addEventListener("click",g):u.addEventListener("mouseenter",g),a.push({text:u.textContent,title:y.title,lang:y.lang}))})}),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${p.length}`),p.forEach((m,u)=>{console.log(u+1,`${m.text} -> ${lt(m.lang,m.title,A,!1)}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${a.length}`),a.forEach((m,u)=>{console.log(u+1,`${m.text} -> ${lt(m.lang,m.title,A,!1)}`)}),console.groupEnd()),console.groupEnd())}qt();const Et={init:sn,version:qt,getPreviewHtml:rn},fn={title:"Targets",argTypes:{lang:{name:"Language",control:"select",options:["en","fr","hi","ks","he","sv"]},title:{name:"Article Title",control:"text"}},args:{lang:"en",title:"Cat"}},rt=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<a href="${lt(t,e,!0,!1)}">${e} (${t})</a>`;return n.innerHTML=o,Et.init({root:n,detectLinks:!0}),n},st=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<a href="${lt(t,e,!0,!1)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`;return n.innerHTML=o,Et.init({root:n,detectLinks:!0}),n},ct=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${e}">${e} (${t})</span>`;return n.innerHTML=o,Et.init({root:n,lang:t}),n};var $t,Ht,Dt;rt.parameters={...rt.parameters,docs:{...($t=rt.parameters)==null?void 0:$t.docs,source:{originalSource:`({
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
}`,...(Dt=(Ht=rt.parameters)==null?void 0:Ht.docs)==null?void 0:Dt.source}}};var Wt,Bt,Mt;st.parameters={...st.parameters,docs:{...(Wt=st.parameters)==null?void 0:Wt.docs,source:{originalSource:`({
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
}`,...(Mt=(Bt=st.parameters)==null?void 0:Bt.docs)==null?void 0:Mt.source}}};var Nt,Ft,Vt;ct.parameters={...ct.parameters,docs:{...(Nt=ct.parameters)==null?void 0:Nt.docs,source:{originalSource:`({
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
}`,...(Vt=(Ft=ct.parameters)==null?void 0:Ft.docs)==null?void 0:Vt.source}}};const dn=["Hyperlink","Image","Text"];export{rt as Hyperlink,st as Image,ct as Text,dn as __namedExportsOrder,fn as default};
