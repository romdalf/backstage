/*! For license information please see d6dc5681.8b5da56f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[447422],{63691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(474848),o=n(28453);const i={id:"plugin-catalog-node.entityprovidermutation",title:"EntityProviderMutation",description:"API reference for EntityProviderMutation"},a=void 0,c={id:"reference/plugin-catalog-node.entityprovidermutation",title:"EntityProviderMutation",description:"API reference for EntityProviderMutation",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-node.entityprovidermutation.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-node.entityprovidermutation",permalink:"/docs/reference/plugin-catalog-node.entityprovidermutation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-node.entityprovidermutation.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-node.entityprovidermutation",title:"EntityProviderMutation",description:"API reference for EntityProviderMutation"}},d={},s=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-node"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.entityprovidermutation",children:(0,r.jsx)(t.code,{children:"EntityProviderMutation"})})]}),"\n",(0,r.jsx)(t.p,{children:"A 'full' mutation replaces all existing entities created by this entity provider with new ones. A 'delta' mutation can both add and remove entities provided by this provider. Previously provided entities from a 'full' mutation are not removed."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type EntityProviderMutation = {\n    type: 'full';\n    entities: DeferredEntity[];\n} | {\n    type: 'delta';\n    added: DeferredEntity[];\n    removed: (DeferredEntity | {\n        entityRef: string;\n        locationKey?: string;\n    })[];\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-catalog-node.deferredentity",children:"DeferredEntity"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=s,t.jsxs=s},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(296540);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);