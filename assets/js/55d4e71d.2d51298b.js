/*! For license information please see 55d4e71d.2d51298b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[867082],{384186:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=n(474848),t=n(28453);const c={id:"plugin-search-backend.routeroptions",title:"RouterOptions",description:"API reference for RouterOptions"},s=void 0,i={id:"reference/plugin-search-backend.routeroptions",title:"RouterOptions",description:"API reference for RouterOptions",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend.routeroptions.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend.routeroptions",permalink:"/docs/reference/plugin-search-backend.routeroptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-backend.routeroptions.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend.routeroptions",title:"RouterOptions",description:"API reference for RouterOptions"}},a={},d=[];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-search-backend",children:(0,o.jsx)(r.code,{children:"@backstage/plugin-search-backend"})})," > ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-search-backend.routeroptions",children:(0,o.jsx)(r.code,{children:"RouterOptions"})})]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,o.jsx)(r.p,{children:"Please migrate to the new backend system as this will be removed in the future."}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"export type RouterOptions = {\n    engine: SearchEngine;\n    types: Record<string, DocumentTypeInfo>;\n    discovery?: DiscoveryService;\n    permissions: PermissionEvaluator | PermissionAuthorizer;\n    config: Config;\n    logger: LoggerService;\n    auth?: AuthService;\n    httpAuth?: HttpAuthService;\n};\n"})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"References:"})," ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-search-backend-node.searchengine",children:"SearchEngine"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-search-common.documenttypeinfo",children:"DocumentTypeInfo"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionevaluator",children:"PermissionEvaluator"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permissionauthorizer",children:"PermissionAuthorizer"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/config.config",children:"Config"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.authservice",children:"AuthService"}),", ",(0,o.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.httpauthservice",children:"HttpAuthService"})]})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},221020:(e,r,n)=>{var o=n(296540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var o,c={},d=null,p=null;for(o in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,o)&&!a.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{$$typeof:t,type:e,key:d,ref:p,props:c,_owner:i.current}}r.Fragment=c,r.jsx=d,r.jsxs=d},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var o=n(296540);const t={},c=o.createContext(t);function s(e){const r=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(c.Provider,{value:r},e.children)}}}]);