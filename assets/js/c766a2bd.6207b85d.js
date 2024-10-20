/*! For license information please see c766a2bd.6207b85d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[48258],{690813:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=n(474848),r=n(28453);const a={id:"plugin-events-backend-module-aws-sqs",title:"@backstage/plugin-events-backend-module-aws-sqs",description:"API Reference for @backstage/plugin-events-backend-module-aws-sqs"},d=void 0,c={id:"reference/plugin-events-backend-module-aws-sqs",title:"@backstage/plugin-events-backend-module-aws-sqs",description:"API Reference for @backstage/plugin-events-backend-module-aws-sqs",source:"@site/versioned_docs/version-stable/reference/plugin-events-backend-module-aws-sqs.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend-module-aws-sqs",permalink:"/docs/reference/plugin-events-backend-module-aws-sqs",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-events-backend-module-aws-sqs.md",tags:[],version:"stable",frontMatter:{id:"plugin-events-backend-module-aws-sqs",title:"@backstage/plugin-events-backend-module-aws-sqs",description:"API Reference for @backstage/plugin-events-backend-module-aws-sqs"}},l={},i=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(s.a,{href:"/docs/reference/plugin-events-backend-module-aws-sqs",children:(0,t.jsx)(s.code,{children:"@backstage/plugin-events-backend-module-aws-sqs"})})]}),"\n",(0,t.jsx)(s.p,{children:'The module "sqs" for the Backstage backend plugin "events" adding an AWS SQS-based publisher, receiving events from an AWS SQS queue and passing it to the internal event broker.'}),"\n",(0,t.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Class"}),"\n"]}),(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-events-backend-module-aws-sqs.awssqsconsumingeventpublisher",children:"AwsSqsConsumingEventPublisher"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"Publishes events received from an AWS SQS queue. The message payload will be used as event payload and passed to registered subscribers."}),"\n"]})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Variable"}),"\n"]}),(0,t.jsxs)(s.th,{children:["\n",(0,t.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/reference/plugin-events-backend-module-aws-sqs.eventsmoduleawssqsconsumingeventpublisher",children:"eventsModuleAwsSqsConsumingEventPublisher"})}),"\n"]}),(0,t.jsxs)(s.td,{children:["\n",(0,t.jsx)(s.p,{children:"AWS SQS module for the Events plugin."}),"\n"]})]})})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,n){var t,a={},i=null,o=null;for(t in void 0!==n&&(i=""+n),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(o=s.ref),s)d.call(s,t)&&!l.hasOwnProperty(t)&&(a[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===a[t]&&(a[t]=s[t]);return{$$typeof:r,type:e,key:i,ref:o,props:a,_owner:c.current}}s.Fragment=a,s.jsx=i,s.jsxs=i},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>c});var t=n(296540);const r={},a=t.createContext(r);function d(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);