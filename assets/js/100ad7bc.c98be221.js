/*! For license information please see 100ad7bc.c98be221.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[153219],{765023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(474848),r=t(28453);const s={id:"getting-started",title:"Getting Started with Search",description:"How to set up and install Backstage Search"},c=void 0,o={id:"features/search/getting-started",title:"Getting Started with Search",description:"How to set up and install Backstage Search",source:"@site/versioned_docs/version-stable/features/search/getting-started.md",sourceDirName:"features/search",slug:"/features/search/getting-started",permalink:"/docs/features/search/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/search/getting-started.md",tags:[],version:"stable",frontMatter:{id:"getting-started",title:"Getting Started with Search",description:"How to set up and install Backstage Search"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/features/search/"},next:{title:"Search Concepts",permalink:"/docs/features/search/concepts"}},i={},l=[{value:"Adding Search to the Frontend",id:"adding-search-to-the-frontend",level:2},{value:"Using the Search Modal",id:"using-the-search-modal",level:3},{value:"Adding Search to the Backend",id:"adding-search-to-the-backend",level:2},{value:"Customizing Search",id:"customizing-search",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Search functions as a plugin to Backstage, so you will need to use Backstage to\nuse Search."}),"\n",(0,a.jsxs)(n.p,{children:["If you haven't setup Backstage already, start\n",(0,a.jsx)(n.a,{href:"/docs/getting-started/",children:"here"}),"."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["If you used ",(0,a.jsx)(n.code,{children:"npx @backstage/create-app"}),", and you have a search page defined in\n",(0,a.jsx)(n.code,{children:"packages/app/src/components/search"}),", skip to\n",(0,a.jsx)(n.a,{href:"#customizing-search",children:(0,a.jsx)(n.code,{children:"Customizing Search"})})," below."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"adding-search-to-the-frontend",children:"Adding Search to the Frontend"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/app add @backstage/plugin-search @backstage/plugin-search-react\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Create a new ",(0,a.jsx)(n.code,{children:"packages/app/src/components/search/SearchPage.tsx"})," file in your\nBackstage app with the following contents:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import React from 'react';\nimport { Content, Header, Page } from '@backstage/core-components';\nimport { Grid, List, Card, CardContent } from '@material-ui/core';\nimport {\n  SearchBar,\n  SearchResult,\n  DefaultResultListItem,\n  SearchFilter,\n} from '@backstage/plugin-search-react';\nimport { CatalogSearchResultListItem } from '@backstage/plugin-catalog';\n\nexport const searchPage = (\n  <Page themeId=\"home\">\n    <Header title=\"Search\" />\n    <Content>\n      <Grid container direction=\"row\">\n        <Grid item xs={12}>\n          <SearchBar />\n        </Grid>\n        <Grid item xs={3}>\n          <Card>\n            <CardContent>\n              <SearchFilter.Select\n                name=\"kind\"\n                values={['Component', 'Template']}\n              />\n            </CardContent>\n            <CardContent>\n              <SearchFilter.Checkbox\n                name=\"lifecycle\"\n                values={['experimental', 'production']}\n              />\n            </CardContent>\n          </Card>\n        </Grid>\n        <Grid item xs={9}>\n          <SearchResult>\n            {({ results }) => (\n              <List>\n                {results.map(result => {\n                  switch (result.type) {\n                    case 'software-catalog':\n                      return (\n                        <CatalogSearchResultListItem\n                          key={result.document.location}\n                          result={result.document}\n                          highlight={result.highlight}\n                        />\n                      );\n                    default:\n                      return (\n                        <DefaultResultListItem\n                          key={result.document.location}\n                          result={result.document}\n                          highlight={result.highlight}\n                        />\n                      );\n                  }\n                })}\n              </List>\n            )}\n          </SearchResult>\n        </Grid>\n      </Grid>\n    </Content>\n  </Page>\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Bind the above Search Page to the ",(0,a.jsx)(n.code,{children:"/search"})," route in your\n",(0,a.jsx)(n.code,{children:"packages/app/src/App.tsx"})," file, like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { SearchPage } from '@backstage/plugin-search';\nimport { searchPage } from './components/search/SearchPage';\n\nconst routes = (\n  <FlatRoutes>\n    <Route path=\"/search\" element={<SearchPage />}>\n      {searchPage}\n    </Route>\n  </FlatRoutes>\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"using-the-search-modal",children:"Using the Search Modal"}),"\n",(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.code,{children:"Root.tsx"}),", add the ",(0,a.jsx)(n.code,{children:"SidebarSearchModal"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"import { SidebarSearchModal } from '@backstage/plugin-search';\n\nexport const Root = ({ children }: PropsWithChildren<{}>) => (\n  <SidebarPage>\n    <Sidebar>\n      <SidebarLogo />\n      <SidebarSearchModal />\n      <SidebarDivider />\n...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For more information about using ",(0,a.jsx)(n.code,{children:"Root.tsx"}),", please see\n",(0,a.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/packages/create-app/CHANGELOG.md#0315",children:"the changelog"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"adding-search-to-the-backend",children:"Adding Search to the Backend"}),"\n",(0,a.jsx)(n.p,{children:"Add the following plugins into your backend app:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-search-backend @backstage/plugin-search-backend-module-pg @backstage/plugin-search-backend-module-catalog @backstage/plugin-search-backend-module-techdocs\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then add the following lines:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"const backend = createBackend();\n\n// Other plugins...\n\n/* highlight-add-start */\n// search plugin\nbackend.add(import('@backstage/plugin-search-backend'));\n\n// search engines\nbackend.add(import('@backstage/plugin-search-backend-module-pg'));\n\n// search collators\nbackend.add(import('@backstage/plugin-search-backend-module-catalog'));\nbackend.add(import('@backstage/plugin-search-backend-module-techdocs'));\n/* highlight-add-end */\n\nbackend.start();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["With the above setup Search will use the ",(0,a.jsx)(n.a,{href:"https://github.com/olivernn/lunr.js",children:"Lunr"})," in-memory Search Engine but if your have Postgres setup as your database then it will use Postgres as your Search Engine. Learn more in the ",(0,a.jsx)(n.a,{href:"/docs/features/search/search-engines",children:"Search Engines"})," documentation."]}),"\n",(0,a.jsxs)(n.p,{children:["The above also sets up two Collators for you - Catalog and TechDocs - which will index content from these two locations so that you can easily search them. Learn more in the ",(0,a.jsx)(n.a,{href:"/docs/features/search/collators",children:"Collators documentation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"customizing-search",children:"Customizing Search"}),"\n",(0,a.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,a.jsxs)(n.p,{children:["The Search Plugin web library (",(0,a.jsx)(n.code,{children:"@backstage/plugin-search-react"}),") exposes several default filter types as static properties,\nincluding ",(0,a.jsx)(n.code,{children:"<SearchFilter.Select />"})," and ",(0,a.jsx)(n.code,{children:"<SearchFilter.Checkbox />"}),". These allow\nyou to provide values relevant to your Backstage instance that, when selected,\nget passed to the backend."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"{2-5,8-11}",children:"<CardContent>\n  <SearchFilter.Select\n    name=\"kind\"\n    values={['Component', 'Template']}\n  />\n</CardContent>\n<CardContent>\n  <SearchFilter.Checkbox\n    name=\"lifecycle\"\n    values={['production', 'experimental']}\n  />\n</CardContent>\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you have advanced filter needs, you can specify your own filter component\nlike this (although new core filter contributions are welcome):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useSearch, SearchFilter } from '@backstage/plugin-search-react';\n\nconst MyCustomFilter = () => {\n  // Note: filters contain filter data from other filter components. Be sure\n  // not to clobber other filters' data!\n  const { filters, setFilters } = useSearch();\n\n  return (/* ... */);\n};\n\n// Which could be rendered like this:\n<SearchFilter component={MyCustomFilter} />\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It's good practice for search results to highlight information that was used to\nreturn it in the first place! The code below highlights how you might specify a\ncustom result item component, using the ",(0,a.jsx)(n.code,{children:"<CatalogSearchResultListItem />"})," component as\nan example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"{7-13}",children:"<SearchResult>\n  {({ results }) => (\n    <List>\n      {results.map(result => {\n        // result.type is the index type defined by the collator.\n        switch (result.type) {\n          case 'software-catalog':\n            return (\n              <CatalogSearchResultListItem\n                key={result.document.location}\n                result={result.document}\n                highlight={result.highlight}\n              />\n            );\n          // ...\n        }\n      })}\n    </List>\n  )}\n</SearchResult>\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["For more advanced customization of the Search frontend, also see how to guides such as ",(0,a.jsx)(n.a,{href:"/docs/features/search/how-to-guides#how-to-implement-your-own-search-api",children:"How to implement your own Search API"})," and ",(0,a.jsx)(n.a,{href:"/docs/features/search/how-to-guides#how-to-customize-search-results-highlighting-styling",children:"How to customize search results highlighting styling"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"backend",children:"Backend"}),"\n",(0,a.jsxs)(n.p,{children:["Backstage Search isn't a search engine itself, rather, it provides an interface\nbetween your Backstage instance and a\n",(0,a.jsx)(n.a,{href:"/docs/features/search/concepts#search-engines",children:"Search Engine"})," of your choice. Currently, we only\nsupport two engines, an in-memory search Engine called Lunr and Elasticsearch.\nSee ",(0,a.jsx)(n.a,{href:"/docs/features/search/search-engines",children:"Search Engines"})," documentation for more information how\nto configure these in your Backstage instance."]}),"\n",(0,a.jsxs)(n.p,{children:["Backstage Search can be used to power search of anything! Plugins like the\nCatalog offer default ",(0,a.jsx)(n.a,{href:"/docs/features/search/concepts#collators",children:"collators"})," (e.g.\n",(0,a.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/df12cc25aa4934a98bc42ed03c07f64a1a0a9d72/plugins/catalog-backend/src/search/DefaultCatalogCollator.ts",children:"DefaultCatalogCollator"}),")\nwhich are responsible for providing documents\n",(0,a.jsx)(n.a,{href:"/docs/features/search/concepts#documents-and-indices",children:"to be indexed"}),". You can register any\nnumber of collators with the ",(0,a.jsx)(n.code,{children:"IndexBuilder"})," like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const indexBuilder = new IndexBuilder({ logger: env.logger, searchEngine });\n\nconst every10MinutesSchedule = env.scheduler.createScheduledTaskRunner({\n  frequency: { minutes: 10 },\n  timeout: { minutes: 15 },\n  initialDelay: { seconds: 3 },\n});\n\nconst everyHourSchedule = env.scheduler.createScheduledTaskRunner({\n  frequency: { hours: 1 },\n  timeout: { minutes: 90 },\n  initialDelay: { seconds: 3 },\n});\n\nindexBuilder.addCollator({\n  schedule: every10MinutesSchedule,\n  factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n  }),\n});\n\nindexBuilder.addCollator({\n  schedule: everyHourSchedule,\n  factory: new MyCustomCollatorFactory(),\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Backstage Search builds and maintains its index\n",(0,a.jsx)(n.a,{href:"/docs/features/search/concepts#the-scheduler",children:"on a schedule"}),". You can change how often the\nindexes are rebuilt for a given type of document. You may want to do this if\nyour documents are updated more or less frequently. You can do so by configuring\na scheduled ",(0,a.jsx)(n.code,{children:"SchedulerServiceTaskRunner"})," to pass into the ",(0,a.jsx)(n.code,{children:"schedule"})," value, like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",metastring:"{3}",children:"const every10MinutesSchedule = env.scheduler.createScheduledTaskRunner({\n  frequency: { minutes: 10 },\n  timeout: { minutes: 15 },\n  initialDelay: { seconds: 3 },\n});\n\nindexBuilder.addCollator({\n  schedule: every10MinutesSchedule,\n  factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n  }),\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note: if you are using the in-memory Lunr search engine, you probably want to\nimplement a non-distributed ",(0,a.jsx)(n.code,{children:"SchedulerServiceTaskRunner"})," like the following to ensure consistency\nif you're running multiple search backend nodes (alternatively, you can configure\nthe search plugin to use a non-distributed database such as\n",(0,a.jsx)(n.a,{href:"/docs/tutorials/configuring-plugin-databases#postgresql-and-sqlite-3",children:"SQLite"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import {\n  SchedulerServiceTaskRunner,\n  SchedulerServiceTaskInvocationDefinition,\n} from '@backstage/backend-plugin-api';\n\nconst schedule: SchedulerServiceTaskRunner = {\n  run: async (task: SchedulerServiceTaskInvocationDefinition) => {\n    const startRefresh = async () => {\n      while (!task.signal?.aborted) {\n        try {\n          await task.fn(task.signal);\n        } catch {\n          // ignore intentionally\n        }\n\n        await new Promise(resolve => setTimeout(resolve, 600 * 1000));\n      }\n    };\n    startRefresh();\n  },\n};\n\nindexBuilder.addCollator({\n  schedule,\n  factory: DefaultCatalogCollatorFactory.fromConfig(env.config, {\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n  }),\n});\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["For more advanced customization of the Search backend, also see how to guides such as ",(0,a.jsx)(n.a,{href:"/docs/features/search/how-to-guides#how-to-index-techdocs-documents",children:"How to index TechDocs documents"})," and ",(0,a.jsx)(n.a,{href:"/docs/features/search/how-to-guides#how-to-limit-what-can-be-searched-in-the-software-catalog",children:"How to limit what can be searched in the Software Catalog"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var a=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,s={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,a)&&!i.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:o.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var a=t(296540);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);