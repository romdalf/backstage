/*! For license information please see 35c4791b.222491f4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[248819],{228508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(474848),o=n(28453);const r={id:"test-utils.mockfetchapioptions.baseimplementation",title:"MockFetchApiOptions.baseImplementation",description:"API reference for MockFetchApiOptions.baseImplementation"},i=void 0,c={id:"reference/test-utils.mockfetchapioptions.baseimplementation",title:"MockFetchApiOptions.baseImplementation",description:"API reference for MockFetchApiOptions.baseImplementation",source:"@site/../docs/reference/test-utils.mockfetchapioptions.baseimplementation.md",sourceDirName:"reference",slug:"/reference/test-utils.mockfetchapioptions.baseimplementation",permalink:"/docs/next/reference/test-utils.mockfetchapioptions.baseimplementation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/test-utils.mockfetchapioptions.baseimplementation.md",tags:[],version:"current",frontMatter:{id:"test-utils.mockfetchapioptions.baseimplementation",title:"MockFetchApiOptions.baseImplementation",description:"API reference for MockFetchApiOptions.baseImplementation"}},a={},l=[{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(t.a,{href:"/docs/next/reference/test-utils",children:(0,s.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,s.jsx)(t.a,{href:"/docs/next/reference/test-utils.mockfetchapioptions",children:(0,s.jsx)(t.code,{children:"MockFetchApiOptions"})})," > ",(0,s.jsx)(t.a,{href:"/docs/next/reference/test-utils.mockfetchapioptions.baseimplementation",children:(0,s.jsx)(t.code,{children:"baseImplementation"})})]}),"\n",(0,s.jsxs)(t.p,{children:["Define the underlying base ",(0,s.jsx)(t.code,{children:"fetch"})," implementation."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"baseImplementation?: undefined | 'none' | typeof crossFetch;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Leaving out this parameter or passing ",(0,s.jsx)(t.code,{children:"undefined"}),", makes the API use the global ",(0,s.jsx)(t.code,{children:"fetch"})," implementation to make real network requests."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"'none'"})," swallows all calls and makes no requests at all."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also pass in any ",(0,s.jsx)(t.code,{children:"fetch"})," compatible callback, such as a ",(0,s.jsx)(t.code,{children:"jest.fn()"}),", if you want to use a custom implementation or to just track and assert on calls."]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},221020:(e,t,n)=>{var s=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,p=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,s)&&!a.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:o,type:e,key:l,ref:p,props:r,_owner:c.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(296540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);