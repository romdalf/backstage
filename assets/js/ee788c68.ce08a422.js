/*! For license information please see ee788c68.ce08a422.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[869045],{406934:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var t=n(474848),o=n(28453);const a={id:"core-plugin-api.makesubrouteref",title:"MakeSubRouteRef",description:"API reference for MakeSubRouteRef"},s=void 0,c={id:"reference/core-plugin-api.makesubrouteref",title:"MakeSubRouteRef",description:"API reference for MakeSubRouteRef",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.makesubrouteref.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.makesubrouteref",permalink:"/docs/reference/core-plugin-api.makesubrouteref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.makesubrouteref.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.makesubrouteref",title:"MakeSubRouteRef",description:"API reference for MakeSubRouteRef"}},i={},u=[];function p(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.makesubrouteref",children:(0,t.jsx)(r.code,{children:"MakeSubRouteRef"})})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsx)(r.p,{children:"this type is deprecated and will be removed in the future"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Creates a SubRouteRef type given the desired parameters and parent route parameters. The parameters types are merged together while ensuring that there is no overlap between the two."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type MakeSubRouteRef<Params extends {\n    [param in string]: string;\n}, ParentParams extends AnyParams> = keyof Params & keyof ParentParams extends never ? SubRouteRef<OptionalParams<MergeParams<Params, ParentParams>>> : never;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.anyparams",children:"AnyParams"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.subrouteref",children:"SubRouteRef"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.optionalparams",children:"OptionalParams"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/core-plugin-api.mergeparams",children:"MergeParams"})]})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,n){var t,a={},u=null,p=null;for(t in void 0!==n&&(u=""+n),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,t)&&!i.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:o,type:e,key:u,ref:p,props:a,_owner:c.current}}r.Fragment=a,r.jsx=u,r.jsxs=u},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>c});var t=n(296540);const o={},a=t.createContext(o);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);