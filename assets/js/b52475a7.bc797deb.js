/*! For license information please see b52475a7.bc797deb.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[38142],{890693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(474848),s=n(28453);const o={id:"test-utils.mockbreakpoint",title:"mockBreakpoint()",description:"API reference for mockBreakpoint()"},i=void 0,c={id:"reference/test-utils.mockbreakpoint",title:"mockBreakpoint()",description:"API reference for mockBreakpoint()",source:"@site/versioned_docs/version-stable/reference/test-utils.mockbreakpoint.md",sourceDirName:"reference",slug:"/reference/test-utils.mockbreakpoint",permalink:"/docs/reference/test-utils.mockbreakpoint",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/test-utils.mockbreakpoint.md",tags:[],version:"stable",frontMatter:{id:"test-utils.mockbreakpoint",title:"mockBreakpoint()",description:"API reference for mockBreakpoint()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/test-utils.mockbreakpoint",children:(0,r.jsx)(t.code,{children:"mockBreakpoint"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["Import from ",(0,r.jsx)(t.code,{children:"@backstage/core-components/testUtils"})," instead."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This is a mocking method suggested in the Jest docs, as it is not implemented in JSDOM yet. It can be used to mock values for the Material UI ",(0,r.jsx)(t.code,{children:"useMediaQuery"})," hook if it is used in a tested component."]}),"\n",(0,r.jsxs)(t.p,{children:["For issues checkout the documentation: ",(0,r.jsx)(t.a,{href:"https://jestjs.io/docs/manual-mocks%5C#mocking-methods-which-are-not-implemented-in-jsdom",children:"https://jestjs.io/docs/manual-mocks\\#mocking-methods-which-are-not-implemented-in-jsdom"})]}),"\n",(0,r.jsxs)(t.p,{children:["If there are any updates from Material UI React on testing ",(0,r.jsx)(t.code,{children:"useMediaQuery"})," this mock should be replaced ",(0,r.jsx)(t.a,{href:"https://mui.com/material-ui/react-use-media-query/%5C#testing",children:"https://mui.com/material-ui/react-use-media-query/\\#testing"})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export default function mockBreakpoint(options: {\n    matches: boolean;\n}): void;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"{ matches: boolean; }"}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsx)(t.p,{children:"void"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:d,ref:l,props:o,_owner:c.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);