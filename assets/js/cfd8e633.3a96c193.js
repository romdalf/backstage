/*! For license information please see cfd8e633.3a96c193.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[625747],{199062:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=t(474848),o=t(28453);const c={id:"core-plugin-api.getcomponentdata",title:"getComponentData()",description:"API reference for getComponentData()"},s=void 0,a={id:"reference/core-plugin-api.getcomponentdata",title:"getComponentData()",description:"API reference for getComponentData()",source:"@site/../docs/reference/core-plugin-api.getcomponentdata.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.getcomponentdata",permalink:"/docs/next/reference/core-plugin-api.getcomponentdata",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/core-plugin-api.getcomponentdata.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.getcomponentdata",title:"getComponentData()",description:"API reference for getComponentData()"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/core-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.getcomponentdata",children:(0,r.jsx)(n.code,{children:"getComponentData"})})]}),"\n",(0,r.jsx)(n.p,{children:"Retrieves data attached to a component."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"function getComponentData<T>(node: ReactNode, type: string): T | undefined;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"node"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"ReactNode"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"React component to look up."}),"\n"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"type"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"string"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"Key of the data to retrieve."}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,r.jsx)(n.p,{children:"T | undefined"}),"\n",(0,r.jsxs)(n.p,{children:["Data stored using ",(0,r.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.attachcomponentdata",children:"attachComponentData()"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/plugins/composability#component-data",children:"https://backstage.io/docs/plugins/composability#component-data"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,c={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!i.hasOwnProperty(r)&&(c[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===c[r]&&(c[r]=n[r]);return{$$typeof:o,type:e,key:d,ref:p,props:c,_owner:a.current}}n.Fragment=c,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(296540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);