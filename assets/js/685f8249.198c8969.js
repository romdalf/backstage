/*! For license information please see 685f8249.198c8969.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[910443],{355007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=r(474848),n=r(28453);const i={id:"test-utils.testapiprovider",title:"TestApiProvider()",description:"API reference for TestApiProvider()"},o=void 0,d={id:"reference/test-utils.testapiprovider",title:"TestApiProvider()",description:"API reference for TestApiProvider()",source:"@site/versioned_docs/version-stable/reference/test-utils.testapiprovider.md",sourceDirName:"reference",slug:"/reference/test-utils.testapiprovider",permalink:"/docs/reference/test-utils.testapiprovider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/test-utils.testapiprovider.md",tags:[],version:"stable",frontMatter:{id:"test-utils.testapiprovider",title:"TestApiProvider()",description:"API reference for TestApiProvider()"}},c={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,s.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,s.jsx)(t.a,{href:"/docs/reference/test-utils.testapiprovider",children:(0,s.jsx)(t.code,{children:"TestApiProvider"})})]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"TestApiProvider"})," is a Utility API context provider that is particularly well suited for development and test environments such as unit tests, storybooks, and isolated plugin development setups."]}),"\n",(0,s.jsx)(t.p,{children:"It lets you provide any number of API implementations, without necessarily having to fully implement each of the APIs."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"TestApiProvider: <T extends any[]>(props: TestApiProviderProps<T>) => React.JSX.Element\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(t.th,{children:["\n",(0,s.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["\n",(0,s.jsx)(t.p,{children:"props"}),"\n"]}),(0,s.jsxs)(t.td,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/reference/test-utils.testapiproviderprops",children:"TestApiProviderProps"}),"<T>"]}),"\n"]}),(0,s.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,s.jsx)(t.p,{children:"React.JSX.Element"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.p,{children:"todo: remove this remark tag and ship in the api-reference. There's some odd formatting going on when this is made into a markdown doc, that there's no line break between the emitted "}),(0,s.jsx)(t.p,{children:" for To the following "})," so what happens is that when parsing in docusaurus, it thinks that the code block is mdx rather than a code snippet. Just omitting this from the report for now until we can work out how to fix later. A migration from ",(0,s.jsx)(t.code,{children:"ApiRegistry"})," and ",(0,s.jsx)(t.code,{children:"ApiProvider"})," might look like this, from:",(0,s.jsx)(t.p,{}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"renderInTestApp(\n  <ApiProvider\n    apis={ApiRegistry.from([\n      [identityApiRef, mockIdentityApi as unknown as IdentityApi]\n    ])}\n  >\n   ...\n  </ApiProvider>\n)\n"})}),"\n",(0,s.jsx)(t.p,{children:"To the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"renderInTestApp(\n  <TestApiProvider apis={[[identityApiRef, mockIdentityApi]]}>\n    ...\n  </TestApiProvider>\n)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Note that the cast to ",(0,s.jsx)(t.code,{children:"IdentityApi"})," is no longer needed as long as the mock API implements a subset of the ",(0,s.jsx)(t.code,{children:"IdentityApi"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,t,r)=>{var s=r(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var s,i={},a=null,l=null;for(s in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:d.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var s=r(296540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);