/*! For license information please see bea568a3.b732c998.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[144196],{946697:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(474848),s=t(28453);const i={id:"plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction",title:"createGitlabGroupEnsureExistsAction()",description:"API reference for createGitlabGroupEnsureExistsAction()"},c=void 0,o={id:"reference/plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction",title:"createGitlabGroupEnsureExistsAction()",description:"API reference for createGitlabGroupEnsureExistsAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction",permalink:"/docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction",title:"createGitlabGroupEnsureExistsAction()",description:"API reference for createGitlabGroupEnsureExistsAction()"}},a={},l=[{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-scaffolder-backend-module-gitlab"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-backend-module-gitlab.creategitlabgroupensureexistsaction",children:(0,n.jsx)(r.code,{children:"createGitlabGroupEnsureExistsAction"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Creates an ",(0,n.jsx)(r.code,{children:"gitlab:group:ensureExists"})," Scaffolder action."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'createGitlabGroupEnsureExistsAction: (options: {\n    integrations: ScmIntegrationRegistry;\n}) => import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    path: string[];\n    repoUrl: string;\n    token?: string | undefined;\n}, {\n    groupId?: number | undefined;\n}>\n'})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"options"}),"\n"]}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsxs)(r.p,{children:["{ integrations: ",(0,n.jsx)(r.a,{href:"/docs/reference/integration.scmintegrationregistry",children:"ScmIntegrationRegistry"}),"; }"]}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(r.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,n.jsx)(r.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),"<{ path: string[]; repoUrl: string; token?: string | undefined; }, { groupId?: number | undefined; }>"]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var n=t(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,i={},l=null,d=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:l,ref:d,props:i,_owner:o.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>o});var n=t(296540);const s={},i=n.createContext(s);function c(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);