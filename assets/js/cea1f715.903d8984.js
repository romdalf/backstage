/*! For license information please see cea1f715.903d8984.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[679394],{559529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var c=n(474848),r=n(28453);const s={id:"catalog-client.catalogclient.getentityfacets",title:"CatalogClient.getEntityFacets()",description:"API reference for CatalogClient.getEntityFacets()"},a=void 0,i={id:"reference/catalog-client.catalogclient.getentityfacets",title:"CatalogClient.getEntityFacets()",description:"API reference for CatalogClient.getEntityFacets()",source:"@site/../docs/reference/catalog-client.catalogclient.getentityfacets.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogclient.getentityfacets",permalink:"/docs/next/reference/catalog-client.catalogclient.getentityfacets",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/catalog-client.catalogclient.getentityfacets.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogclient.getentityfacets",title:"CatalogClient.getEntityFacets()",description:"API reference for CatalogClient.getEntityFacets()"}},l={},o=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client",children:(0,c.jsx)(t.code,{children:"@backstage/catalog-client"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogclient",children:(0,c.jsx)(t.code,{children:"CatalogClient"})})," > ",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogclient.getentityfacets",children:(0,c.jsx)(t.code,{children:"getEntityFacets"})})]}),"\n",(0,c.jsx)(t.p,{children:"Gets a summary of field facets of entities in the catalog."}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-typescript",children:"getEntityFacets(request: GetEntityFacetsRequest, options?: CatalogRequestOptions): Promise<GetEntityFacetsResponse>;\n"})}),"\n",(0,c.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"request"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.getentityfacetsrequest",children:"GetEntityFacetsRequest"})}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"Request parameters"}),"\n"]})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"options"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.catalogrequestoptions",children:"CatalogRequestOptions"})}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.em,{children:"(Optional)"})," Additional options"]}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,c.jsxs)(t.p,{children:["Promise<",(0,c.jsx)(t.a,{href:"/docs/next/reference/catalog-client.getentityfacetsresponse",children:"GetEntityFacetsResponse"}),">"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var c=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var c,s={},o=null,d=null;for(c in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,c)&&!l.hasOwnProperty(c)&&(s[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===s[c]&&(s[c]=t[c]);return{$$typeof:r,type:e,key:o,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var c=n(296540);const r={},s=c.createContext(r);function a(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);