(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8662],{62976:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(82394),o=t(77555),i=t(82684),c=t(10919),u=t(12691),l=t.n(u),a=t(34376),d=t.n(a),s=t(46313),p=t(63068),f=t(44628),h=t(6508),m=t(67971),v=t(19711),g=t(23831),b=t(31969),y=function(){var e=document.createElement("div");e.setAttribute("style","width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;"),document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),n},x=t(2005),w=t(31012),j=t(37391),O=t(6753),P=t(49125),k=t(69345),Z=t(24224),_=t(28598);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H=2*P.iI+w.dN,I=20*P.iI,D=s.default.div.withConfig({displayName:"DataTable__Styles",componentId:"sc-1arr863-0"})([""," "," "," .body > div{","}.table{border-spacing:0;display:inline-block;"," "," "," "," .tr{.td.td-index-column{","}}.th{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;","}.th,.td{"," font-family:",";margin:0;","}.td{padding:","px;}&.sticky{overflow:auto;}.header{overflow:hidden;}}"],(function(e){return e.disableScrolling&&"\n    overflow: hidden;\n  "}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,"px;\n  ")}),j.w5,(function(e){return!e.noBorderBottom&&"\n      border-bottom: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderLeft&&"\n      border-left: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderRight&&"\n      border-right: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return!e.noBorderTop&&"\n      border-top: 1px solid ".concat((e.theme.borders||b.Z.borders).medium,";\n    ")}),(function(e){return"\n          color: ".concat((e.theme.content||b.Z.content).default,";\n        ")}),(function(e){return"\n        height: ".concat(e.columnHeaderHeight||H,"px;\n      ")}),w.iD,x.ry,(function(e){return"\n        background-color: ".concat((e.theme.background||b.Z.background).table,";\n        border-bottom: 1px solid ").concat((e.theme.borders||b.Z.borders).medium,";\n        border-right: 1px solid ").concat((e.theme.borders||b.Z.borders).medium,";\n      ")}),1*P.iI);function R(e){var n=e.original,t=8.5*Math.max.apply(Math,(0,o.Z)(n.map((function(e){return(null===e||void 0===e?void 0:e.length)||0})))),r=Math.ceil(t/(I-2*P.iI));return Math.max(r,1)*w.dN+2*P.iI}function B(e){var n=e.columnHeaderHeight,t=e.columns,r=e.data,u=e.disableScrolling,a=e.height,w=e.index,j=e.invalidValues,C=e.maxHeight,D=e.numberOfIndexes,B=e.previewIndexes,E=e.renderColumnHeader,M=e.width,N=(0,i.useContext)(s.ThemeContext),T=(0,i.useRef)(null),A=(0,i.useRef)(null);(0,i.useEffect)((function(){var e=function(e){var n;null===T||void 0===T||null===(n=T.current)||void 0===n||n.scroll(e.target.scrollLeft,0)};return A&&A.current.addEventListener("scroll",e),function(){var n;null===A||void 0===A||null===(n=A.current)||void 0===n||n.removeEventListener("scroll",e)}}),[T,A]);var L=(0,i.useMemo)((function(){return w&&r&&w.length===r.length}),[r,w]),W=(0,i.useMemo)((function(){var e=[];return(0,Z.w6)(D).forEach((function(n,t){var i=8.7*String(null===r||void 0===r?void 0:r.length).length;if(L){var c=w.map((function(e){return D>=2?String(e[t]).length:String(e).length}));i=8.7*Math.max.apply(Math,(0,o.Z)(c))}e.push(i+2*P.iI)})),e}),[r,w,D,L]),V=t.map((function(e){return null===e||void 0===e?void 0:e.Header})).slice(1),z=(0,i.useMemo)((function(){return y()}),[]),F=(0,i.useMemo)((function(){var e=M-(Math.max.apply(Math,(0,o.Z)(W))+1.5*P.iI+z),n=t.length-1,r=I;return r*n<e&&(r=e/n),{width:r}}),[t,W,z,M]),U=(0,f.useTable)({columns:t,data:r,defaultColumn:F},f.useBlockLayout,h.useSticky),q=U.getTableBodyProps,G=U.getTableProps,X=U.headerGroups,J=U.prepareRow,K=U.rows,Y=d().query.slug,$=void 0===Y?[]:Y,Q=new Set((null===B||void 0===B?void 0:B.removedRows)||[]),ee=(0,i.useCallback)((function(e){var n=e.index,t=e.style,r=K[n];J(r);var o=r.original,u=Q.has(n);return(0,_.jsx)("div",S(S({},r.getRowProps({style:S(S({},t),{},{width:"auto"})})),{},{className:"tr",children:r.cells.map((function(e,t){var r,a=t<=D-1,d=e.getCellProps(),s=e.column.id,p=null===j||void 0===j||null===(r=j[s])||void 0===r?void 0:r.includes(n),f=S({},d.style);a&&(f.fontFamily=x.Vp,f.left=0,f.position="sticky",f.textAlign=w?"right":"center",f.width=W[t]);var h,g=o[t-D],y=V.indexOf(s);if(p&&(f.color=b.Z.interactive.dangerBorder),u&&(f.backgroundColor=b.Z.background.danger),Array.isArray(g)||"object"===typeof g)try{g=JSON.stringify(g)}catch(P){g="Error: cannot display value"}return a&&(L?(h=w[n],Array.isArray(h)&&(h=h[t])):h=e.render("Cell")),(0,i.createElement)("div",S(S({},d),{},{className:"td ".concat(a?"td-index-column":""),key:"".concat(t,"-").concat(g),style:f}),h,!a&&(0,_.jsxs)(m.Z,{justifyContent:"space-between",children:[(0,_.jsxs)(v.ZP,{danger:p,default:!0,wordBreak:!0,children:[!0===g&&"true",!1===g&&"false",(null===g||"null"===g)&&"null",!0!==g&&!1!==g&&null!==g&&"null"!==g&&g]}),p&&(0,_.jsx)(l(),{as:(0,k.o_)(O.mW,y),href:"/datasets/[...slug]",passHref:!0,children:(0,_.jsx)(c.Z,{danger:!0,children:"View all"})})]}))}))}))}),[w,j,W,D,J,K,$]),ne=(0,i.useMemo)((function(){var e;return C?(e=(0,Z.Sm)(K.map(R)),e+=n||H):(e=a,e-=n||H),e}),[n,R,a,C,K]);return(0,_.jsx)("div",S(S({},G()),{},{className:"table sticky",style:{width:M},children:(0,_.jsxs)("div",S(S({},q()),{},{className:"body",children:[(0,_.jsx)("div",{className:"header",ref:T,children:X.map((function(e,n){return(0,i.createElement)("div",S(S({},e.getHeaderGroupProps()),{},{className:"tr",key:"".concat(e.id,"_").concat(n)}),e.headers.map((function(e,n){var t,r=n<=D-1,o=e.getHeaderProps(),c=S({},o.style);return r?(c.fontFamily=x.Vp,c.left=0,c.position="sticky",c.textAlign="center",c.width=W[n],c.minWidth=W[n]):E?t=E(e,n-D,{width:F.width}):(t=e.render("Header"),c.color=(N||g.Z).content.default,c.padding=1*P.iI,c.minWidth=F.width),(0,i.createElement)("div",S(S({},o),{},{className:"th",key:e.id,style:c,title:r?"Row number":void 0}),t)})))}))}),(0,_.jsx)(p.S_,{estimatedItemSize:H,height:ne,itemCount:null===K||void 0===K?void 0:K.length,itemSize:function(e){return R(K[e])},outerRef:A,style:{maxHeight:C,pointerEvents:u?"none":null},children:ee})]}))}))}var E=function(e){var n=e.columnHeaderHeight,t=e.columns,o=e.disableScrolling,c=e.height,u=e.index,l=e.invalidValues,a=e.maxHeight,d=e.noBorderBottom,s=e.noBorderLeft,p=e.noBorderRight,f=e.noBorderTop,h=e.previewIndexes,m=e.renderColumnHeader,v=e.rows,g=e.width,b=(0,i.useMemo)((function(){return null!==u&&void 0!==u&&u.length&&Array.isArray(u[0])?u[0].length:1}),[u]),y=(0,i.useMemo)((function(){return(0,Z.w6)(b).map((function(e,n){return{Header:(0,Z.w6)(n+1).map((function(){return" "})).join(" "),accessor:function(e,n){return n},sticky:"left"}})).concat(null===t||void 0===t?void 0:t.map((function(e){return{Header:String(e),accessor:String(e)}})))}),[t,b]);return(0,i.useMemo)((function(){return null===v||void 0===v?void 0:v.map((function(e){return e.reduce((function(e,n,o){return S(S({},e),{},(0,r.Z)({},t[o],n))}),{})}))}),[t,v]),(0,_.jsx)(D,{columnHeaderHeight:n,disableScrolling:o,height:c,maxHeight:a,noBorderBottom:d,noBorderLeft:s,noBorderRight:p,noBorderTop:f,children:(0,_.jsx)(B,{columnHeaderHeight:n,columns:y,data:v,disableScrolling:o,height:c,index:u,invalidValues:l,maxHeight:a,numberOfIndexes:b,previewIndexes:h,renderColumnHeader:m,width:g})})}},27125:function(e,n,t){"use strict";var r=t(82684),o=t(12691),i=t.n(o),c=t(34376),u=t.n(c),l=t(46313),a=t(66050),d=t(60328),s=t(16634),p=t(10919),f=t(86673),h=t(17903),m=t(19711),v=t(10503),g=t(49125),b=t(44162),y=t(24224),x=t(28598);n.Z=function(e){var n=e.blockRuns,t=e.onClickRow,o=e.pipeline,c=e.selectedRun,w=(0,r.useContext)(l.ThemeContext),j=(o||{}).uuid,O=(0,r.useMemo)((function(){return o.blocks||[]}),[o]),P=(0,r.useMemo)((function(){return(0,y.HK)(O,(function(e){return e.uuid}))}),[O]);return(0,x.jsx)(h.Z,{columnFlex:[null,1,3,2,null,null],columns:[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block"},{uuid:"Completed"},{uuid:"Logs"}],isSelectedRow:function(e){return n[e].id===(null===c||void 0===c?void 0:c.id)},onClickRow:t,rows:null===n||void 0===n?void 0:n.map((function(e){var n,t=e.block_uuid,r=e.completed_at,o=e.created_at,c=e.id,l=e.pipeline_schedule_id,h=e.pipeline_schedule_name,y=e.status;return[(0,x.jsx)(m.ZP,{monospace:!0,default:!0,children:o}),(0,x.jsx)(m.ZP,{danger:a.V.FAILED===y,default:a.V.CANCELLED===y,info:a.V.INITIAL===y,monospace:!0,success:a.V.COMPLETED===y,warning:a.V.RUNNING===y,children:y}),(0,x.jsx)(i(),{as:"/pipelines/".concat(j,"/triggers/").concat(l),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,x.jsx)(p.Z,{bold:!0,sameColorAsText:!0,children:h})}),(0,x.jsx)(i(),{as:"/pipelines/".concat(j,"/edit?block_uuid=").concat(t),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,x.jsxs)(p.Z,{bold:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,x.jsx)(s.Z,{color:(0,b.qn)(null===(n=P[t])||void 0===n?void 0:n.type,{theme:w}).accent,size:1.5*g.iI,square:!0}),(0,x.jsx)(f.Z,{mr:1}),(0,x.jsx)(m.ZP,{monospace:!0,children:t})]})}),(0,x.jsx)(m.ZP,{monospace:!0,default:!0,children:r||"-"}),(0,x.jsx)(d.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return u().push("/pipelines/".concat(j,"/logs?block_run_id[]=").concat(c))},children:(0,x.jsx)(v.B4,{default:!0,size:2*g.iI})})]})),uuid:"block-runs"})}},64155:function(e,n,t){"use strict";t.d(n,{Eh:function(){return a},ht:function(){return s},t0:function(){return d}});var r=t(46313),o=t(82386),i=t(32151),c=t(31012),u=t(37391),l=t(49125),a=(l.iI,i.O$+3*l.iI+c.dN),d=r.default.div.withConfig({displayName:"indexstyle__SidekickContainerStyle",componentId:"sc-15ofupc-0"})(["height:calc(100vh - ","px - ","px);width:fit-content;",""],o.uX,u.nn,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "})),s=r.default.div.withConfig({displayName:"indexstyle__PaddingContainerStyle",componentId:"sc-15ofupc-1"})(["padding:","px;",""],2*l.iI,(function(e){return e.noPadding&&"\n    padding: 0;\n  "}))},19395:function(e,n,t){"use strict";t.d(n,{I:function(){return l},e:function(){return a}});var r=t(82394),o=t(92083),i=t.n(o);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,o=n.completed_at,c=n.started_at,l=n.status,a=null;c&&o&&(a=i()(o).valueOf()-i()(c).valueOf());return u(u({},e),{},(0,r.Z)({},t,{runtime:a,status:l}))}),{})}function a(e){if(!e)return null;var n=new Date(i()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}},17903:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),u=t(10919),l=t(19711),a=t(46313),d=t(23831),s=t(49125),p=a.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;"]),f=a.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||d.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),h=(0,a.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||d.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(s.iI/2,"px ").concat(s.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(s.iI,"px ").concat(2*s.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),m=a.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})(["",""],h),v=a.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," ",""],h,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||d.Z.interactive).activeBorder,";\n  ")})),g=t(28598);function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=function(e){var n=e.alignTop,t=e.buildLinkProps,r=e.columnFlex,o=e.columnMaxWidth,a=e.columns,d=void 0===a?[]:a,s=e.compact,h=e.isSelectedRow,b=e.noBorder,x=e.onClickRow,w=e.rows,j=e.uuid,O=(0,c.useMemo)((function(){return r.reduce((function(e,n){return e+(n||0)}),0)}),r),P=(0,c.useCallback)((function(e){if(r[e]){var n=Math.round(r[e]/O*100);return"".concat(n,"%")}return null}),[]),k=(0,c.useMemo)((function(){return null===w||void 0===w?void 0:w.map((function(e,r){var c=null===t||void 0===t?void 0:t(r),l=e.map((function(e,t){return(0,g.jsx)(v,{alignTop:n,compact:s,maxWidth:null===o||void 0===o?void 0:o(t),noBorder:b,selected:null===h||void 0===h?void 0:h(r),width:P(t),children:e},"".concat(j,"-row-").concat(r,"-cell-").concat(t))})),a=(0,g.jsx)(f,{noHover:!(c||x),onClick:x?function(){return x(r)}:null,children:l},"".concat(j,"-row-").concat(r));return c?(0,g.jsx)(i(),y(y({},c),{},{passHref:!0,children:(0,g.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:a})})):a}))}),[n,t,P,o,d,s,h,b,x,w]);return(0,g.jsxs)(p,{children:[(null===d||void 0===d?void 0:d.length)>=1&&(0,g.jsx)(f,{noHover:!0,children:d.map((function(e,n){return(0,g.jsx)(m,{compact:s,noBorder:b,children:(0,g.jsx)(l.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid})},"".concat(j,"-col-").concat(e.uuid,"-").concat(n))}))}),k]})}},23588:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r=t(77837),o=t(82394),i=t(38860),c=t.n(i),u=t(82684),l=t(27125),a=t(38965),d=t(41374),s=t(26304),p=t(62976),f=t(86532),h=t(67971),m=t(87372),v=t(86673),g=t(54283),b=t(19711),y=t(64155),x=t(19395),w=t(28598),j=["blockRuns","columns","height","heightOffset","loadingData","pipeline","renderColumnHeader","rows","selectedRun"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=t(59920);function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function C(e){var n,t=e.pipeline,r=e.pipelineRun,o=(0,u.useState)(),i=o[0],c=o[1],O=t.uuid,Z=d.ZP.pipelines.detail(O).data,C=(0,u.useMemo)((function(){return _(_({},null===Z||void 0===Z?void 0:Z.pipeline),{},{uuid:O})}),[Z,O]),S=d.ZP.pipeline_runs.detail(r.id).data,H=(0,u.useMemo)((function(){return null===S||void 0===S?void 0:S.pipeline_run}),[S]),I=d.ZP.outputs.block_runs.list(null===i||void 0===i?void 0:i.id),D=I.data,R=I.loading,B=(I.mutate,((null===D||void 0===D||null===(n=D.outputs)||void 0===n?void 0:n[0])||{}).sample_data),E=(0,u.useMemo)((function(){return null===H||void 0===H?void 0:H.block_runs}),[H]),M=((null===B||void 0===B?void 0:B.columns)||[]).slice(0,40),N=(null===B||void 0===B?void 0:B.rows)||[],T=(0,u.useMemo)((function(){return(0,w.jsx)(l.Z,{blockRuns:E,onClickRow:function(e){return c((function(n){var t=E[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipeline:C,selectedRun:i})}),[E,C,i]);return(0,w.jsx)(a.Z,{buildSidekick:function(e){return function(e){var n=e.blockRuns,t=e.columns,r=e.height,o=e.heightOffset,i=e.loadingData,c=e.pipeline,l=e.renderColumnHeader,a=e.rows,d=e.selectedRun,O=P({},(0,s.Z)(e,j));O.blockStatus=(0,x.I)(n);var k=(0,u.useMemo)((function(){return(0,w.jsx)(w.Fragment,{children:a&&a.length>0?(0,w.jsx)(p.Z,{columnHeaderHeight:l?y.Eh:0,columns:t,height:r-o-90,noBorderBottom:!0,noBorderLeft:!0,noBorderRight:!0,renderColumnHeader:l,rows:a}):(0,w.jsx)(v.Z,{ml:2,children:(0,w.jsx)(b.ZP,{children:"This block run has no output"})})})}),[t,r,o,l,a]);return(0,w.jsxs)(w.Fragment,{children:[!d&&(0,w.jsx)(f.Z,P(P({},O),{},{height:r,heightOffset:o||0,pipeline:c})),d&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v.Z,{pl:2,py:3,style:{position:"fixed"},children:(0,w.jsx)(m.Z,{level:4,muted:!0,children:"Block Output"})}),(0,w.jsxs)("div",{style:{position:"relative",top:"75px"},children:[i&&(0,w.jsx)(v.Z,{mt:2,children:(0,w.jsx)(h.Z,{alignItems:"center",fullWidth:!0,justifyContent:"center",children:(0,w.jsx)(g.Z,{color:"white",large:!0})})}),!i&&k]})]})]})}(_(_({},e),{},{blockRuns:E,columns:M,loadingData:R,rows:N,selectedRun:i}))},breadcrumbs:[{label:function(){return"Runs"},linkProps:{as:"/pipelines/".concat(O,"/runs"),href:"/pipelines/[pipeline]/runs"}},{label:function(){return null===H||void 0===H?void 0:H.execution_date}}],pageName:k.M.RUNS,pipeline:C,title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(k.M.RUNS,"_").concat(O,"_").concat(null===H||void 0===H?void 0:H.id),children:T})}C.getInitialProps=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,r=t.pipeline,o=t.run,e.abrupt("return",{pipeline:{uuid:r},pipelineRun:{id:o}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var S=C},39525:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs/[run]",function(){return t(23588)}])}},function(e){e.O(0,[5339,2083,6674,1774,3668,2125,2874,3903,8933,8965,5981,2151,6532,9774,2888,179],(function(){return n=39525,e(e.s=n);var n}));var n=e.O();_N_E=n}]);