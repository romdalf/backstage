/*! For license information please see 2f926495.2d96b8ed.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[506842],{147646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=r(474848),i=r(28453);const s={id:"integration.scmintegration.resolveediturl",title:"ScmIntegration.resolveEditUrl()",description:"API reference for ScmIntegration.resolveEditUrl()"},o=void 0,c={id:"reference/integration.scmintegration.resolveediturl",title:"ScmIntegration.resolveEditUrl()",description:"API reference for ScmIntegration.resolveEditUrl()",source:"@site/versioned_docs/version-stable/reference/integration.scmintegration.resolveediturl.md",sourceDirName:"reference",slug:"/reference/integration.scmintegration.resolveediturl",permalink:"/docs/reference/integration.scmintegration.resolveediturl",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/integration.scmintegration.resolveediturl.md",tags:[],version:"stable",frontMatter:{id:"integration.scmintegration.resolveediturl",title:"ScmIntegration.resolveEditUrl()",description:"API reference for ScmIntegration.resolveEditUrl()"}},l={},a=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration",children:(0,n.jsx)(t.code,{children:"@backstage/integration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.scmintegration",children:(0,n.jsx)(t.code,{children:"ScmIntegration"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration.scmintegration.resolveediturl",children:(0,n.jsx)(t.code,{children:"resolveEditUrl"})})]}),"\n",(0,n.jsx)(t.p,{children:"Resolves the edit URL for a file within the SCM system."}),"\n",(0,n.jsx)(t.p,{children:"Most SCM systems have a web interface that allows viewing and editing files in the repository. The returned URL directly jumps into the edit mode for the file. If this is not possible, the integration can fall back to a URL to view the file in the web interface."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"resolveEditUrl(url: string): string;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"url"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"string"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"The absolute URL to the file that should be edited."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsx)(t.p,{children:"string"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,t,r)=>{var n=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,d=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:a,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(296540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);