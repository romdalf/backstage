/*! For license information please see 2aa2f30e.6bf889c6.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[718661],{869076:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=r(474848),t=r(28453);const c={id:"backend-plugin-api.cacheservice.set",title:"CacheService.set()",description:"API reference for CacheService.set()"},i=void 0,a={id:"reference/backend-plugin-api.cacheservice.set",title:"CacheService.set()",description:"API reference for CacheService.set()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.cacheservice.set.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.cacheservice.set",permalink:"/docs/reference/backend-plugin-api.cacheservice.set",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.cacheservice.set.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.cacheservice.set",title:"CacheService.set()",description:"API reference for CacheService.set()"}},d={},o=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api",children:(0,s.jsx)(n.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheservice",children:(0,s.jsx)(n.code,{children:"CacheService"})})," > ",(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheservice.set",children:(0,s.jsx)(n.code,{children:"set"})})]}),"\n",(0,s.jsx)(n.p,{children:"Writes the given data to a cache store, associated with the given key. An optional TTL may also be provided, otherwise it defaults to the TTL that was provided when the client was instantiated."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"set(key: string, value: JsonValue, options?: CacheServiceSetOptions): Promise<void>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"key"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"string"}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"value"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/types.jsonvalue",children:"JsonValue"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"options"}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.cacheservicesetoptions",children:"CacheServiceSetOptions"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,s.jsx)(n.p,{children:"Promise<void>"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var s,c={},o=null,l=null;for(s in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(c[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===c[s]&&(c[s]=n[s]);return{$$typeof:t,type:e,key:o,ref:l,props:c,_owner:a.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var s=r(296540);const t={},c=s.createContext(t);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);