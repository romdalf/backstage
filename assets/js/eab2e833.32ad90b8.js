/*! For license information please see eab2e833.32ad90b8.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[785556],{912985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(474848),i=n(28453);const o={id:"index",title:"Integrations",sidebar_label:"Overview",description:"Configuring Backstage to read or publish data with external providers using integrations"},a=void 0,s={id:"integrations/index",title:"Integrations",description:"Configuring Backstage to read or publish data with external providers using integrations",source:"@site/../docs/integrations/index.md",sourceDirName:"integrations",slug:"/integrations/",permalink:"/docs/next/integrations/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/integrations/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Integrations",sidebar_label:"Overview",description:"Configuring Backstage to read or publish data with external providers using integrations"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/next/features/techdocs/faqs"},next:{title:"Locations",permalink:"/docs/next/integrations/aws-s3/locations"}},c={},d=[{value:"Configuration",id:"configuration",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Integrations allow Backstage to read or publish data using external providers\nsuch as GitHub, GitLab, Bitbucket, LDAP, or cloud providers."}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Integrations are configured at the root level of ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," since\nintegrations are used by many Backstage core features and other plugins."]}),"\n",(0,r.jsxs)(t.p,{children:["Each key under ",(0,r.jsx)(t.code,{children:"integrations"})," is a separate configuration for a single external\nprovider. Providers each have different configuration; here's an example of\nconfiguration to use GitHub:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      token: ${GITHUB_TOKEN}\n"})}),"\n",(0,r.jsx)(t.p,{children:"See documentation for each type of integration for full details on\nconfiguration."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(296540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);