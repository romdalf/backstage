/*! For license information please see 937eab8d.82372e05.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[683782],{567631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(474848),r=t(28453);const i={id:"installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage"},a=void 0,o={id:"features/kubernetes/installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage",source:"@site/versioned_docs/version-stable/features/kubernetes/installation.md",sourceDirName:"features/kubernetes",slug:"/features/kubernetes/installation",permalink:"/docs/features/kubernetes/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/kubernetes/installation.md",tags:[],version:"stable",frontMatter:{id:"installation",title:"Installation",description:"Installing Kubernetes plugin into Backstage"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/kubernetes/"},next:{title:"Configuration",permalink:"/docs/features/kubernetes/configuration"}},l={},c=[{value:"Adding the Kubernetes frontend plugin",id:"adding-the-kubernetes-frontend-plugin",level:2},{value:"Adding Kubernetes Backend plugin",id:"adding-kubernetes-backend-plugin",level:2},{value:"New Backend System",id:"new-backend-system",level:3},{value:"Custom cluster discovery",id:"custom-cluster-discovery",level:3},{value:"New Backend System Custom cluster discovery",id:"new-backend-system-custom-cluster-discovery",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Kubernetes feature is a plugin to Backstage, and it is exposed as a tab when\nviewing entities in the software catalog."}),"\n",(0,s.jsxs)(n.p,{children:["If you haven't setup Backstage already, read the\n",(0,s.jsx)(n.a,{href:"/docs/getting-started/",children:"Getting Started"})," guide."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-the-kubernetes-frontend-plugin",children:"Adding the Kubernetes frontend plugin"}),"\n",(0,s.jsx)(n.p,{children:"The first step is to add the Kubernetes frontend plugin to your Backstage\napplication."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/app add @backstage/plugin-kubernetes\n"})}),"\n",(0,s.jsx)(n.p,{children:'Once the package has been installed, you need to import the plugin in your app\nby adding the "Kubernetes" tab to the respective catalog pages.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="packages/app/src/components/catalog/EntityPage.tsx"',children:'/* highlight-add-next-line */\nimport { EntityKubernetesContent } from \'@backstage/plugin-kubernetes\';\n\n// You can add the tab to any number of pages, the service page is shown as an\n// example here\nconst serviceEntityPage = (\n  <EntityLayout>\n    {/* other tabs... */}\n    {/* highlight-add-start */}\n    <EntityLayout.Route path="/kubernetes" title="Kubernetes">\n      <EntityKubernetesContent refreshIntervalMs={30000} />\n    </EntityLayout.Route>\n    {/* highlight-add-end */}\n  </EntityLayout>\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The optional ",(0,s.jsx)(n.code,{children:"refreshIntervalMs"})," property on the ",(0,s.jsx)(n.code,{children:"EntityKubernetesContent"})," defines the interval in which the content automatically refreshes, if not set this will default to 10 seconds."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"That's it! But now, we need the Kubernetes Backend plugin for the frontend to\nwork."}),"\n",(0,s.jsx)(n.h2,{id:"adding-kubernetes-backend-plugin",children:"Adding Kubernetes Backend plugin"}),"\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"packages/backend"})," of your Backstage app, and install the\n",(0,s.jsx)(n.code,{children:"@backstage/plugin-kubernetes-backend"})," package."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-kubernetes-backend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Create a file called ",(0,s.jsx)(n.code,{children:"kubernetes.ts"})," inside ",(0,s.jsx)(n.code,{children:"packages/backend/src/plugins/"})," and\nadd the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/kubernetes.ts"',children:"import { KubernetesBuilder } from '@backstage/plugin-kubernetes-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\nimport { CatalogClient } from '@backstage/catalog-client';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  const catalogApi = new CatalogClient({ discoveryApi: env.discovery });\n  const { router } = await KubernetesBuilder.createBuilder({\n    logger: env.logger,\n    config: env.config,\n    catalogApi,\n    discovery: env.discovery,\n    permissions: env.permissions,\n  }).build();\n  return router;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["And import the plugin to ",(0,s.jsx)(n.code,{children:"packages/backend/src/index.ts"}),". There are three lines\nof code you'll need to add, and they should be added near similar code in your\nexisting Backstage backend."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="packages/backend/src/index.ts"',children:"// ..\n/* highlight-add-next-line */\nimport kubernetes from './plugins/kubernetes';\n\nasync function main() {\n  // ...\n  /* highlight-add-next-line */\n  const kubernetesEnv = useHotMemoize(module, () => createEnv('kubernetes'));\n  // ...\n  /* highlight-add-next-line */\n  apiRouter.use('/kubernetes', await kubernetes(kubernetesEnv));\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That's it! The Kubernetes frontend and backend have now been added to your\nBackstage app."}),"\n",(0,s.jsx)(n.h3,{id:"new-backend-system",children:"New Backend System"}),"\n",(0,s.jsx)(n.p,{children:"To get the Kubernetes plugin install using the New Backend System you will need to do the following:"}),"\n",(0,s.jsx)(n.p,{children:"Run this command to add the package:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-kubernetes-backend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then add it to your backend ",(0,s.jsx)(n.code,{children:"index.ts"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-kubernetes-backend'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-cluster-discovery",children:"Custom cluster discovery"}),"\n",(0,s.jsxs)(n.p,{children:["If either existing\n",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/features/kubernetes/configuration#clusterlocatormethods",children:"cluster locators"}),"\ndon't work for your use-case, it is possible to implement a custom\n",(0,s.jsx)(n.a,{href:"https://backstage.io/docs/reference/plugin-kubernetes-backend.kubernetesclusterssupplier",children:"KubernetesClustersSupplier"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Change the following in ",(0,s.jsx)(n.code,{children:"packages/backend/src/plugins/kubernetes.ts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/plugins/kubernetes.ts"',children:"import {\n /* highlight-add-next-line */\n  ClusterDetails,\n  KubernetesBuilder,\n  /* highlight-add-next-line */\n  KubernetesClustersSupplier,\n} from '@backstage/plugin-kubernetes-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n/* highlight-add-next-line */\nimport { Duration } from 'luxon';\n\n/* highlight-add-start */\nexport class CustomClustersSupplier implements KubernetesClustersSupplier {\n  constructor(private clusterDetails: ClusterDetails[] = []) {}\n\n  static create(refreshInterval: Duration) {\n    const clusterSupplier = new CustomClustersSupplier();\n    // setup refresh, e.g. using a copy of https://github.com/backstage/backstage/blob/master/plugins/kubernetes-backend/src/service/runPeriodically.ts\n    runPeriodically(\n      () => clusterSupplier.refreshClusters(),\n      refreshInterval.toMillis(),\n    );\n    return clusterSupplier;\n  }\n\n  async refreshClusters(): Promise<void> {\n    this.clusterDetails = []; // fetch from somewhere\n  }\n\n  async getClusters(): Promise<ClusterDetails[]> {\n    return this.clusterDetails;\n  }\n}\n/* highlight-add-end */\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n\n  /* highlight-remove-next-line */\n  const { router } = await KubernetesBuilder.createBuilder({\n  /* highlight-add-next-line */\n  const builder = await KubernetesBuilder.createBuilder({\n     logger: env.logger,\n     config: env.config,\n  /* highlight-remove-next-line */\n  }).build();\n  /* highlight-add-start */\n  });\n  builder.setClusterSupplier(\n    CustomClustersSupplier.create(Duration.fromObject({ minutes: 60 })),\n  );\n  const { router } = await builder.build();\n  /* highlight-add-end */\n\n  // ..\n  return router;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"new-backend-system-custom-cluster-discovery",children:"New Backend System Custom cluster discovery"}),"\n",(0,s.jsx)(n.p,{children:"To use Custom cluster discovery with the New Backend System you'll need to create a module and add it to your backend. Here's a very simplified example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { createBackend } from '@backstage/backend-defaults';\nimport { createBackendModule } from '@backstage/backend-plugin-api';\nimport { Duration } from 'luxon';\nimport { kubernetesClusterSupplierExtensionPoint } from '@backstage/plugin-kubernetes-node';\nimport { CustomClustersSupplier } from './path/to/class';\n\nconst backend = createBackend();\n\nexport const kubernetesModuleCustomClusterDiscovery = createBackendModule({\n  pluginId: 'kubernetes',\n  moduleId: 'custom-cluster-discovery',\n  register(env) {\n    env.registerInit({\n      deps: {\n        kubernetes: kubernetesClusterSupplierExtensionPoint,\n      },\n      async init({ kubernetes }) {\n        kubernetes.addClusterSupplier(\n          CustomClustersSupplier.create(Duration.fromObject({ minutes: 60 })),\n        );\n      },\n    });\n  },\n});\n\n// Other plugins...\nbackend.add(import('@backstage/plugin-kubernetes-backend'));\nbackend.add(kubernetesModuleCustomClusterDiscovery);\n\nbackend.start();\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(n.p,{children:["This example assumes the ",(0,s.jsx)(n.code,{children:"CustomClustersSupplier"})," class is the same from the ",(0,s.jsx)(n.a,{href:"#custom-cluster-discovery",children:"previous example"})]})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["After installing the plugins in the code, you'll need to then\n",(0,s.jsx)(n.a,{href:"/docs/features/kubernetes/configuration",children:"configure them"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsxs)(n.p,{children:["After installing the plugins in the code, if the Kubernetes information is not\nshowing up, you'll need to ",(0,s.jsx)(n.a,{href:"/docs/features/kubernetes/troubleshooting",children:"troubleshoot it"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:d,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(296540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);