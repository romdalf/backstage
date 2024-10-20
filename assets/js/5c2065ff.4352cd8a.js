/*! For license information please see 5c2065ff.4352cd8a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[867550],{659097:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(474848),r=s(28453);const o={id:"adrs-adr007",title:"ADR007: Use MSW to mock http requests",description:"Architecture Decision Record (ADR) log on Use MSW to mock http requests"},i=void 0,c={id:"architecture-decisions/adrs-adr007",title:"ADR007: Use MSW to mock http requests",description:"Architecture Decision Record (ADR) log on Use MSW to mock http requests",source:"@site/../docs/architecture-decisions/adr007-use-msw-to-mock-service-requests.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr007",permalink:"/docs/next/architecture-decisions/adrs-adr007",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/architecture-decisions/adr007-use-msw-to-mock-service-requests.md",tags:[],version:"current",frontMatter:{id:"adrs-adr007",title:"ADR007: Use MSW to mock http requests",description:"Architecture Decision Record (ADR) log on Use MSW to mock http requests"},sidebar:"docs",previous:{title:"ADR006: Avoid React.FC and React.SFC",permalink:"/docs/next/architecture-decisions/adrs-adr006"},next:{title:"ADR008: Default Catalog File Name",permalink:"/docs/next/architecture-decisions/adrs-adr008"}},a={},d=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"context",children:"Context"}),"\n",(0,n.jsx)(t.p,{children:"Network request mocking can be a total pain sometimes, in all different types of\ntests, unit tests to e2e tests always have their own implementation of mocking\nthese requests. There's been traction in the outer community towards using this\nlibrary to mock network requests by using an express style declaration for\nroutes. react-testing-library suggests using this library instead of mocking\nfetch directly whether this be in a browser or in node."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/mswjs/msw",children:"https://github.com/mswjs/msw"})}),"\n",(0,n.jsx)(t.h2,{id:"decision",children:"Decision"}),"\n",(0,n.jsxs)(t.p,{children:["Moving forward, we have decided that any ",(0,n.jsx)(t.code,{children:"fetch"})," or ",(0,n.jsx)(t.code,{children:"XMLHTTPRequest"})," that\nhappens, should be mocked by using ",(0,n.jsx)(t.code,{children:"msw"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { setupWorker, rest } from 'msw';\n\nconst worker = setupWorker(\n  rest.get('*/user/:userId', (req, res, ctx) => {\n    return res(\n      ctx.json({\n        firstName: 'John',\n        lastName: 'Maverick',\n      }),\n    );\n  }),\n);\n\n// Start the Mock Service Worker\nworker.start();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["and in a more real life scenario, taken from\n",(0,n.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/f3245c4f8f0b6b2625c4a6d5d50161b612fb4757/plugins/catalog/src/api/CatalogClient.test.ts",children:"CatalogClient.test.ts"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"beforeEach(() => {\n  server.use(\n    rest.get(`${mockApiOrigin}${mockBasePath}/entities`, (_, res, ctx) => {\n      return res(ctx.json(defaultResponse));\n    }),\n  );\n});\n\nit('should entities from correct endpoint', async () => {\n  const entities = await client.getEntities();\n  expect(entities).toEqual(defaultResponse);\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"consequences",children:"Consequences"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"A little more code to write"}),"\n",(0,n.jsxs)(t.li,{children:["Gradually will replace the codebase with ",(0,n.jsx)(t.code,{children:"msw"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,t,s)=>{var n=s(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,s){var n,o={},d=null,l=null;for(n in void 0!==s&&(d=""+s),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:c.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(296540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);