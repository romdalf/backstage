/*! For license information please see 32712365.10b88ab1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[740962],{798026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(474848),i=t(28453);const r={id:"custom-rules--old",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"},o=void 0,a={id:"permissions/custom-rules--old",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources",source:"@site/../docs/permissions/custom-rules--old.md",sourceDirName:"permissions",slug:"/permissions/custom-rules--old",permalink:"/docs/next/permissions/custom-rules--old",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/permissions/custom-rules--old.md",tags:[],version:"current",frontMatter:{id:"custom-rules--old",title:"Defining custom permission rules",description:"How to define custom permission rules for existing resources"}},l={},c=[{value:"Define a custom rule",id:"define-a-custom-rule",level:2},{value:"Provide the rule during plugin setup",id:"provide-the-rule-during-plugin-setup",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This documentation is written for the old backend which has been replaced by ",(0,s.jsx)(n.a,{href:"/docs/next/backend-system/",children:"the new backend system"}),", being the default since Backstage ",(0,s.jsx)(n.a,{href:"/docs/next/releases/v1.24.0",children:"version 1.24"}),". If have migrated to the new backend system, you may want to read ",(0,s.jsx)(n.a,{href:"/docs/next/permissions/custom-rules",children:"its own article"})," instead. Otherwise, ",(0,s.jsx)(n.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,s.jsxs)(n.p,{children:["For some use cases, you may want to define custom ",(0,s.jsx)(n.a,{href:"/docs/next/references/glossary#rule-permission-plugin",children:"rules"})," in addition to the ones provided by a plugin. In the ",(0,s.jsx)(n.a,{href:"/docs/next/permissions/writing-a-policy",children:"previous section"})," we used the ",(0,s.jsx)(n.code,{children:"isEntityOwner"})," rule to control access for catalog entities. Let's extend this policy with a custom rule that checks what ",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/software-catalog/system-model#system",children:"system"})," an entity is part of."]}),"\n",(0,s.jsx)(n.h2,{id:"define-a-custom-rule",children:"Define a custom rule"}),"\n",(0,s.jsxs)(n.p,{children:["Plugins should export a rule factory that provides type-safety that ensures compatibility with the plugin's backend. The catalog plugin exports ",(0,s.jsx)(n.code,{children:"createCatalogPermissionRule"})," from ",(0,s.jsx)(n.code,{children:"@backstage/plugin-catalog-backend/alpha"})," for this purpose. Note: the ",(0,s.jsx)(n.code,{children:"/alpha"})," path segment is temporary until this API is marked as stable. For this example, we'll define the rule and create a condition in ",(0,s.jsx)(n.code,{children:"packages/backend/src/plugins/permission.ts"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"We use Zod in our example below. To install, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn workspace backend add zod\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"...\n\nimport type { Entity } from '@backstage/catalog-model';\nimport { createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\nimport { createConditionFactory } from '@backstage/plugin-permission-node';\nimport { z } from 'zod';\n\nexport const isInSystemRule = createCatalogPermissionRule({\n  name: 'IS_IN_SYSTEM',\n  description: 'Checks if an entity is part of the system provided',\n  resourceType: 'catalog-entity',\n  paramsSchema: z.object({\n    systemRef: z\n      .string()\n      .describe('SystemRef to check the resource is part of'),\n  }),\n  apply: (resource: Entity, { systemRef }) => {\n    if (!resource.relations) {\n      return false;\n    }\n\n    return resource.relations\n      .filter(relation => relation.type === 'partOf')\n      .some(relation => relation.targetRef === systemRef);\n  },\n  toQuery: ({ systemRef }) => ({\n    key: 'relations.partOf',\n    values: [systemRef],\n  }),\n});\n\nconst isInSystem = createConditionFactory(isInSystemRule);\n\n...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For a more detailed explanation on defining rules, refer to the ",(0,s.jsx)(n.a,{href:"/docs/next/permissions/plugin-authors/03-adding-a-resource-permission-check#adding-support-for-conditional-decisions",children:"documentation for plugin authors"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Still in the ",(0,s.jsx)(n.code,{children:"packages/backend/src/plugins/permission.ts"})," file, let's use the condition we just created in our ",(0,s.jsx)(n.code,{children:"TestPermissionPolicy"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"...\n/* highlight-remove-next-line */\nimport { createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\n/* highlight-add-next-line */\nimport { catalogConditions, createCatalogConditionalDecision, createCatalogPermissionRule } from '@backstage/plugin-catalog-backend/alpha';\n/* highlight-remove-next-line */\nimport { createConditionFactory } from '@backstage/plugin-permission-node';\n/* highlight-add-next-line */\nimport { PermissionPolicy, PolicyQuery, PolicyQueryUser, createConditionFactory } from '@backstage/plugin-permission-node';\n/* highlight-add-start */\nimport { AuthorizeResult, PolicyDecision, isResourcePermission } from '@backstage/plugin-permission-common';\n/* highlight-add-end */\n...\n\nexport const isInSystemRule = createCatalogPermissionRule({\n  name: 'IS_IN_SYSTEM',\n  description: 'Checks if an entity is part of the system provided',\n  resourceType: 'catalog-entity',\n  paramsSchema: z.object({\n    systemRef: z\n      .string()\n      .describe('SystemRef to check the resource is part of'),\n  }),\n  apply: (resource: Entity, { systemRef }) => {\n    if (!resource.relations) {\n      return false;\n    }\n\n    return resource.relations\n      .filter(relation => relation.type === 'partOf')\n      .some(relation => relation.targetRef === systemRef);\n  },\n  toQuery: ({ systemRef }) => ({\n    key: 'relations.partOf',\n    values: [systemRef],\n  }),\n});\n\nconst isInSystem = createConditionFactory(isInSystemRule);\n\nclass TestPermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    if (isResourcePermission(request.permission, 'catalog-entity')) {\n      return createCatalogConditionalDecision(\n        request.permission,\n        /* highlight-remove-start */\n        catalogConditions.isEntityOwner({\n          claims: user?.info.ownershipEntityRefs ?? [],\n        }),\n        /* highlight-remove-end */\n        /* highlight-add-start */\n        {\n          anyOf: [\n            catalogConditions.isEntityOwner({\n              claims: user?.info.ownershipEntityRefs ?? [],\n            }),\n            isInSystem({ systemRef: 'interviewing' }),\n          ],\n        },\n        /* highlight-add-end */\n      );\n    }\n\n    return { result: AuthorizeResult.ALLOW };\n  }\n}\n\n...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"provide-the-rule-during-plugin-setup",children:"Provide the rule during plugin setup"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have a custom rule defined and added to our policy, we need provide it to the catalog plugin. This step is important because the catalog plugin will use the rule's ",(0,s.jsx)(n.code,{children:"toQuery"})," and ",(0,s.jsx)(n.code,{children:"apply"})," methods while evaluating conditional authorize results. There's no guarantee that the catalog and permission backends are running on the same server, so we must explicitly link the rule to ensure that it's available at runtime."]}),"\n",(0,s.jsxs)(n.p,{children:["The api for providing custom rules may differ between plugins, but there should typically be some integration point during the creation of the backend router. For the catalog, this integration point is exposed via ",(0,s.jsx)(n.code,{children:"CatalogBuilder.addPermissionRules"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="packages/backend/src/plugins/catalog.ts"',children:"import { CatalogBuilder } from '@backstage/plugin-catalog-backend';\n/* highlight-add-next-line */\nimport { isInSystemRule } from './permission';\n\n...\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const builder = await CatalogBuilder.create(env);\n  /* highlight-add-next-line */\n  builder.addPermissionRules(isInSystemRule);\n  ...\n  return router;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The updated policy will allow catalog entity resource permissions if any of the following are true:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"User owns the target entity"}),"\n",(0,s.jsx)(n.li,{children:"Target entity is part of the 'interviewing' system"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var s=t(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,r={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,s)&&!l.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(296540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);