/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class r{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const n=window.trustedTypes,a=n?n.emptyScript:"",l=window.reactiveElementPolyfillSupport,c={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=h){var r,o;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const n=(null!==(o=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==o?o:c.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Ei=null}}_$AK(t,e){var i,r,o;const s=this.constructor,n=s._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=s.getPropertyOptions(n),a=t.converter,l=null!==(o=null!==(r=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==o?o:c.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var u;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:p}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.0");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,b="?"+m,w=`<${b}>`,v=document,x=(t="")=>v.createComment(t),y=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,A=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,j=/"/g,O=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),E=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),D=new WeakMap,U=v.createTreeWalker(v,129,null,!1),W=(t,e)=>{const i=t.length-1,r=[];let o,s=2===e?"<svg>":"",n=k;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(n.lastIndex=d,l=n.exec(i),null!==l);)d=n.lastIndex,n===k?"!--"===l[1]?n=S:void 0!==l[1]?n=A:void 0!==l[2]?(O.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=C):void 0!==l[3]&&(n=C):n===C?">"===l[0]?(n=null!=o?o:k,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?C:'"'===l[3]?j:T):n===j||n===T?n=C:n===S||n===A?n=k:(n=C,o=void 0);const h=n===C&&t[e+1].startsWith("/>")?" ":"";s+=n===k?i+w:c>=0?(r.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+m+h):i+m+(-2===c?(r.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(a):a,r]};class L{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,s=0;const n=t.length-1,a=this.parts,[l,c]=W(t,e);if(this.el=L.createElement(l,i),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=U.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=c[s++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?I:"?"===e[1]?P:"@"===e[1]?H:_})}else a.push({type:6,index:o})}for(const e of t)r.removeAttribute(e)}if(O.test(r.tagName)){const t=r.textContent.split(m),e=t.length-1;if(e>0){r.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],x()),U.nextNode(),a.push({type:2,index:++o});r.append(t[e],x())}}}else if(8===r.nodeType)if(r.data===b)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(m,t+1));)a.push({type:7,index:o}),t+=m.length-1}o++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function M(t,e,i=t,r){var o,s,n,a;if(e===E)return e;let l=void 0!==r?null===(o=i._$Cl)||void 0===o?void 0:o[r]:i._$Cu;const c=y(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=M(t,l._$AS(t,e.values),l,r)),e}class N{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:v).importNode(i,!0);U.currentNode=o;let s=U.nextNode(),n=0,a=0,l=r[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new R(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new J(s,this,t)),this.v.push(e),l=r[++a]}n!==(null==l?void 0:l.index)&&(s=U.nextNode(),n++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{constructor(t,e,i,r){var o;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=M(this,t,e),y(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==F&&y(this._$AH)?this._$AA.nextSibling.data=t:this.k(v.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=L.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new N(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new L(t)),e}S(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new R(this.A(x()),this.A(x()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class _{constructor(t,e,i,r,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let s=!1;if(void 0===o)t=M(this,t,e,0),s=!y(t)||t!==this._$AH&&t!==E,s&&(this._$AH=t);else{const r=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=M(this,r[i+n],e,n),a===E&&(a=this._$AH[n]),s||(s=!y(a)||a!==this._$AH[n]),a===F?t=F:t!==F&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}s&&!r&&this.C(t)}C(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class I extends _{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===F?void 0:t}}const B=g?g.emptyScript:"";class P extends _{constructor(){super(...arguments),this.type=4}C(t){t&&t!==F?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class H extends _{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=M(this,t,e,0))&&void 0!==i?i:F)===E)return;const r=this._$AH,o=t===F&&r!==F||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==F&&(r===F||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,K;null==Y||Y(L,R),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.2.0");class V extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,o;const s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=s._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=n=new R(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return E}}V.finalized=!0,V._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:V});const Z=globalThis.litElementPolyfillSupport;null==Z||Z({LitElement:V}),(null!==(K=globalThis.litElementVersions)&&void 0!==K?K:globalThis.litElementVersions=[]).push("3.2.0");var G=new Map([["align-self","-ms-grid-row-align"],["color-adjust","-webkit-print-color-adjust"],["column-gap","grid-column-gap"],["forced-color-adjust","-ms-high-contrast-adjust"],["gap","grid-gap"],["grid-template-columns","-ms-grid-columns"],["grid-template-rows","-ms-grid-rows"],["justify-self","-ms-grid-column-align"],["margin-inline-end","-webkit-margin-end"],["margin-inline-start","-webkit-margin-start"],["mask-border","-webkit-mask-box-image"],["mask-border-outset","-webkit-mask-box-image-outset"],["mask-border-slice","-webkit-mask-box-image-slice"],["mask-border-source","-webkit-mask-box-image-source"],["mask-border-repeat","-webkit-mask-box-image-repeat"],["mask-border-width","-webkit-mask-box-image-width"],["overflow-wrap","word-wrap"],["padding-inline-end","-webkit-padding-end"],["padding-inline-start","-webkit-padding-start"],["row-gap","grid-row-gap"],["scroll-margin-bottom","scroll-snap-margin-bottom"],["scroll-margin-left","scroll-snap-margin-left"],["scroll-margin-right","scroll-snap-margin-right"],["scroll-margin-top","scroll-snap-margin-top"],["scroll-margin","scroll-snap-margin"],["text-combine-upright","-ms-text-combine-horizontal"]]);var X,Q,tt,et,it,rt,ot,st,nt=(t,e)=>!!~t.indexOf(e),at=(t,e="-")=>t.join(e),lt=(t,e)=>at(t.filter(Boolean),e),ct=(t,e=1)=>t.slice(e),dt=t=>t,ht=()=>{},pt=t=>t[0].toUpperCase()+ct(t),ut=t=>t.replace(/[A-Z]/g,"-$&").toLowerCase(),gt=(t,e)=>{for(;"function"==typeof t;)t=t(e);return t},ft=(t,e)=>{t.size>e&&t.delete(t.keys().next().value)},mt=(t,e)=>!nt("@:&",t[0])&&(nt("rg",(typeof e)[5])||Array.isArray(e)),bt=(t,e,i)=>e?Object.keys(e).reduce(((t,r)=>{const o=gt(e[r],i);return mt(r,o)?t[ut(r)]=o:t[r]="@"==r[0]&&nt("figa",r[1])?(t[r]||[]).concat(o):bt(t[r]||{},o,i),t}),t):t,wt="undefined"!=typeof CSS&&CSS.escape||(t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& ")),vt=t=>(Array.isArray(t)||(t=[t]),"@media "+at(t.map((t=>("string"==typeof t&&(t={min:t}),t.raw||at(Object.keys(t).map((e=>`(${e}-width:${t[e]})`))," and ")))),",")),xt=t=>{for(var e=9,i=t.length;i--;)e=Math.imul(e^t.charCodeAt(i),1597334677);return"tw-"+((e^e>>>9)>>>0).toString(36)},yt=(t="")=>(X.push(t),""),$t=t=>{X.length=Math.max(X.lastIndexOf("")+~~t,0)},kt=t=>t&&!nt("!:",t[0]),St=t=>":"==t[0],At=(t,e)=>{Q.push({v:X.filter(St),d:t,n:e,i:nt(X,"!"),$:""})},Ct=t=>{const e="-"==t[0];e&&(t=ct(t));const i=at(X.filter(kt));return At("&"==t?i:(i&&i+"-")+t,e),""},Tt=(t,e)=>{let i="";for(let e,r=!1,o=0;e=t[o++];)if(r||"["==e)i+=e,r="]"!=e;else switch(e){case":":i=i&&yt(":"+(t[o]==e?t[o++]:"")+i);break;case"(":i=i&&yt(i),yt();break;case"!":yt(e);break;case")":case" ":case"\t":case"\n":case"\r":i=i&&Ct(i),$t(")"!==e);break;default:i+=e}i&&(e?yt(":"+i):"-"==i.slice(-1)?yt(i.slice(0,-1)):Ct(i))},jt=t=>{yt(),Ot(t),$t()},Ot=t=>{switch(typeof t){case"string":Tt(t);break;case"function":At(t);break;case"object":Array.isArray(t)?t.forEach(jt):t&&Object.keys(t).forEach((e=>{((t,e)=>{if(e){yt();const i=nt("tbu",(typeof e)[1]);Tt(t,i),i&&jt(e),$t()}})(e,t[e])}))}},zt=new WeakMap,Et=t=>(X=[],Q=[],Array.isArray(t[0])&&Array.isArray(t[0].raw)?(t=>{let e=zt.get(t);if(!e){let i=NaN,r="";e=t.map(((e,o)=>{if(i==i||"["!=e.slice(-1)&&!nt(":-(",(t[o+1]||"")[0])||(i=o),o>=i)return s=>{o==i&&(r=""),r+=e,nt("rg",(typeof s)[5])?r+=s:s&&(Tt(r),r="",Ot(s)),o==t.length-1&&Tt(r)};const s=Q=[];Tt(e);const n=[...X];return Q=[],t=>{Q.push(...s),X=[...n],t&&Ot(t)}})),zt.set(t,e)}return e})(t[0]).forEach(((e,i)=>e(t[i+1]))):Ot(t),Q),Ft=(t,e)=>("function"==typeof e&&(tt=!1),e),Dt=new WeakMap,Ut=(t,e)=>{const i=(t=>{tt=!0;const e=JSON.stringify(t,Ft);return tt&&e})(e);let r;if(i){var o=Dt.get(t);o||Dt.set(t,o=new Map),r=o.get(i)}return r||(r=Object.defineProperty(((i,r)=>(r=Array.isArray(i)?r:i,gt(t(e,r),r))),"toJSON",{value:()=>i||e}),o&&(o.set(i,r),ft(o,1e4))),r},Wt=(t,{css:e})=>e(Et(t)),Lt=(...t)=>Ut(Wt,t),Mt=t=>(e,i,r,o)=>{if(e){const s=i&&t(i);if(s&&s.length>0)return s.reduce(((t,i)=>(t[lt([r,i,o])]=e,t)),{})}},Nt=Mt((t=>({t:["top-left","top-right"],r:["top-right","bottom-right"],b:["bottom-left","bottom-right"],l:["bottom-left","top-left"],tl:["top-left"],tr:["top-right"],bl:["bottom-left"],br:["bottom-right"]}[t]))),Rt=t=>{const e=({x:"lr",y:"tb"}[t]||t||"").split("").sort();for(let t=e.length;t--;)if(!(e[t]={t:"top",r:"right",b:"bottom",l:"left"}[e[t]]))return;if(e.length)return e},_t=Mt(Rt),It=t=>"cols"==t?"columns":"rows",Bt=t=>(e,i,r)=>({[t]:r+((et=at(e))&&"-"+et)}),Pt=(t,e)=>(i,r,o)=>(et=at(i,e))&&{[t||o]:et},Ht=t=>(e,{theme:i},r)=>(et=i(t||r,e))&&{[t||r]:et},Jt=(t,e)=>(i,{theme:r},o)=>(et=r(t||o,i,at(i,e)))&&{[t||o]:et},Yt=(t,e)=>(i,r)=>t(i,r,e),qt=Bt("display"),Kt=Bt("position"),Vt=Bt("textTransform"),Zt=Bt("textDecoration"),Gt=Bt("fontStyle"),Xt=t=>(e,i,r)=>({["--tw-"+t]:r,fontVariantNumeric:"var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"}),Qt=(t,{theme:e},i)=>(et=e("inset",t))&&{[i]:et},te=(t,e,i,r=i)=>(et=e(r+"Opacity",ct(t)))&&{[`--tw-${i}-opacity`]:et},ee=(t,e)=>Math.round(parseInt(t,16)*e),ie=(t,e,i)=>t&&"#"==t[0]&&(et=(t.length-1)/3)&&(rt=[17,1,.062272][et-1])?`rgba(${ee(t.substr(1,et),rt)},${ee(t.substr(1+et,et),rt)},${ee(t.substr(1+2*et,et),rt)},${e?`var(--tw-${e}${i?","+i:""})`:i||1})`:t,re=(t,e,i)=>i&&"string"==typeof i?(et=ie(i,e+"-opacity"))&&et!==i?{[`--tw-${e}-opacity`]:"1",[t]:[i,et]}:{[t]:i}:void 0,oe=t=>(rt=ie(t,"","0"))==et?"transparent":rt,se=(t,{theme:e},i,r,o,s)=>(et={x:["right","left"],y:["bottom","top"]}[t[0]])&&(rt=`--tw-${i}-${t[0]}-reverse`)?"reverse"==t[1]?{[rt]:"1"}:{[rt]:"0",[lt([o,et[0],s])]:(it=e(r,ct(t)))&&`calc(${it} * var(${rt}))`,[lt([o,et[1],s])]:it&&[it,`calc(${it} * calc(1 - var(${rt})))`]}:void 0,ne=(t,e)=>e[0]&&{[t]:(nt("wun",(e[0]||"")[3])?"space-":"")+e[0]},ae=t=>e=>nt(["start","end"],e[0])?{[t]:"flex-"+e[0]}:ne(t,e),le=t=>(e,{theme:i})=>{if(et=i("grid"+pt(t),e,""))return{["grid-"+t]:et};switch(e[0]){case"span":return e[1]&&{["grid-"+t]:`span ${e[1]} / span ${e[1]}`};case"start":case"end":return(et=i("grid"+pt(t)+pt(e[0]),ct(e),at(ct(e))))&&{[`grid-${t}-${e[0]}`]:et}}},ce=(t,{theme:e},i)=>{switch(t[0]){case"solid":case"dashed":case"dotted":case"double":case"none":return Pt("borderStyle")(t);case"collapse":case"separate":return Pt("borderCollapse")(t);case"opacity":return te(t,e,i)}return(et=e(i+"Width",t,""))?{borderWidth:et}:re("borderColor",i,e(i+"Color",t))},de=t=>(t?"translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)":"translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))")+" rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))",he=(t,e,i)=>t[0]&&(et=e.theme(i,t[1]||t[0]))&&{[`--tw-${i}-x`]:"y"!==t[0]&&et,[`--tw-${i}-y`]:"x"!==t[0]&&et,transform:[`${i}${t[1]?t[0].toUpperCase():""}(${et})`,de()]},pe=t=>(e,i,r)=>r[1]?_t(i.theme(t,e),r[1],t):Ht(t)(e,i,r),ue=pe("padding"),ge=pe("margin"),fe=(t,{theme:e},i)=>(et={w:"width",h:"height"}[t[0]])&&{[et=`${i}${pt(et)}`]:e(et,ct(t))},me=(t,{theme:e},i)=>{const r=i.split("-"),o="backdrop"==r[0]?r[0]+"-":"";if(o||t.unshift(...r),"filter"==t[0]){const e=["blur","brightness","contrast","grayscale","hue-rotate","invert",o&&"opacity","saturate","sepia",!o&&"drop-shadow"].filter(Boolean);return"none"==t[1]?{[o+"filter"]:"none"}:e.reduce(((t,e)=>(t["--tw-"+o+e]="var(--tw-empty,/*!*/ /*!*/)",t)),{[o+"filter"]:e.map((t=>`var(--tw-${o}${t})`)).join(" ")})}return rt=t.shift(),nt(["hue","drop"],rt)&&(rt+=pt(t.shift())),(et=e(o?"backdrop"+pt(rt):rt,t))&&{["--tw-"+o+rt]:(Array.isArray(et)?et:[et]).map((t=>`${ut(rt)}(${t})`)).join(" ")}},be={group:(t,{tag:e},i)=>e(at([i,...t])),hidden:Yt(qt,"none"),inline:qt,block:qt,contents:qt,flow:qt,table:(t,e,i)=>nt(["auto","fixed"],t[0])?{tableLayout:t[0]}:qt(t,e,i),flex(t,e,i){switch(t[0]){case"row":case"col":return{flexDirection:at("col"==t[0]?["column",...ct(t)]:t)};case"nowrap":case"wrap":return{flexWrap:at(t)};case"grow":case"shrink":return null!=(et=e.theme("flex"+pt(t[0]),ct(t),t[1]||1))&&{["flex-"+t[0]]:""+et}}return(et=e.theme("flex",t,""))?{flex:et}:qt(t,e,i)},grid(t,e,i){switch(t[0]){case"cols":case"rows":return(et=e.theme("gridTemplate"+pt(It(t[0])),ct(t),2==t.length&&Number(t[1])?`repeat(${t[1]},minmax(0,1fr))`:at(ct(t))))&&{["gridTemplate-"+It(t[0])]:et};case"flow":return t.length>1&&{gridAutoFlow:at("col"==t[1]?["column",...ct(t,2)]:ct(t)," ")}}return qt(t,e,i)},auto:(t,{theme:e})=>nt(["cols","rows"],t[0])&&(et=e("gridAuto"+pt(It(t[0])),ct(t),at(ct(t))))&&{["gridAuto-"+It(t[0])]:et},static:Kt,fixed:Kt,absolute:Kt,relative:Kt,sticky:Kt,visible:{visibility:"visible"},invisible:{visibility:"hidden"},antialiased:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},"subpixel-antialiased":{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"},truncate:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},"sr-only":{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"},"not-sr-only":{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"},resize:t=>({resize:{x:"horizontal",y:"vertical"}[t[0]]||t[0]||"both"}),box:t=>t[0]&&{boxSizing:t[0]+"-box"},appearance:Pt(),cursor:Jt(),float:Pt(),clear:Pt(),decoration:Pt("boxDecorationBreak"),isolate:{isolation:"isolate"},isolation:Pt(),"mix-blend":Pt("mixBlendMode"),top:Qt,right:Qt,bottom:Qt,left:Qt,inset:(t,{theme:e})=>(et=Rt(t[0]))?_t(e("inset",ct(t)),t[0]):(et=e("inset",t))&&{top:et,right:et,bottom:et,left:et},underline:Zt,"line-through":Zt,"no-underline":Yt(Zt,"none"),"text-underline":Yt(Zt,"underline"),"text-no-underline":Yt(Zt,"none"),"text-line-through":Yt(Zt,"line-through"),uppercase:Vt,lowercase:Vt,capitalize:Vt,"normal-case":Yt(Vt,"none"),"text-normal-case":Yt(Vt,"none"),italic:Gt,"not-italic":Yt(Gt,"normal"),"font-italic":Yt(Gt,"italic"),"font-not-italic":Yt(Gt,"normal"),font:(t,e,i)=>(et=e.theme("fontFamily",t,""))?{fontFamily:et}:Ht("fontWeight")(t,e,i),items:t=>t[0]&&{alignItems:nt(["start","end"],t[0])?"flex-"+t[0]:at(t)},"justify-self":Pt(),"justify-items":Pt(),justify:ae("justifyContent"),content:ae("alignContent"),self:ae("alignSelf"),place:t=>t[0]&&ne("place-"+t[0],ct(t)),overscroll:t=>t[0]&&{["overscrollBehavior"+(t[1]?"-"+t[0]:"")]:t[1]||t[0]},col:le("column"),row:le("row"),duration:Ht("transitionDuration"),delay:Ht("transitionDelay"),tracking:Ht("letterSpacing"),leading:Ht("lineHeight"),z:Ht("zIndex"),opacity:Ht(),ease:Ht("transitionTimingFunction"),p:ue,py:ue,px:ue,pt:ue,pr:ue,pb:ue,pl:ue,m:ge,my:ge,mx:ge,mt:ge,mr:ge,mb:ge,ml:ge,w:Ht("width"),h:Ht("height"),min:fe,max:fe,fill:Ht(),order:Ht(),origin:Jt("transformOrigin"," "),select:Pt("userSelect"),"pointer-events":Pt(),align:Pt("verticalAlign"),whitespace:Pt("whiteSpace"),"normal-nums":{fontVariantNumeric:"normal"},ordinal:Xt("ordinal"),"slashed-zero":Xt("slashed-zero"),"lining-nums":Xt("numeric-figure"),"oldstyle-nums":Xt("numeric-figure"),"proportional-nums":Xt("numeric-spacing"),"tabular-nums":Xt("numeric-spacing"),"diagonal-fractions":Xt("numeric-fraction"),"stacked-fractions":Xt("numeric-fraction"),overflow:(t,e,i)=>nt(["ellipsis","clip"],t[0])?Pt("textOverflow")(t):t[1]?{["overflow-"+t[0]]:t[1]}:Pt()(t,e,i),transform:t=>"none"==t[0]?{transform:"none"}:{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:de("gpu"==t[0])},rotate:(t,{theme:e})=>(et=e("rotate",t))&&{"--tw-rotate":et,transform:[`rotate(${et})`,de()]},scale:he,translate:he,skew:he,gap:(t,e,i)=>(et={x:"column",y:"row"}[t[0]])?{[et+"Gap"]:e.theme("gap",ct(t))}:Ht("gap")(t,e,i),stroke:(t,e,i)=>(et=e.theme("stroke",t,""))?{stroke:et}:Ht("strokeWidth")(t,e,i),outline:(t,{theme:e})=>(et=e("outline",t))&&{outline:et[0],outlineOffset:et[1]},"break-normal":{wordBreak:"normal",overflowWrap:"normal"},"break-words":{overflowWrap:"break-word"},"break-all":{wordBreak:"break-all"},text(t,{theme:e},i){switch(t[0]){case"left":case"center":case"right":case"justify":return{textAlign:t[0]};case"uppercase":case"lowercase":case"capitalize":return Vt([],et,t[0]);case"opacity":return te(t,e,i)}const r=e("fontSize",t,"");return r?"string"==typeof r?{fontSize:r}:{fontSize:r[0],..."string"==typeof r[1]?{lineHeight:r[1]}:r[1]}:re("color","text",e("textColor",t))},bg(t,{theme:e},i){switch(t[0]){case"fixed":case"local":case"scroll":return Pt("backgroundAttachment",",")(t);case"bottom":case"center":case"left":case"right":case"top":return Pt("backgroundPosition"," ")(t);case"no":return"repeat"==t[1]&&Pt("backgroundRepeat")(t);case"repeat":return nt("xy",t[1])?Pt("backgroundRepeat")(t):{backgroundRepeat:t[1]||t[0]};case"opacity":return te(t,e,i,"background");case"clip":case"origin":return t[1]&&{["background-"+t[0]]:t[1]+("text"==t[1]?"":"-box")};case"blend":return Pt("background-blend-mode")(ct(t));case"gradient":if("to"==t[1]&&(et=Rt(t[2])))return{backgroundImage:`linear-gradient(to ${at(et," ")},var(--tw-gradient-stops))`}}return(et=e("backgroundPosition",t,""))?{backgroundPosition:et}:(et=e("backgroundSize",t,""))?{backgroundSize:et}:(et=e("backgroundImage",t,""))?{backgroundImage:et}:re("backgroundColor","bg",e("backgroundColor",t))},from:(t,{theme:e})=>(et=e("gradientColorStops",t))&&{"--tw-gradient-from":et,"--tw-gradient-stops":`var(--tw-gradient-from),var(--tw-gradient-to,${oe(et)})`},via:(t,{theme:e})=>(et=e("gradientColorStops",t))&&{"--tw-gradient-stops":`var(--tw-gradient-from),${et},var(--tw-gradient-to,${oe(et)})`},to:(t,{theme:e})=>(et=e("gradientColorStops",t))&&{"--tw-gradient-to":et},border:(t,e,i)=>Rt(t[0])?_t(e.theme("borderWidth",ct(t)),t[0],"border","width"):ce(t,e,i),divide:(t,e,i)=>(et=se(t,e,i,"divideWidth","border","width")||ce(t,e,i))&&{"&>:not([hidden])~:not([hidden])":et},space:(t,e,i)=>(et=se(t,e,i,"space","margin"))&&{"&>:not([hidden])~:not([hidden])":et},placeholder:(t,{theme:e},i)=>(et="opacity"==t[0]?te(t,e,i):re("color","placeholder",e("placeholderColor",t)))&&{"&::placeholder":et},shadow:(t,{theme:e})=>(et=e("boxShadow",t))&&{":global":{"*":{"--tw-shadow":"0 0 transparent"}},"--tw-shadow":"none"==et?"0 0 transparent":et,boxShadow:[et,"var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)"]},animate:(t,{theme:e,tag:i})=>{if(rt=e("animation",t)){const t=rt.split(" ");return(et=e("keyframes",t[0],it={}))!==it?(rt=i(t[0]))&&{animation:rt+" "+at(ct(t)," "),["@keyframes "+rt]:et}:{animation:rt}}},ring(t,{theme:e},i){switch(t[0]){case"inset":return{"--tw-ring-inset":"inset"};case"opacity":return te(t,e,i);case"offset":return(et=e("ringOffsetWidth",ct(t),""))?{"--tw-ring-offset-width":et}:{"--tw-ring-offset-color":e("ringOffsetColor",ct(t))}}return(et=e("ringWidth",t,""))?{"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${et} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)",":global":{"*":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":e("ringOffsetWidth","","0px"),"--tw-ring-offset-color":e("ringOffsetColor","","#fff"),"--tw-ring-color":ie(e("ringColor","","#93c5fd"),"ring-opacity",e("ringOpacity","","0.5")),"--tw-ring-offset-shadow":"0 0 transparent","--tw-ring-shadow":"0 0 transparent"}}}:{"--tw-ring-opacity":"1","--tw-ring-color":ie(e("ringColor",t),"ring-opacity")}},object:(t,e,i)=>nt(["contain","cover","fill","none","scale-down"],at(t))?{objectFit:at(t)}:Jt("objectPosition"," ")(t,e,i),list:(t,e,i)=>"item"==at(t)?qt(t,e,i):nt(["inside","outside"],at(t))?{listStylePosition:t[0]}:Jt("listStyleType")(t,e,i),rounded:(t,e,i)=>Nt(e.theme("borderRadius",ct(t),""),t[0],"border","radius")||Ht("borderRadius")(t,e,i),"transition-none":{transitionProperty:"none"},transition:(t,{theme:e})=>({transitionProperty:e("transitionProperty",t),transitionTimingFunction:e("transitionTimingFunction",""),transitionDuration:e("transitionDuration","")}),container:(t,{theme:e})=>{const{screens:i=e("screens"),center:r,padding:o}=e("container"),s=t=>(et=o&&("string"==typeof o?o:o[t]||o.DEFAULT))?{paddingRight:et,paddingLeft:et}:{};return Object.keys(i).reduce(((t,e)=>((rt=i[e])&&"string"==typeof rt&&(t[vt(rt)]={"&":{"max-width":rt,...s(e)}}),t)),{width:"100%",...r?{marginRight:"auto",marginLeft:"auto"}:{},...s("xs")})},filter:me,blur:me,brightness:me,contrast:me,grayscale:me,"hue-rotate":me,invert:me,saturate:me,sepia:me,"drop-shadow":me,backdrop:me},we={dark:"@media (prefers-color-scheme:dark)",sticky:"@supports ((position: -webkit-sticky) or (position:sticky))","motion-reduce":"@media (prefers-reduced-motion:reduce)","motion-safe":"@media (prefers-reduced-motion:no-preference)",first:"&:first-child",last:"&:last-child",even:"&:nth-child(2n)",odd:"&:nth-child(odd)",children:"&>*",siblings:"&~*",sibling:"&+*",override:"&&"},ve=t=>{let e=self.__twind;return e||(e=document.head.appendChild(document.createElement("style")),e.id="__twind",t&&(e.nonce=t),e.appendChild(document.createTextNode(""))),e},xe=({nonce:t,target:e=ve(t).sheet}={})=>{const i=e.cssRules.length;return{target:e,insert:(t,r)=>e.insertRule(t,i+r)}},ye=t=>({unknown(t,e=[],i,r){i||this.report({id:"UNKNOWN_THEME_VALUE",key:t+"."+at(e)},r)},report:({id:e,...i})=>t(`[${e}] ${JSON.stringify(i)}`)}),$e=ye((t=>console.warn(t))),ke=ye((t=>{throw new Error(t)})),Se=ye(ht),Ae=(t,e,i)=>`${t}:${e}${i?" !important":""}`,Ce=(t,e,i)=>{let r="";const o=function(t){return G.get(t)}(t);o&&(r+=`${Ae(o,e,i)};`);let s=function(t){var e=/^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(t);return e?e[1]?1:e[2]?2:e[3]?3:5:0}(t);return 1&s&&(r+=`-webkit-${Ae(t,e,i)};`),2&s&&(r+=`-moz-${Ae(t,e,i)};`),4&s&&(r+=`-ms-${Ae(t,e,i)};`),s=function(t,e){var i=/^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(t);return i?i[1]?/^sti/i.test(e)?1:0:i[2]?/^pat/i.test(e)?1:0:i[3]?/^image-/i.test(e)?1:0:i[4]?"-"===e[3]?2:0:/^(?:inline-)?grid$/i.test(e)?4:0:0}(t,e),1&s&&(r+=`${Ae(t,`-webkit-${e}`,i)};`),2&s&&(r+=`${Ae(t,`-moz-${e}`,i)};`),4&s&&(r+=`${Ae(t,`-ms-${e}`,i)};`),r+=Ae(t,e,i),r},Te=(t,e)=>{const i={};do{for(let e=1;e<t;e++)i[`${e}/${t}`]=Number((e/t*100).toFixed(6))+"%"}while(++t<=e);return i},je=(t,e,i=0)=>{const r={};for(;i<=t;i=2*i||1)r[i]=i+e;return r},Oe=(t,e="",i=1,r=0,o=1,s={})=>{for(;r<=t;r+=o)s[r]=r/i+e;return s},ze=t=>e=>e(t),Ee={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:{transparent:"transparent",current:"currentColor",black:"#000",white:"#fff",gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},yellow:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},green:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},purple:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"}},spacing:{px:"1px",0:"0px",...Oe(4,"rem",4,.5,.5),...Oe(12,"rem",4,5),14:"3.5rem",...Oe(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",pulse:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",bounce:"bounce 1s infinite"},backdropBlur:ze("blur"),backdropBrightness:ze("brightness"),backdropContrast:ze("contrast"),backdropGrayscale:ze("grayscale"),backdropHueRotate:ze("hueRotate"),backdropInvert:ze("invert"),backdropOpacity:ze("opacity"),backdropSaturate:ze("saturate"),backdropSepia:ze("sepia"),backgroundColor:ze("colors"),backgroundImage:{none:"none"},backgroundOpacity:ze("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{...Oe(200,"",100,0,50),...Oe(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:t=>({...t("colors"),DEFAULT:t("colors.gray.200","currentColor")}),borderOpacity:ze("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderWidth:{DEFAULT:"1px",...je(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",DEFAULT:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",none:"none"},contrast:{...Oe(200,"",100,0,50),75:"0.75",125:"1.25"},divideColor:ze("borderColor"),divideOpacity:ze("borderOpacity"),divideWidth:ze("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0, 0, 0, 0.1)","0 1px 1px rgba(0, 0, 0, 0.06)"],md:["0 4px 3px rgba(0, 0, 0, 0.07)","0 2px 2px rgba(0, 0, 0, 0.06)"],lg:["0 10px 8px rgba(0, 0, 0, 0.04)","0 4px 3px rgba(0, 0, 0, 0.1)"],xl:["0 20px 13px rgba(0, 0, 0, 0.03)","0 8px 5px rgba(0, 0, 0, 0.08)"],"2xl":"0 25px 25px rgba(0, 0, 0, 0.15)",none:"0 0 #0000"},fill:{current:"currentColor"},grayscale:{0:"0",DEFAULT:"100%"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{0:"0",DEFAULT:"100%"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gridTemplateColumns:{},gridTemplateRows:{},gridAutoColumns:{min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gap:ze("spacing"),gradientColorStops:ze("colors"),height:t=>({auto:"auto",...t("spacing"),...Te(2,6),full:"100%",screen:"100vh"}),inset:t=>({auto:"auto",...t("spacing"),...Te(2,4),full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2",...Oe(10,"rem",4,3)},margin:t=>({auto:"auto",...t("spacing")}),maxHeight:t=>({...t("spacing"),full:"100%",screen:"100vh"}),maxWidth:(t,{breakpoints:e})=>({none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",prose:"65ch",...e(t("screens"))}),minHeight:{0:"0px",full:"100%",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content"},opacity:{...Oe(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0",...Oe(12,"",1,1)},outline:{none:["2px solid transparent","2px"],white:["2px dotted white","2px"],black:["2px dotted black","2px"]},padding:ze("spacing"),placeholderColor:ze("colors"),placeholderOpacity:ze("opacity"),ringColor:t=>({DEFAULT:t("colors.blue.500","#3b82f6"),...t("colors")}),ringOffsetColor:ze("colors"),ringOffsetWidth:je(8,"px"),ringOpacity:t=>({DEFAULT:"0.5",...t("opacity")}),ringWidth:{DEFAULT:"3px",...je(8,"px")},rotate:{...je(2,"deg"),...je(12,"deg",3),...je(180,"deg",45)},saturate:Oe(200,"",100,0,50),scale:{...Oe(150,"",100,0,50),...Oe(110,"",100,90,5),75:"0.75",125:"1.25"},sepia:{0:"0",DEFAULT:"100%"},skew:{...je(2,"deg"),...je(12,"deg",3)},space:ze("spacing"),stroke:{current:"currentColor"},strokeWidth:Oe(2),textColor:ze("colors"),textOpacity:ze("opacity"),transitionDuration:t=>({DEFAULT:"150ms",...t("durations")}),transitionDelay:ze("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"background-color,border-color,color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:t=>({...t("spacing"),...Te(2,4),full:"100%"}),width:t=>({auto:"auto",...t("spacing"),...Te(2,6),...Te(12,12),screen:"100vw",full:"100%",min:"min-content",max:"max-content"}),zIndex:{auto:"auto",...Oe(50,"",1,0,10)}},Fe=(t,e={},i=[])=>(Object.keys(t).forEach((r=>{const o=t[r];"DEFAULT"==r&&(e[at(i)]=o,e[at(i,".")]=o);const s=[...i,r];e[at(s)]=o,e[at(s,".")]=o,o&&"object"==typeof o&&Fe(o,e,s)}),e),e),De={negative:()=>({}),breakpoints:t=>Object.keys(t).filter((e=>"string"==typeof t[e])).reduce(((e,i)=>(e["screen-"+i]=t[i],e)),{})},Ue=t=>{const e=new Map,i={...Ee,...t},r=(t,e)=>{const i=t&&t[e],r="function"==typeof i?i(o,De):i;return r&&"colors"==e?Fe(r):r},o=(t,o,s)=>{const n=t.split(".");t=n[0],n.length>1&&(s=o,o=at(ct(n),"."));let a=e.get(t);if(a||(e.set(t,a={...r(i,t)}),Object.assign(a,r(i.extend,t))),null!=o){const e=((t,e)=>(e="["==e[0]&&"]"==e.slice(-1)&&e.slice(1,-1))&&nt(t,"olor")==/^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(e)&&(nt(e,"calc(")?e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "):e))(t,o=(Array.isArray(o)?at(o):o)||"DEFAULT")||a[o];return null==e?s:Array.isArray(e)&&!nt(["fontSize","outline","dropShadow"],t)?at(e,","):e}return a};return o},We=/^:(group(?:(?!-focus).+?)*)-(.+)$/,Le=/^(:not)-(.+)/,Me=t=>"["==t[1]?ct(t):t,Ne=t=>(31&((st=/(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(t))?+st[1]/(st[2]?15:1)/10:0))<<22,Re=t=>{st=0;for(let e=t.length;e--;)st+=nt("-:,",t[e]);return st},_e=t=>(15&Re(t))<<18,Ie=["rst","st","en","d","nk","sited","pty","ecked","cus-w","ver","cus","cus-v","tive","sable","ad-on","tiona","quire"],Be=(t,e)=>(i,r)=>{return i|((st=t("screens",ct(r),""))?1<<27|Ne(vt(st)):":dark"==r?1<<30:"@"==(st=e[r]||r.replace(Le,":$2"))[0]?_e(st):(o=r,1<<(~(st=Ie.indexOf(o.replace(We,":$2").slice(3,8)))?st:17)));var o},Pe=(t,e)=>e+"{"+t+"}",He=(t,e,i)=>{const{theme:r,tag:o}=i,s=(t,e)=>"--"+o(e),n=t=>`${t}`.replace(/--(tw-[\w-]+)\b/g,s);let a;const l=(e,r,o,s,c)=>{if(Array.isArray(s))return void s.forEach((t=>t&&l(e,r,o,t,c)));let d="",h=0,p=0;s["@apply"]&&(s=bt(gt(Lt(s["@apply"]),i),{...s,"@apply":void 0},i)),Object.keys(s).forEach((u=>{const g=gt(s[u],i);if(mt(u,g)){if(""!==g&&u.length>1){const e=ut(u);p+=1,h=Math.max(h,(t=>"-"==t[0]?0:Re(t)+((st=/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(t))?+!!st[1]||-!!st[2]:0)+1)(e)),d=(d&&d+";")+((e,i,r)=>(e=n(e),Array.isArray(i)?at(i.filter(Boolean).map((i=>t(e,n(i),r))),";"):t(e,n(i),r)))(e,g,c)}}else if(g)if(":global"==u&&(u="@global"),"@"==u[0])if("g"==u[1])l([],"",0,g,c);else if("f"==u[1])l([],u,0,g,c);else if("k"==u[1]){const t=a.length;l([],"",0,g,c);const e=a.splice(t,a.length-t);a.push({r:Pe(at(e.map((t=>t.r)),""),u),p:e.reduce(((t,e)=>t+e.p),0)})}else"i"==u[1]?(Array.isArray(g)?g:[g]).forEach((t=>t&&a.push({p:0,r:`${u} ${t};`}))):("c"==u[2]&&(u=vt(i.theme("screens",ct(u,8).trim()))),l([...e,u],r,o|Ne(u)|_e(u),g,c));else l(e,r?at(r.split(/,(?![^[]*])/g).map((t=>at(u.split(/,(?![^[]*])/g).map((e=>nt(e,"&")?e.replace(/&/g,t):(t&&t+" ")+e)),","))),","):u,o,g,c)})),p&&a.push({r:e.reduceRight(Pe,Pe(d,r)),p:256*o+((15&Math.max(0,15-p))<<4|15&(h||15))})},c=Be(r,e);return(t,e,i,r=0)=>(r<<=28,a=[],l([],e?"."+wt(e):"",i?i.v.reduceRight(c,r):r,t,i&&i.i),a)},Je=(t,e,i,r=e)=>!1===t?i:!0===t?r:t||e,Ye=(t,e)=>t+(":"==e[1]?ct(e,2)+":":ct(e))+":",qe=(t,e=t.d)=>"function"==typeof e?"":t.v.reduce(Ye,"")+(t.i?"!":"")+(t.n?"-":"")+e,Ke={_:{value:"",writable:!0}},Ve=(t={})=>{const e=Ue(t.theme),i=(t=>("string"==typeof t?{t:ke,a:$e,i:Se}[t[1]]:t)||$e)(t.mode),r=Je(t.hash,!1,!1,xt),o=t.important;let s={v:[]},n=0;const a=[],l={tw:(...t)=>x(t),theme:(t,r,o)=>{var n;const a=null!=(n=e(t,r,o))?n:i.unknown(t,null==r||Array.isArray(r)?r:r.split("."),null!=o,l);return s.n&&a&&nt("rg",(typeof a)[5])?`calc(${a} * -1)`:a},tag:t=>r?r(t):t,css:t=>{n++;const e=a.length;try{("string"==typeof t?Et([t]):t).forEach(v);const i=Object.create(null,Ke);for(let t=e;t<a.length;t++){const e=a[t];if(e)switch(typeof e){case"object":bt(i,e,l);break;case"string":i._+=(i._&&" ")+e}}return i}finally{a.length=e,n--}}},c=((t,e)=>(i,r)=>{if("function"==typeof i.d)return i.d(e);const o=i.d.split(/-(?![^[]*])/g);if(!r&&"tw"==o[0]&&i.$==i.d)return i.$;for(let i=o.length;i;i--){const s=at(o.slice(0,i)),n=t[s];if(n)return"function"==typeof n?n(ct(o,i),e,s):"string"==typeof n?e[r?"css":"tw"](n):n}})({...be,...t.plugins},l),d={...we,...t.variants},h=((t,e,{theme:i,tag:r})=>{const o=(o,s)=>(ot=i("screens",ct(s),""))?{[vt(ot)]:o}:":dark"==s&&"class"==t?{".dark &":o}:(ot=We.exec(s))?{[`.${wt(r(ot[1]))}:${ot[2]} &`]:o}:{[e[ct(s)]||"&"+s.replace(Le,((t,e,i)=>e+"("+Me(":"+i)+")"))]:o};return(t,e)=>e.v.reduceRight(o,t)})(t.darkMode||"media",d,l),p=He(Je(t.prefix,Ce,Ae),d,l),u=t.sheet||("undefined"==typeof window?{target:null,insert:ht}:xe(t)),{init:g=(t=>t())}=u,f=((t,e,i,r)=>{let o,s;return i(((t=[])=>o=t)),i(((t=new Set)=>s=t)),({r:i,p:n})=>{if(!s.has(i)){s.add(i);const a=((t,e)=>{for(var i=0,r=t.length;i<r;){const o=r+i>>1;t[o]<=e?i=o+1:r=o}return r})(o,n);try{t.insert(i,a),o.splice(a,0,n)}catch(t){/:-[mwo]/.test(i)||e.report({id:"INJECT_CSS_ERROR",css:i,error:t},r)}}}})(u,i,g,l);let m;g(((t=new Map)=>m=t));const b=new WeakMap,w=(t,e)=>"_"==t?void 0:"function"==typeof e?JSON.stringify(gt(e,l),w):e,v=t=>{!n&&s.v.length&&(t={...t,v:[...s.v,...t.v],$:""}),t.$||(t.$=qe(t,b.get(t.d)));let e=n?null:m.get(t.$);if(null==e){let d=(t=>{const e=s;s=t;try{return gt(c(t),l)}finally{s=e}})(t);if(t.$||(t.$=xt(JSON.stringify(d,w)),b.set(t.d,t.$),t.$=qe(t,t.$)),d&&"object"==typeof d)if(t.v=t.v.map(Me),o&&(t.i=o),d=h(d,t),n)a.push(d);else{const i="function"==typeof t.d?"string"==typeof d._?1:3:2;e=r||"function"==typeof t.d?(r||xt)(i+t.$):t.$,p(d,e,t,i).forEach(f),d._&&(e+=" "+d._)}else"string"==typeof d?e=d:(e=t.$,i.report({id:"UNKNOWN_DIRECTIVE",rule:e},l)),n&&"function"!=typeof t.d&&a.push(e);n||(m.set(t.$,e),ft(m,3e4))}return e},x=t=>at(Et(t).map(v).filter(Boolean)," "),y=Je(t.preflight,dt,!1);if(y){const t=(t=>({":root":{tabSize:4},"body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul":{margin:"0"},button:{backgroundColor:"transparent",backgroundImage:"none"},'button,[type="button"],[type="reset"],[type="submit"]':{WebkitAppearance:"button"},"button:focus":{outline:["1px dotted","5px auto -webkit-focus-ring-color"]},"fieldset,ol,ul,legend":{padding:"0"},"ol,ul":{listStyle:"none"},html:{lineHeight:"1.5",WebkitTextSizeAdjust:"100%",fontFamily:t("fontFamily.sans","ui-sans-serif,system-ui,sans-serif")},body:{fontFamily:"inherit",lineHeight:"inherit"},"*,::before,::after":{boxSizing:"border-box",border:`0 solid ${t("borderColor.DEFAULT","currentColor")}`},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},img:{borderStyle:"solid"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:"1",color:t("placeholderColor.DEFAULT",t("colors.gray.400","#a1a1aa"))},'button,[role="button"]':{cursor:"pointer"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",margin:"0",padding:"0",lineHeight:"inherit",color:"inherit"},"button,select":{textTransform:"none"},"::-moz-focus-inner":{borderStyle:"none",padding:"0"},":-moz-focusring":{outline:"1px dotted ButtonText"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},'[type="search"]':{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"abbr[title]":{textDecoration:"underline dotted"},"b,strong":{fontWeight:"bolder"},"pre,code,kbd,samp":{fontFamily:t("fontFamily","mono","ui-monospace,monospace"),fontSize:"1em"},"sub,sup":{fontSize:"75%",lineHeight:"0",position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"}}))(e),i=p("function"==typeof y?gt(y(t,l),l)||t:{...t,...y});g(((t=(i.forEach(f),!0))=>t))}return{init:()=>i.report({id:"LATE_SETUP_CALL"},l),process:x}},Ze=t=>{let e,i=t=>(r(),i(t)),r=t=>{({process:i,init:r}=Ve(t))};t&&r(t);return{tw:Object.defineProperties(((...t)=>i(t)),{theme:{get:(o="theme",()=>(e||i([t=>(e=t,"")]),e[o]))}}),setup:t=>r(t)};var o},Ge=(t,e)=>!!~t.indexOf(e),Xe=(t,e)=>{for(;"function"==typeof t;)t=t(e);return t},Qe=(t,e,i)=>e?Object.keys(e).reduce(((t,r)=>{const o=Xe(e[r],i);return((t,e)=>!Ge("@:&",t[0])&&(Ge("rg",(typeof e)[5])||Array.isArray(e)))(r,o)?t[(t=>t.replace(/[A-Z]/g,"-$&").toLowerCase())(r)]=o:t[r]="@"==r[0]&&Ge("figa",r[1])?(t[r]||[]).concat(o):Qe(t[r]||{},o,i),t}),t):t,ti=/\s*(?:([\w-%@]+)\s*:?\s*([^{;]+?)\s*(?:;|$|})|([^;}{]*?)\s*{)|(})/gi,ei=/\/\*[\s\S]*?\*\/|\s+|\n/gm,ii=(t,e)=>t.reduceRight(((t,e)=>({[e]:t})),e),ri=(t,e,i)=>{i&&t.push(ii(e,i))},oi=(t,e)=>((t,e)=>{const i=(t,r)=>Array.isArray(r)?r.reduce(i,t):Qe(t,Xe(r,e),e);return t.reduce(i,{})})(Array.isArray(t[0])&&Array.isArray(t[0].raw)?((t,e)=>{const i=[],r=[];let o,s;for(let n=0;n<t.length;n++){const a=t[n];if("string"==typeof a){for(;s=ti.exec(a.replace(ei," "));)if(s[0])if(s[4]&&(o=ri(r,i,o),i.pop()),s[3])o=ri(r,i,o),i.push(s[3]);else if(!s[4]){o||(o={});const i=s[2]&&/\S/.test(s[2])?s[2]:t[++n];i&&("@apply"==s[1]?Qe(o,Xe(Lt(i),e),e):o[s[1]]=i)}}else o=ri(r,i,o),r.push(ii(i,a))}return ri(r,i,o),r})(((t,e,i)=>{let r=t[0];const o=[];for(let s=0;s<e.length;){const n=Xe(e[s],i);n&&"object"==typeof n?(o.push(r,n),r=t[++s]):r+=(n||"")+t[++s]}return o.push(r),o})(t[0],t.slice(1),e),e):t,e),si=(...t)=>Ut(oi,t),ni=(t,e)=>{const i=oi(t,e),r=xt(JSON.stringify(i));return e.tw((()=>({[`@keyframes ${r}`]:i}))),r},ai=(...t)=>Ut(ni,t),li=(t,e)=>void 0===e?(...e)=>li(t,ai(...e)):si({...t&&"object"==typeof t?t:{animation:t},animationName:"function"==typeof e?e:ai(e)});const ci=li("1s ease-in-out forwards",{"0%":{"max-height":"0vh"},"100%":{"max-height":"70vh"}}),di=li(".75s ease-in-out forwards",{"0%":{"max-height":"0px",opacity:0},"100%":{"max-height":"300px",opacity:1}}),hi=li(".5s .5s ease-in-ot forwards",{"0%":{opacity:0},"100%":{opacity:1}}),pi=li(".5s ease-in-ot forwards",{"0%":{opacity:0},"100%":{opacity:1}}),ui=xe({target:new CSSStyleSheet}),{tw:gi}=Ze({sheet:ui});class fi extends V{static styles=[ui.target];static properties={menu:{type:Boolean},location:{type:String},detector:{type:Boolean},detectorInteracted:{type:Boolean},menuList:{type:Array},regionSelector:{type:Boolean},regions:{type:Array},showLogin:{type:Boolean},crtFlag:{type:String}};constructor(){super(),this.menu=!1,this.location="Kastrup, Danmark",this.detector=!1,this.regionSelector=!1,this.detectorInteracted=!1,this.showLogin=!1,this.crtFlag="./assets/flags/denmark.svg",this.regions=[{imgSrc:"./assets/flags/usa.svg",title:"USA",anchor:"#",active:!1},{imgSrc:"./assets/flags/denmark.svg",title:"Danmark",active:!0},{imgSrc:"./assets/flags/german.svg",title:"Deutshland",active:!1},{imgSrc:"./assets/flags/norway.svg",title:"Norge",active:!1},{imgSrc:"./assets/flags/finland.svg",title:"Suomi",active:!1},{imgSrc:"./assets/flags/sweden.svg",title:"Sverige",active:!1}],this.menuList=[{text:"Hvordan virker det?",anchor:"#"},{text:"Casinos",anchor:"#",dropdown:{shown:!1,list:[{text:"Tilbud",anchor:"#"},{text:"Casino anmeldelser",anchor:"#"},{text:"Hotte Online Casioner",anchor:"#"},{text:"Nye Online Casioner",anchor:"#"}]}},{text:"Spil",anchor:"#",dropdown:{shown:!1,list:[{text:"Gratis konkurrencer",anchor:"#"},{text:"Vindere",anchor:"#"},{text:"Spilanmeldelser",anchor:"#"}]}}]}toggleRegion(t){this.regions.forEach((t=>{t.active=!1})),t.active=!0,this.crtFlag=t.imgSrc}toggleMenu(){this.menu=!this.menu,this.menu&&(this.regionSelector=!1,this.detector&&(this.detector=!1),this.menuList.forEach((t=>{t.dropdown&&(t.dropdown.shown=!1)})))}render(){return z`
      <nav
        class="${gi`flex justify-between px-4 h-16 bg-[#eaeff7] items-center shadow-md z-20 fixed w-full top-0`}"
      >
        <a href="#"
          ><img src="./assets/header.svg" alt="header" class="${gi`w-32`}"
        /></a>
        <div class="flex">
          <button
            @click=${()=>{this.showLogin=!0,this.requestUpdate(),console.log(this.showLogin)}}
            class="${gi`p-2 w-10 h-10 rounded bg-black mr-4`}"
          >
            <img src="./assets/login.svg" alt="Login Icon" />
          </button>
          <button class="${"mr-4"}">
            <img src="./assets/search.svg" alt="search icon" />
          </button>
          <button @click=${this.toggleMenu}>
            <img
              class="${gi`w-8`}"
              src="./assets/${this.menu?"burger-exit.svg":"burger-menu.svg"}"
              alt="menu icon"
            />
          </button>
          <!-- Burger Menu Button -->
          ${this.menu?z`
                <!-- Navigation Menu -->
                <nav
                  class="${gi`fixed top-16 right-0 h-[70vh] bg-[#eaeff7] w-[100vw] z-10 flex shadow-md ${ci}`}"
                >
                  <div class="${gi`w-full relative ${hi} opacity-0`}">
                    <div class="${gi`flex py-8 px-12 gap-5`}">
                      <button
                        class="${gi`text-white text-[19px] leading-9 rounded-[3px] font-bold w-full h-10 flex justify-center`}"
                        style="background-image: linear-gradient(to right, #0060E9 0%, #3D8BDD 50%, #80BAD0 100%)"
                      >
                        Shop
                      </button>
                      <button
                        class="${gi`w-12`}"
                        @click=${()=>{this.detectorInteracted?this.regionSelector=!this.regionSelector:this.detector=!this.detector}}
                      >
                        <img src=${this.crtFlag} alt="Region Selector" />
                      </button>
                    </div>
                    <!-- location pop-up -->
                    ${this.detector?z`<div
                          class="${gi`${pi} opacity-0 border-t-4 border-[#FFBC3F] shadow-lg transition-all rounded-b-lg absolute w-2/3 right-12 top-20 px-4 py-5 bg-white`}"
                        >
                          <p class="${"font-bold text-blue-800"}">
                            We detected that you visit us from ${this.location}
                          </p>
                          <button
                            class="${gi`underline text-[#999999]`}"
                            @click=${()=>{this.regionSelector=!0,this.detectorInteracted=!0,this.detector=!1}}
                          >
                            Is this not accurate?
                          </button>
                        </div>`:""}
                    ${this.regionSelector?z`
                          <ul
                            class="${gi`flex flex-col gap-2 shadow-xl bg-[#eaeff7] absolute top-20 right-[2.65rem] rounded-lg p-[5px] ${di} overflow-hidden`}"
                          >
                            ${this.regions.map((t=>t.imgSrc!=this.crtFlag?z`
                                    <li>
                                      <button
                                        class="${gi`flex gap-2 w-10`}"
                                        @click=${()=>{this.toggleRegion(t),this.regionSelector=!1,this.requestUpdate()}}
                                      >
                                        <img
                                          src="${t.imgSrc}"
                                          alt="${t.title} Flag"
                                        />
                                      </button>
                                    </li>
                                  `:""))}
                          </ul>
                        `:""}
                    <!-- menu list -->
                    <ul class="${gi`font-bold`}">
                      ${this.menuList.map((t=>z`
                          <li
                            @click=${()=>{t.dropdown&&(t.dropdown.shown=!t.dropdown.shown,this.menuList.forEach((e=>{e.dropdown&&e!=t&&(e.dropdown.shown=!1)})),this.requestUpdate())}}
                            class="${gi`pl-[20%] pb-4 flex items-start gap-2`}"
                          >
                            <!-- Dropdown Triangle -->
                            <div>
                              <a
                                class="${gi`flex items-center gap-3 text-[19px] mt-4 mb-2`}"
                                href="${t.anchor}"
                                style="color: ${t.dropdown&&t.dropdown.shown?"#2B7EE1":"inherit"}"
                                >${t.text}
                                ${t.dropdown&&z`<svg
                                  style="transform: rotate(${t.dropdown.shown?"0":"180deg"});"
                                  class="${gi`mt-1 inline-block`}"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="7"
                                  height="6"
                                  viewBox="0 0 7 6"
                                >
                                  <path
                                    id="Polygon_4"
                                    data-name="Polygon 4"
                                    d="M2.636,1.481a1,1,0,0,1,1.728,0L6.123,4.5A1,1,0,0,1,5.259,6H1.741A1,1,0,0,1,.877,4.5Z"
                                    transform="translate(7 6) rotate(180)"
                                    fill="${t.dropdown&&t.dropdown.shown?"#2B7EE1":"inherit"}"
                                  />
                                </svg>`}</a
                              >
                              ${t.dropdown&&t.dropdown.shown?z`<ul
                                    class="${gi`flex flex-col gap-3 ${di} overflow-hidden`}"
                                  >
                                    ${t.dropdown.list.map((t=>z`
                                        <li
                                          class="${gi`font-normal text-[#959CA7] text-[17px]`}"
                                        >
                                          <a href=${t.anchor}>
                                            ${t.text}
                                          </a>
                                        </li>
                                      `))}
                                  </ul>`:""}
                            </div>
                          </li>
                          <hr class="${gi`bg-[#DEE1E6]`}" />
                        `))}
                    </ul>
                  </div>
                </nav>
              `:""}
        </div>
      </nav>
      ${this.showLogin?z`
            <div
              class="${gi`fixed w-[100vw] h-[100vh] top-0 right-0 pt-10 pb-28 px-4 z-20 ${pi}`}"
              style="background-image: linear-gradient(to right, #a8ebe9, #fae4fe)"
            >
              <div
                class="${gi`bg(top-right no-repeat) flex flex-col justify-between h-full`}"
                style="background-image: url('./assets/login-banner.png'); background-size: 40%;"
              >
                <button
                  @click=${()=>{this.showLogin=!1}}
                  class="${gi`flex items-center gap-4 text-[#339] font-medium absolute top-3 right-2`}"
                >
                  Close
                  <div
                    class="${gi`flex bg-[#eeeeee] p-2 rounded-full w-9 h-9 justify-center`}"
                  >
                    <img src="./assets/close.svg" alt="Close Icon" />
                  </div>
                </button>
                <div class="${gi`mt-4`}">
                  <h2 class="${gi`text-[2rem] font-bold leading-9`}">Log in</h2>
                  <p>Are you ready to Win Free Prizes?</p>
                </div>
                <form
                  action="#"
                  class="${gi`text-center flex flex-col px-10 gap-y-6`}"
                  (submit)="(false)"
                >
                  <input
                    type="text"
                    placeholder="Your email"
                    class="${gi`p-3 rounded-sm bg-[#eeeeee]`}"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    class="${gi`p-3 rounded-sm bg-[#eeeeee]`}"
                    required
                  />
                  <a
                    href="#"
                    class="${gi`rounded-md shadow-md w-full h-9 flex justify-center items-center text-lg font-medium text-white`}"
                    style="background-image: linear-gradient(to bottom left, #FFA626, #FFD45B)"
                  >
                    Log In
                  </a>
                  <div>
                    <p class="${gi`mb-4`}">Or continue with social login</p>
                    <div class="${gi`flex justify-center gap-x-3`}">
                      <a
                        href="#"
                        class="${gi`w-16 h-16 bg-[#eeeeee] flex rounded-full p-4 justify-center`}"
                        ><img src="./assets/social-icons/facebook.svg"
                      /></a>
                      <a
                        href="#"
                        class="${gi`w-16 h-16 bg-[#eeeeee] flex rounded-full p-4 justify-center`}"
                        ><img src="./assets/social-icons/google.svg"
                      /></a>
                    </div>
                  </div>
                  <div>
                    <hr class="${gi`w-1/2 border-[#999999] my-4 mx-auto`}" />
                    <p class="${gi`my-1 text-[16px]`}">
                      Don't remember your password?
                    </p>
                    <a
                      href="#"
                      class="${gi`text-[#339] hover:text-[#6c6ca7] text-[16px]`}"
                      >Not a user yet?
                      <span class="${gi`font-bold`}">Register here!</span></a
                    >
                    <hr class="${gi`w-1/2 border-[#999999] my-4 mx-auto`}" />
                  </div>
                </form>
              </div>
            </div>
          `:""}
    `}}window.customElements.define("nav-bar",fi);const mi=xe({target:new CSSStyleSheet}),{tw:bi}=Ze({sheet:mi});class wi extends V{static styles=[mi.target];static properties={};constructor(){super()}render(){return z`
      <footer
        class="${bi`bg-white`}"
        style="box-shadow: -1px -1px 11px 1px rgb(0 0 0 / 22%)"
      >
        <div class="${bi`flex justify-center items-center gap-2 pb-5 pt-10`}">
          <div class="${bi`w-full bg-[#eeeeee] h-[2px]`}"></div>
          <a class="${bi`w-24 `}" href="#">
            <img src="./assets/facebook.png" alt="Facebook Icon" />
          </a>
          <a class="${bi`w-24 mx-2`}" href="#">
            <img src="./assets/twitch.png" alt="Twitch Icon" />
          </a>
          <a class="${bi`w-24 `}" href="#">
            <img src="./assets/youtube.png" alt="Youtube Icon" />
          </a>
          <div class="${bi`w-full bg-[#eeeeee] h-[2px]`}"></div>
        </div>
        <div
          class="${bi`bg-[#273789] py-10 px-[10%] flex flex-col items-center`}"
        >
          <img
            src="./assets/logo-big.png"
            alt="Logo"
            class="${bi`mb-10 w-3/4`}"
          />
          <p class="${bi`text-white text-xs text-center`}">
            18+ | Spil ansvarligt | StopSpillet: 70 22 28 25 | ROFUS.nu Husk at
            pengespil kan være vanedannende, så spil ansvarligt. Hos EkstraPoint
            gør vi derfor en indsats for at opretholde og følge retningslinjer
            udstukket af den danske Spillemyndighed. Man skal være fyldt 18 både
            for at spille på EkstraPoint, og på alle casinosider der er
            repræsenteret herpå. Casino- og spilanmeldelser på vores side er som
            udgangspunkt kommercielt indhold. Regler og vilkår gælder. Spil
            ansvarligt. Selvudelukkelse via ROFUS. Kontakt Spillemyndighedens
            hjælpelinje på StopSpillet.dk
            <a href="https://www.spillemyndigheden.dk/"
              >https://www.spillemyndigheden.dk/</a
            >
          </p>
          <div
            class="${bi`flex flex-wrap justify-center items-center gap-y-2 mt-6`}"
          >
            <div>
              <img
                class=${bi`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/gambleaware.png"
              />
            </div>
            <div>
              <img
                class=${bi`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/mga.png"
              />
            </div>
            <div>
              <img
                class=${bi`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/agerestrict.png"
              />
            </div>
            <div>
              <img
                class=${bi`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/gpwa.gif"
              />
            </div>
            <div>
              <img
                class=${bi`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/egr.webp"
              />
            </div>
            <div>
              <img
                class=${bi`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/lottofy.webp"
              />
            </div>
            <div>
              <img
                class=${bi`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/smartsoft.webp"
              />
            </div>
          </div>
        </div>
      </footer>
    `}}window.customElements.define("app-footer",wi);const vi=xe({target:new CSSStyleSheet}),{tw:xi}=Ze({sheet:vi}),yi=si({"&":{"background-image":"linear-gradient(to left, #a8ebe9, #fae4fe)","background-clip":"text","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}),$i=si({content:'""',"@apply":"absolute w-1 h-1 flex justify-center items-center bg-[#f82858] rounded-full top-1 right-[-2px]"});class ki extends V{static styles=[vi.target];static properties={};constructor(){super()}render(){return z`
      <section
        class="${xi`flex justify-between items-center rounded-md h-12 bg-[#1A2433] px-3 my-2`}"
      >
        <h2 class="${xi`${yi} font-bold text-lg`}">$52.526</h2>
        <p class="${xi`font-medium text-white text-sm`}">
          In rewards the last 30 days!
        </p>
        <a
          href="#"
          class="${xi`flex items-center rounded gap-1 px-1 h-6 bg-white`}"
        >
          <img src="./assets/person.svg" alt="person icon" />
          <p class="${xi`font-medium text-sm`}">1361</p>
          <p class="${xi`font-light text-sm relative after::${$i}`}">
            Live
          </p>
        </a>
      </section>
    `}}window.customElements.define("app-rewards",ki);const Si=xe({target:new CSSStyleSheet}),{tw:Ai}=Ze({sheet:Si});class Ci extends V{static styles=[Si.target];render(){return z`
      <div class="${Ai`font-['sofia-pro'] pt-16`}">
        <nav-bar></nav-bar>
        <section class="${Ai`px-8`}">
          <app-rewards></app-rewards>
        </section>
        <app-footer></app-footer>
      </div>
    `}}window.customElements.define("my-app",Ci);export{Ci as MyApp};
