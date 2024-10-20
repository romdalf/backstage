/*! For license information please see 35d107c0.f040c735.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[930580],{469998:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(474848),r=s(28453);const o={id:"plugin-permission-common.permissionclient",title:"PermissionClient",description:"API reference for PermissionClient"},t=void 0,c={id:"reference/plugin-permission-common.permissionclient",title:"PermissionClient",description:"API reference for PermissionClient",source:"@site/../docs/reference/plugin-permission-common.permissionclient.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.permissionclient",permalink:"/docs/next/reference/plugin-permission-common.permissionclient",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-permission-common.permissionclient.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.permissionclient",title:"PermissionClient",description:"API reference for PermissionClient"}},l={},d=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissionclient",children:(0,i.jsx)(n.code,{children:"PermissionClient"})})]}),"\n",(0,i.jsx)(n.p,{children:"An isomorphic client for requesting authorization for Backstage permissions."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"class PermissionClient implements PermissionEvaluator \n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Implements:"})," ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"})]}),"\n",(0,i.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Constructor"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissionclient._constructor_",children:"(constructor)(options)"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Constructs a new instance of the ",(0,i.jsx)(n.code,{children:"PermissionClient"})," class"]}),"\n"]})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Method"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissionclient.authorize",children:"authorize(requests, options)"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Evaluates ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permission",children:"Permissions"})," and returns a definitive decision."]}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissionclient.authorizeconditional",children:"authorizeConditional(queries, options)"})}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["Evaluates ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.resourcepermission",children:"ResourcePermissions"})," and returns both definitive and conditional decisions, depending on the configured ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-node.permissionpolicy",children:"PermissionPolicy"}),". This method is useful when the caller needs more control over the processing of conditional decisions. For example, a plugin backend may want to use ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-permission-common.permissioncriteria",children:"conditions"})," in a database query instead of evaluating each resource in memory."]}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},221020:(e,n,s)=>{var i=s(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,s){var i,o={},d=null,m=null;for(i in void 0!==s&&(d=""+s),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(m=n.ref),n)t.call(n,i)&&!l.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:m,props:o,_owner:c.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(296540);const r={},o=i.createContext(r);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);