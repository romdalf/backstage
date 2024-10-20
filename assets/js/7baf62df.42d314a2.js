/*! For license information please see 7baf62df.42d314a2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[251543],{577393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(474848),o=t(28453);const i={id:"backend-openapi-utils.internal.uniontointersection",title:"internal.UnionToIntersection",description:"API reference for internal.UnionToIntersection"},s=void 0,c={id:"reference/backend-openapi-utils.internal.uniontointersection",title:"internal.UnionToIntersection",description:"API reference for internal.UnionToIntersection",source:"@site/versioned_docs/version-stable/reference/backend-openapi-utils.internal.uniontointersection.md",sourceDirName:"reference",slug:"/reference/backend-openapi-utils.internal.uniontointersection",permalink:"/docs/reference/backend-openapi-utils.internal.uniontointersection",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-openapi-utils.internal.uniontointersection.md",tags:[],version:"stable",frontMatter:{id:"backend-openapi-utils.internal.uniontointersection",title:"internal.UnionToIntersection",description:"API reference for internal.UnionToIntersection"}},a={},l=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils",children:(0,r.jsx)(n.code,{children:"@backstage/backend-openapi-utils"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal",children:(0,r.jsx)(n.code,{children:"internal"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/backend-openapi-utils.internal.uniontointersection",children:(0,r.jsx)(n.code,{children:"UnionToIntersection"})})]}),"\n",(0,r.jsxs)(n.p,{children:["From ",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/71393738/typescript-intersection-not-union-type-from-json-schema",children:"https://stackoverflow.com/questions/71393738/typescript-intersection-not-union-type-from-json-schema"})]}),"\n",(0,r.jsx)(n.p,{children:"StackOverflow says not to do this, but union types aren't possible any other way."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,p=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!a.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:p,props:i,_owner:c.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(296540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);