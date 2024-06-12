import{a as G,l as B,m as $,c as J,d as ae,s as ce,e as _,f as ue,h as V,i as de}from"./utils-b1_S7_K2.js";const me=(e,t,i=!0)=>{const n=new XMLHttpRequest;n.open("GET",e),n.send(),n.addEventListener("load",()=>{const s=i?JSON.parse(n.responseText):n.responseText;t(s)}),n.addEventListener("error",()=>{t(!1,n.status)})},O={},q=(e,t,i,n=!0,s=me)=>{if(O[e]!==void 0){i(O[e]);return}s(e,(r,c)=>{r?i(O[e]=t(r)):i(!1,c)},n)},ge=e=>e.split("#")[0],pe=(e,t,i,n=q)=>{const r=J(e,{action:"query",prop:"extracts|pageimages",exsentences:4,explaintext:1,exsectionformat:"plain",piprop:"thumbnail",pilimit:1,titles:t})+"&"+G();n(r,c=>{const l=c.query.pages[Object.keys(c.query.pages)[0]];return l.extract?{title:t,extractHtml:"<p>"+l.extract+"</p>",imgUrl:l.thumbnail?l.thumbnail.source:null,dir:ae(e),type:"standard"}:!1},i)},fe=(e,t,i,n=q)=>{const s=`https://${e}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t)}?${G()}`;n(s,(r,c)=>r?r.type==="standard"||r.type==="disambiguation"?{title:r.titles.canonical,extractHtml:ce(r.extract_html),imgUrl:r.thumbnail?r.thumbnail.source:null,dir:r.dir,type:r.type}:r.type==="no-extract"&&r.description?{title:r.titles.canonical,extractHtml:"<p>"+r.description+"</p>",imgUrl:r.thumbnail?r.thumbnail.source:null,dir:r.dir,type:"standard"}:(B($(e,"preview-console-error-message",t,e),r),!1):(B($(e,"preview-console-error-message",t,e),c),!1),i)},ye=e=>{if(!e)return null;const t=["script","meta","style","figure","table","sup.mw-ref","sup.reference",".pcs-collapse-table-container",".thumb",".hatnote","[ role='navigation' ]","#pcs-edit-section-add-title-description"].join(",");for(const i of e.querySelectorAll(t))i.remove();for(const i of e.querySelectorAll("a"))i.outerHTML=i.innerHTML;for(const i of e.querySelectorAll("p"))i.innerHTML=i.innerHTML.replace(/\s\(.*?class=".*?(ext-phonos|IPA).*?".*?\)/g,"");return e.innerText.trim()===""?null:e.outerHTML},he=e=>{const t=e.querySelector('meta[property="mw:leadImage"]');if(!t)return null;const i=t.getAttribute("content").split("/"),n=decodeURIComponent(i[i.length-1]),s=e.querySelector('a[href*="'+n+'"]');if(!s)return null;const r=s.querySelector("span[data-src]");if(r)return r.getAttribute("data-src");const c=s.querySelector("img[src]");return c?c.getAttribute("src"):null},ve=(e,t,i,n=q)=>{const s=`https://${e}.wikipedia.org/api/rest_v1/page/mobile-html/${encodeURIComponent(t)}?${G()}`;n(s,(r,c)=>{if(!r)return B($(e,"preview-console-error-message",t,e),c),!1;const l=new DOMParser().parseFromString(r,"text/html"),u=he(l);return{sections:Array.from(l.querySelectorAll("section")).map(m=>{const f=m.querySelector("h2, h3, h4, h5, h6"),w=f?f.id:t,y=f?f.tagName.toLowerCase():"h2",h=m.querySelector("figure span.mw-file-element"),R=h?h.getAttribute("data-src"):u,L=ye(m.querySelector("p"));return L?{id:w,level:y,imgUrl:R,extractHtml:L}:null}).filter(m=>m),dir:l.body.getAttribute("dir")}},i,!1)},$e=(e,t,i,n,s)=>{ve(e,t,r=>{for(const c of r.sections)if(c.id===i){n({title:t+"#"+i,extractHtml:c.extractHtml,imgUrl:c.imgUrl,dir:r.dir,type:"standard"});return}n(!1)},s)},ze=(e,t,i,n=q)=>{const[s,r]=t.split("#");return r?$e(e,s,r,i,n):t.indexOf(":")===-1?fe(e,t,i,n):pe(e,t,i,n)},Be=(e,t,i,n=q)=>{t=ge(t);const s=`https://${e}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(t)}`;n(s,r=>(r.items||[]).reduce((u,d)=>{if(d.showInGallery&&d.type==="image"){const m=d&&d.srcset&&`https:${d.srcset[0].src}`,f={caption:d.caption&&d.caption.text.trim(),thumb:m,title:d.title};return u.concat(f)}return u},[]),i)},be=(e,t,i,n=q)=>{const s={action:"query",prop:"imageinfo",iiextmetadatafilter:"License|LicenseShortName|ImageDescription|Artist",iiextmetadatalanguage:e,iiextmetadatamultilang:1,iiurlwidth:V().width,iiurlheight:V().height,iiprop:"url|extmetadata",titles:t},r=J(e,s);n(r,c=>{const u=c.query.pages[0].imageinfo;if(!u)return{};const{Artist:d,ImageDescription:m,LicenseShortName:f}=u[0].extmetadata,w=d&&_(d.value),y=m&&_(typeof m.value=="string"&&m.value||m.value[e]||m.value[Object.keys(m.value)[0]]),h=u[0].thumburl;return{author:w,description:y,license:f&&f.value,filePage:ue(u[0].descriptionshorturl),bestFitImageUrl:h}},i)},H=1,Q=2,M=()=>window.innerWidth,U=()=>window.innerHeight,o={screenX:null,originalMarginLeft:null,currentMarginLeft:null,originalTransition:null,imgOriginalTransition:null,durationStart:null,translateX:0,translateY:0,clientX:null,clientY:null,imageRect:{}},g=[];let T=-1,E=!1;const I=e=>e.target.nodeName==="IMG"?e.target:e.target.querySelector("img"),K=e=>e?Number(e.slice(e.indexOf("scale")+6,-1)):H,xe=e=>{const i=/translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/.exec(e);return i?`translate3d(${i.groups.x}px, ${i.groups.y}px, 0px)`:`translate3d(${o.translateX}px, ${o.translateY}px, 0px)`},P=(e,t)=>{const n=[`${t}-item-caption`,`${t}-item-caption-expand-cue`,`${t}-item-caption-text`,`${t}-item-attribution`,`${t}-button`].find(s=>e.target.className.indexOf(s)>-1);return e.pointerType!=="touch"||n},C=()=>E,W=e=>e.naturalHeight<=e.naturalWidth,Se=e=>e.naturalWidth+50<M(),k=()=>g.length,qe=(e,t=null)=>{const i={},n=()=>t.clientY>e.naturalHeight&&!W(e)?e.naturalHeight:t.clientY;return g.length===2?(i.x=(g[0].clientX+g[1].clientX)/2,i.y=(g[0].clientY+g[1].clientY)/2):(i.x=t.clientX,i.y=n()),i},ee=(e,t)=>{const i=qe(e,t);return W(e)?i.y=i.y-e.naturalHeight:Se(e)&&(i.x=e.naturalWidth/2,i.y=e.naturalHeight/2),`${i.x}px ${i.y}px`},we=e=>{for(let t=0;t<g.length;t++)if(g[t].pointerId===e.pointerId){g.splice(t,1);break}},te=e=>{e&&(e.style.transition=o.imgOriginalTransition,e.style.transform=`scale(${H})`,E=!1,o.translateX=0,o.translateY=0)},Le=e=>{const t=I(e);o.clientX=null,o.clientY=null,o.translateX=0,o.translateY=0,t.style.transformOrigin=ee(t,e),C()?(t.style.transform=`scale(${H})`,E=!1):(t.style.transform=`scale(${Q})`,E=!0)},Te=e=>{const t=I(e);if(!t)return;const i=t.getBoundingClientRect();if(o.imageRect.top=i.top,o.imageRect.bottom=i.bottom,o.imageRect.left=i.left,o.imageRect.right=i.right,g.length<1){const n=window.getComputedStyle(t);o.imgOriginalTransition=n.transition}g.push(e)},Me=e=>{const t=I(e),i=t.style.transform,n=.01,s=.4;let r=K(i);const c=xe(i);for(let l=0;l<g.length;l++)if(e.pointerId===g[l].pointerId){g[l]=e;break}if(g.length===2){const l=Math.abs(g[0].clientX-g[1].clientX),u=Math.abs(g[0].clientY-g[1].clientY),d=Math.sqrt(Math.pow(l,2)+Math.pow(u,2));T>0&&(t.style.transformOrigin=ee(t),t.style.transition="unset",d>T&&(E=!0,r+n<Q&&(r+=n,t.style.transform=`${c} scale(${r})`)),d<T&&(r-n>H+s?(r-=n,t.style.transform=`${c} scale(${r})`):te(t))),T=d}},Ee=(e,t,i,n,s)=>{const r=I(e);if(!r)return;const c=r.style.transform,l=K(c),u=M()/8,d=M()-u,m=W(r)?U()/4:U()/8,f=U()-m,w=80;r.style.transition="unset",(!o.clientX||!o.clientY)&&(o.clientX=e.clientX,o.clientY=e.clientY);const y=o.translateX+(e.clientX-o.clientX),h=o.translateY+(e.clientY-o.clientY),R=h-o.translateY>=0,L=y-o.translateX>=0,re=()=>{const A=o.imageRect.left<u&&L||o.imageRect.right>d&&!L,le=o.imageRect.top<m&&R||o.imageRect.bottom>f&&!R;return A&&le},se=()=>{o.imageRect.top=o.imageRect.top+(h-o.translateY),o.imageRect.bottom=o.imageRect.bottom+(h-o.translateY),o.imageRect.left=o.imageRect.left+(y-o.translateX),o.imageRect.right=o.imageRect.right+(y-o.translateX),o.translateX=y,o.translateY=h,o.clientX=e.clientX,o.clientY=e.clientY},oe=Math.abs(y)-Math.abs(o.translateX)>w;if(re())se(),r.style.transform=`translate3d(${y}px, ${h}px, 0px) scale(${l})`;else if(oe){const A=s==="ltr"&&y<0||s==="rtl"&&y>0;!A&&i[n-1]?t(-1):A&&i[n+1]&&t(1)}},Xe=e=>{const t=I(e);t&&(t.style.transition=o.imgOriginalTransition),we(e),o.clientX=null,o.clientY=null,g.length<2&&(T=-1)},Ie=(e,t,i)=>{const n=window.getComputedStyle(t);o.durationStart=Date.now(),o.screenX=e.clientX,o.originalMarginLeft=+n[i].slice(0,-2),o.currentMarginLeft=+n[i].slice(0,-2),o.originalTransition=n.transition,t.style.transition="unset"},Re=(e,t,i,n)=>{const r=e.clientX-o.screenX;o.currentMarginLeft=o.originalMarginLeft+r*(n==="ltr"?1:-1),t.style[i]=o.currentMarginLeft+"px",e.preventDefault()},Ae=(e,t,i,n,s)=>{const r=o.originalMarginLeft-o.currentMarginLeft,c=Date.now()-o.durationStart;Math.abs(r/M())>.4||c<=300&&Math.abs(r)>5?i(r>0?1:-1):t.style[n]=-M()*s+"px"};let D=[];const N=(e,t,i,n=void 0)=>{e.addEventListener(t,i,n),D.push([e,t,i,n])},Ce=()=>{D.forEach(e=>{const[t,i,n,s]=e;t.removeEventListener(i,n,s)}),D=[]};let p=0,b="",Y,j,x;const X=()=>window.innerWidth,a="wp-gallery-fullscreen-slider",He=(e,t,i,n=[],s="")=>{const r=n.map(()=>`
		<div class="${a}-item">
				<div class="${a}-item-loading">
						<div class="${a}-item-loading-spinner">
								<div class="${a}-item-loading-spinner-animation">
										<div class="${a}-item-loading-spinner-animation-bounce"></div>
								</div>
						</div>
						<div class="${a}-item-loading-text">${$(e,"gallery-loading-still")}</div>
				</div>
				<div class="${a}-item-loading-error">
					<div class="${a}-item-loading-error-text">${$(e,"gallery-loading-error")}</div>
					<div class="${a}-item-loading-error-refresh">${$(e,"gallery-loading-error-refresh")}</div>
				</div>
		</div>
		`.trim()).join("");return n.some((c,l)=>c.thumb===s?(p=l,!0):!1),b=t,Y=e,j=n,x=i,`
		<div class="${a}" style="${b==="ltr"?"margin-left":"margin-right"}:-${p*X()}px">
				<div class="${a}-button previous"></div>
				<div class="${a}-button next"></div>
				${r}
		</div>
		`.trim()},Ye=(e,t)=>{const i=()=>e.description?e.description:t.caption?t.caption:"",n=u=>{const d=["CC","BY","SA","Fair","Public"];let m="";return d.forEach(f=>{u&&u.indexOf(f)!==-1&&(m+=`<div class="${a}-item-attribution-info-${f.toLowerCase()}"></div>`)}),m},s=e.author?e.author:$(Y,"gallery-unknown-author"),r=e.filePage,c=i();return`
		<div class="${a}-item-caption">
			${(X()<400&&c.length>128?!0:X()>400&&c.length>142)?`<div class="${a}-item-caption-expand-cue"></div>`:""}
			${c?`<div class="${a}-item-caption-text"><bdi>${c}</bdi></div>`:""}
		</div>
		<div class="${a}-item-attribution">
			<div class="${a}-item-attribution-info">
				${n(e.license)}
				${s?`<bdi class="${a}-item-attribution-info-author">${s}</bdi>`:""}
			</div>
			${r?`<div class="${a}-item-attribution-more-info">
				<a href="${r}" class="${a}-item-attribution-more-info-link" target="_blank"></a>
			</div>`:""}
		</div>
	`.trim()},ie=(e,t=!1)=>{const i=e.querySelector("img"),n=e.querySelector(`.${a}-item-loading`),s=e.querySelector(`.${a}-item-loading-error`);if(t&&(x.querySelector(`.${a}`).querySelectorAll(`.${a}-item`).forEach(l=>{const u=l.querySelector("img"),d=l.querySelector(`.${a}-item-caption`),m=l.querySelector(`.${a}-item-attribution`);u&&l.removeChild(u),d&&l.removeChild(d),m&&l.removeChild(m)}),v(0,!0),n.style.visibility="visible",s.style.visibility="hidden"),i.complete)n.style.visibility="hidden",s.style.visibility="hidden",i.style.visibility="visible";else{const r=e.querySelector(`.${a}-item-loading-text`),c=setTimeout(()=>{r.style.visibility="visible"},5e3);i.addEventListener("load",()=>{n.style.visibility="hidden",s.style.visibility="hidden",r.style.visibility="hidden",clearTimeout(c)}),i.addEventListener("error",()=>{const l=e.querySelector(`.${a}-item-loading-error-refresh`);if(n.style.visibility="hidden",i.style.visibility="hidden",!de()){const u=e.querySelector(`.${a}-item-loading-error-text`);u.innerText=$(Y,"gallery-loading-error-offline"),s.classList.add("offline")}s.style.visibility="visible",clearTimeout(c),l.addEventListener("click",()=>{ie(e,!0)})})}},ne=(e,t=!1)=>{const i=e.querySelector(`.${a}-item-caption-text`),n=e.querySelector(`.${a}-item-caption-expand-cue`),s=e.querySelector(".expanded");n&&s||t&&n?(n.classList.remove("expanded"),i.style.maxHeight="80px"):n&&(n.classList.add("expanded"),i.style.maxHeight="241px")},F=(e,t=!1)=>{const s=x.querySelector(`.${a}`).querySelectorAll(`.${a}-item`)[e];s&&be(Y,j[e].title,r=>{const c=s.querySelector("img"),l=s.querySelector(`.${a}-item-caption`);c||(t?s.insertAdjacentHTML("beforeend",`<img src="${r.bestFitImageUrl}?timestamp=${Date.now()}"/>`):s.insertAdjacentHTML("beforeend",`<img src="${r.bestFitImageUrl}"/>`),ie(s)),l||(s.insertAdjacentHTML("beforeend",Ye(r,j[e])),s.querySelector(`.${a}-item-caption`).addEventListener("click",()=>{ne(s)}))})},v=(e=1,t=!1)=>{const i=x.querySelector(`.${a}`),n=i.querySelectorAll(`.${a}-item`),s=i.querySelector(".next"),r=i.querySelector(".previous"),c=p+e,l=n[c],u=n[p].querySelector("img");l&&(ne(n[p],!0),p+=e,s.style.opacity=p===n.length-1?"0.5":"1",r.style.opacity=p===0?"0.5":"1",te(u),F(p,t),F(p+1,t),F(p-1,t)),i.style[b==="ltr"?"marginLeft":"marginRight"]=-X()*p+"px"},z=()=>{v(-1)},Oe=()=>{const e=x.querySelector(`.${a}`),t=b==="ltr"?"marginLeft":"marginRight",i=e.querySelectorAll(`.${a}-item`);e.addEventListener("pointerdown",n=>{P(n,a)||(Te(n),k()===1&&!C()&&Ie(n,e,t))}),e.addEventListener("pointermove",n=>{P(n,a)||(k()>1?Me(n):C()?Ee(n,v,i,p,b):Re(n,e,t,b))}),e.addEventListener("pointerout",n=>{P(n,a)||(e.style.transition=o.originalTransition,k()===1&&!C()&&Ae(n,e,v,t,p),Xe(n))})},Ue=()=>{x.querySelector(".wp-gallery-fullscreen").classList.toggle("wp-gallery-fullscreen-focus-mode")},Pe=()=>{const e=x.querySelector(`.${a}`),t=e.querySelectorAll(`.${a}-item`),i=e.querySelector(".next"),n=e.querySelector(".previous");let s=!1;v(0),Oe(),e.addEventListener("click",l=>{(l.target.className===`${a}-item`||l.target.tagName==="IMG")&&(s?(clearTimeout(s),s=null,Le(l)):s=setTimeout(()=>{s=null,Ue()},300))});const r=function(l){l.style.transition="unset",l.style.marginLeft=-p*X()+"px"};let c;N(window,"resize",()=>{const l=document.querySelector("."+a);r(l),clearTimeout(c),c=setTimeout(()=>{l.style.removeProperty("transition")},100)}),t.length===1?(n.style.visibility="hidden",i.style.visibility="hidden"):(i.addEventListener("click",()=>{v()}),n.addEventListener("click",()=>{z()}),N(window,"keydown",({key:l})=>{switch(l){case"ArrowRight":case"Right":b==="ltr"?v():z();break;case"ArrowLeft":case"Left":b==="ltr"?z():v();break}}))},S="wp-gallery-fullscreen",ke=(e,t)=>`
		<div class="${S}" lang="${e}" dir="${t}">
			<div class="${S}-close"></div>
			<div class="${S}-main"></div>
		</div>
	`.trim(),Z=e=>{const t=e.querySelector(`.${S}`);e.removeChild(t),Ce()},De=(e,t,i,n,s=document.body)=>{s.insertAdjacentHTML("beforeend",ke(i,n)),s.querySelector(`.${S}-main`).insertAdjacentHTML("beforeend",He(i,n,s,e,t)),s.querySelector(`.${S}-close`).addEventListener("click",()=>{Z(s)}),N(window,"keydown",({key:c})=>{(c==="Escape"||c==="Esc")&&Z(s)}),Pe()};export{ze as a,ve as g,Be as r,De as s};
