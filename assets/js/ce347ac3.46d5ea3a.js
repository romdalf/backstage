/*! For license information please see ce347ac3.46d5ea3a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[665560],{231337:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=t(474848),s=t(28453);const o={id:"frontend-plugin-api.appnodeinstance",title:"AppNodeInstance",description:"API reference for AppNodeInstance"},c=void 0,d={id:"reference/frontend-plugin-api.appnodeinstance",title:"AppNodeInstance",description:"API reference for AppNodeInstance",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.appnodeinstance.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.appnodeinstance",permalink:"/docs/reference/frontend-plugin-api.appnodeinstance",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-plugin-api.appnodeinstance.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.appnodeinstance",title:"AppNodeInstance",description:"API reference for AppNodeInstance"}},a={},i=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodeinstance",children:(0,r.jsx)(n.code,{children:"AppNodeInstance"})})]}),"\n",(0,r.jsxs)(n.p,{children:["The instance of this ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"})," in the ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.apptree",children:"AppTree"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export interface AppNodeInstance \n"})}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["The app node instance is created when the ",(0,r.jsx)(n.code,{children:"factory"})," function of an extension is called. Instances will only be present for nodes in the app that are connected to the root node and not disabled"]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodeinstance.getdata",children:"getData(ref)"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Get the output data for a single extension data ref"}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnodeinstance.getdatarefs",children:"getDataRefs()"})}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Returns a sequence of all extension data refs that were output by this instance"}),"\n"]})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,o={},i=null,p=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(p=n.ref),n)c.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:i,ref:p,props:o,_owner:d.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var r=t(296540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);