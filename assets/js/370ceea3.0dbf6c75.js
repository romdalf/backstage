/*! For license information please see 370ceea3.0dbf6c75.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[709224],{64217:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>o});var t=s(474848),r=s(28453);const c={id:"plugin-events-node.defaulteventsservice",title:"DefaultEventsService",description:"API reference for DefaultEventsService"},i=void 0,d={id:"reference/plugin-events-node.defaulteventsservice",title:"DefaultEventsService",description:"API reference for DefaultEventsService",source:"@site/versioned_docs/version-stable/reference/plugin-events-node.defaulteventsservice.md",sourceDirName:"reference",slug:"/reference/plugin-events-node.defaulteventsservice",permalink:"/docs/reference/plugin-events-node.defaulteventsservice",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-events-node.defaulteventsservice.md",tags:[],version:"stable",frontMatter:{id:"plugin-events-node.defaulteventsservice",title:"DefaultEventsService",description:"API reference for DefaultEventsService"}},l={},o=[{value:"Methods",id:"methods",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-events-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.defaulteventsservice",children:(0,t.jsx)(n.code,{children:"DefaultEventsService"})})]}),"\n",(0,t.jsx)(n.p,{children:"In-process event broker which will pass the event to all registered subscribers interested in it. Events will not be persisted in any form. Events will not be passed to subscribers at other instances of the same cluster."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class DefaultEventsService implements EventsService \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.eventsservice",children:"EventsService"})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.defaulteventsservice.create",children:"create(options)"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"static"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.defaulteventsservice.forplugin",children:"forPlugin(pluginId, options)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Returns a plugin-scoped context of the ",(0,t.jsx)(n.code,{children:"EventService"})," that ensures to prefix subscriber IDs with the plugin ID."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.defaulteventsservice.publish",children:"publish(params)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsx)(n.td,{children:"\n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-events-node.defaulteventsservice.subscribe",children:"subscribe(options)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsx)(n.td,{children:"\n"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var t,c={},o=null,a=null;for(t in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:r,type:e,key:o,ref:a,props:c,_owner:d.current}}n.Fragment=c,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(296540);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);