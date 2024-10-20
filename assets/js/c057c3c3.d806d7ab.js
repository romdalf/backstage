/*! For license information please see c057c3c3.d806d7ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[460754],{856366:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=n(474848),t=n(28453);const i={id:"plugin-user-settings.useuserprofile",title:"useUserProfile()",description:"API reference for useUserProfile()"},o=void 0,c={id:"reference/plugin-user-settings.useuserprofile",title:"useUserProfile()",description:"API reference for useUserProfile()",source:"@site/versioned_docs/version-stable/reference/plugin-user-settings.useuserprofile.md",sourceDirName:"reference",slug:"/reference/plugin-user-settings.useuserprofile",permalink:"/docs/reference/plugin-user-settings.useuserprofile",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-user-settings.useuserprofile.md",tags:[],version:"stable",frontMatter:{id:"plugin-user-settings.useuserprofile",title:"useUserProfile()",description:"API reference for useUserProfile()"}},l={},a=[];function f(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-user-settings",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-user-settings"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-user-settings.useuserprofile",children:(0,s.jsx)(r.code,{children:"useUserProfile"})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:'useUserProfile: () => {\n    profile: ProfileInfo;\n    displayName: string;\n    loading: boolean;\n    backstageIdentity?: undefined;\n} | {\n    profile: ProfileInfo;\n    backstageIdentity: import("@backstage/core-plugin-api").BackstageUserIdentity;\n    displayName: string;\n    loading: false;\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:["{ profile: ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfo",children:"ProfileInfo"}),"; displayName: string; loading: boolean; backstageIdentity?: undefined; } | { profile: ",(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.profileinfo",children:"ProfileInfo"}),'; backstageIdentity: import("@backstage/core-plugin-api").',(0,s.jsx)(r.a,{href:"/docs/reference/core-plugin-api.backstageuseridentity",children:"BackstageUserIdentity"}),"; displayName: string; loading: false; }"]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},221020:(e,r,n)=>{var s=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var s,i={},a=null,f=null;for(s in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,s)&&!l.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:t,type:e,key:a,ref:f,props:i,_owner:c.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var s=n(296540);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);