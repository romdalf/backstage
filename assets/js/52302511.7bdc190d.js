/*! For license information please see 52302511.7bdc190d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[322378],{842840:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=s(474848),t=s(28453);const o={id:"types.observable",title:"Observable",description:"API reference for Observable"},c=void 0,a={id:"reference/types.observable",title:"Observable",description:"API reference for Observable",source:"@site/versioned_docs/version-stable/reference/types.observable.md",sourceDirName:"reference",slug:"/reference/types.observable",permalink:"/docs/reference/types.observable",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/types.observable.md",tags:[],version:"stable",frontMatter:{id:"types.observable",title:"Observable",description:"API reference for Observable"}},i={},l=[];function b(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/types",children:(0,n.jsx)(r.code,{children:"@backstage/types"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/types.observable",children:(0,n.jsx)(r.code,{children:"Observable"})})]}),"\n",(0,n.jsx)(r.p,{children:"Observable sequence of values and errors, see TC39."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/tc39/proposal-observable",children:"https://github.com/tc39/proposal-observable"})}),"\n",(0,n.jsx)(r.p,{children:"This is used as a common return type for observable values and can be created using many different observable implementations, such as zen-observable or RxJS 5."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type Observable<T> = {\n    [Symbol.observable](): Observable<T>;\n    subscribe(observer: Observer<T>): Subscription;\n    subscribe(onNext?: (value: T) => void, onError?: (error: Error) => void, onComplete?: () => void): Subscription;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/types.observable",children:"Observable"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/types.observer",children:"Observer"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/types.subscription",children:"Subscription"})]})]})}function d(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},221020:(e,r,s)=>{var n=s(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var n,o={},l=null,b=null;for(n in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(b=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:t,type:e,key:l,ref:b,props:o,_owner:a.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>c,x:()=>a});var n=s(296540);const t={},o=n.createContext(t);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);