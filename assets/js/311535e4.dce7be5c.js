/*! For license information please see 311535e4.dce7be5c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[693406],{524695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var c=n(474848),r=n(28453);const s={id:"plugin-techdocs-react.techdocsstorageapi.syncentitydocs",title:"TechDocsStorageApi.syncEntityDocs()",description:"API reference for TechDocsStorageApi.syncEntityDocs()"},o=void 0,i={id:"reference/plugin-techdocs-react.techdocsstorageapi.syncentitydocs",title:"TechDocsStorageApi.syncEntityDocs()",description:"API reference for TechDocsStorageApi.syncEntityDocs()",source:"@site/../docs/reference/plugin-techdocs-react.techdocsstorageapi.syncentitydocs.md",sourceDirName:"reference",slug:"/reference/plugin-techdocs-react.techdocsstorageapi.syncentitydocs",permalink:"/docs/next/reference/plugin-techdocs-react.techdocsstorageapi.syncentitydocs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-techdocs-react.techdocsstorageapi.syncentitydocs.md",tags:[],version:"current",frontMatter:{id:"plugin-techdocs-react.techdocsstorageapi.syncentitydocs",title:"TechDocsStorageApi.syncEntityDocs()",description:"API reference for TechDocsStorageApi.syncEntityDocs()"}},d={},a=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-react",children:(0,c.jsx)(t.code,{children:"@backstage/plugin-techdocs-react"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-react.techdocsstorageapi",children:(0,c.jsx)(t.code,{children:"TechDocsStorageApi"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-react.techdocsstorageapi.syncentitydocs",children:(0,c.jsx)(t.code,{children:"syncEntityDocs"})})]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-typescript",children:"syncEntityDocs(entityId: CompoundEntityRef, logHandler?: (line: string) => void): Promise<SyncResult>;\n"})}),"\n",(0,c.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"entityId"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"})}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"logHandler"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"(line: string) => void"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,c.jsxs)(t.p,{children:["Promise<",(0,c.jsx)(t.a,{href:"/docs/next/reference/plugin-techdocs-react.syncresult",children:"SyncResult"}),">"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var c=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var c,s={},a=null,l=null;for(c in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,c)&&!d.hasOwnProperty(c)&&(s[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===s[c]&&(s[c]=t[c]);return{$$typeof:r,type:e,key:a,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var c=n(296540);const r={},s=c.createContext(r);function o(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);