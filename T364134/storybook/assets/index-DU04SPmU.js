import{i as C,r as _t,v as Ct,g as It,a as Lt,c as Xt,b as yt,d as jt,e as Ut,f as Gt,h as zt}from"./fullscreen-z7xWpQo0.js";import{g as Kt,r as at,a as Qt,c as Jt,b as Zt,d as te}from"./preview-1lz3ONdN.js";const ee=t=>{let e=[],n=[];const o=(c,u)=>{const d=setTimeout(c,u);return n.push(d),d},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,u,d,a=void 0)=>{c.addEventListener(u,d,a),e.push([c,u,d,a])},s=()=>{e.forEach(c=>{const[u,d,a,p]=c;u.removeEventListener(d,a,p)}),e=[]},f=c=>{const u=c.toElement||c.relatedTarget||c.target,d=t.element.currentTargetElement;if(u!==d&&!t.element.contains(u)){const a=o(t.hide,300),p=()=>{clearTimeout(a)};r(t.element,"mouseenter",p)}},g=c=>{const u=t.element.querySelector(".wikipediapreview-body"),d=t.element.querySelector(".wikipediapreview-header"),a=t.element.querySelector(".wikipediapreview-footer-cta")||t.element.querySelector(".wikipediapreview-footer-loading");if(u)if(t.element.style[2]==="bottom"||t.element.style.bottom){const p=t.element.getBoundingClientRect().top,w=parseInt(window.getComputedStyle(u).maxHeight.slice(0,-2));u.style.maxHeight=Math.min(c,w+p)+"px"}else{const p=t.element.getBoundingClientRect().top,w=window.getComputedStyle(d).height.slice(0,-2),y=a?window.getComputedStyle(a).height.slice(0,-2):0,v=window.innerHeight-p-w-y;u.style.maxHeight=Math.min(c,v)+"px"}},l=()=>{const{lang:u,title:d}=t;t.element.component.wikipediapreview.classList.add("expanded"),C||g(496),!t.loading&&u&&d&&_t(u,d,a=>{const p=t.element.component.wikipediapreviewGallery;a&&a.length>0?p.appendChild(Kt(a,t)):t.element.component.body.removeChild(p)})},m=c=>{let u,d,a,p;const w=c.querySelector(".wikipediapreview-header"),y=c.querySelector(".wikipediapreview-body"),v=E=>{u=E.touches[0].clientY,a=window.getComputedStyle(y),p=Number(a.height.slice(0,-2))},S=(E,L)=>{L&&E.preventDefault();const k=E.touches[0].clientY,b=u-k,R=p+b,B=!c.querySelector(".wikipediapreview.expanded")&&!L||L;y.style.transition="auto",d=k,B&&(y.style.maxHeight=R+"px")},A=E=>{const L=c.querySelector(".wikipediapreview.expanded"),k=u-d,b=Math.abs(k)>80,R=!L&&!E||E;y.style.transition="all 0.25s ease-in-out",k<0&&b&&R?t.hide():k>0&&b&&R&&!L?(y.style.maxHeight="70vh",l()):y.style.maxHeight=p+"px"};r(y,"touchstart",v),r(y,"touchmove",E=>{S(E,!1)}),r(y,"touchend",()=>A(!1)),r(w,"touchstart",v),r(w,"touchmove",E=>{S(E,!0)}),r(w,"touchend",()=>A(!0))};return{onHide:()=>{t.element.component.wikipediapreview.classList.remove("expanded"),t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewGallery:c.querySelector(".wikipediapreview-gallery"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),readMore:c.querySelector(".wikipediapreview-footer-cta-readmore"),content:c.querySelector(".wikipediapreview-body > p")},c.component.content&&c.component.content.getBoundingClientRect().height<248?l():C||g(248),C&&r(c.component.closeBtn,"click",t.hide),c.component.readMore&&r(c.component.readMore,"click",l),C){const u=document.querySelector(".wp-dark-screen");r(u,"click",t.hide,!0),m(c)}else r(c,"mouseleave",f),r(c.currentTargetElement,"mouseleave",f)},onExpand:l}},ne=["top","right","bottom","left"],xt=["start","end"],vt=ne.reduce((t,e)=>t.concat(e,e+"-"+xt[0],e+"-"+xt[1]),[]),F=Math.min,N=Math.max,rt=Math.round,V=t=>({x:t,y:t}),oe={left:"right",right:"left",bottom:"top",top:"bottom"},ie={start:"end",end:"start"};function ft(t,e,n){return N(t,F(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function W(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function ut(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(Y(t))?"y":"x"}function ht(t){return Pt(nt(t))}function re(t,e,n){n===void 0&&(n=!1);const o=W(t),i=ht(t),r=ut(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=bt(s)),[s,bt(s)]}function se(t){return t.replace(/start|end/g,e=>ie[e])}function bt(t){return t.replace(/left|right|bottom|top/g,e=>oe[e])}function ce(t){return{top:0,right:0,bottom:0,left:0,...t}}function gt(t){return typeof t!="number"?ce(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Et(t,e,n){let{reference:o,floating:i}=t;const r=nt(e),s=ht(e),f=ut(s),g=Y(e),l=r==="y",m=o.x+o.width/2-i.width/2,h=o.y+o.height/2-i.height/2,x=o[f]/2-i[f]/2;let c;switch(g){case"top":c={x:m,y:o.y-i.height};break;case"bottom":c={x:m,y:o.y+o.height};break;case"right":c={x:o.x+o.width,y:h};break;case"left":c={x:o.x-i.width,y:h};break;default:c={x:o.x,y:o.y}}switch(W(e)){case"start":c[s]-=x*(n&&l?-1:1);break;case"end":c[s]+=x*(n&&l?-1:1);break}return c}const le=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,f=r.filter(Boolean),g=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:h}=Et(l,o,g),x=o,c={},u=0;for(let d=0;d<f.length;d++){const{name:a,fn:p}=f[d],{x:w,y,data:v,reset:S}=await p({x:m,y:h,initialPlacement:o,placement:x,strategy:i,middlewareData:c,rects:l,platform:s,elements:{reference:t,floating:e}});m=w??m,h=y??h,c={...c,[a]:{...c[a],...v}},S&&u<=50&&(u++,typeof S=="object"&&(S.placement&&(x=S.placement),S.rects&&(l=S.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):S.rects),{x:m,y:h}=Et(l,x,g)),d=-1)}return{x:m,y:h,placement:x,strategy:i,middlewareData:c}};async function Ot(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:f,strategy:g}=t,{boundary:l="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:x=!1,padding:c=0}=Q(e,t),u=gt(c),a=f[x?h==="floating"?"reference":"floating":h],p=z(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(a)))==null||n?a:a.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(f.floating)),boundary:l,rootBoundary:m,strategy:g})),w=h==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f.floating)),v=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},S=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:y,strategy:g}):w);return{top:(p.top-S.top+u.top)/v.y,bottom:(S.bottom-p.bottom+u.bottom)/v.y,left:(p.left-S.left+u.left)/v.x,right:(S.right-p.right+u.right)/v.x}}const ae=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:f,middlewareData:g}=e,{element:l,padding:m=0}=Q(t,e)||{};if(l==null)return{};const h=gt(m),x={x:n,y:o},c=ht(i),u=ut(c),d=await s.getDimensions(l),a=c==="y",p=a?"top":"left",w=a?"bottom":"right",y=a?"clientHeight":"clientWidth",v=r.reference[u]+r.reference[c]-x[c]-r.floating[u],S=x[c]-r.reference[c],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let E=A?A[y]:0;(!E||!await(s.isElement==null?void 0:s.isElement(A)))&&(E=f.floating[y]||r.floating[u]);const L=v/2-S/2,k=E/2-d[u]/2-1,b=F(h[p],k),R=F(h[w],k),D=b,B=E-d[u]-R,M=E/2-d[u]/2+L,X=ft(D,M,B),U=!g.arrow&&W(i)!=null&&M!==X&&r.reference[u]/2-(M<D?b:R)-d[u]/2<0,Z=U?M<D?M-D:M-B:0;return{[c]:x[c]+Z,data:{[c]:X,centerOffset:M-X-Z,...U&&{alignmentOffset:Z}},reset:U}}});function fe(t,e,n){return(t?[...n.filter(i=>W(i)===t),...n.filter(i=>W(i)!==t)]:n.filter(i=>Y(i)===i)).filter(i=>t?W(i)===t||(e?se(i)!==i:!1):!0)}const de=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:f,platform:g,elements:l}=e,{crossAxis:m=!1,alignment:h,allowedPlacements:x=vt,autoAlignment:c=!0,...u}=Q(t,e),d=h!==void 0||x===vt?fe(h||null,c,x):x,a=await Ot(e,u),p=((n=s.autoPlacement)==null?void 0:n.index)||0,w=d[p];if(w==null)return{};const y=re(w,r,await(g.isRTL==null?void 0:g.isRTL(l.floating)));if(f!==w)return{reset:{placement:d[0]}};const v=[a[Y(w)],a[y[0]],a[y[1]]],S=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],A=d[p+1];if(A)return{data:{index:p+1,overflows:S},reset:{placement:A}};const E=S.map(b=>{const R=W(b.placement);return[b.placement,R&&m?b.overflows.slice(0,2).reduce((D,B)=>D+B,0):b.overflows[0],b.overflows]}).sort((b,R)=>b[1]-R[1]),k=((i=E.filter(b=>b[2].slice(0,W(b[0])?2:3).every(R=>R<=0))[0])==null?void 0:i[0])||E[0][0];return k!==f?{data:{index:p+1,overflows:S},reset:{placement:k}}:{}}}};function Ht(t){const e=F(...t.map(r=>r.left)),n=F(...t.map(r=>r.top)),o=N(...t.map(r=>r.right)),i=N(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function ue(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>z(Ht(i)))}const he=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:f=2,x:g,y:l}=Q(t,e),m=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),h=ue(m),x=z(Ht(m)),c=gt(f);function u(){if(h.length===2&&h[0].left>h[1].right&&g!=null&&l!=null)return h.find(a=>g>a.left-c.left&&g<a.right+c.right&&l>a.top-c.top&&l<a.bottom+c.bottom)||x;if(h.length>=2){if(nt(n)==="y"){const b=h[0],R=h[h.length-1],D=Y(n)==="top",B=b.top,M=R.bottom,X=D?b.left:R.left,U=D?b.right:R.right,Z=U-X,Yt=M-B;return{top:B,bottom:M,left:X,right:U,width:Z,height:Yt,x:X,y:B}}const a=Y(n)==="left",p=N(...h.map(b=>b.right)),w=F(...h.map(b=>b.left)),y=h.filter(b=>a?b.left===w:b.right===p),v=y[0].top,S=y[y.length-1].bottom,A=w,E=p,L=E-A,k=S-v;return{top:v,bottom:S,left:A,right:E,width:L,height:k,x:A,y:v}}return x}const d=await r.getElementRects({reference:{getBoundingClientRect:u},floating:o.floating,strategy:s});return i.reference.x!==d.reference.x||i.reference.y!==d.reference.y||i.reference.width!==d.reference.width||i.reference.height!==d.reference.height?{reset:{rects:d}}:{}}}};async function ge(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=Y(n),f=W(n),g=nt(n)==="y",l=["left","top"].includes(s)?-1:1,m=r&&g?-1:1,h=Q(e,t);let{mainAxis:x,crossAxis:c,alignmentAxis:u}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return f&&typeof u=="number"&&(c=f==="end"?u*-1:u),g?{x:c*m,y:x*l}:{x:x*l,y:c*m}}const me=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:f}=e,g=await ge(e,t);return s===((n=f.offset)==null?void 0:n.placement)&&(o=f.arrow)!=null&&o.alignmentOffset?{}:{x:i+g.x,y:r+g.y,data:{...g,placement:s}}}}},pe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:a=>{let{x:p,y:w}=a;return{x:p,y:w}}},...g}=Q(t,e),l={x:n,y:o},m=await Ot(e,g),h=nt(Y(i)),x=Pt(h);let c=l[x],u=l[h];if(r){const a=x==="y"?"top":"left",p=x==="y"?"bottom":"right",w=c+m[a],y=c-m[p];c=ft(w,c,y)}if(s){const a=h==="y"?"top":"left",p=h==="y"?"bottom":"right",w=u+m[a],y=u-m[p];u=ft(w,u,y)}const d=f.fn({...e,[x]:c,[h]:u});return{...d,data:{x:d.x-n,y:d.y-o}}}}};function J(t){return Dt(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function I(t){var e;return(e=(Dt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Dt(t){return t instanceof Node||t instanceof P(t).Node}function $(t){return t instanceof Element||t instanceof P(t).Element}function q(t){return t instanceof HTMLElement||t instanceof P(t).HTMLElement}function St(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=H(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function we(t){return["table","td","th"].includes(J(t))}function mt(t){const e=pt(),n=H(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ye(t){let e=_(t);for(;q(e)&&!K(e);){if(mt(e))return e;e=_(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function H(t){return P(t).getComputedStyle(t)}function st(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||St(t)&&t.host||I(t);return St(e)?e.host:e}function Bt(t){const e=_(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:q(e)&&ot(e)?e:Bt(e)}function dt(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Bt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=P(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?dt(s.frameElement):[]):e.concat(i,dt(i,[],n))}function Mt(t){const e=H(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=q(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,f=rt(n)!==r||rt(o)!==s;return f&&(n=r,o=s),{width:n,height:o,$:f}}function $t(t){return $(t)?t:t.contextElement}function G(t){const e=$t(t);if(!q(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Mt(e);let s=(r?rt(n.width):n.width)/o,f=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const xe=V(0);function qt(t){const e=P(t);return!pt()||!e.visualViewport?xe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ve(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==P(t)?!1:e}function et(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=$t(t);let s=V(1);e&&(o?$(o)&&(s=G(o)):s=G(t));const f=ve(r,n,o)?qt(r):V(0);let g=(i.left+f.x)/s.x,l=(i.top+f.y)/s.y,m=i.width/s.x,h=i.height/s.y;if(r){const x=P(r),c=o&&$(o)?P(o):o;let u=x,d=u.frameElement;for(;d&&o&&c!==u;){const a=G(d),p=d.getBoundingClientRect(),w=H(d),y=p.left+(d.clientLeft+parseFloat(w.paddingLeft))*a.x,v=p.top+(d.clientTop+parseFloat(w.paddingTop))*a.y;g*=a.x,l*=a.y,m*=a.x,h*=a.y,g+=y,l+=v,u=P(d),d=u.frameElement}}return z({width:m,height:h,x:g,y:l})}const be=[":popover-open",":modal"];function wt(t){return be.some(e=>{try{return t.matches(e)}catch{return!1}})}function Ee(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=I(o),f=e?wt(e.floating):!1;if(o===s||f&&r)return n;let g={scrollLeft:0,scrollTop:0},l=V(1);const m=V(0),h=q(o);if((h||!h&&!r)&&((J(o)!=="body"||ot(s))&&(g=st(o)),q(o))){const x=et(o);l=G(o),m.x=x.x+o.clientLeft,m.y=x.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-g.scrollLeft*l.x+m.x,y:n.y*l.y-g.scrollTop*l.y+m.y}}function Se(t){return Array.from(t.getClientRects())}function Nt(t){return et(I(t)).left+st(t).scrollLeft}function ke(t){const e=I(t),n=st(t),o=t.ownerDocument.body,i=N(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=N(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Nt(t);const f=-n.scrollTop;return H(o).direction==="rtl"&&(s+=N(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:f}}function Ae(t,e){const n=P(t),o=I(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,f=0,g=0;if(i){r=i.width,s=i.height;const l=pt();(!l||l&&e==="fixed")&&(f=i.offsetLeft,g=i.offsetTop)}return{width:r,height:s,x:f,y:g}}function Re(t,e){const n=et(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=q(t)?G(t):V(1),s=t.clientWidth*r.x,f=t.clientHeight*r.y,g=i*r.x,l=o*r.y;return{width:s,height:f,x:g,y:l}}function kt(t,e,n){let o;if(e==="viewport")o=Ae(t,n);else if(e==="document")o=ke(I(t));else if($(e))o=Re(e,n);else{const i=qt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return z(o)}function Wt(t,e){const n=_(t);return n===e||!$(n)||K(n)?!1:H(n).position==="fixed"||Wt(n,e)}function Te(t,e){const n=e.get(t);if(n)return n;let o=dt(t,[],!1).filter(f=>$(f)&&J(f)!=="body"),i=null;const r=H(t).position==="fixed";let s=r?_(t):t;for(;$(s)&&!K(s);){const f=H(s),g=mt(s);!g&&f.position==="fixed"&&(i=null),(r?!g&&!i:!g&&f.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!g&&Wt(t,s))?o=o.filter(m=>m!==s):i=f,s=_(s)}return e.set(t,o),o}function Ce(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?wt(e)?[]:Te(e,this._c):[].concat(n),o],f=s[0],g=s.reduce((l,m)=>{const h=kt(e,m,i);return l.top=N(h.top,l.top),l.right=F(h.right,l.right),l.bottom=F(h.bottom,l.bottom),l.left=N(h.left,l.left),l},kt(e,f,i));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}}function Le(t){const{width:e,height:n}=Mt(t);return{width:e,height:n}}function Pe(t,e,n){const o=q(e),i=I(e),r=n==="fixed",s=et(t,!0,r,e);let f={scrollLeft:0,scrollTop:0};const g=V(0);if(o||!o&&!r)if((J(e)!=="body"||ot(i))&&(f=st(e)),o){const h=et(e,!0,r,e);g.x=h.x+e.clientLeft,g.y=h.y+e.clientTop}else i&&(g.x=Nt(i));const l=s.left+f.scrollLeft-g.x,m=s.top+f.scrollTop-g.y;return{x:l,y:m,width:s.width,height:s.height}}function ct(t){return H(t).position==="static"}function At(t,e){return!q(t)||H(t).position==="fixed"?null:e?e(t):t.offsetParent}function Ft(t,e){const n=P(t);if(wt(t))return n;if(!q(t)){let i=_(t);for(;i&&!K(i);){if($(i)&&!ct(i))return i;i=_(i)}return n}let o=At(t,e);for(;o&&we(o)&&ct(o);)o=At(o,e);return o&&K(o)&&ct(o)&&!mt(o)?n:o||ye(t)||n}const Oe=async function(t){const e=this.getOffsetParent||Ft,n=this.getDimensions,o=await n(t.floating);return{reference:Pe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function He(t){return H(t).direction==="rtl"}const De={convertOffsetParentRelativeRectToViewportRelativeRect:Ee,getDocumentElement:I,getClippingRect:Ce,getOffsetParent:Ft,getElementRects:Oe,getClientRects:Se,getDimensions:Le,getScale:G,isElement:$,isRTL:He},Be=me,Me=de,$e=pe,qe=ae,Ne=he,We=(t,e,n)=>{const o=new Map,i={platform:De,...n},r={...i.platform,_c:o};return le(t,e,{...i,platform:r})};let T,lt;const it=t=>t&&t+"px",Fe=(t,e=window)=>{T||(T=e.document.createElement("div"),T.classList.add("wp-popup"),T.style.visibility="hidden",t.appendChild(T),lt=e.document.createElement("div"),lt.classList.add("wp-popup-arrow"));const n={};return{show:(s,f,{x:g,y:l})=>{T.innerHTML=s+lt.outerHTML;const m=T.querySelector(".wp-popup-arrow");We(f,T,{middleware:[Ne({x:g,y:l}),$e(),Me({allowedPlacements:["top","bottom"]}),Be(10),qe({element:m})]}).then(({x:h,y:x,middlewareData:c,placement:u})=>{if(T.style.top=it(x),T.style.left=it(h),c.arrow&&m){const{x:d,y:a}=c.arrow;m.style.left=d!==null?it(d):"",m.style.top=a!==null?it(a):"",u==="left"?(m.style.right="-8px",m.style.transform="rotate(90deg)"):u==="right"?(m.style.left="-8px",m.style.transform="rotate(-90deg)"):u==="top"?(m.style.bottom="-8px",m.style.transform="rotate(180deg)"):u==="bottom"&&(m.style.top="-8px")}T.currentTargetElement=f,T.style.visibility="visible",n.onShow&&n.onShow(T)})},hide:()=>{n.onHide&&n.onHide(T),T.style.visibility="hidden",T.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:T}};let O,Vt;const Ve=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),Vt=t.body.style.overflow,t.body.style.overflow="hidden"}},Ye=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=Vt},_e=(t,e=window)=>{O||(O=e.document.createElement("div"),O.classList.add("wp-touch-popup"),O.style.visibility="hidden",t.appendChild(O));const n={};return{show:f=>{O.innerHTML=f,O.style.visibility="visible",Ve(e.document),n.onShow&&n.onShow(O)},hide:()=>{n.onHide&&n.onHide(O),O.style.visibility="hidden",Ye(e.document)},expand:()=>{n.onExpand&&n.onExpand()},subscribe:(f={})=>{f.onShow&&(n.onShow=f.onShow),f.onHide&&(n.onHide=f.onHide),f.onExpand&&(n.onExpand=f.onExpand)},element:O}},tt=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},Ie=(t,e,n)=>{Lt(e,t,o=>{n(at(e,o,C))})},Rt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Tt,j;function Xe({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:f="detect"}){i=Xt(i)||document.body;const g=n,l=C?_e(i):Fe(i),m=ee(l),h={},x=[],c=[];j=f;const u=(d,a=!1)=>{d.preventDefault();const p=Date.now(),{currentTarget:w}=a?h:d,y=a?h.title:decodeURIComponent(w.getAttribute("data-wp-title")||w.textContent),v=a?h.lang:w.getAttribute("data-wp-lang")||g,S=a?h.pointerPosition:{x:d.clientX,y:d.clientY},A=zt(v);l.element.currentTargetElement===w&&!a||(Tt=p,l.element.style.visibility==="visible"&&l.hide(),l.loading=!0,l.dir=A,l.show(Qt(C,v,A,j),w,S),Lt(v,y,E=>{if(p===Tt&&l.loading){if(l.loading=!1,E){if(l.lang=v,l.title=y,E.type==="standard")l.show(at(v,E,C,j),w,S),tt(r,"onShow",[y,v,"standard"]);else if(E.type==="disambiguation"){const k=E.extractHtml?at(v,E,C,j):Jt(C,v,E.title,E.dir,j);l.show(k,w,S),tt(r,"onShow",[y,v,"disambiguation"])}}else if(Ut())l.show(Zt(C,v,y,A,j),w,S),tt(r,"onShow",[y,v,"error"]);else{l.show(te(C,v,A,j),w,S),tt(r,"onShow",[y,v,"offline"]);const k=document.querySelector(".wikipediapreview-body-action");h.lang=v,h.title=y,h.pointerPosition=S,h.target=w,k.addEventListener("click",b=>{u(b,!0)})}const L=l.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(L&&L.addEventListener("click",()=>{tt(r,"onWikiRead",[y,v])}),w.tagName==="A"){const k=Gt().split("="),b=new URL(w.href);b.searchParams.set(k[0],k[1]),w.href=b.href}}}))};l.subscribe(m),Rt(t,d=>{Array.prototype.forEach.call(d.querySelectorAll(e),a=>{C?a.addEventListener("click",u):a.addEventListener("mouseenter",u),x.push({text:a.textContent,title:a.getAttribute("data-wp-title")||a.textContent,lang:a.getAttribute("data-wp-lang")||g})})}),o&&Rt(t,d=>{Array.prototype.forEach.call(d.querySelectorAll("a"),a=>{const p=jt(a.getAttribute("href"));p&&(a.setAttribute("data-wp-title",p.title),a.setAttribute("data-wp-lang",p.lang),C?a.addEventListener("click",u):a.addEventListener("mouseenter",u),c.push({text:a.textContent,title:p.title,lang:p.lang}))})}),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${x.length}`),x.forEach((d,a)=>{console.log(a+1,`${d.text} -> ${decodeURI(yt(d.lang,d.title,C,!1))}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${c.length}`),c.forEach((d,a)=>{console.log(a+1,`${d.text} -> ${decodeURI(yt(d.lang,d.title,C,!1))}`)}),console.groupEnd()),console.groupEnd())}Ct();const Ge={init:Xe,version:Ct,getPreviewHtml:Ie,getSections:It};export{Ge as w};
