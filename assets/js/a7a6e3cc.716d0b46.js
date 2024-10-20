/*! For license information please see a7a6e3cc.716d0b46.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[525184],{583021:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(474848),i=s(28453);const r={id:"authorizing-scaffolder-template-details",title:"Authorizing scaffolder tasks, parameters, steps, and actions",description:"How to authorize parts of a template and authorize scaffolder task access"},a=void 0,o={id:"features/software-templates/authorizing-scaffolder-template-details",title:"Authorizing scaffolder tasks, parameters, steps, and actions",description:"How to authorize parts of a template and authorize scaffolder task access",source:"@site/../docs/features/software-templates/authorizing-scaffolder-template-details.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/authorizing-scaffolder-template-details",permalink:"/docs/next/features/software-templates/authorizing-scaffolder-template-details",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-templates/authorizing-scaffolder-template-details.md",tags:[],version:"current",frontMatter:{id:"authorizing-scaffolder-template-details",title:"Authorizing scaffolder tasks, parameters, steps, and actions",description:"How to authorize parts of a template and authorize scaffolder task access"},sidebar:"docs",previous:{title:"Writing custom step layouts",permalink:"/docs/next/features/software-templates/writing-custom-step-layouts"},next:{title:"Migrating to react-jsonschema-form@v5",permalink:"/docs/next/features/software-templates/migrating-to-rjsf-v5"}},l={},c=[{value:"Authorizing parameters and steps",id:"authorizing-parameters-and-steps",level:3},{value:"Authorizing actions",id:"authorizing-actions",level:3},{value:"Authorizing scaffolder tasks",id:"authorizing-scaffolder-tasks",level:3},{value:"Authorizing in the New Backend System",id:"authorizing-in-the-new-backend-system",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The scaffolder plugin integrates with the Backstage ",(0,t.jsx)(n.a,{href:"/docs/next/permissions/overview",children:"permission framework"}),", which allows you to control access to certain parameters and steps in your templates based on the user executing the template. It also allows you to control access to scaffolder tasks."]}),"\n",(0,t.jsx)(n.h3,{id:"authorizing-parameters-and-steps",children:"Authorizing parameters and steps"}),"\n",(0,t.jsxs)(n.p,{children:["To mark specific parameters or steps as requiring permission, add the ",(0,t.jsx)(n.code,{children:"backstage:permissions"})," property to the parameter or step with one or more tags. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\nmetadata:\n  name: my_custom_template\nspec:\n  type: service\n  parameters:\n    - title: Provide some simple information\n      properties:\n        title:\n          title: Title\n          type: string\n    - title: Extra information\n      properties:\n        description:\n          title: Description\n          type: string\n      backstage:permissions:\n        tags:\n          - secret\n  steps:\n    - id: step1\n      name: First log\n      action: debug:log\n      input:\n        message: hello\n    - id: step2\n      name: Log message\n      action: debug:log\n      input:\n        message: hello\n      backstage:permissions:\n        tags:\n          - secret\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"description"})," parameter and the ",(0,t.jsx)(n.code,{children:"step2"})," step are marked with the ",(0,t.jsx)(n.code,{children:"secret"})," tag."]}),"\n",(0,t.jsxs)(n.p,{children:["To conditionally authorize parameters and steps based on the user executing the template, ",(0,t.jsx)(n.a,{href:"/docs/next/permissions/writing-a-policy",children:"edit your permission policy"}),", by targeting ",(0,t.jsx)(n.code,{children:"templateParameterReadPermission"})," and ",(0,t.jsx)(n.code,{children:"templateStepReadPermission"})," permissions, which are provided by the scaffolder plugin. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"/* highlight-add-start */\nimport {\n  templateParameterReadPermission,\n  templateStepReadPermission,\n} from '@backstage/plugin-scaffolder-common/alpha';\nimport {\n  createScaffolderActionConditionalDecision,\n  scaffolderTemplateConditions,\n} from '@backstage/plugin-scaffolder-backend/alpha';\n/* highlight-add-end */\n\nclass ExamplePermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    /* highlight-add-start */\n    if (\n      isPermission(request.permission, templateParameterReadPermission) ||\n      isPermission(request.permission, templateStepReadPermission)\n    ) {\n      if (user?.info.userEntityRef === 'user:default/spiderman')\n        return createScaffolderTemplateConditionalDecision(request.permission, {\n          not: scaffolderTemplateConditions.hasTag({ tag: 'secret' }),\n        });\n    }\n    /* highlight-add-end */\n\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the user ",(0,t.jsx)(n.code,{children:"spiderman"})," is not authorized to read parameters or steps marked with the ",(0,t.jsx)(n.code,{children:"secret"})," tag."]}),"\n",(0,t.jsx)(n.p,{children:"By combining this feature with restricting the ingestion of templates in the Catalog as recommended in our threat model, you can create a solid system to restrict certain actions."}),"\n",(0,t.jsx)(n.h3,{id:"authorizing-actions",children:"Authorizing actions"}),"\n",(0,t.jsx)(n.p,{children:"Similar to parameters and steps, the scaffolder plugin exposes permissions to restrict access to certain actions. This can be useful if you want to secure your templates."}),"\n",(0,t.jsx)(n.p,{children:"To restrict access to a particular action, you can modify your permission policy as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"/* highlight-add-start */\nimport { actionExecutePermission } from '@backstage/plugin-scaffolder-common/alpha';\nimport {\n  createScaffolderActionConditionalDecision,\n  scaffolderActionConditions,\n} from '@backstage/plugin-scaffolder-backend/alpha';\n/* highlight-add-end */\n\nclass ExamplePermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    /* highlight-add-start */\n    if (isPermission(request.permission, actionExecutePermission)) {\n      if (user?.info.userEntityRef === 'user:default/spiderman') {\n        return createScaffolderActionConditionalDecision(request.permission, {\n          not: scaffolderActionConditions.hasActionId({\n            actionId: 'debug:log',\n          }),\n        });\n      }\n    }\n    /* highlight-add-end */\n\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["With this permission policy, the user ",(0,t.jsx)(n.code,{children:"spiderman"})," won't be able to execute the ",(0,t.jsx)(n.code,{children:"debug:log"})," action."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also restrict the input provided to the action by combining multiple rules.\nIn the example below, ",(0,t.jsx)(n.code,{children:"spiderman"})," won't be able to execute ",(0,t.jsx)(n.code,{children:"debug:log"})," when passing ",(0,t.jsx)(n.code,{children:'{ "message": "not-this!" }'})," as action input:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/permission.ts"',children:"/* highlight-add-start */\nimport { actionExecutePermission } from '@backstage/plugin-scaffolder-common/alpha';\nimport {\n  createScaffolderActionConditionalDecision,\n  scaffolderActionConditions,\n} from '@backstage/plugin-scaffolder-backend/alpha';\n/* highlight-add-end */\n\nclass ExamplePermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    /* highlight-add-start */\n    if (isPermission(request.permission, actionExecutePermission)) {\n      if (user?.info.userEntityRef === 'user:default/spiderman') {\n        return createScaffolderActionConditionalDecision(request.permission, {\n          not: {\n            allOf: [\n              scaffolderActionConditions.hasActionId({ actionId: 'debug:log' }),\n              scaffolderActionConditions.hasProperty({\n                key: 'message',\n                value: 'not-this!',\n              }),\n            ],\n          },\n        });\n      }\n    }\n    /* highlight-add-end */\n\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"authorizing-scaffolder-tasks",children:"Authorizing scaffolder tasks"}),"\n",(0,t.jsx)(n.p,{children:"The scaffolder plugin also exposes permissions that can restrict access to tasks, task logs, task creation, and task cancellation. This can be useful if you want to control who has access to these areas of the scaffolder."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/src/backend/plugins/permissions.ts"',children:"/* highlight-add-start */\nimport {\n  taskCancelPermission,\n  taskCreatePermission,\n  taskReadPermission,\n} from '@backstage/plugin-scaffolder-common/alpha';\n/* highlight-add-end */\n\nclass ExamplePermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    /* highlight-add-start */\n    if (isPermission(request.permission, taskCreatePermission)) {\n      if (user?.info.userEntityRef === 'user:default/spiderman') {\n        return {\n          result: AuthorizeResult.ALLOW,\n        };\n      }\n    }\n    if (isPermission(request.permission, taskCancelPermission)) {\n      if (user?.info.userEntityRef === 'user:default/spiderman') {\n        return {\n          result: AuthorizeResult.ALLOW,\n        };\n      }\n    }\n    if (isPermission(request.permission, taskReadPermission)) {\n      if (user?.info.userEntityRef === 'user:default/spiderman') {\n        return {\n          result: AuthorizeResult.ALLOW,\n        };\n      }\n    }\n    /* highlight-add-end */\n\n    return {\n      result: AuthorizeResult.DENY,\n    };\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the provided example permission policy, we only grant the ",(0,t.jsx)(n.code,{children:"spiderman"})," user permissions to perform/access the following actions/resources:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Read all scaffolder tasks and their associated events/logs."}),"\n",(0,t.jsx)(n.li,{children:"Cancel any ongoing scaffolder tasks."}),"\n",(0,t.jsx)(n.li,{children:"Trigger software templates, which effectively creates new scaffolder tasks."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Any other user would be denied access to these actions/resources."}),"\n",(0,t.jsx)(n.p,{children:"Although the rules exported by the scaffolder are simple, combining them can help you achieve more complex use cases."}),"\n",(0,t.jsx)(n.h3,{id:"authorizing-in-the-new-backend-system",children:"Authorizing in the New Backend System"}),"\n",(0,t.jsxs)(n.p,{children:["Instead of the changes in ",(0,t.jsx)(n.code,{children:"permission.ts"})," noted in the above example you will make them in your ",(0,t.jsx)(n.code,{children:"index.ts"}),". You will need to create a module where your permission policy will get added. Here is a very simplified example of how to do that:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackendModule } from '@backstage/backend-plugin-api';\nimport {\n  PolicyDecision,\n  AuthorizeResult,\n} from '@backstage/plugin-permission-common';\nimport {\n  PermissionPolicy,\n  PolicyQuery,\n  PolicyQueryUser,\n} from '@backstage/plugin-permission-node';\nimport { policyExtensionPoint } from '@backstage/plugin-permission-node/alpha';\n\nclass ExamplePermissionPolicy implements PermissionPolicy {\n  async handle(\n    request: PolicyQuery,\n    user?: PolicyQueryUser,\n  ): Promise<PolicyDecision> {\n    // Various scaffolder permission checks ...\n\n    return {\n      result: AuthorizeResult.ALLOW,\n    };\n  }\n}\n\nconst customPermissionBackendModule = createBackendModule({\n  pluginId: 'permission',\n  moduleId: 'allow-all-policy',\n  register(reg) {\n    reg.registerInit({\n      deps: { policy: policyExtensionPoint },\n      async init({ policy }) {\n        policy.setPolicy(new ExamplePermissionPolicy());\n      },\n    });\n  },\n});\n\nconst backend = createBackend();\n\n// Other plugins...\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-permission-backend'));\nbackend.add(customPermissionBackendModule);\n/* highlight-add-end */\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ExamplePermissionPolicy"})," here could be the one from the ",(0,t.jsx)(n.a,{href:"#authorizing-parameters-and-steps",children:"Authorizing parameters and steps"})," example or from the ",(0,t.jsx)(n.a,{href:"#authorizing-actions",children:"Authorizing actions"})," example. It would work the same way for both of them."]})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,s)=>{var t=s(296540),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,r={},c=null,d=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,t)&&!l.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:i,type:e,key:c,ref:d,props:r,_owner:o.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(296540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);