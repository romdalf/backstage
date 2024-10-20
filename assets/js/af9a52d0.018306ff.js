/*! For license information please see af9a52d0.018306ff.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[400581],{823448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var r=t(474848),s=t(28453);const c={id:"plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline"},i=void 0,d={id:"reference/plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline",source:"@site/versioned_docs/version-stable/reference/plugin-search-backend-node.testpipeline.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.testpipeline",permalink:"/docs/reference/plugin-search-backend-node.testpipeline",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-backend-node.testpipeline.md",tags:[],version:"stable",frontMatter:{id:"plugin-search-backend-node.testpipeline",title:"TestPipeline",description:"API reference for TestPipeline"}},l={},o=[{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline",children:(0,r.jsx)(n.code,{children:"TestPipeline"})})]}),"\n",(0,r.jsx)(n.p,{children:"Test utility for Backstage Search collators, decorators, and indexers."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class TestPipeline \n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"An example test checking that a collator provides expected documents."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"it('provides expected documents', async () => {\n  const testSubject = await yourCollatorFactory.getCollator();\n  const pipeline = TestPipeline.fromCollator(testSubject);\n\n  const { documents } = await pipeline.execute();\n\n  expect(documents).toHaveLength(2);\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"An example test checking that a decorator behaves as expected."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"it('filters private documents', async () => {\n  const testSubject = await yourDecoratorFactory.getDecorator();\n  const pipeline = TestPipeline\n    .fromDecorator(testSubject)\n    .withDocuments([{ title: 'Private', location: '/private', text: '' }]);\n\n  const { documents } = await pipeline.execute();\n\n  expect(documents).toHaveLength(0);\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.execute",children:"execute()"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the test pipeline so that you can make assertions about the result or behavior of the given test subject."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromcollator",children:"fromCollator(collator)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Create a test pipeline given a collator you want to test."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromdecorator",children:"fromDecorator(decorator)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Create a test pipeline given a decorator you want to test."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.fromindexer",children:"fromIndexer(indexer)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Create a test pipeline given an indexer you want to test."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withcollator",children:"withCollator(collator)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Add a collator to the test pipeline."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withdecorator",children:"withDecorator(decorator)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Add a decorator to the test pipeline."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withdocuments",children:"withDocuments(documents)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Provide documents for testing decorators and indexers."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withindexer",children:"withIndexer(indexer)"})}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Add an indexer to the test pipeline."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.testpipeline.withsubject",children:"withSubject(subject)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"static"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Provide the collator, decorator, or indexer to be tested."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,c={},o=null,a=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:s,type:e,key:o,ref:a,props:c,_owner:d.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(296540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);