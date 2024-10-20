/*! For license information please see da2bbd83.ec6f358b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[714367],{302414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(474848),c=n(28453);const o={id:"backend-test-utils.mockdirectorycontent",title:"MockDirectoryContent",description:"API reference for MockDirectoryContent"},s=void 0,i={id:"reference/backend-test-utils.mockdirectorycontent",title:"MockDirectoryContent",description:"API reference for MockDirectoryContent",source:"@site/../docs/reference/backend-test-utils.mockdirectorycontent.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockdirectorycontent",permalink:"/docs/next/reference/backend-test-utils.mockdirectorycontent",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-test-utils.mockdirectorycontent.md",tags:[],version:"current",frontMatter:{id:"backend-test-utils.mockdirectorycontent",title:"MockDirectoryContent",description:"API reference for MockDirectoryContent"}},a={},d=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockdirectorycontent",children:(0,r.jsx)(t.code,{children:"MockDirectoryContent"})})]}),"\n",(0,r.jsx)(t.p,{children:"The content of a mock directory represented by a nested object structure."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type MockDirectoryContent = {\n    [name in string]: MockDirectoryContent | string | Buffer | MockDirectoryContentCallback;\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"References:"})," ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockdirectorycontent",children:"MockDirectoryContent"}),", ",(0,r.jsx)(t.a,{href:"/docs/next/reference/backend-test-utils.mockdirectorycontentcallback",children:"MockDirectoryContentCallback"})]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"When used as input, the keys may contain forward slashes to indicate nested directories. Then returned as output, each directory will always be represented as a separate object."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"{\n  'test.txt': 'content',\n  'sub-dir': {\n    'file.txt': 'content',\n    'nested-dir/file.txt': 'content',\n  },\n  'empty-dir': {},\n  'binary-file': Buffer.from([0, 1, 2]),\n}\n"})})]})}function f(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:c,type:e,key:d,ref:l,props:o,_owner:i.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(296540);const c={},o=r.createContext(c);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);