/*! For license information please see 1fce9af1.ade25256.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[515791],{379392:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>p,toc:()=>o});var t=r(474848),a=r(28453);const c={id:"frontend-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"},i=void 0,p={id:"reference/frontend-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()",source:"@site/../docs/reference/frontend-app-api.createspecializedapp.md",sourceDirName:"reference",slug:"/reference/frontend-app-api.createspecializedapp",permalink:"/docs/next/reference/frontend-app-api.createspecializedapp",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-app-api.createspecializedapp.md",tags:[],version:"current",frontMatter:{id:"frontend-app-api.createspecializedapp",title:"createSpecializedApp()",description:"API reference for createSpecializedApp()"}},s={},o=[{value:"Parameters",id:"parameters",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/frontend-app-api",children:(0,t.jsx)(n.code,{children:"@backstage/frontend-app-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/frontend-app-api.createspecializedapp",children:(0,t.jsx)(n.code,{children:"createSpecializedApp"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Creates an empty app without any default features. This is a low-level API is intended for use in tests or specialized setups. Typically wou want to use ",(0,t.jsx)(n.code,{children:"createApp"})," from ",(0,t.jsx)(n.code,{children:"@backstage/frontend-defaults"})," instead."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function createSpecializedApp(options?: {\n    features?: FrontendFeature[];\n    config?: ConfigApi;\n    bindRoutes?(context: {\n        bind: CreateAppRouteBinder;\n    }): void;\n}): {\n    createRoot(): JSX.Element;\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"options"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["{ features?: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/frontend-app-api.frontendfeature",children:"FrontendFeature"}),"[]; config?: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.configapi",children:"ConfigApi"}),"; bindRoutes?(context: { bind: ",(0,t.jsx)(n.a,{href:"/docs/next/reference/frontend-app-api.createapproutebinder",children:"CreateAppRouteBinder"}),"; }): void; }"]}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:"{ createRoot(): JSX.Element; }"})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,c={},o=null,d=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!s.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:a,type:e,key:o,ref:d,props:c,_owner:p.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>p});var t=r(296540);const a={},c=t.createContext(a);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);