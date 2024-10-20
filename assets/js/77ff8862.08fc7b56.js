/*! For license information please see 77ff8862.08fc7b56.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[192309],{906042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=n(474848),i=n(28453);const s={id:"plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers",title:"bitbucketSignInResolvers",description:"API reference for bitbucketSignInResolvers"},c=void 0,o={id:"reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers",title:"bitbucketSignInResolvers",description:"API reference for bitbucketSignInResolvers",source:"@site/versioned_docs/version-stable/reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers",permalink:"/docs/reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers.md",tags:[],version:"stable",frontMatter:{id:"plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers",title:"bitbucketSignInResolvers",description:"API reference for bitbucketSignInResolvers"}},d={},a=[{value:"Variables",id:"variables",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend-module-bitbucket-provider",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-backend-module-bitbucket-provider"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers",children:(0,r.jsx)(t.code,{children:"bitbucketSignInResolvers"})})]}),"\n",(0,r.jsx)(t.p,{children:"Available sign-in resolvers for the Bitbucket auth provider."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"namespace bitbucketSignInResolvers \n"})}),"\n",(0,r.jsx)(t.h2,{id:"variables",children:"Variables"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Variable"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers.useridmatchinguserentityannotation",children:"userIdMatchingUserEntityAnnotation"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["Looks up the user by matching their Bitbucket user ID with the ",(0,r.jsx)(t.code,{children:"bitbucket.org/user-id"})," annotation."]}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/plugin-auth-backend-module-bitbucket-provider.bitbucketsigninresolvers.usernamematchinguserentityannotation",children:"usernameMatchingUserEntityAnnotation"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:["Looks up the user by matching their Bitbucket username with the ",(0,r.jsx)(t.code,{children:"bitbucket.org/username"})," annotation."]}),"\n"]})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,s={},a=null,l=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:a,ref:l,props:s,_owner:o.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>o});var r=n(296540);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);