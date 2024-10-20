/*! For license information please see 7036af76.1d103285.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[502327],{810785:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(474848),s=r(28453);const i={id:"core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()"},c=void 0,l={id:"reference/core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()",source:"@site/versioned_docs/version-stable/reference/core-plugin-api.useelementfilter.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.useelementfilter",permalink:"/docs/reference/core-plugin-api.useelementfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.useelementfilter.md",tags:[],version:"stable",frontMatter:{id:"core-plugin-api.useelementfilter",title:"useElementFilter()",description:"API reference for useElementFilter()"}},o={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api",children:(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.useelementfilter",children:(0,t.jsx)(n.code,{children:"useElementFilter"})})]}),"\n",(0,t.jsxs)(n.p,{children:["useElementFilter is a utility that helps you narrow down and retrieve data from a React element tree, typically operating on the ",(0,t.jsx)(n.code,{children:"children"})," property passed in to a component."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"function useElementFilter<T>(node: ReactNode, filterFn: (arg: ElementCollection) => T, dependencies?: any[]): T;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Type"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"node"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"ReactNode"}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"filterFn"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["(arg: ",(0,t.jsx)(n.a,{href:"/docs/reference/core-plugin-api.elementcollection",children:"ElementCollection"}),") => T"]}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"dependencies"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"any[]"}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"(Optional)"})}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,t.jsx)(n.p,{children:"T"}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["A common use-case is to construct declarative APIs where a React component defines its behavior based on its children, such as the relationship between ",(0,t.jsx)(n.code,{children:"Routes"})," and ",(0,t.jsx)(n.code,{children:"Route"})," in ",(0,t.jsx)(n.code,{children:"react-router"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The purpose of this hook is similar to ",(0,t.jsx)(n.code,{children:"React.Children.map"}),", and it expands upon it to also handle traversal of fragments and Backstage specific things like the ",(0,t.jsx)(n.code,{children:"FeatureFlagged"})," component."]}),"\n",(0,t.jsxs)(n.p,{children:["The return value of the hook is computed by the provided filter function, but with added memoization based on the input ",(0,t.jsx)(n.code,{children:"node"}),". If further memoization dependencies are used in the filter function, they should be added to the third ",(0,t.jsx)(n.code,{children:"dependencies"})," argument, just like ",(0,t.jsx)(n.code,{children:"useMemo"}),", ",(0,t.jsx)(n.code,{children:"useEffect"}),", etc."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var t,i={},d=null,a=null;for(t in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,t)&&!o.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:d,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var t=r(296540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);