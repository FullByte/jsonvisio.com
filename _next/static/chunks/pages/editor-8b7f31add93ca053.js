(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{545:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return t(5917)}])},1639:function(n,e,t){"use strict";t.d(e,{z:function(){return h}});var r,o=t(5893),i=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){var n=u(["\n  display: block;\n  background: ",";\n  color: ",";\n  padding: 8px 16px;\n  min-width: 60px;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return s=function(){return n},n}function l(){var n=u(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return l=function(){return n},n}!function(n){n.PRIMARY="SILVER_DARK",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=i.ZP.button.withConfig({componentId:"sc-336efd2d-0"})(s(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)}),(function(n){return n.theme.FULL_WHITE})),d=i.ZP.div.withConfig({componentId:"sc-336efd2d-1"})(l()),h=function(n){var e=n.children,t=n.status,r=a(n,["children","status"]);return(0,o.jsx)(f,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY"},r,{children:(0,o.jsx)(d,{children:e})}))}},1676:function(n,e,t){"use strict";t.d(e,{h:function(){return f},a:function(){return d}});var r=t(4931);function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function i(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](n):n instanceof e}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,a=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(n,e)||s(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||s(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,e){if(n){if("string"===typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}}var l=function(n){try{"object"!==typeof n&&(n=JSON.parse(n)),Array.isArray(n)||(n=[n]);var e=function(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(t=0,function(){return String(++t)});return n?[n].flat().map((function(n){var t=i(n,Object);return{id:r(),text:t?Object.fromEntries(Object.entries(n).filter((function(n){var e=a(n,2),t=(e[0],e[1]);return!Array.isArray(t)&&!i(t,Object)}))):n.toString(),parent:!1,children:Object.entries(n).filter((function(n){var e=a(n,2),t=(e[0],e[1]);return Array.isArray(t)||"object"===typeof t})).flatMap((function(n){var t=a(n,2),o=t[0],i=t[1];return[{id:r(),text:o,parent:!0,children:e(i,r)}]}))}})):[]},t=function(n){return n.flatMap((function(n){var e=n.id,r=n.children,o=void 0===r?[]:r;return u(o.map((function(n){var t=n.id;return{id:"e".concat(t,"-").concat(e),from:t,to:e}}))).concat(u(t(o)))}))},o=function(n){return n.flatMap((function(n){var e=n.children;return[c(n,["children"])].concat(u(o(e)))}))},s=e(n);return u(o(s)).concat(u(t(s)))}catch(l){return r.ZP.error("An error occured while parsing JSON data!"),[]}};function f(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];n=JSON.parse(n);for(var t=l(n),r=[],o=[],i=0;i<t.length;i++){var c=t[i];if(p(c)){var a=h(c.text),u=a.split("\n"),s=u.map((function(n){return n.length})).sort((function(n,e){return n-e})),f=s.reverse()[0];r.push({id:c.id,text:c.text,data:{isParent:c.parent},width:e?35+8*f:180,height:30+10*u.length})}else o.push(c)}return{nodes:r,edges:o}}function d(n){switch(n){case"LEFT":return"UP";case"UP":return"RIGHT";case"RIGHT":return"DOWN";default:return"LEFT"}}function h(n){if(r=n,null!=(o=Object)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](r):r instanceof o){var e="",t=Object.entries(n);return Object.keys(n).every((function(n){return!isNaN(+n)}))?Object.values(n).join(""):(t.forEach((function(n){e+="".concat(n[0],": ").concat(n[1],"\n")})),e)}var r,o;return n}function p(n){return"text"in n}},6827:function(n,e,t){"use strict";t.d(e,{oS:function(){return d},Zn:function(){return u},ZR:function(){return f}});var r=t(5893),o=t(7294),i=t(5623);function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,a=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u={json:JSON.stringify({Author:"J. K. Rowling",Genre:"Fantasy",Characters:["Hermione Granger","Harry Potter","Lord Voldemort","MORE"],Books:[{title:"Philosopher's Stone",date:"1997"},{title:"Chamber of Secrets",date:"1998"},{title:"Prisoner of Azkaban",date:"1999"},{title:"Goblet of Fire",date:"1999"},{title:"Order of the Phoenix",date:"2003"},{title:"Half-Blood Prince",date:"2005"},{title:"Deathly Hallows",date:"2007"}]}),settings:{layout:"LEFT",expand:!0,autoformat:!0,hideEditor:!1,searchNode:""}},s={states:u,dispatch:function(){}},l=o.createContext(s),f=function(){return o.useContext(l)},d=function(n){var e=n.children,t=a(o.useReducer(i.N,u),2),c={states:t[0],dispatch:t[1]};return(0,r.jsx)(l.Provider,{value:c,children:e})}},5917:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return zn}});var r=t(5893),o=t(7294),i=t(9527),c=t(5152),a=t(2125),u=t(6126),s=t(8687),l=t(1676);function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=f(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return d=function(){return n},n}function h(){var n=f(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  color: ",";\n"]);return h=function(){return n},n}function p(){var n=f(["\n  pointer-events: none;\n\n  &.searched {\n    border: 1px solid ",";\n  }\n"]);return p=function(){return n},n}function b(){var n=f(["\n  color: ",";\n"]);return b=function(){return n},n}function y(){var n=f(["\n  height: fit-content;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return y=function(){return n},n}var g=a.ZP.div.withConfig({componentId:"sc-eb1ee5db-0"})(d()),m=a.ZP.pre.withConfig({componentId:"sc-eb1ee5db-1"})(h(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.SILVER})),v=a.ZP.foreignObject.withConfig({componentId:"sc-eb1ee5db-2"})(p(),(function(n){return n.theme.SEAGREEN})),O=a.ZP.span.withConfig({componentId:"sc-eb1ee5db-3"})(b(),(function(n){var e=n.theme,t=n.objectKey;return n.parent?e.ORANGE:t?e.BLURPLE:e.LIGHTGREEN})),x=a.ZP.div.withConfig({componentId:"sc-eb1ee5db-4"})(y(),(function(n){var e=n.width;return"".concat(e-20,"px")})),j=function(n){var e=n.width,t=n.height,o=n.value,i=n.x,c=n.y;return(0,r.jsx)(v,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(g,{children:(0,r.jsx)(m,{width:e,height:t,children:o.map((function(n,t){return n[1]&&(0,r.jsxs)(x,{width:e,children:[(0,r.jsxs)(O,{"data-x":i,"data-y":c,"data-key":n[1],objectKey:!0,children:[n[0],":"," "]}),n[1]]},t)}))})})})},w=function(n){var e=n.width,t=n.height,o=n.value,i=n.isParent,c=void 0!==i&&i,a=n.x,u=n.y;return(0,r.jsx)(v,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(g,{children:(0,r.jsx)(m,{width:e,height:t,children:(0,r.jsx)(O,{"data-x":a,"data-y":u,"data-key":o,parent:c,children:o})})})})};function E(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var S={fill:"transparent",stroke:"transparent",strokeWidth:0},P={fill:"black"},I=function(n){var e=n.properties;return(0,r.jsx)(s.Node,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){E(n,e,t[e])}))}return n}({},n,{label:(0,r.jsx)(s.Label,{style:S}),port:(0,r.jsx)(s.Port,{style:P,rx:10,ry:10}),children:function(n){var t,o,i=n.width,c=n.height;if(t=e.text,null!=(o=Object)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](t):t instanceof o){var a=Object.entries(e.text);return(0,r.jsx)(j,{x:n.x,y:n.y,width:i,height:c,value:a})}return(0,r.jsx)(w,{isParent:e.data.isParent,width:i,height:c,value:e.text,x:n.x,y:n.y})}}))},A=t(6827),C=t(4931),_=t(8193),T=t(5434),N=t(155),R=t(5623);function z(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function G(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,a=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return z(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return z(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function L(){var n=k(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  padding: 4px 6px;\n"]);return L=function(){return n},n}function Z(){var n=k(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return Z=function(){return n},n}function M(){var n=k(["\n  display: grid;\n  background: none;\n  color: inherit;\n  padding: 0;\n  min-height: unset;\n"]);return M=function(){return n},n}var D=a.ZP.div.withConfig({componentId:"sc-cd270ca0-0"})(L(),(function(n){return n.theme.BACKGROUND_TERTIARY})),U=a.ZP.input.withConfig({componentId:"sc-cd270ca0-1"})(Z(),(function(n){return n.theme.TEXT_NORMAL})),H=a.ZP.button.withConfig({componentId:"sc-cd270ca0-2"})(M()),F=function(){var n=(0,A.ZR)().dispatch,e=G(o.useState(""),2),t=e[0],i=e[1];o.useEffect((function(){var e=setTimeout((function(){n({type:R.n.SET_SEARCH_NODE,payload:t})}),1500);return function(){return clearTimeout(e)}}),[t,n]);return(0,r.jsxs)(D,{children:[(0,r.jsx)(U,{type:"text",value:t,onChange:function(n){return i(n.target.value)},placeholder:"Search Node"}),(0,r.jsx)(H,{onClick:function(){i("")},children:t?(0,r.jsx)(N.Lp2,{size:18}):(0,r.jsx)(_.RB5,{size:18})})]})};function B(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function J(){var n=B(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  border-bottom: 1px solid #1f2124;\n  background: ",";\n  color: ",";\n"]);return J=function(){return n},n}function K(){var n=B(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return K=function(){return n},n}var V=a.ZP.div.withConfig({componentId:"sc-9789fc64-0"})(J(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER})),Y=a.ZP.button.withConfig({componentId:"sc-9789fc64-1"})(K(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),W=function(){var n=(0,A.ZR)(),e=n.states,t=n.dispatch;return(0,r.jsxs)(V,{children:[(0,r.jsx)(Y,{onClick:function(){return t({type:R.n.TOGGLE_DOCK})},children:(0,r.jsx)(_.vju,{})}),(0,r.jsx)(F,{}),(0,r.jsx)(Y,{onClick:function(){localStorage.setItem("json",e.json),C.ZP.success("Saved JSON successfully!")},children:(0,r.jsx)(_.JMf,{})}),(0,r.jsx)(Y,{children:(0,r.jsx)(T.XIv,{onClick:function(){return t({type:R.n.CENTER_VIEW})}})}),(0,r.jsx)(Y,{onClick:function(){return t({type:R.n.ZOOM_OUT})},children:(0,r.jsx)(_.ywL,{})}),(0,r.jsx)(Y,{onClick:function(){return t({type:R.n.ZOOM_IN})},children:(0,r.jsx)(_.Lfi,{})})]})};function X(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function $(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],c=!0,a=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);c=!0);}catch(u){a=!0,o=u}finally{try{c||null==t.return||t.return()}finally{if(a)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return X(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return X(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Q(){var n=q(["\n  position: relative;\n"]);return Q=function(){return n},n}function nn(){var n=q(["\n  position: absolute;\n"]);return nn=function(){return n},n}function en(){var n=q(["\n  position: fixed;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 8px;\n  bottom: 8px;\n  right: 8px;\n  opacity: 0.9;\n\n  button:hover {\n    opacity: 0.7;\n  }\n"]);return en=function(){return n},n}var tn=a.ZP.div.withConfig({componentId:"sc-a7fd50ff-0"})(Q()),rn=a.ZP.div.withConfig({componentId:"sc-a7fd50ff-1"})(nn()),on=(a.ZP.div.withConfig({componentId:"sc-a7fd50ff-2"})(en()),{step:.4}),cn=o.memo((function(){var n=(0,A.ZR)(),e=n.states,t=e.json,i=e.settings,c=n.dispatch,a=function(){var n=(0,o.useState)(!1),e=n[0],t=n[1];return(0,o.useEffect)((function(){return t(!0)}),[]),e}(),f=o.useRef(null),d=$(o.useState({nodes:[],edges:[]}),2),h=d[0],p=d[1];o.useEffect((function(){var n=(0,l.h)(t,i.expand),e=n.nodes,r=n.edges;p({nodes:e,edges:r})}),[t,i.expand]),o.useEffect((function(){var n,e,t=null===(n=f.current)||void 0===n?void 0:n.instance.wrapperComponent,r=document.querySelector("span[data-key*='".concat(i.searchNode,"' i]"));if(null===(e=document.querySelector("foreignObject.searched"))||void 0===e||e.classList.remove("searched"),t&&r&&r.parentElement){var o,c,a,u=Number(r.getAttribute("data-x")),s=Number(r.getAttribute("data-y")),l=1*(t.offsetLeft-u)+r.getBoundingClientRect().width,d=1*(t.offsetTop-s)+r.getBoundingClientRect().height;null===(c=null===(o=r.parentElement.parentElement)||void 0===o?void 0:o.closest("foreignObject"))||void 0===c||c.classList.toggle("searched"),null===(a=f.current)||void 0===a||a.setTransform(l,d,1)}}),[i.searchNode]);return a?(0,r.jsxs)(tn,{children:[(0,r.jsx)(W,{}),(0,r.jsx)(rn,{children:(0,r.jsx)(u.d$,{maxScale:1.8,minScale:.4,initialScale:.8,ref:f,limitToBounds:!1,wheel:on,onInit:function(n){return c({type:R.n.SET_ZOOM_PAN_PICNH_REF,payload:n})},children:(0,r.jsx)(u.Uv,{children:(0,r.jsx)(s.Canvas,{nodes:h.nodes,node:I,edges:h.edges,maxWidth:2e4,maxHeight:2e4,center:!1,zoomable:!1,fit:!0,direction:i.layout,readonly:!0,onCanvasClick:function(){var n=document.querySelector("input:focus");n&&n.blur()}},i.layout)})})})]}):null}));function an(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function un(){var n=an(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 10;\n"]);return un=function(){return n},n}function sn(){var n=an(["\n  font-weight: 700;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return sn=function(){return n},n}function ln(){var n=an(["\n  color: #faa81a;\n"]);return ln=function(){return n},n}function fn(){var n=an(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return fn=function(){return n},n}var dn=a.ZP.div.withConfig({componentId:"sc-ccf04899-0"})(un(),(function(n){return n.theme.BLACK_DARK})),hn=a.ZP.h2.withConfig({componentId:"sc-ccf04899-1"})(sn()),pn=a.ZP.span.withConfig({componentId:"sc-ccf04899-2"})(ln()),bn=a.ZP.div.withConfig({componentId:"sc-ccf04899-3"})(fn()),yn=function(n){var e=n.message;return(0,r.jsxs)(dn,{children:[(0,r.jsxs)(hn,{children:[(0,r.jsx)(pn,{children:"JSON"})," Visio"]}),(0,r.jsx)(bn,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})},gn=t(1163),mn=t(1639);function vn(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 700;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return vn=function(){return t},t}var On=a.ZP.div.withConfig({componentId:"sc-c29e823a-0"})(vn(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),xn=function(){var n=(0,gn.useRouter)();return(0,r.jsxs)(On,{children:["This app is not compatible with your device!",(0,r.jsx)(mn.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},jn=t(5884);function wn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function En(){var n=wn(["\n  display: flex;\n  height: 100vh;\n"]);return En=function(){return n},n}function Sn(){var n=wn(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return Sn=function(){return n},n}function Pn(){var n=wn(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n\n  .Resizer {\n    background: ",";\n    box-sizing: border-box;\n    background-clip: padding-box;\n    z-index: 1;\n  }\n\n  .Resizer.disabled {\n    pointer-events: none;\n  }\n\n  .Resizer:hover {\n    transition: all 2s ease;\n  }\n\n  .Resizer.horizontal {\n    height: 11px;\n    margin: -5px 0;\n    border-top: 5px solid rgba(255, 255, 255, 0);\n    border-bottom: 5px solid rgba(255, 255, 255, 0);\n    cursor: row-resize;\n    width: 100%;\n  }\n\n  .Resizer.horizontal:hover {\n    border-top: 5px solid rgba(0, 0, 0, 0);\n    border-bottom: 5px solid rgba(0, 0, 0, 0);\n  }\n\n  .Resizer.vertical {\n    width: 16px;\n    margin: 0 -5px;\n    border-left: 5px solid rgba(255, 255, 255, 0);\n    border-right: 5px solid rgba(255, 255, 255, 0);\n    cursor: col-resize;\n    z-index: 0 !important;\n  }\n\n  .Resizer.vertical:hover {\n    border-left: 5px solid rgba(0, 0, 0, 0);\n    border-right: 5px solid rgba(0, 0, 0, 0);\n  }\n\n  .Resizer.disabled {\n    cursor: not-allowed;\n  }\n\n  .Resizer.disabled:hover {\n    border-color: transparent;\n  }\n"]);return Pn=function(){return n},n}var In=a.ZP.div.withConfig({componentId:"sc-5595dd49-0"})(En()),An=a.ZP.div.withConfig({componentId:"sc-5595dd49-1"})(Sn()),Cn=(0,a.ZP)(jn.Z).withConfig({componentId:"sc-5595dd49-2"})(Pn(),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BLACK}));function _n(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Tn=(0,c.default)((function(){return Promise.all([t.e(774),t.e(281),t.e(581),t.e(369)]).then(t.bind(t,5369))}),{loadableGenerated:{webpack:function(){return[5369]}},ssr:!1,loading:function(){return(0,r.jsx)(yn,{message:"Loading Editor..."})}}),Nn=(0,c.default)((function(){return Promise.all([t.e(445),t.e(955),t.e(610)]).then(t.bind(t,3610))}),{loadableGenerated:{webpack:function(){return[3610]}},ssr:!1,loading:function(){return(0,r.jsx)(yn,{message:"Loading Sidebar..."})}}),Rn=function(){var n=(0,A.ZR)(),e=n.states.settings,t=n.dispatch;return o.useEffect((function(){var n=localStorage.getItem("json");n&&t({type:R.n.SET_JSON,payload:n});var e=localStorage.getItem("config");e&&t({type:R.n.SET_CONFIG,payload:JSON.parse(e)})}),[t]),o.useEffect((function(){localStorage.setItem("config",JSON.stringify(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){_n(n,e,t[e])}))}return n}({},e,{zoomPanPinch:void 0})))}),[e]),(0,r.jsxs)(In,{children:[(0,r.jsx)(Nn,{}),(0,r.jsx)(An,{children:(0,r.jsxs)(Cn,{maxSize:800,minSize:300,defaultSize:450,split:"vertical",size:e.hideEditor?0:450,allowResize:!e.hideEditor,children:[(0,r.jsx)(Tn,{}),(0,r.jsx)(cn,{})]})}),(0,r.jsx)(xn,{})]})},zn=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Editor | JSON Visio"})}),(0,r.jsx)(A.oS,{children:(0,r.jsx)(Rn,{})})]})}},5623:function(n,e,t){"use strict";t.d(e,{n:function(){return r},N:function(){return u}});t(7294);var r,o=t(1676),i=t(6827);function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}!function(n){n[n.SET_CONFIG=0]="SET_CONFIG",n[n.TOGGLE_LAYOUT=1]="TOGGLE_LAYOUT",n[n.TOGGLE_EXPAND=2]="TOGGLE_EXPAND",n[n.TOGGLE_AUTOFORMAT=3]="TOGGLE_AUTOFORMAT",n[n.TOGGLE_DOCK=4]="TOGGLE_DOCK",n[n.ZOOM_IN=5]="ZOOM_IN",n[n.ZOOM_OUT=6]="ZOOM_OUT",n[n.CENTER_VIEW=7]="CENTER_VIEW",n[n.SET_JSON=8]="SET_JSON",n[n.SET_SEARCH_NODE=9]="SET_SEARCH_NODE",n[n.SET_ZOOM_PAN_PICNH_REF=10]="SET_ZOOM_PAN_PICNH_REF"}(r||(r={}));var u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.Zn,e=arguments.length>1?arguments[1]:void 0;if(!n.settings.zoomPanPinch)return n;switch(e.type){case r.SET_CONFIG:return a({},n,{settings:e.payload});case r.SET_ZOOM_PAN_PICNH_REF:return a({},n,{settings:a({},n.settings,{zoomPanPinch:e.payload})});case r.SET_SEARCH_NODE:return a({},n,{settings:a({},n.settings,{searchNode:e.payload})});case r.CENTER_VIEW:return n.settings.zoomPanPinch.resetTransform(),n;case r.ZOOM_IN:return n.settings.zoomPanPinch.setTransform(n.settings.zoomPanPinch.state.positionX,n.settings.zoomPanPinch.state.positionY,n.settings.zoomPanPinch.state.scale+.2),n;case r.ZOOM_OUT:return n.settings.zoomPanPinch.setTransform(n.settings.zoomPanPinch.state.positionX,n.settings.zoomPanPinch.state.positionY,n.settings.zoomPanPinch.state.scale-.2),n;case r.TOGGLE_AUTOFORMAT:return a({},n,{settings:a({},n.settings,{autoformat:!n.settings.autoformat})});case r.TOGGLE_DOCK:return a({},n,{settings:a({},n.settings,{hideEditor:!n.settings.hideEditor})});case r.TOGGLE_EXPAND:return a({},n,{settings:a({},n.settings,{expand:!n.settings.expand})});case r.TOGGLE_LAYOUT:return a({},n,{settings:a({},n.settings,{layout:(0,o.a)(n.settings.layout)})});case r.SET_JSON:return a({},n,{json:e.payload});default:return n}}}},function(n){n.O(0,[617,228,260,319,987,560,774,888,179],(function(){return e=545,n(n.s=e);var e}));var e=n.O();_N_E=e}]);