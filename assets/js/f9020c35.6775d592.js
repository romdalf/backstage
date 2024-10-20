/*! For license information please see f9020c35.6775d592.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[742061],{896712:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(474848),i=n(28453);const o={id:"plugin-permission-react.permissionedroute",title:"PermissionedRoute()",description:"API reference for PermissionedRoute()"},t=void 0,c={id:"reference/plugin-permission-react.permissionedroute",title:"PermissionedRoute()",description:"API reference for PermissionedRoute()",source:"@site/versioned_docs/version-stable/reference/plugin-permission-react.permissionedroute.md",sourceDirName:"reference",slug:"/reference/plugin-permission-react.permissionedroute",permalink:"/docs/reference/plugin-permission-react.permissionedroute",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-permission-react.permissionedroute.md",tags:[],version:"stable",frontMatter:{id:"plugin-permission-react.permissionedroute",title:"PermissionedRoute()",description:"API reference for PermissionedRoute()"}},d={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-react",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-permission-react"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.permissionedroute",children:(0,s.jsx)(r.code,{children:"PermissionedRoute"})})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"Warning: This API is now obsolete."}),"\n",(0,s.jsxs)(r.p,{children:["This component no longer works with the most recent version of ",(0,s.jsx)(r.code,{children:"@backstage/core-app-api"})," and react-router v6, use ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-react.requirepermission",children:"RequirePermission()"})," instead."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Returns a React Router Route which only renders the element when authorized. If unauthorized, the Route will render a NotFoundErrorPage (see ",(0,s.jsx)(r.a,{href:"/docs/reference/core-app-api.appcomponents",children:"AppComponents"}),")."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"PermissionedRoute: (props: {\n    caseSensitive?: boolean;\n    children?: ReactNode;\n    element?: ReactElement | null;\n    path?: string;\n    errorComponent?: ReactElement | null;\n} & ({\n    permission: Exclude<Permission, ResourcePermission>;\n    resourceRef?: never;\n} | {\n    permission: ResourcePermission;\n    resourceRef: string | undefined;\n})) => React.JSX.Element\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"props"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["{ caseSensitive?: boolean; children?: ReactNode; element?: ReactElement | null; path?: string; errorComponent?: ReactElement | null; } & ({ permission: Exclude<",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.permission",children:"Permission"}),", ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"}),">; resourceRef?: never; } | { permission: ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.resourcepermission",children:"ResourcePermission"}),"; resourceRef: string | undefined; })"]}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,s.jsx)(r.p,{children:"React.JSX.Element"})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var s=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,o={},l=null,a=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)t.call(r,s)&&!d.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:i,type:e,key:l,ref:a,props:o,_owner:c.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>c});var s=n(296540);const i={},o=s.createContext(i);function t(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);