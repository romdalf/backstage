/*! For license information please see 9cd83bd4.7242816d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[63404],{592889:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(474848),c=t(28453);const s={id:"backend-plugin-api.createservicefactory",title:"createServiceFactory()",description:"API reference for createServiceFactory()"},i=void 0,a={id:"reference/backend-plugin-api.createservicefactory",title:"createServiceFactory()",description:"API reference for createServiceFactory()",source:"@site/../docs/reference/backend-plugin-api.createservicefactory.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.createservicefactory",permalink:"/docs/next/reference/backend-plugin-api.createservicefactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.createservicefactory.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.createservicefactory",title:"createServiceFactory()",description:"API reference for createServiceFactory()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.createservicefactory",children:(0,n.jsx)(r.code,{children:"createServiceFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:"Creates a root scoped service factory without options."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"function createServiceFactory<TService, TInstances extends 'singleton' | 'multiton', TImpl extends TService, TDeps extends {\n    [name in string]: ServiceRef<unknown, 'root'>;\n}>(options: RootServiceFactoryOptions<TService, TInstances, TImpl, TDeps>): ServiceFactory<TService, 'root', TInstances>;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.rootservicefactoryoptions",children:"RootServiceFactoryOptions"}),"<TService, TInstances, TImpl, TDeps>"]}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"The service factory configuration."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/backend-plugin-api.servicefactory",children:"ServiceFactory"}),"<TService, 'root', TInstances>"]})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:c,type:e,key:d,ref:l,props:s,_owner:a.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var n=t(296540);const c={},s=n.createContext(c);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);