/*! For license information please see 8a9d0ac5.a2ec98f1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[335968],{791395:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=a(474848),t=a(28453);const s={id:"architecture-overview",title:"Architecture overview",description:"Documentation on Architecture overview"},o=void 0,r={id:"overview/architecture-overview",title:"Architecture overview",description:"Documentation on Architecture overview",source:"@site/versioned_docs/version-stable/overview/architecture-overview.md",sourceDirName:"overview",slug:"/overview/architecture-overview",permalink:"/docs/overview/architecture-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/overview/architecture-overview.md",tags:[],version:"stable",frontMatter:{id:"architecture-overview",title:"Architecture overview",description:"Documentation on Architecture overview"},sidebar:"docs",previous:{title:"What is Backstage?",permalink:"/docs/overview/what-is-backstage"},next:{title:"Roadmap",permalink:"/docs/overview/roadmap"}},c={},l=[{value:"Terminology",id:"terminology",level:2},{value:"Overview",id:"overview",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Plugins and plugin backends",id:"plugins-and-plugin-backends",level:2},{value:"Installing plugins",id:"installing-plugins",level:3},{value:"Plugin architecture",id:"plugin-architecture",level:3},{value:"Standalone plugins",id:"standalone-plugins",level:4},{value:"Service backed plugins",id:"service-backed-plugins",level:4},{value:"Third-party backed plugins",id:"third-party-backed-plugins",level:3},{value:"Package Architecture",id:"package-architecture",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Plugin Packages",id:"plugin-packages",level:3},{value:"Frontend Packages",id:"frontend-packages",level:3},{value:"Backend Packages",id:"backend-packages",level:3},{value:"Common Packages",id:"common-packages",level:3},{value:"Deciding where you place your code",id:"deciding-where-you-place-your-code",level:3},{value:"Databases",id:"databases",level:2},{value:"Cache",id:"cache",level:2},{value:"Use memory for cache",id:"use-memory-for-cache",level:3},{value:"Use memcache for cache",id:"use-memcache-for-cache",level:3},{value:"Use Redis for cache",id:"use-redis-for-cache",level:3},{value:"Containerization",id:"containerization",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(n.p,{children:"Backstage is constructed out of three parts. We separate Backstage in this way\nbecause we see three groups of contributors that work with Backstage in three\ndifferent ways."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Core - Base functionality built by core developers in the open source project."}),"\n",(0,i.jsx)(n.li,{children:"App - The app is an instance of a Backstage app that is deployed and tweaked.\nThe app ties together core functionality with additional plugins. The app is\nbuilt and maintained by app developers, usually a productivity team within a\ncompany."}),"\n",(0,i.jsx)(n.li,{children:"Plugins - Additional functionality to make your Backstage app useful for your\ncompany. Plugins can be specific to a company or open sourced and reusable. At\nSpotify we have over 100 plugins built by over 50 different teams. It has been\nvery powerful to get contributions from various infrastructure teams added\ninto a single unified developer experience."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"The following diagram shows how Backstage might look when deployed inside a\ncompany which uses the Tech Radar plugin, the Lighthouse plugin, the CircleCI\nplugin and the software catalog."}),"\n",(0,i.jsx)(n.p,{children:"There are 3 main components in this architecture:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The core Backstage UI"}),"\n",(0,i.jsx)(n.li,{children:"The UI plugins and their backing services"}),"\n",(0,i.jsx)(n.li,{children:"Databases"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Running this architecture in a real environment typically involves\ncontainerising the components. Various commands are provided for accomplishing\nthis."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"The architecture of a basic Backstage application",src:a(281885).A+"",width:"957",height:"622"})}),"\n",(0,i.jsx)(n.h2,{id:"user-interface",children:"User Interface"}),"\n",(0,i.jsxs)(n.p,{children:["The UI is a thin, client-side wrapper around a set of plugins. It provides some\ncore UI components and libraries for shared activities such as config\nmanagement. [",(0,i.jsx)(n.a,{href:"https://demo.backstage.io/catalog",children:"live demo"}),"]"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"UI with different components highlighted",src:a(887277).A+"",width:"1547",height:"997"})}),"\n",(0,i.jsxs)(n.p,{children:["Each plugin typically makes itself available in the UI on a dedicated URL. For\nexample, the Lighthouse plugin is registered with the UI on ",(0,i.jsx)(n.code,{children:"/lighthouse"}),".\n[",(0,i.jsx)(n.a,{href:"https://backstage.io/blog/2020/04/06/lighthouse-plugin",children:"learn more"}),"]"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"The lighthouse plugin UI",src:a(538203).A+"",width:"1543",height:"996"})}),"\n",(0,i.jsxs)(n.p,{children:["The CircleCI plugin is available on ",(0,i.jsx)(n.code,{children:"/circleci"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CircleCI Plugin UI",src:a(17070).A+"",width:"1545",height:"992"})}),"\n",(0,i.jsx)(n.h2,{id:"plugins-and-plugin-backends",children:"Plugins and plugin backends"}),"\n",(0,i.jsxs)(n.p,{children:["Each plugin is a client side application which mounts itself on the UI. Plugins\nare written in TypeScript or JavaScript. They each live in their own directory\nin the ",(0,i.jsx)(n.code,{children:"plugins"})," folder. For example, the source code for the catalog plugin\nis available at\n",(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog",children:"plugins/catalog"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"installing-plugins",children:"Installing plugins"}),"\n",(0,i.jsxs)(n.p,{children:["Plugins are typically installed as React components in your Backstage\napplication. For example,\n",(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/packages/app/src/App.tsx",children:"here"}),"\nis a file that imports many full-page plugins in the Backstage sample app."]}),"\n",(0,i.jsxs)(n.p,{children:["An example of one of these plugin components is the ",(0,i.jsx)(n.code,{children:"CatalogIndexPage"}),", which is\na full-page view that allows you to browse entities in the Backstage catalog. It\nis installed in the app by importing it and adding it as an element like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import { CatalogIndexPage } from '@backstage/plugin-catalog';\n\n...\n\nconst routes = (\n  <FlatRoutes>\n    ...\n    <Route path=\"/catalog\" element={<CatalogIndexPage />} />\n    ...\n  </FlatRoutes>\n);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that we use ",(0,i.jsx)(n.code,{children:'"/catalog"'})," as our path to this plugin page, but we can choose\nany route we want for the page, as long as it doesn't collide with the routes\nthat we choose for the other plugins in the app."]}),"\n",(0,i.jsxs)(n.p,{children:['These components that are exported from plugins are referred to as "Plugin\nExtension Components", or "Extension Components". They are regular React\ncomponents, but in addition to being able to be rendered by React, they also\ncontain various pieces of metadata that is used to wire together the entire app.\nExtension components are created using ',(0,i.jsx)(n.code,{children:"create*Extension"})," methods, which you can\nread more about in the\n",(0,i.jsx)(n.a,{href:"/docs/plugins/composability",children:"composability documentation"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"As of this moment, there is no config based install procedure for plugins. Some\ncode changes are required."}),"\n",(0,i.jsx)(n.h3,{id:"plugin-architecture",children:"Plugin architecture"}),"\n",(0,i.jsx)(n.p,{children:"Architecturally, plugins can take three forms:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Standalone"}),"\n",(0,i.jsx)(n.li,{children:"Service backed"}),"\n",(0,i.jsx)(n.li,{children:"Third-party backed"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"standalone-plugins",children:"Standalone plugins"}),"\n",(0,i.jsxs)(n.p,{children:["Standalone plugins run entirely in the browser.\n",(0,i.jsx)(n.a,{href:"https://demo.backstage.io/tech-radar",children:"The Tech Radar plugin"}),", for example,\nsimply renders hard-coded information. It doesn't make any API requests to other\nservices."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tech radar plugin ui",src:a(206682).A+"",width:"1767",height:"998"})}),"\n",(0,i.jsx)(n.p,{children:"The architecture of the Tech Radar installed into a Backstage app is very\nsimple."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"ui and tech radar plugin connected together",src:a(376828).A+"",width:"952",height:"385"})}),"\n",(0,i.jsx)(n.h4,{id:"service-backed-plugins",children:"Service backed plugins"}),"\n",(0,i.jsx)(n.p,{children:"Service backed plugins make API requests to a service which is within the\npurview of the organisation running Backstage."}),"\n",(0,i.jsxs)(n.p,{children:["The Lighthouse plugin, for example, makes requests to the\n",(0,i.jsx)(n.a,{href:"https://github.com/spotify/lighthouse-audit-service",children:"lighthouse-audit-service"}),".\nThe ",(0,i.jsx)(n.code,{children:"lighthouse-audit-service"})," is a microservice which runs a copy of Google's\n",(0,i.jsx)(n.a,{href:"https://github.com/GoogleChrome/lighthouse/",children:"Lighthouse library"})," and stores the\nresults in a PostgreSQL database."]}),"\n",(0,i.jsx)(n.p,{children:"Its architecture looks like this:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"lighthouse plugin backed to microservice and database",src:a(969727).A+"",width:"953",height:"459"})}),"\n",(0,i.jsx)(n.p,{children:'The software catalog in Backstage is another example of a service backed plugin.\nIt retrieves a list of services, or "entities", from the Backstage Backend\nservice and renders them in a table for the user.'}),"\n",(0,i.jsx)(n.h3,{id:"third-party-backed-plugins",children:"Third-party backed plugins"}),"\n",(0,i.jsx)(n.p,{children:"Third-party backed plugins are similar to service backed plugins. The main\ndifference is that the service which backs the plugin is hosted outside of the\necosystem of the company hosting Backstage."}),"\n",(0,i.jsx)(n.p,{children:"The CircleCI plugin is an example of a third-party backed plugin. CircleCI is a\nSaaS service which can be used without any knowledge of Backstage. It has an API\nwhich a Backstage plugin consumes to display content."}),"\n",(0,i.jsxs)(n.p,{children:["Requests going to CircleCI from the user's browser are passed through a proxy\nservice that Backstage provides. Without this, the requests would be blocked by\nCross Origin Resource Sharing policies which prevent a browser page served at\n",(0,i.jsx)(n.a,{href:"https://example.com",children:"https://example.com"})," from serving resources hosted at\n",(0,i.jsx)(n.a,{href:"https://circleci.com",children:"https://circleci.com"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"CircleCI plugin talking to proxy talking to SaaS Circle CI",src:a(497534).A+"",width:"957",height:"622"})}),"\n",(0,i.jsx)(n.h2,{id:"package-architecture",children:"Package Architecture"}),"\n",(0,i.jsx)(n.p,{children:"Backstage relies heavily on NPM packages, both for distribution of libraries,\nand structuring of code within projects. While the way you structure your\nBackstage project is up to you, there is a set of established patterns that we\nencourage you to follow. These patterns can help set up a sound project\nstructure as well as provide familiarity between different Backstage projects."}),"\n",(0,i.jsx)(n.p,{children:"The following diagram shows an overview of the package architecture of\nBackstage. It takes the point of view of an individual plugin and all of the\npackages that it may contain, indicated by the thicker border and italic text.\nSurrounding the plugin are different package groups which are the different\npossible interface points of the plugin. Note that not all library package lists\nare complete as packages have been omitted for brevity."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Package architecture",src:a(742884).A+"",width:"1261",height:"811"})}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The arrows in the diagram above indicate a runtime dependency on the code of the\ntarget package. This strict dependency graph only applies to runtime\n",(0,i.jsx)(n.code,{children:"dependencies"}),", and there may be ",(0,i.jsx)(n.code,{children:"devDependencies"})," that break the rules of this\ntable for the purpose of testing. While there are some arrows that show a\ndependency on a collection of frontend, backend and isomorphic packages, those\nstill have to abide by important compatibility rules shown in the bottom left."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"app"})," and ",(0,i.jsx)(n.code,{children:"backend"})," packages are the entry points of a Backstage project.\nThe ",(0,i.jsx)(n.code,{children:"app"})," package is the frontend application that brings together a collection\nof frontend plugins and customizes them to fit an organization, while the\n",(0,i.jsx)(n.code,{children:"backend"})," package is the backend service that powers the Backstage application.\nWorth noting is that there can be more than one instance of each of these\npackages within a project. Particularly the ",(0,i.jsx)(n.code,{children:"backend"})," packages can benefit from\nbeing split up into smaller deployment units that each serve their own purpose\nwith a smaller collection of plugins."]}),"\n",(0,i.jsx)(n.h3,{id:"plugin-packages",children:"Plugin Packages"}),"\n",(0,i.jsxs)(n.p,{children:["A typical plugin consists of up to five packages, two frontend ones, two\nbackend, and one isomorphic package. All packages within the plugin must share a\ncommon prefix, typically of the form ",(0,i.jsx)(n.code,{children:"@<scope>/plugin-<plugin-id>"}),", but\nalternatives like ",(0,i.jsx)(n.code,{children:"backstage-plugin-<plugin-id>"})," or\n",(0,i.jsx)(n.code,{children:"@<scope>/backstage-plugin-<plugin-id>"})," are also valid. Along with this prefix,\neach of the packages have their own unique suffix that denotes their role. In\naddition to these five plugin packages it's also possible for a plugin to have\nadditional frontend and backend modules that can be installed to enable optional\nfeatures. For a full list of suffixes and their roles, see the\n",(0,i.jsx)(n.a,{href:"/docs/architecture-decisions/adrs-adr011",children:"Plugin Package Structure ADR"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"-react"}),", ",(0,i.jsx)(n.code,{children:"-common"}),", and ",(0,i.jsx)(n.code,{children:"-node"})," plugin packages together form the external\nlibrary of a plugin. The plugin library enables other plugins to build on top of\nand extend a plugin, and likewise allows the plugin to depend on and extend\nother plugins. Because of this, it is preferable that plugin library packages\nallow duplicate installations of themselves, as you may end up with a mix of\nversions being installed as dependencies of various plugins. It is also\nforbidden for plugins to directly import non-library packages from other\nplugins, all communication between plugins must be handled through libraries and\nthe application itself."]}),"\n",(0,i.jsx)(n.h3,{id:"frontend-packages",children:"Frontend Packages"}),"\n",(0,i.jsxs)(n.p,{children:['The frontend packages are grouped into two main groups. The first one is\n"Frontend App Core", which is the set of packages that are only used by the\n',(0,i.jsx)(n.code,{children:"app"})," package itself. These packages help build up the core structure of the app\nas well as provide a foundation for the plugin libraries to rely upon."]}),"\n",(0,i.jsx)(n.p,{children:'The second group is the rest of the shared packages, further divided into\n"Frontend Plugin Core" and "Frontend Libraries". The core packages are\nconsidered particularly stable and form the core of the frontend framework.\nTheir most important role is to form the boundary around each plugin and provide\na set of tools that helps you combine a collection of plugins into a running\napplication. The rest of the frontend packages are more traditional libraries\nthat serve as building blocks to create plugins.'}),"\n",(0,i.jsx)(n.h3,{id:"backend-packages",children:"Backend Packages"}),"\n",(0,i.jsx)(n.p,{children:"The backend library packages do not currently share a similar plugin\narchitecture as the frontend packages. They are instead simply a collection of\nbuilding blocks and patterns that help you build backend services. This is\nhowever likely to change in the future."}),"\n",(0,i.jsx)(n.h3,{id:"common-packages",children:"Common Packages"}),"\n",(0,i.jsx)(n.p,{children:"The common packages are the packages effectively depended on by all other pages.\nThis is a much smaller set of packages but they are also very pervasive. Because\nthe common packages are isomorphic and must execute both in the frontend and\nbackend, they are never allowed to depend on any of the frontend or backend\npackages."}),"\n",(0,i.jsx)(n.p,{children:"The Backstage CLI is in a category of its own and is depended on by virtually\nall other packages. It's not a library in itself though, and must always be a\ndevelopment dependency only."}),"\n",(0,i.jsx)(n.h3,{id:"deciding-where-you-place-your-code",children:"Deciding where you place your code"}),"\n",(0,i.jsxs)(n.p,{children:["It can sometimes be difficult to decide where to place your plugin code. For example\nshould it go directly in the ",(0,i.jsx)(n.code,{children:"-backend"})," plugin package or in the ",(0,i.jsx)(n.code,{children:"-node"})," package?\nAs a general guideline you should try to keep the exposure of your code as low\nas possible. If it doesn't need to be public API, it's best to avoid. If you don't\nneed it to be used by other plugins, then keep it directly in the plugin packages."]}),"\n",(0,i.jsx)(n.p,{children:"Below is a chart to help you decide where to place your code."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Package decision",src:a(993285).A+"",width:"521",height:"601"})}),"\n",(0,i.jsx)(n.h2,{id:"databases",children:"Databases"}),"\n",(0,i.jsxs)(n.p,{children:["As we have seen, both the ",(0,i.jsx)(n.code,{children:"lighthouse-audit-service"})," and ",(0,i.jsx)(n.code,{children:"catalog-backend"}),"\nrequire a database to work with."]}),"\n",(0,i.jsxs)(n.p,{children:["The Backstage backend and its built-in plugins are based on the\n",(0,i.jsx)(n.a,{href:"http://knexjs.org/",children:"Knex"})," library, and set up a separate logical database per\nplugin. This gives great isolation and lets them perform migrations and evolve\nseparate from each other."]}),"\n",(0,i.jsxs)(n.p,{children:["The Knex library supports a multitude of databases, but Backstage is at the time\nof writing tested primarily against two of them: SQLite, which is mainly used as\nan in-memory mock/test database, and PostgreSQL, which is the preferred\nproduction database. Other databases such as the MySQL variants are reported to\nwork but\n",(0,i.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/2460",children:"aren't tested as fully"}),"\nyet."]}),"\n",(0,i.jsx)(n.h2,{id:"cache",children:"Cache"}),"\n",(0,i.jsxs)(n.p,{children:["The Backstage backend and its built-in plugins are also able to leverage cache\nstores as a means of improving performance or reliability. Similar to how\ndatabases are supported, plugins receive logically separated cache connections,\nwhich are powered by ",(0,i.jsx)(n.a,{href:"https://github.com/lukechilds/keyv",children:"Keyv"})," under the hood."]}),"\n",(0,i.jsx)(n.p,{children:"At this time of writing, Backstage can be configured to use one of three cache\nstores: memory, which is mainly used for local testing, memcache or Redis,\nwhich are cache stores better suited for production deployment. The right cache\nstore for your Backstage instance will depend on your own run-time constraints\nand those required of the plugins you're running."}),"\n",(0,i.jsx)(n.h3,{id:"use-memory-for-cache",children:"Use memory for cache"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"backend:\n  cache:\n    store: memory\n"})}),"\n",(0,i.jsx)(n.h3,{id:"use-memcache-for-cache",children:"Use memcache for cache"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"backend:\n  cache:\n    store: memcache\n    connection: user:pass@cache.example.com:11211\n"})}),"\n",(0,i.jsx)(n.h3,{id:"use-redis-for-cache",children:"Use Redis for cache"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"backend:\n  cache:\n    store: redis\n    connection: redis://user:pass@cache.example.com:6379\n    useRedisSets: true\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The useRedisSets flag is explained ",(0,i.jsx)(n.a,{href:"https://github.com/jaredwray/keyv/tree/main/packages/redis#useredissets",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Contributions supporting other cache stores are welcome!"}),"\n",(0,i.jsx)(n.h2,{id:"containerization",children:"Containerization"}),"\n",(0,i.jsx)(n.p,{children:"The example Backstage architecture shown above would Dockerize into three\nseparate Docker images."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The frontend container"}),"\n",(0,i.jsx)(n.li,{children:"The backend container"}),"\n",(0,i.jsx)(n.li,{children:"The Lighthouse audit service container"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Boxes around the architecture to indicate how it is containerised",src:a(444985).A+"",width:"957",height:"622"})}),"\n",(0,i.jsx)(n.p,{children:"The backend container can be built by running the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn run build\nyarn run build-image\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will create a container called ",(0,i.jsx)(n.code,{children:"example-backend"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The lighthouse-audit-service container is already publicly available in Docker\nHub and can be downloaded and run with"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run spotify/lighthouse-audit-service:latest\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},221020:(e,n,a)=>{var i=a(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,a){var i,s={},l=null,h=null;for(i in void 0!==a&&(l=""+a),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,i)&&!c.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:l,ref:h,props:s,_owner:r.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,a)=>{e.exports=a(221020)},281885:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/backstage-typical-architecture-c38b04130f70f294725a9f646df94d3a.png"},497534:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/circle-ci-plugin-architecture-637c8554269d35240f4458083cca146f.png"},17070:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/circle-ci-31440aae7a5b2c44a7ee75bfc4573b03.png"},444985:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/containerised-18fbf8ed08f29df8fb922e4aa84c3864.png"},887277:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/core-vs-plugin-components-highlighted-de03cf2f3bb3f96bea4834f1db02172e.png"},969727:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/lighthouse-plugin-architecture-bc78e37450e4ffd6a9149f752e142ada.png"},538203:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/lighthouse-plugin-3543fecb164ca2e8dca3959c8b4909f4.png"},742884:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/package-architecture.drawio-15aac8979d89a6c2f7eb24f04d8d3b32.svg"},993285:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/package-decision.drawio-c91bae580f0f2534f0582b38d288ed1e.svg"},376828:(e,n,a)=>{a.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7gAAAGBCAIAAADDsYpAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAAW9yTlQBz6J3mgAAHnlJREFUeNrt3X9wlPW96PG0xdbanBOk/Igm8kOCBEgRKheDBlxPgg01ahqhpJpK0G0Dh1RDSUsMQVZErj/4EWwoSEMJTrzm0rTNqTkSDznmlNwSj8yYuTKWaR2baTNOhhu8sROdTGf/2PvHc0+aQcWohAR8veb7x7K7z0PIfBzf88x3n42LAQAA7xPnVwAAAEIZAACEMgAACGUAABDKAAAglAEAQCgDAIBQBgAAoQwAAEIZAACEMgAACGUAABDKAAAglAEAAKEMAABCGQAAhDIAAAhlAAAQygAAIJQBAEAoAwCAUGYkS09PnwxDY+nSpf4TA0Aoc6GaPHmyXwKmCwCEMlIG0wUAQhkpg+kCAKGMlMF0AYBQRspgugBAKCNlMF0AIJSRMpguABDKSBlMFwAIZaQMpgsAhDJSBkwXAEIZKQOmCwChjJQB0wWAUEbKgOkCQCgjZcB0ASCUQcpgugBAKCNlMF0AIJSRMpguABDKSBlMFwAIZaQMpgsAhDJSBtMFAEIZKYPpAgChjJTBdAGAUEbKYLoAQCgjZcB0ASCUkTJgugAQykgZMF0ACGWkDJguAIQyUgZMFwBCGaQMpgsAhDJSBtMFAEIZKYPpAgChjJTBdAGAUEbKYLoAQCgjZTBdACCUkTKYLgAQykgZTBcACGWkDKbLLwEAoYyUAdMFgFBGyoDpAkAoI2XAdAEglJEyYLoAEMogZTBdACCUkTKYLgAQykgZTBcACGWkDKYLAIQyUgbTBQBCGSmD6QIAoYyUwXQBgFBGymC6AEAoI2UwXQAglJEyYLoAEMpIGTBdAAhlpAyYLgCEMlIGTBcAQhkpA6YLAKEMUgbTBQBCGSmD6QIAoYyUwXQBgFBGymC6AEAoI2UwXQAglJEymC4AEMpIGUwXAAhlpAymCwCEMlIG0wUAQhkpA6YLAKGMlAHTBYBQRsqA6QJAKCNlwHQBIJSRMlIG0wUAQhkpg+kCAKGMlMF0AYBQ5rykzIzZ8ydcOemiWaFv5BkAoQwAQplzkDLjEifVHn33olnjr5hkAIQyAAhlhLJQFsoAIJQRykJZKAOAUEYoC2WhDABCGaEslIUyAAhlhLJQFsoAIJQRykJZKAOAUEYoC2XTBQBCGaEslE0XAAhlhLJQRigDIJQRykIZoQyAUEYoC2WEMgBCGSkjlBHKAAhlpIxQRigDIJRBKAtloQwAQhmhLJSFMgAIZYSyUBbKACCUEcpCWSgDgFBGKAtloQwAQhmhLJSFMgAIZYSyUDZdACCUEcpC2XQBgFBGKAtl0wUAQhmhLJQRygAIZYSyUEYoAyCUkTJCGaEMgFBGyghlhDIAQhmEMkIZAIQyQlkoC2UAEMoIZaEslAFAKCOUhbJQBgChjFAWykIZAIQyQlkoC2UAEMoIZaEslAFAKCOUhbLpAgChjFAWyqYLAIQyQlkoI5QBEMoIZaGMUAZAKCOUhTJCGQChjJQRyghlAIQyUkYoI5QBEMoglIWyUAYAoYxQFspCGQCEMkJZKAtlABDKCGWhLJQBQCgjlIWyUAYAoYxQFspCGQCEMkJZKAtlABDKCGWhbLoAQCgjlIWy6QIAoYxQFsoIZQCEMkJZKCOUARDKSBmhjFAGQCgjZYQyQhkAoYyUEcoIZQAQyghloSyUAUAoI5SFslAGAKGMUBbKQhkAhDJCWSgLZQAQyghloSyUAUAoI5SFslAGAKGMUBbKpgsAhDJCWSibLgAQyghloYxQBkAoI5SFMkIZAKGMUBbKCGUAhDJSRigjlAEQykgZoYxQBkAog1AWykIZAIQyQlkoC2UAEMoIZaEslAFAKCOUhbJQBgChjFAWykIZAIQyQlkoC2UAEMoIZaEslAFAKCOUhbLpAgChjFAWyqYLAIQyQlkoI5QBEMoIZaGMUAZAKCNlhDJCGQChjJQRyghlAIQyUkYoI5QBEMoglIWyUAYAoYxQFspCGQCEMkJZKAtlABDKCGWhLJQBQCgjlIWyUAYAoYxQFspCGQCEMkJZKJsuABDKCGWhbLoAQCgTi8WOHz9eVVVVVlZWWFgYCoVSU1MnT56clpaWlZVVWFhYUVGxd+/ekydPCmWhLJQBQChf/KLRaHNzc0lJSXJycsrUq9fcd/fWB4v3b3uw+ZnHTvxm158OV7bXP960/+H9j6/bvC58313fSr4yMSVlakVFRWtrq1AWykIZAITyRaivr2/Lli1jx45Nnz9v8/o1J5v2/O149WDWK/8jUv7P35mVOi05KWnv3r3RaFQoC2WhDABC+WIQjUZramoSExOX59128vBPB9nHH1DMz27KvGFuytQpDQ0NQlkoC2UAEMoXtpaWljlz5ty08IaX6ys/cSIPXE0/XXftzJTQooz29nahLJSFMgAI5QvS3r17k5OT/mfVpnOSyP3rvZf37d24MnHcVxt+/WuhLJSFMgAI5QtJNBpdtWpV2swZbzT95NxW8sCdGMmJY7dsjghloSyUAUAoXxh6enqysrJu/cY/vd369BBVcrD+0rT9+tnTCvKX9fX1CWWhLJQBQCiPaNFoNCMj44HvFbz38r4hreRg/fV3e/Ky/tvyvNuEslAWygAglEe0cDh8xzcXn4dEHtjK139t6iObyoWyUBbKACCUR6iqqqo5s9PePrrnfIZysAcjacKY5xt+JZSFslAGAKE84jQ3NycnJb3xQuV5ruRgHXumInHs5Sf+d7tQFspCGQCE8ggSjUZTUlIa920alkoOVtWD370pfa5QFspCGQCE8ghSWVl5xzezhrGSg3XtNRN/fahWKAtloQwAQnlE6OnpSUxMbK9/fNhDufGptdOvvioajQploSyUAUAoD79IJLLi27cPeyUHa9F10w/sqRTKQlkoA4BQHma9vb2jRyf85d+e+siEffu3u3/wncXTJk5IGn/59MmJj6y5czCHFOdnpVw1Pmn85alTrni0+M7BfGNf0oSvCmWhLJQBQCgPs7q6ultvuXkw13pvWZD2jRvSnt1a9C+V92/7Yf78tKsbn1p79kMWp8/KnD+z/5Abrk35yEP+drx61tSkY//xb0JZKAtlABDKw6mgoGDfoz8cTChf+sVLDu/+YdszFcF6Zsv3Zk+76uyHfOmLowYecujJf772mqs+8i968L6cDSXfE8pCWSgDgFAeNtFoND4+/q1//8lgQnn65MRNq3L7qzf8rUVZ6bPOfsi0iRM2fv/2/kNWLbv5lgVpg7mn8vQpSUJZKAtlABDKw6a5uTkjfd4gP2bXsPP+cZf/w8bv3/7Svh+X3H3LP37ly688u+kjDxk7Oj44ZO3dt/xj/EcfEqyk8Zf/8fevCWWhLJQBQCgPj9LS0q3rVw/+lhT124qnTZww6gufn5s68aWfrR/MIYeeXJNy1fhRX/j812dMGuQhfzte/f07Qz957KELPZQXZC5dXrT5jCeXF21ekLm0/4/Zy9ZkL1sjlIUyAAjlkaWgoODgk6Uj5MZwA9fDq7+14YH7LvRQHpc4adGSgjOeXLSkYODfNWPuwhlzFwploQwAQnlkCYVCR37+8AgM5epN996zdMnQpUxfX59QRigDIJT5UCkpKb//lydHYCg3/XRd5g1zhy5lEhMTKysrB+ayUEYoAyCU+bv4+Pi3f7t7BIbyq3UPz5o2cehS5vOf//zMmTPHjx/fn8tCGaEMgFDm70aNGjUCK/lvx6v/9K9PjkmIn/zpjBo16sNeivsvl1xySVJSUkdHh1BGKAMglPm7Sy+99K+/2zMCQ/m1X2z59LdSPkvKfO5zn0tNTb388suLi4u7urpirigjlAEQypzxP/s/Pr99BIbykb0/umn+14YuZb70pS+VlJQEiRwQyghlAIQyfxcKhY7s3/QZvOvFwEQeulBOnjLz/RG8IHPplROvEcpCGQCE8oiWn5//7I71IzCUHy2+c/2awvOZMkP0hSOXxSccaD498Mkx45Lmh3KFslAGAKE8opWUlOx46AcjMJR/8J3FO7aUXeihvHZrXVxc3K35D/Q/syz8UFxc3NqtdUJZKAOAUB7RGhoaMm+6YQSG8tSrxr/6n//rQg/lYEdyXFzclROvWZC5NHnKzLi4uBtvyR/4BqEslAFAKI9EfX198fHxbx/dM9JueTHpyvHnOWWGKJRrj75b+nh95h3hRUsKMu8ID7yWHKyi8qeLyp8WykIZAITyiJObm3tw249GVCg/vPpbD4TvumhCeViWUBbKACCUP62amprlud8cUaF8/deufulwg1AWykIZAITycOru7h49OuHUf4yUL7L+/a+2jh39D9FoVCgLZaEMAEJ5mBUXF68ruvvDyvXxB75dvenec5jC7728b/u6/A87Z17mdU8+Un7+U0YoI5QBEMqcqaura+zYsX9s3PGB5XrsmYrrv3b1jXOmvfSzc3DH5Yad98+amnTLgrTf/2rr+189+vPypAlj+/r6hLJQFsoAIJRHhEgksmJ57lmuAVdvunfSFWO/uXB200/XfbJErt9WfOOcabOmJtVvK/6w9yy6bvqBvU8NS8oIZYQyAEKZD9Db25ucnNz23H8/S+n+9Xd79lasmDU1aepV4x9e/a3XfrFlMH187JmKB+/LSRp/+fVfu7ru8dXvvbzvLCV97YyUc7I7WSgLZaEMAEL5nKmrq0uZOuWtf6/6yPY9+vPy1d/+p0lXjJ10xdi8zOseLb6zdmvRkb0/6l81j4Q3fv/220NzJ3w1YepV49cWfOOVZzd95Gf4EseObv3tS8OVMkIZoQyAUOZDVVRUZIYy3vvPj/HNIDWPhNcWfCMv87pF100PtjIvum76t2+Z/6PCJXWPr/7jbx4bzHne/u3uWSnJP9vz1Ln95whlhDIACOVzIxqN5uTkFN2z7HzeD+69l/d9c+G1RffdM7wpI5QRygAIZc6mt7c3NTV1x6aS8xbKP7hr8U03Xn8OtyYLZaEslAFAKA+Jzs7OtLS0ohXfHvwejE+23v7t7ttvvu6mjAU9PT3DnjJCGaEMgFDmo/X29ubk5GSGFp46um+IKvlP//rktalTwitXDMW1ZKEslIUyAAjloRKNRsvKylKnX9N2aNs5r+Smn65LThxXuXP7yEkZoYxQBkAo8zHU1tYmJiau+M6dHUf2nJNEfu0XW24NzU+5enJTU9OIShmhjFAGQCjz8fT29kYikdGjR6+/P/x/Wn/2iRP5L03b7126eOxXx1RWVg7ddguhLJSFMgAI5fOqq6srHA6PHj16ed5tB3du/L/H9g+yj986Uvl0ZNWtWRmjExLKysqG6HN7QlkoC2UAEMrDqbu7u7q6Ojc3d/To0Vk3L3piY8mzTz3U/MxjbzTt/mvb/7+Rxe9/s/3Igc0Ht/1o87rwjfPnjh6dUFBQUFtb29vbO5JTRigjlAEQypwDvb299fX1paWl+fn5oVBo8uTJl1566ahRo+Lj41NSUkKhUEFBQVlZWVNTU19f3wWRMkIZoQyAUEbKCGWEMgBCGSkjlBHKAAhlEMpCWSgDgFBGKAtloQwAQhmhLJSFMgAIZYSyUBbKACCUEcpCWSgDgFC+YL3xxhvt7e3B466urtbWVqEslIUyAAhlYjU1NZFIJHjc0tJSWFgolIWyUAYAocwHh3Jzc3NBQUFJSUlXV1fwx/z8/LKysuDbqmtraxsbG4uLi4WyUBbKACCUP1uhnJKS0tPTc+LEie7u7vb29uzs7J6enuCrrWOxWFpa2pYtW4KGFspCWSgDgFD+DIVybm5ucXHxiRMnYrFYaWlpcXFxTU1NTU1NKBQaCSUhlBHKACCUh1xtbW1ZWVnwuKGhIbhmHERzenp6XV1dSUlJJBJpaWlpaWkJPvYnlIWyUAYAoXzx6+zsTE1NPXnyZFdXV0ZGRmtra19fX0NDQywWq6urKy0tbW1tDYVCPT09vb29HR0dQlkoC2UAEMqfFc3Nzbm5uTk5OXV1dbFYLBqNPvbYY7m5uatWreru7o7FYo2NjTk5OUuXLm1ra4vFYv1XnYWyUBbKACCUuVBTRigjlAEQykgZoYxQBkAoI2WEMkIZAKEMQlkoC2UAEMoIZaEslAFAKCOUhbJQBgChjFAWykIZAIQyQlkoC2UAEMoIZaEslAFAKCOUhbLpAgChjFAWyqYLAIQyQlkomy4AEMoIZaGMUAZAKCOUhTJCGQChjJQRyghlAIQyUkYoI5QBEMoglBHKACCUEcpCWSgDgFBGKAtloQwAQhmhLJSFMgAIZYSyUBbKACCUEcpCWSgDgFBGKAtloQwAQhmhLJRNFwAIZYTyCFyXXPKlqyZOtvrX7bl3CmUAhDII5Xe/8IVRF9M/59OvCVdOEsoACGUQykJZKAOAUEYoC2WhDABCGaEslIUyAAhlhLJQFsoAIJQRykJZKAOAUEYoC2WhDABCGaEslIUyAAhlhLJQFsoAIJQRykJZKAOAUEYoC2WhLJQBEMoIZaEslIUyAEIZoSyUP/F6dP+xjVVHzu05dze8+eNtDUIZAIQyQnn4Q3nRkoIz1hO1rw7mwLyV5YuWFHzYq2u31vWfcHnR5j3P/3kw59yw6/CMuQuFMgAIZYTy8Ifyhl2HN+w6vGhJwezrFweP973w1qcP5byV5cEJSx+vX5xXNGZc0oHm00IZAIQyQvkC23pxRvUeaD4dXr87b2X5o/uP9T+5/bnX7lqzdXnR5p2HXg8OyV625pF9R/NWlq/euP/sJxwzLmnDrsPB5ooVa3fkrSyP7Hlp4I6Lu9Zs/e79T6zdWtcfyvteeOve0l15K8v7N2PsbnhzY9WRJ2pfzVtZ/tQv/yCUAUAoI5TPaygfaD49adrsxXlF4fW7k6fMDAJ3Y9WRhDETloUfWl60OfOOcHDIlROvWZC59K41WxPGTDijlQeesPrFU5fFJzyy7+i+F95KnjJzedHm797/RPBM7dF3dx56PWHMhMV5Rd+9/4krJ14ThPLBlndSZs3PW1m+Yu2OhDETSh+vD643p8yaP332gryV5YPcyyGUARDKIJTPWSivWLvjxlvy+/dCzA/l1h5998qJ14TX737/5ooP24aRt7J80rTZeSvLc+9ZnzxlZnCSgWtxXlHuPeuDTdJBeZ+x9eJgyzvBg2Xhh0I5hcGrl375K4NPZKEMAEIZoXwuQ3nRkoLpsxcEn8ObH8qdNG129Yun4uLigh0XH3hIUfnT7w/l6bMXFJU/PSX16/0dHFyZXrSkIG3ezeMSJwWHXDnxmuCC8Rmh/NjBV0I5hTPmLkyeMjN45yfbwSyUARDKIJTPTSiHcgpz71m/89Drwdrd8OaB5tNxcXHbn3vtY4Vy8Exkz0uXxScEl4E3Vh2ZkHR1sOOi/w3JU2Y+8MizZ4TyE7WvJoyZ8ODOxoEnF8oAIJQRysMZyqs37k+eMrP6xVMDt0Ckzbv5trvXBc8E1TvIUK49+u6Nt+T3b2vu39SxIHNp8IbMO8L9GzPuLd0VpHBR+dPXLbwtePK2u9cJZQAQygjlEXHXi8w7wsHWiJRZ84PLvU/UvjoucVLavJvn3rBk+uwFHyuUn/rlHy798lce3X/skX1HL4tPWJC5NDhP8Iadh14flzhp+uwFafNunh/KDVJ4+3Ov9b9zfihXKAOAUEYoD08o73vhrTM+JLfz0Osbdh0eeBe2A82nI3teCjZOnHFI9Yunzjj8jBPubngzuD3zU7/8w4Zdh6tfPDXwkAPNpzdWHdn+3GsHW97Z3fBm/3XrDbsO73n+zweaTwfvPNB8uv9VoQwAQhmhPEK/wvpCWUIZAKEMQlkoC2UAEMoIZaEslAFAKCOUhbJQBgChjFAWykIZAIQyQvkCD+Ufb2s444tIPnIdbHknuAOGUAYAoYxQvhhCOfhS60VLCm67e92j+48FT86Yu7Co/OmPdZ5b8x9InjJTKAOAUEYoXyShHBcXt2HX4Q27Dt+1Zutl8QnBDZU/QSjvef7Pjx18RSgDgFBGKF88odz/OHvZmuxlawaG8qP7j22sOhK8uv251368raH/q0buWrN1WfihovKni8qf3t3wZv+r1S+eKn28ft8LbwVvGPjlJkIZAIQyQvmCDOXMO8K33b1uYCif8Y3WwXdN73vhrTHjklas3VEcOXhZfEL2sjU7D73e/+rOQ69fFp8wY+7CFWt3zL5+ccqs+UIZAIQyQvlC3Xrx4M7GvJXll8UnPFH76keGcnHk4PTZC/ovQq9Yu2PgqzsPvR4XFxd8K/XuhjcHhrhQBgChjFC+kEI5+DBf3sry/jtdnD2UI3teGpc46WDLO7VH302bd/ParXXvD+UPvGItlAFAKCOUL8itF/2rP5SXhR96fygHb5iS+vWUWfMz7wgHxSyUAUAoI5Q/Q6G8euP+SdNmB7dJnh/KDVL40f3H+rde9C+hDABCGaF88YfyoiUFQQrvbngzYcyEKalfn5L69cV5RQM/zDd99oIZcxdet/C2u9ZsPdjyjlAGAKGMUL6oQnnnodff/+SB5tP9d4WrfvHUhl2H9zz/5wPNp4OP6P14W0Mop/Cxg68EnwIcMy5p7da66hdPBa8ebHln4Dk/8PxCGQCEMkL5gvwK67OvzDvCy8IPBY/3vfDWuMRJwdeUnM8llAEQyiCUR1wob3/uteCTfDPmLkyZNX/1xv3n/2cQygAIZRDKIy6U+7dnVL94arj+dqEMgFAGoTxCQ3l4l1AGQCiDUBbKQhkAhDJCWSgLZQAQyghloSyUAUAoI5SFslAGAKGMUBbKQhkAhDJCWSgLZQAQyghloSyUAUAocyGH8lfHJ42/YtJFsy655IsX0z/n069Z184XygAIZZAymC4AEMpIGUwXAAhlpAymCwCEMlIG0wUAQhkpg+kCAKGMlMF0AYBQRspgugBAKCNlMF0AIJSRMpguABDKSBkwXQAIZaQMmC4AhDJSBkwXAEIZKQOmCwChjJQB0wWAUPYrQMpgugBAKCNlMF0AIJSRMpguABDKSBlMFwAIZaQMpgsAhDJSBtMFAEIZKTNydHd3V1dX+z2YLgCEMlyEKVNYWNjS0hI8jkQiNTU1gz+2s7MzLS3tA1+qqamZM2dOYWFhRkZGRUWFsRHKAAhlpMzFEMqdnZ01NTVtbW3B8x0dHTU1NSdOnIjFYn19fSdPnjxx4kRzc3NXV1dJSUksFjt+/HhNTU1HR8fAUI5EIsHjxMTEWCzW09PT0dHR1tYWnLatra22trarqys4f/Cgq6srOEnw5lgs1tzcXFdX19PTE5yqqamprq6ur68vOKq3t7e+vj441nQBgFBGygxtKPf29s6ZM6e+vr60tLS3t7e9vT0rK6umpiYnJ6e1tbWjo2POnDnhcLi5ubm7u7uvr6+1tTU7O7u+vr6/jINQLikp6ejoaG5uzsjIiMViLS0t6enpJSUlra2te/fuzcnJqa6unjdv3okTJ+rq6srKymKxWHFxcWFhYSwWq6ysrKmpqaysDIfDdXV1e/fujcVi4XC4tLS0qqoqJycn+GmzsrK2bdsmlAFAKCNlzkcod3d3p6amHj9+PHiyoKCgsbGxo6OjsbGxuLi4o6MjNTV14Bmampqys7M7OzsHPtm/9SInJ6ewsLC3t7elpSU7O7v/dxhcFW5sbCwsLOzu7p43b14sFsvPzw8iODc3t6Ojo6KiIoj1WCzW1dWVnp7e0dHR0dGRk5PT2dkZiUQqKytNFwAIZaTMkAiHw01NTQNDORaLnThxorCwMCsrq7u7OxQKlZSURCKRSCTS0NDQ0dERCoXOOEljY2N2dvaqVasGhnL/BeZIJFJVVdXS0hJcLR74Ozx58mRwtvT09Pb29rKysoqKiuPHj6enp8disWg0WlVVlZGRUVlZ2drampaWFvkvPT09H3dHtekCAKGMlPkYqquri4uLgyrNyMhob2+PRqPBRdyKioqamprS0tKBPfr+UO7fQJyRkdG/TXlgKAfbJwaGcmpq6htvvBGLxSorK4NNFxUVFfn5+U1NTS0tLfn5+UFzd3d3Bz/Y5MmTe3t709LSgh/sjKw3XQAglJEy5140Gl26dOm8efPmzJkT3J7i5MmTWVlZhYWFoVCoq6urp6cnJycnNzc3Jyenvb29s7MzPz9/4Bnq6+uzsrLy8/MHPl9fXx8KhQoLC7Ozs0tLS6PRaFtbW2lpafBqW1tbenp6cM6gfdva2lJSUnp7e/v6+tLS0oKL3JFIJCcnJzs7O2juhoaGefPm5efnB2VfWVlZX19vugBAKCNlMF0AIJSRMpguABDKSBkwXQAIZaQMmC4AhDJSBkwXAEIZKQOmCwChjJQB0wWAUAYpg+kCAKGMlMF0AYBQRspgugBAKCNlMF0AIJQZIsnJyZNhaKSnp/tPDAChDAAAQhkAAIQyAAAIZQAAEMoAAIBQBgAAoQwAAEIZAACEMgAACGUAABDKAAAglAEAQCgDAIBQBgAAoQwAAEIZAAAuTv8PTp8myvYT4PUAAABQZVhJZk1NACoAAAAIAAIBEgADAAAAAQABAACHaQAEAAAAAQAAACYAAAAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAA7igAwAEAAAAAQAAAYEAAAAAmQvpBwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMC0wNVQwNzo1MzozNSswMDowMCgGuf8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMDVUMDc6NTM6MzUrMDA6MDBZWwFDAAAAEXRFWHRleGlmOkNvbG9yU3BhY2UAMQ+bAkkAAAASdEVYdGV4aWY6RXhpZk9mZnNldAAzOK24viMAAAAYdEVYdGV4aWY6UGl4ZWxYRGltZW5zaW9uADk1MttYhLwAAAAYdEVYdGV4aWY6UGl4ZWxZRGltZW5zaW9uADM4NWAKC/IAAAAASUVORK5CYII="},206682:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/tech-radar-plugin-4d2311a5ccbe580f9fc5f071c734f06c.png"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>r});var i=a(296540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);