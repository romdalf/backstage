/*! For license information please see 314681ae.a7b20fe4.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[55270],{347720:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=n(474848),a=n(28453);const o={id:"scaling",title:"Scaling Backstage Deployments",sidebar_label:"Scaling",description:"Scaling Backstage production deployments"},r=void 0,i={id:"deployment/scaling",title:"Scaling Backstage Deployments",description:"Scaling Backstage production deployments",source:"@site/../docs/deployment/scaling.md",sourceDirName:"deployment",slug:"/deployment/scaling",permalink:"/docs/next/deployment/scaling",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/deployment/scaling.md",tags:[],version:"current",frontMatter:{id:"scaling",title:"Scaling Backstage Deployments",sidebar_label:"Scaling",description:"Scaling Backstage production deployments"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/deployment/"},next:{title:"Docker",permalink:"/docs/next/deployment/docker"}},c={},l=[];function d(e){const t={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"There are several different methods for scaling Backstage deployments. The most\nstraight-forward one is to simply deploy multiple identical instances and distributing\nincoming requests across them. The one requirement for this to work is that all instances\nneed to share the same external resources, such as the database, and optional caching or\nsearch services. The Backstage backend plugins will coordinate through the database\nto share state and coordinate work."}),"\n",(0,s.jsxs)(t.p,{children:["Another method for scaling Backstage deployments is to break apart the backend\ninto multiple different services, each running a different set of plugins. This\nis a more advanced approach and requires you to be able to route requests to\nthe appropriate backends based on the plugin ID. Both for ingress, but also\ninternal traffic between Backstage backends, which is done by creating a custom\nimplementation of the ",(0,s.jsx)(t.a,{href:"/docs/next/reference/backend-plugin-api.discoveryservice",children:"DiscoveryService"})," interface. See the ",(0,s.jsx)(t.a,{href:"/docs/next/backend-system/building-backends/index#split-into-multiple-backends",children:"backend system docs"})," for more details on how to separate your deployment into multiple backend instances."]}),"\n",(0,s.jsx)(t.p,{children:"Lastly, you can also replicate the Backstage deployments across multiple regions.\nThis is not a pattern that there is built-in support for and typically only makes\nsense to do for individual backend plugins."})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var s=n(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,o={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:d,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(296540);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);