/*! For license information please see fce582ca.98933f65.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[559050],{131270:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=r(474848),t=r(28453);const i={id:"backend-openapi-utils",title:"@backstage/backend-openapi-utils",description:"API Reference for @backstage/backend-openapi-utils"},c=void 0,d={id:"reference/backend-openapi-utils",title:"@backstage/backend-openapi-utils",description:"API Reference for @backstage/backend-openapi-utils",source:"@site/../docs/reference/backend-openapi-utils.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils",permalink:"/docs/next/reference/backend-openapi-utils",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils",title:"@backstage/backend-openapi-utils",description:"API Reference for @backstage/backend-openapi-utils"}},a={},l=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Namespaces",id:"namespaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,s.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})]}),"\n",(0,s.jsx)(n.p,{children:"Common functionalities for the openapi-router plugin."}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.createvalidatedopenapirouter",children:"createValidatedOpenApiRouter(spec, options)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Create a new OpenAPI router with some default middleware."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.getopenapispecroute",children:"getOpenApiSpecRoute(baseUrl)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Given a base url for a plugin, find the given OpenAPI spec for that plugin."}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.wrapinopenapitestserver",children:"wrapInOpenApiTestServer(app)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsxs)(n.p,{children:["!!! THIS CURRENTLY ONLY SUPPORTS SUPERTEST !!! Running against supertest, we need some way to hit the optic proxy. This ensures that that happens at runtime when in the context of a ",(0,s.jsx)(n.code,{children:"yarn optic capture"})," command."]}),"\n"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.wrapserver",children:"wrapServer(app)"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"!!! THIS CURRENTLY ONLY SUPPORTS SUPERTEST !!! Setup a server with a custom OpenAPI proxy. This proxy will capture all requests and responses and make sure they conform to the spec."}),"\n"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.apirouter",children:"ApiRouter"})}),"\n"]}),(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:"Typed Express router based on an OpenAPI 3.1 spec."}),"\n"]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Namespace"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.internal",children:"internal"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(n.th,{children:["\n",(0,s.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.cookieparameters",children:"CookieParameters"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.headerparameters",children:"HeaderParameters"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.pathparameters",children:"PathParameters"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.queryparameters",children:"QueryParameters"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.request_2",children:"Request_2"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/next/reference/backend-openapi-utils.response_2",children:"Response_2"})}),"\n"]}),(0,s.jsx)(n.td,{children:"\n"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var s,i={},l=null,p=null;for(s in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)c.call(n,s)&&!a.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:p,props:i,_owner:d.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var s=r(296540);const t={},i=s.createContext(t);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);