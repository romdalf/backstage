/*! For license information please see 4db64613.5e470c1d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[517693],{389888:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var n=r(474848),t=r(28453);const c={id:"plugin-scaffolder-backend.taskstore",title:"TaskStore",description:"API reference for TaskStore"},d=void 0,l={id:"reference/plugin-scaffolder-backend.taskstore",title:"TaskStore",description:"API reference for TaskStore",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend.taskstore.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.taskstore",permalink:"/docs/reference/plugin-scaffolder-backend.taskstore",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend.taskstore.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend.taskstore",title:"TaskStore",description:"API reference for TaskStore"}},i={},a=[{value:"Methods",id:"methods",level:2}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,n.jsx)(s.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore",children:(0,n.jsx)(s.code,{children:"TaskStore"})})]}),"\n",(0,n.jsx)(s.p,{children:"TaskStore"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"export interface TaskStore \n"})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Method"}),"\n"]}),(0,n.jsxs)(s.th,{children:["\n",(0,n.jsx)(s.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.canceltask",children:"cancelTask(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.claimtask",children:"claimTask()"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.cleanworkspace",children:"cleanWorkspace({ taskId })?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.completetask",children:"completeTask(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.createtask",children:"createTask(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.emitlogevent",children:"emitLogEvent(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.gettask",children:"getTask(taskId)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.gettaskstate",children:"getTaskState({ taskId })?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.heartbeattask",children:"heartbeatTask(taskId)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.list",children:"list(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.list_1",children:"list(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.listevents",children:"listEvents(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.liststaletasks",children:"listStaleTasks(options)"})}),"\n"]}),(0,n.jsx)(s.td,{children:"\n"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.recovertasks",children:"recoverTasks(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.rehydrateworkspace",children:"rehydrateWorkspace(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.retrytask",children:"retryTask(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.savetaskstate",children:"saveTaskState(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.serializeworkspace",children:"serializeWorkspace({ path, taskId, })?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/docs/reference/plugin-scaffolder-backend.taskstore.shutdowntask",children:"shutdownTask(options)?"})}),"\n"]}),(0,n.jsxs)(s.td,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"(Optional)"})}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},221020:(e,s,r)=>{var n=r(296540),t=Symbol.for("react.element"),c=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,s,r){var n,c={},a=null,o=null;for(n in void 0!==r&&(a=""+r),void 0!==s.key&&(a=""+s.key),void 0!==s.ref&&(o=s.ref),s)d.call(s,n)&&!i.hasOwnProperty(n)&&(c[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===c[n]&&(c[n]=s[n]);return{$$typeof:t,type:e,key:a,ref:o,props:c,_owner:l.current}}s.Fragment=c,s.jsx=a,s.jsxs=a},474848:(e,s,r)=>{e.exports=r(221020)},28453:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>l});var n=r(296540);const t={},c=n.createContext(t);function d(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);