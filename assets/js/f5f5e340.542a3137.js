/*! For license information please see f5f5e340.542a3137.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[367467],{120024:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(474848),s=n(28453);const i={id:"backend-plugin-api.discoveryservice.getbaseurl",title:"DiscoveryService.getBaseUrl()",description:"API reference for DiscoveryService.getBaseUrl()"},c=void 0,a={id:"reference/backend-plugin-api.discoveryservice.getbaseurl",title:"DiscoveryService.getBaseUrl()",description:"API reference for DiscoveryService.getBaseUrl()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.discoveryservice.getbaseurl.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.discoveryservice.getbaseurl",permalink:"/docs/reference/backend-plugin-api.discoveryservice.getbaseurl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.discoveryservice.getbaseurl.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.discoveryservice.getbaseurl",title:"DiscoveryService.getBaseUrl()",description:"API reference for DiscoveryService.getBaseUrl()"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:(0,t.jsx)(r.code,{children:"DiscoveryService"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice.getbaseurl",children:(0,t.jsx)(r.code,{children:"getBaseUrl"})})]}),"\n",(0,t.jsx)(r.p,{children:"Returns the internal HTTP base URL for a given plugin, without a trailing slash."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"getBaseUrl(pluginId: string): Promise<string>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"pluginId"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"string"}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:"Promise<string>"}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(r.p,{children:"The returned URL should point to an internal endpoint for the plugin, with the shortest route possible. The URL should be used for service-to-service communication within a Backstage backend deployment."}),"\n",(0,t.jsx)(r.p,{children:"This method must always be called just before making each request, as opposed to fetching the URL once when constructing an API client. That is to ensure that more flexible routing patterns can be supported where a different result might be returned each time."}),"\n",(0,t.jsxs)(r.p,{children:["For example, asking for the URL for ",(0,t.jsx)(r.code,{children:"catalog"})," may return something like ",(0,t.jsx)(r.code,{children:"http://10.1.2.3/api/catalog"})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)c.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>a});var t=n(296540);const s={},i=t.createContext(s);function c(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);