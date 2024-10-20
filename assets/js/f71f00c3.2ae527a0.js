/*! For license information please see f71f00c3.2ae527a0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[384785],{940545:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var s=n(474848),i=n(28453);const t={id:"plugin-permission-common.createpermission",title:"createPermission()",description:"API reference for createPermission()"},o=void 0,c={id:"reference/plugin-permission-common.createpermission",title:"createPermission()",description:"API reference for createPermission()",source:"@site/../docs/reference/plugin-permission-common.createpermission.md",sourceDirName:"reference",slug:"/reference/plugin-permission-common.createpermission",permalink:"/docs/next/reference/plugin-permission-common.createpermission",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-permission-common.createpermission.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-common.createpermission",title:"createPermission()",description:"API reference for createPermission()"}},a={},p=[{value:"Parameters",id:"parameters",level:2}];function m(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-permission-common"})})," > ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.createpermission",children:(0,s.jsx)(r.code,{children:"createPermission"})})]}),"\n",(0,s.jsxs)(r.p,{children:["Utility function for creating a valid ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"}),", inferring the appropriate type and resource type parameter."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"function createPermission<TResourceType extends string>(input: {\n    name: string;\n    attributes: PermissionAttributes;\n    resourceType: TResourceType;\n}): ResourcePermission<TResourceType>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"input"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["{ name: string; attributes: ",(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.permissionattributes",children:"PermissionAttributes"}),"; resourceType: TResourceType; }"]}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/next/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"}),"<TResourceType>"]})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},221020:(e,r,n)=>{var s=n(296540),i=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var s,t={},p=null,m=null;for(s in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(m=r.ref),r)o.call(r,s)&&!a.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:i,type:e,key:p,ref:m,props:t,_owner:c.current}}r.Fragment=t,r.jsx=p,r.jsxs=p},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>c});var s=n(296540);const i={},t=s.createContext(i);function o(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);