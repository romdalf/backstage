/*! For license information please see 7d99749e.152db7d1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[326287],{545189:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=s(474848),a=s(28453);const r={id:"database",title:"Database Service",sidebar_label:"Database",description:"Documentation for the Database service"},i=void 0,o={id:"backend-system/core-services/database",title:"Database Service",description:"Documentation for the Database service",source:"@site/versioned_docs/version-stable/backend-system/core-services/database.md",sourceDirName:"backend-system/core-services",slug:"/backend-system/core-services/database",permalink:"/docs/backend-system/core-services/database",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/backend-system/core-services/database.md",tags:[],version:"stable",frontMatter:{id:"database",title:"Database Service",sidebar_label:"Database",description:"Documentation for the Database service"},sidebar:"docs",previous:{title:"Cache",permalink:"/docs/backend-system/core-services/cache"},next:{title:"Discovery",permalink:"/docs/backend-system/core-services/discovery"}},c={},d=[{value:"Using the service",id:"using-the-service",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This service lets your plugins get a ",(0,n.jsx)(t.code,{children:"knex"})," client hooked up to a database which is configured in your ",(0,n.jsx)(t.code,{children:"app-config"})," YAML files, for your persistence needs."]}),"\n",(0,n.jsxs)(t.p,{children:["If there's no config provided in ",(0,n.jsx)(t.code,{children:"backend.database"})," then you will automatically get a simple in-memory SQLite 3 database for your plugin whose contents will be lost when the service restarts."]}),"\n",(0,n.jsx)(t.p,{children:"This service is scoped per plugin too, so that table names do not conflict across plugins."}),"\n",(0,n.jsx)(t.h2,{id:"using-the-service",children:"Using the service"}),"\n",(0,n.jsxs)(t.p,{children:["The following example shows how to get access to the database service in your ",(0,n.jsx)(t.code,{children:"example"})," backend plugin and getting a client for interacting with the database. It also runs some migrations from a certain directory for your plugin."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import {\n  coreServices,\n  createBackendPlugin,\n} from '@backstage/backend-plugin-api';\nimport { resolvePackagePath } from '@backstage/backend-plugin-api';\n\ncreateBackendPlugin({\n  pluginId: 'example',\n  register(env) {\n    env.registerInit({\n      deps: {\n        database: coreServices.database,\n      },\n      async init({ database }) {\n        const client = await database.getClient();\n        const migrationsDir = resolvePackagePath(\n          '@internal/my-plugin',\n          'migrations',\n        );\n        if (!database.migrations?.skip) {\n          await client.migrate.latest({\n            directory: migrationsDir,\n          });\n        }\n      },\n    });\n  },\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,s)=>{var n=s(296540),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,r={},d=null,l=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===r[n]&&(r[n]=t[n]);return{$$typeof:a,type:e,key:d,ref:l,props:r,_owner:o.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(296540);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);