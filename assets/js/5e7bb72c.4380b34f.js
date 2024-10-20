/*! For license information please see 5e7bb72c.4380b34f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[66290],{704827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(474848),c=r(28453);const o={id:"plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction",title:"createFetchCookiecutterAction()",description:"API reference for createFetchCookiecutterAction()"},i=void 0,s={id:"reference/plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction",title:"createFetchCookiecutterAction()",description:"API reference for createFetchCookiecutterAction()",source:"@site/../docs/reference/plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction",permalink:"/docs/next/reference/plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction.md",tags:[],version:"current",frontMatter:{id:"plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction",title:"createFetchCookiecutterAction()",description:"API reference for createFetchCookiecutterAction()"}},a={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-cookiecutter",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend-module-cookiecutter"})})," > ",(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-backend-module-cookiecutter.createfetchcookiecutteraction",children:(0,n.jsx)(t.code,{children:"createFetchCookiecutterAction"})})]}),"\n",(0,n.jsxs)(t.p,{children:["Creates a ",(0,n.jsx)(t.code,{children:"fetch:cookiecutter"})," Scaffolder action."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:'function createFetchCookiecutterAction(options: {\n    reader: UrlReaderService;\n    integrations: ScmIntegrations;\n    containerRunner?: ContainerRunner;\n}): import("@backstage/plugin-scaffolder-node").TemplateAction<{\n    url: string;\n    targetPath?: string | undefined;\n    values: JsonObject;\n    copyWithoutRender?: string[] | undefined;\n    extensions?: string[] | undefined;\n    imageName?: string | undefined;\n}, JsonObject>;\n'})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Type"}),"\n"]}),(0,n.jsxs)(t.th,{children:["\n",(0,n.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"options"}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsxs)(t.p,{children:["{ reader: ",(0,n.jsx)(t.a,{href:"/docs/next/reference/backend-plugin-api.urlreaderservice",children:"UrlReaderService"}),"; integrations: ",(0,n.jsx)(t.a,{href:"/docs/next/reference/integration.scmintegrations",children:"ScmIntegrations"}),"; containerRunner?: ContainerRunner; }"]}),"\n"]}),(0,n.jsxs)(t.td,{children:["\n",(0,n.jsx)(t.p,{children:"Templating configuration."}),"\n"]})]})})]}),"\n**Returns:**\n",(0,n.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,n.jsx)(t.a,{href:"/docs/next/reference/plugin-scaffolder-node.templateaction",children:"TemplateAction"}),"<{ url: string; targetPath?: string | undefined; values: ",(0,n.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),"; copyWithoutRender?: string[] | undefined; extensions?: string[] | undefined; imageName?: string | undefined; }, ",(0,n.jsx)(t.a,{href:"/docs/next/reference/types.jsonobject",children:"JsonObject"}),">"]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://cookiecutter.readthedocs.io/",children:"https://cookiecutter.readthedocs.io/"})," and ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/writing-custom-actions",children:"https://backstage.io/docs/features/software-templates/writing-custom-actions"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var n=r(296540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,o={},d=null,l=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:c,type:e,key:d,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(296540);const c={},o=n.createContext(c);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);