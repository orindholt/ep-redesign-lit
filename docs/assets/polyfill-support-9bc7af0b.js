!function(i){"function"==typeof define&&define.amd?define(i):i()}((function(){"use strict";var i;i=function(){var i,n;i=function(){
/**
                    * @license
                    * Copyright 2017 Google LLC
                    * SPDX-License-Identifier: BSD-3-Clause
                    */
var i,n="__scoped";null!==(i=globalThis.reactiveElementPolyfillSupport)&&void 0!==i||(globalThis.reactiveElementPolyfillSupport=function(i){var o=i.ReactiveElement;if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){var t=o.prototype;window.ShadyDOM&&window.ShadyDOM.inUse&&!0===window.ShadyDOM.noPatch&&window.ShadyDOM.patchElementProto(t);var d=t.createRenderRoot;t.createRenderRoot=function(){var i,o,t,e=this.localName;if(window.ShadyCSS.nativeShadow)return d.call(this);if(!this.constructor.hasOwnProperty(n)){this.constructor[n]=!0;var u=this.constructor.elementStyles.map((function(i){return i instanceof CSSStyleSheet?Array.from(i.cssRules).reduce((function(i,n){return i+n.cssText}),""):i.cssText}));null===(o=null===(i=window.ShadyCSS)||void 0===i?void 0:i.ScopingShim)||void 0===o||o.prepareAdoptedCssText(u,e),void 0===this.constructor._$AJ&&window.ShadyCSS.prepareTemplateStyles(document.createElement("template"),e)}return null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions)};var e=t.connectedCallback;t.connectedCallback=function(){e.call(this),this.hasUpdated&&window.ShadyCSS.styleElement(this)};var u=t._$AE;t._$AE=function(i){this.hasUpdated||window.ShadyCSS.styleElement(this),u.call(this,i)}}})},"function"==typeof define&&define.amd?define(i):i(),function(i){"function"==typeof define&&define.amd?define(i):i()}((function(){
/**
                    * @license
                    * Copyright 2017 Google LLC
                    * SPDX-License-Identifier: BSD-3-Clause
                    */
var i,n=new Set,o=new Map;null!==(i=globalThis.litHtmlPolyfillSupport)&&void 0!==i||(globalThis.litHtmlPolyfillSupport=function(i,t){if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){var d=function(i){return void 0!==i&&!n.has(i)},e=function(i){var n=o.get(i);return void 0===n&&o.set(i,n=[]),n},u=new Map,v=i.createElement;i.createElement=function(n,o){var t=v.call(i,n,o),u=null==o?void 0:o.scope;if(void 0!==u&&(window.ShadyCSS.nativeShadow||window.ShadyCSS.prepareTemplateDom(t,u),d(u))){var f=e(u),r=t.content.querySelectorAll("style");f.push.apply(f,Array.from(r).map((function(i){var n;return null===(n=i.parentNode)||void 0===n||n.removeChild(i),i.textContent})))}return t};var f=document.createDocumentFragment(),r=document.createComment(""),w=t.prototype,l=w._$AI;w._$AI=function(i,t){var u,v,w;void 0===t&&(t=this);var s=this._$AA.parentNode,a=null===(u=this.options)||void 0===u?void 0:u.scope;if(s instanceof ShadowRoot&&d(a)){var h=this._$AA,c=this._$AB;f.appendChild(r),this._$AA=r,this._$AB=null,l.call(this,i,t);var y=(null===(v=i)||void 0===v?void 0:v._$litType$)?this._$AH._$AD.el:document.createElement("template");if(function(i,t){var d,u=e(i),v=0!==u.length;v&&((d=document.createElement("style")).textContent=u.join("\n"),t.content.appendChild(d)),n.add(i),o.delete(i),window.ShadyCSS.prepareTemplateStyles(t,i),v&&window.ShadyCSS.nativeShadow&&null!==(d=t.content.querySelector("style"))&&t.content.appendChild(d)}(a,y),f.removeChild(r),null===(w=window.ShadyCSS)||void 0===w?void 0:w.nativeShadow){var p=y.content.querySelector("style");null!==p&&f.appendChild(p.cloneNode(!0))}s.insertBefore(f,c),this._$AA=h,this._$AB=c}else l.call(this,i,t)},w._$AC=function(n){var o,t=null===(o=this.options)||void 0===o?void 0:o.scope,d=u.get(t);void 0===d&&u.set(t,d=new Map);var e=d.get(n.strings);return void 0===e&&d.set(n.strings,e=new i(n,this.options)),e}}})})),null!==(n=globalThis.litElementPolyfillSupport)&&void 0!==n||(globalThis.litElementPolyfillSupport=function(i){var n=i.LitElement;if(void 0!==window.ShadyCSS&&(!window.ShadyCSS.nativeShadow||window.ShadyCSS.ApplyShim)){n._$AJ=!0;var o=n.prototype,t=o.createRenderRoot;o.createRenderRoot=function(){return this.renderOptions.scope=this.localName,t.call(this)}}})},"function"==typeof define&&define.amd?define(i):i()}));
//# sourceMappingURL=polyfill-support.js.map