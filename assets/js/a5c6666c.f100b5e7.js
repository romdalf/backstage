/*! For license information please see a5c6666c.f100b5e7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[165483],{974975:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var n=d(474848),s=d(28453);const t={id:"dev-utils.devappbuilder",title:"DevAppBuilder",description:"API reference for DevAppBuilder"},i=void 0,l={id:"reference/dev-utils.devappbuilder",title:"DevAppBuilder",description:"API reference for DevAppBuilder",source:"@site/../docs/reference/dev-utils.devappbuilder.md",sourceDirName:"reference",slug:"/reference/dev-utils.devappbuilder",permalink:"/docs/next/reference/dev-utils.devappbuilder",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/dev-utils.devappbuilder.md",tags:[],version:"current",frontMatter:{id:"dev-utils.devappbuilder",title:"DevAppBuilder",description:"API reference for DevAppBuilder"}},c={},a=[{value:"Methods",id:"methods",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils",children:(0,n.jsx)(r.code,{children:"@backstage/dev-utils"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder",children:(0,n.jsx)(r.code,{children:"DevAppBuilder"})})]}),"\n",(0,n.jsx)(r.p,{children:"DevApp builder that is similar to the App builder API, but creates an App with the purpose of developing one or more plugins inside it."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class DevAppBuilder \n"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Method"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Modifiers"}),"\n"]}),(0,n.jsxs)(r.th,{children:["\n",(0,n.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.addpage",children:"addPage(opts)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Adds a page component along with accompanying sidebar item."}),"\n",(0,n.jsx)(r.p,{children:"If no path is provided one will be generated. If no title is provided, no sidebar item will be created."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.addrootchild",children:"addRootChild(node)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Adds a React node to place just inside the App Provider."}),"\n",(0,n.jsx)(r.p,{children:"Useful for adding more global components like the AlertDisplay."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.addsidebaritem",children:"addSidebarItem(sidebarItem)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Adds a new sidebar item to the dev app."}),"\n",(0,n.jsx)(r.p,{children:"Useful for adding only sidebar items without a corresponding page."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.addsigninprovider",children:"addSignInProvider(provider)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Adds new sign in provider for the dev app"}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.addthemes",children:"addThemes(themes)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Adds an array of themes to override the default theme."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.addtranslationresource",children:"addTranslationResource(resource)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Add translation resource to the dev app"}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.build",children:"build()"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Build a DevApp component using the resources registered so far"}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.registerapi",children:"registerApi(factory)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Register an API factory to add to the app"}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.registerplugin",children:"registerPlugin(plugins)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Register one or more plugins to render in the dev app"}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.render",children:"render()"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Build and render directory to #root element, with react hot loading."}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.setavailablelanguages",children:"setAvailableLanguages(languages)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Set available languages to be shown in the dev app"}),"\n"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/next/reference/dev-utils.devappbuilder.setdefaultlanguage",children:"setDefaultLanguage(language)"})}),"\n"]}),(0,n.jsx)(r.td,{children:"\n"}),(0,n.jsxs)(r.td,{children:["\n",(0,n.jsx)(r.p,{children:"Set default language for the dev app"}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},221020:(e,r,d)=>{var n=d(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,d){var n,t={},a=null,o=null;for(n in void 0!==d&&(a=""+d),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(o=r.ref),r)i.call(r,n)&&!c.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===t[n]&&(t[n]=r[n]);return{$$typeof:s,type:e,key:a,ref:o,props:t,_owner:l.current}}r.Fragment=t,r.jsx=a,r.jsxs=a},474848:(e,r,d)=>{e.exports=d(221020)},28453:(e,r,d)=>{d.d(r,{R:()=>i,x:()=>l});var n=d(296540);const s={},t=n.createContext(s);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);