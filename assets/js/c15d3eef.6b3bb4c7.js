/*! For license information please see c15d3eef.6b3bb4c7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[148365],{158667:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var c=t(474848),n=t(28453);const s={id:"backend-test-utils.servicemock",title:"ServiceMock",description:"API reference for ServiceMock"},o=void 0,i={id:"reference/backend-test-utils.servicemock",title:"ServiceMock",description:"API reference for ServiceMock",source:"@site/../docs/reference/backend-test-utils.servicemock.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.servicemock",permalink:"/docs/next/reference/backend-test-utils.servicemock",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-test-utils.servicemock.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.servicemock",title:"ServiceMock",description:"API reference for ServiceMock"}},a={},d=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-test-utils",children:(0,c.jsx)(r.code,{children:"@backstage/backend-test-utils"})})," > ",(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-test-utils.servicemock",children:(0,c.jsx)(r.code,{children:"ServiceMock"})})]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-typescript",children:"export type ServiceMock<TService> = {\n    factory: ServiceFactory<TService>;\n} & {\n    [Key in keyof TService]: TService[Key] extends (...args: infer Args) => infer Return ? TService[Key] & jest.MockInstance<Return, Args> : TService[Key];\n};\n"})}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.strong,{children:"References:"})," ",(0,c.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.servicefactory",children:"ServiceFactory"})]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(f,{...e})}):f(e)}},221020:(e,r,t)=>{var c=t(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var c,s={},d=null,f=null;for(c in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,c)&&!a.hasOwnProperty(c)&&(s[c]=r[c]);if(e&&e.defaultProps)for(c in r=e.defaultProps)void 0===s[c]&&(s[c]=r[c]);return{$$typeof:n,type:e,key:d,ref:f,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var c=t(296540);const n={},s=c.createContext(n);function o(e){const r=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),c.createElement(s.Provider,{value:r},e.children)}}}]);