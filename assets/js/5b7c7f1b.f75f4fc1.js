/*! For license information please see 5b7c7f1b.f75f4fc1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[944346],{880078:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(474848),s=r(28453);const i={id:"frontend-plugin-api.frontendplugin",title:"FrontendPlugin",description:"API reference for FrontendPlugin"},d=void 0,o={id:"reference/frontend-plugin-api.frontendplugin",title:"FrontendPlugin",description:"API reference for FrontendPlugin",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.frontendplugin.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.frontendplugin",permalink:"/docs/reference/frontend-plugin-api.frontendplugin",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-plugin-api.frontendplugin.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.frontendplugin",title:"FrontendPlugin",description:"API reference for FrontendPlugin"}},c={},l=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin",children:(0,t.jsx)(n.code,{children:"FrontendPlugin"})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"export interface FrontendPlugin<TRoutes extends AnyRoutes = AnyRoutes, TExternalRoutes extends AnyExternalRoutes = AnyExternalRoutes, TExtensionMap extends {\n    [id in string]: ExtensionDefinition;\n} = {\n    [id in string]: ExtensionDefinition;\n}> \n"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Property"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin.__type",children:"$$type"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"readonly"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"'@backstage/FrontendPlugin'"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin.externalroutes",children:"externalRoutes"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"readonly"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"TExternalRoutes"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin.id",children:"id"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"readonly"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"string"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin.routes",children:"routes"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"readonly"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"TRoutes"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin.getextension",children:"getExtension(id)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.frontendplugin.withoverrides",children:"withOverrides(options)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,h=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)d.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:h,props:i,_owner:o.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>o});var t=r(296540);const s={},i=t.createContext(s);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);