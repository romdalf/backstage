/*! For license information please see 7fd36d5f.8ed7a500.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[353688],{250899:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=t(474848),o=t(28453);const c={id:"plugin-auth-node.createproxyauthproviderfactory",title:"createProxyAuthProviderFactory()",description:"API reference for createProxyAuthProviderFactory()"},s=void 0,a={id:"reference/plugin-auth-node.createproxyauthproviderfactory",title:"createProxyAuthProviderFactory()",description:"API reference for createProxyAuthProviderFactory()",source:"@site/../docs/reference/plugin-auth-node.createproxyauthproviderfactory.md",sourceDirName:"reference",slug:"/reference/plugin-auth-node.createproxyauthproviderfactory",permalink:"/docs/next/reference/plugin-auth-node.createproxyauthproviderfactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-auth-node.createproxyauthproviderfactory.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-node.createproxyauthproviderfactory",title:"createProxyAuthProviderFactory()",description:"API reference for createProxyAuthProviderFactory()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-auth-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.createproxyauthproviderfactory",children:(0,n.jsx)(r.code,{children:"createProxyAuthProviderFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createProxyAuthProviderFactory<TResult>(options: {\n    authenticator: ProxyAuthenticator<unknown, TResult, unknown>;\n    profileTransform?: ProfileTransform<TResult>;\n    signInResolver?: SignInResolver<TResult>;\n    signInResolverFactories?: Record<string, SignInResolverFactory>;\n}): AuthProviderFactory;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ authenticator: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.proxyauthenticator",children:"ProxyAuthenticator"}),"<unknown, TResult, unknown>; profileTransform?: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.profiletransform",children:"ProfileTransform"}),"<TResult>; signInResolver?: ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.signinresolver",children:"SignInResolver"}),"<TResult>; signInResolverFactories?: Record<string, ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.signinresolverfactory",children:"SignInResolverFactory"}),">; }"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-auth-node.authproviderfactory",children:"AuthProviderFactory"})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,c={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:l,props:c,_owner:a.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(296540);const o={},c=n.createContext(o);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);