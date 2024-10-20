/*! For license information please see 8fc3bdc1.825bc54e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[787613],{649973:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(474848),c=n(28453);const i={id:"backend-plugin-api.schedulerservice.scheduletask",title:"SchedulerService.scheduleTask()",description:"API reference for SchedulerService.scheduleTask()"},t=void 0,d={id:"reference/backend-plugin-api.schedulerservice.scheduletask",title:"SchedulerService.scheduleTask()",description:"API reference for SchedulerService.scheduleTask()",source:"@site/versioned_docs/version-stable/reference/backend-plugin-api.schedulerservice.scheduletask.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.schedulerservice.scheduletask",permalink:"/docs/reference/backend-plugin-api.schedulerservice.scheduletask",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-plugin-api.schedulerservice.scheduletask.md",tags:[],version:"stable",frontMatter:{id:"backend-plugin-api.schedulerservice.scheduletask",title:"SchedulerService.scheduleTask()",description:"API reference for SchedulerService.scheduleTask()"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,s.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice",children:(0,s.jsx)(r.code,{children:"SchedulerService"})})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservice.scheduletask",children:(0,s.jsx)(r.code,{children:"scheduleTask"})})]}),"\n",(0,s.jsx)(r.p,{children:"Schedules a task function for recurring runs."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"scheduleTask(task: SchedulerServiceTaskScheduleDefinition & SchedulerServiceTaskInvocationDefinition): Promise<void>;\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Parameter"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"task"}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskscheduledefinition",children:"SchedulerServiceTaskScheduleDefinition"})," & ",(0,s.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.schedulerservicetaskinvocationdefinition",children:"SchedulerServiceTaskInvocationDefinition"})]}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The task definition"}),"\n"]})]})})]}),"\n**Returns:**\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"scope"})," task field controls whether to use coordinated exclusive invocation across workers, or to just coordinate within the current worker."]}),"\n",(0,s.jsx)(r.p,{children:"This convenience method performs both the scheduling and invocation in one go."})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,r,n)=>{var s=n(296540),c=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var s,i={},l=null,o=null;for(s in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(o=r.ref),r)t.call(r,s)&&!a.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:c,type:e,key:l,ref:o,props:i,_owner:d.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>d});var s=n(296540);const c={},i=s.createContext(c);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);