/*! For license information please see 1621749d.accdd54b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[147867],{713213:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var t=r(474848),s=r(28453);const c={id:"plugin-search-backend-module-pg.databasestore.insertdocuments",title:"DatabaseStore.insertDocuments()",description:"API reference for DatabaseStore.insertDocuments()"},a=void 0,d={id:"reference/plugin-search-backend-module-pg.databasestore.insertdocuments",title:"DatabaseStore.insertDocuments()",description:"API reference for DatabaseStore.insertDocuments()",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-module-pg.databasestore.insertdocuments.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-pg.databasestore.insertdocuments",permalink:"/docs/reference/plugin-search-backend-module-pg.databasestore.insertdocuments",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-backend-module-pg.databasestore.insertdocuments.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-module-pg.databasestore.insertdocuments",title:"DatabaseStore.insertDocuments()",description:"API reference for DatabaseStore.insertDocuments()"}},o={},i=[{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-pg",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-module-pg"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-pg.databasestore",children:(0,t.jsx)(n.code,{children:"DatabaseStore"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-module-pg.databasestore.insertdocuments",children:(0,t.jsx)(n.code,{children:"insertDocuments"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"insertDocuments(tx: Knex.Transaction, type: string, documents: IndexableDocument[]): Promise<void>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"tx"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Knex.Transaction"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"type"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"string"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"documents"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-common.indexabledocument",children:"IndexableDocument"}),"[]"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:"Promise<void>"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,r){var t,c={},i=null,l=null;for(t in void 0!==r&&(i=""+r),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!o.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:s,type:e,key:i,ref:l,props:c,_owner:d.current}}n.Fragment=c,n.jsx=i,n.jsxs=i},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>d});var t=r(296540);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);