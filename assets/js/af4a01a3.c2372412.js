/*! For license information please see af4a01a3.c2372412.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[985706],{15497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(474848),i=t(28453);const s={id:"frontend-plugin-api.extensionblueprint.make",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()"},o=void 0,a={id:"reference/frontend-plugin-api.extensionblueprint.make",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()",source:"@site/versioned_docs/version-stable/reference/frontend-plugin-api.extensionblueprint.make.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensionblueprint.make",permalink:"/docs/reference/frontend-plugin-api.extensionblueprint.make",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-plugin-api.extensionblueprint.make.md",tags:[],version:"stable",frontMatter:{id:"frontend-plugin-api.extensionblueprint.make",title:"ExtensionBlueprint.make()",description:"API reference for ExtensionBlueprint.make()"}},c={},d=[{value:"Parameters",id:"parameters",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint",children:(0,r.jsx)(n.code,{children:"ExtensionBlueprint"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensionblueprint.make",children:(0,r.jsx)(n.code,{children:"make"})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"make<TNewName extends string | undefined>(args: {\n        name?: TNewName;\n        attachTo?: {\n            id: string;\n            input: string;\n        };\n        disabled?: boolean;\n        params: T['params'];\n    }): ExtensionDefinition<{\n        kind: T['kind'];\n        name: string | undefined extends TNewName ? T['name'] : TNewName;\n        config: T['config'];\n        configInput: T['configInput'];\n        output: T['output'];\n        inputs: T['inputs'];\n        params: T['params'];\n    }>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(n.th,{children:["\n",(0,r.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"args"}),"\n"]}),(0,r.jsxs)(n.td,{children:["\n",(0,r.jsx)(n.p,{children:"{ name?: TNewName; attachTo?: { id: string; input: string; }; disabled?: boolean; params: T['params']; }"}),"\n"]}),(0,r.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"}),"<{ kind: T['kind']; name: string | undefined extends TNewName ? T['name'] : TNewName; config: T['config']; configInput: T['configInput']; output: T['output']; inputs: T['inputs']; params: T['params']; }>"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,p=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(p=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:p,props:s,_owner:a.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(296540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);