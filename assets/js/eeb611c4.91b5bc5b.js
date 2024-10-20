/*! For license information please see eeb611c4.91b5bc5b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[324582],{776369:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=t(474848),s=t(28453);const n={id:"core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry"},c=void 0,o={id:"reference/core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry",source:"@site/versioned_docs/version-stable/reference/core-app-api.apifactoryregistry.md",sourceDirName:"reference",slug:"/reference/core-app-api.apifactoryregistry",permalink:"/docs/reference/core-app-api.apifactoryregistry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-app-api.apifactoryregistry.md",tags:[],version:"stable",frontMatter:{id:"core-app-api.apifactoryregistry",title:"ApiFactoryRegistry",description:"API reference for ApiFactoryRegistry"}},a={},d=[{value:"Methods",id:"methods",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,i.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,i.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,i.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry",children:(0,i.jsx)(r.code,{children:"ApiFactoryRegistry"})})]}),"\n",(0,i.jsx)(r.p,{children:"ApiFactoryRegistry is an ApiFactoryHolder implementation that enables registration of API Factories with different scope."}),"\n",(0,i.jsx)(r.p,{children:"Each scope has an assigned priority, where factories registered with higher priority scopes override ones with lower priority."}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-typescript",children:"class ApiFactoryRegistry implements ApiFactoryHolder \n"})}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Implements:"})," ",(0,i.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryholder",children:"ApiFactoryHolder"})]}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Method"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,i.jsxs)(r.th,{children:["\n",(0,i.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry.get",children:"get(api)"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"}),(0,i.jsx)(r.td,{children:"\n"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry.getallapis",children:"getAllApis()"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"}),(0,i.jsx)(r.td,{children:"\n"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/reference/core-app-api.apifactoryregistry.register",children:"register(scope, factory)"})}),"\n"]}),(0,i.jsx)(r.td,{children:"\n"}),(0,i.jsxs)(r.td,{children:["\n",(0,i.jsx)(r.p,{children:"Register a new API factory. Returns true if the factory was added to the registry."}),"\n",(0,i.jsx)(r.p,{children:"A factory will not be added to the registry if there is already an existing factory with the same or higher priority."}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,r,t)=>{var i=t(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var i,n={},d=null,p=null;for(i in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,i)&&!a.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===n[i]&&(n[i]=r[i]);return{$$typeof:s,type:e,key:d,ref:p,props:n,_owner:o.current}}r.Fragment=n,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>o});var i=t(296540);const s={},n=i.createContext(s);function c(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);