/*! For license information please see b2d2e14b.979de9d5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[331245],{175123:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=r(474848),c=r(28453);const t={id:"backend-test-utils.mockservices",title:"mockServices",description:"API reference for mockServices"},i=void 0,d={id:"reference/backend-test-utils.mockservices",title:"mockServices",description:"API reference for mockServices",source:"@site/versioned_docs/version-stable/reference/backend-test-utils.mockservices.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockservices",permalink:"/docs/reference/backend-test-utils.mockservices",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-test-utils.mockservices.md",tags:[],version:"stable",frontMatter:{id:"backend-test-utils.mockservices",title:"mockServices",description:"API reference for mockServices"}},o={},l=[{value:"Remarks",id:"remarks",level:2},{value:"Functions",id:"functions",level:2},{value:"Namespaces",id:"namespaces",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils",children:(0,n.jsx)(s.code,{children:"@backstage/backend-test-utils"})})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices",children:(0,n.jsx)(s.code,{children:"mockServices"})})]}),"\n",(0,n.jsx)(s.p,{children:"Mock implementations of the core services, to be used in tests."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"namespace mockServices \n"})}),"\n",(0,n.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(s.p,{children:"There are some variations among the services depending on what needs tests might have, but overall there are three main usage patterns:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Creating an actual fake service instance, often with a simplified version of functionality, by calling the mock service itself as a function."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"// The function often accepts parameters that control its behavior\nconst foo = mockServices.foo();\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["Creating a mock service, where all methods are replaced with jest mocks, by calling the service's ",(0,n.jsx)(s.code,{children:"mock"})," function."]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"// You can optionally supply a subset of its methods to implement\nconst foo = mockServices.foo.mock({\n  someMethod: () => 'mocked result',\n});\n// After exercising your test, you can make assertions on the mock:\nexpect(foo.someMethod).toHaveBeenCalledTimes(2);\nexpect(foo.otherMethod).toHaveBeenCalledWith(testData);\n"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Creating a service factory that behaves similarly to the mock as per above."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"await startTestBackend({\n  features: [\n    mockServices.foo.factory({\n      someMethod: () => 'mocked result',\n    })\n  ],\n});\n"})}),"\n",(0,n.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Function"}),"\n"]}),(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.auth",children:"auth(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.discovery",children:"discovery()"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.httpauth",children:"httpAuth(options)"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsxs)(s.p,{children:["Creates a mock implementation of the ",(0,n.jsx)(s.code,{children:"HttpAuthService"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["By default all requests without credentials are treated as requests from the default mock user principal. This behavior can be configured with the ",(0,n.jsx)(s.code,{children:"defaultCredentials"})," option."]}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootconfig",children:"rootConfig(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootlogger",children:"rootLogger(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.userinfo",children:"userInfo(customInfo)"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsxs)(s.p,{children:["Creates a mock implementation of the ",(0,n.jsx)(s.code,{children:"UserInfoService"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"By default it extracts the user's entity ref from a user principal and returns that as the only ownership entity ref, but this can be overridden by passing in a custom set of user info."}),"\n"]})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Namespace"}),"\n"]}),(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.auth",children:"auth"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.cache",children:"cache"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.database",children:"database"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.discovery",children:"discovery"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.events",children:"events"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.httpauth",children:"httpAuth"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.httprouter",children:"httpRouter"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.lifecycle",children:"lifecycle"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.logger",children:"logger"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.permissions",children:"permissions"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootconfig",children:"rootConfig"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.roothealth",children:"rootHealth"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.roothttprouter",children:"rootHttpRouter"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootlifecycle",children:"rootLifecycle"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.rootlogger",children:"rootLogger"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.scheduler",children:"scheduler"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.urlreader",children:"urlReader"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/backend-test-utils.mockservices.userinfo",children:"userInfo"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]})]})]})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},221020:(e,s,r)=>{var n=r(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,r){var n,t={},l=null,h=null;for(n in void 0!==r&&(l=""+r),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(h=s.ref),s)i.call(s,n)&&!o.hasOwnProperty(n)&&(t[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===t[n]&&(t[n]=s[n]);return{$$typeof:c,type:e,key:l,ref:h,props:t,_owner:d.current}}s.Fragment=t,s.jsx=l,s.jsxs=l},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>d});var n=r(296540);const c={},t=n.createContext(c);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);