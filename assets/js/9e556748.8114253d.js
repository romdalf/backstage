/*! For license information please see 9e556748.8114253d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[425762],{934153:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=o(474848),t=o(28453);const r={id:"plugin-notifications-node.notificationprocessor.preprocess",title:"NotificationProcessor.preProcess()",description:"API reference for NotificationProcessor.preProcess()"},s=void 0,c={id:"reference/plugin-notifications-node.notificationprocessor.preprocess",title:"NotificationProcessor.preProcess()",description:"API reference for NotificationProcessor.preProcess()",source:"@site/../docs/reference/plugin-notifications-node.notificationprocessor.preprocess.md",sourceDirName:"reference",slug:"/reference/plugin-notifications-node.notificationprocessor.preprocess",permalink:"/docs/next/reference/plugin-notifications-node.notificationprocessor.preprocess",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-notifications-node.notificationprocessor.preprocess.md",tags:[],version:"current",frontMatter:{id:"plugin-notifications-node.notificationprocessor.preprocess",title:"NotificationProcessor.preProcess()",description:"API reference for NotificationProcessor.preProcess()"}},a={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node",children:(0,i.jsx)(n.code,{children:"@backstage/plugin-notifications-node"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationprocessor",children:(0,i.jsx)(n.code,{children:"NotificationProcessor"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationprocessor.preprocess",children:(0,i.jsx)(n.code,{children:"preProcess"})})]}),"\n",(0,i.jsx)(n.p,{children:"Pre-process notification before sending it to Backstage UI."}),"\n",(0,i.jsx)(n.p,{children:"Can be used to send the notification to external services or to decorate the notification with additional information. The notification is saved to database and sent to Backstage UI after all pre-process functions have run. The notification options passed here are already processed by processOptions functionality."}),"\n",(0,i.jsx)(n.p,{children:"preProcess functions are called for each notification recipient individually or once for broadcast notification BEFORE the notification has been sent to the Backstage UI."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"preProcess?(notification: Notification, options: NotificationSendOptions): Promise<Notification>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"notification"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"Notification"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"The notification to send"}),"\n"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"options"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/next/reference/plugin-notifications-node.notificationsendoptions",children:"NotificationSendOptions"})}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"The options to send the notification"}),"\n"]})]})]})]}),"\n**Returns:**\n",(0,i.jsx)(n.p,{children:"Promise<Notification>"}),"\n",(0,i.jsx)(n.p,{children:"The same notification or a modified version of it"})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,n,o)=>{var i=o(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var i,r={},d=null,p=null;for(i in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,i)&&!a.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:t,type:e,key:d,ref:p,props:r,_owner:c.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var i=o(296540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);