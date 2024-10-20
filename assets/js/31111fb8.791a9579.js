/*! For license information please see 31111fb8.791a9579.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[953894],{752047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(474848),i=t(28453);const o={id:"core-plugin-api.identityapi",title:"IdentityApi",description:"API reference for IdentityApi"},c=void 0,s={id:"reference/core-plugin-api.identityapi",title:"IdentityApi",description:"API reference for IdentityApi",source:"@site/../docs/reference/core-plugin-api.identityapi.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.identityapi",permalink:"/docs/next/reference/core-plugin-api.identityapi",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.identityapi.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.identityapi",title:"IdentityApi",description:"API reference for IdentityApi"}},a={},d=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.identityapi",children:(0,r.jsx)(n.code,{children:"IdentityApi"})})]}),"\n",(0,r.jsx)(n.p,{children:"The Identity API used to identify and get information about the signed in user."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type IdentityApi = {\n    getProfileInfo(): Promise<ProfileInfo>;\n    getBackstageIdentity(): Promise<BackstageUserIdentity>;\n    getCredentials(): Promise<{\n        token?: string;\n    }>;\n    signOut(): Promise<void>;\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.profileinfo",children:"ProfileInfo"}),", ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.backstageuseridentity",children:"BackstageUserIdentity"})]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:p,props:o,_owner:s.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(296540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);