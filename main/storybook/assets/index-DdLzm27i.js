import{s as yt,g as Xt,r as Ct}from"./fullscreen-DIbgUq-A.js";import{j as L,k as Yt,v as Ot,n as jt,b as xt,o as Ut,i as Gt,a as zt,d as Kt}from"./utils-DMcg8GbO.js";import{r as at,a as Qt,c as Jt,b as Zt,d as te}from"./preview-DGNc1iyV.js";const ee=t=>{let e=[],n=[];const o=(c,l)=>{const p=setTimeout(c,l);return n.push(p),p},i=()=>{n.forEach(c=>{clearTimeout(c)}),n=[]},r=(c,l,p,d=void 0)=>{c.addEventListener(l,p,d),e.push([c,l,p,d])},s=()=>{e.forEach(c=>{const[l,p,d,h]=c;l.removeEventListener(p,d,h)}),e=[]},f=c=>{const l=c.toElement||c.relatedTarget||c.target,p=t.element.currentTargetElement;if(l!==p&&!t.element.contains(l)){const d=o(t.hide,300),h=()=>{clearTimeout(d)};r(t.element,"mouseenter",h)}};return{onHide:()=>{t.lang=null,t.title=null,t.loading=!1;const c=t.element.querySelector(".wikipediapreview-body");c.style.transition="auto",s(),i()},onShow:c=>{if(c.component={body:c.querySelector(".wikipediapreview-body"),wikipediapreview:c.querySelector(".wikipediapreview"),wikipediapreviewHeaderImage:c.querySelector(".wikipediapreview-header-image"),wikipediapreviewGalleryImages:c.querySelectorAll(".wikipediapreview-gallery-image"),closeBtn:c.querySelector(".wikipediapreview-header-closebtn"),content:c.querySelector(".wikipediapreview-body > p"),scrollCue:c.querySelector(".wikipediapreview-scroll-cue")},c.component.wikipediapreviewGalleryImages&&c.component.wikipediapreviewGalleryImages.forEach(l=>{r(l,"click",p=>{const d=p.target.style.backgroundImage.slice(4,-1).replace(/"/g,"");yt(t.media,d,t.lang,t.dir)})}),c.component.wikipediapreviewHeaderImage&&r(c.component.wikipediapreviewHeaderImage,"click",()=>{yt(t.media,t.media[0].thumb,t.lang,t.dir)}),L&&r(c.component.closeBtn,"click",t.hide),L){const l=document.querySelector(".wp-dark-screen");r(l,"click",t.hide,!0)}else r(c,"mouseleave",f),r(c.currentTargetElement,"mouseleave",f);c.component.scrollCue&&(Yt(c.component.body)?r(c.component.body,"scroll",l=>{l.target.scrollTop>0&&c.component.scrollCue.remove()}):c.component.scrollCue.remove())}}},ne=["top","right","bottom","left"],vt=["start","end"],bt=ne.reduce((t,e)=>t.concat(e,e+"-"+vt[0],e+"-"+vt[1]),[]),M=Math.min,W=Math.max,rt=Math.round,V=t=>({x:t,y:t}),oe={left:"right",right:"left",bottom:"top",top:"bottom"},ie={start:"end",end:"start"};function ft(t,e,n){return W(t,M(e,n))}function Q(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function N(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function nt(t){return["top","bottom"].includes(q(t))?"y":"x"}function mt(t){return Pt(nt(t))}function re(t,e,n){n===void 0&&(n=!1);const o=N(t),i=mt(t),r=dt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=Et(s)),[s,Et(s)]}function se(t){return t.replace(/start|end/g,e=>ie[e])}function Et(t){return t.replace(/left|right|bottom|top/g,e=>oe[e])}function ce(t){return{top:0,right:0,bottom:0,left:0,...t}}function gt(t){return typeof t!="number"?ce(t):{top:t,right:t,bottom:t,left:t}}function z(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function St(t,e,n){let{reference:o,floating:i}=t;const r=nt(e),s=mt(e),f=dt(s),u=q(e),a=r==="y",c=o.x+o.width/2-i.width/2,l=o.y+o.height/2-i.height/2,p=o[f]/2-i[f]/2;let d;switch(u){case"top":d={x:c,y:o.y-i.height};break;case"bottom":d={x:c,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:l};break;case"left":d={x:o.x-i.width,y:l};break;default:d={x:o.x,y:o.y}}switch(N(e)){case"start":d[s]-=p*(n&&a?-1:1);break;case"end":d[s]+=p*(n&&a?-1:1);break}return d}const le=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,f=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:l}=St(a,o,u),p=o,d={},h=0;for(let g=0;g<f.length;g++){const{name:m,fn:y}=f[g],{x:w,y:x,data:v,reset:E}=await y({x:c,y:l,initialPlacement:o,placement:p,strategy:i,middlewareData:d,rects:a,platform:s,elements:{reference:t,floating:e}});c=w??c,l=x??l,d={...d,[m]:{...d[m],...v}},E&&h<=50&&(h++,typeof E=="object"&&(E.placement&&(p=E.placement),E.rects&&(a=E.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):E.rects),{x:c,y:l}=St(a,p,u)),g=-1)}return{x:c,y:l,placement:p,strategy:i,middlewareData:d}};async function Dt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:f,strategy:u}=t,{boundary:a="clippingAncestors",rootBoundary:c="viewport",elementContext:l="floating",altBoundary:p=!1,padding:d=0}=Q(e,t),h=gt(d),m=f[p?l==="floating"?"reference":"floating":l],y=z(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(m)))==null||n?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(f.floating)),boundary:a,rootBoundary:c,strategy:u})),w=l==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(f.floating)),v=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},E=z(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:f,rect:w,offsetParent:x,strategy:u}):w);return{top:(y.top-E.top+h.top)/v.y,bottom:(E.bottom-y.bottom+h.bottom)/v.y,left:(y.left-E.left+h.left)/v.x,right:(E.right-y.right+h.right)/v.x}}const ae=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:f,middlewareData:u}=e,{element:a,padding:c=0}=Q(t,e)||{};if(a==null)return{};const l=gt(c),p={x:n,y:o},d=mt(i),h=dt(d),g=await s.getDimensions(a),m=d==="y",y=m?"top":"left",w=m?"bottom":"right",x=m?"clientHeight":"clientWidth",v=r.reference[h]+r.reference[d]-p[d]-r.floating[h],E=p[d]-r.reference[d],A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let S=A?A[x]:0;(!S||!await(s.isElement==null?void 0:s.isElement(A)))&&(S=f.floating[x]||r.floating[h]);const X=v/2-E/2,R=S/2-g[h]/2-1,b=M(l[y],R),C=M(l[w],R),$=b,F=S-g[h]-C,D=S/2-g[h]/2+X,Y=ft($,D,F),U=!u.arrow&&N(i)!=null&&D!==Y&&r.reference[h]/2-(D<$?b:C)-g[h]/2<0,Z=U?D<$?D-$:D-F:0;return{[d]:p[d]+Z,data:{[d]:Y,centerOffset:D-Y-Z,...U&&{alignmentOffset:Z}},reset:U}}});function fe(t,e,n){return(t?[...n.filter(i=>N(i)===t),...n.filter(i=>N(i)!==t)]:n.filter(i=>q(i)===i)).filter(i=>t?N(i)===t||(e?se(i)!==i:!1):!0)}const ue=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:s,placement:f,platform:u,elements:a}=e,{crossAxis:c=!1,alignment:l,allowedPlacements:p=bt,autoAlignment:d=!0,...h}=Q(t,e),g=l!==void 0||p===bt?fe(l||null,d,p):p,m=await Dt(e,h),y=((n=s.autoPlacement)==null?void 0:n.index)||0,w=g[y];if(w==null)return{};const x=re(w,r,await(u.isRTL==null?void 0:u.isRTL(a.floating)));if(f!==w)return{reset:{placement:g[0]}};const v=[m[q(w)],m[x[0]],m[x[1]]],E=[...((o=s.autoPlacement)==null?void 0:o.overflows)||[],{placement:w,overflows:v}],A=g[y+1];if(A)return{data:{index:y+1,overflows:E},reset:{placement:A}};const S=E.map(b=>{const C=N(b.placement);return[b.placement,C&&c?b.overflows.slice(0,2).reduce(($,F)=>$+F,0):b.overflows[0],b.overflows]}).sort((b,C)=>b[1]-C[1]),R=((i=S.filter(b=>b[2].slice(0,N(b[0])?2:3).every(C=>C<=0))[0])==null?void 0:i[0])||S[0][0];return R!==f?{data:{index:y+1,overflows:E},reset:{placement:R}}:{}}}};function Ht(t){const e=M(...t.map(r=>r.left)),n=M(...t.map(r=>r.top)),o=W(...t.map(r=>r.right)),i=W(...t.map(r=>r.bottom));return{x:e,y:n,width:o-e,height:i-n}}function de(t){const e=t.slice().sort((i,r)=>i.y-r.y),n=[];let o=null;for(let i=0;i<e.length;i++){const r=e[i];!o||r.y-o.y>o.height/2?n.push([r]):n[n.length-1].push(r),o=r}return n.map(i=>z(Ht(i)))}const me=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:r,strategy:s}=e,{padding:f=2,x:u,y:a}=Q(t,e),c=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),l=de(c),p=z(Ht(c)),d=gt(f);function h(){if(l.length===2&&l[0].left>l[1].right&&u!=null&&a!=null)return l.find(m=>u>m.left-d.left&&u<m.right+d.right&&a>m.top-d.top&&a<m.bottom+d.bottom)||p;if(l.length>=2){if(nt(n)==="y"){const b=l[0],C=l[l.length-1],$=q(n)==="top",F=b.top,D=C.bottom,Y=$?b.left:C.left,U=$?b.right:C.right,Z=U-Y,_t=D-F;return{top:F,bottom:D,left:Y,right:U,width:Z,height:_t,x:Y,y:F}}const m=q(n)==="left",y=W(...l.map(b=>b.right)),w=M(...l.map(b=>b.left)),x=l.filter(b=>m?b.left===w:b.right===y),v=x[0].top,E=x[x.length-1].bottom,A=w,S=y,X=S-A,R=E-v;return{top:v,bottom:E,left:A,right:S,width:X,height:R,x:A,y:v}}return p}const g=await r.getElementRects({reference:{getBoundingClientRect:h},floating:o.floating,strategy:s});return i.reference.x!==g.reference.x||i.reference.y!==g.reference.y||i.reference.width!==g.reference.width||i.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}};async function ge(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=q(n),f=N(n),u=nt(n)==="y",a=["left","top"].includes(s)?-1:1,c=r&&u?-1:1,l=Q(e,t);let{mainAxis:p,crossAxis:d,alignmentAxis:h}=typeof l=="number"?{mainAxis:l,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...l};return f&&typeof h=="number"&&(d=f==="end"?h*-1:h),u?{x:d*c,y:p*a}:{x:p*a,y:d*c}}const pe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:f}=e,u=await ge(e,t);return s===((n=f.offset)==null?void 0:n.placement)&&(o=f.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:s}}}}},he=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:f={fn:m=>{let{x:y,y:w}=m;return{x:y,y:w}}},...u}=Q(t,e),a={x:n,y:o},c=await Dt(e,u),l=nt(q(i)),p=Pt(l);let d=a[p],h=a[l];if(r){const m=p==="y"?"top":"left",y=p==="y"?"bottom":"right",w=d+c[m],x=d-c[y];d=ft(w,d,x)}if(s){const m=l==="y"?"top":"left",y=l==="y"?"bottom":"right",w=h+c[m],x=h-c[y];h=ft(w,h,x)}const g=f.fn({...e,[p]:d,[l]:h});return{...g,data:{x:g.x-n,y:g.y-o}}}}};function J(t){return Bt(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(Bt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bt(t){return t instanceof Node||t instanceof T(t).Node}function H(t){return t instanceof Element||t instanceof T(t).Element}function B(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function kt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function ot(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=P(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function we(t){return["table","td","th"].includes(J(t))}function pt(t){const e=ht(),n=P(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ye(t){let e=I(t);for(;B(e)&&!K(e);){if(pt(e))return e;e=I(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function K(t){return["html","body","#document"].includes(J(t))}function P(t){return T(t).getComputedStyle(t)}function st(t){return H(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kt(t)&&t.host||_(t);return kt(e)?e.host:e}function $t(t){const e=I(t);return K(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&ot(e)?e:$t(e)}function ut(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$t(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=T(i);return r?e.concat(s,s.visualViewport||[],ot(i)?i:[],s.frameElement&&n?ut(s.frameElement):[]):e.concat(i,ut(i,[],n))}function Wt(t){const e=P(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=B(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,f=rt(n)!==r||rt(o)!==s;return f&&(n=r,o=s),{width:n,height:o,$:f}}function Nt(t){return H(t)?t:t.contextElement}function G(t){const e=Nt(t);if(!B(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Wt(e);let s=(r?rt(n.width):n.width)/o,f=(r?rt(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!f||!Number.isFinite(f))&&(f=1),{x:s,y:f}}const xe=V(0);function Ft(t){const e=T(t);return!ht()||!e.visualViewport?xe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ve(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function et(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Nt(t);let s=V(1);e&&(o?H(o)&&(s=G(o)):s=G(t));const f=ve(r,n,o)?Ft(r):V(0);let u=(i.left+f.x)/s.x,a=(i.top+f.y)/s.y,c=i.width/s.x,l=i.height/s.y;if(r){const p=T(r),d=o&&H(o)?T(o):o;let h=p,g=h.frameElement;for(;g&&o&&d!==h;){const m=G(g),y=g.getBoundingClientRect(),w=P(g),x=y.left+(g.clientLeft+parseFloat(w.paddingLeft))*m.x,v=y.top+(g.clientTop+parseFloat(w.paddingTop))*m.y;u*=m.x,a*=m.y,c*=m.x,l*=m.y,u+=x,a+=v,h=T(g),g=h.frameElement}}return z({width:c,height:l,x:u,y:a})}const be=[":popover-open",":modal"];function wt(t){return be.some(e=>{try{return t.matches(e)}catch{return!1}})}function Ee(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=_(o),f=e?wt(e.floating):!1;if(o===s||f&&r)return n;let u={scrollLeft:0,scrollTop:0},a=V(1);const c=V(0),l=B(o);if((l||!l&&!r)&&((J(o)!=="body"||ot(s))&&(u=st(o)),B(o))){const p=et(o);a=G(o),c.x=p.x+o.clientLeft,c.y=p.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-u.scrollLeft*a.x+c.x,y:n.y*a.y-u.scrollTop*a.y+c.y}}function Se(t){return Array.from(t.getClientRects())}function Mt(t){return et(_(t)).left+st(t).scrollLeft}function ke(t){const e=_(t),n=st(t),o=t.ownerDocument.body,i=W(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=W(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Mt(t);const f=-n.scrollTop;return P(o).direction==="rtl"&&(s+=W(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:f}}function Ae(t,e){const n=T(t),o=_(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,f=0,u=0;if(i){r=i.width,s=i.height;const a=ht();(!a||a&&e==="fixed")&&(f=i.offsetLeft,u=i.offsetTop)}return{width:r,height:s,x:f,y:u}}function Re(t,e){const n=et(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=B(t)?G(t):V(1),s=t.clientWidth*r.x,f=t.clientHeight*r.y,u=i*r.x,a=o*r.y;return{width:s,height:f,x:u,y:a}}function At(t,e,n){let o;if(e==="viewport")o=Ae(t,n);else if(e==="document")o=ke(_(t));else if(H(e))o=Re(e,n);else{const i=Ft(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return z(o)}function Vt(t,e){const n=I(t);return n===e||!H(n)||K(n)?!1:P(n).position==="fixed"||Vt(n,e)}function Le(t,e){const n=e.get(t);if(n)return n;let o=ut(t,[],!1).filter(f=>H(f)&&J(f)!=="body"),i=null;const r=P(t).position==="fixed";let s=r?I(t):t;for(;H(s)&&!K(s);){const f=P(s),u=pt(s);!u&&f.position==="fixed"&&(i=null),(r?!u&&!i:!u&&f.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ot(s)&&!u&&Vt(t,s))?o=o.filter(c=>c!==s):i=f,s=I(s)}return e.set(t,o),o}function Te(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?wt(e)?[]:Le(e,this._c):[].concat(n),o],f=s[0],u=s.reduce((a,c)=>{const l=At(e,c,i);return a.top=W(l.top,a.top),a.right=M(l.right,a.right),a.bottom=M(l.bottom,a.bottom),a.left=W(l.left,a.left),a},At(e,f,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ce(t){const{width:e,height:n}=Wt(t);return{width:e,height:n}}function Oe(t,e,n){const o=B(e),i=_(e),r=n==="fixed",s=et(t,!0,r,e);let f={scrollLeft:0,scrollTop:0};const u=V(0);if(o||!o&&!r)if((J(e)!=="body"||ot(i))&&(f=st(e)),o){const l=et(e,!0,r,e);u.x=l.x+e.clientLeft,u.y=l.y+e.clientTop}else i&&(u.x=Mt(i));const a=s.left+f.scrollLeft-u.x,c=s.top+f.scrollTop-u.y;return{x:a,y:c,width:s.width,height:s.height}}function ct(t){return P(t).position==="static"}function Rt(t,e){return!B(t)||P(t).position==="fixed"?null:e?e(t):t.offsetParent}function qt(t,e){const n=T(t);if(wt(t))return n;if(!B(t)){let i=I(t);for(;i&&!K(i);){if(H(i)&&!ct(i))return i;i=I(i)}return n}let o=Rt(t,e);for(;o&&we(o)&&ct(o);)o=Rt(o,e);return o&&K(o)&&ct(o)&&!pt(o)?n:o||ye(t)||n}const Pe=async function(t){const e=this.getOffsetParent||qt,n=this.getDimensions,o=await n(t.floating);return{reference:Oe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function De(t){return P(t).direction==="rtl"}const He={convertOffsetParentRelativeRectToViewportRelativeRect:Ee,getDocumentElement:_,getClippingRect:Te,getOffsetParent:qt,getElementRects:Pe,getClientRects:Se,getDimensions:Ce,getScale:G,isElement:H,isRTL:De},Be=pe,$e=ue,We=he,Ne=ae,Fe=me,Me=(t,e,n)=>{const o=new Map,i={platform:He,...n},r={...i.platform,_c:o};return le(t,e,{...i,platform:r})};let k,lt;const it=t=>t&&t+"px",Ve=(t,e=window)=>{k||(k=e.document.createElement("div"),k.classList.add("wp-popup"),k.style.visibility="hidden",t.appendChild(k),lt=e.document.createElement("div"),lt.classList.add("wp-popup-arrow"));const n={};return{show:(s,f,{x:u,y:a})=>{k.innerHTML=s+lt.outerHTML;const c=k.querySelector(".wp-popup-arrow");Me(f,k,{middleware:[Fe({x:u,y:a}),We(),$e({allowedPlacements:["top","bottom"]}),Be(10),Ne({element:c})]}).then(({x:l,y:p,middlewareData:d,placement:h})=>{if(k.style.top=it(p),k.style.left=it(l),d.arrow&&c){const{x:g,y:m}=d.arrow;c.style.left=g!==null?it(g):"",c.style.top=m!==null?it(m):"",h==="left"?(c.style.right="-8px",c.style.transform="rotate(90deg)"):h==="right"?(c.style.left="-8px",c.style.transform="rotate(-90deg)"):h==="top"?(c.style.bottom="-8px",c.style.transform="rotate(180deg)"):h==="bottom"&&(c.style.top="-8px")}k.currentTargetElement=f,k.style.visibility="visible",n.onShow&&n.onShow(k)})},hide:()=>{n.onHide&&n.onHide(k),k.style.visibility="hidden",k.currentTargetElement=null},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:k}};let O,It;const qe=t=>{if(!t.querySelector(".wp-dark-screen")){const e=t.createElement("div");e.classList.add("wp-dark-screen"),t.body.appendChild(e),It=t.body.style.overflow,t.body.style.overflow="hidden"}},Ie=t=>{const e=t.getElementsByClassName("wp-dark-screen");t.body.removeChild(e[0]),t.body.style.overflow=It},_e=(t,e=window)=>{O||(O=e.document.createElement("div"),O.classList.add("wp-touch-popup"),O.style.visibility="hidden",t.appendChild(O));const n={};return{show:s=>{O.innerHTML=s,O.style.visibility="visible",qe(e.document),n.onShow&&n.onShow(O)},hide:()=>{n.onHide&&n.onHide(O),O.style.visibility="hidden",Ie(e.document)},subscribe:(s={})=>{s.onShow&&(n.onShow=s.onShow),s.onHide&&(n.onHide=s.onHide)},element:O}},tt=(t,e,n)=>{const o=t&&t[e];if(o instanceof Function)try{o.apply(null,n)}catch(i){console.log("Error invoking Wikipedia Preview custom callback",i)}},Xe=(t,e,n)=>{Ct(e,t,o=>{n(at(e,o,L))})},Lt=(t,e)=>{const n=[];(typeof t=="string"||t instanceof String)&&Array.prototype.forEach.call(document.querySelectorAll(t),o=>{n.push(o)}),(t instanceof Document||t instanceof Element)&&n.push(t),Array.isArray(t)&&t.forEach(o=>{o instanceof Element&&n.push(o)}),n.forEach(o=>e(o))};let Tt,j;function Ye({root:t=document,selector:e="[data-wikipedia-preview]",lang:n="en",detectLinks:o=!1,popupContainer:i=document.body,events:r={},debug:s=!1,prefersColorScheme:f="detect"}){i=jt(i)||document.body;const u=n,a=L?_e(i):Ve(i),c=ee(a),l={},p=[],d=[];j=f;const h=(g,m=!1)=>{g.preventDefault();const y=Date.now(),{currentTarget:w}=m?l:g,x=m?l.title:decodeURIComponent(w.getAttribute("data-wp-title")||w.textContent),v=m?l.lang:w.getAttribute("data-wp-lang")||u,E=m?l.pointerPosition:{x:g.clientX,y:g.clientY},A=Kt(v);a.element.currentTargetElement===w&&!m||(Tt=y,a.element.style.visibility==="visible"&&a.hide(),a.loading=!0,a.dir=A,a.show(Qt(L,v,A,j),w,E),Ct(v,x,S=>{if(y===Tt&&a.loading){if(a.loading=!1,S.extractHtml){if(a.lang=v,a.title=x,S.type==="standard")a.show(at(v,S,L,j),w,E),a.media=S.media,tt(r,"onShow",[x,v,"standard"]);else if(S.type==="disambiguation"){const R=S.extractHtml?at(v,S,L,j):Jt(L,v,S.title,S.dir,j);a.show(R,w,E),tt(r,"onShow",[x,v,"disambiguation"])}}else if(Gt())a.show(Zt(L,v,x,A,j),w,E),tt(r,"onShow",[x,v,"error"]);else{a.show(te(L,v,A,j),w,E),tt(r,"onShow",[x,v,"offline"]);const R=document.querySelector(".wikipediapreview-body-action");l.lang=v,l.title=x,l.pointerPosition=E,l.target=w,R.addEventListener("click",b=>{h(b,!0)})}const X=a.element.querySelector(".wikipediapreview-footer-cta-readonwiki, .wikipediapreview-cta-readonwiki");if(X&&X.addEventListener("click",()=>{tt(r,"onWikiRead",[x,v])}),w.tagName==="A"){const R=zt().split("="),b=new URL(w.href);b.searchParams.set(R[0],R[1]),w.href=b.href}}}))};a.subscribe(c),Lt(t,g=>{Array.prototype.forEach.call(g.querySelectorAll(e),m=>{L?m.addEventListener("click",h):m.addEventListener("mouseenter",h),p.push({text:m.textContent,title:m.getAttribute("data-wp-title")||m.textContent,lang:m.getAttribute("data-wp-lang")||u})})}),o&&Lt(t,g=>{Array.prototype.forEach.call(g.querySelectorAll("a"),m=>{const y=Ut(m.getAttribute("href"));y&&(m.setAttribute("data-wp-title",y.title),m.setAttribute("data-wp-lang",y.lang),L?m.addEventListener("click",h):m.addEventListener("mouseenter",h),d.push({text:m.textContent,title:y.title,lang:y.lang}))})}),s&&(console.group("Wikipedia Preview [debug mode]"),console.group(`Searching for "${e}" inside ${t}, Total links found: ${p.length}`),p.forEach((g,m)=>{console.log(m+1,`${g.text} -> ${decodeURI(xt(g.lang,g.title,L,!1))}`)}),console.groupEnd(),o&&(console.group(`Searching for links to Wikipedia, Total links found: ${d.length}`),d.forEach((g,m)=>{console.log(m+1,`${g.text} -> ${decodeURI(xt(g.lang,g.title,L,!1))}`)}),console.groupEnd()),console.groupEnd())}Ot();const ze={init:Ye,version:Ot,getPreviewHtml:Xe,getSections:Xt};export{ze as w};
