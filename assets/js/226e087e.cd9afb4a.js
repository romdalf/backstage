/*! For license information please see 226e087e.cd9afb4a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[311412],{564598:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=i(474848),n=i(28453);const a={id:"core-compat-api.multipleanalyticsapi.fromapis",title:"MultipleAnalyticsApi.fromApis()",description:"API reference for MultipleAnalyticsApi.fromApis()"},c=void 0,s={id:"reference/core-compat-api.multipleanalyticsapi.fromapis",title:"MultipleAnalyticsApi.fromApis()",description:"API reference for MultipleAnalyticsApi.fromApis()",source:"@site/versioned_docs/version-stable/reference/core-compat-api.multipleanalyticsapi.fromapis.md",sourceDirName:"reference",slug:"/reference/core-compat-api.multipleanalyticsapi.fromapis",permalink:"/docs/reference/core-compat-api.multipleanalyticsapi.fromapis",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-compat-api.multipleanalyticsapi.fromapis.md",tags:[],version:"stable",frontMatter:{id:"core-compat-api.multipleanalyticsapi.fromapis",title:"MultipleAnalyticsApi.fromApis()",description:"API reference for MultipleAnalyticsApi.fromApis()"}},l={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-compat-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-compat-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-compat-api.multipleanalyticsapi",children:(0,t.jsx)(r.code,{children:"MultipleAnalyticsApi"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-compat-api.multipleanalyticsapi.fromapis",children:(0,t.jsx)(r.code,{children:"fromApis"})})]}),"\n",(0,t.jsx)(r.p,{children:"Create an AnalyticsApi implementation from an array of concrete implementations."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"static fromApis(actualApis: (AnalyticsApi | NewAnalyicsApi)[]): MultipleAnalyticsApi;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(r.th,{children:["\n",(0,t.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["\n",(0,t.jsx)(r.p,{children:"actualApis"}),"\n"]}),(0,t.jsxs)(r.td,{children:["\n",(0,t.jsxs)(r.p,{children:["(",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.analyticsapi",children:"AnalyticsApi"})," | ",(0,t.jsx)(r.a,{href:"/docs/reference/frontend-plugin-api.analyticsapi",children:"NewAnalyicsApi"}),")[]"]}),"\n"]}),(0,t.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/reference/core-compat-api.multipleanalyticsapi",children:"MultipleAnalyticsApi"})}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"MultipleAnalyticsApi.fromApis([\n  SomeAnalyticsApi.fromConfig(configApi),\n  new CustomAnalyticsApi(),\n]);\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,r,i)=>{var t=i(296540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,i){var t,a={},p=null,o=null;for(t in void 0!==i&&(p=""+i),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(o=r.ref),r)c.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:n,type:e,key:p,ref:o,props:a,_owner:s.current}}r.Fragment=a,r.jsx=p,r.jsxs=p},474848:(e,r,i)=>{e.exports=i(221020)},28453:(e,r,i)=>{i.d(r,{R:()=>c,x:()=>s});var t=i(296540);const n={},a=t.createContext(n);function c(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);