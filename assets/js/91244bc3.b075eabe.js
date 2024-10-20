/*! For license information please see 91244bc3.b075eabe.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[923039],{731950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(474848),i=t(28453);const s={id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",title:"IncrementalEntityProviderOptions",description:"API reference for IncrementalEntityProviderOptions"},c=void 0,o={id:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",title:"IncrementalEntityProviderOptions",description:"API reference for IncrementalEntityProviderOptions",source:"@site/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",permalink:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",title:"IncrementalEntityProviderOptions",description:"API reference for IncrementalEntityProviderOptions"}},l={},d=[{value:"Properties",id:"properties",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",children:(0,r.jsx)(n.code,{children:"IncrementalEntityProviderOptions"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface IncrementalEntityProviderOptions \n"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Property"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.backoff",children:"backoff?"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"DurationObjectUnits[]"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," In the event of an error during an ingestion burst, the backoff determines how soon it will be retried. E.g. ",(0,r.jsx)(n.code,{children:"[{ minutes: 1}, { minutes: 5}, {minutes: 30 }, { hours: 3 }]"})]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.burstinterval",children:"burstInterval"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"DurationObjectUnits"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Entities are ingested in bursts. This interval determines how much time to wait in between each burst."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.burstlength",children:"burstLength"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"DurationObjectUnits"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Entities are ingested in bursts. This value determines how long to keep ingesting within each burst."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.rejectemptysourcecollections",children:"rejectEmptySourceCollections?"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"boolean"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," Similar to the rejectRemovalsAbovePercentage, this option prevents removals in circumstances where a data source has improperly returned 0 assets. If set to ",(0,r.jsx)(n.code,{children:"true"}),", Backstage will reject removals when that happens."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.rejectremovalsabovepercentage",children:"rejectRemovalsAbovePercentage?"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"number"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"(Optional)"})," If an error occurs at a data source that results in a large number of assets being inadvertently removed, it will result in Backstage removing all associated entities. To avoid that, set a percentage of entities past which removal will be disallowed."]}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/next/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.restlength",children:"restLength"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"DurationObjectUnits"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"After a successful ingestion, the incremental entity provider will rest for this period of time before starting to ingest again."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:a,props:s,_owner:o.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(296540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);