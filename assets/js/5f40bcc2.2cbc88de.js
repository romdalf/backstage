/*! For license information please see 5f40bcc2.2cbc88de.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[657832],{295052:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var s=n(474848),o=n(28453);const t={id:"errors.consumedresponse",title:"ConsumedResponse",description:"API reference for ConsumedResponse"},a=void 0,c={id:"reference/errors.consumedresponse",title:"ConsumedResponse",description:"API reference for ConsumedResponse",source:"@site/versioned_docs/version-stable/reference/errors.consumedresponse.md",sourceDirName:"reference",slug:"/reference/errors.consumedresponse",permalink:"/docs/reference/errors.consumedresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/errors.consumedresponse.md",tags:[],version:"stable",frontMatter:{id:"errors.consumedresponse",title:"ConsumedResponse",description:"API reference for ConsumedResponse"}},d={},i=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/errors",children:(0,s.jsx)(r.code,{children:"@backstage/errors"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/errors.consumedresponse",children:(0,s.jsx)(r.code,{children:"ConsumedResponse"})})]}),"\n",(0,s.jsx)(r.p,{children:"ConsumedResponse represents a Response that is known to have been consumed. The methods and properties used to read the body contents are therefore omitted."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export type ConsumedResponse = {\n    readonly headers: {\n        append(name: string, value: string): void;\n        delete(name: string): void;\n        get(name: string): string | null;\n        has(name: string): boolean;\n        set(name: string, value: string): void;\n        forEach(callback: (value: string, name: string) => void): void;\n        entries(): IterableIterator<[string, string]>;\n        keys(): IterableIterator<string>;\n        values(): IterableIterator<string>;\n        [Symbol.iterator](): Iterator<[string, string]>;\n    };\n    readonly ok: boolean;\n    readonly redirected: boolean;\n    readonly status: number;\n    readonly statusText: string;\n    readonly type: ResponseType;\n    readonly url: string;\n};\n"})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var s=n(296540),o=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var s,t={},i=null,l=null;for(s in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,s)&&!d.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:o,type:e,key:i,ref:l,props:t,_owner:c.current}}r.Fragment=t,r.jsx=i,r.jsxs=i},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var s=n(296540);const o={},t=s.createContext(o);function a(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);