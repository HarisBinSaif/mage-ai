"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3887],{54626:function(t,n,e){e.d(n,{ZP:function(){return M}});var r=e(82394),o=e(77837),u=e(12757),c=e(38860),i=e.n(c),a=(e(83455),e(96040)),s=e(55056),l=e.n(s),d=e(59e3),f=e(554);function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v="GET",y="POST";function g(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.body,o=(n.ctx,n.method),c=void 0===o?v:o,i=n.query,a=void 0===i?{}:i,s=(n.token,{"Content-Type":"application/json"}),l={method:c};if(e){var p=e.file;if(p){p.name,p.size,p.type;var y=new FormData,g=Object.keys(e).filter((function(t){return"file"!==t}))[0];y.set("json_root_body",JSON.stringify((0,r.Z)({api_key:f.env.NEXT_PUBLIC_API_KEY},g,e[g]))),y.append("file",p),l.body=y,delete s["Content-Type"]}else l.body=JSON.stringify(h(h({},e),{},{api_key:f.env.NEXT_PUBLIC_API_KEY}))}l.headers=new Headers(s);var m=h(h({},(0,d.iV)(t)),a);f.env.NEXT_PUBLIC_API_KEY&&(m.api_key=f.env.NEXT_PUBLIC_API_KEY);var b=Object.entries(m).reduce((function(t,n){var e=(0,u.Z)(n,2),r=e[0],o=e[1];return t.concat("".concat(r,"=").concat(o))}),[]).join("&");return{data:l,headers:s,method:c,queryString:b,url:t.split("?")[0]}}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=g(t,n),r=e.data,o=e.queryString,u=e.url,c=o?"".concat(u,"?").concat(o):u;return fetch(c,r)}function b(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=g(t,n),r=e.data,o=e.headers,u=e.method,c=e.queryString,i=e.url,a=c?"".concat(i,"?").concat(c):i;return l().request({data:r.body,headers:o,method:u,onUploadProgress:null===n||void 0===n?void 0:n.onUploadProgress,url:a})}function O(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m(t,n).then((function(t){return t.json()}))}function w(){var t,n="localhost",e="/CLOUD_NOTEBOOK_BASE_PATH_PLACEHOLDER_",r=n,o="http://",u="";(r=window.location.hostname)===n?r="".concat(r,":").concat(5789):(o="https://",null!==(t=window.location.protocol)&&void 0!==t&&t.match(/https/)||(o="http://"),window.location.port&&(r="".concat(r,":").concat(window.location.port)));return e.includes("CLOUD_NOTEBOOK_BASE_PATH_PLACEHOLDER")||(u=e),"".concat(o).concat(r).concat(u)}function P(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u="".concat(w(),"/").concat(t);return n&&(u="".concat(u,"/").concat(n)),e&&(u="".concat(u,"/").concat(e)),r&&(u="".concat(u,"/").concat(r)),Object.values(o).length>=1&&(u="".concat(u,"?").concat((0,d.uM)(o))),u}function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?j(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function _(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return b(P(t),x(x({},e),{},{body:n,method:y}))}function E(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=P(n,e,t);return b(u,x(x({},o),{},{body:r,method:y}))}function Z(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return m(P(n,e),{ctx:t,query:r,method:v})}function k(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return m(P(n),{ctx:t,query:e,method:v})}function C(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return m(P(e,r,n),{ctx:t,query:o,method:v})}function A(t,n,e){return m(P(t,n),{body:e,method:"PUT"})}function D(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(0,a.ZP)(n?P(t,n):null,(function(t){return O(t,{method:v,query:e})}),r),u=o.data,c=o.error,i=o.mutate;return{data:u,error:c,mutate:i}}function S(t,n){return m(P(t,n),{method:"DELETE"})}function I(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,a.ZP)(P(t,null,null,null,n),(function(t){return O(t)}),e),o=r.data,u=r.error,c=r.mutate;return{data:o,error:u,loading:!o&&!u,mutate:c}}function L(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=(0,a.ZP)(e?P(n,e,t,null,r):null,(function(t){return O(t)}),o),c=u.data,i=u.error,s=u.mutate;return{data:c,error:i,loading:!c&&!i,mutate:s}}function T(t,n,e,r){return m(P(n,e),{ctx:t,body:r,method:"PUT"})}var N=e(96510);function U(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function q(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?U(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):U(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var H="feature_sets",B="kernels",K={};[["columns",H],["downloads",H],[H],[B],["interrupt",B],["restart",B],["pipelines"],["status"],["versions",H]].forEach((function(t){var n=(0,u.Z)(t,3),e=n[0],r=n[1],c=n[2];K[e]||(K[e]={deleteAsync:function(){var t=(0,o.Z)(i().mark((function t(n){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e,n);case 2:return r=t.sent,t.next=5,(0,N.pr)(r);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),detail:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;return D(e,t,n,q(q({},c),r))},detailAsync:function(){var t=(0,o.Z)(i().mark((function t(n,r){var o,u,c=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=c.length>2&&void 0!==c[2]?c[2]:{},t.next=3,Z(n,e,r,o);case 3:return u=t.sent,t.next=6,(0,N.pr)(u);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),updateAsync:function(){var t=(0,o.Z)(i().mark((function t(n,r,o){var u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(n,e,r,o);case 2:return u=t.sent,t.next=5,(0,N.pr)(u);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),useUpdate:function(t){return function(){var n=(0,o.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",A(e,t,r));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}),r?(K[e][r]={},K[e][r].useCreate=function(t,n){return function(){var u=(0,o.Z)(i().mark((function o(u){return i().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",E(e,r,t,u,n));case 1:case"end":return o.stop()}}),o)})));return function(t){return u.apply(this,arguments)}}()},K[e][r].useCreateWithParentIdLater=function(t){return function(){var n=(0,o.Z)(i().mark((function n(o){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",E(e,r,o.parentId,o.body,t));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},K[e][r].listAsync=function(){var t=(0,o.Z)(i().mark((function t(n,o){var u,c,a=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=a.length>2&&void 0!==a[2]?a[2]:{},t.next=3,C(n,e,r,o,u);case 3:return c=t.sent,t.next=6,(0,N.pr)(c);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),K[e][r].list=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;return L(e,r,t,n,q(q({},c),o))},K[e][r].detail=function(t,n,o,u){return function(t,n,e,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},c=(0,a.ZP)(n&&r?P(e,r,t,n,o):null,(function(t){return O(t,{method:v,query:o})}),u),i=c.data,s=c.error,l=c.mutate;return{data:i,error:s,mutate:l}}(e,n,r,t,o,q(q({},c),u))}):(K[e].create=function(){var t=(0,o.Z)(i().mark((function t(n,r){var o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e,n,r);case 2:return o=t.sent,t.next=5,(0,N.pr)(o);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),K[e].useCreate=function(t){return function(){var n=(0,o.Z)(i().mark((function n(r){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",_(e,r,t));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},K[e].listAsync=function(){var t=(0,o.Z)(i().mark((function t(n){var r,o,u=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},t.next=3,k(n,e,r);case 3:return o=t.sent,t.next=6,(0,N.pr)(o);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),K[e].list=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return I(e,t,q(q({},c),n))})}));var M=K},28857:function(t,n,e){e(82684);var r=e(46313),o=e(36283),u=e(49125),c=e(31969),i=e(86673),a=e(57384),s=e(28598),l=r.default.div.withConfig({displayName:"Layout__WrapperStyle",componentId:"sc-1h0hd4m-0"})(["background-color:",";"," "," ",""],c.Z.monotone.white,(function(t){return t.includeMargins&&"\n    margin: ".concat(4*u.iI,"px;\n    margin-top: 0;\n  ")}),(function(t){return t.minHeight&&"\n    min-height: ".concat(t.minHeight,";\n  ")}),(function(t){return!t.minHeight&&"\n    min-height: 100vh;\n  "})),d=r.default.div.withConfig({displayName:"Layout__LayoutContainerStyle",componentId:"sc-1h0hd4m-1"})(["display:flex;justify-content:space-between;width:100%;"]),f=r.default.main.withConfig({displayName:"Layout__MainStyle",componentId:"sc-1h0hd4m-2"})(["flex-grow:1;"]),p=r.default.div.withConfig({displayName:"Layout__MainContentStyle",componentId:"sc-1h0hd4m-3"})(["position:relative;"," "," "," "," ",""],(function(t){return t.fullWidth&&"\n    width: 100%;\n  "}),(function(t){return!t.fullWidth&&"\n    max-width: ".concat(o.ow,"px;\n  ")}),(function(t){return t.headerPadding&&"\n    margin-top: ".concat(2*u.iI,"px;\n  ")}),(function(t){return t.centerAlign&&"\n    margin: 0 auto;\n  "}),(function(t){return t.fluid&&"\n    max-width: 100%;\n  "}));n.Z=function(t){var n,e=t.after,r=t.before,o=t.centerAlign,c=t.children,h=t.fluid,v=t.footer,y=t.fullWidth,g=t.header,m=t.includeMargins,b=t.minHeight,O=t.pageTitle;return(0,s.jsxs)(l,{includeMargins:m,minHeight:b,children:[(0,s.jsx)(a.Z,{title:O}),g,(0,s.jsxs)(d,{children:[r,(0,s.jsx)(f,{role:"main",children:(0,s.jsx)(p,{centerAlign:o,fluid:h,fullWidth:y,headerPadding:g&&!1!==(null===g||void 0===g||null===(n=g.props)||void 0===n?void 0:n.fluid),children:c})}),e&&(0,s.jsx)(i.Z,{ml:u.iI,children:e})]}),v]})}}}]);