const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-BbvvjE_8.js","assets/core-BYs6Qhjn.js","assets/index-I8PFrMGc.js","assets/index-BL5F6v0R.css","assets/index-BbP3371Q.js","assets/index.es-zE9SdjTq.js","assets/events-DQ172AOg.js","assets/index-nibyPLVP.js","assets/all-wallets-Dlo_4t9c.js","assets/arrow-bottom-circle-Cryba1Sm.js","assets/app-store-DDvf_oBr.js","assets/apple-DV6bOQx7.js","assets/arrow-bottom-ys_-5tJJ.js","assets/arrow-left-C0b7pN-E.js","assets/arrow-right-C22eRTYE.js","assets/arrow-top-2Zqx0Rfm.js","assets/bank-BqmtJ3RG.js","assets/browser-B9bV_m6t.js","assets/card-Cdu327SS.js","assets/checkmark-BmtwJcG_.js","assets/checkmark-bold-BwfX6BOG.js","assets/chevron-bottom-DrKvXPAX.js","assets/chevron-left-C80n6qSD.js","assets/chevron-right-BfN3bppc.js","assets/chevron-top-BoW3M3ep.js","assets/chrome-store-BO9XmWIa.js","assets/clock-rZThq9oD.js","assets/close-BED_ihNz.js","assets/compass-Bv148SEN.js","assets/coinPlaceholder-ppXLwM7L.js","assets/copy-DtI8n5PU.js","assets/cursor-D-114uKr.js","assets/cursor-transparent-DhOnmkuv.js","assets/desktop-DkyjfhVB.js","assets/disconnect-BqajvIAw.js","assets/discord-Cg7V3Azc.js","assets/etherscan-CJ4C2fp7.js","assets/extension-B5c0Ai0d.js","assets/external-link-BJ8Hm14w.js","assets/facebook-C3ZWN2t2.js","assets/farcaster-BlDjV-eA.js","assets/filters-zMPmICpI.js","assets/github-B2NefN0P.js","assets/google-CzsxfDPQ.js","assets/help-circle-C9KNb6d-.js","assets/image-BERnVnyS.js","assets/id-CeXcJgfk.js","assets/info-circle-BKcZJ3NE.js","assets/lightbulb-BgJi2HOV.js","assets/mail-zzNnO36-.js","assets/mobile-CAELjvqe.js","assets/more-BsDWiQB6.js","assets/network-placeholder-2qBhuIf3.js","assets/nftPlaceholder-BzweweaL.js","assets/off-BLTa9QgC.js","assets/play-store-D-YzV0Yb.js","assets/plus-ClrQSRyU.js","assets/qr-code-wgQlxgHt.js","assets/recycle-horizontal-Bns9w7UH.js","assets/refresh-CeQ9QqQc.js","assets/search-pJ4dzKZG.js","assets/send-6Phc-VO-.js","assets/swapHorizontal-B5zB1nKC.js","assets/swapHorizontalMedium-CXmkvVm_.js","assets/swapHorizontalBold-CpxAmqSD.js","assets/swapHorizontalRoundedBold-Bn7kiDmO.js","assets/swapVertical-CVkxooYq.js","assets/telegram-DqcF_ulh.js","assets/three-dots-BxzkutWe.js","assets/twitch-DQbVpFmd.js","assets/x-D7KaR20V.js","assets/twitterIcon-DEzqP4Hl.js","assets/verify-Uzl_ThSq.js","assets/verify-filled-jyzaknMY.js","assets/wallet-mLHMHApL.js","assets/walletconnect-CW0rAhdz.js","assets/wallet-placeholder-D7BmMB2R.js","assets/warning-circle-D6y9DtaS.js","assets/info-fQ6ocAak.js","assets/exclamation-triangle-B2tiXm8x.js","assets/reown-logo-CLOsR0HD.js"])))=>i.map(i=>d[i]);
import{J as N,K as q,L as Y,N as V,k as S,l as b,m as E,x as f,o as H,n as K}from"./core-BYs6Qhjn.js";import{a0 as a}from"./index-I8PFrMGc.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:N},Z=(t=X,e,r)=>{const{kind:o,metadata:n}=r;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),o==="accessor"){const{name:s}=r;return{set(c){const u=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,u,t)},init(c){return c!==void 0&&this.C(s,void 0,t,c),c}}}if(o==="setter"){const{name:s}=r;return function(c){const u=this[s];e.call(this,c),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+o)};function l(t){return(e,r)=>typeof r=="object"?Z(t,e,r):((o,n,i)=>{const s=n.hasOwnProperty(i);return n.constructor.createProperty(i,o),s?Object.getOwnPropertyDescriptor(n,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=t=>t??Y;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=t=>t===null||typeof t!="object"&&typeof t!="function",Q=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W={ATTRIBUTE:1,CHILD:2},U=t=>(...e)=>({_$litDirective$:t,values:e});let F=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,o){this._$Ct=e,this._$AM=r,this._$Ci=o}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e)=>{var o;const r=t._$AN;if(r===void 0)return!1;for(const n of r)(o=n._$AO)==null||o.call(n,e,!1),T(n,e);return!0},I=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},G=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),rt(e)}};function tt(t){this._$AN!==void 0?(I(this),this._$AM=t,G(this)):this._$AM=t}function et(t,e=!1,r=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let i=r;i<o.length;i++)T(o[i],!1),I(o[i]);else o!=null&&(T(o,!1),I(o));else T(this,t)}const rt=t=>{t.type==W.CHILD&&(t._$AP??(t._$AP=et),t._$AQ??(t._$AQ=tt))};class it extends F{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,o){super._$AT(e,r,o),G(this),this.isConnected=e._$AU}_$AO(e,r=!0){var o,n;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),r&&(T(this,e),I(this))}setValue(e){if(Q(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class at{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=t=>!J(t)&&typeof t.then=="function",B=1073741823;class nt extends it{constructor(){super(...arguments),this._$Cwt=B,this._$Cbt=[],this._$CK=new ot(this),this._$CX=new at}render(...e){return e.find((r=>!j(r)))??V}update(e,r){const o=this._$Cbt;let n=o.length;this._$Cbt=r;const i=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<r.length&&!(c>this._$Cwt);c++){const u=r[c];if(!j(u))return this._$Cwt=c,u;c<n&&u===o[c]||(this._$Cwt=B,n=0,Promise.resolve(u).then((async h=>{for(;s.get();)await s.get();const p=i.deref();if(p!==void 0){const C=p._$Cbt.indexOf(u);C>-1&&C<p._$Cwt&&(p._$Cwt=C,p.setValue(h))}})))}return V}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const st=U(nt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=U(class extends F{constructor(t){var e;if(super(t),t.type!==W.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var o,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in e)e[i]&&!((o=this.nt)!=null&&o.has(i))&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const s=!!e[i];s===this.st.has(i)||(n=this.nt)!=null&&n.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return V}}),w={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:o}){return t.length<=e+r?t:o==="end"?`${t.substring(0,e)}...`:o==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),o=this.hexToRgb(r),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(n==null?void 0:n.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const p=this.tintColor(o,.15*h);u.push(`rgb(${p[0]}, ${p[1]}, ${p[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,o=e>>8&255,n=e&255;return[r,o,n]},tintColor(t,e){const[r,o,n]=t,i=Math.round(r+(255-r)*e),s=Math.round(o+(255-o)*e),c=Math.round(n+(255-n)*e);return[i,s,c]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function lt(t,e){const{kind:r,elements:o}=e;return{kind:r,elements:o,finisher(n){customElements.get(t)||customElements.define(t,n)}}}function ut(t,e){return customElements.get(t)||customElements.define(t,e),e}function $(t){return function(r){return typeof r=="function"?ut(t,r):lt(t,r)}}const dt=S`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var _=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let d=class extends E{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&w.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&w.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&w.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&w.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&w.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&w.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&w.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&w.getSpacingStyles(this.margin,3)};
    `,f`<slot></slot>`}};d.styles=[b,dt];_([l()],d.prototype,"flexDirection",void 0);_([l()],d.prototype,"flexWrap",void 0);_([l()],d.prototype,"flexBasis",void 0);_([l()],d.prototype,"flexGrow",void 0);_([l()],d.prototype,"flexShrink",void 0);_([l()],d.prototype,"alignItems",void 0);_([l()],d.prototype,"justifyContent",void 0);_([l()],d.prototype,"columnGap",void 0);_([l()],d.prototype,"rowGap",void 0);_([l()],d.prototype,"gap",void 0);_([l()],d.prototype,"padding",void 0);_([l()],d.prototype,"margin",void 0);d=_([$("wui-flex")],d);class _t{constructor(){this.cache=new Map}set(e,r){this.cache.set(e,r)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const D=new _t,gt=S`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var A=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};const M={add:async()=>(await a(async()=>{const{addSvg:t}=await import("./add-BbvvjE_8.js");return{addSvg:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]))).addSvg,allWallets:async()=>(await a(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-Dlo_4t9c.js");return{allWalletsSvg:t}},__vite__mapDeps([8,1,2,3,4,5,6,7]))).allWalletsSvg,arrowBottomCircle:async()=>(await a(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-Cryba1Sm.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([9,1,2,3,4,5,6,7]))).arrowBottomCircleSvg,appStore:async()=>(await a(async()=>{const{appStoreSvg:t}=await import("./app-store-DDvf_oBr.js");return{appStoreSvg:t}},__vite__mapDeps([10,1,2,3,4,5,6,7]))).appStoreSvg,apple:async()=>(await a(async()=>{const{appleSvg:t}=await import("./apple-DV6bOQx7.js");return{appleSvg:t}},__vite__mapDeps([11,1,2,3,4,5,6,7]))).appleSvg,arrowBottom:async()=>(await a(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-ys_-5tJJ.js");return{arrowBottomSvg:t}},__vite__mapDeps([12,1,2,3,4,5,6,7]))).arrowBottomSvg,arrowLeft:async()=>(await a(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-C0b7pN-E.js");return{arrowLeftSvg:t}},__vite__mapDeps([13,1,2,3,4,5,6,7]))).arrowLeftSvg,arrowRight:async()=>(await a(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-C22eRTYE.js");return{arrowRightSvg:t}},__vite__mapDeps([14,1,2,3,4,5,6,7]))).arrowRightSvg,arrowTop:async()=>(await a(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-2Zqx0Rfm.js");return{arrowTopSvg:t}},__vite__mapDeps([15,1,2,3,4,5,6,7]))).arrowTopSvg,bank:async()=>(await a(async()=>{const{bankSvg:t}=await import("./bank-BqmtJ3RG.js");return{bankSvg:t}},__vite__mapDeps([16,1,2,3,4,5,6,7]))).bankSvg,browser:async()=>(await a(async()=>{const{browserSvg:t}=await import("./browser-B9bV_m6t.js");return{browserSvg:t}},__vite__mapDeps([17,1,2,3,4,5,6,7]))).browserSvg,card:async()=>(await a(async()=>{const{cardSvg:t}=await import("./card-Cdu327SS.js");return{cardSvg:t}},__vite__mapDeps([18,1,2,3,4,5,6,7]))).cardSvg,checkmark:async()=>(await a(async()=>{const{checkmarkSvg:t}=await import("./checkmark-BmtwJcG_.js");return{checkmarkSvg:t}},__vite__mapDeps([19,1,2,3,4,5,6,7]))).checkmarkSvg,checkmarkBold:async()=>(await a(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-BwfX6BOG.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([20,1,2,3,4,5,6,7]))).checkmarkBoldSvg,chevronBottom:async()=>(await a(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-DrKvXPAX.js");return{chevronBottomSvg:t}},__vite__mapDeps([21,1,2,3,4,5,6,7]))).chevronBottomSvg,chevronLeft:async()=>(await a(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-C80n6qSD.js");return{chevronLeftSvg:t}},__vite__mapDeps([22,1,2,3,4,5,6,7]))).chevronLeftSvg,chevronRight:async()=>(await a(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-BfN3bppc.js");return{chevronRightSvg:t}},__vite__mapDeps([23,1,2,3,4,5,6,7]))).chevronRightSvg,chevronTop:async()=>(await a(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-BoW3M3ep.js");return{chevronTopSvg:t}},__vite__mapDeps([24,1,2,3,4,5,6,7]))).chevronTopSvg,chromeStore:async()=>(await a(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-BO9XmWIa.js");return{chromeStoreSvg:t}},__vite__mapDeps([25,1,2,3,4,5,6,7]))).chromeStoreSvg,clock:async()=>(await a(async()=>{const{clockSvg:t}=await import("./clock-rZThq9oD.js");return{clockSvg:t}},__vite__mapDeps([26,1,2,3,4,5,6,7]))).clockSvg,close:async()=>(await a(async()=>{const{closeSvg:t}=await import("./close-BED_ihNz.js");return{closeSvg:t}},__vite__mapDeps([27,1,2,3,4,5,6,7]))).closeSvg,compass:async()=>(await a(async()=>{const{compassSvg:t}=await import("./compass-Bv148SEN.js");return{compassSvg:t}},__vite__mapDeps([28,1,2,3,4,5,6,7]))).compassSvg,coinPlaceholder:async()=>(await a(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-ppXLwM7L.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([29,1,2,3,4,5,6,7]))).coinPlaceholderSvg,copy:async()=>(await a(async()=>{const{copySvg:t}=await import("./copy-DtI8n5PU.js");return{copySvg:t}},__vite__mapDeps([30,1,2,3,4,5,6,7]))).copySvg,cursor:async()=>(await a(async()=>{const{cursorSvg:t}=await import("./cursor-D-114uKr.js");return{cursorSvg:t}},__vite__mapDeps([31,1,2,3,4,5,6,7]))).cursorSvg,cursorTransparent:async()=>(await a(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-DhOnmkuv.js");return{cursorTransparentSvg:t}},__vite__mapDeps([32,1,2,3,4,5,6,7]))).cursorTransparentSvg,desktop:async()=>(await a(async()=>{const{desktopSvg:t}=await import("./desktop-DkyjfhVB.js");return{desktopSvg:t}},__vite__mapDeps([33,1,2,3,4,5,6,7]))).desktopSvg,disconnect:async()=>(await a(async()=>{const{disconnectSvg:t}=await import("./disconnect-BqajvIAw.js");return{disconnectSvg:t}},__vite__mapDeps([34,1,2,3,4,5,6,7]))).disconnectSvg,discord:async()=>(await a(async()=>{const{discordSvg:t}=await import("./discord-Cg7V3Azc.js");return{discordSvg:t}},__vite__mapDeps([35,1,2,3,4,5,6,7]))).discordSvg,etherscan:async()=>(await a(async()=>{const{etherscanSvg:t}=await import("./etherscan-CJ4C2fp7.js");return{etherscanSvg:t}},__vite__mapDeps([36,1,2,3,4,5,6,7]))).etherscanSvg,extension:async()=>(await a(async()=>{const{extensionSvg:t}=await import("./extension-B5c0Ai0d.js");return{extensionSvg:t}},__vite__mapDeps([37,1,2,3,4,5,6,7]))).extensionSvg,externalLink:async()=>(await a(async()=>{const{externalLinkSvg:t}=await import("./external-link-BJ8Hm14w.js");return{externalLinkSvg:t}},__vite__mapDeps([38,1,2,3,4,5,6,7]))).externalLinkSvg,facebook:async()=>(await a(async()=>{const{facebookSvg:t}=await import("./facebook-C3ZWN2t2.js");return{facebookSvg:t}},__vite__mapDeps([39,1,2,3,4,5,6,7]))).facebookSvg,farcaster:async()=>(await a(async()=>{const{farcasterSvg:t}=await import("./farcaster-BlDjV-eA.js");return{farcasterSvg:t}},__vite__mapDeps([40,1,2,3,4,5,6,7]))).farcasterSvg,filters:async()=>(await a(async()=>{const{filtersSvg:t}=await import("./filters-zMPmICpI.js");return{filtersSvg:t}},__vite__mapDeps([41,1,2,3,4,5,6,7]))).filtersSvg,github:async()=>(await a(async()=>{const{githubSvg:t}=await import("./github-B2NefN0P.js");return{githubSvg:t}},__vite__mapDeps([42,1,2,3,4,5,6,7]))).githubSvg,google:async()=>(await a(async()=>{const{googleSvg:t}=await import("./google-CzsxfDPQ.js");return{googleSvg:t}},__vite__mapDeps([43,1,2,3,4,5,6,7]))).googleSvg,helpCircle:async()=>(await a(async()=>{const{helpCircleSvg:t}=await import("./help-circle-C9KNb6d-.js");return{helpCircleSvg:t}},__vite__mapDeps([44,1,2,3,4,5,6,7]))).helpCircleSvg,image:async()=>(await a(async()=>{const{imageSvg:t}=await import("./image-BERnVnyS.js");return{imageSvg:t}},__vite__mapDeps([45,1,2,3,4,5,6,7]))).imageSvg,id:async()=>(await a(async()=>{const{idSvg:t}=await import("./id-CeXcJgfk.js");return{idSvg:t}},__vite__mapDeps([46,1,2,3,4,5,6,7]))).idSvg,infoCircle:async()=>(await a(async()=>{const{infoCircleSvg:t}=await import("./info-circle-BKcZJ3NE.js");return{infoCircleSvg:t}},__vite__mapDeps([47,1,2,3,4,5,6,7]))).infoCircleSvg,lightbulb:async()=>(await a(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-BgJi2HOV.js");return{lightbulbSvg:t}},__vite__mapDeps([48,1,2,3,4,5,6,7]))).lightbulbSvg,mail:async()=>(await a(async()=>{const{mailSvg:t}=await import("./mail-zzNnO36-.js");return{mailSvg:t}},__vite__mapDeps([49,1,2,3,4,5,6,7]))).mailSvg,mobile:async()=>(await a(async()=>{const{mobileSvg:t}=await import("./mobile-CAELjvqe.js");return{mobileSvg:t}},__vite__mapDeps([50,1,2,3,4,5,6,7]))).mobileSvg,more:async()=>(await a(async()=>{const{moreSvg:t}=await import("./more-BsDWiQB6.js");return{moreSvg:t}},__vite__mapDeps([51,1,2,3,4,5,6,7]))).moreSvg,networkPlaceholder:async()=>(await a(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-2qBhuIf3.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([52,1,2,3,4,5,6,7]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await a(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-BzweweaL.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([53,1,2,3,4,5,6,7]))).nftPlaceholderSvg,off:async()=>(await a(async()=>{const{offSvg:t}=await import("./off-BLTa9QgC.js");return{offSvg:t}},__vite__mapDeps([54,1,2,3,4,5,6,7]))).offSvg,playStore:async()=>(await a(async()=>{const{playStoreSvg:t}=await import("./play-store-D-YzV0Yb.js");return{playStoreSvg:t}},__vite__mapDeps([55,1,2,3,4,5,6,7]))).playStoreSvg,plus:async()=>(await a(async()=>{const{plusSvg:t}=await import("./plus-ClrQSRyU.js");return{plusSvg:t}},__vite__mapDeps([56,1,2,3,4,5,6,7]))).plusSvg,qrCode:async()=>(await a(async()=>{const{qrCodeIcon:t}=await import("./qr-code-wgQlxgHt.js");return{qrCodeIcon:t}},__vite__mapDeps([57,1,2,3,4,5,6,7]))).qrCodeIcon,recycleHorizontal:async()=>(await a(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-Bns9w7UH.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([58,1,2,3,4,5,6,7]))).recycleHorizontalSvg,refresh:async()=>(await a(async()=>{const{refreshSvg:t}=await import("./refresh-CeQ9QqQc.js");return{refreshSvg:t}},__vite__mapDeps([59,1,2,3,4,5,6,7]))).refreshSvg,search:async()=>(await a(async()=>{const{searchSvg:t}=await import("./search-pJ4dzKZG.js");return{searchSvg:t}},__vite__mapDeps([60,1,2,3,4,5,6,7]))).searchSvg,send:async()=>(await a(async()=>{const{sendSvg:t}=await import("./send-6Phc-VO-.js");return{sendSvg:t}},__vite__mapDeps([61,1,2,3,4,5,6,7]))).sendSvg,swapHorizontal:async()=>(await a(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-B5zB1nKC.js");return{swapHorizontalSvg:t}},__vite__mapDeps([62,1,2,3,4,5,6,7]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await a(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-CXmkvVm_.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([63,1,2,3,4,5,6,7]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await a(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-CpxAmqSD.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([64,1,2,3,4,5,6,7]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await a(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-Bn7kiDmO.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([65,1,2,3,4,5,6,7]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await a(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-CVkxooYq.js");return{swapVerticalSvg:t}},__vite__mapDeps([66,1,2,3,4,5,6,7]))).swapVerticalSvg,telegram:async()=>(await a(async()=>{const{telegramSvg:t}=await import("./telegram-DqcF_ulh.js");return{telegramSvg:t}},__vite__mapDeps([67,1,2,3,4,5,6,7]))).telegramSvg,threeDots:async()=>(await a(async()=>{const{threeDotsSvg:t}=await import("./three-dots-BxzkutWe.js");return{threeDotsSvg:t}},__vite__mapDeps([68,1,2,3,4,5,6,7]))).threeDotsSvg,twitch:async()=>(await a(async()=>{const{twitchSvg:t}=await import("./twitch-DQbVpFmd.js");return{twitchSvg:t}},__vite__mapDeps([69,1,2,3,4,5,6,7]))).twitchSvg,twitter:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-D7KaR20V.js");return{xSvg:t}},__vite__mapDeps([70,1,2,3,4,5,6,7]))).xSvg,twitterIcon:async()=>(await a(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-DEzqP4Hl.js");return{twitterIconSvg:t}},__vite__mapDeps([71,1,2,3,4,5,6,7]))).twitterIconSvg,verify:async()=>(await a(async()=>{const{verifySvg:t}=await import("./verify-Uzl_ThSq.js");return{verifySvg:t}},__vite__mapDeps([72,1,2,3,4,5,6,7]))).verifySvg,verifyFilled:async()=>(await a(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-jyzaknMY.js");return{verifyFilledSvg:t}},__vite__mapDeps([73,1,2,3,4,5,6,7]))).verifyFilledSvg,wallet:async()=>(await a(async()=>{const{walletSvg:t}=await import("./wallet-mLHMHApL.js");return{walletSvg:t}},__vite__mapDeps([74,1,2,3,4,5,6,7]))).walletSvg,walletConnect:async()=>(await a(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-CW0rAhdz.js");return{walletConnectSvg:t}},__vite__mapDeps([75,1,2,3,4,5,6,7]))).walletConnectSvg,walletConnectLightBrown:async()=>(await a(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-CW0rAhdz.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([75,1,2,3,4,5,6,7]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await a(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-CW0rAhdz.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([75,1,2,3,4,5,6,7]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await a(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-D7BmMB2R.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([76,1,2,3,4,5,6,7]))).walletPlaceholderSvg,warningCircle:async()=>(await a(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-D6y9DtaS.js");return{warningCircleSvg:t}},__vite__mapDeps([77,1,2,3,4,5,6,7]))).warningCircleSvg,x:async()=>(await a(async()=>{const{xSvg:t}=await import("./x-D7KaR20V.js");return{xSvg:t}},__vite__mapDeps([70,1,2,3,4,5,6,7]))).xSvg,info:async()=>(await a(async()=>{const{infoSvg:t}=await import("./info-fQ6ocAak.js");return{infoSvg:t}},__vite__mapDeps([78,1,2,3,4,5,6,7]))).infoSvg,exclamationTriangle:async()=>(await a(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-B2tiXm8x.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([79,1,2,3,4,5,6,7]))).exclamationTriangleSvg,reown:async()=>(await a(async()=>{const{reownSvg:t}=await import("./reown-logo-CLOsR0HD.js");return{reownSvg:t}},__vite__mapDeps([80,1,2,3,4,5,6,7]))).reownSvg};async function ht(t){if(D.has(t))return D.get(t);const r=(M[t]??M.copy)();return D.set(t,r),r}let m=class extends E{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,f`${st(ht(this.name),f`<div class="fallback"></div>`)}`}};m.styles=[b,H,gt];A([l()],m.prototype,"size",void 0);A([l()],m.prototype,"name",void 0);A([l()],m.prototype,"color",void 0);A([l()],m.prototype,"aspectRatio",void 0);m=A([$("wui-icon")],m);const pt=S`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var O=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let y=class extends E{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,f`<slot class=${ct(e)}></slot>`}};y.styles=[b,pt];O([l()],y.prototype,"variant",void 0);O([l()],y.prototype,"color",void 0);O([l()],y.prototype,"align",void 0);O([l()],y.prototype,"lineClamp",void 0);y=O([$("wui-text")],y);const vt=S`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var v=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let g=class extends E{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,r=this.size==="lg",o=this.size==="xl",n=r?"12%":"16%",i=r?"xxs":o?"s":"3xl",s=this.background==="gray",c=this.background==="opaque",u=this.backgroundColor==="accent-100"&&c||this.backgroundColor==="success-100"&&c||this.backgroundColor==="error-100"&&c||this.backgroundColor==="inverse-100"&&c;let h=`var(--wui-color-${this.backgroundColor})`;return u?h=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(h=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${h};
       --local-bg-mix: ${u||s?"100%":n};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,f` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};g.styles=[b,K,vt];v([l()],g.prototype,"size",void 0);v([l()],g.prototype,"backgroundColor",void 0);v([l()],g.prototype,"iconColor",void 0);v([l()],g.prototype,"iconSize",void 0);v([l()],g.prototype,"background",void 0);v([l({type:Boolean})],g.prototype,"border",void 0);v([l()],g.prototype,"borderColor",void 0);v([l()],g.prototype,"icon",void 0);g=v([$("wui-icon-box")],g);const wt=S`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var L=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let x=class extends E{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,f`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};x.styles=[b,H,wt];L([l()],x.prototype,"src",void 0);L([l()],x.prototype,"alt",void 0);L([l()],x.prototype,"size",void 0);x=L([$("wui-image")],x);const ft=S`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var z=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let R=class extends E{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return f`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};R.styles=[b,ft];z([l()],R.prototype,"variant",void 0);z([l()],R.prototype,"size",void 0);R=z([$("wui-tag")],R);const mt=S`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var k=function(t,e,r,o){var n=arguments.length,i=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,r):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(i=(n<3?s(i):n>3?s(e,r,i):s(e,r))||i);return n>3&&i&&Object.defineProperty(e,r,i),i};let P=class extends E{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,f`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};P.styles=[b,mt];k([l()],P.prototype,"color",void 0);k([l()],P.prototype,"size",void 0);P=k([$("wui-loading-spinner")],P);export{w as U,ct as a,$ as c,U as e,it as f,l as n,Et as o,bt as r};
