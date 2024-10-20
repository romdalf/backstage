/*! For license information please see d9010b59.e9a90b34.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[77939],{564917:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=o(474848),t=o(28453);const c={id:"frontend-plugin-api.iconcomponent",title:"IconComponent",description:"API reference for IconComponent"},i=void 0,s={id:"reference/frontend-plugin-api.iconcomponent",title:"IconComponent",description:"API reference for IconComponent",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.iconcomponent.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.iconcomponent",permalink:"/docs/reference/frontend-plugin-api.iconcomponent",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-plugin-api.iconcomponent.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.iconcomponent",title:"IconComponent",description:"API reference for IconComponent"}},a={},p=[{value:"Remarks",id:"remarks",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.iconcomponent",children:(0,r.jsx)(n.code,{children:"IconComponent"})})]}),"\n",(0,r.jsx)(n.p,{children:"IconComponent is the common icon type used throughout Backstage when working with and rendering generic icons, including the app system icons."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type IconComponent = ComponentType<{\n    fontSize?: 'medium' | 'large' | 'small' | 'inherit';\n}>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"The type is based on SvgIcon from Material UI, but we do not want the plugin-api package to have a dependency on Material UI, nor do we want the props to be as broad as the SvgIconProps interface."}),"\n",(0,r.jsx)(n.p,{children:"If you have the need to forward additional props from SvgIconProps, you can open an issue or submit a PR to the main Backstage repo. When doing so please also describe your use-case and reasoning of the addition."})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,o)=>{var r=o(296540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,o){var r,c={},p=null,d=null;for(r in void 0!==o&&(p=""+o),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:t,type:e,key:p,ref:d,props:c,_owner:s.current}}n.Fragment=c,n.jsx=p,n.jsxs=p},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>s});var r=o(296540);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);