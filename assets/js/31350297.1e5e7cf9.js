/*! For license information please see 31350297.1e5e7cf9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[419825],{907333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(474848),n=r(28453);const i={id:"provider",title:"OAuth 2 Proxy Provider",sidebar_label:"OAuth 2 Custom Proxy",description:"Adding OAuth2Proxy as an authentication provider in Backstage"},a=void 0,s={id:"auth/oauth2-proxy/provider",title:"OAuth 2 Proxy Provider",description:"Adding OAuth2Proxy as an authentication provider in Backstage",source:"@site/versioned_docs/version-stable/auth/oauth2-proxy/provider.md",sourceDirName:"auth/oauth2-proxy",slug:"/auth/oauth2-proxy/provider",permalink:"/docs/auth/oauth2-proxy/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/auth/oauth2-proxy/provider.md",tags:[],version:"stable",frontMatter:{id:"provider",title:"OAuth 2 Proxy Provider",sidebar_label:"OAuth 2 Custom Proxy",description:"Adding OAuth2Proxy as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Okta",permalink:"/docs/auth/okta/provider"},next:{title:"OneLogin",permalink:"/docs/auth/onelogin/provider"}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The Backstage ",(0,o.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," package comes with an\n",(0,o.jsx)(t.code,{children:"oauth2Proxy"})," authentication provider that can authenticate users by using a\n",(0,o.jsx)(t.a,{href:"https://github.com/oauth2-proxy/oauth2-proxy",children:"oauth2-proxy"})," in front of an\nactual Backstage instance. This enables to reuse existing authentications within\na cluster. In general the ",(0,o.jsx)(t.code,{children:"oauth2-proxy"})," supports all OpenID Connect providers,\nfor more details check this\n",(0,o.jsx)(t.a,{href:"https://oauth2-proxy.github.io/oauth2-proxy/docs/configuration/oauth_provider",children:"list of supported providers"}),"."]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"note",children:(0,o.jsx)(t.p,{children:"OAuth2 Proxy does not provide a way to authenticate requests, you must instead ensure that your Backstage instance is only accessible through the OAuth2 Proxy. If you need more strict validation, consider using a different provider."})}),"\n",(0,o.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["The provider configuration can be added to your ",(0,o.jsx)(t.code,{children:"app-config.yaml"})," under the root\n",(0,o.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  environment: development\n  providers:\n    oauth2Proxy:\n      signIn:\n        resolvers:\n          # See https://backstage.io/docs/auth/oauth2-proxy/provider#resolvers for more resolvers\n          - resolver: forwardedUserMatchingUserEntityName\n"})}),"\n",(0,o.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,o.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,o.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,o.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,o.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,o.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"forwardedUserMatchingUserEntityName"}),": Matches the value in the ",(0,o.jsx)(t.code,{children:"x-forwarded-user"})," header from the auth provider with the User entity that has a matching ",(0,o.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,o.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"note",children:(0,o.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,o.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,o.jsx)(t.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,o.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,o.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-oauth2-proxy-provider\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then we will need to this line:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-auth-backend-module-oauth2-proxy-provider'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,o.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"/docs/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page, and to also make it work smoothly for local development. You'll use ",(0,o.jsx)(t.code,{children:"oauth2Proxy"})," as the provider name."]}),"\n",(0,o.jsxs)(t.p,{children:["If you ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver#building-custom-resolvers",children:"provide a custom sign in resolver"}),", you can skip the ",(0,o.jsx)(t.code,{children:"signIn"})," block entirely."]})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},221020:(e,t,r)=>{var o=r(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,i={},c=null,h=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,o)&&!d.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:h,props:i,_owner:s.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var o=r(296540);const n={},i=o.createContext(n);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);