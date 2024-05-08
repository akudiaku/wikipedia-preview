import{i as C,r as ee,v as Vt,a as Ft,b as ct,g as ne,c as oe,d as ie,e as re}from"./fullscreen-SGDUggsZ.js";import{g as se,r as ut,a as ce,c as le,b as ae,d as fe}from"./preview-daswLtu4.js";const de=t=>{let e=[],n=[];const o=(c,f)=>{const u=setTimeout(c,f);return n.push(u),u},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,f,u,d=void 0)=>{c.addEventListener(f,u,d),e.push([c,f,u,d])},s=()=>{e.forEach(c=>{const[f,u,d,g]=c;f.removeEventListener(u,d,g)}),e=[]},l=c=>{const f=c.toElement||c.relatedTarget||c.target,u=t.element.currentTargetElement;if(f!==u&&!t.element.contains(f)){const d=o(t.hide,300),g=()=>{clearTimeout(d)};r(t.element,"mouseenter",g)}},m=c=>{const f=t.element.querySelector(".wikipediapreview-body"),u=t.element.querySelector(".wikipediapreview-header"),d=t.element.querySelector(".wikipediapreview-footer-cta")||t.element.querySelector(".wikipediapreview-footer-loading");if(f)if(t.element.style[2]==="bottom"||t.element.style.bottom){const g=t.element.getBoundingClientRect().top,w=parseInt(window.getComputedStyle(f).maxHeight.slice(0,-2));f.style.maxHeight=Math.min(c,w+g)+"px"}else{const g=t.element.getBoundingClientRect().top,w=window.getComputedStyle(u).height.slice(0,-2),y=d?window.getComputedStyle(d).height.slice(0,-2):0,v=window.innerHeight-g-w-y;f.style.maxHeight=Math.min(c,v)+"px"}},a=()=>{const{lang:f,title:u}=t;t.element.component.wikipediapreview.classList.add("expanded"),C||m(496),!t.loading&&f&&u&&ee(f,u,d=>{const g=t.element.component.wikipediapreviewGallery;d&&d.length>0?g.appendChild(se(d,t)):t.element.component.body.removeChild(g)})},h=c=>{let f,u,d,g;const w=c.querySelector(".wikipediapreview-header"),y=c.querySelector(".wikipediapreview-body"),v=E=>{f=E.touches[0].clientY,d=window.getComputedStyle(y),g=Number(d.height.slice(0,-2))},k=(E,R)=>{R&&E.preventDefault();const S=E.touches[0].clientY,b=f-S,A=g+b,D=!c.querySelector(".wikipediapreview.expanded")&&!R||R;y.style.transition="auto",u=S,D&&(y.style.maxHeight=A+"px")},T=E=>{const R=c.querySelector(".wikipediapreview.expanded"),S=f-u,b=Math.abs(S)>80,A=!R&&!E||E;y.style.transition="all 0.25s ease-in-out",S<0&&b&&A?t.hide():S>0&&b&&A&&!R?(y.style.maxHeight="70vh",a()):y.style.maxHeight=g+"px"};r(y,"touchstart",v),r(y,"touchmove",E=>{k(E,!1)}),r(y,"touchend",()=>T(!1)),r(w,"touchstart",v),r(w,"touchmove",E=>{k(E,!0)}),r(w,"touchend",()=>T(!0))};return{onHide:()=>{t.element.component.wikipediapreview.classList.remove("expanded"),t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewGallery:c.querySelector(".wikipediapreview-gallery"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),readMore:c.querySelector(".wikipediapreview-footer-cta-readmore"),content:c.querySelector(".wikipediapreview-body > p")},c.component.content&&c.component.content.getBoundingClientRect().height<248?a():C||m(248),C&&r(c.component.closeBtn,"click",t.hide),c.component.readMore&&r(c.component.readMore,"click",a),C){const f=document.querySelector(".wp-dark-screen");r(f,"click",t.hide,!0),h(c)}else r(c,"mouseleave",l),r(c.currentTargetElement,"mouseleave",l)},onExpand:a}},ue=["top","right","bottom","left"],bt=["start","end"],Et=ue.reduce((t,e)=>t.concat(e,e+"-"+bt[0],e+"-"+bt[1]),[]),U=Math.min,lt=Math.max,me={left:"right",right:"left",bottom:"top",top:"bottom"},pe={start:"end",end:"start"};function mt(t,e,n){return lt(t,U(e,n))}function K(t,e){return typeof t=="function"?t(e):t}function N(t){return t.split("-")[0]}function W(t){return t.split("-")[1]}function Yt(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function et(t){return["top","bottom"].includes(N(t))?"y":"x"}function ht(t){return Yt(et(t))}function ge(t,e,n){n===void 0&&(n=!1);const o=W(t),i=ht(t),r=gt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=kt(s)),[s,kt(s)]}function he(t){return t.replace(/start|end/g,e=>pe[e])}function kt(t){return t.replace(/left|right|bottom|top/g,e=>me[e])}function we(t){return{top:0,right:0,bottom:0,left:0,...t}}function wt(t){return typeof t!="number"?we(t):{top:t,right:t,bottom:t,left:t}}function G(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function St(t,e,n){let{reference:o,floating:i}=t;const r=et(e),s=ht(e),l=gt(s),m=N(e),a=r==="y",h=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,x=o[l]/2-i[l]/2;let c;switch(m){case"top":c={x:h,y:o.y-i.height};break;case"bottom":c={x:h,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:p};break;case"left":c={x:o.x-i.width,y:p};break;default:c={x:o.x,y:o.y}}switch(W(e)){case"start":c[s]-=x*(n&&a?-1:1);break;case"end":c[s]+=x*(n&&a?-1:1);break}return c}const ye=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),m=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=St(a,o,m),x=o,c={},f=0;for(let u=0;u<l.length;u++){const{name:d,fn:g}=l[u],{x:w,y,data:v,reset:k}=await g({x:h,y:p,initialPlacement:o,placement:x,strategy:i,middlewareData:c,rects:a,platform:s,elements:{reference:t,floating:e}});h=w??h,p=y??p,c={...c,[d]:{...c[d],...v}},k&&f<=50&&(f++,typeof k=="object"&&(k.placement&&(x=k.placement),k.rects&&(a=k.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):k.rects),{x:h,y:p}=St(a,x,m)),u=-1)}return{x:h,y:p,placement:x,strategy:i,middlewareData:c}};async function _t(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:m}=t,{boundary:a="clippingAncestors",rootBoundary:h="viewport",elementContext:p="floating",altBoundary:x=!1,padding:c=0}=K(e,t),f=wt(c),d=l[x?p==="floating"?"reference":"floating":p],g=G(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(d)))==null||n?d:d.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:a,rootBoundary:h,strategy:m})),w=p==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),v=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},k=G(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:y,strategy:m}):w);return{top:(g.top-k.top+f.top)/v.y,bottom:(k.bottom-g.bottom+f.bottom)/v.y,left:(g.left-k.left+f.left)/v.x,right:(k.right-g.right+f.right)/v.x}}const xe=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:l,middlewareData:m}=e,{element:a,padding:h=0}=K(t,e)||{};if(a==null)return{};const p=wt(h),x={x:n,y:o},c=ht(i),f=gt(c),u=await s.getDimensions(a),d=c==="y",g=d?"top":"left",w=d?"bottom":"right",y=d?"clientHeight":"clientWidth",v=r.reference[f]+r.reference[c]-x[c]-r.floating[f],k=x[c]-r.reference[c],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let E=T?T[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement(T)))&&(E=l.floating[y]||r.floating[f]);const R=v/2-k/2,S=E/2-u[f]/2-1,b=U(p[g],S),A=U(p[w],S),$=b,D=E-u[f]-A,B=E/2-u[f]/2+R,_=mt($,B,D),X=!m.arrow&&W(i)!=null&&B!==_&&r.reference[f]/2-(B<$?b:A)-u[f]/2<0,Q=X?B<$?B-$:B-D:0;return{[c]:x[c]+Q,data:{[c]:_,centerOffset:B-_-Q,...X&&{alignmentOffset:Q}},reset:X}}});function ve(t,e,n){return(t?[...n.filter(i=>W(i)===t),...n.filter(i=>W(i)!==t)]:n.filter(i=>N(i)===i)).filter(i=>t?W(i)===t||(e?he(i)!==i:!1):!0)}const be=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:l,platform:m,elements:a}=e,{crossAxis:h=!1,alignment:p,allowedPlacements:x=Et,autoAlignment:c=!0,...f}=K(t,e),u=p!==void 0||x===Et?ve(p||null,c,x):x,d=await _t(e,f),g=((n=s.autoPlacement)==null?void 0:n.index)||0,w=u[g];if(w==null)return{};const y=ge(w,r,await(m.isRTL==null?void 0:m.isRTL(a.floating)));if(l!==w)return{reset:{placement:u[0]}};const v=[d[N(w)],d[y[0]],d[y[1]]],k=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],T=u[g+1];if(T)return{data:{index:g+1,overflows:k},reset:{placement:T}};const E=k.map(b=>{const A=W(b.placement);return[b.placement,A&&h?b.overflows.slice(0,2).reduce(($,D)=>$+D,0):b.overflows[0],b.overflows]}).sort((b,A)=>b[1]-A[1]),S=((i=E.filter(b=>b[2].slice(0,W(b[0])?2:3).every(A=>A<=0))[0])==null?void 0:i[0])||E[0][0];return S!==l?{data:{index:g+1,overflows:k},reset:{placement:S}}:{}}}};function It(t){const e=U(...t.map(r=>r.left)),n=U(...t.map(r=>r.top)),o=lt(...t.map(r=>r.right)),i=lt(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function Ee(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>G(It(i)))}const ke=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:l=2,x:m,y:a}=K(t,e),h=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),p=Ee(h),x=G(It(h)),c=wt(l);function f(){if(p.length===2&&p[0].left>p[1].right&&m!=null&&a!=null)return p.find(d=>m>d.left-c.left&&m<d.right+c.right&&a>d.top-c.top&&a<d.bottom+c.bottom)||x;if(p.length>=2){if(et(n)==="y"){const b=p[0],A=p[p.length-1],$=N(n)==="top",D=b.top,B=A.bottom,_=$?b.left:A.left,X=$?b.right:A.right,Q=X-_,te=B-D;return{top:D,bottom:B,left:_,right:X,width:Q,height:te,x:_,y:D}}const d=N(n)==="left",g=lt(...p.map(b=>b.right)),w=U(...p.map(b=>b.left)),y=p.filter(b=>d?b.left===w:b.right===g),v=y[0].top,k=y[y.length-1].bottom,T=w,E=g,R=E-T,S=k-v;return{top:v,bottom:k,left:T,right:E,width:R,height:S,x:T,y:v}}return x}const u=await r.getElementRects({reference:{getBoundingClientRect:f},floating:o.floating,strategy:s});return i.reference.x!==u.reference.x||i.reference.y!==u.reference.y||i.reference.width!==u.reference.width||i.reference.height!==u.reference.height?{reset:{rects:u}}:{}}}};async function Se(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=N(n),l=W(n),m=et(n)==="y",a=["left","top"].includes(s)?-1:1,h=r&&m?-1:1,p=K(e,t);let{mainAxis:x,crossAxis:c,alignmentAxis:f}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof f=="number"&&(c=l==="end"?f*-1:f),m?{x:c*h,y:x*a}:{x:x*a,y:c*h}}const Te=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,m=await Se(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+m.x,y:r+m.y,data:{...m,placement:s}}}}},Ae=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:d=>{let{x:g,y:w}=d;return{x:g,y:w}}},...m}=K(t,e),a={x:n,y:o},h=await _t(e,m),p=et(N(i)),x=Yt(p);let c=a[x],f=a[p];if(r){const d=x==="y"?"top":"left",g=x==="y"?"bottom":"right",w=c+h[d],y=c-h[g];c=mt(w,c,y)}if(s){const d=p==="y"?"top":"left",g=p==="y"?"bottom":"right",w=f+h[d],y=f-h[g];f=mt(w,f,y)}const u=l.fn({...e,[x]:c,[p]:f});return{...u,data:{x:u.x-n,y:u.y-o}}}}},Tt=Math.min,Z=Math.max,at=Math.round,V=t=>({x:t,y:t});function F(t){return Xt(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Y(t){var e;return(e=(Xt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Xt(t){return t instanceof Node||t instanceof O(t).Node}function q(t){return t instanceof Element||t instanceof O(t).Element}function M(t){return t instanceof HTMLElement||t instanceof O(t).HTMLElement}function At(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function nt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Le(t){return["table","td","th"].includes(F(t))}function yt(t){const e=xt(),n=P(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Ce(t){let e=z(t);for(;M(e)&&!ft(e);){if(yt(e))return e;e=z(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ft(t){return["html","body","#document"].includes(F(t))}function P(t){return O(t).getComputedStyle(t)}function dt(t){return q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function z(t){if(F(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||Y(t);return At(e)?e.host:e}function jt(t){const e=z(t);return ft(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&nt(e)?e:jt(e)}function pt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=jt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=O(i);return r?e.concat(s,s.visualViewport||[],nt(i)?i:[],s.frameElement&&n?pt(s.frameElement):[]):e.concat(i,pt(i,[],n))}function Ut(t){const e=P(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=at(n)!==r||at(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function Gt(t){return q(t)?t:t.contextElement}function j(t){const e=Gt(t);if(!M(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Ut(e);let s=(r?at(n.width):n.width)/o,l=(r?at(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const Re=V(0);function zt(t){const e=O(t);return!xt()||!e.visualViewport?Re:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Oe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==O(t)?!1:e}function tt(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Gt(t);let s=V(1);e&&(o?q(o)&&(s=j(o)):s=j(t));const l=Oe(r,n,o)?zt(r):V(0);let m=(i.left+l.x)/s.x,a=(i.top+l.y)/s.y,h=i.width/s.x,p=i.height/s.y;if(r){const x=O(r),c=o&&q(o)?O(o):o;let f=x.frameElement;for(;f&&o&&c!==x;){const u=j(f),d=f.getBoundingClientRect(),g=P(f),w=d.left+(f.clientLeft+parseFloat(g.paddingLeft))*u.x,y=d.top+(f.clientTop+parseFloat(g.paddingTop))*u.y;m*=u.x,a*=u.y,h*=u.x,p*=u.y,m+=w,a+=y,f=O(f).frameElement}}return G({width:h,height:p,x:m,y:a})}function Pe(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=M(n),r=Y(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},l=V(1);const m=V(0);if((i||!i&&o!=="fixed")&&((F(n)!=="body"||nt(r))&&(s=dt(n)),M(n))){const a=tt(n);l=j(n),m.x=a.x+n.clientLeft,m.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+m.x,y:e.y*l.y-s.scrollTop*l.y+m.y}}function He(t){return Array.from(t.getClientRects())}function Kt(t){return tt(Y(t)).left+dt(t).scrollLeft}function $e(t){const e=Y(t),n=dt(t),o=t.ownerDocument.body,i=Z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=Z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Kt(t);const l=-n.scrollTop;return P(o).direction==="rtl"&&(s+=Z(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function De(t,e){const n=O(t),o=Y(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,m=0;if(i){r=i.width,s=i.height;const a=xt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,m=i.offsetTop)}return{width:r,height:s,x:l,y:m}}function Be(t,e){const n=tt(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=M(t)?j(t):V(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,m=i*r.x,a=o*r.y;return{width:s,height:l,x:m,y:a}}function Lt(t,e,n){let o;if(e==="viewport")o=De(t,n);else if(e==="document")o=$e(Y(t));else if(q(e))o=Be(e,n);else{const i=zt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return G(o)}function Qt(t,e){const n=z(t);return n===e||!q(n)||ft(n)?!1:P(n).position==="fixed"||Qt(n,e)}function Me(t,e){const n=e.get(t);if(n)return n;let o=pt(t,[],!1).filter(l=>q(l)&&F(l)!=="body"),i=null;const r=P(t).position==="fixed";let s=r?z(t):t;for(;q(s)&&!ft(s);){const l=P(s),m=yt(s);!m&&l.position==="fixed"&&(i=null),(r?!m&&!i:!m&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||nt(s)&&!m&&Qt(t,s))?o=o.filter(h=>h!==s):i=l,s=z(s)}return e.set(t,o),o}function We(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Me(e,this._c):[].concat(n),o],l=s[0],m=s.reduce((a,h)=>{const p=Lt(e,h,i);return a.top=Z(p.top,a.top),a.right=Tt(p.right,a.right),a.bottom=Tt(p.bottom,a.bottom),a.left=Z(p.left,a.left),a},Lt(e,l,i));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}}function qe(t){return Ut(t)}function Ne(t,e,n){const o=M(e),i=Y(e),r=n==="fixed",s=tt(t,!0,r,e);let l={scrollLeft:0,scrollTop:0};const m=V(0);if(o||!o&&!r)if((F(e)!=="body"||nt(i))&&(l=dt(e)),o){const a=tt(e,!0,r,e);m.x=a.x+e.clientLeft,m.y=a.y+e.clientTop}else i&&(m.x=Kt(i));return{x:s.left+l.scrollLeft-m.x,y:s.top+l.scrollTop-m.y,width:s.width,height:s.height}}function Ct(t,e){return!M(t)||P(t).position==="fixed"?null:e?e(t):t.offsetParent}function Jt(t,e){const n=O(t);if(!M(t))return n;let o=Ct(t,e);for(;o&&Le(o)&&P(o).position==="static";)o=Ct(o,e);return o&&(F(o)==="html"||F(o)==="body"&&P(o).position==="static"&&!yt(o))?n:o||Ce(t)||n}const Ve=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Jt,r=this.getDimensions;return{reference:Ne(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Fe(t){return P(t).direction==="rtl"}const Ye={convertOffsetParentRelativeRectToViewportRelativeRect:Pe,getDocumentElement:Y,getClippingRect:We,getOffsetParent:Jt,getElementRects:Ve,getClientRects:He,getDimensions:qe,getScale:j,isElement:q,isRTL:Fe},_e=(t,e,n)=>{const o=new Map,i={platform:Ye,...n},r={...i.platform,_c:o};return ye(t,e,{...i,platform:r})};let L;const ot=t=>t&&t+"px",Ie=(t,e=window)=>{L||(L=e.document.createElement("div"),L.classList.add("wp-popup"),L.style.visibility="hidden",t.appendChild(L));const n={};return{show:(s,l,{x:m,y:a})=>{L.innerHTML=s;const h=L.querySelector(".wikipediapreview-arrow");_e(l,L,{middleware:[ke({x:m,y:a}),Ae(),be(),Te(10),xe({element:h})]}).then(({x:p,y:x,middlewareData:c,placement:f})=>{if(L.style.top=ot(x),L.style.left=ot(p),c.arrow){const{x:u,y:d}=c.arrow;h.style.left=u!==null?ot(u):"",h.style.top=d!==null?ot(d):"",f==="left"?(h.style.right="-8px",h.style.transform="rotate(90deg)"):f==="right"?(h.style.left="-8px",h.style.transform="rotate(-90deg)"):f==="top"?(h.style.bottom="-8px",h.style.transform="rotate(180deg)"):f==="bottom"&&(h.style.top="-8px")}L.currentTargetElement=l,L.style.visibility="visible",n.onShow&&n.onShow(L)})},hide:()=>{n.onHide&&n.onHide(L),L.style.visibility="hidden",L.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:L}};let H,Zt;const Xe=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),Zt=t.body.style.overflow,t.body.style.overflow="hidden"}},je=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=Zt},Ue=(t,e=window)=>{H||(H=e.document.createElement("div"),H.classList.add("wp-touch-popup"),H.style.visibility="hidden",t.appendChild(H));const n={};return{show:l=>{H.innerHTML=l,H.style.visibility="visible",Xe(e.document),n.onShow&&n.onShow(H)},hide:()=>{n.onHide&&n.onHide(H),H.style.visibility="hidden",je(e.document)},expand:()=>{n.onExpand&&n.onExpand()},subscribe:(l={})=>{l.onShow&&(n.onShow=l.onShow),l.onHide&&(n.onHide=l.onHide),l.onExpand&&(n.onExpand=l.onExpand)},element:H}},J=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},Ge=(t,e,n)=>{Ft(e,t,o=>{n(ut(e,o,C))})},Rt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Ot,I;function ze({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:l="detect"}){const m=n,a=C?Ue(i):Ie(i),h=de(a),p={},x=[],c=[];I=l;const f=(u,d=!1)=>{u.preventDefault();const g=Date.now(),{currentTarget:w}=d?p:u,y=d?p.title:decodeURIComponent(w.getAttribute("data-wp-title")||w.textContent),v=d?p.lang:w.getAttribute("data-wp-lang")||m,k=d?p.pointerPosition:{x:u.clientX,y:u.clientY},T=re(v);a.element.currentTargetElement===w&&!d||(Ot=g,a.element.style.visibility==="visible"&&a.hide(),a.loading=!0,a.dir=T,a.show(ce(C,v,T,I),w,k),Ft(v,y,E=>{if(g===Ot&&a.loading){if(a.loading=!1,E){if(a.lang=v,a.title=y,E.type==="standard")a.show(ut(v,E,C,I),w,k),J(r,"onShow",[y,v,"standard"]);else if(E.type==="disambiguation"){const S=E.extractHtml?ut(v,E,C,I):le(C,v,E.title,E.dir,I);a.show(S,w,k),J(r,"onShow",[y,v,"disambiguation"])}}else if(oe())a.show(ae(C,v,y,T,I),w,k),J(r,"onShow",[y,v,"error"]);else{a.show(fe(C,v,T,I),w,k),J(r,"onShow",[y,v,"offline"]);const S=document.querySelector(".wikipediapreview-body-action");p.lang=v,p.title=y,p.pointerPosition=k,p.target=w,S.addEventListener("click",b=>{f(b,!0)})}const R=a.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(R&&R.addEventListener("click",()=>{J(r,"onWikiRead",[y,v])}),w.tagName==="A"){const S=ie().split("="),b=new URL(w.href);b.searchParams.set(S[0],S[1]),w.href=b.href}}}))};a.subscribe(h),Rt(t,u=>{Array.prototype.forEach.call(u.querySelectorAll(e),d=>{C?d.addEventListener("click",f):d.addEventListener("mouseenter",f),x.push({text:d.textContent,title:d.getAttribute("data-wp-title")||d.textContent,lang:d.getAttribute("data-wp-lang")||m})})}),o&&Rt(t,u=>{Array.prototype.forEach.call(u.querySelectorAll("a"),d=>{const g=ne(d.getAttribute("href"));g&&(d.setAttribute("data-wp-title",g.title),d.setAttribute("data-wp-lang",g.lang),C?d.addEventListener("click",f):d.addEventListener("mouseenter",f),c.push({text:d.textContent,title:g.title,lang:g.lang}))})}),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${x.length}`),x.forEach((u,d)=>{console.log(d+1,`${u.text} -> ${ct(u.lang,u.title,C,!1)}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${c.length}`),c.forEach((u,d)=>{console.log(d+1,`${u.text} -> ${ct(u.lang,u.title,C,!1)}`)}),console.groupEnd()),console.groupEnd())}Vt();const vt={init:ze,version:Vt,getPreviewHtml:Ge},Je={title:"Targets",argTypes:{lang:{name:"Language",control:"select",options:["en","fr","hi","ks","he","sv"]},title:{name:"Article Title",control:"text"}},args:{lang:"en",title:"Cat"}},it=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<a href="${ct(t,e,!0,!1)}">${e} (${t})</a>`;return n.innerHTML=o,vt.init({root:n,detectLinks:!0}),n},rt=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<a href="${ct(t,e,!0,!1)}"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Wikipedia-logo-v2.png"></a>`;return n.innerHTML=o,vt.init({root:n,detectLinks:!0}),n},st=({lang:t,title:e})=>{const n=document.createElement("div"),o=`<span class="wmf-wp-with-preview" data-wikipedia-preview data-wp-title="${e}">${e} (${t})</span>`;return n.innerHTML=o,vt.init({root:n,lang:t}),n};var Pt,Ht,$t;it.parameters={...it.parameters,docs:{...(Pt=it.parameters)==null?void 0:Pt.docs,source:{originalSource:`({
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
}`,...($t=(Ht=it.parameters)==null?void 0:Ht.docs)==null?void 0:$t.source}}};var Dt,Bt,Mt;rt.parameters={...rt.parameters,docs:{...(Dt=rt.parameters)==null?void 0:Dt.docs,source:{originalSource:`({
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
}`,...(Mt=(Bt=rt.parameters)==null?void 0:Bt.docs)==null?void 0:Mt.source}}};var Wt,qt,Nt;st.parameters={...st.parameters,docs:{...(Wt=st.parameters)==null?void 0:Wt.docs,source:{originalSource:`({
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
}`,...(Nt=(qt=st.parameters)==null?void 0:qt.docs)==null?void 0:Nt.source}}};const Ze=["Hyperlink","Image","Text"];export{it as Hyperlink,rt as Image,st as Text,Ze as __namedExportsOrder,Je as default};
