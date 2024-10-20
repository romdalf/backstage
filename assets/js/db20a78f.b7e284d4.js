/*! For license information please see db20a78f.b7e284d4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[726417],{106953:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=t(474848),o=t(28453);const a={id:"frontend-app-api.createapproutebinder",title:"CreateAppRouteBinder",description:"API reference for CreateAppRouteBinder"},p=void 0,c={id:"reference/frontend-app-api.createapproutebinder",title:"CreateAppRouteBinder",description:"API reference for CreateAppRouteBinder",source:"@site/versioned_docs/version-stable/reference/frontend-app-api.createapproutebinder.md",sourceDirName:"reference",slug:"/reference/frontend-app-api.createapproutebinder",permalink:"/docs/reference/frontend-app-api.createapproutebinder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-app-api.createapproutebinder.md",tags:[],version:"stable",frontMatter:{id:"frontend-app-api.createapproutebinder",title:"CreateAppRouteBinder",description:"API reference for CreateAppRouteBinder"}},s={},i=[];function d(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/frontend-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/frontend-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/frontend-app-api.createapproutebinder",children:(0,n.jsx)(r.code,{children:"CreateAppRouteBinder"})})]}),"\n",(0,n.jsxs)(r.p,{children:["A function that can bind from external routes of a given plugin, to concrete routes of other plugins. See ",(0,n.jsx)(r.a,{href:"/docs/reference/frontend-defaults.createapp",children:"createApp()"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type CreateAppRouteBinder = <TExternalRoutes extends {\n    [name: string]: ExternalRouteRef;\n}>(externalRoutes: TExternalRoutes, targetRoutes: PartialKeys<TargetRouteMap<TExternalRoutes>, KeysWithType<TExternalRoutes, ExternalRouteRef<any>>>) => void;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/frontend-plugin-api.externalrouteref",children:"ExternalRouteRef"})]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,a={},i=null,d=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(d=r.ref),r)p.call(r,n)&&!s.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:d,props:a,_owner:c.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>p,x:()=>c});var n=t(296540);const o={},a=n.createContext(o);function p(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);