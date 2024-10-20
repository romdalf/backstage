/*! For license information please see 770340ac.fbf06acd.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[363570],{771192:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var t=r(474848),o=r(28453);const s={id:"plugin-auth-backend.oauthresponse",title:"OAuthResponse",description:"API reference for OAuthResponse"},c=void 0,a={id:"reference/plugin-auth-backend.oauthresponse",title:"OAuthResponse",description:"API reference for OAuthResponse",source:"@site/../docs/reference/plugin-auth-backend.oauthresponse.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthresponse",permalink:"/docs/next/reference/plugin-auth-backend.oauthresponse",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend.oauthresponse.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.oauthresponse",title:"OAuthResponse",description:"API reference for OAuthResponse"}},i={},u=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend.oauthresponse",children:(0,t.jsx)(n.code,{children:"OAuthResponse"})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"ClientAuthResponse"})," from ",(0,t.jsx)(n.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export type OAuthResponse = {\n    profile: ProfileInfo;\n    providerInfo: OAuthProviderInfo;\n    backstageIdentity?: BackstageSignInResult;\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"References:"})," ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-node.profileinfo",children:"ProfileInfo"}),", ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-backend.oauthproviderinfo",children:"OAuthProviderInfo"}),", ",(0,t.jsx)(n.a,{href:"/docs/next/reference/plugin-auth-node.backstagesigninresult",children:"BackstageSignInResult"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,s={},u=null,d=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,t)&&!i.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:u,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=u,n.jsxs=u},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>a});var t=r(296540);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);