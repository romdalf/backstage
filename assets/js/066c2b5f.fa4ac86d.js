/*! For license information please see 066c2b5f.fa4ac86d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[682601],{772871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(474848),s=n(28453);const i={id:"integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth"},c=void 0,d={id:"reference/integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth",source:"@site/versioned_docs/version-stable/reference/integration-react.scmauth.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth",permalink:"/docs/reference/integration-react.scmauth",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/integration-react.scmauth.md",tags:[],version:"stable",frontMatter:{id:"integration-react.scmauth",title:"ScmAuth",description:"API reference for ScmAuth"}},h={},a=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/integration-react",children:(0,r.jsx)(t.code,{children:"@backstage/integration-react"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth",children:(0,r.jsx)(t.code,{children:"ScmAuth"})})]}),"\n",(0,r.jsx)(t.p,{children:"An implementation of the ScmAuthApi that merges together OAuthApi instances to form a single instance that can handles authentication for multiple providers."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ScmAuth implements ScmAuthApi \n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Implements:"})," ",(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauthapi",children:"ScmAuthApi"})]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"// Supports authentication towards both public GitHub and GHE:\ncreateApiFactory({\n  api: scmAuthApiRef,\n  deps: {\n    gheAuthApi: gheAuthApiRef,\n    githubAuthApi: githubAuthApiRef,\n  },\n  factory: ({ githubAuthApi, gheAuthApi }) =>\n    ScmAuth.merge(\n      ScmAuth.forGithub(githubAuthApi),\n      ScmAuth.forGithub(gheAuthApi, {\n        host: 'ghe.example.com',\n      }),\n    )\n})\n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.createdefaultapifactory",children:"createDefaultApiFactory()"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates an API factory that enables auth for each of the default SCM providers."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forauthapi",children:"forAuthApi(authApi, options)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates a general purpose ScmAuth instance with a custom scope mapping."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forazure",children:"forAzure(microsoftAuthApi, options)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards Azure."}),"\n",(0,r.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,r.jsx)(t.code,{children:"dev.azure.com"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The default scopes are:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"vso.build vso.code vso.graph vso.project vso.profile"})}),"\n",(0,r.jsxs)(t.p,{children:["If the additional ",(0,r.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"vso.code_manage"})}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forbitbucket",children:"forBitbucket(bitbucketAuthApi, options)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards Bitbucket."}),"\n",(0,r.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,r.jsx)(t.code,{children:"bitbucket.org"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The default scopes are:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"account team pullrequest snippet issue"})}),"\n",(0,r.jsxs)(t.p,{children:["If the additional ",(0,r.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"pullrequest:write snippet:write issue:write"})}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forbitbucketserver",children:"forBitbucketServer(bitbucketAuthApi, options)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards Bitbucket Server."}),"\n",(0,r.jsx)(t.p,{children:"The host option determines which URLs that are handled by this instance."}),"\n",(0,r.jsx)(t.p,{children:"The default scopes are:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"PUBLIC_REPOS REPOS_READ"})}),"\n",(0,r.jsxs)(t.p,{children:["If the additional ",(0,r.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"REPO_WRITE"})}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forgithub",children:"forGithub(githubAuthApi, options)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards GitHub."}),"\n",(0,r.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,r.jsx)(t.code,{children:"github.com"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The default scopes are:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"repo read:org read:user"})}),"\n",(0,r.jsxs)(t.p,{children:["If the additional ",(0,r.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"gist"})}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.forgitlab",children:"forGitlab(gitlabAuthApi, options)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Creates a new ScmAuth instance that handles authentication towards GitLab."}),"\n",(0,r.jsxs)(t.p,{children:["The host option determines which URLs that are handled by this instance and defaults to ",(0,r.jsx)(t.code,{children:"gitlab.com"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The default scopes are:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"read_user read_api read_repository"})}),"\n",(0,r.jsxs)(t.p,{children:["If the additional ",(0,r.jsx)(t.code,{children:"repoWrite"})," permission is requested, these scopes are added:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"write_repository api"})}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.getcredentials",children:"getCredentials(options)"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Fetches credentials for the given resource."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.isurlsupported",children:"isUrlSupported(url)"})}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Checks whether the implementation is able to provide authentication for the given URL."}),"\n"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/integration-react.scmauth.merge",children:"merge(providers)"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"Merges together multiple ScmAuth instances into one that routes requests to the correct instance based on the URL."}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,i={},a=null,o=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:d.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var r=n(296540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);