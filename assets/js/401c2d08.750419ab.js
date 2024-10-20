/*! For license information please see 401c2d08.750419ab.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[91909],{600252:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(474848),c=n(28453);const i={id:"backend-plugin-api.createservicefactory_1",title:"createServiceFactory()",description:"API reference for createServiceFactory()"},s=void 0,a={id:"reference/backend-plugin-api.createservicefactory_1",title:"createServiceFactory()",description:"API reference for createServiceFactory()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.createservicefactory_1.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.createservicefactory_1",permalink:"/docs/reference/backend-plugin-api.createservicefactory_1",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.createservicefactory_1.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.createservicefactory_1",title:"createServiceFactory()",description:"API reference for createServiceFactory()"}},o={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.createservicefactory_1",children:(0,t.jsx)(r.code,{children:"createServiceFactory"})})]}),"\n",(0,t.jsx)(r.p,{children:"Creates a plugin scoped service factory without options."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"function createServiceFactory<TService, TInstances extends 'singleton' | 'multiton', TImpl extends TService, TDeps extends {\n    [name in string]: ServiceRef<unknown>;\n}, TContext = undefined>(options: PluginServiceFactoryOptions<TService, TInstances, TContext, TImpl, TDeps>): ServiceFactory<TService, 'plugin', TInstances>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"options"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.pluginservicefactoryoptions",children:"PluginServiceFactoryOptions"}),"<TService, TInstances, TContext, TImpl, TDeps>"]}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"The service factory configuration."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.servicefactory",children:"ServiceFactory"}),"<TService, 'plugin', TInstances>"]})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var t=n(296540),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,i={},d=null,l=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)s.call(r,t)&&!o.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:c,type:e,key:d,ref:l,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(296540);const c={},i=t.createContext(c);function s(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);