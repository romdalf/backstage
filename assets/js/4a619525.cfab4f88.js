/*! For license information please see 4a619525.cfab4f88.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[391612],{775070:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(474848),i=r(28453);const s={id:"config.configreader",title:"ConfigReader",description:"API reference for ConfigReader"},c=void 0,d={id:"reference/config.configreader",title:"ConfigReader",description:"API reference for ConfigReader",source:"@site/../docs/reference/config.configreader.md",sourceDirName:"reference",slug:"/reference/config.configreader",permalink:"/docs/next/reference/config.configreader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/config.configreader.md",tags:[],version:"current",frontMatter:{id:"config.configreader",title:"ConfigReader",description:"API reference for ConfigReader"}},o={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/config",children:(0,t.jsx)(n.code,{children:"@backstage/config"})})," > ",(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader",children:(0,t.jsx)(n.code,{children:"ConfigReader"})})]}),"\n",(0,t.jsxs)(n.p,{children:["An implementation of the ",(0,t.jsx)(n.code,{children:"Config"})," interface that uses a plain JavaScript object for the backing data, with the ability of linking multiple readers together."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ConfigReader implements Config \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/next/reference/config.config",children:"Config"})]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Constructor"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader._constructor_",children:"(constructor)(data, context, fallback, prefix)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Constructs a new instance of the ",(0,t.jsx)(n.code,{children:"ConfigReader"})," class"]}),"\n"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Method"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Modifiers"}),"\n"]}),(0,t.jsxs)(n.th,{children:["\n",(0,t.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.fromconfigs",children:"fromConfigs(configs)"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"static"})}),"\n"]}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Instantiates the config reader from a list of application config objects."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.get",children:"get(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptional"}),", but will throw an error if there's no value for the given key."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getboolean",children:"getBoolean(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalBoolean"}),", but will throw an error if there's no value for the given key."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getconfig",children:"getConfig(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalConfig"}),", but will throw an error if there's no value for the given key."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getconfigarray",children:"getConfigArray(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalConfigArray"}),", but will throw an error if there's no value for the given key."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getnumber",children:"getNumber(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalNumber"}),", but will throw an error if there's no value for the given key."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getoptional",children:"getOptional(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Read out all configuration data for the given key."}),"\n",(0,t.jsx)(n.p,{children:"Usage of this method should be avoided as the typed alternatives provide much better error reporting. The main use-case of this method is to determine the type of a configuration value in the case where there are multiple possible shapes of the configuration."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getoptionalboolean",children:"getOptionalBoolean(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Reads a configuration value at the given key, expecting it to be a boolean."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getoptionalconfig",children:"getOptionalConfig(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Creates a sub-view of the configuration object. The configuration value at the position of the provided key must be an object."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getoptionalconfigarray",children:"getOptionalConfigArray(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Creates a sub-view of an array of configuration objects. The configuration value at the position of the provided key must be an array of objects."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getoptionalnumber",children:"getOptionalNumber(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Reads a configuration value at the given key, expecting it to be a number."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getoptionalstring",children:"getOptionalString(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Reads a configuration value at the given key, expecting it to be a string."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getoptionalstringarray",children:"getOptionalStringArray(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Reads a configuration value at the given key, expecting it to be an array of strings."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getstring",children:"getString(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalString"}),", but will throw an error if there's no value for the given key."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.getstringarray",children:"getStringArray(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsxs)(n.p,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalStringArray"}),", but will throw an error if there's no value for the given key."]}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.has",children:"has(key)"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Checks whether the given key is present."}),"\n"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/next/reference/config.configreader.keys",children:"keys()"})}),"\n"]}),(0,t.jsx)(n.td,{children:"\n"}),(0,t.jsxs)(n.td,{children:["\n",(0,t.jsx)(n.p,{children:"Lists all available configuration keys."}),"\n"]})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},221020:(e,n,r)=>{var t=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,s={},l=null,h=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)c.call(n,t)&&!o.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:i,type:e,key:l,ref:h,props:s,_owner:d.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var t=r(296540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);