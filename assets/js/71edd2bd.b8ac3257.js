/*! For license information please see 71edd2bd.b8ac3257.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[915680],{391466:(e,c,o)=>{o.r(c),o.d(c,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>i});var r=o(474848),t=o(28453);const n={id:"plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions",title:"TechDocsCollatorFactoryOptions",description:"API reference for TechDocsCollatorFactoryOptions"},s=void 0,a={id:"reference/plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions",title:"TechDocsCollatorFactoryOptions",description:"API reference for TechDocsCollatorFactoryOptions",source:"@site/../docs/reference/plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions",permalink:"/docs/next/reference/plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions",title:"TechDocsCollatorFactoryOptions",description:"API reference for TechDocsCollatorFactoryOptions"}},l={},i=[];function d(e){const c={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(c.a,{href:"/docs/next/reference/plugin-search-backend-module-techdocs",children:(0,r.jsx)(c.code,{children:"@backstage/plugin-search-backend-module-techdocs"})})," > ",(0,r.jsx)(c.a,{href:"/docs/next/reference/plugin-search-backend-module-techdocs.techdocscollatorfactoryoptions",children:(0,r.jsx)(c.code,{children:"TechDocsCollatorFactoryOptions"})})]}),"\n",(0,r.jsxs)(c.blockquote,{children:["\n",(0,r.jsx)(c.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(c.p,{children:["This type is deprecated along with the ",(0,r.jsx)(c.a,{href:"/docs/next/reference/plugin-search-backend-module-techdocs.defaulttechdocscollatorfactory",children:"DefaultTechDocsCollatorFactory"}),"."]}),"\n"]}),"\n",(0,r.jsx)(c.p,{children:"Options to configure the TechDocs collator factory"}),"\n",(0,r.jsx)(c.p,{children:(0,r.jsx)(c.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-typescript",children:"export type TechDocsCollatorFactoryOptions = {\n    discovery: DiscoveryService;\n    logger: LoggerService;\n    tokenManager?: TokenManager;\n    auth?: AuthService;\n    httpAuth?: HttpAuthService;\n    locationTemplate?: string;\n    catalogClient?: CatalogApi;\n    parallelismLimit?: number;\n    legacyPathCasing?: boolean;\n    entityTransformer?: TechDocsCollatorEntityTransformer;\n    documentTransformer?: TechDocsCollatorDocumentTransformer;\n};\n"})}),"\n",(0,r.jsxs)(c.p,{children:[(0,r.jsx)(c.strong,{children:"References:"})," ",(0,r.jsx)(c.a,{href:"/docs/next/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"}),", ",(0,r.jsx)(c.a,{href:"/docs/next/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),", ",(0,r.jsx)(c.a,{href:"/docs/next/reference/backend-plugin-api.authservice",children:"AuthService"}),", ",(0,r.jsx)(c.a,{href:"/docs/next/reference/backend-plugin-api.httpauthservice",children:"HttpAuthService"}),", ",(0,r.jsx)(c.a,{href:"/docs/next/reference/catalog-client.catalogapi",children:"CatalogApi"}),", ",(0,r.jsx)(c.a,{href:"/docs/next/reference/plugin-search-backend-module-techdocs.techdocscollatorentitytransformer",children:"TechDocsCollatorEntityTransformer"}),", ",(0,r.jsx)(c.a,{href:"/docs/next/reference/plugin-search-backend-module-techdocs.techdocscollatordocumenttransformer",children:"TechDocsCollatorDocumentTransformer"})]})]})}function h(e={}){const{wrapper:c}={...(0,t.R)(),...e.components};return c?(0,r.jsx)(c,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,c,o)=>{var r=o(296540),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,c,o){var r,n={},i=null,d=null;for(r in void 0!==o&&(i=""+o),void 0!==c.key&&(i=""+c.key),void 0!==c.ref&&(d=c.ref),c)s.call(c,r)&&!l.hasOwnProperty(r)&&(n[r]=c[r]);if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===n[r]&&(n[r]=c[r]);return{$$typeof:t,type:e,key:i,ref:d,props:n,_owner:a.current}}c.Fragment=n,c.jsx=i,c.jsxs=i},474848:(e,c,o)=>{e.exports=o(221020)},28453:(e,c,o)=>{o.d(c,{R:()=>s,x:()=>a});var r=o(296540);const t={},n=r.createContext(t);function s(e){const c=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function a(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(n.Provider,{value:c},e.children)}}}]);