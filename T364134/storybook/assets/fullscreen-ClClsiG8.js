import{a as W,l as z,m as v,c as J,d as oe,s as ae,e as _,f as ce,h as V,g as ue,i as me}from"./utils-C0ytuf8A.js";const de=(e,t,i=!0)=>{const n=new XMLHttpRequest;n.open("GET",e),n.send(),n.addEventListener("load",()=>{const s=i?JSON.parse(n.responseText):n.responseText;t(s)}),n.addEventListener("error",()=>{t(!1,n.status)})},O={},q=(e,t,i,n=!0,s=de)=>{if(O[e]!==void 0){i(O[e]);return}s(e,(r,c)=>{r?i(O[e]=t(r)):i(!1,c)},n)},ge=e=>e.split("#")[0],fe=(e,t,i,n=q)=>{const r=J(e,{action:"query",prop:"extracts|pageimages",exsentences:4,explaintext:1,exsectionformat:"plain",piprop:"thumbnail",pilimit:1,titles:t})+"&"+W();n(r,c=>{const a=c.query.pages[Object.keys(c.query.pages)[0]];return a.extract?{title:t,extractHtml:"<p>"+a.extract+"</p>",imgUrl:a.thumbnail?a.thumbnail.source:null,dir:oe(e),type:"standard"}:!1},i)},pe=(e,t,i,n=q)=>{const s=`https://${e}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t)}?${W()}`;n(s,(r,c)=>r?r.type==="standard"||r.type==="disambiguation"?{title:r.titles.canonical,extractHtml:ae(r.extract_html),imgUrl:r.thumbnail?r.thumbnail.source:null,dir:r.dir,type:r.type}:r.type==="no-extract"&&r.description?{title:r.titles.canonical,extractHtml:"<p>"+r.description+"</p>",imgUrl:r.thumbnail?r.thumbnail.source:null,dir:r.dir,type:"standard"}:(z(v(e,"preview-console-error-message",t,e),r),!1):(z(v(e,"preview-console-error-message",t,e),c),!1),i)},ye=e=>{if(!e)return null;const t=["script","meta","style","figure","table","sup.mw-ref","sup.reference",".pcs-collapse-table-container",".thumb",".hatnote","[ role='navigation' ]","#pcs-edit-section-add-title-description"].join(",");for(const i of e.querySelectorAll(t))i.remove();for(const i of e.querySelectorAll("a"))i.outerHTML=i.innerHTML;for(const i of e.querySelectorAll("p"))i.innerHTML=i.innerHTML.replace(/\s\(.*?class=".*?(ext-phonos|IPA).*?".*?\)/g,"");return e.innerText.trim()===""?null:e.outerHTML},he=e=>{const t=e.querySelector('meta[property="mw:leadImage"]');if(!t)return null;const i=t.getAttribute("content").split("/"),n=decodeURIComponent(i[i.length-1]),s=e.querySelector('a[href*="'+n+'"]');if(!s)return null;const r=s.querySelector("span[data-src]");if(r)return r.getAttribute("data-src");const c=s.querySelector("img[src]");return c?c.getAttribute("src"):null},ve=(e,t,i,n=q)=>{const s=`https://${e}.wikipedia.org/api/rest_v1/page/mobile-html/${encodeURIComponent(t)}?${W()}`;n(s,(r,c)=>{if(!r)return z(v(e,"preview-console-error-message",t,e),c),!1;const a=new DOMParser().parseFromString(r,"text/html"),d=he(a);return{sections:Array.from(a.querySelectorAll("section")).map(m=>{const p=m.querySelector("h2, h3, h4, h5, h6"),b=p?p.id:t,y=p?p.tagName.toLowerCase():"h2",h=m.querySelector("figure span.mw-file-element"),R=h?h.getAttribute("data-src"):d,L=ye(m.querySelector("p"));return L?{id:b,level:y,imgUrl:R,extractHtml:L}:null}).filter(m=>m),dir:a.body.getAttribute("dir")}},i,!1)},be=(e,t,i,n,s)=>{ve(e,t,r=>{for(const c of r.sections)if(c.id===i){n({title:t+"#"+i,extractHtml:c.extractHtml,imgUrl:c.imgUrl,dir:r.dir,type:"standard"});return}n(!1)},s)},Fe=(e,t,i,n=q)=>{const[s,r]=t.split("#");return r?be(e,s,r,i,n):t.indexOf(":")===-1?pe(e,t,i,n):fe(e,t,i,n)},ze=(e,t,i,n=q)=>{t=ge(t);const s=`https://${e}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(t)}`;n(s,r=>(r.items||[]).reduce((d,u)=>{if(u.showInGallery&&u.type==="image"){const m=u&&u.srcset&&`https:${u.srcset[0].src}`,p={caption:u.caption&&u.caption.text.trim(),thumb:m,title:u.title};return d.concat(p)}return d},[]),i)},$e=(e,t,i,n=q)=>{const s={action:"query",prop:"imageinfo",iiextmetadatafilter:"LicenseShortName|ImageDescription|Artist",iiextmetadatalanguage:e,iiextmetadatamultilang:1,iiurlwidth:V().width,iiurlheight:V().height,iiprop:"url|extmetadata",titles:t},r=J(e,s);n(r,c=>{const d=c.query.pages[0].imageinfo;if(!d)return{};const{Artist:u,ImageDescription:m,LicenseShortName:p}=d[0].extmetadata,b=u&&_(u.value),y=m&&_(typeof m.value=="string"&&m.value||m.value[e]||m.value[Object.keys(m.value)[0]]),h=d[0].thumburl;return{author:b,description:y,license:p&&p.value,filePage:ce(d[0].descriptionshorturl),bestFitImageUrl:h}},i)},C=1,Q=2,T=()=>window.innerWidth,U=()=>window.innerHeight,l={screenX:null,originalMarginLeft:null,currentMarginLeft:null,originalTransition:null,imgOriginalTransition:null,durationStart:null,translateX:0,translateY:0,clientX:null,clientY:null,imageRect:{}},g=[];let M=-1,E=!1;const X=e=>e.target.nodeName==="IMG"?e.target:e.target.querySelector("img"),K=e=>e?Number(e.slice(e.indexOf("scale")+6,-1)):C,xe=e=>{const i=/translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/.exec(e);return i?`translate3d(${i.groups.x}px, ${i.groups.y}px, 0px)`:`translate3d(${l.translateX}px, ${l.translateY}px, 0px)`},k=(e,t)=>{const n=[`${t}-item-caption`,`${t}-item-caption-text`,`${t}-item-attribution`,`${t}-button`].find(s=>e.target.className.indexOf(s)>-1);return e.pointerType!=="touch"||n},Y=()=>E,G=e=>e.naturalHeight<=e.naturalWidth,Se=e=>e.naturalWidth+50<T(),P=()=>g.length,we=(e,t=null)=>{const i={},n=()=>t.clientY>e.naturalHeight&&!G(e)?e.naturalHeight:t.clientY;return g.length===2?(i.x=(g[0].clientX+g[1].clientX)/2,i.y=(g[0].clientY+g[1].clientY)/2):(i.x=t.clientX,i.y=n()),i},ee=(e,t)=>{const i=we(e,t);return G(e)?i.y=i.y-e.naturalHeight:Se(e)&&(i.x=e.naturalWidth/2,i.y=e.naturalHeight/2),`${i.x}px ${i.y}px`},qe=e=>{for(let t=0;t<g.length;t++)if(g[t].pointerId===e.pointerId){g.splice(t,1);break}},te=e=>{e&&(e.style.transition=l.imgOriginalTransition,e.style.transform=`scale(${C})`,E=!1,l.translateX=0,l.translateY=0)},Le=e=>{const t=X(e);l.clientX=null,l.clientY=null,l.translateX=0,l.translateY=0,t.style.transformOrigin=ee(t,e),Y()?(t.style.transform=`scale(${C})`,E=!1):(t.style.transform=`scale(${Q})`,E=!0)},Me=e=>{const t=X(e);if(!t)return;const i=t.getBoundingClientRect();if(l.imageRect.top=i.top,l.imageRect.bottom=i.bottom,l.imageRect.left=i.left,l.imageRect.right=i.right,g.length<1){const n=window.getComputedStyle(t);l.imgOriginalTransition=n.transition}g.push(e)},Te=e=>{const t=X(e),i=t.style.transform,n=.01,s=.4;let r=K(i);const c=xe(i);for(let a=0;a<g.length;a++)if(e.pointerId===g[a].pointerId){g[a]=e;break}if(g.length===2){const a=Math.abs(g[0].clientX-g[1].clientX),d=Math.abs(g[0].clientY-g[1].clientY),u=Math.sqrt(Math.pow(a,2)+Math.pow(d,2));M>0&&(t.style.transformOrigin=ee(t),t.style.transition="unset",u>M&&(E=!0,r+n<Q&&(r+=n,t.style.transform=`${c} scale(${r})`)),u<M&&(r-n>C+s?(r-=n,t.style.transform=`${c} scale(${r})`):te(t))),M=u}},Ee=(e,t,i,n,s)=>{const r=X(e);if(!r)return;const c=r.style.transform,a=K(c),d=T()/8,u=T()-d,m=G(r)?U()/4:U()/8,p=U()-m,b=80;r.style.transition="unset",(!l.clientX||!l.clientY)&&(l.clientX=e.clientX,l.clientY=e.clientY);const y=l.translateX+(e.clientX-l.clientX),h=l.translateY+(e.clientY-l.clientY),R=h-l.translateY>=0,L=y-l.translateX>=0,ne=()=>{const A=l.imageRect.left<d&&L||l.imageRect.right>u&&!L,le=l.imageRect.top<m&&R||l.imageRect.bottom>p&&!R;return A&&le},re=()=>{l.imageRect.top=l.imageRect.top+(h-l.translateY),l.imageRect.bottom=l.imageRect.bottom+(h-l.translateY),l.imageRect.left=l.imageRect.left+(y-l.translateX),l.imageRect.right=l.imageRect.right+(y-l.translateX),l.translateX=y,l.translateY=h,l.clientX=e.clientX,l.clientY=e.clientY},se=Math.abs(y)-Math.abs(l.translateX)>b;if(ne())re(),r.style.transform=`translate3d(${y}px, ${h}px, 0px) scale(${a})`;else if(se){const A=s==="ltr"&&y<0||s==="rtl"&&y>0;!A&&i[n-1]?t(-1):A&&i[n+1]&&t(1)}},Ie=e=>{const t=X(e);t&&(t.style.transition=l.imgOriginalTransition),qe(e),l.clientX=null,l.clientY=null,g.length<2&&(M=-1)},Xe=(e,t,i)=>{const n=window.getComputedStyle(t);l.durationStart=Date.now(),l.screenX=e.clientX,l.originalMarginLeft=+n[i].slice(0,-2),l.currentMarginLeft=+n[i].slice(0,-2),l.originalTransition=n.transition,t.style.transition="unset"},Re=(e,t,i,n)=>{const r=e.clientX-l.screenX;l.currentMarginLeft=l.originalMarginLeft+r*(n==="ltr"?1:-1),t.style[i]=l.currentMarginLeft+"px",e.preventDefault()},Ae=(e,t,i,n,s)=>{const r=l.originalMarginLeft-l.currentMarginLeft,c=Date.now()-l.durationStart;Math.abs(r/T())>.4||c<=300&&Math.abs(r)>5?i(r>0?1:-1):t.style[n]=-T()*s+"px"};let B=[];const N=(e,t,i,n=void 0)=>{e.addEventListener(t,i,n),B.push([e,t,i,n])},Ye=()=>{B.forEach(e=>{const[t,i,n,s]=e;t.removeEventListener(i,n,s)}),B=[]};let f=0,x="",I,H,S;const j=()=>window.innerWidth,o="wp-gallery-fullscreen-slider",He=(e,t,i,n=[],s="")=>{const r=n.map(()=>`
		<div class="${o}-item">
				<div class="${o}-item-loading">
						<div class="${o}-item-loading-spinner">
								<div class="${o}-item-loading-spinner-animation">
										<div class="${o}-item-loading-spinner-animation-bounce"></div>
								</div>
						</div>
						<div class="${o}-item-loading-text">${v(e,"gallery-loading-still")}</div>
				</div>
				<div class="${o}-item-loading-error">
					<div class="${o}-item-loading-error-text">${v(e,"gallery-loading-error")}</div>
					<div class="${o}-item-loading-error-refresh">${v(e,"gallery-loading-error-refresh")}</div>
				</div>
		</div>
		`.trim()).join("");return n.some((c,a)=>c.thumb===s?(f=a,!0):!1),x=t,I=e,H=n,S=i,`
		<div class="${o}" style="${x==="ltr"?"margin-left":"margin-right"}:-${f*j()}px">
				<div class="${o}-button previous"></div>
				<div class="${o}-button next"></div>
				${r}
		</div>
		`.trim()},Ce=e=>{const t=e.author?e.author:v(I,"gallery-unknown-author"),i=e.filePage;return`
		<div class="${o}-item-attribution">
			<div class="${o}-item-attribution-info">
				<bdi>${t} (${e.license})</bdi>
				<a href="${i}" class="${o}-item-attribution-info-link" target="_blank">${v(I,"gallery-attribution-learnmore")} ${ue()}</a>
			</div>
		</div>
	`.trim()},ie=(e,t=!1)=>{const i=e.querySelector("img"),n=e.querySelector(`.${o}-item-loading`),s=e.querySelector(`.${o}-item-loading-error`),r=e.querySelector(`.${o}-item-caption`);function c(){i.naturalWidth>0&&i.naturalHeight>0?r.style.visibility="visible":requestAnimationFrame(c)}if(c(),t&&(S.querySelector(`.${o}`).querySelectorAll(`.${o}-item`).forEach(u=>{const m=u.querySelector("img"),p=u.querySelector(`.${o}-item-caption`),b=u.querySelector(`.${o}-item-attribution`);m&&u.removeChild(m),p&&u.removeChild(p),b&&u.removeChild(b)}),$(0,!0),n.style.visibility="visible",s.style.visibility="hidden"),i.complete)n.style.visibility="hidden",s.style.visibility="hidden",i.style.visibility="visible";else{const a=e.querySelector(`.${o}-item-loading-text`),d=setTimeout(()=>{a.style.visibility="visible"},5e3);i.addEventListener("load",()=>{n.style.visibility="hidden",s.style.visibility="hidden",a.style.visibility="hidden",clearTimeout(d)}),i.addEventListener("error",()=>{const u=e.querySelector(`.${o}-item-loading-error-refresh`);if(n.style.visibility="hidden",i.style.visibility="hidden",!me()){const m=e.querySelector(`.${o}-item-loading-error-text`);m.innerText=v(I,"gallery-loading-error-offline"),s.classList.add("offline")}s.style.visibility="visible",clearTimeout(d),u.addEventListener("click",()=>{ie(e,!0)})})}},D=(e,t=!1)=>{const s=S.querySelector(`.${o}`).querySelectorAll(`.${o}-item`)[e];s&&$e(I,H[e].title,r=>{const c=s.querySelector("img"),a=s.querySelector(`.${o}-item-attribution`);if(!c){const u=`<div class="${o}-item-caption">
						<div class="${o}-item-caption-text"><bdi>${r.description?r.description:H[e].caption?H[e].caption:""}</bdi></div>
					</div>`;s.insertAdjacentHTML("beforeend",`<div class="${o}-item-img"><img src="${r.bestFitImageUrl} ${t?"?timestamp="+Date.now():""}"/>${u}</div>`),ie(s)}a||s.insertAdjacentHTML("beforeend",Ce(r))})},$=(e=1,t=!1)=>{const i=S.querySelector(`.${o}`),n=i.querySelectorAll(`.${o}-item`),s=i.querySelector(".next"),r=i.querySelector(".previous"),c=f+e,a=n[c],d=n[f].querySelector("img");a&&(f+=e,s.style.visibility=f===n.length-1?"hidden":"visible",r.style.visibility=f===0?"hidden":"visible",te(d),D(f,t),D(f+1,t),D(f-1,t)),i.style[x==="ltr"?"marginLeft":"marginRight"]=-j()*f+"px";const u=S.querySelector(".wp-gallery-fullscreen-counter");u.textContent=f+1+"/"+n.length},F=()=>{$(-1)},Oe=()=>{const e=S.querySelector(`.${o}`),t=x==="ltr"?"marginLeft":"marginRight",i=e.querySelectorAll(`.${o}-item`);e.addEventListener("pointerdown",n=>{k(n,o)||(Me(n),P()===1&&!Y()&&Xe(n,e,t))}),e.addEventListener("pointermove",n=>{k(n,o)||(P()>1?Te(n):Y()?Ee(n,$,i,f,x):Re(n,e,t,x))}),e.addEventListener("pointerout",n=>{k(n,o)||(e.style.transition=l.originalTransition,P()===1&&!Y()&&Ae(n,e,$,t,f),Ie(n))})},Ue=()=>{S.querySelector(".wp-gallery-fullscreen").classList.toggle("wp-gallery-fullscreen-focus-mode")},ke=()=>{const e=S.querySelector(`.${o}`),t=e.querySelectorAll(`.${o}-item`),i=e.querySelector(".next"),n=e.querySelector(".previous");let s=!1;$(0),Oe(),e.addEventListener("click",a=>{(a.target.className===`${o}-item`||a.target.tagName==="IMG")&&(s?(clearTimeout(s),s=null,Le(a)):s=setTimeout(()=>{s=null,Ue()},300))});const r=function(a){a.style.transition="unset",a.style.marginLeft=-f*j()+"px"};let c;N(window,"resize",()=>{const a=document.querySelector("."+o);r(a),clearTimeout(c),c=setTimeout(()=>{a.style.removeProperty("transition")},100)}),t.length===1?(n.style.visibility="hidden",i.style.visibility="hidden"):(i.addEventListener("click",()=>{$()}),n.addEventListener("click",()=>{F()}),N(window,"keydown",({key:a})=>{switch(a){case"ArrowRight":case"Right":x==="ltr"?$():F();break;case"ArrowLeft":case"Left":x==="ltr"?F():$();break}}))},w="wp-gallery-fullscreen",Pe=(e,t)=>`
		<div class="${w}" lang="${e}" dir="${t}">
			<div class="${w}-close"></div>
			<div class="${w}-counter"></div>
			<div class="${w}-main"></div>
		</div>
	`.trim(),Z=e=>{const t=e.querySelector(`.${w}`);e.removeChild(t),Ye()},Be=(e,t,i,n,s=document.body)=>{s.insertAdjacentHTML("beforeend",Pe(i,n)),s.querySelector(`.${w}-main`).insertAdjacentHTML("beforeend",He(i,n,s,e,t)),s.querySelector(`.${w}-close`).addEventListener("click",()=>{Z(s)}),N(window,"keydown",({key:c})=>{(c==="Escape"||c==="Esc")&&Z(s)}),ke()};export{Fe as a,ve as g,ze as r,Be as s};
