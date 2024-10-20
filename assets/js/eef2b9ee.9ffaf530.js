/*! For license information please see eef2b9ee.9ffaf530.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[387292],{407928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var c=r(474848),n=r(28453);const s={id:"plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects",title:"BitbucketServerClient.listProjects()",description:"API reference for BitbucketServerClient.listProjects()"},i=void 0,o={id:"reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects",title:"BitbucketServerClient.listProjects()",description:"API reference for BitbucketServerClient.listProjects()",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects",permalink:"/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects",title:"BitbucketServerClient.listProjects()",description:"API reference for BitbucketServerClient.listProjects()"}},l={},a=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,c.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-bitbucket-server",children:(0,c.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-bitbucket-server"})})," > ",(0,c.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient",children:(0,c.jsx)(t.code,{children:"BitbucketServerClient"})})," > ",(0,c.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverclient.listprojects",children:(0,c.jsx)(t.code,{children:"listProjects"})})]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-typescript",children:"listProjects(options: {\n        listOptions?: BitbucketServerListOptions;\n    }): Promise<BitbucketServerPagedResponse<BitbucketServerProject>>;\n"})}),"\n",(0,c.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Type"}),"\n"]}),(0,c.jsxs)(t.th,{children:["\n",(0,c.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,c.jsx)(t.tbody,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["\n",(0,c.jsx)(t.p,{children:"options"}),"\n"]}),(0,c.jsxs)(t.td,{children:["\n",(0,c.jsxs)(t.p,{children:["{ listOptions?: ",(0,c.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverlistoptions",children:"BitbucketServerListOptions"}),"; }"]}),"\n"]}),(0,c.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,c.jsxs)(t.p,{children:["Promise<",(0,c.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverpagedresponse",children:"BitbucketServerPagedResponse"}),"<",(0,c.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-bitbucket-server.bitbucketserverproject",children:"BitbucketServerProject"}),">>"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},221020:(e,t,r)=>{var c=r(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var c,s={},a=null,d=null;for(c in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,c)&&!l.hasOwnProperty(c)&&(s[c]=t[c]);if(e&&e.defaultProps)for(c in t=e.defaultProps)void 0===s[c]&&(s[c]=t[c]);return{$$typeof:n,type:e,key:a,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var c=r(296540);const n={},s=c.createContext(n);function i(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);