/*! For license information please see 81678c76.d5333a05.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[983923],{77127:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var t=r(474848),o=r(28453);const c={id:"backend-openapi-utils.internal.docrequesthandler",title:"internal.DocRequestHandler",description:"API reference for internal.DocRequestHandler"},a=void 0,s={id:"reference/backend-openapi-utils.internal.docrequesthandler",title:"internal.DocRequestHandler",description:"API reference for internal.DocRequestHandler",source:"@site/versioned_docs/version-stable/reference/backend-openapi-utils.internal.docrequesthandler.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.docrequesthandler",permalink:"/docs/reference/backend-openapi-utils.internal.docrequesthandler",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.internal.docrequesthandler.md",tags:[],version:"stable",frontMatter:{id:"backend-openapi-utils.internal.docrequesthandler",title:"internal.DocRequestHandler",description:"API reference for internal.DocRequestHandler"}},d={},i=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils",children:(0,t.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,t.jsx)(n.code,{children:"internal"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.docrequesthandler",children:(0,t.jsx)(n.code,{children:"DocRequestHandler"})})]}),"\n",(0,t.jsx)(n.p,{children:"Typed express request handler."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type DocRequestHandler<Doc extends RequiredDoc, Path extends DocPath<Doc>, Method extends DocPathMethod<Doc, Path>> = core.RequestHandler<PathSchema<Doc, Path, Method>, ResponseBodyToJsonSchema<Doc, Path, Method>, RequestBodyToJsonSchema<Doc, Path, Method>, QuerySchema<Doc, Path, Method>, Record<string, string>>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.requireddoc",children:"RequiredDoc"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.docpath",children:"DocPath"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.docpathmethod",children:"DocPathMethod"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.pathschema",children:"PathSchema"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.responsebodytojsonschema",children:"ResponseBodyToJsonSchema"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.requestbodytojsonschema",children:"RequestBodyToJsonSchema"}),", ",(0,t.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.queryschema",children:"QuerySchema"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,c={},i=null,l=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!d.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:i,ref:l,props:c,_owner:s.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(296540);const o={},c=t.createContext(o);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);