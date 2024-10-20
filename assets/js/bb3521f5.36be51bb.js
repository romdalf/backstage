/*! For license information please see bb3521f5.36be51bb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[853731],{650368:(e,r,c)=>{c.r(r),c.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=c(474848),n=c(28453);const a={id:"plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator",title:"createCloudflareAccessAuthenticator()",description:"API reference for createCloudflareAccessAuthenticator()"},s=void 0,o={id:"reference/plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator",title:"createCloudflareAccessAuthenticator()",description:"API reference for createCloudflareAccessAuthenticator()",source:"@site/../docs/reference/plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator",permalink:"/docs/next/reference/plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator",title:"createCloudflareAccessAuthenticator()",description:"API reference for createCloudflareAccessAuthenticator()"}},l={},d=[{value:"Parameters",id:"parameters",level:2}];function i(e){const r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-cloudflare-access-provider",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-auth-backend-module-cloudflare-access-provider"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-cloudflare-access-provider.createcloudflareaccessauthenticator",children:(0,t.jsx)(r.code,{children:"createCloudflareAccessAuthenticator"})})]}),"\n",(0,t.jsx)(r.p,{children:"Implements Cloudflare Access authentication."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createCloudflareAccessAuthenticator(options?: {\n    cache?: CacheService;\n}): ProxyAuthenticator<unknown, CloudflareAccessResult, CloudflareAccessResult>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["{ cache?: ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.cacheservice",children:"CacheService"}),"; }"]}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.em,{children:"(Optional)"})}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.proxyauthenticator",children:"ProxyAuthenticator"}),"<unknown, ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessresult",children:"CloudflareAccessResult"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-backend-module-cloudflare-access-provider.cloudflareaccessresult",children:"CloudflareAccessResult"}),">"]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},221020:(e,r,c)=>{var t=c(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,c){var t,a={},d=null,i=null;for(t in void 0!==c&&(d=""+c),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)s.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:n,type:e,key:d,ref:i,props:a,_owner:o.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},474848:(e,r,c)=>{e.exports=c(221020)},28453:(e,r,c)=>{c.d(r,{R:()=>s,x:()=>o});var t=c(296540);const n={},a=t.createContext(n);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);