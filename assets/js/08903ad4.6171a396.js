/*! For license information please see 08903ad4.6171a396.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[522676],{220511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(474848),s=n(28453);const o={id:"app",title:"App Instances",sidebar_label:"App",description:"App instances"},r=void 0,i={id:"frontend-system/architecture/app",title:"App Instances",description:"App instances",source:"@site/../docs/frontend-system/architecture/10-app.md",sourceDirName:"frontend-system/architecture",slug:"/frontend-system/architecture/app",permalink:"/docs/next/frontend-system/architecture/app",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/frontend-system/architecture/10-app.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"app",title:"App Instances",sidebar_label:"App",description:"App instances"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/frontend-system/architecture/index"},next:{title:"Plugins",permalink:"/docs/next/frontend-system/architecture/plugins"}},c={},l=[{value:"The App Instance",id:"the-app-instance",level:2},{value:"Feature Discovery",id:"feature-discovery",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"NOTE: The new frontend system is in alpha and is only supported by a small number of plugins."})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"the-app-instance",children:"The App Instance"}),"\n",(0,a.jsx)(t.p,{children:"The app instance is the main entry point for creating a frontend app. It doesn't do much on its own, but is instead responsible for wiring things together that have been provided as features from other parts of the system."}),"\n",(0,a.jsx)(t.p,{children:"Below is a simple example of how to create and render an app instance:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import ReactDOM from 'react-dom/client';\nimport { createApp } from '@backstage/frontend-defaults';\n\n// Create your app instance\nconst app = createApp({\n  // Features such as plugins can be installed explicitly, but we will explore other options later on\n  features: [catalogPlugin],\n});\n\n// This creates a React element that renders the entire app\nconst root = app.createRoot();\n\n// Just like any other React we need a root element. No server side rendering is used.\nconst rootEl = document.getElementById('root')!;\n\nReactDOM.createRoot(rootEl).render(app);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We call ",(0,a.jsx)(t.code,{children:"createApp"})," to create a new app instance, which is responsible for wiring together all of the features that we provide to the app. It also provides a set of built-in ",(0,a.jsx)(t.a,{href:"/docs/next/frontend-system/architecture/extensions",children:"Extensions"})," that help build out the foundations of the app, as well as defaults for many other systems such as ",(0,a.jsx)(t.a,{href:"/docs/next/frontend-system/architecture/utility-apis",children:"Utility API"})," implementations, components, icons, themes, and how to load configuration. No real work is done at the point of creating the app though, it's all deferred to the rendering of the element returned from ",(0,a.jsx)(t.code,{children:"app.createRoot()"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["It is possible to explicitly install features when creating the app, although typically these will instead be discovered automatically which we'll explore later on. Nevertheless these features are what build out the actual functionality of the app by providing ",(0,a.jsx)(t.a,{href:"/docs/next/frontend-system/architecture/extensions",children:"Extensions"}),". These extensions are wired together by the app into a tree structure known as the app extension tree. Each node in this tree receives data from its child nodes, and passes along data to its parent. The following diagram illustrates the shape of a small app extension tree."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"frontend system app structure diagram",src:n(692345).A+"",width:"371",height:"351"})}),"\n",(0,a.jsxs)(t.p,{children:["Each node in this tree is an extension with a parent node and children. The colored shapes represent extension data inputs and output, where each color is one unique type of data. You can see that there are both extensions that output data that is ignored by the parent, as well as extensions that accept inputs but do not have any children. There are a couple of different tools at your disposal when creating and extension that lets you define different requirements for your inputs and output, which we will cover in greater details in the ",(0,a.jsx)(t.a,{href:"/docs/next/frontend-system/architecture/extensions",children:"Extensions"})," section."]}),"\n",(0,a.jsxs)(t.p,{children:["A common type of data that is shared between extensions is React elements and components. These can in turn be rendered by each other in their own React components, which ends up forming a parallel tree of React components that is similar in shape to that of the app extension tree. At the top of the app extension tree is a built-in root extension that among other things outputs a React element. This element also ends up being the root of the parallel React tree, and is rendered by the React element returned by ",(0,a.jsx)(t.code,{children:"app.createRoot()"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"feature-discovery",children:"Feature Discovery"}),"\n",(0,a.jsxs)(t.p,{children:["App feature discovery lets you automatically discover and install features provided by dependencies in your app. In practice, it means that you don't need to manually ",(0,a.jsx)(t.code,{children:"import"})," features in code, but they are instead installed as soon as you add them as a dependency in your ",(0,a.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Because feature discovery needs to interact with the compilation process, it is only available when using the ",(0,a.jsx)(t.code,{children:"@backstage/cli"})," to build your app. It is hooked into the WebPack compilation process by scanning your app package for compatible dependencies, which are then made part of the app compilation bundle."]}),"\n",(0,a.jsxs)(t.p,{children:["Since the ",(0,a.jsx)(t.code,{children:"@backstage/cli"})," is a more stable component than the new frontend system, feature discovery is currently marked as an experimental feature of the CLI and needs to be enabled manually. To enable it, add the following configuration to your ",(0,a.jsx)(t.code,{children:"app-config.yaml"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"app:\n  experimental:\n    packages: all\n"})}),"\n",(0,a.jsx)(t.p,{children:"This will cause all dependencies in your app package to be installed automatically. If this is not desired, you can use include or exclude filters to narrow down the set of packages:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"app:\n  experimental:\n    packages:\n      # Only the following packages will be included\n      include:\n        - '@backstage/plugin-catalog'\n        - '@backstage/plugin-scaffolder'\n---\napp:\n  experimental:\n    packages:\n      # All but the following package will be included\n      exclude:\n        - '@backstage/plugin-catalog'\n"})}),"\n",(0,a.jsx)(t.p,{children:"Note that you do not need to manually exclude packages that you also import explicitly in code, since plugin instances are deduplicated by the app. You will never end up with duplicate plugin installations except if they are in fact two different plugin instances with different IDs."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},221020:(e,t,n)=>{var a=n(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,o={},l=null,p=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)r.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:l,ref:p,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},692345:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/architecture-app.drawio-a998a662bb304dcf8cc7d451fdc7755f.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(296540);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);