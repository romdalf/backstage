/*! For license information please see d2a75189.e702c59d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[378698],{232752:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(474848),a=n(28453);const o={id:"backend-openapi-utils.internal.docparameter",title:"internal.DocParameter",description:"API reference for internal.DocParameter"},c=void 0,i={id:"reference/backend-openapi-utils.internal.docparameter",title:"internal.DocParameter",description:"API reference for internal.DocParameter",source:"@site/../docs/reference/backend-openapi-utils.internal.docparameter.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.docparameter",permalink:"/docs/next/reference/backend-openapi-utils.internal.docparameter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.internal.docparameter.md",tags:[],version:"current",frontMatter:{id:"backend-openapi-utils.internal.docparameter",title:"internal.DocParameter",description:"API reference for internal.DocParameter"}},s={},d=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils",children:(0,t.jsx)(r.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal",children:(0,t.jsx)(r.code,{children:"internal"})})," > ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docparameter",children:(0,t.jsx)(r.code,{children:"DocParameter"})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type DocParameter<Doc extends RequiredDoc, Path extends DocPath<Doc>, Method extends DocPathMethod<Doc, Path>, Parameter extends keyof DocOperation<Doc, Path, Method>['parameters']> = DocOperation<Doc, Path, Method>['parameters'][Parameter] extends ImmutableReferenceObject ? 'parameters' extends ComponentTypes<Doc> ? ComponentRef<Doc, 'parameters', DocOperation<Doc, Path, Method>['parameters'][Parameter]> : never : DocOperation<Doc, Path, Method>['parameters'][Parameter];\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.requireddoc",children:"RequiredDoc"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docpath",children:"DocPath"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docpathmethod",children:"DocPathMethod"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.docoperation",children:"DocOperation"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.immutablereferenceobject",children:"ImmutableReferenceObject"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.componenttypes",children:"ComponentTypes"}),", ",(0,t.jsx)(r.a,{href:"/docs/next/reference/backend-openapi-utils.internal.componentref",children:"ComponentRef"})]})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},221020:(e,r,n)=>{var t=n(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,o={},d=null,p=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,t)&&!s.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:a,type:e,key:d,ref:p,props:o,_owner:i.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(296540);const a={},o=t.createContext(a);function c(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);