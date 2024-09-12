"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[534],{11534:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(40366),o=n.n(r),a=n(47960),l=n(60346),i=n(23218);function u(){return(0,i.f2)((function(e){return{"panel-components":{display:"flex",flexDirection:"column",rowGap:"16px",justifyContent:"space-between",padding:"16px 16px 20px 24px",width:"100%",height:"100%",overflowX:"auto"},"panel-components-list-item":{display:"flex",justifyContent:"space-between",height:"32px",lineHeight:"32px",fontFamily:"PingFangSC-Regular",color:"#A6B5CC",fontSize:"14px",minWidth:"245px"},error:{color:e.tokens.colors.error2},info:{color:e.tokens.colors.brand3},warn:{color:e.tokens.colors.warn2}}}))()}var s=n(83802);function c(){return(0,i.f2)((function(e){return{"status-ok":{width:"64px",height:"32px",lineHeight:"32px",paddingLeft:"10px",fontFamily:"PingFangSC-Regular",color:"#1FCC4D",fontSize:"14px",background:"rgba(31,204,77,0.10)",borderRadius:"6px",marginRight:"22px"},"status-fatal":{width:"86px",height:"32px",lineHeight:"32px",paddingLeft:"10px",fontFamily:"PingFangSC-Regular",color:"#F75660",fontSize:"14px",background:"rgba(247,86,96,0.10)",borderRadius:"6px"},"status-warn":{width:"86px",height:"32px",lineHeight:"32px",paddingLeft:"10px",fontFamily:"PingFangSC-Regular",color:"#FF8D26",fontSize:"14px",background:"rgba(255,141,38,0.10)",borderRadius:"6px"},error:{color:e.tokens.colors.error2},info:{color:e.tokens.colors.brand3},warn:{color:e.tokens.colors.warn2}}}))()}function f(){var e=c().classes;return o().createElement("div",{className:e["status-ok"]},o().createElement(s.Sy,{style:{fontSize:"16px",marginRight:"6px"}}),"OK")}function p(){var e=c().classes;return o().createElement("div",{className:e["status-fatal"]},o().createElement(s.hG,{style:{fontSize:"16px",marginRight:"6px"}}),"FATAL")}function m(){var e=c().classes;return o().createElement("div",{className:e["status-warn"]},o().createElement(s.He,{style:{fontSize:"16px",marginRight:"6px"}}),"WARN")}function d(){var e=c().classes;return o().createElement("div",{className:e["status-fatal"]},o().createElement(s.hG,{style:{fontSize:"16px",marginRight:"6px"}}),"ERROR")}var g=function(e){return e.UNKNOWN="UNKNOWN",e.OK="OK",e.WARN="WARN",e.FATAL="FATAL",e.ERROR="ERROR",e}({});function y(e){var t=u().classes,n=(0,r.useMemo)((function(){switch(e.status){case g.OK:return o().createElement(f,null);case g.FATAL:return o().createElement(p,null);case g.WARN:return o().createElement(m,null);case g.ERROR:return o().createElement(d,null);default:return null}}),[e.status]);return o().createElement("div",{className:t["panel-components-list-item"]},o().createElement("span",null,e.name),n)}var b=n(46533),v=n(83517),h=n(36140),x=n(27878);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function E(){var e,t,n=(0,v.d)(),l=n.initSubscription,i=(n.logger,n.setKeyDownHandlers,u().classes),s=(e=(0,r.useState)(),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,l,i=[],u=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=s[0],f=s[1];(0,a.Bd)("panels").t,(0,r.useEffect)((function(){l(function(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=S(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==S(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},b.lt.HMI_STATUS,{consumer:function(e){f(e)}}))}),[]);var p=(0,r.useMemo)((function(){var e;return null!=c&&c.monitoredComponents?null===(e=Array.from(Object.keys(null==c?void 0:c.monitoredComponents)))||void 0===e||null===(e=e.sort())||void 0===e?void 0:e.map((function(e){var t;return o().createElement(y,{key:e,name:e,status:null==c||null===(t=c.monitoredComponents)||void 0===t||null===(t=t[e])||void 0===t?void 0:t.status})})):null}),[c]);return o().createElement(x.A,{className:i["panel-components"]},p)}function A(e){var t=(0,a.Bd)("panels").t,n=(0,r.useMemo)((function(){return(0,l.A)({PanelComponent:E,panelId:e.panelId,subscribeInfo:[{name:b.lt.HMI_STATUS,needChannel:!1}],placeHolder:o().createElement(h.A,{text:t("connectionError")})})}),[]);return o().createElement(n,e)}E.displayName="Components";const w=o().memo(A)}}]);