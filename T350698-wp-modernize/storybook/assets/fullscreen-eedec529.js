/*! @license DOMPurify 2.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.7/LICENSE */function W(e){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(e)}function ft(e,t){return ft=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i},ft(e,t)}function Sr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Me(e,t,n){return Sr()?Me=Reflect.construct:Me=function(o,s,m){var p=[null];p.push.apply(p,s);var v=Function.bind.apply(o,p),h=new v;return m&&ft(h,m.prototype),h},Me.apply(null,arguments)}function P(e){return wr(e)||Lr(e)||xr(e)||Rr()}function wr(e){if(Array.isArray(e))return pt(e)}function Lr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xr(e,t){if(e){if(typeof e=="string")return pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pt(e,t)}}function pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mr=Object.hasOwnProperty,zt=Object.setPrototypeOf,Or=Object.isFrozen,Nr=Object.getPrototypeOf,Dr=Object.getOwnPropertyDescriptor,O=Object.freeze,F=Object.seal,Ir=Object.create,Jt=typeof Reflect<"u"&&Reflect,De=Jt.apply,dt=Jt.construct;De||(De=function(t,n,i){return t.apply(n,i)});O||(O=function(t){return t});F||(F=function(t){return t});dt||(dt=function(t,n){return Me(t,P(n))});var Cr=C(Array.prototype.forEach),Wt=C(Array.prototype.pop),me=C(Array.prototype.push),Oe=C(String.prototype.toLowerCase),et=C(String.prototype.toString),$r=C(String.prototype.match),k=C(String.prototype.replace),kr=C(String.prototype.indexOf),Pr=C(String.prototype.trim),M=C(RegExp.prototype.test),tt=Fr(TypeError);function C(e){return function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return De(e,t,i)}}function Fr(e){return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return dt(e,n)}}function d(e,t,n){var i;n=(i=n)!==null&&i!==void 0?i:Oe,zt&&zt(e,null);for(var o=t.length;o--;){var s=t[o];if(typeof s=="string"){var m=n(s);m!==s&&(Or(t)||(t[o]=m),s=m)}e[s]=!0}return e}function j(e){var t=Ir(null),n;for(n in e)De(Mr,e,[n])===!0&&(t[n]=e[n]);return t}function xe(e,t){for(;e!==null;){var n=Dr(e,t);if(n){if(n.get)return C(n.get);if(typeof n.value=="function")return C(n.value)}e=Nr(e)}function i(o){return console.warn("fallback value for",o),null}return i}var Gt=O(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),rt=O(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nt=O(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ur=O(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),it=O(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Hr=O(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Bt=O(["#text"]),Xt=O(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),at=O(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Yt=O(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Re=O(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),qr=F(/\{\{[\w\W]*|[\w\W]*\}\}/gm),zr=F(/<%[\w\W]*|[\w\W]*%>/gm),Wr=F(/\${[\w\W]*}/gm),Gr=F(/^data-[\-\w.\u00B7-\uFFFF]/),Br=F(/^aria-[\-\w]+$/),Xr=F(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Yr=F(/^(?:\w+script|data):/i),jr=F(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Vr=F(/^html$/i),Zr=function(){return typeof window>"u"?null:window},Kr=function(t,n){if(W(t)!=="object"||typeof t.createPolicy!="function")return null;var i=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(i=n.currentScript.getAttribute(o));var s="dompurify"+(i?"#"+i:"");try{return t.createPolicy(s,{createHTML:function(p){return p},createScriptURL:function(p){return p}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function Qt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Zr(),t=function(r){return Qt(r)};if(t.version="2.4.7",t.removed=[],!e||!e.document||e.document.nodeType!==9)return t.isSupported=!1,t;var n=e.document,i=e.document,o=e.DocumentFragment,s=e.HTMLTemplateElement,m=e.Node,p=e.Element,v=e.NodeFilter,h=e.NamedNodeMap,E=h===void 0?e.NamedNodeMap||e.MozNamedAttrMap:h,$=e.HTMLFormElement,ie=e.DOMParser,R=e.trustedTypes,I=p.prototype,ye=xe(I,"cloneNode"),Te=xe(I,"nextSibling"),ke=xe(I,"childNodes"),ae=xe(I,"parentNode");if(typeof s=="function"){var oe=i.createElement("template");oe.content&&oe.content.ownerDocument&&(i=oe.content.ownerDocument)}var L=Kr(R,n),se=L?L.createHTML(""):"",Ee=i,Pe=Ee.implementation,lr=Ee.createNodeIterator,cr=Ee.createDocumentFragment,ur=Ee.getElementsByTagName,mr=n.importNode,Tt={};try{Tt=j(i).documentMode?i.documentMode:{}}catch{}var U={};t.isSupported=typeof ae=="function"&&Pe&&Pe.createHTMLDocument!==void 0&&Tt!==9;var Fe=qr,Ue=zr,He=Wr,fr=Gr,pr=Br,dr=Yr,Et=jr,qe=Xr,b=null,bt=d({},[].concat(P(Gt),P(rt),P(nt),P(it),P(Bt))),A=null,At=d({},[].concat(P(Xt),P(at),P(Yt),P(Re))),y=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),le=null,ze=null,_t=!0,We=!0,St=!1,wt=!0,K=!1,X=!1,Ge=!1,Be=!1,J=!1,be=!1,Ae=!1,Lt=!0,xt=!1,gr="user-content-",Xe=!0,ce=!1,Q={},ee=null,Rt=d({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Mt=null,Ot=d({},["audio","video","img","source","image","track"]),Ye=null,Nt=d({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),_e="http://www.w3.org/1998/Math/MathML",Se="http://www.w3.org/2000/svg",H="http://www.w3.org/1999/xhtml",te=H,je=!1,Ve=null,vr=d({},[_e,Se,H],et),Y,hr=["application/xhtml+xml","text/html"],yr="text/html",_,re=null,Tr=i.createElement("form"),Dt=function(r){return r instanceof RegExp||r instanceof Function},Ze=function(r){re&&re===r||((!r||W(r)!=="object")&&(r={}),r=j(r),Y=hr.indexOf(r.PARSER_MEDIA_TYPE)===-1?Y=yr:Y=r.PARSER_MEDIA_TYPE,_=Y==="application/xhtml+xml"?et:Oe,b="ALLOWED_TAGS"in r?d({},r.ALLOWED_TAGS,_):bt,A="ALLOWED_ATTR"in r?d({},r.ALLOWED_ATTR,_):At,Ve="ALLOWED_NAMESPACES"in r?d({},r.ALLOWED_NAMESPACES,et):vr,Ye="ADD_URI_SAFE_ATTR"in r?d(j(Nt),r.ADD_URI_SAFE_ATTR,_):Nt,Mt="ADD_DATA_URI_TAGS"in r?d(j(Ot),r.ADD_DATA_URI_TAGS,_):Ot,ee="FORBID_CONTENTS"in r?d({},r.FORBID_CONTENTS,_):Rt,le="FORBID_TAGS"in r?d({},r.FORBID_TAGS,_):{},ze="FORBID_ATTR"in r?d({},r.FORBID_ATTR,_):{},Q="USE_PROFILES"in r?r.USE_PROFILES:!1,_t=r.ALLOW_ARIA_ATTR!==!1,We=r.ALLOW_DATA_ATTR!==!1,St=r.ALLOW_UNKNOWN_PROTOCOLS||!1,wt=r.ALLOW_SELF_CLOSE_IN_ATTR!==!1,K=r.SAFE_FOR_TEMPLATES||!1,X=r.WHOLE_DOCUMENT||!1,J=r.RETURN_DOM||!1,be=r.RETURN_DOM_FRAGMENT||!1,Ae=r.RETURN_TRUSTED_TYPE||!1,Be=r.FORCE_BODY||!1,Lt=r.SANITIZE_DOM!==!1,xt=r.SANITIZE_NAMED_PROPS||!1,Xe=r.KEEP_CONTENT!==!1,ce=r.IN_PLACE||!1,qe=r.ALLOWED_URI_REGEXP||qe,te=r.NAMESPACE||H,y=r.CUSTOM_ELEMENT_HANDLING||{},r.CUSTOM_ELEMENT_HANDLING&&Dt(r.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(y.tagNameCheck=r.CUSTOM_ELEMENT_HANDLING.tagNameCheck),r.CUSTOM_ELEMENT_HANDLING&&Dt(r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(y.attributeNameCheck=r.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),r.CUSTOM_ELEMENT_HANDLING&&typeof r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(y.allowCustomizedBuiltInElements=r.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),K&&(We=!1),be&&(J=!0),Q&&(b=d({},P(Bt)),A=[],Q.html===!0&&(d(b,Gt),d(A,Xt)),Q.svg===!0&&(d(b,rt),d(A,at),d(A,Re)),Q.svgFilters===!0&&(d(b,nt),d(A,at),d(A,Re)),Q.mathMl===!0&&(d(b,it),d(A,Yt),d(A,Re))),r.ADD_TAGS&&(b===bt&&(b=j(b)),d(b,r.ADD_TAGS,_)),r.ADD_ATTR&&(A===At&&(A=j(A)),d(A,r.ADD_ATTR,_)),r.ADD_URI_SAFE_ATTR&&d(Ye,r.ADD_URI_SAFE_ATTR,_),r.FORBID_CONTENTS&&(ee===Rt&&(ee=j(ee)),d(ee,r.FORBID_CONTENTS,_)),Xe&&(b["#text"]=!0),X&&d(b,["html","head","body"]),b.table&&(d(b,["tbody"]),delete le.tbody),O&&O(r),re=r)},It=d({},["mi","mo","mn","ms","mtext"]),Ct=d({},["foreignobject","desc","title","annotation-xml"]),Er=d({},["title","style","font","a","script"]),we=d({},rt);d(we,nt),d(we,Ur);var Ke=d({},it);d(Ke,Hr);var br=function(r){var a=ae(r);(!a||!a.tagName)&&(a={namespaceURI:te,tagName:"template"});var l=Oe(r.tagName),g=Oe(a.tagName);return Ve[r.namespaceURI]?r.namespaceURI===Se?a.namespaceURI===H?l==="svg":a.namespaceURI===_e?l==="svg"&&(g==="annotation-xml"||It[g]):!!we[l]:r.namespaceURI===_e?a.namespaceURI===H?l==="math":a.namespaceURI===Se?l==="math"&&Ct[g]:!!Ke[l]:r.namespaceURI===H?a.namespaceURI===Se&&!Ct[g]||a.namespaceURI===_e&&!It[g]?!1:!Ke[l]&&(Er[l]||!we[l]):!!(Y==="application/xhtml+xml"&&Ve[r.namespaceURI]):!1},q=function(r){me(t.removed,{element:r});try{r.parentNode.removeChild(r)}catch{try{r.outerHTML=se}catch{r.remove()}}},Je=function(r,a){try{me(t.removed,{attribute:a.getAttributeNode(r),from:a})}catch{me(t.removed,{attribute:null,from:a})}if(a.removeAttribute(r),r==="is"&&!A[r])if(J||be)try{q(a)}catch{}else try{a.setAttribute(r,"")}catch{}},$t=function(r){var a,l;if(Be)r="<remove></remove>"+r;else{var g=$r(r,/^[\r\n\t ]+/);l=g&&g[0]}Y==="application/xhtml+xml"&&te===H&&(r='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+r+"</body></html>");var N=L?L.createHTML(r):r;if(te===H)try{a=new ie().parseFromString(N,Y)}catch{}if(!a||!a.documentElement){a=Pe.createDocument(te,"template",null);try{a.documentElement.innerHTML=je?se:N}catch{}}var x=a.body||a.documentElement;return r&&l&&x.insertBefore(i.createTextNode(l),x.childNodes[0]||null),te===H?ur.call(a,X?"html":"body")[0]:X?a.documentElement:x},kt=function(r){return lr.call(r.ownerDocument||r,r,v.SHOW_ELEMENT|v.SHOW_COMMENT|v.SHOW_TEXT,null,!1)},Ar=function(r){return r instanceof $&&(typeof r.nodeName!="string"||typeof r.textContent!="string"||typeof r.removeChild!="function"||!(r.attributes instanceof E)||typeof r.removeAttribute!="function"||typeof r.setAttribute!="function"||typeof r.namespaceURI!="string"||typeof r.insertBefore!="function"||typeof r.hasChildNodes!="function")},ue=function(r){return W(m)==="object"?r instanceof m:r&&W(r)==="object"&&typeof r.nodeType=="number"&&typeof r.nodeName=="string"},z=function(r,a,l){U[r]&&Cr(U[r],function(g){g.call(t,a,l,re)})},Pt=function(r){var a;if(z("beforeSanitizeElements",r,null),Ar(r)||M(/[\u0080-\uFFFF]/,r.nodeName))return q(r),!0;var l=_(r.nodeName);if(z("uponSanitizeElement",r,{tagName:l,allowedTags:b}),r.hasChildNodes()&&!ue(r.firstElementChild)&&(!ue(r.content)||!ue(r.content.firstElementChild))&&M(/<[/\w]/g,r.innerHTML)&&M(/<[/\w]/g,r.textContent)||l==="select"&&M(/<template/i,r.innerHTML))return q(r),!0;if(!b[l]||le[l]){if(!le[l]&&Ut(l)&&(y.tagNameCheck instanceof RegExp&&M(y.tagNameCheck,l)||y.tagNameCheck instanceof Function&&y.tagNameCheck(l)))return!1;if(Xe&&!ee[l]){var g=ae(r)||r.parentNode,N=ke(r)||r.childNodes;if(N&&g)for(var x=N.length,w=x-1;w>=0;--w)g.insertBefore(ye(N[w],!0),Te(r))}return q(r),!0}return r instanceof p&&!br(r)||(l==="noscript"||l==="noembed"||l==="noframes")&&M(/<\/no(script|embed|frames)/i,r.innerHTML)?(q(r),!0):(K&&r.nodeType===3&&(a=r.textContent,a=k(a,Fe," "),a=k(a,Ue," "),a=k(a,He," "),r.textContent!==a&&(me(t.removed,{element:r.cloneNode()}),r.textContent=a)),z("afterSanitizeElements",r,null),!1)},Ft=function(r,a,l){if(Lt&&(a==="id"||a==="name")&&(l in i||l in Tr))return!1;if(!(We&&!ze[a]&&M(fr,a))){if(!(_t&&M(pr,a))){if(!A[a]||ze[a]){if(!(Ut(r)&&(y.tagNameCheck instanceof RegExp&&M(y.tagNameCheck,r)||y.tagNameCheck instanceof Function&&y.tagNameCheck(r))&&(y.attributeNameCheck instanceof RegExp&&M(y.attributeNameCheck,a)||y.attributeNameCheck instanceof Function&&y.attributeNameCheck(a))||a==="is"&&y.allowCustomizedBuiltInElements&&(y.tagNameCheck instanceof RegExp&&M(y.tagNameCheck,l)||y.tagNameCheck instanceof Function&&y.tagNameCheck(l))))return!1}else if(!Ye[a]){if(!M(qe,k(l,Et,""))){if(!((a==="src"||a==="xlink:href"||a==="href")&&r!=="script"&&kr(l,"data:")===0&&Mt[r])){if(!(St&&!M(dr,k(l,Et,"")))){if(l)return!1}}}}}}return!0},Ut=function(r){return r.indexOf("-")>0},Ht=function(r){var a,l,g,N;z("beforeSanitizeAttributes",r,null);var x=r.attributes;if(x){var w={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:A};for(N=x.length;N--;){a=x[N];var Le=a,S=Le.name,Qe=Le.namespaceURI;if(l=S==="value"?a.value:Pr(a.value),g=_(S),w.attrName=g,w.attrValue=l,w.keepAttr=!0,w.forceKeepAttr=void 0,z("uponSanitizeAttribute",r,w),l=w.attrValue,!w.forceKeepAttr&&(Je(S,r),!!w.keepAttr)){if(!wt&&M(/\/>/i,l)){Je(S,r);continue}K&&(l=k(l,Fe," "),l=k(l,Ue," "),l=k(l,He," "));var qt=_(r.nodeName);if(Ft(qt,g,l)){if(xt&&(g==="id"||g==="name")&&(Je(S,r),l=gr+l),L&&W(R)==="object"&&typeof R.getAttributeType=="function"&&!Qe)switch(R.getAttributeType(qt,g)){case"TrustedHTML":{l=L.createHTML(l);break}case"TrustedScriptURL":{l=L.createScriptURL(l);break}}try{Qe?r.setAttributeNS(Qe,S,l):r.setAttribute(S,l),Wt(t.removed)}catch{}}}}z("afterSanitizeAttributes",r,null)}},_r=function u(r){var a,l=kt(r);for(z("beforeSanitizeShadowDOM",r,null);a=l.nextNode();)z("uponSanitizeShadowNode",a,null),!Pt(a)&&(a.content instanceof o&&u(a.content),Ht(a));z("afterSanitizeShadowDOM",r,null)};return t.sanitize=function(u){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a,l,g,N,x;if(je=!u,je&&(u="<!-->"),typeof u!="string"&&!ue(u))if(typeof u.toString=="function"){if(u=u.toString(),typeof u!="string")throw tt("dirty is not a string, aborting")}else throw tt("toString is not a function");if(!t.isSupported){if(W(e.toStaticHTML)==="object"||typeof e.toStaticHTML=="function"){if(typeof u=="string")return e.toStaticHTML(u);if(ue(u))return e.toStaticHTML(u.outerHTML)}return u}if(Ge||Ze(r),t.removed=[],typeof u=="string"&&(ce=!1),ce){if(u.nodeName){var w=_(u.nodeName);if(!b[w]||le[w])throw tt("root node is forbidden and cannot be sanitized in-place")}}else if(u instanceof m)a=$t("<!---->"),l=a.ownerDocument.importNode(u,!0),l.nodeType===1&&l.nodeName==="BODY"||l.nodeName==="HTML"?a=l:a.appendChild(l);else{if(!J&&!K&&!X&&u.indexOf("<")===-1)return L&&Ae?L.createHTML(u):u;if(a=$t(u),!a)return J?null:Ae?se:""}a&&Be&&q(a.firstChild);for(var Le=kt(ce?u:a);g=Le.nextNode();)g.nodeType===3&&g===N||Pt(g)||(g.content instanceof o&&_r(g.content),Ht(g),N=g);if(N=null,ce)return u;if(J){if(be)for(x=cr.call(a.ownerDocument);a.firstChild;)x.appendChild(a.firstChild);else x=a;return(A.shadowroot||A.shadowrootmod)&&(x=mr.call(n,x,!0)),x}var S=X?a.outerHTML:a.innerHTML;return X&&b["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&M(Vr,a.ownerDocument.doctype.name)&&(S="<!DOCTYPE "+a.ownerDocument.doctype.name+`>
`+S),K&&(S=k(S,Fe," "),S=k(S,Ue," "),S=k(S,He," ")),L&&Ae?L.createHTML(S):S},t.setConfig=function(u){Ze(u),Ge=!0},t.clearConfig=function(){re=null,Ge=!1},t.isValidAttribute=function(u,r,a){re||Ze({});var l=_(u),g=_(r);return Ft(l,g,a)},t.addHook=function(u,r){typeof r=="function"&&(U[u]=U[u]||[],me(U[u],r))},t.removeHook=function(u){if(U[u])return Wt(U[u])},t.removeHooks=function(u){U[u]&&(U[u]=[])},t.removeAllHooks=function(){U={}},t}var Jr=Qt();const Qr=e=>{let n=e;for(let i=0;i<5;i++){const o=decodeURIComponent(n);if(o===n)return o;n=o}return n},Dn=e=>{const t=[/^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/wiki\/([^#?]+)/,/^https?:\/\/(\w+)(\.m)?\.wikipedia\.org\/w\/index.php\?title=([^#&]+)/];for(let n=0;n<t.length;n++){const i=t[n].exec(e);if(i)return{lang:i[1],mobile:!!i[2],title:Qr(i[3])}}return null},en="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,tn=()=>window.navigator.onLine,rn=e=>["ar","arc","arz","dv","fa","ha","he","khw","ks","ku","ps","ur","yi","pnb","ckb","mzn","glk","ug","sd","azb","lrc"].indexOf(e)===-1?"ltr":"rtl",nn={format:"json",formatversion:2,origin:"*"},er=(e,t)=>(t={...nn,...t},`https://${e}.wikipedia.org/w/api.php`+"?"+Object.keys(t).map(i=>`${i}=${encodeURIComponent(t[i])}`).join("&")),an=e=>e.replace(/https:\/\/(.*?)\./,t=>t+"m."),jt=e=>{const t=new window.DOMParser().parseFromString(e,"text/html");for(const n of t.querySelectorAll("span"))n.style.display==="none"&&n.remove();return t.body.textContent||""},on=e=>Jr.sanitize(e),Vt=()=>({height:window.innerHeight,width:window.innerWidth}),ht=()=>"wprov=wppw2"+(en?"t":""),In=(e,t,n,i=!0)=>`https://${e}${n?".m":""}.wikipedia.org/wiki/${encodeURIComponent(t)}${i?`?${ht()}`:""}`,Cn=()=>{console.log("Wikipedia Preview - version 1.8.0 (e8d42da)")},Zt=(...e)=>{console.error.apply(console,e)},sn=(e,t)=>{const n=new XMLHttpRequest;n.open("GET",e),n.send(),n.addEventListener("load",()=>{t(JSON.parse(n.responseText))}),n.addEventListener("error",()=>{t(!1,n.status)})},ot={},ve=(e,t,n,i=sn)=>{if(ot[e]!==void 0){n(ot[e]);return}i(e,(o,s)=>{o?n(ot[e]=t(o)):n(!1,s)})},ln={"continue-reading":"Continue Reading","gallery-loading-error":"There was an error loading this image","gallery-loading-error-offline":"No internet connection available.","gallery-loading-error-refresh":"Refresh","gallery-loading-still":"Still loading","gallery-unknown-author":"Author unknown","preview-error-message":"There was an issue while displaying this preview.","preview-console-error-message":"Preview unavailable for article '$1' (Language: $2)","read-on-wiki":"Read on Wikipedia","read-more":"Read more on Wikipedia","preview-disambiguation-message":"Title <strong>$1</strong> is related to more than one article on Wikipedia.","preview-offline-message":"No internet connection available.","preview-offline-cta":"Try again"},fe={en:ln},V=(e,t,...n)=>{if(!fe[e])try{fe[e]=require(`../i18n/${e}.json`)}catch{fe[e]={}}let i=fe[e][t]||fe.en[t]||t;return n.forEach((o,s)=>{i=i.replace(new RegExp(`\\$${s+1}`,"g"),o)}),i},cn=(e,t,n,i=ve)=>{const s=er(e,{action:"query",prop:"extracts|pageimages",exsentences:4,explaintext:1,exsectionformat:"plain",piprop:"thumbnail",pilimit:1,titles:t})+"&"+ht();i(s,m=>{const p=m.query.pages[Object.keys(m.query.pages)[0]];return p.extract?{title:t,extractHtml:"<p>"+p.extract+"</p>",imgUrl:p.thumbnail?p.thumbnail.source:null,dir:rn(e),type:"standard"}:!1},n)},un=(e,t,n,i=ve)=>{const o=`https://${e}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t)}?${ht()}`;i(o,(s,m)=>s?s.type==="standard"||s.type==="disambiguation"?{title:s.titles.canonical,extractHtml:on(s.extract_html),imgUrl:s.thumbnail?s.thumbnail.source:null,dir:s.dir,type:s.type}:s.type==="no-extract"&&s.description?{title:s.titles.canonical,extractHtml:"<p>"+s.description+"</p>",imgUrl:s.thumbnail?s.thumbnail.source:null,dir:s.dir,type:"standard"}:(Zt(V(e,"preview-console-error-message",t,e),s),!1):(Zt(V(e,"preview-console-error-message",t,e),m),!1),n)},$n=(e,t,n,i=ve)=>t.indexOf(":")===-1?un(e,t,n,i):cn(e,t,n,i),kn=(e,t,n,i=ve)=>{const o=`https://${e}.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(t)}`;i(o,s=>(s.items||[]).reduce((v,h)=>{if(h.showInGallery&&h.type==="image"){const E=h&&h.srcset&&`https:${h.srcset[0].src}`,$={caption:h.caption&&h.caption.text.trim(),thumb:E,title:h.title};return v.concat($)}return v},[]),n)},mn=(e,t,n,i=ve)=>{const o={action:"query",prop:"imageinfo",iiextmetadatafilter:"License|LicenseShortName|ImageDescription|Artist",iiextmetadatalanguage:e,iiextmetadatamultilang:1,iiurlwidth:Vt().width,iiurlheight:Vt().height,iiprop:"url|extmetadata",titles:t},s=er(e,o);i(s,m=>{const v=m.query.pages[0].imageinfo;if(!v)return{};const{Artist:h,ImageDescription:E,LicenseShortName:$}=v[0].extmetadata,ie=h&&jt(h.value),R=E&&jt(typeof E.value=="string"&&E.value||E.value[e]||E.value[Object.keys(E.value)[0]]),I=v[0].thumburl;return{author:ie,description:R,license:$&&$.value,filePage:an(v[0].descriptionshorturl),bestFitImageUrl:I}},n)};const Ce=1,tr=2,de=window.innerWidth,st=window.innerHeight,c={screenX:null,originalMarginLeft:null,currentMarginLeft:null,originalTransition:null,imgOriginalTransition:null,durationStart:null,translateX:0,translateY:0,clientX:null,clientY:null,imageRect:{}};let T=[],pe=-1,ge=!1;const he=e=>e.target.nodeName==="IMG"?e.target:e.target.querySelector("img"),rr=e=>e?Number(e.slice(e.indexOf("scale")+6,-1)):Ce,fn=e=>{const n=/translate3d\((?<x>.*?)px, (?<y>.*?)px, (?<z>.*?)px/.exec(e);return n?`translate3d(${n.groups.x}px, ${n.groups.y}px, 0px)`:`translate3d(${c.translateX}px, ${c.translateY}px, 0px)`},lt=(e,t)=>{const i=[`${t}-item-caption`,`${t}-item-caption-expand-cue`,`${t}-item-caption-text`,`${t}-item-attribution`,`${t}-button`].find(o=>e.target.className.indexOf(o)>-1);return e.pointerType!=="touch"||i},Ne=()=>ge,yt=e=>e.naturalHeight<=e.naturalWidth,pn=e=>e.naturalWidth+50<de,ct=()=>T.length,dn=(e=null,t)=>{let n={};const i=()=>e.clientY>t.naturalHeight&&!yt(t)?t.naturalHeight:e.clientY;return T.length===2?(n.x=(T[0].clientX+T[1].clientX)/2,n.y=(T[0].clientY+T[1].clientY)/2):(n.x=e.clientX,n.y=i()),n},nr=(e,t)=>{const n=dn(t,e);return yt(e)?n.y=n.y-e.naturalHeight:pn(e)&&(n.x=e.naturalWidth/2,n.y=e.naturalHeight/2),`${n.x}px ${n.y}px`},gn=e=>{for(let t=0;t<T.length;t++)if(T[t].pointerId===e.pointerId){T.splice(t,1);break}},ir=e=>{e&&(e.style.transition=c.imgOriginalTransition,e.style.transform=`scale(${Ce})`,ge=!1,c.translateX=0,c.translateY=0)},vn=e=>{const t=he(e);c.clientX=null,c.clientY=null,c.translateX=0,c.translateY=0,t.style.transformOrigin=nr(t,e),Ne()?(t.style.transform=`scale(${Ce})`,ge=!1):(t.style.transform=`scale(${tr})`,ge=!0)},hn=e=>{const t=he(e);if(!t)return;const n=t.getBoundingClientRect();if(c.imageRect.top=n.top,c.imageRect.bottom=n.bottom,c.imageRect.left=n.left,c.imageRect.right=n.right,T.length<1){const i=window.getComputedStyle(t);c.imgOriginalTransition=i.transition}T.push(e)},yn=e=>{const t=he(e),n=t.style.transform,i=.01,o=.4;let s=rr(n);const m=fn(n);for(let p=0;p<T.length;p++)if(e.pointerId===T[p].pointerId){T[p]=e;break}if(T.length===2){const p=Math.abs(T[0].clientX-T[1].clientX),v=Math.abs(T[0].clientY-T[1].clientY),h=Math.sqrt(Math.pow(p,2)+Math.pow(v,2));pe>0&&(t.style.transformOrigin=nr(t),t.style.transition="unset",h>pe&&(ge=!0,s+i<tr&&(s+=i,t.style.transform=`${m} scale(${s})`)),h<pe&&(s-i>Ce+o?(s-=i,t.style.transform=`${m} scale(${s})`):ir(t))),pe=h}},Tn=(e,t,n,i,o)=>{const s=he(e);if(!s)return;const m=s.style.transform,p=rr(m),v=de/8,h=de-v,E=yt(s)?st/4:st/8,$=st-E,ie=80;s.style.transition="unset",(!c.clientX||!c.clientY)&&(c.clientX=e.clientX,c.clientY=e.clientY);const R=c.translateX+(e.clientX-c.clientX),I=c.translateY+(e.clientY-c.clientY),ye=I-c.translateY>=0,Te=R-c.translateX>=0,ke=()=>{const L=c.imageRect.left<v&&Te||c.imageRect.right>h&&!Te,se=c.imageRect.top<E&&ye||c.imageRect.bottom>$&&!ye;return L&&se},ae=()=>{c.imageRect.top=c.imageRect.top+(I-c.translateY),c.imageRect.bottom=c.imageRect.bottom+(I-c.translateY),c.imageRect.left=c.imageRect.left+(R-c.translateX),c.imageRect.right=c.imageRect.right+(R-c.translateX),c.translateX=R,c.translateY=I,c.clientX=e.clientX,c.clientY=e.clientY},oe=Math.abs(R)-Math.abs(c.translateX)>ie;if(ke())ae(),s.style.transform=`translate3d(${R}px, ${I}px, 0px) scale(${p})`;else if(oe){const L=o==="ltr"&&R<0||o==="rtl"&&R>0;!L&&n[i-1]?t(-1):L&&n[i+1]&&t(1)}},En=e=>{const t=he(e);t&&(t.style.transition=c.imgOriginalTransition),gn(e),c.clientX=null,c.clientY=null,T.length<2&&(pe=-1)},bn=(e,t,n)=>{const i=window.getComputedStyle(t);c.durationStart=Date.now(),c.screenX=e.clientX,c.originalMarginLeft=+i[n].slice(0,-2),c.currentMarginLeft=+i[n].slice(0,-2),c.originalTransition=i.transition,t.style.transition="unset"},An=(e,t,n,i)=>{const s=e.clientX-c.screenX;c.currentMarginLeft=c.originalMarginLeft+s*(i==="ltr"?1:-1),t.style[n]=c.currentMarginLeft+"px",e.preventDefault()},_n=(e,t,n,i,o)=>{const s=c.originalMarginLeft-c.currentMarginLeft,m=Date.now()-c.durationStart;Math.abs(s/de)>.4||m<=300&&Math.abs(s)>5?n(s>0?1:-1):t.style[i]=-de*o+"px"};let gt=[];const ar=(e,t,n,i=void 0)=>{e.addEventListener(t,n,i),gt.push([e,t,n,i])},Sn=()=>{gt.forEach(e=>{const[t,n,i,o]=e;t.removeEventListener(n,i,o)}),gt=[]};let D=0,B="",$e,vt,Z;const Ie=window.innerWidth,f="wp-gallery-fullscreen-slider",wn=(e=[],t="",n,i,o)=>{const s=e.map(()=>`
		<div class="${f}-item">
				<div class="${f}-item-loading">
						<div class="${f}-item-loading-spinner">
								<div class="${f}-item-loading-spinner-animation">
										<div class="${f}-item-loading-spinner-animation-bounce"></div>
								</div>
						</div>
						<div class="${f}-item-loading-text">${V(n,"gallery-loading-still")}</div>
				</div>
				<div class="${f}-item-loading-error">
					<div class="${f}-item-loading-error-text">${V(n,"gallery-loading-error")}</div>
					<div class="${f}-item-loading-error-refresh">${V(n,"gallery-loading-error-refresh")}</div>
				</div>
		</div>
		`.trim()).join("");return e.some((m,p)=>m.thumb===t?(D=p,!0):!1),B=i,$e=n,vt=e,Z=o,`
		<div class="${f}" style="${B==="ltr"?"margin-left":"margin-right"}:-${D*Ie}px">
				<div class="${f}-button previous"></div>
				<div class="${f}-button next"></div>
				${s}
		</div>
		`.trim()},Ln=(e,t)=>{const n=()=>e.description?e.description:t.caption?t.caption:"",i=v=>{const h=["CC","BY","SA","Fair","Public"];let E="";return h.forEach($=>{v&&v.indexOf($)!==-1&&(E+=`<div class="${f}-item-attribution-info-${$.toLowerCase()}"></div>`)}),E},o=e.author?e.author:V($e,"gallery-unknown-author"),s=e.filePage,m=n();return`
		<div class="${f}-item-caption">
			${(()=>Ie<400&&m.length>128?!0:Ie>400&&m.length>142)()?`<div class="${f}-item-caption-expand-cue"></div>`:""}
			${m?`<div class="${f}-item-caption-text"><bdi>${m}</bdi></div>`:""}
		</div>
		<div class="${f}-item-attribution">
			<div class="${f}-item-attribution-info">
				${i(e.license)}
				${o?`<bdi class="${f}-item-attribution-info-author">${o}</bdi>`:""}
			</div>
			${s?`<div class="${f}-item-attribution-more-info">
				<a href="${s}" class="${f}-item-attribution-more-info-link" target="_blank"></a>
			</div>`:""}
		</div>
	`.trim()},or=(e,t=!1)=>{const n=e.querySelector("img"),i=e.querySelector(`.${f}-item-loading`),o=e.querySelector(`.${f}-item-loading-error`);if(t&&(Z.querySelector(`.${f}`).querySelectorAll(`.${f}-item`).forEach(p=>{const v=p.querySelector("img"),h=p.querySelector(`.${f}-item-caption`),E=p.querySelector(`.${f}-item-attribution`);v&&p.removeChild(v),h&&p.removeChild(h),E&&p.removeChild(E)}),G(0,!0),i.style.visibility="visible",o.style.visibility="hidden"),n.complete)i.style.visibility="hidden",o.style.visibility="hidden",n.style.visibility="visible";else{const s=e.querySelector(`.${f}-item-loading-text`),m=setTimeout(()=>{s.style.visibility="visible"},5e3);n.addEventListener("load",()=>{i.style.visibility="hidden",o.style.visibility="hidden",s.style.visibility="hidden",clearTimeout(m)}),n.addEventListener("error",()=>{const p=e.querySelector(`.${f}-item-loading-error-refresh`);if(i.style.visibility="hidden",n.style.visibility="hidden",!tn()){const v=e.querySelector(`.${f}-item-loading-error-text`);v.innerText=V($e,"gallery-loading-error-offline"),o.classList.add("offline")}o.style.visibility="visible",clearTimeout(m),p.addEventListener("click",()=>{or(e,!0)})})}},sr=(e,t=!1)=>{const n=e.querySelector(`.${f}-item-caption-text`),i=e.querySelector(`.${f}-item-caption-expand-cue`),o=e.querySelector(".expanded");i&&o||t&&i?(i.classList.remove("expanded"),n.style.maxHeight="80px"):i&&(i.classList.add("expanded"),n.style.maxHeight="241px")},ut=(e,t=!1)=>{const o=Z.querySelector(`.${f}`).querySelectorAll(`.${f}-item`)[e];o&&mn($e,vt[e].title,s=>{const m=o.querySelector("img"),p=o.querySelector(`.${f}-item-caption`);m||(t?o.insertAdjacentHTML("beforeend",`<img src="${s.bestFitImageUrl}?timestamp=${Date.now()}"/>`):o.insertAdjacentHTML("beforeend",`<img src="${s.bestFitImageUrl}"/>`),or(o)),p||(o.insertAdjacentHTML("beforeend",Ln(s,vt[e])),o.querySelector(`.${f}-item-caption`).addEventListener("click",()=>{sr(o)}))})},G=(e=1,t=!1)=>{const n=Z.querySelector(`.${f}`),i=n.querySelectorAll(`.${f}-item`),o=n.querySelector(".next"),s=n.querySelector(".previous"),m=D+e,p=i[m],v=i[D].querySelector("img");p&&(sr(i[D],!0),D+=e,o.style.opacity=D===i.length-1?"0.5":"1",s.style.opacity=D===0?"0.5":"1",ir(v),ut(D,t),ut(D+1,t),ut(D-1,t)),n.style[B==="ltr"?"marginLeft":"marginRight"]=-Ie*D+"px"},mt=()=>{G(-1)},xn=()=>{const e=Z.querySelector(`.${f}`),t=B==="ltr"?"marginLeft":"marginRight",n=e.querySelectorAll(`.${f}-item`);e.addEventListener("pointerdown",i=>{lt(i,f)||(hn(i),ct()===1&&!Ne()&&bn(i,e,t))}),e.addEventListener("pointermove",i=>{lt(i,f)||(ct()>1?yn(i):Ne()?Tn(i,G,n,D,B):An(i,e,t,B))}),e.addEventListener("pointerout",i=>{lt(i,f)||(e.style.transition=c.originalTransition,ct()===1&&!Ne()&&_n(i,e,G,t,D),En(i))})},Rn=()=>{Z.querySelector(".wp-gallery-fullscreen").classList.toggle("wp-gallery-fullscreen-focus-mode")},Mn=()=>{const e=Z.querySelector(`.${f}`),t=e.querySelectorAll(`.${f}-item`),n=e.querySelector(".next"),i=e.querySelector(".previous");let o=!1;G(0),xn(),e.addEventListener("click",s=>{(s.target.className===`${f}-item`||s.target.tagName==="IMG")&&(o?(clearTimeout(o),o=null,vn(s)):o=setTimeout(()=>{o=null,Rn()},300))}),t.length===1?(i.style.visibility="hidden",n.style.visibility="hidden"):(n.addEventListener("click",()=>{G()}),i.addEventListener("click",()=>{mt()}),ar(window,"keydown",({key:s})=>{switch(s){case"ArrowRight":case"Right":B==="ltr"?G():mt();break;case"ArrowLeft":case"Left":B==="ltr"?mt():G();break}}))},ne="wp-gallery-fullscreen",On=(e,t)=>`
		<div class="${ne}" lang="${e}" dir="${t}">
			<div class="${ne}-close"></div>
			<div class="${ne}-main"></div>
		</div>
	`.trim(),Kt=e=>{const t=e.querySelector(`.${ne}`);e.removeChild(t),Sn()},Pn=(e,t,n,i,o=document.body)=>{o.insertAdjacentHTML("beforeend",On(n,i)),o.querySelector(`.${ne}-main`).insertAdjacentHTML("beforeend",wn(e,t,n,i,o)),o.querySelector(`.${ne}-close`).addEventListener("click",()=>{Kt(o)}),ar(window,"keydown",({key:m})=>{(m==="Escape"||m==="Esc")&&Kt(o)}),Mn()};export{$n as a,In as b,rn as c,tn as d,ht as e,Dn as g,en as i,V as m,kn as r,Pn as s,Cn as v};
//# sourceMappingURL=fullscreen-eedec529.js.map
