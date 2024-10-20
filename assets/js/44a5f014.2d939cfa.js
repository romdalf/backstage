/*! For license information please see 44a5f014.2d939cfa.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[811480],{796868:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var i=t(474848),n=t(28453);const s={id:"core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry"},c=void 0,o={id:"reference/core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry",source:"@site/../docs/reference/core-app-api.apifactoryregistry.md",sourceDirName:"reference",slug:"/reference/core-app-api.apifactoryregistry",permalink:"/docs/next/reference/core-app-api.apifactoryregistry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-app-api.apifactoryregistry.md",tags:[],version:"current",frontMatter:{id:"core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry"}},a={},p=[{value:"Methods",id:"methods",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(r.a,{href:"/docs/next/reference/core-app-api",children:(0,i.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,i.jsx)(r.a,{href:"/docs/next/reference/core-app-api.apifactoryregistry",children:(0,i.jsx)(r.code,{children:"ApiFactoryRegistry"})})]}),"\n",(0,i.jsx)(r.p,{children:"ApiFactoryRegistry is an ApiFactoryHolder implementation that enables registration of API Factories with different scope."}),"\n",(0,i.jsx)(r.p,{children:"Each scope has an assigned priority, where factories registered with higher priority scopes override ones with lower priority."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"class ApiFactoryRegistry implements ApiFactoryHolder \n"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Implements:"})," ",(0,i.jsx)(r.a,{href:"/docs/next/reference/core-app-api.apifactoryholder",children:"ApiFactoryHolder"})]}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Method"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/next/reference/core-app-api.apifactoryregistry.get",children:"get(api)"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"}),(0,i.jsx)(r.td,{children:"\n"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/next/reference/core-app-api.apifactoryregistry.getallapis",children:"getAllApis()"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"}),(0,i.jsx)(r.td,{children:"\n"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/next/reference/core-app-api.apifactoryregistry.register",children:"register(scope, factory)"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"}),(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:"Register a new API factory. Returns true if the factory was added to the registry."}),"\n",(0,i.jsx)(r.p,{children:"A factory will not be added to the registry if there is already an existing factory with the same or higher priority."}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var i=t(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var i,s={},p=null,d=null;for(i in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,i)&&!a.hasOwnProperty(i)&&(s[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===s[i]&&(s[i]=r[i]);return{$$typeof:n,type:e,key:p,ref:d,props:s,_owner:o.current}}r.Fragment=s,r.jsx=p,r.jsxs=p},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>o});var i=t(296540);const n={},s=i.createContext(n);function c(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);