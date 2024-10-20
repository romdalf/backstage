/*! For license information please see 124a3bc6.98ea2371.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[784899],{700094:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(474848),o=t(28453);const s={id:"creating",title:"Creating Utility APIs",sidebar_label:"Creating APIs",description:"Creating new utility APIs in your plugins and app"},r=void 0,a={id:"frontend-system/utility-apis/creating",title:"Creating Utility APIs",description:"Creating new utility APIs in your plugins and app",source:"@site/versioned_docs/version-stable/frontend-system/utility-apis/02-creating.md",sourceDirName:"frontend-system/utility-apis",slug:"/frontend-system/utility-apis/creating",permalink:"/docs/frontend-system/utility-apis/creating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/frontend-system/utility-apis/02-creating.md",tags:[],version:"stable",sidebarPosition:2,frontMatter:{id:"creating",title:"Creating Utility APIs",sidebar_label:"Creating APIs",description:"Creating new utility APIs in your plugins and app"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/frontend-system/utility-apis/index"},next:{title:"Consuming APIs",permalink:"/docs/frontend-system/utility-apis/consuming"}},l={},c=[{value:"Creating the Utility API contract",id:"creating-the-utility-api-contract",level:2},{value:"Providing an extension through your plugin",id:"providing-an-extension-through-your-plugin",level:2},{value:"Adding configurability",id:"adding-configurability",level:2},{value:"Adding inputs",id:"adding-inputs",level:2},{value:"Next steps",id:"next-steps",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This section describes how to make a Utility API from scratch, or to add configurability and inputs to an existing one. If you are instead interested in migrating an existing Utility API from the old frontend system, check out the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/building-plugins/migrating#migrating-apis",children:"Migrating APIs section"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-utility-api-contract",children:"Creating the Utility API contract"}),"\n",(0,i.jsxs)(n.p,{children:["The first step toward exposing a utility API is to define its TypeScript contract, as well as an API reference for consumers use to access the implementation. If you want your API to be accessible by other plugins this should be done in ",(0,i.jsxs)(n.a,{href:"/docs/architecture-decisions/adrs-adr011",children:["your plugin's ",(0,i.jsx)(n.code,{children:"-react"})," package"]}),", so that it can be imported separately. If you just want to use the API within your own plugin it is fine to place the definition within the plugin itself. In this example, we have an Example plugin that wants to expose a utility API for performing some type of work."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example-react"',children:"import { createApiRef } from '@backstage/frontend-plugin-api';\n\n/**\n * The work interface for the Example plugin.\n * @public\n */\nexport interface WorkApi {\n  /**\n   * Performs some work.\n   */\n  doWork(): Promise<void>;\n}\n\n/**\n * API Reference for {@link WorkApi}.\n * @public\n */\nexport const workApiRef = createApiRef<WorkApi>({\n  id: 'plugin.example.work',\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"Both of these are properly exported publicly from the package, so that consumers can reach them."}),"\n",(0,i.jsx)(n.h2,{id:"providing-an-extension-through-your-plugin",children:"Providing an extension through your plugin"}),"\n",(0,i.jsxs)(n.p,{children:["The plugin itself now wants to provide this API and its default implementation, in the form of an API extension. Doing so means that when users install the Example plugin, an instance of the Work utility API will also be automatically available in their apps - both to the Example plugin itself, and to others. We do this in the main plugin package, not the ",(0,i.jsx)(n.code,{children:"-react"})," package."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example"',children:"import {\n  ApiBlueprint,\n  createApiFactory,\n  createFrontendPlugin,\n  storageApiRef,\n  StorageApi,\n} from '@backstage/frontend-plugin-api';\nimport { WorkApi, workApiRef } from '@internal/plugin-example-react';\n\nclass WorkImpl implements WorkApi {\n  constructor(options: { storageApiRef: StorageApi }) {\n    /* TODO */\n  }\n  async doWork() {\n    /* TODO */\n  }\n}\n\nconst workApi = ApiBlueprint.make({\n  name: 'work',\n  params: {\n    factory: createApiFactory({\n      api: workApiRef,\n      deps: { storageApi: storageApiRef },\n      factory: ({ storageApi }) => {\n        return new WorkImpl({ storageApi });\n      },\n    }),\n  },\n});\n\n/**\n * The Example plugin.\n * @public\n */\nexport default createFrontendPlugin({\n  id: 'example',\n  extensions: [exampleWorkApi],\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"For illustration we make a skeleton implementation class and the API extension and factory for it, in the same file. These are not exported to the public surface of the plugin package; only the plugin is, as the default export. Users who install the plugin will now get the utility API automatically as well."}),"\n",(0,i.jsx)(n.p,{children:"The code also illustrates how the API factory declares a dependency on another utility API - the core storage API in this case. An instance of that utility API is then provided to the factory function."}),"\n",(0,i.jsxs)(n.p,{children:["The extension ID of the work API will be the kind ",(0,i.jsx)(n.code,{children:"api:"})," followed by the plugin ID as the namespace, a ",(0,i.jsx)(n.code,{children:"/"})," separator, and lastly the name we used of the extension. In this case we end up with ",(0,i.jsx)(n.code,{children:"api:example/work"}),". Check out ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/naming-patterns",children:"the naming patterns doc"})," for more information on how this works. You can now use this ID to refer to the API in app-config and elsewhere. In case there is a single API that is a central to the functionality of the plugin, most typically an API client, you can choose to omit the name of the extension so that you end up with just ",(0,i.jsx)(n.code,{children:"api:<pluginId>"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"adding-configurability",children:"Adding configurability"}),"\n",(0,i.jsxs)(n.p,{children:["Here we will describe how to amend a utility API with the capability of having extension config, which is driven by ",(0,i.jsx)(n.a,{href:"/docs/conf/writing",children:"your app-config"}),". You do this by giving an extension config schema to your API extension factory function. Let's refactory the example above to also accept configuration, which will require us to use the ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-blueprints#creating-an-extension-from-a-blueprint-with-overrides",children:"override method of the blueprint"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:'title="in @internal/plugin-example"',children:"const exampleWorkApi = ApiBlueprint.makeWithOverrides({\n  config: {\n    schema: {\n      goSlow: z => z.boolean().default(false),\n    },\n  },\n  factory(originalFactory, { config }) {\n    return originalFactory({\n      factory: createApiFactory({\n        api: workApiRef,\n        deps: { storageApi: storageApiRef },\n        factory: ({ storageApi }) => {\n          return new WorkImpl({\n            storageApi,\n            goSlow: config.goSlow,\n          });\n        },\n      }),\n    });\n  },\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We wanted users to be able to set a ",(0,i.jsx)(n.code,{children:"goSlow"})," extension config parameter for our API instances, which we declared in our new configuration schema. The actual extension config values will then be passed in a type safe manner in to the blueprint ",(0,i.jsx)(n.code,{children:"factory"}),", wherein we can use them to create our API factory and pass as our blueprint parameters."]}),"\n",(0,i.jsxs)(n.p,{children:['Note that the expression "extension config" as used here, is ',(0,i.jsx)(n.em,{children:"not"})," the same thing as the ",(0,i.jsx)(n.code,{children:"configApi"})," which gives you access to the full app-config. The extension config discussed here is instead the particular configuration settings given to your utility API instance. This is discussed more ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/utility-apis/configuring",children:"in the Configuring section"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note also that the extension config schema contained a default value fo the ",(0,i.jsx)(n.code,{children:"goSlow"})," field. This is an important consideration. You want users of your API to be able to get maximum value out of it, without having to dive deep into how to configure it. For that reason you generally want to provide as many sane defaults as possible, while letting users override them rarely but with purpose, only when called for. If you have an extension config schema without defaults, the framework will refuse to instantiate the utility API on startup unless the user had configured those values explicitly. Since it had a default value, the TypeScript code and interfaces also don't have to defensively allow ",(0,i.jsx)(n.code,{children:"undefined"})," - we know that it'll have either the default value or an overridden value when we start consuming the extension config data."]}),"\n",(0,i.jsx)(n.h2,{id:"adding-inputs",children:"Adding inputs"}),"\n",(0,i.jsx)(n.p,{children:"Inputs are added to Utility APIs in the same way as other extension blueprints:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use ",(0,i.jsx)(n.code,{children:".makeWithOverrides"})," and declare a set of ",(0,i.jsx)(n.code,{children:"inputs"})," for your extension."]}),"\n",(0,i.jsx)(n.li,{children:"If needed, create custom extension data types to be used in those inputs."}),"\n",(0,i.jsxs)(n.li,{children:["If needed, create and export an ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-blueprints#creating-an-extension-blueprint",children:"extension blueprint"})," for creating that particular attachment type."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This is a power use case and not very commonly used."}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/utility-apis/consuming",children:"the Consuming section"})," to see how to consume this new utility API in various ways. If you wish to configure and add inputs to it, check out ",(0,i.jsx)(n.a,{href:"/docs/frontend-system/utility-apis/configuring",children:"the Configuring section"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var i=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var i,s={},c=null,d=null;for(i in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(296540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);