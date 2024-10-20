/*! For license information please see 6ccfca2a.fe3786ac.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[569890],{92188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var n=r(474848),s=r(28453);const c={id:"backend-test-utils.mockcredentials.user",title:"mockCredentials.user",description:"API reference for mockCredentials.user"},d=void 0,i={id:"reference/backend-test-utils.mockcredentials.user",title:"mockCredentials.user",description:"API reference for mockCredentials.user",source:"@site/versioned_docs/version-stable/reference/backend-test-utils.mockcredentials.user.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockcredentials.user",permalink:"/docs/reference/backend-test-utils.mockcredentials.user",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-test-utils.mockcredentials.user.md",tags:[],version:"stable",frontMatter:{id:"backend-test-utils.mockcredentials.user",title:"mockCredentials.user",description:"API reference for mockCredentials.user"}},o={},a=[{value:"Functions",id:"functions",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils",children:(0,n.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockcredentials",children:(0,n.jsx)(t.code,{children:"mockCredentials"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockcredentials.user",children:(0,n.jsx)(t.code,{children:"user"})})]}),"\n",(0,n.jsx)(t.p,{children:"Utilities related to user credentials."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"namespace user \n"})}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Function"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockcredentials.user.header",children:"header(userEntityRef)"})}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"Returns an authorization header with a mocked user token. If a payload is provided it will be encoded into the token and forwarded to the credentials object when authenticated by the mock auth service."}),"\n"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockcredentials.user.invalidheader",children:"invalidHeader()"})}),"\n"]}),(0,n.jsx)(t.td,{children:"\n"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockcredentials.user.invalidtoken",children:"invalidToken()"})}),"\n"]}),(0,n.jsx)(t.td,{children:"\n"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockcredentials.user.token",children:"token(userEntityRef)"})}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"Creates a mocked user token. If a payload is provided it will be encoded into the token and forwarded to the credentials object when authenticated by the mock auth service."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var n=r(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,c={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,n)&&!o.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:s,type:e,key:a,ref:l,props:c,_owner:i.current}}t.Fragment=c,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>i});var n=r(296540);const s={},c=n.createContext(s);function d(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);