/*! For license information please see 74135d9b.2d6a54bd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[352876],{214954:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var t=r(474848),o=r(28453);const c={id:"plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo"},i=void 0,s={id:"reference/plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo",source:"@site/../docs/reference/plugin-auth-backend.oauthproviderinfo.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthproviderinfo",permalink:"/docs/next/reference/plugin-auth-backend.oauthproviderinfo",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend.oauthproviderinfo.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.oauthproviderinfo",title:"OAuthProviderInfo",description:"API reference for OAuthProviderInfo"}},a={},d=[];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend.oauthproviderinfo",children:(0,t.jsx)(n.code,{children:"OAuthProviderInfo"})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"createOAuthRouteHandlers"})," from ",(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type OAuthProviderInfo = {\n    accessToken: string;\n    idToken?: string;\n    expiresInSeconds?: number;\n    scope: string;\n};\n"})})]})}function f(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,c={},d=null,u=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,t)&&!a.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:u,props:c,_owner:s.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var t=r(296540);const o={},c=t.createContext(o);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);