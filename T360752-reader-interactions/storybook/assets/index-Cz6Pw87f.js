import{s as It,r as Xt,g as Yt,a as Tt}from"./fullscreen-B2tvxVLj.js";import{h as L,v as Ct,j as jt,b as yt,k as Gt,i as Ut,g as zt,c as Kt}from"./utils-BV8WmoR9.js";import{r as at,a as Qt,c as Jt,b as Zt,d as te}from"./preview-qrwMhfhu.js";const ee=(t,e)=>{const n=document.createElement("div");return n.classList.add("wikipediapreview-gallery-row"),t.forEach(o=>{const i=document.createElement("div");i.classList.add("wikipediapreview-gallery-image"),i.style.backgroundImage=`url(${o.thumb})`,i.addEventListener("click",r=>{const s=r.target.style.backgroundImage.slice(4,-1).replace(/"/g,"");It(t,s,e.lang,e.dir)}),n.appendChild(i)}),n},ne=t=>{let e=[],n=[];const o=(c,p)=>{const a=setTimeout(c,p);return n.push(a),a},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,p,a,m=void 0)=>{c.addEventListener(p,a,m),e.push([c,p,a,m])},s=()=>{e.forEach(c=>{const[p,a,m,g]=c;p.removeEventListener(a,m,g)}),e=[]},f=()=>{const{lang:c,title:p}=t;!t.loading&&c&&p&&Xt(c,p,a=>{const m=t.element.component.wikipediapreviewGallery;a&&a.length>0?m.appendChild(ee(a,t)):t.element.component.body.removeChild(m)})},u=c=>{const p=c.toElement||c.relatedTarget||c.target,a=t.element.currentTargetElement;if(p!==a&&!t.element.contains(p)){const m=o(t.hide,300),g=()=>{clearTimeout(m)};r(t.element,"mouseenter",g)}};return{onHide:()=>{t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewGallery:c.querySelector(".wikipediapreview-gallery"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),content:c.querySelector(".wikipediapreview-body > p")},c.component.wikipediapreviewGallery&&c.component.wikipediapreviewGallery.children.length===0&&f(),L&&r(c.component.closeBtn,"click",t.hide),L){const p=document.querySelector(".wp-dark-screen");r(p,"click",t.hide,!0)}else r(c,"mouseleave",u),r(c.currentTargetElement,"mouseleave",u)}}},oe=["top","right","bottom","left"],xt=["start","end"],vt=oe.reduce((t,e)=>t.concat(e,e+"-"+xt[0],e+"-"+xt[1]),[]),M=Math.min,W=Math.max,rt=Math.round,V=t=>({x:t,y:t}),ie={left:"right",right:"left",bottom:"top",top:"bottom"},re={start:"end",end:"start"};function ft(t,e,n){return W(t,M(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function N(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(q(t))?"y":"x"}function gt(t){return Pt(nt(t))}function se(t,e,n){n===void 0&&(n=!1);const o=N(t),i=gt(t),r=dt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=bt(s)),[s,bt(s)]}function ce(t){return t.replace(/start|end/g,e=>re[e])}function bt(t){return t.replace(/left|right|bottom|top/g,e=>ie[e])}function le(t){return{top:0,right:0,bottom:0,left:0,...t}}function mt(t){return typeof t!="number"?le(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Et(t,e,n){let{reference:o,floating:i}=t;const r=nt(e),s=gt(e),f=dt(s),u=q(e),l=r==="y",h=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,p=o[f]/2-i[f]/2;let a;switch(u){case"top":a={x:h,y:o.y-i.height};break;case"bottom":a={x:h,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:c};break;case"left":a={x:o.x-i.width,y:c};break;default:a={x:o.x,y:o.y}}switch(N(e)){case"start":a[s]-=p*(n&&l?-1:1);break;case"end":a[s]+=p*(n&&l?-1:1);break}return a}const ae=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,f=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:c}=Et(l,o,u),p=o,a={},m=0;for(let g=0;g<f.length;g++){const{name:d,fn:y}=f[g],{x:w,y:x,data:v,reset:E}=await y({x:h,y:c,initialPlacement:o,placement:p,strategy:i,middlewareData:a,rects:l,platform:s,elements:{reference:t,floating:e}});h=w??h,c=x??c,a={...a,[d]:{...a[d],...v}},E&&m<=50&&(m++,typeof E=="object"&&(E.placement&&(p=E.placement),E.rects&&(l=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):E.rects),{x:h,y:c}=Et(l,p,u)),g=-1)}return{x:h,y:c,placement:p,strategy:i,middlewareData:a}};async function Ot(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:f,strategy:u}=t,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:c="floating",altBoundary:p=!1,padding:a=0}=Q(e,t),m=mt(a),d=f[p?c==="floating"?"reference":"floating":c],y=z(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(d)))==null||n?d:d.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(f.floating)),boundary:l,rootBoundary:h,strategy:u})),w=c==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f.floating)),v=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},E=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:x,strategy:u}):w);return{top:(y.top-E.top+m.top)/v.y,bottom:(E.bottom-y.bottom+m.bottom)/v.y,left:(y.left-E.left+m.left)/v.x,right:(E.right-y.right+m.right)/v.x}}const fe=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:f,middlewareData:u}=e,{element:l,padding:h=0}=Q(t,e)||{};if(l==null)return{};const c=mt(h),p={x:n,y:o},a=gt(i),m=dt(a),g=await s.getDimensions(l),d=a==="y",y=d?"top":"left",w=d?"bottom":"right",x=d?"clientHeight":"clientWidth",v=r.reference[m]+r.reference[a]-p[a]-r.floating[m],E=p[a]-r.reference[a],k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let S=k?k[x]:0;(!S||!await(s.isElement==null?void 0:s.isElement(k)))&&(S=f.floating[x]||r.floating[m]);const X=v/2-E/2,R=S/2-g[m]/2-1,b=M(c[y],R),C=M(c[w],R),B=b,F=S-g[m]-C,D=S/2-g[m]/2+X,Y=ft(B,D,F),G=!u.arrow&&N(i)!=null&&D!==Y&&r.reference[m]/2-(D<B?b:C)-g[m]/2<0,Z=G?D<B?D-B:D-F:0;return{[a]:p[a]+Z,data:{[a]:Y,centerOffset:D-Y-Z,...G&&{alignmentOffset:Z}},reset:G}}});function ue(t,e,n){return(t?[...n.filter(i=>N(i)===t),...n.filter(i=>N(i)!==t)]:n.filter(i=>q(i)===i)).filter(i=>t?N(i)===t||(e?ce(i)!==i:!1):!0)}const de=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:f,platform:u,elements:l}=e,{crossAxis:h=!1,alignment:c,allowedPlacements:p=vt,autoAlignment:a=!0,...m}=Q(t,e),g=c!==void 0||p===vt?ue(c||null,a,p):p,d=await Ot(e,m),y=((n=s.autoPlacement)==null?void 0:n.index)||0,w=g[y];if(w==null)return{};const x=se(w,r,await(u.isRTL==null?void 0:u.isRTL(l.floating)));if(f!==w)return{reset:{placement:g[0]}};const v=[d[q(w)],d[x[0]],d[x[1]]],E=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],k=g[y+1];if(k)return{data:{index:y+1,overflows:E},reset:{placement:k}};const S=E.map(b=>{const C=N(b.placement);return[b.placement,C&&h?b.overflows.slice(0,2).reduce((B,F)=>B+F,0):b.overflows[0],b.overflows]}).sort((b,C)=>b[1]-C[1]),R=((i=S.filter(b=>b[2].slice(0,N(b[0])?2:3).every(C=>C<=0))[0])==null?void 0:i[0])||S[0][0];return R!==f?{data:{index:y+1,overflows:E},reset:{placement:R}}:{}}}};function Dt(t){const e=M(...t.map(r=>r.left)),n=M(...t.map(r=>r.top)),o=W(...t.map(r=>r.right)),i=W(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function ge(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>z(Dt(i)))}const me=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:f=2,x:u,y:l}=Q(t,e),h=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),c=ge(h),p=z(Dt(h)),a=mt(f);function m(){if(c.length===2&&c[0].left>c[1].right&&u!=null&&l!=null)return c.find(d=>u>d.left-a.left&&u<d.right+a.right&&l>d.top-a.top&&l<d.bottom+a.bottom)||p;if(c.length>=2){if(nt(n)==="y"){const b=c[0],C=c[c.length-1],B=q(n)==="top",F=b.top,D=C.bottom,Y=B?b.left:C.left,G=B?b.right:C.right,Z=G-Y,_t=D-F;return{top:F,bottom:D,left:Y,right:G,width:Z,height:_t,x:Y,y:F}}const d=q(n)==="left",y=W(...c.map(b=>b.right)),w=M(...c.map(b=>b.left)),x=c.filter(b=>d?b.left===w:b.right===y),v=x[0].top,E=x[x.length-1].bottom,k=w,S=y,X=S-k,R=E-v;return{top:v,bottom:E,left:k,right:S,width:X,height:R,x:k,y:v}}return p}const g=await r.getElementRects({reference:{getBoundingClientRect:m},floating:o.floating,strategy:s});return i.reference.x!==g.reference.x||i.reference.y!==g.reference.y||i.reference.width!==g.reference.width||i.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}};async function he(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=q(n),f=N(n),u=nt(n)==="y",l=["left","top"].includes(s)?-1:1,h=r&&u?-1:1,c=Q(e,t);let{mainAxis:p,crossAxis:a,alignmentAxis:m}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...c};return f&&typeof m=="number"&&(a=f==="end"?m*-1:m),u?{x:a*h,y:p*l}:{x:p*l,y:a*h}}const pe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:f}=e,u=await he(e,t);return s===((n=f.offset)==null?void 0:n.placement)&&(o=f.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:s}}}}},we=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:d=>{let{x:y,y:w}=d;return{x:y,y:w}}},...u}=Q(t,e),l={x:n,y:o},h=await Ot(e,u),c=nt(q(i)),p=Pt(c);let a=l[p],m=l[c];if(r){const d=p==="y"?"top":"left",y=p==="y"?"bottom":"right",w=a+h[d],x=a-h[y];a=ft(w,a,x)}if(s){const d=c==="y"?"top":"left",y=c==="y"?"bottom":"right",w=m+h[d],x=m-h[y];m=ft(w,m,x)}const g=f.fn({...e,[p]:a,[c]:m});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function J(t){return Ht(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(Ht(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ht(t){return t instanceof Node||t instanceof T(t).Node}function H(t){return t instanceof Element||t instanceof T(t).Element}function $(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function St(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=O(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ye(t){return["table","td","th"].includes(J(t))}function ht(t){const e=pt(),n=O(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function xe(t){let e=_(t);for(;$(e)&&!K(e);){if(ht(e))return e;e=_(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function O(t){return T(t).getComputedStyle(t)}function st(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||St(t)&&t.host||I(t);return St(e)?e.host:e}function $t(t){const e=_(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:$(e)&&ot(e)?e:$t(e)}function ut(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$t(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=T(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?ut(s.frameElement):[]):e.concat(i,ut(i,[],n))}function Bt(t){const e=O(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=$(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,f=rt(n)!==r||rt(o)!==s;return f&&(n=r,o=s),{width:n,height:o,$:f}}function Wt(t){return H(t)?t:t.contextElement}function U(t){const e=Wt(t);if(!$(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Bt(e);let s=(r?rt(n.width):n.width)/o,f=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const ve=V(0);function Nt(t){const e=T(t);return!pt()||!e.visualViewport?ve:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function be(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function et(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Wt(t);let s=V(1);e&&(o?H(o)&&(s=U(o)):s=U(t));const f=be(r,n,o)?Nt(r):V(0);let u=(i.left+f.x)/s.x,l=(i.top+f.y)/s.y,h=i.width/s.x,c=i.height/s.y;if(r){const p=T(r),a=o&&H(o)?T(o):o;let m=p,g=m.frameElement;for(;g&&o&&a!==m;){const d=U(g),y=g.getBoundingClientRect(),w=O(g),x=y.left+(g.clientLeft+parseFloat(w.paddingLeft))*d.x,v=y.top+(g.clientTop+parseFloat(w.paddingTop))*d.y;u*=d.x,l*=d.y,h*=d.x,c*=d.y,u+=x,l+=v,m=T(g),g=m.frameElement}}return z({width:h,height:c,x:u,y:l})}const Ee=[":popover-open",":modal"];function wt(t){return Ee.some(e=>{try{return t.matches(e)}catch{return!1}})}function Se(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),f=e?wt(e.floating):!1;if(o===s||f&&r)return n;let u={scrollLeft:0,scrollTop:0},l=V(1);const h=V(0),c=$(o);if((c||!c&&!r)&&((J(o)!=="body"||ot(s))&&(u=st(o)),$(o))){const p=et(o);l=U(o),h.x=p.x+o.clientLeft,h.y=p.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-u.scrollLeft*l.x+h.x,y:n.y*l.y-u.scrollTop*l.y+h.y}}function Ae(t){return Array.from(t.getClientRects())}function Ft(t){return et(I(t)).left+st(t).scrollLeft}function ke(t){const e=I(t),n=st(t),o=t.ownerDocument.body,i=W(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=W(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Ft(t);const f=-n.scrollTop;return O(o).direction==="rtl"&&(s+=W(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:f}}function Re(t,e){const n=T(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,f=0,u=0;if(i){r=i.width,s=i.height;const l=pt();(!l||l&&e==="fixed")&&(f=i.offsetLeft,u=i.offsetTop)}return{width:r,height:s,x:f,y:u}}function Le(t,e){const n=et(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=$(t)?U(t):V(1),s=t.clientWidth*r.x,f=t.clientHeight*r.y,u=i*r.x,l=o*r.y;return{width:s,height:f,x:u,y:l}}function At(t,e,n){let o;if(e==="viewport")o=Re(t,n);else if(e==="document")o=ke(I(t));else if(H(e))o=Le(e,n);else{const i=Nt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return z(o)}function Mt(t,e){const n=_(t);return n===e||!H(n)||K(n)?!1:O(n).position==="fixed"||Mt(n,e)}function Te(t,e){const n=e.get(t);if(n)return n;let o=ut(t,[],!1).filter(f=>H(f)&&J(f)!=="body"),i=null;const r=O(t).position==="fixed";let s=r?_(t):t;for(;H(s)&&!K(s);){const f=O(s),u=ht(s);!u&&f.position==="fixed"&&(i=null),(r?!u&&!i:!u&&f.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!u&&Mt(t,s))?o=o.filter(h=>h!==s):i=f,s=_(s)}return e.set(t,o),o}function Ce(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?wt(e)?[]:Te(e,this._c):[].concat(n),o],f=s[0],u=s.reduce((l,h)=>{const c=At(e,h,i);return l.top=W(c.top,l.top),l.right=M(c.right,l.right),l.bottom=M(c.bottom,l.bottom),l.left=W(c.left,l.left),l},At(e,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Pe(t){const{width:e,height:n}=Bt(t);return{width:e,height:n}}function Oe(t,e,n){const o=$(e),i=I(e),r=n==="fixed",s=et(t,!0,r,e);let f={scrollLeft:0,scrollTop:0};const u=V(0);if(o||!o&&!r)if((J(e)!=="body"||ot(i))&&(f=st(e)),o){const c=et(e,!0,r,e);u.x=c.x+e.clientLeft,u.y=c.y+e.clientTop}else i&&(u.x=Ft(i));const l=s.left+f.scrollLeft-u.x,h=s.top+f.scrollTop-u.y;return{x:l,y:h,width:s.width,height:s.height}}function ct(t){return O(t).position==="static"}function kt(t,e){return!$(t)||O(t).position==="fixed"?null:e?e(t):t.offsetParent}function Vt(t,e){const n=T(t);if(wt(t))return n;if(!$(t)){let i=_(t);for(;i&&!K(i);){if(H(i)&&!ct(i))return i;i=_(i)}return n}let o=kt(t,e);for(;o&&ye(o)&&ct(o);)o=kt(o,e);return o&&K(o)&&ct(o)&&!ht(o)?n:o||xe(t)||n}const De=async function(t){const e=this.getOffsetParent||Vt,n=this.getDimensions,o=await n(t.floating);return{reference:Oe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function He(t){return O(t).direction==="rtl"}const $e={convertOffsetParentRelativeRectToViewportRelativeRect:Se,getDocumentElement:I,getClippingRect:Ce,getOffsetParent:Vt,getElementRects:De,getClientRects:Ae,getDimensions:Pe,getScale:U,isElement:H,isRTL:He},Be=pe,We=de,Ne=we,Fe=fe,Me=me,Ve=(t,e,n)=>{const o=new Map,i={platform:$e,...n},r={...i.platform,_c:o};return ae(t,e,{...i,platform:r})};let A,lt;const it=t=>t&&t+"px",qe=(t,e=window)=>{A||(A=e.document.createElement("div"),A.classList.add("wp-popup"),A.style.visibility="hidden",t.appendChild(A),lt=e.document.createElement("div"),lt.classList.add("wp-popup-arrow"));const n={};return{show:(s,f,{x:u,y:l})=>{A.innerHTML=s+lt.outerHTML;const h=A.querySelector(".wp-popup-arrow");Ve(f,A,{middleware:[Me({x:u,y:l}),Ne(),We({allowedPlacements:["top","bottom"]}),Be(10),Fe({element:h})]}).then(({x:c,y:p,middlewareData:a,placement:m})=>{if(A.style.top=it(p),A.style.left=it(c),a.arrow&&h){const{x:g,y:d}=a.arrow;h.style.left=g!==null?it(g):"",h.style.top=d!==null?it(d):"",m==="left"?(h.style.right="-8px",h.style.transform="rotate(90deg)"):m==="right"?(h.style.left="-8px",h.style.transform="rotate(-90deg)"):m==="top"?(h.style.bottom="-8px",h.style.transform="rotate(180deg)"):m==="bottom"&&(h.style.top="-8px")}A.currentTargetElement=f,A.style.visibility="visible",n.onShow&&n.onShow(A)})},hide:()=>{n.onHide&&n.onHide(A),A.style.visibility="hidden",A.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:A}};let P,qt;const _e=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),qt=t.body.style.overflow,t.body.style.overflow="hidden"}},Ie=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=qt},Xe=(t,e=window)=>{P||(P=e.document.createElement("div"),P.classList.add("wp-touch-popup"),P.style.visibility="hidden",t.appendChild(P));const n={};return{show:s=>{P.innerHTML=s,P.style.visibility="visible",_e(e.document),n.onShow&&n.onShow(P)},hide:()=>{n.onHide&&n.onHide(P),P.style.visibility="hidden",Ie(e.document)},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:P}},tt=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},Ye=(t,e,n)=>{Tt(e,t,o=>{n(at(e,o,L))})},Rt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Lt,j;function je({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:f="detect"}){i=jt(i)||document.body;const u=n,l=L?Xe(i):qe(i),h=ne(l),c={},p=[],a=[];j=f;const m=(g,d=!1)=>{g.preventDefault();const y=Date.now(),{currentTarget:w}=d?c:g,x=d?c.title:decodeURIComponent(w.getAttribute("data-wp-title")||w.textContent),v=d?c.lang:w.getAttribute("data-wp-lang")||u,E=d?c.pointerPosition:{x:g.clientX,y:g.clientY},k=Kt(v);l.element.currentTargetElement===w&&!d||(Lt=y,l.element.style.visibility==="visible"&&l.hide(),l.loading=!0,l.dir=k,l.show(Qt(L,v,k,j),w,E),Tt(v,x,S=>{if(y===Lt&&l.loading){if(l.loading=!1,S){if(l.lang=v,l.title=x,S.type==="standard")l.show(at(v,S,L,j),w,E),tt(r,"onShow",[x,v,"standard"]);else if(S.type==="disambiguation"){const R=S.extractHtml?at(v,S,L,j):Jt(L,v,S.title,S.dir,j);l.show(R,w,E),tt(r,"onShow",[x,v,"disambiguation"])}}else if(Ut())l.show(Zt(L,v,x,k,j),w,E),tt(r,"onShow",[x,v,"error"]);else{l.show(te(L,v,k,j),w,E),tt(r,"onShow",[x,v,"offline"]);const R=document.querySelector(".wikipediapreview-body-action");c.lang=v,c.title=x,c.pointerPosition=E,c.target=w,R.addEventListener("click",b=>{m(b,!0)})}const X=l.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(X&&X.addEventListener("click",()=>{tt(r,"onWikiRead",[x,v])}),w.tagName==="A"){const R=zt().split("="),b=new URL(w.href);b.searchParams.set(R[0],R[1]),w.href=b.href}}}))};l.subscribe(h),Rt(t,g=>{Array.prototype.forEach.call(g.querySelectorAll(e),d=>{L?d.addEventListener("click",m):d.addEventListener("mouseenter",m),p.push({text:d.textContent,title:d.getAttribute("data-wp-title")||d.textContent,lang:d.getAttribute("data-wp-lang")||u})})}),o&&Rt(t,g=>{Array.prototype.forEach.call(g.querySelectorAll("a"),d=>{const y=Gt(d.getAttribute("href"));y&&(d.setAttribute("data-wp-title",y.title),d.setAttribute("data-wp-lang",y.lang),L?d.addEventListener("click",m):d.addEventListener("mouseenter",m),a.push({text:d.textContent,title:y.title,lang:y.lang}))})}),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${p.length}`),p.forEach((g,d)=>{console.log(d+1,`${g.text} -> ${decodeURI(yt(g.lang,g.title,L,!1))}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${a.length}`),a.forEach((g,d)=>{console.log(d+1,`${g.text} -> ${decodeURI(yt(g.lang,g.title,L,!1))}`)}),console.groupEnd()),console.groupEnd())}Ct();const Ke={init:je,version:Ct,getPreviewHtml:Ye,getSections:Yt};export{Ke as w};
