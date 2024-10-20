/*! For license information please see fe068c2d.4ceb7731.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[551551],{125037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(474848),o=n(28453);const r={id:"register-a-component",title:"Registering a Component",description:"Start populating your Backstage app with your data."},s=void 0,a={id:"getting-started/register-a-component",title:"Registering a Component",description:"Start populating your Backstage app with your data.",source:"@site/../docs/getting-started/register-a-component.md",sourceDirName:"getting-started",slug:"/getting-started/register-a-component",permalink:"/docs/next/getting-started/register-a-component",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/getting-started/register-a-component.md",tags:[],version:"current",frontMatter:{id:"register-a-component",title:"Registering a Component",description:"Start populating your Backstage app with your data."},sidebar:"docs",previous:{title:"Logging into Backstage",permalink:"/docs/next/getting-started/logging-in"},next:{title:"Create a Component",permalink:"/docs/next/getting-started/create-a-component"}},c={},d=[{value:"Summary",id:"summary",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Finding our template",id:"1-finding-our-template",level:2},{value:"2. Filling out the template",id:"2-filling-out-the-template",level:2},{value:"3. Import the entity",id:"3-import-the-entity",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Audience: Developers"}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"This guide will walk you through how to pull Backstage data from other locations manually. There are integrations that will automatically do this for you."}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.p,{children:["You should have already ",(0,i.jsx)(t.a,{href:"/docs/next/getting-started/",children:"have a standalone app"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"1-finding-our-template",children:"1. Finding our template"}),"\n",(0,i.jsxs)(t.p,{children:["Register a new component, by going to ",(0,i.jsx)(t.code,{children:"create"})," and choose ",(0,i.jsx)(t.code,{children:"Register existing component"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Software template main screen, with a blue button to add an existing component",src:n(149535).A+"",width:"990",height:"217"})}),"\n",(0,i.jsx)(t.h2,{id:"2-filling-out-the-template",children:"2. Filling out the template"}),"\n",(0,i.jsxs)(t.p,{children:["For repository URL, use ",(0,i.jsx)(t.code,{children:"https://github.com/backstage/backstage/blob/master/catalog-info.yaml"}),". This is used in our ",(0,i.jsx)(t.a,{href:"https://demo.backstage.io",children:"demo site"})," catalog."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Register a new component wizard, asking for an URL to the existing component YAML file",src:n(194884).A+"",width:"667",height:"451"})}),"\n",(0,i.jsxs)(t.p,{children:["Hit ",(0,i.jsx)(t.code,{children:"Analyze"})," and review the changes."]}),"\n",(0,i.jsx)(t.h2,{id:"3-import-the-entity",children:"3. Import the entity"}),"\n",(0,i.jsxs)(t.p,{children:["If the changes from ",(0,i.jsx)(t.code,{children:"Analyze"})," are correct, click ",(0,i.jsx)(t.code,{children:"Apply"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Register a new component wizard, showing the metadata for the component YAML we use in this tutorial",src:n(434829).A+"",width:"659",height:"511"})}),"\n",(0,i.jsx)(t.p,{children:"You should receive a message that your entities have been added."}),"\n",(0,i.jsxs)(t.p,{children:["If you go back to ",(0,i.jsx)(t.code,{children:"Home"}),", you should be able to find ",(0,i.jsx)(t.code,{children:"backstage"}),". You can click it and see the details for this new entity."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var i=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,r={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:l,props:r,_owner:a.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},149535:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/b-existing-1-f016ed45f176600e6364e7c08bb57d65.png"},194884:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/b-existing-2-3a7f97195f7dc72488c6f844516aeee9.png"},434829:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/b-existing-3-3a36de16637c1cce6cdfd568da7bc8b1.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(296540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);