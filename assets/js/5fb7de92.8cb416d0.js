/*! For license information please see 5fb7de92.8cb416d0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[317419],{570596:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var t=s(474848),r=s(28453);const c={id:"plugin-events-backend",title:"@backstage/plugin-events-backend",description:"API Reference for @backstage/plugin-events-backend"},i=void 0,d={id:"reference/plugin-events-backend",title:"@backstage/plugin-events-backend",description:"API Reference for @backstage/plugin-events-backend",source:"@site/versioned_docs/version-stable/reference/plugin-events-backend.md",sourceDirName:"reference",slug:"/reference/plugin-events-backend",permalink:"/docs/reference/plugin-events-backend",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-events-backend.md",tags:[],version:"stable",frontMatter:{id:"plugin-events-backend",title:"@backstage/plugin-events-backend",description:"API Reference for @backstage/plugin-events-backend"}},l={},a=[{value:"Classes",id:"classes",level:2},{value:"Variables",id:"variables",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-events-backend"})})]}),"\n",(0,t.jsx)(n.p,{children:'The Backstage backend plugin "events" that provides the event management.'}),"\n",(0,t.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Class"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-backend.defaulteventbroker",children:"DefaultEventBroker"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"In process event broker which will pass the event to all registered subscribers interested in it. Events will not be persisted in any form."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-backend.eventsbackend",children:"EventsBackend"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"A builder that helps wire up all component parts of the event management."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-backend.httppostingresseventpublisher",children:"HttpPostIngressEventPublisher"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Publishes events received from their origin (e.g., webhook events from an SCM system) via HTTP POST endpoint and passes the request body as event payload to the registered subscribers."}),"\n"]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-backend.eventsplugin",children:"eventsPlugin"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Events plugin"}),"\n"]})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,c={},a=null,o=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:r,type:e,key:a,ref:o,props:c,_owner:d.current}}n.Fragment=c,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(296540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);