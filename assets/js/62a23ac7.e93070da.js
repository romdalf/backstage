/*! For license information please see 62a23ac7.e93070da.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[828732],{198706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(474848),i=t(28453);const o={id:"migrating",title:"Migrating Apps",sidebar_label:"Migration Guide",description:"How to migrate existing apps to the new frontend system"},s=void 0,r={id:"frontend-system/building-apps/migrating",title:"Migrating Apps",description:"How to migrate existing apps to the new frontend system",source:"@site/versioned_docs/version-stable/frontend-system/building-apps/08-migrating.md",sourceDirName:"frontend-system/building-apps",slug:"/frontend-system/building-apps/migrating",permalink:"/docs/frontend-system/building-apps/migrating",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/frontend-system/building-apps/08-migrating.md",tags:[],version:"stable",sidebarPosition:8,frontMatter:{id:"migrating",title:"Migrating Apps",sidebar_label:"Migration Guide",description:"How to migrate existing apps to the new frontend system"},sidebar:"docs",previous:{title:"Converting 3rd-party Plugins",permalink:"/docs/frontend-system/building-apps/plugin-conversion"},next:{title:"Overview",permalink:"/docs/frontend-system/utility-apis/index"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Switching out <code>createApp</code>",id:"switching-out-createapp",level:2},{value:"Migrating <code>createApp</code> Options",id:"migrating-createapp-options",level:2},{value:"<code>apis</code>",id:"apis",level:3},{value:"<code>icons</code>",id:"icons",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>featureFlags</code>",id:"featureflags",level:3},{value:"<code>components</code>",id:"components",level:3},{value:"<code>themes</code>",id:"themes",level:3},{value:"<code>configLoader</code>",id:"configloader",level:3},{value:"<code>icons</code>",id:"icons-1",level:3},{value:"<code>bindRoutes</code>",id:"bindroutes",level:3},{value:"<code>__experimentalTranslations</code>",id:"__experimentaltranslations",level:3},{value:"Gradual Migration",id:"gradual-migration",level:2},{value:"Top-level Routes",id:"top-level-routes",level:3},{value:"Entity Pages",id:"entity-pages",level:3},{value:"Sidebar",id:"sidebar",level:3},{value:"App Root Elements",id:"app-root-elements",level:3},{value:"App Root Wrappers",id:"app-root-wrappers",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["This section describes how to migrate an existing Backstage app package to use the new frontend system. The app package is typically found at ",(0,a.jsx)(n.code,{children:"packages/app"})," in your project and is responsible for wiring together the Backstage frontend application."]}),"\n",(0,a.jsxs)(n.h2,{id:"switching-out-createapp",children:["Switching out ",(0,a.jsx)(n.code,{children:"createApp"})]}),"\n",(0,a.jsxs)(n.p,{children:["The first step in migrating an app is to switch out the ",(0,a.jsx)(n.code,{children:"createApp"})," function for the new one from ",(0,a.jsx)(n.code,{children:"@backstage/frontend-api-app"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/App.tsx"',children:"// highlight-remove-next-line\nimport { createApp } from '@backstage/app-defaults';\n// highlight-add-next-line\nimport { createApp } from '@backstage/frontend-defaults';\n"})}),"\n",(0,a.jsx)(n.p,{children:"This immediate switch will lead to a lot of breakages that we need to fix."}),"\n",(0,a.jsxs)(n.p,{children:["Let's start by addressing the change to ",(0,a.jsx)(n.code,{children:"app.createRoot(...)"}),", which no longer accepts any arguments. This represents a fundamental change that the new frontend system introduces. In the old system the app element tree that you passed to ",(0,a.jsx)(n.code,{children:"app.createRoot(...)"})," was the primary way that you installed and configured plugins and features in your app. In the new system this is instead replaced by extensions that are wired together into an extension tree. Much more responsibility has now been shifted to plugins, for example you no longer have to manually provide the route path for each plugin page, but instead only configure it if you want to override the default. For more information on how the new system works, see the ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/index",children:"architecture"})," section."]}),"\n",(0,a.jsx)(n.p,{children:"Given that the app element tree is most of what builds up the app, it's likely also going to be the majority of the migration effort. In order to make the migration as smooth as possible we have provided a helper that lets you convert an existing app element tree into plugins that you can install in a new app. This in turn allows for a gradual migration of individual plugins, rather than needing to migrate the entire app structure at once."}),"\n",(0,a.jsxs)(n.p,{children:["The helper is called ",(0,a.jsx)(n.code,{children:"convertLegacyApp"})," and is exported from the ",(0,a.jsx)(n.code,{children:"@backstage/core-compat-api"})," package, which you will need to add as a dependency to your app package:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn --cwd packages/app add @backstage/core-compat-api\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Once installed, import ",(0,a.jsx)(n.code,{children:"convertLegacyApp"}),". If your app currently looks like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/App.tsx"',children:"const app = createApp({\n  /* other options */\n});\n\nexport default app.createRoot(\n  <>\n    <AlertDisplay transientTimeoutMs={2500} />\n    <OAuthRequestDialog />\n    <AppRouter>\n      <Root>{routes}</Root>\n    </AppRouter>\n  </>,\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Migrate it to the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/App.tsx"',children:"const legacyFeatures = convertLegacyApp(\n  <>\n    <AlertDisplay transientTimeoutMs={2500} />\n    <OAuthRequestDialog />\n    <AppRouter>\n      <Root>{routes}</Root>\n    </AppRouter>\n  </>,\n);\n\nconst app = createApp({\n  /* other options */\n  features: [...legacyFeatures],\n});\n\nexport default app.createRoot();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We've taken all the elements that were previously passed to ",(0,a.jsx)(n.code,{children:"app.createRoot(...)"}),", and instead passed them to ",(0,a.jsx)(n.code,{children:"convertLegacyApp(...)"}),". We then pass the features returned by ",(0,a.jsx)(n.code,{children:"convertLegacyApp"})," and forward them to the ",(0,a.jsx)(n.code,{children:"features"})," option of the new ",(0,a.jsx)(n.code,{children:"createApp"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["There is one more detail that we need to deal with before moving on. The ",(0,a.jsx)(n.code,{children:"app.createRoot()"})," function now returns a React element rather than a component, so we need to update our app ",(0,a.jsx)(n.code,{children:"index.tsx"})," as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/index.tsx"',children:"import '@backstage/cli/asset-types';\nimport React from 'react';\nimport ReactDOM from 'react-dom/client';\n// highlight-remove-next-line\nimport App from './App';\n// highlight-add-next-line\nimport app from './App';\n\n// highlight-remove-next-line\nReactDOM.createRoot(document.getElementById('root')!).render(<App />);\n// highlight-add-next-line\nReactDOM.createRoot(document.getElementById('root')!).render(app);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["At this point the contents of your app should be past the initial migration stage, and we can move on to migrating any remaining options that you may have passed to ",(0,a.jsx)(n.code,{children:"createApp"}),"."]}),"\n",(0,a.jsxs)(n.h2,{id:"migrating-createapp-options",children:["Migrating ",(0,a.jsx)(n.code,{children:"createApp"})," Options"]}),"\n",(0,a.jsxs)(n.p,{children:["Many of the ",(0,a.jsx)(n.code,{children:"createApp"})," options have been migrated to use extensions instead. Each will have their own ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-blueprints",children:"extension blueprint"})," that you use to create a custom extension. To add these standalone extensions to the app they need to be passed to ",(0,a.jsx)(n.code,{children:"createFrontendModule"}),", which bundles them into a ",(0,a.jsx)(n.em,{children:"feature"})," that you can install in the app. See the ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-overrides#creating-a-frontend-module",children:"frontend module"})," section for more information."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, assuming you have a ",(0,a.jsx)(n.code,{children:"lightTheme"})," extension that you want to add to your app, you can use the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const app = createApp({\n  features: [\n    // highlight-add-start\n    createFrontendModule({\n      pluginId: 'app',\n      extensions: [lightTheme],\n    }),\n    // highlight-add-end\n  ],\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can then also add any additional extensions that you may need to create as part of this migration to the ",(0,a.jsx)(n.code,{children:"extensions"})," array as well."]}),"\n",(0,a.jsx)(n.h3,{id:"apis",children:(0,a.jsx)(n.code,{children:"apis"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/frontend-system/utility-apis/index",children:"Utility API"})," factories are now installed as extensions instead. Pass the existing factory to ",(0,a.jsx)(n.code,{children:"ApiBlueprint"})," and install it in the app. For more information, see the section on ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/utility-apis/configuring",children:"configuring Utility APIs"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, the following ",(0,a.jsx)(n.code,{children:"apis"})," configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const app = createApp({\n  apis: [\n    createApiFactory({\n      api: scmIntegrationsApiRef,\n      deps: { configApi: configApiRef },\n      factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),\n    }),\n  ],\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Can be converted to the following extension:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const scmIntegrationsApi = ApiBlueprint.make({\n  name: 'scm-integrations',\n  params: {\n    factory: createApiFactory({\n      api: scmIntegrationsApiRef,\n      deps: { configApi: configApiRef },\n      factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),\n    }),\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"icons",children:(0,a.jsx)(n.code,{children:"icons"})}),"\n",(0,a.jsxs)(n.p,{children:["Icons are currently installed through the usual options to ",(0,a.jsx)(n.code,{children:"createApp"}),", but will be switched to use extensions in the future."]}),"\n",(0,a.jsx)(n.h3,{id:"plugins",children:(0,a.jsx)(n.code,{children:"plugins"})}),"\n",(0,a.jsxs)(n.p,{children:["Plugins are now passed through the ",(0,a.jsx)(n.code,{children:"features"})," options instead."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, the following ",(0,a.jsx)(n.code,{children:"plugins"})," configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { homePlugin } from '@backstage/plugin-home';\n\ncreateApp({\n  // ...\n  plugins: [homePlugin],\n  // ...\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Can be converted to the following ",(0,a.jsx)(n.code,{children:"features"})," configuration:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"// plugins are now default exported via alpha subpath\nimport homePlugin from '@backstage/plugin-home/alpha';\n\ncreateApp({\n  // ...\n  features: [homePlugin],\n  // ...\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Plugins don't even have to be imported manually after installing their package if ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/app#feature-discovery",children:"features discovery"})," is enabled."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="in app-config.yaml"',children:"app:\n  # Enabling plugin and override features discovery\n  experimental: 'all'\n"})}),"\n",(0,a.jsx)(n.h3,{id:"featureflags",children:(0,a.jsx)(n.code,{children:"featureFlags"})}),"\n",(0,a.jsx)(n.p,{children:"Declaring features flags in the app is no longer supported, move these declarations to the appropriate plugins instead."}),"\n",(0,a.jsx)(n.p,{children:"For example, the following app feature flags configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"createApp({\n  // ...\n  featureFlags: [\n    {\n      pluginId: '',\n      name: 'tech-radar',\n      description: 'Enables the tech radar plugin',\n    },\n  ],\n  // ...\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Can be converted to the following plugin configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"createFrontendPlugin({\n  id: 'tech-radar',\n  // ...\n  featureFlags: [{ name: 'tech-radar' }],\n  // ...\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"components",children:(0,a.jsx)(n.code,{children:"components"})}),"\n",(0,a.jsxs)(n.p,{children:["Many app components are now installed as extensions instead using ",(0,a.jsx)(n.code,{children:"createComponentExtension"}),". See the section on ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/building-apps/index#configure-your-app",children:"configuring app components"})," for more information."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Router"})," component is now a built-in extension that you can ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"override"})," using ",(0,a.jsx)(n.code,{children:"createRouterExtension"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The Sign-in page is now installed as an extension, created using the ",(0,a.jsx)(n.code,{children:"SignInPageBlueprint"})," instead."]}),"\n",(0,a.jsx)(n.p,{children:"For example, the following sign-in page configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const app = createApp({\n  components: {\n    SignInPage: props => (\n      <SignInPage\n        {...props}\n        provider={{\n          id: 'github-auth-provider',\n          title: 'GitHub',\n          message: 'Sign in using GitHub',\n          apiRef: githubAuthApiRef,\n        }}\n      />\n    ),\n  },\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Can be converted to the following extension:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const signInPage = SignInPageBlueprint.make({\n  params: {\n    loader: async () => props =>\n      (\n        <SignInPage\n          {...props}\n          provider={{\n            id: 'github-auth-provider',\n            title: 'GitHub',\n            message: 'Sign in using GitHub',\n            apiRef: githubAuthApiRef,\n          }}\n        />\n      ),\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"themes",children:(0,a.jsx)(n.code,{children:"themes"})}),"\n",(0,a.jsxs)(n.p,{children:["Themes are now installed as extensions, created using ",(0,a.jsx)(n.code,{children:"ThemeBlueprint"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For example, the following theme configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const app = createApp({\n  themes: [\n    {\n      id: 'light',\n      title: 'Light',\n      variant: 'light',\n      Provider: ({ children }) => (\n        <UnifiedThemeProvider theme={customLightTheme}>\n          {children}\n        </UnifiedThemeProvider>\n      ),\n    },\n  ],\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Can be converted to the following extension:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const lightTheme = ThemeBlueprint.make({\n  name: 'light',\n  params: {\n    theme: {\n      id: 'light',\n      title: 'Light Theme',\n      variant: 'light',\n      icon: <LightIcon />,\n      Provider: ({ children }) => (\n        <UnifiedThemeProvider theme={builtinThemes.light} children={children} />\n      ),\n    },\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"configloader",children:(0,a.jsx)(n.code,{children:"configLoader"})}),"\n",(0,a.jsxs)(n.p,{children:["The config loader API has been slightly changed. Rather than returning a promise for an array of ",(0,a.jsx)(n.code,{children:"AppConfig"})," objects, it should now return the ",(0,a.jsx)(n.code,{children:"ConfigApi"})," directly."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const app = createApp({\n  async configLoader() {\n    const appConfigs = await loadAppConfigs();\n    // highlight-remove-next-line\n    return appConfigs;\n    // highlight-add-next-line\n    return { config: ConfigReader.fromConfigs(appConfigs) };\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"icons-1",children:(0,a.jsx)(n.code,{children:"icons"})}),"\n",(0,a.jsxs)(n.p,{children:["Icons are now installed as extensions, using the ",(0,a.jsx)(n.code,{children:"IconBundleBlueprint"})," to make new instances which can be added to the app."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { IconBundleBlueprint } from '@backstage/frontend-plugin-api';\n\nconst exampleIconBundle = IconBundleBlueprint.make({\n  name: 'example-bundle',\n  params: {\n    icons: {\n      user: MyOwnUserIcon,\n    },\n  },\n});\n\nconst app = createApp({\n  features: [\n    createFrontendModule({\n      pluginId: 'app',\n      extensions: [exampleIconBundle],\n    }),\n  ],\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"bindroutes",children:(0,a.jsx)(n.code,{children:"bindRoutes"})}),"\n",(0,a.jsxs)(n.p,{children:["Route bindings can still be done using this option, but you now also have the ability to bind routes using static configuration instead. See the section on ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/routes#binding-external-route-references",children:"binding routes"})," for more information."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that if you are binding routes from a legacy plugin that was converted using ",(0,a.jsx)(n.code,{children:"convertLegacyApp"}),", you will need to use the ",(0,a.jsx)(n.code,{children:"convertLegacyRouteRefs"})," and/or ",(0,a.jsx)(n.code,{children:"convertLegacyRouteRef"})," to convert the routes to be compatible with the new system."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, if both the ",(0,a.jsx)(n.code,{children:"catalogPlugin"})," and ",(0,a.jsx)(n.code,{children:"scaffolderPlugin"})," are legacy plugins, you can bind their routes like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const app = createApp({\n  features: convertLegacyApp(...),\n  bindRoutes({ bind }) {\n    bind(convertLegacyRouteRefs(catalogPlugin.externalRoutes), {\n      createComponent: convertLegacyRouteRef(scaffolderPlugin.routes.root),\n    });\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"__experimentaltranslations",children:(0,a.jsx)(n.code,{children:"__experimentalTranslations"})}),"\n",(0,a.jsxs)(n.p,{children:["Translations are now installed as extensions, created using ",(0,a.jsx)(n.code,{children:"TranslationBlueprint"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"For example, the following translations configuration:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { catalogTranslationRef } from '@backstage/plugin-catalog/alpha';\ncreateApp({\n  // ...\n  __experimentalTranslations: {\n    resources: [\n      createTranslationMessages({\n        ref: catalogTranslationRef,\n        catalog_page_create_button_title: 'Create Software',\n      }),\n    ],\n  },\n  // ...\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Can be converted to the following extension:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"TranslationBlueprint.make({\n  name: 'catalog-overrides',\n  params: {\n    resource: createTranslationMessages({\n      ref: catalogTranslationRef,\n      catalog_page_create_button_title: 'Create Software',\n    }),\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gradual-migration",children:"Gradual Migration"}),"\n",(0,a.jsxs)(n.p,{children:["After updating all ",(0,a.jsx)(n.code,{children:"createApp"})," options as well as using ",(0,a.jsx)(n.code,{children:"convertLegacyApp"})," to use your existing app structure, you should be able to start up the app and see that it still works. If that is not the case, make sure you read any error messages that you may see in the app as they can provide hints on what you need to fix. If you are still stuck, you can check if anyone else ran into the same issue in our ",(0,a.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues",children:"GitHub issues"}),", or ask for help in our ",(0,a.jsx)(n.a,{href:"https://discord.gg/backstage-687207715902193673",children:"community Discord"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Assuming your app is now working, let's continue by migrating the rest of the app element tree to use the new system."}),"\n",(0,a.jsxs)(n.p,{children:["First off we'll want to trim away any top-level elements in the app so that only the ",(0,a.jsx)(n.code,{children:"routes"})," are left. For example, continuing where we left off with the following elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/App.tsx"',children:"const legacyFeatures = convertLegacyApp(\n  <>\n    <AlertDisplay transientTimeoutMs={2500} />\n    <OAuthRequestDialog />\n    <AppRouter>\n      <Root>{routes}</Root>\n    </AppRouter>\n  </>,\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can remove all surrounding elements and just keep the ",(0,a.jsx)(n.code,{children:"routes"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/App.tsx"',children:"const legacyFeatures = convertLegacyApp(routes);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will remove many extension overrides that ",(0,a.jsx)(n.code,{children:"convertLegacyApp"})," put in place, and switch over the shell of the app to the new system. This includes the root layout of the app along with the elements, router, and sidebar. The app will likely not look the same as before, and you'll need to refer to the ",(0,a.jsx)(n.a,{href:"#sidebar",children:"sidebar"}),", ",(0,a.jsx)(n.a,{href:"#app-root-elements",children:"app root elements"})," and ",(0,a.jsx)(n.a,{href:"#app-root-wrappers",children:"app root wrappers"})," sections below for information on how to migrate those."]}),"\n",(0,a.jsxs)(n.p,{children:["Once that step is complete the work that remains is to migrate all of the ",(0,a.jsx)(n.a,{href:"#top-level-routes",children:"routes"})," and ",(0,a.jsx)(n.a,{href:"#entity-pages",children:"entity pages"})," in the app, including any plugins that do not yet support the new system. For information on how to migrate your own internal plugins, refer to the ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/building-plugins/migrating",children:"plugin migration guide"}),". For external plugins you will need to check the migration status of each plugin and potentially contribute to the effort."]}),"\n",(0,a.jsxs)(n.p,{children:["Once these migrations are complete you should be left with an empty ",(0,a.jsx)(n.code,{children:"convertLegacyApp(...)"})," call that you can now remove, and your app should be fully migrated to the new system! \ud83c\udf89"]}),"\n",(0,a.jsx)(n.h3,{id:"top-level-routes",children:"Top-level Routes"}),"\n",(0,a.jsxs)(n.p,{children:["Your top-level routes are the routes directly under the ",(0,a.jsx)(n.code,{children:"AppRouter"})," component with the ",(0,a.jsx)(n.code,{children:"<FlatRoutes>"})," element. In a small app they might look something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/App.tsx"',children:'const routes = (\n  <FlatRoutes>\n    <Route path="/catalog" element={<CatalogIndexPage />} />\n    <Route\n      path="/catalog/:namespace/:kind/:name"\n      element={<CatalogEntityPage />}\n    >\n      {entityPage}\n    </Route>\n    <Route path="/create" element={<ScaffolderPage />} />\n    <Route\n      path="/tech-radar"\n      element={<TechRadarPage width={1500} height={800} />}\n    />\n  </FlatRoutes>\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Each of these routes needs to be migrated to the new system. You can do it as gradually as you want, with the only restriction being that ",(0,a.jsx)(n.strong,{children:"all routes from a single plugin must be migrated at once"}),". This is because plugins discovered from these legacy routes will override any plugins that are installed in your app. If you for example only migrate one of the two routes defined by a plugin, the other route will remain and still override any plugin with the same ID, and you're left with a partial and likely broken plugin."]}),"\n",(0,a.jsx)(n.p,{children:"To migrate a route, you need to remove it from your list of routes and instead install the new version of the plugin in your app. Before doing this you should make sure that the plugin supports the new system. Let's remove the scaffolder route as an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="in packages/app/src/App.tsx"',children:'const routes = (\n  <FlatRoutes>\n    <Route path="/catalog" element={<CatalogIndexPage />} />\n    <Route\n      path="/catalog/:namespace/:kind/:name"\n      element={<CatalogEntityPage />}\n    >\n      {entityPage}\n    </Route>\n    {/* highlight-remove-next-line */}\n    <Route path="/create" element={<ScaffolderPage />} />\n    <Route\n      path="/tech-radar"\n      element={<TechRadarPage width={1500} height={800} />}\n    />\n  </FlatRoutes>\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If you are using ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/app#feature-discovery",children:"app feature discovery"})," the installation step is simple, it's already done! The new version of the scaffolder plugin was already discovered and present in the app, it was simply disabled because the plugin created from the legacy route had higher priority. If you do not use feature discovery, you will instead need to manually install the new scaffolder plugin in your app through the ",(0,a.jsx)(n.code,{children:"features"})," option of ",(0,a.jsx)(n.code,{children:"createApp"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Continue this process for each of your legacy routes until you have migrated all of them. For any plugin with additional extensions installed as children of the ",(0,a.jsx)(n.code,{children:"Route"}),", refer to the plugin READMEs for more detailed instructions. For the entity pages, refer to the ",(0,a.jsx)(n.a,{href:"#entity-pages",children:"separate section"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"entity-pages",children:"Entity Pages"}),"\n",(0,a.jsxs)(n.p,{children:["The entity pages are typically defined in ",(0,a.jsx)(n.code,{children:"packages/app/src/components/catalog"})," and rendered as a child of the ",(0,a.jsx)(n.code,{children:"/catalog/:namespace/:kind/:name"})," route. The entity pages are typically quite large and bringing in content from quite a lot of different plugins. At the moment we do not provide a way to gradually migrate entity pages to the new system, although that is planned as a future improvement. This means that the entire entity page and all of its plugins need to be migrated at once, including any other usages of those plugins."]}),"\n",(0,a.jsx)(n.h3,{id:"sidebar",children:"Sidebar"}),"\n",(0,a.jsxs)(n.p,{children:["New apps feature a built-in sidebar extension (",(0,a.jsx)(n.code,{children:"app/nav"}),") that will render all nav item extensions provided by plugins. This is a placeholder implementation and not intended as a long-term solution. In the future we will aim to provide a more flexible sidebar extension that allows for more customization out of the box."]}),"\n",(0,a.jsxs)(n.p,{children:["Because the built-in sidebar is quite limited you may want to override the sidebar with your own custom implementation. To do so, use ",(0,a.jsx)(n.code,{children:"createExtension"})," directly and refer to the ",(0,a.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/app/src/extensions/AppNav.tsx",children:"original sidebar implementation"}),". The following is an example of how to take your existing sidebar from the ",(0,a.jsx)(n.code,{children:"Root"})," component that you typically find in ",(0,a.jsx)(n.code,{children:"packages/app/src/components/Root.tsx"}),", and use it in an ",(0,a.jsx)(n.a,{href:"/docs/frontend-system/architecture/extension-overrides",children:"extension override"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const nav = createExtension({\n  namespace: 'app',\n  name: 'nav',\n  attachTo: { id: 'app/layout', input: 'nav' },\n  output: [coreExtensionData.reactElement],\n  factory({ inputs }) {\n    return [\n      coreExtensionData.reactElement(\n        <Sidebar>\n          {/* Sidebar contents from packages/app/src/components/Root.tsx go here */}\n        </Sidebar>,\n      ),\n    ];\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"app-root-elements",children:"App Root Elements"}),"\n",(0,a.jsxs)(n.p,{children:["App root elements are React elements that are rendered adjacent to your current ",(0,a.jsx)(n.code,{children:"Root"})," component. For example, in this snippet ",(0,a.jsx)(n.code,{children:"AlertDisplay"}),", ",(0,a.jsx)(n.code,{children:"OAuthRequestDialog"})," and ",(0,a.jsx)(n.code,{children:"VisitListener"})," are all app root elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"export default app.createRoot(\n  <>\n    {/* highlight-next-line */}\n    <AlertDisplay transientTimeoutMs={2500} />\n    {/* highlight-next-line */}\n    <OAuthRequestDialog />\n    <AppRouter>\n      {/* highlight-next-line */}\n      <VisitListener />\n      <Root>{routes}</Root>\n    </AppRouter>\n  </>,\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"AlertDisplay"})," and ",(0,a.jsx)(n.code,{children:"OAuthRequestDialog"})," are already provided as built-in extensions, and so will ",(0,a.jsx)(n.code,{children:"VisitListener"}),". But, if you have your own custom root elements you will need to migrate them to be extensions that you install in the app instead. Use ",(0,a.jsx)(n.code,{children:"createAppRootElementExtension"})," to create said extension and then install it in the app."]}),"\n",(0,a.jsxs)(n.p,{children:["Whether the element used to be rendered as a child of the ",(0,a.jsx)(n.code,{children:"AppRouter"})," or not doesn't matter. All new root app elements will be rendered as a child of the app router."]}),"\n",(0,a.jsx)(n.h3,{id:"app-root-wrappers",children:"App Root Wrappers"}),"\n",(0,a.jsxs)(n.p,{children:["App root wrappers are React elements that are rendered as a parent of the current ",(0,a.jsx)(n.code,{children:"Root"})," elements. For example, in this snippet the ",(0,a.jsx)(n.code,{children:"CustomAppBarrier"})," is an app root wrapper:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"export default app.createRoot(\n  <>\n    <AlertDisplay transientTimeoutMs={2500} />\n    <OAuthRequestDialog />\n    <AppRouter>\n      {/* highlight-next-line */}\n      <CustomAppBarrier>\n        <Root>{routes}</Root>\n        {/* highlight-next-line */}\n      </CustomAppBarrier>\n    </AppRouter>\n  </>,\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Any app root wrapper needs to be migrated to be an extension, created using ",(0,a.jsx)(n.code,{children:"AppRootWrapperBlueprint"}),". Note that if you have multiple wrappers they must be completely independent of each other, i.e. the order in which they the appear in the React tree should not matter. If that is not the case then you should group them into a single wrapper."]}),"\n",(0,a.jsxs)(n.p,{children:["Here is an example converting the ",(0,a.jsx)(n.code,{children:"CustomAppBarrier"})," into extension:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"createApp({\n  // ...\n  features: [\n    createFrontendModule({\n      pluginId: 'app',\n      extensions: [\n        AppRootWrapperBlueprint.make({\n          name: 'custom-app-barrier',\n          params: {\n            // Whenever your component uses legacy core packages, wrap it with \"compatWrapper\"\n            // e.g. props => compatWrapper(<CustomAppBarrier {...props} />)\n            Component: CustomAppBarrier,\n          },\n        }),\n      ],\n    }),\n  ],\n  // ...\n});\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var a=t(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var a,o={},c=null,p=null;for(a in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,a)&&!l.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:i,type:e,key:c,ref:p,props:o,_owner:r.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(296540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);