/*! For license information please see 6779d9fd.b8bad9a0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[784113],{129492:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(474848),a=t(28453);const i={},c="Declarative Integrated Search Plugin",r={id:"features/search/declarative-integration",title:"Declarative Integrated Search Plugin",description:"Disclaimer:",source:"@site/versioned_docs/version-stable/features/search/declarative-integration.md",sourceDirName:"features/search",slug:"/features/search/declarative-integration",permalink:"/docs/features/search/declarative-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/search/declarative-integration.md",tags:[],version:"stable",frontMatter:{}},o={},l=[{value:"Main Concepts",id:"main-concepts",level:2},{value:"Search Plugin",id:"search-plugin",level:2},{value:"Installation",id:"installation",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Customizations",id:"customizations",level:3},{value:"Future Enhancement Opportunities",id:"future-enhancement-opportunities",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"declarative-integrated-search-plugin",children:"Declarative Integrated Search Plugin"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Disclaimer:"}),"\nDeclarative integration is in an experimental stage and is not recommended for production."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is a guide for experimenting with ",(0,s.jsx)(n.code,{children:"Search"})," in a declarative integrated Backstage front-end application."]}),"\n",(0,s.jsx)(n.h2,{id:"main-concepts",children:"Main Concepts"}),"\n",(0,s.jsxs)(n.p,{children:["Using declarative integration, you can customize your Backstage instance without writing code, see this ",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/18372",children:"RFC"})," for more information."]}),"\n",(0,s.jsx)(n.p,{children:"In the new frontend system, everything that extends Backstage's core features is called an extension, so an extension can be anything from an API to a page component."}),"\n",(0,s.jsx)(n.p,{children:"Extensions produces output artifacts and these artifacts are inputs consumed by other extensions:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"search extensions example",src:t(629023).A+"",width:"1160",height:"365"})}),"\n",(0,s.jsxs)(n.p,{children:["In the image above, a ",(0,s.jsx)(n.code,{children:"SearchResultItem"})," extension outputs a component and this component is injected as input to the ",(0,s.jsx)(n.code,{children:"SearchPage"}),' "items" attachment point. The ',(0,s.jsx)(n.code,{children:"SearchPage"})," in turn uses the search result items to compose a search page element and outputs a route path and the page element so they are used as inputs attached to the ",(0,s.jsx)(n.code,{children:"CoreRoutes"})," extension. Finally, the ",(0,s.jsx)(n.code,{children:"CoreRoutes"})," renders the page element when the location matches the search page path."]}),"\n",(0,s.jsxs)(n.p,{children:["The basic concepts briefly mentioned are crucial to understanding how the declarative version of the ",(0,s.jsx)(n.code,{children:"Search"})," plugin works."]}),"\n",(0,s.jsx)(n.h2,{id:"search-plugin",children:"Search Plugin"}),"\n",(0,s.jsx)(n.p,{children:"The search plugin is a collection of extensions that implement the search feature in Backstage."}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Only one step is required to start using the ",(0,s.jsx)(n.code,{children:"Search"})," plugin within declarative integration, so all you have to do is to install the ",(0,s.jsx)(n.code,{children:"@backstage/plugin-catalog"})," and ",(0,s.jsx)(n.code,{children:"@backstage/plugin-search"})," packages, (e.g., ",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/packages/app-next",children:"app-next"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn add @backstage/plugin-catalog @backstage/plugin-search\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Search"})," plugin depends on the ",(0,s.jsx)(n.code,{children:"Catalog API"}),", that's the reason we have to install the ",(0,s.jsx)(n.code,{children:" @backstage/plugin-catalog"})," package too."]}),"\n",(0,s.jsx)(n.h3,{id:"extensions",children:"Extensions"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Search"})," plugin provides the following ",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/3f4a44aef39bd8dbf5098e60b6fdf66fd754c6d9/plugins/search/src/alpha.tsx#L246",children:"extensions preset"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SearchApi"}),": Outputs a concrete implementation for the ",(0,s.jsx)(n.code,{children:"Search API"})," that is attached as an input to the ",(0,s.jsx)(n.code,{children:"Core"})," apis holder;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SearchPage"}),": Outputs a component that represents the advanced ",(0,s.jsx)(n.code,{children:"Search"})," page interface, this extension expects ",(0,s.jsx)(n.code,{children:"Search"})," result items components as inputs to use them for rendering results in a custom way;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SearchNavItem"}),": It is an extension that outputs a data that represents a ",(0,s.jsx)(n.code,{children:"Search"})," item in the main application sidebar, in other words, it inputs a sidebar item to the ",(0,s.jsx)(n.code,{children:"Core"})," nav extension."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Search"})," extensions are configurable via ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," file in the ",(0,s.jsx)(n.code,{children:"app.extensions"})," field using the extension id as the configuration key:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example disabling the search page extension"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - page:search: false # \u2728\n    - nav-item:search: false # \u2728\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Example setting the search sidebar item title"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - nav-item:search: # \u2728\n        config:\n          title: 'Search Page'\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Known limitations:"}),"\nIt is currently not possible to open modals in sidebar items and also configure a different icon via configuration file, but it is already on the maintainers' radar."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"customizations",children:"Customizations"}),"\n",(0,s.jsxs)(n.p,{children:["Plugin developers can use the ",(0,s.jsx)(n.code,{children:"createSearchResultItemExtension"})," factory provided by the ",(0,s.jsx)(n.code,{children:"@backstage/plugin-search-react"})," for building their own custom ",(0,s.jsx)(n.code,{children:"Search"})," result item extensions."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Example creating a custom ",(0,s.jsx)(n.code,{children:"TechDocsSearchResultItemExtension"})]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// plugins/techdocs/alpha.tsx\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react/alpha';\n\n/** @alpha */\nexport const TechDocsSearchResultListItemExtension =\n  createSearchResultListItemExtension({\n    id: 'techdocs',\n    configSchema: createSchemaFromZod(z =>\n      z.object({\n        noTrack: z.boolean().default(false),\n        lineClamp: z.number().default(5),\n      }),\n    ),\n    predicate: result => result.type === 'techdocs',\n    component: async ({ config }) => {\n      const { TechDocsSearchResultListItem } = await import(\n        './components/TechDocsSearchResultListItem'\n      );\n      return props => <TechDocsSearchResultListItem {...props} {...config} />;\n    },\n  });\n"})}),"\n",(0,s.jsxs)(n.p,{children:['In the snippet above, a plugin developer is providing a custom component for rendering search results of type "techdocs". The custom result item extension will be enabled by default once the ',(0,s.jsx)(n.code,{children:"@backstage/plugin-techdocs"})," package is installed, that means adopters don't have to enable the extension manually via configuration file."]}),"\n",(0,s.jsxs)(n.p,{children:["When a Backstage adopter doesn't want to use the custom ",(0,s.jsx)(n.code,{children:"TechDocs"})," search result item after installing the ",(0,s.jsx)(n.code,{children:"TechDocs"})," plugin, they could disable it via Backstage configuration file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - plugin.search.result.item.techdocs: false # \u2728\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Because a configuration schema was provided to the extension factory, Backstage adopters will be able to customize ",(0,s.jsx)(n.code,{children:"TechDocs"})," search results ",(0,s.jsx)(n.strong,{children:"line clamp"})," that defaults to 3 and also ",(0,s.jsx)(n.strong,{children:"disable automatic analytics events tracking"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# app-config.yaml\napp:\n  extensions:\n    - plugin.search.result.item.techdocs:\n        config: # \u2728\n          noTrack: true\n          lineClamp: 3\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"createSearchResultItemExtension"})," function returns a Backstage's extension representation as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'{\n  "$$type": "@backstage/Extension", // [1]\n  "id": "plugin.search.result.item.techdocs", // [2]\n  "at": "plugin.search.page/items", // [3]\n  "inputs": {} // [4\ufe0f]\n  "output": { // [5\ufe0f]\n    "item": {\n      "$$type": "@backstage/ExtensionDataRef",\n      "id": "plugin.search.result.item.data",\n      "config": {}\n    }\n  },\n  "configSchema": { // [6\ufe0f]\n    "schema": {\n      "type": "object",\n      "properties": {\n        "noTrack": {\n          "type": "boolean",\n          "default": false\n        },\n        "lineClamp": {\n          "type": "number",\n          "default": 5\n        }\n      },\n      "additionalProperties": false,\n      "$schema": "http://json-schema.org/draft-07/schema#"\n    }\n  },\n  "disabled": false, // [7\ufe0f]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this object, you can see exactly what will happen once the custom extension is installed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[1] $$type"}),": declares that the object represents an extension;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[2] id"}),": Is a unique identification for the extension, the ",(0,s.jsx)(n.code,{children:"plugin.search.result.item.techdocs"})," is the key used to configure the extension in the ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," file;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[3] at"}),": It represents the extension attachment point, so the value ",(0,s.jsx)(n.code,{children:"plugin.search.page/items"})," says that the ",(0,s.jsx)(n.code,{children:"TechDocs"}),'\'s search result item output will be injected as input on the "items" attachment expected by the search page extension;']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[4] inputs"}),": in this case is an empty object because this extension doesn't expect inputs;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[5] output"}),": Object representing the artifact produced by the ",(0,s.jsx)(n.code,{children:"TechDocs"})," result item extension, on the example, it is a react component reference;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[6] configSchema"}),": represents the ",(0,s.jsx)(n.code,{children:"TechDocs"})," search result item configuration definition, this is the same schema that adopters will use for customizing the extension via ",(0,s.jsx)(n.code,{children:"app-config.yaml"})," file;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"[7] disable"}),": Says that the result item extension will be enable by default when the ",(0,s.jsx)(n.code,{children:"TechDocs"})," plugin is installed in the app."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To complete the development cycle for creating a custom search result item extension, we should provide the extension via ",(0,s.jsx)(n.code,{children:"TechDocs"})," plugin:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// plugins/techdocs/alpha.tsx\nimport { createPlugin } from \"@backstage/frontend-plugin-api\";\n\n// plugins should be always exported as default\nexport default createPlugin({\n  id: 'techdocs'\n  extensions: [TechDocsSearchResultItemExtension]\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here is the ",(0,s.jsx)(n.code,{children:"plugins/techdocs/alpha.tsx"})," final version, and you can also take a look at the ",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/alpha.tsx",children:"actual implementation"})," of a custom ",(0,s.jsx)(n.code,{children:"TechDocs"})," search result item:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// plugins/techdocs/alpha.tsx\nimport { createPlugin } from '@backstage/frontend-plugin-api';\nimport { createSearchResultListItemExtension } from '@backstage/plugin-search-react/alpha';\n\n/** @alpha */\nexport const TechDocsSearchResultListItemExtension =\n  createSearchResultListItemExtension({\n    id: 'techdocs',\n    configSchema: createSchemaFromZod(z =>\n      z.object({\n        noTrack: z.boolean().default(false),\n        lineClamp: z.number().default(5),\n      }),\n    ),\n    predicate: result => result.type === 'techdocs',\n    component: async ({ config }) => {\n      const { TechDocsSearchResultListItem } = await import(\n        './components/TechDocsSearchResultListItem'\n      );\n      return props => <TechDocsSearchResultListItem {...props} {...config} />;\n    },\n  });\n\n/** @alpha */\nexport default createPlugin({\n  // plugins should be always exported as default\n  id: 'techdocs',\n  extensions: [TechDocsSearchResultListItemExtension],\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"future-enhancement-opportunities",children:"Future Enhancement Opportunities"}),"\n",(0,s.jsx)(n.p,{children:"Backstage maintainers are currently working on the extension replacement feature, and with this release, adopters will also be able to replace extensions provided by plugins, so stay tuned for future updates to this documentation."}),"\n",(0,s.jsxs)(n.p,{children:["The first version of the ",(0,s.jsx)(n.code,{children:"SearchPage"})," extension makes room for the ",(0,s.jsx)(n.code,{children:"Search"})," plugin maintainers to convert filters into extensions as well in the future, if you also would like to collaborate with them on this idea, don't hesitate to open an issue and submit a pull request, your contribution is more than welcome!"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var s=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var s,i={},l=null,h=null;for(s in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,s)&&!o.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:a,type:e,key:l,ref:h,props:i,_owner:r.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},629023:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/search-extensions-example.drawio-a2709032c54e4fb3c455503f5224b5b1.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(296540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);