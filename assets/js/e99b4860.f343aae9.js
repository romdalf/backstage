/*! For license information please see e99b4860.f343aae9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[82818],{748969:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>s});var n=t(474848),o=t(28453);const p={id:"core-app-api.approutebinder",title:"AppRouteBinder",description:"API reference for AppRouteBinder"},c=void 0,a={id:"reference/core-app-api.approutebinder",title:"AppRouteBinder",description:"API reference for AppRouteBinder",source:"@site/../docs/reference/core-app-api.approutebinder.md",sourceDirName:"reference",slug:"/reference/core-app-api.approutebinder",permalink:"/docs/next/reference/core-app-api.approutebinder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-app-api.approutebinder.md",tags:[],version:"current",frontMatter:{id:"core-app-api.approutebinder",title:"AppRouteBinder",description:"API reference for AppRouteBinder"}},i={},s=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.approutebinder",children:(0,n.jsx)(r.code,{children:"AppRouteBinder"})})]}),"\n",(0,n.jsxs)(r.p,{children:["A function that can bind from external routes of a given plugin, to concrete routes of other plugins. See ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-app-api.createspecializedapp",children:"createSpecializedApp()"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type AppRouteBinder = <ExternalRoutes extends {\n    [name: string]: ExternalRouteRef;\n}>(externalRoutes: ExternalRoutes, targetRoutes: PartialKeys<TargetRouteMap<ExternalRoutes>, KeysWithType<ExternalRoutes, ExternalRouteRef<any, true>>>) => void;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-plugin-api.externalrouteref",children:"ExternalRouteRef"})]})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),p=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,p={},s=null,d=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,n)&&!i.hasOwnProperty(n)&&(p[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===p[n]&&(p[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:d,props:p,_owner:a.current}}r.Fragment=p,r.jsx=s,r.jsxs=s},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>a});var n=t(296540);const o={},p=n.createContext(o);function c(e){const r=n.useContext(p);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(p.Provider,{value:r},e.children)}}}]);