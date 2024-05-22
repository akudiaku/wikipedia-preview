import{i as C,r as ne,v as Vt,a as Yt,b as lt,g as oe,c as ie,d as re,e as se}from"./fullscreen-DNcPYCB0.js";import{g as ce,r as mt,a as le,c as ae,b as fe,d as de}from"./preview-435YnPdH.js";const ue=t=>{let e=[],n=[];const o=(c,u)=>{const d=setTimeout(c,u);return n.push(d),d},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,u,d,a=void 0)=>{c.addEventListener(u,d,a),e.push([c,u,d,a])},s=()=>{e.forEach(c=>{const[u,d,a,h]=c;u.removeEventListener(d,a,h)}),e=[]},f=c=>{const u=c.toElement||c.relatedTarget||c.target,d=t.element.currentTargetElement;if(u!==d&&!t.element.contains(u)){const a=o(t.hide,300),h=()=>{clearTimeout(a)};r(t.element,"mouseenter",h)}},p=c=>{const u=t.element.querySelector(".wikipediapreview-body"),d=t.element.querySelector(".wikipediapreview-header"),a=t.element.querySelector(".wikipediapreview-footer-cta")||t.element.querySelector(".wikipediapreview-footer-loading");if(u)if(t.element.style[2]==="bottom"||t.element.style.bottom){const h=t.element.getBoundingClientRect().top,w=parseInt(window.getComputedStyle(u).maxHeight.slice(0,-2));u.style.maxHeight=Math.min(c,w+h)+"px"}else{const h=t.element.getBoundingClientRect().top,w=window.getComputedStyle(d).height.slice(0,-2),y=a?window.getComputedStyle(a).height.slice(0,-2):0,v=window.innerHeight-h-w-y;u.style.maxHeight=Math.min(c,v)+"px"}},l=()=>{const{lang:u,title:d}=t;t.element.component.wikipediapreview.classList.add("expanded"),C||p(496),!t.loading&&u&&d&&ne(u,d,a=>{const h=t.element.component.wikipediapreviewGallery;a&&a.length>0?h.appendChild(ce(a,t)):t.element.component.body.removeChild(h)})},g=c=>{let u,d,a,h;const w=c.querySelector(".wikipediapreview-header"),y=c.querySelector(".wikipediapreview-body"),v=E=>{u=E.touches[0].clientY,a=window.getComputedStyle(y),h=Number(a.height.slice(0,-2))},S=(E,R)=>{R&&E.preventDefault();const k=E.touches[0].clientY,b=u-k,L=h+b,D=!c.querySelector(".wikipediapreview.expanded")&&!R||R;y.style.transition="auto",d=k,D&&(y.style.maxHeight=L+"px")},T=E=>{const R=c.querySelector(".wikipediapreview.expanded"),k=u-d,b=Math.abs(k)>80,L=!R&&!E||E;y.style.transition="all 0.25s ease-in-out",k<0&&b&&L?t.hide():k>0&&b&&L&&!R?(y.style.maxHeight="70vh",l()):y.style.maxHeight=h+"px"};r(y,"touchstart",v),r(y,"touchmove",E=>{S(E,!1)}),r(y,"touchend",()=>T(!1)),r(w,"touchstart",v),r(w,"touchmove",E=>{S(E,!0)}),r(w,"touchend",()=>T(!0))};return{onHide:()=>{t.element.component.wikipediapreview.classList.remove("expanded"),t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewGallery:c.querySelector(".wikipediapreview-gallery"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),readMore:c.querySelector(".wikipediapreview-footer-cta-readmore"),content:c.querySelector(".wikipediapreview-body > p")},c.component.content&&c.component.content.getBoundingClientRect().height<248?l():C||p(248),C&&r(c.component.closeBtn,"click",t.hide),c.component.readMore&&r(c.component.readMore,"click",l),C){const u=document.querySelector(".wp-dark-screen");r(u,"click",t.hide,!0),g(c)}else r(c,"mouseleave",f),r(c.currentTargetElement,"mouseleave",f)},onExpand:l}},me=["top","right","bottom","left"],St=["start","end"],kt=me.reduce((t,e)=>t.concat(e,e+"-"+St[0],e+"-"+St[1]),[]),F=Math.min,q=Math.max,at=Math.round,V=t=>({x:t,y:t}),pe={left:"right",right:"left",bottom:"top",top:"bottom"},ge={start:"end",end:"start"};function pt(t,e,n){return q(t,F(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function N(t){return t.split("-")[1]}function _t(t){return t==="x"?"y":"x"}function ht(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(Y(t))?"y":"x"}function wt(t){return _t(nt(t))}function he(t,e,n){n===void 0&&(n=!1);const o=N(t),i=wt(t),r=ht(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Tt(s)),[s,Tt(s)]}function we(t){return t.replace(/start|end/g,e=>ge[e])}function Tt(t){return t.replace(/left|right|bottom|top/g,e=>pe[e])}function ye(t){return{top:0,right:0,bottom:0,left:0,...t}}function yt(t){return typeof t!="number"?ye(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Lt(t,e,n){let{reference:o,floating:i}=t;const r=nt(e),s=wt(e),f=ht(s),p=Y(e),l=r==="y",g=o.x+o.width/2-i.width/2,m=o.y+o.height/2-i.height/2,x=o[f]/2-i[f]/2;let c;switch(p){case"top":c={x:g,y:o.y-i.height};break;case"bottom":c={x:g,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:m};break;case"left":c={x:o.x-i.width,y:m};break;default:c={x:o.x,y:o.y}}switch(N(e)){case"start":c[s]-=x*(n&&l?-1:1);break;case"end":c[s]+=x*(n&&l?-1:1);break}return c}const xe=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,f=r.filter(Boolean),p=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:g,y:m}=Lt(l,o,p),x=o,c={},u=0;for(let d=0;d<f.length;d++){const{name:a,fn:h}=f[d],{x:w,y,data:v,reset:S}=await h({x:g,y:m,initialPlacement:o,placement:x,strategy:i,middlewareData:c,rects:l,platform:s,elements:{reference:t,floating:e}});g=w??g,m=y??m,c={...c,[a]:{...c[a],...v}},S&&u<=50&&(u++,typeof S=="object"&&(S.placement&&(x=S.placement),S.rects&&(l=S.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):S.rects),{x:g,y:m}=Lt(l,x,p)),d=-1)}return{x:g,y:m,placement:x,strategy:i,middlewareData:c}};async function It(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:f,strategy:p}=t,{boundary:l="clippingAncestors",rootBoundary:g="viewport",elementContext:m="floating",altBoundary:x=!1,padding:c=0}=Q(e,t),u=yt(c),a=f[x?m==="floating"?"reference":"floating":m],h=z(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(a)))==null||n?a:a.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(f.floating)),boundary:l,rootBoundary:g,strategy:p})),w=m==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f.floating)),v=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},S=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:y,strategy:p}):w);return{top:(h.top-S.top+u.top)/v.y,bottom:(S.bottom-h.bottom+u.bottom)/v.y,left:(h.left-S.left+u.left)/v.x,right:(S.right-h.right+u.right)/v.x}}const ve=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:f,middlewareData:p}=e,{element:l,padding:g=0}=Q(t,e)||{};if(l==null)return{};const m=yt(g),x={x:n,y:o},c=wt(i),u=ht(c),d=await s.getDimensions(l),a=c==="y",h=a?"top":"left",w=a?"bottom":"right",y=a?"clientHeight":"clientWidth",v=r.reference[u]+r.reference[c]-x[c]-r.floating[u],S=x[c]-r.reference[c],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let E=T?T[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement(T)))&&(E=f.floating[y]||r.floating[u]);const R=v/2-S/2,k=E/2-d[u]/2-1,b=F(m[h],k),L=F(m[w],k),$=b,D=E-d[u]-L,B=E/2-d[u]/2+R,X=pt($,B,D),U=!p.arrow&&N(i)!=null&&B!==X&&r.reference[u]/2-(B<$?b:L)-d[u]/2<0,Z=U?B<$?B-$:B-D:0;return{[c]:x[c]+Z,data:{[c]:X,centerOffset:B-X-Z,...U&&{alignmentOffset:Z}},reset:U}}});function be(t,e,n){return(t?[...n.filter(i=>N(i)===t),...n.filter(i=>N(i)!==t)]:n.filter(i=>Y(i)===i)).filter(i=>t?N(i)===t||(e?we(i)!==i:!1):!0)}const Ee=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:f,platform:p,elements:l}=e,{crossAxis:g=!1,alignment:m,allowedPlacements:x=kt,autoAlignment:c=!0,...u}=Q(t,e),d=m!==void 0||x===kt?be(m||null,c,x):x,a=await It(e,u),h=((n=s.autoPlacement)==null?void 0:n.index)||0,w=d[h];if(w==null)return{};const y=he(w,r,await(p.isRTL==null?void 0:p.isRTL(l.floating)));if(f!==w)return{reset:{placement:d[0]}};const v=[a[Y(w)],a[y[0]],a[y[1]]],S=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],T=d[h+1];if(T)return{data:{index:h+1,overflows:S},reset:{placement:T}};const E=S.map(b=>{const L=N(b.placement);return[b.placement,L&&g?b.overflows.slice(0,2).reduce(($,D)=>$+D,0):b.overflows[0],b.overflows]}).sort((b,L)=>b[1]-L[1]),k=((i=E.filter(b=>b[2].slice(0,N(b[0])?2:3).every(L=>L<=0))[0])==null?void 0:i[0])||E[0][0];return k!==f?{data:{index:h+1,overflows:S},reset:{placement:k}}:{}}}};function Xt(t){const e=F(...t.map(r=>r.left)),n=F(...t.map(r=>r.top)),o=q(...t.map(r=>r.right)),i=q(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function Se(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>z(Xt(i)))}const ke=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:f=2,x:p,y:l}=Q(t,e),g=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),m=Se(g),x=z(Xt(g)),c=yt(f);function u(){if(m.length===2&&m[0].left>m[1].right&&p!=null&&l!=null)return m.find(a=>p>a.left-c.left&&p<a.right+c.right&&l>a.top-c.top&&l<a.bottom+c.bottom)||x;if(m.length>=2){if(nt(n)==="y"){const b=m[0],L=m[m.length-1],$=Y(n)==="top",D=b.top,B=L.bottom,X=$?b.left:L.left,U=$?b.right:L.right,Z=U-X,ee=B-D;return{top:D,bottom:B,left:X,right:U,width:Z,height:ee,x:X,y:D}}const a=Y(n)==="left",h=q(...m.map(b=>b.right)),w=F(...m.map(b=>b.left)),y=m.filter(b=>a?b.left===w:b.right===h),v=y[0].top,S=y[y.length-1].bottom,T=w,E=h,R=E-T,k=S-v;return{top:v,bottom:S,left:T,right:E,width:R,height:k,x:T,y:v}}return x}const d=await r.getElementRects({reference:{getBoundingClientRect:u},floating:o.floating,strategy:s});return i.reference.x!==d.reference.x||i.reference.y!==d.reference.y||i.reference.width!==d.reference.width||i.reference.height!==d.reference.height?{reset:{rects:d}}:{}}}};async function Te(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Y(n),f=N(n),p=nt(n)==="y",l=["left","top"].includes(s)?-1:1,g=r&&p?-1:1,m=Q(e,t);let{mainAxis:x,crossAxis:c,alignmentAxis:u}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...m};return f&&typeof u=="number"&&(c=f==="end"?u*-1:u),p?{x:c*g,y:x*l}:{x:x*l,y:c*g}}const Le=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:f}=e,p=await Te(e,t);return s===((n=f.offset)==null?void 0:n.placement)&&(o=f.arrow)!=null&&o.alignmentOffset?{}:{x:i+p.x,y:r+p.y,data:{...p,placement:s}}}}},Ae=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:a=>{let{x:h,y:w}=a;return{x:h,y:w}}},...p}=Q(t,e),l={x:n,y:o},g=await It(e,p),m=nt(Y(i)),x=_t(m);let c=l[x],u=l[m];if(r){const a=x==="y"?"top":"left",h=x==="y"?"bottom":"right",w=c+g[a],y=c-g[h];c=pt(w,c,y)}if(s){const a=m==="y"?"top":"left",h=m==="y"?"bottom":"right",w=u+g[a],y=u-g[h];u=pt(w,u,y)}const d=f.fn({...e,[x]:c,[m]:u});return{...d,data:{x:d.x-n,y:d.y-o}}}}};function J(t){return jt(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(jt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function jt(t){return t instanceof Node||t instanceof P(t).Node}function M(t){return t instanceof Element||t instanceof P(t).Element}function W(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function At(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=H(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Ce(t){return["table","td","th"].includes(J(t))}function xt(t){const e=vt(),n=H(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Re(t){let e=_(t);for(;W(e)&&!K(e);){if(xt(e))return e;e=_(e)}return null}function vt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function H(t){return P(t).getComputedStyle(t)}function ft(t){return M(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||I(t);return At(e)?e.host:e}function Ut(t){const e=_(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:W(e)&&ot(e)?e:Ut(e)}function gt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ut(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=P(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?gt(s.frameElement):[]):e.concat(i,gt(i,[],n))}function Gt(t){const e=H(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=W(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,f=at(n)!==r||at(o)!==s;return f&&(n=r,o=s),{width:n,height:o,$:f}}function zt(t){return M(t)?t:t.contextElement}function G(t){const e=zt(t);if(!W(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Gt(e);let s=(r?at(n.width):n.width)/o,f=(r?at(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const Pe=V(0);function Kt(t){const e=P(t);return!vt()||!e.visualViewport?Pe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Oe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==P(t)?!1:e}function et(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=zt(t);let s=V(1);e&&(o?M(o)&&(s=G(o)):s=G(t));const f=Oe(r,n,o)?Kt(r):V(0);let p=(i.left+f.x)/s.x,l=(i.top+f.y)/s.y,g=i.width/s.x,m=i.height/s.y;if(r){const x=P(r),c=o&&M(o)?P(o):o;let u=x,d=u.frameElement;for(;d&&o&&c!==u;){const a=G(d),h=d.getBoundingClientRect(),w=H(d),y=h.left+(d.clientLeft+parseFloat(w.paddingLeft))*a.x,v=h.top+(d.clientTop+parseFloat(w.paddingTop))*a.y;p*=a.x,l*=a.y,g*=a.x,m*=a.y,p+=y,l+=v,u=P(d),d=u.frameElement}}return z({width:g,height:m,x:p,y:l})}const He=[":popover-open",":modal"];function bt(t){return He.some(e=>{try{return t.matches(e)}catch{return!1}})}function $e(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),f=e?bt(e.floating):!1;if(o===s||f&&r)return n;let p={scrollLeft:0,scrollTop:0},l=V(1);const g=V(0),m=W(o);if((m||!m&&!r)&&((J(o)!=="body"||ot(s))&&(p=ft(o)),W(o))){const x=et(o);l=G(o),g.x=x.x+o.clientLeft,g.y=x.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-p.scrollLeft*l.x+g.x,y:n.y*l.y-p.scrollTop*l.y+g.y}}function De(t){return Array.from(t.getClientRects())}function Qt(t){return et(I(t)).left+ft(t).scrollLeft}function Be(t){const e=I(t),n=ft(t),o=t.ownerDocument.body,i=q(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=q(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Qt(t);const f=-n.scrollTop;return H(o).direction==="rtl"&&(s+=q(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:f}}function Me(t,e){const n=P(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,f=0,p=0;if(i){r=i.width,s=i.height;const l=vt();(!l||l&&e==="fixed")&&(f=i.offsetLeft,p=i.offsetTop)}return{width:r,height:s,x:f,y:p}}function We(t,e){const n=et(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=W(t)?G(t):V(1),s=t.clientWidth*r.x,f=t.clientHeight*r.y,p=i*r.x,l=o*r.y;return{width:s,height:f,x:p,y:l}}function Ct(t,e,n){let o;if(e==="viewport")o=Me(t,n);else if(e==="document")o=Be(I(t));else if(M(e))o=We(e,n);else{const i=Kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return z(o)}function Jt(t,e){const n=_(t);return n===e||!M(n)||K(n)?!1:H(n).position==="fixed"||Jt(n,e)}function qe(t,e){const n=e.get(t);if(n)return n;let o=gt(t,[],!1).filter(f=>M(f)&&J(f)!=="body"),i=null;const r=H(t).position==="fixed";let s=r?_(t):t;for(;M(s)&&!K(s);){const f=H(s),p=xt(s);!p&&f.position==="fixed"&&(i=null),(r?!p&&!i:!p&&f.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!p&&Jt(t,s))?o=o.filter(g=>g!==s):i=f,s=_(s)}return e.set(t,o),o}function Ne(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?bt(e)?[]:qe(e,this._c):[].concat(n),o],f=s[0],p=s.reduce((l,g)=>{const m=Ct(e,g,i);return l.top=q(m.top,l.top),l.right=F(m.right,l.right),l.bottom=F(m.bottom,l.bottom),l.left=q(m.left,l.left),l},Ct(e,f,i));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}}function Fe(t){const{width:e,height:n}=Gt(t);return{width:e,height:n}}function Ve(t,e,n){const o=W(e),i=I(e),r=n==="fixed",s=et(t,!0,r,e);let f={scrollLeft:0,scrollTop:0};const p=V(0);if(o||!o&&!r)if((J(e)!=="body"||ot(i))&&(f=ft(e)),o){const m=et(e,!0,r,e);p.x=m.x+e.clientLeft,p.y=m.y+e.clientTop}else i&&(p.x=Qt(i));const l=s.left+f.scrollLeft-p.x,g=s.top+f.scrollTop-p.y;return{x:l,y:g,width:s.width,height:s.height}}function dt(t){return H(t).position==="static"}function Rt(t,e){return!W(t)||H(t).position==="fixed"?null:e?e(t):t.offsetParent}function Zt(t,e){const n=P(t);if(bt(t))return n;if(!W(t)){let i=_(t);for(;i&&!K(i);){if(M(i)&&!dt(i))return i;i=_(i)}return n}let o=Rt(t,e);for(;o&&Ce(o)&&dt(o);)o=Rt(o,e);return o&&K(o)&&dt(o)&&!xt(o)?n:o||Re(t)||n}const Ye=async function(t){const e=this.getOffsetParent||Zt,n=this.getDimensions,o=await n(t.floating);return{reference:Ve(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function _e(t){return H(t).direction==="rtl"}const Ie={convertOffsetParentRelativeRectToViewportRelativeRect:$e,getDocumentElement:I,getClippingRect:Ne,getOffsetParent:Zt,getElementRects:Ye,getClientRects:De,getDimensions:Fe,getScale:G,isElement:M,isRTL:_e},Xe=Le,je=Ee,Ue=Ae,Ge=ve,ze=ke,Ke=(t,e,n)=>{const o=new Map,i={platform:Ie,...n},r={...i.platform,_c:o};return xe(t,e,{...i,platform:r})};let A,ut;const it=t=>t&&t+"px",Qe=(t,e=window)=>{A||(A=e.document.createElement("div"),A.classList.add("wp-popup"),A.style.visibility="hidden",t.appendChild(A),ut=e.document.createElement("div"),ut.classList.add("wp-popup-arrow"));const n={};return{show:(s,f,{x:p,y:l})=>{A.innerHTML=s+ut.outerHTML;const g=A.querySelector(".wp-popup-arrow");Ke(f,A,{middleware:[ze({x:p,y:l}),Ue(),je(),Xe(10),Ge({element:g})]}).then(({x:m,y:x,middlewareData:c,placement:u})=>{if(A.style.top=it(x),A.style.left=it(m),c.arrow&&g){const{x:d,y:a}=c.arrow;g.style.left=d!==null?it(d):"",g.style.top=a!==null?it(a):"",u==="left"?(g.style.right="-8px",g.style.transform="rotate(90deg)"):u==="right"?(g.style.left="-8px",g.style.transform="rotate(-90deg)"):u==="top"?(g.style.bottom="-8px",g.style.transform="rotate(180deg)"):u==="bottom"&&(g.style.top="-8px")}A.currentTargetElement=f,A.style.visibility="visible",n.onShow&&n.onShow(A)})},hide:()=>{n.onHide&&n.onHide(A),A.style.visibility="hidden",A.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:A}};let O,te;const Je=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),te=t.body.style.overflow,t.body.style.overflow="hidden"}},Ze=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=te},tn=(t,e=window)=>{O||(O=e.document.createElement("div"),O.classList.add("wp-touch-popup"),O.style.visibility="hidden",t.appendChild(O));const n={};return{show:f=>{O.innerHTML=f,O.style.visibility="visible",Je(e.document),n.onShow&&n.onShow(O)},hide:()=>{n.onHide&&n.onHide(O),O.style.visibility="hidden",Ze(e.document)},expand:()=>{n.onExpand&&n.onExpand()},subscribe:(f={})=>{f.onShow&&(n.onShow=f.onShow),f.onHide&&(n.onHide=f.onHide),f.onExpand&&(n.onExpand=f.onExpand)},element:O}},tt=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},en=(t,e,n)=>{Yt(e,t,o=>{n(mt(e,o,C))})},Pt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Ot,j;function nn({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:f="detect"}){const p=n,l=C?tn(i):Qe(i),g=ue(l),m={},x=[],c=[];j=f;const u=(d,a=!1)=>{d.preventDefault();const h=Date.now(),{currentTarget:w}=a?m:d,y=a?m.title:decodeURIComponent(w.getAttribute("data-wp-title")||w.textContent),v=a?m.lang:w.getAttribute("data-wp-lang")||p,S=a?m.pointerPosition:{x:d.clientX,y:d.clientY},T=se(v);l.element.currentTargetElement===w&&!a||(Ot=h,l.element.style.visibility==="visible"&&l.hide(),l.loading=!0,l.dir=T,l.show(le(C,v,T,j),w,S),Yt(v,y,E=>{if(h===Ot&&l.loading){if(l.loading=!1,E){if(l.lang=v,l.title=y,E.type==="standard")l.show(mt(v,E,C,j),w,S),tt(r,"onShow",[y,v,"standard"]);else if(E.type==="disambiguation"){const k=E.extractHtml?mt(v,E,C,j):ae(C,v,E.title,E.dir,j);l.show(k,w,S),tt(r,"onShow",[y,v,"disambiguation"])}}else if(ie())l.show(fe(C,v,y,T,j),w,S),tt(r,"onShow",[y,v,"error"]);else{l.show(de(C,v,T,j),w,S),tt(r,"onShow",[y,v,"offline"]);const k=document.querySelector(".wikipediapreview-body-action");m.lang=v,m.title=y,m.pointerPosition=S,m.target=w,k.addEventListener("click",b=>{u(b,!0)})}const R=l.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(R&&R.addEventListener("click",()=>{tt(r,"onWikiRead",[y,v])}),w.tagName==="A"){const k=re().split("="),b=new URL(w.href);b.searchParams.set(k[0],k[1]),w.href=b.href}}}))};l.subscribe(g),Pt(t,d=>{Array.prototype.forEach.call(d.querySelectorAll(e),a=>{C?a.addEventListener("click",u):a.addEventListener("mouseenter",u),x.push({text:a.textContent,title:a.getAttribute("data-wp-title")||a.textContent,lang:a.getAttribute("data-wp-lang")||p})})}),o&&Pt(t,d=>{Array.prototype.forEach.call(d.querySelectorAll("a"),a=>{const h=oe(a.getAttribute("href"));h&&(a.setAttribute("data-wp-title",h.title),a.setAttribute("data-wp-lang",h.lang),C?a.addEventListener("click",u):a.addEventListener("mouseenter",u),c.push({text:a.textContent,title:h.title,lang:h.lang}))})}),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${x.length}`),x.forEach((d,a)=>{console.log(a+1,`${d.text} -> ${lt(d.lang,d.title,C,!1)}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${c.length}`),c.forEach((d,a)=>{console.log(a+1,`${d.text} -> ${lt(d.lang,d.title,C,!1)}`)}),console.groupEnd()),console.groupEnd())}Vt();const Et={init:nn,version:Vt,getPreviewHtml:en},sn={title:"Targets",argTypes:{lang:{name:"Language",control:"select",options:["en","fr","hi","ks","he","sv"]},title:{name:"Article Title",control:"text"}},args:{lang:"en",title:"Cat"}},rt=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<a href="${lt(t,e,!0,!1)}">${e} (${t})</a>`;return n.innerHTML=o,Et.init({root:n,detectLinks:!0}),n},st=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<a href="${lt(t,e,!0,!1)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`;return n.innerHTML=o,Et.init({root:n,detectLinks:!0}),n},ct=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${e}">${e} (${t})</span>`;return n.innerHTML=o,Et.init({root:n,lang:t}),n};var Ht,$t,Dt;rt.parameters={...rt.parameters,docs:{...(Ht=rt.parameters)==null?void 0:Ht.docs,source:{originalSource:`({
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
}`,...(Dt=($t=rt.parameters)==null?void 0:$t.docs)==null?void 0:Dt.source}}};var Bt,Mt,Wt;st.parameters={...st.parameters,docs:{...(Bt=st.parameters)==null?void 0:Bt.docs,source:{originalSource:`({
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
}`,...(Wt=(Mt=st.parameters)==null?void 0:Mt.docs)==null?void 0:Wt.source}}};var qt,Nt,Ft;ct.parameters={...ct.parameters,docs:{...(qt=ct.parameters)==null?void 0:qt.docs,source:{originalSource:`({
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
}`,...(Ft=(Nt=ct.parameters)==null?void 0:Nt.docs)==null?void 0:Ft.source}}};const cn=["Hyperlink","Image","Text"];export{rt as Hyperlink,st as Image,ct as Text,cn as __namedExportsOrder,sn as default};
