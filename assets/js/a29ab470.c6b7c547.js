/*! For license information please see a29ab470.c6b7c547.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[241603],{182864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(474848),a=t(28453);const i={id:"call-existing-api",title:"Call Existing API",description:"Describes the various options that Backstage frontend plugins have, in communicating with service APIs that already exist"},r=void 0,o={id:"plugins/call-existing-api",title:"Call Existing API",description:"Describes the various options that Backstage frontend plugins have, in communicating with service APIs that already exist",source:"@site/versioned_docs/version-stable/plugins/call-existing-api.md",sourceDirName:"plugins",slug:"/plugins/call-existing-api",permalink:"/docs/plugins/call-existing-api",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/plugins/call-existing-api.md",tags:[],version:"stable",frontMatter:{id:"call-existing-api",title:"Call Existing API",description:"Describes the various options that Backstage frontend plugins have, in communicating with service APIs that already exist"},sidebar:"docs",previous:{title:"Backend plugins",permalink:"/docs/plugins/backend-plugin"},next:{title:"Testing with Jest",permalink:"/docs/plugins/testing"}},l={},c=[{value:"Issuing Requests Directly",id:"issuing-requests-directly",level:2},{value:"Using The Backstage Proxy",id:"using-the-backstage-proxy",level:2},{value:"Creating a Backstage Backend Plugin",id:"creating-a-backstage-backend-plugin",level:2},{value:"Extending the GraphQL Model",id:"extending-the-graphql-model",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This article describes the various options that Backstage frontend plugins have,\nin communicating with service APIs that already exist. Each section below\ndescribes a possible choice, and the circumstances under which it fits."}),"\n",(0,s.jsx)(n.p,{children:"In these examples, we will be ultimately requesting data from the fictional\nFrobsCo API."}),"\n",(0,s.jsx)(n.h2,{id:"issuing-requests-directly",children:"Issuing Requests Directly"}),"\n",(0,s.jsxs)(n.p,{children:["The most basic choice available is to issue requests directly from the plugin\nfrontend code to the FrobsCo API, using for example ",(0,s.jsx)(n.code,{children:"fetch"})," or a support library\nsuch as ",(0,s.jsx)(n.code,{children:"axios"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Inside your component\nfetch('https://api.frobsco.com/v1/list')\n  .then(response => response.json())\n  .then(payload => setFrobs(payload as Frob[]));\n"})}),"\n",(0,s.jsx)(n.p,{children:"Internally at Spotify, this has not been a very common choice. Third party APIs\nare sometimes accessed like this. Just a handful of internal APIs also went\nthrough the trouble of exposing themselves in a way that is useful directly from\na browser, but even then, often not from the public internet but only supporting\nusers that are already on the company VPN."}),"\n",(0,s.jsx)(n.p,{children:"This can be used when:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The API already does/exposes exactly what you need."}),"\n",(0,s.jsx)(n.li,{children:"The request/response patterns of the API match real world usage needs in\nBackstage frontend plugins. For example, if the end use case is to show a\nsmall summary in Backstage, but the only available API endpoint gives a 30\nmegabyte blob with large amounts of redundant information, it would hurt the\nend user experience. Particularly on mobile. The same goes for cases where you\nwant to show many individual pieces of information: if a common use case is to\nshow large tables where one API request per cell is necessary, the browser\nwill quickly become swamped and you may want to consider performing\naggregation elsewhere instead."}),"\n",(0,s.jsx)(n.li,{children:"The API can maintain interactive request/response times at your required peak\nrequest rates. The end user experience will be degraded if they spend a lot of\ntime waiting for the data to arrive."}),"\n",(0,s.jsx)(n.li,{children:"The API endpoint is highly available. The browser does not have builtin\nfacilities for load balancing, service discovery, retries, health checks,\ncircuit breaking and similar. If the endpoint is occasionally down even for\nshort periods of time (e.g. during deploys), end users will quickly notice."}),"\n",(0,s.jsxs)(n.li,{children:["The API is exposed over HTTPS (not just HTTP), and properly handles\n",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS"}),". These are\nrequirements that the user's browser will impose for security reasons, and the\nrequests will be rejected otherwise."]}),"\n",(0,s.jsx)(n.li,{children:"The API endpoint is easily reachable, in terms of network conditions, by end\nusers. This may be particularly relevant if your end users are outside of your\nperimeter."}),"\n",(0,s.jsx)(n.li,{children:"The requests do not require secrets to be passed. This limitation does not\napply to OAuth tokens, which the frontend can negotiate and make proper use\nof."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-the-backstage-proxy",children:"Using The Backstage Proxy"}),"\n",(0,s.jsx)(n.p,{children:"Backstage has an optional proxy plugin for the backend, that can be used to\neasily add proxy routes to downstream APIs."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# In app-config.yaml\nproxy:\n  '/frobs': http://api.frobsco.com/v1\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Inside your component\nconst backendUrl = config.getString('backend.baseUrl');\nfetch(`${backendUrl}/api/proxy/frobs/list`)\n  .then(response => response.json())\n  .then(payload => setFrobs(payload as Frob[]));\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The proxy is powered by the ",(0,s.jsx)(n.code,{children:"http-proxy-middleware"})," package. See\n",(0,s.jsx)(n.a,{href:"/docs/plugins/proxying",children:"Proxying"})," for a full description of its configuration options."]}),"\n",(0,s.jsx)(n.p,{children:"Internally at Spotify, the proxy option has been the overwhelmingly most popular\nchoice for plugin makers. Since we have DNS-based service discovery in place and\na microservices framework that made it trivial to expose plain HTTP, it has been\na matter of just adding a few lines of Backstage config to get the benefit of\nbeing easily and robustly reachable from users' web browsers as well."}),"\n",(0,s.jsx)(n.p,{children:"This may be used instead of direct requests, when:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You need to perform HTTPS termination and/or CORS handling, because the API\nitself is not supplying those."}),"\n",(0,s.jsx)(n.li,{children:"You need to inject a simple static secret into the requests, e.g. an\nAuthorization header that gets added to the request headers."}),"\n",(0,s.jsx)(n.li,{children:"You want to make use of other proxy facilities, such as retries, failover,\nhealth checks, routing, request logging, rewrites, etc."}),"\n",(0,s.jsx)(n.li,{children:"You already have the Backstage backend itself exposed through your perimeter\nand find it practical to have only one entry point to deal with, governing\ningress with just the Backstage config."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-backstage-backend-plugin",children:"Creating a Backstage Backend Plugin"}),"\n",(0,s.jsx)(n.p,{children:"Much like the Backstage frontend, the Backstage backend also has a plugin\nsystem. The above mentioned proxy is actually one such plugin. If you were in\nneed of a more involved integration than just direct access to the FrobsCo API,\nor if you needed to hold state, you may want to make such a plugin."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Inside your component\nconst backendUrl = config.getString('backend.baseUrl');\nfetch(`${backendUrl}/frobs-aggregator/summary`)\n  .then(response => response.json())\n  .then(payload => setSummary(payload as FrobSummary));\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Inside a new frobs-aggregator backend plugin\nrouter.use('/summary', async (req, res) => {\n  const agg = await Promise.all([\n    fetch('https://api.frobsco.com/v1/list'),\n    fetch('http://flerps.partnercompany.com:8080/flerp-batch'),\n    database.currentThunk(),\n  ]).then(async ([frobs, flerps, thunk]) => {\n    return computeAggregate(await frobs.json(), await flerps.json(), thunk);\n  });\n  res.status(200).json(agg);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For a more detailed example, see\n",(0,s.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/user-settings-backend",children:"the user-settings plugin backend"}),"\nthat stores some state in a database and surfaces an API for the frontend plugin to use."]}),"\n",(0,s.jsx)(n.p,{children:"Internally at Spotify, this has been a fairly popular choice for different\nreasons. Commonly, the backend has been used as a caching and data massaging\nlayer for slow APIs or APIs whose request/response shapes or speeds were not\nacceptable for direct use by frontends. For example, this has made it possible\nto issue efficient batch queries from the frontend, e.g. in big lists or tables\nthat want to resolve a lot of sparse data from the larger list that an\nunderlying service supplies."}),"\n",(0,s.jsx)(n.p,{children:"This may be used instead of the above, when:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You need to perform complex model conversion, or protocol translation beyond\nwhat the proxy handles."}),"\n",(0,s.jsx)(n.li,{children:"You want to perform aggregations or summaries on the backend instead of on the\nfrontend."}),"\n",(0,s.jsx)(n.li,{children:"You want to enable batching or caching of slower or more unreliable APIs."}),"\n",(0,s.jsx)(n.li,{children:"You need to maintain state for your plugin, perhaps using the builtin database\nsupport in the backend."}),"\n",(0,s.jsx)(n.li,{children:"You need to inject secrets or in other ways negotiate with other parts of the\nAPI or other services in order to perform your work."}),"\n",(0,s.jsx)(n.li,{children:"You want to enforce end user authentication / authorization for operations on\nbehalf of the API, have session handling, or similar."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There is a balance to strike regarding when to make an entirely separate backend\nfor a purpose, and when to make a Backstage backend plugin that adapts something\nthat already exists. General advice is not easy to give, but contact us on\nDiscord if you have any questions, and we may be able to offer guidance."}),"\n",(0,s.jsx)(n.h2,{id:"extending-the-graphql-model",children:"Extending the GraphQL Model"}),"\n",(0,s.jsx)(n.p,{children:"The extensible GraphQL backend layer is not built yet. This section will be\nexpanded when that happens. Stay tuned!"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var s=t(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,h=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)r.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:a,type:e,key:c,ref:h,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(296540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);