/*! For license information please see 9a201c10.0d08695c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[691204],{497207:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(474848),t=n(28453);const i={id:"plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",title:"AwsSqsConsumingEventPublisher",description:"API reference for AwsSqsConsumingEventPublisher"},c=void 0,o={id:"reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",title:"AwsSqsConsumingEventPublisher",description:"API reference for AwsSqsConsumingEventPublisher",source:"@site/../docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",permalink:"/docs/next/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.md",tags:[],version:"current",frontMatter:{id:"plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",title:"AwsSqsConsumingEventPublisher",description:"API reference for AwsSqsConsumingEventPublisher"}},d={},l=[{value:"Methods",id:"methods",level:2}];function a(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-events-backend-module-aws-sqs",children:(0,r.jsx)(s.code,{children:"@backstage/plugin-events-backend-module-aws-sqs"})})," > ",(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",children:(0,r.jsx)(s.code,{children:"AwsSqsConsumingEventPublisher"})})]}),"\n",(0,r.jsx)(s.p,{children:"Publishes events received from an AWS SQS queue. The message payload will be used as event payload and passed to registered subscribers."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"class AwsSqsConsumingEventPublisher \n"})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Method"}),"\n"]}),(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Modifiers"}),"\n"]}),(0,r.jsxs)(s.th,{children:["\n",(0,r.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.fromconfig",children:"fromConfig(env)"})}),"\n"]}),(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"static"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:["\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/next/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher.start",children:"start()"})}),"\n"]}),(0,r.jsx)(s.td,{children:"\n"}),(0,r.jsx)(s.td,{children:"\n"})]})]})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,s,n)=>{var r=n(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var r,i={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(a=s.ref),s)c.call(s,r)&&!d.hasOwnProperty(r)&&(i[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:t,type:e,key:l,ref:a,props:i,_owner:o.current}}s.Fragment=i,s.jsx=l,s.jsxs=l},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var r=n(296540);const t={},i=r.createContext(t);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);