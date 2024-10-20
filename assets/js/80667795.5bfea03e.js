/*! For license information please see 80667795.5bfea03e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[26763],{962361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=r(474848),s=r(28453);const c={id:"integration-react.scmauth.forgithub",title:"ScmAuth.forGithub()",description:"API reference for ScmAuth.forGithub()"},i=void 0,o={id:"reference/integration-react.scmauth.forgithub",title:"ScmAuth.forGithub()",description:"API reference for ScmAuth.forGithub()",source:"@site/versioned_docs/version-stable/reference/integration-react.scmauth.forgithub.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth.forgithub",permalink:"/docs/reference/integration-react.scmauth.forgithub",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/integration-react.scmauth.forgithub.md",tags:[],version:"stable",frontMatter:{id:"integration-react.scmauth.forgithub",title:"ScmAuth.forGithub()",description:"API reference for ScmAuth.forGithub()"}},a={},h=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration-react",children:(0,n.jsx)(t.code,{children:"@backstage/integration-react"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth",children:(0,n.jsx)(t.code,{children:"ScmAuth"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forgithub",children:(0,n.jsx)(t.code,{children:"forGithub"})})]}),"\n",(0,n.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards GitHub."}),"\n",(0,n.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,n.jsx)(t.code,{children:"github.com"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The default scopes are:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"repo read:org read:user"})}),"\n",(0,n.jsxs)(t.p,{children:["If the additional ",(0,n.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"gist"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"static forGithub(githubAuthApi: OAuthApi, options?: {\n        host?: string;\n    }): ScmAuth;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"githubAuthApi"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/core-plugin-api.oauthapi",children:"OAuthApi"})}),"\n"]}),(0,n.jsx)(t.td,{children:"\n"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"options"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"{ host?: string; }"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth",children:"ScmAuth"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var n,c={},h=null,d=null;for(n in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:s,type:e,key:h,ref:d,props:c,_owner:o.current}}t.Fragment=c,t.jsx=h,t.jsxs=h},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(296540);const s={},c=n.createContext(s);function i(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);