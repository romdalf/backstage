/*! For license information please see bc19a19a.f6db9dc0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[963548],{523275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var n=r(474848),s=r(28453);const a={id:"plugin-auth-backend.oauthstartrequest",title:"OAuthStartRequest",description:"API reference for OAuthStartRequest"},c=void 0,o={id:"reference/plugin-auth-backend.oauthstartrequest",title:"OAuthStartRequest",description:"API reference for OAuthStartRequest",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend.oauthstartrequest.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthstartrequest",permalink:"/docs/reference/plugin-auth-backend.oauthstartrequest",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend.oauthstartrequest.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend.oauthstartrequest",title:"OAuthStartRequest",description:"API reference for OAuthStartRequest"}},u={},i=[];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend.oauthstartrequest",children:(0,n.jsx)(t.code,{children:"OAuthStartRequest"})})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"createOAuthRouteHandlers"})," from ",(0,n.jsx)(t.code,{children:"@backstage/plugin-auth-node"})," instead"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export type OAuthStartRequest = express.Request<{}> & {\n    scope: string;\n    state: OAuthState;\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"References:"})," ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend.oauthstate",children:"OAuthState"})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,a={},i=null,d=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:i,ref:d,props:a,_owner:o.current}}t.Fragment=a,t.jsx=i,t.jsxs=i},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var n=r(296540);const s={},a=n.createContext(s);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);