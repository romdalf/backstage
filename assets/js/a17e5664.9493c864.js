/*! For license information please see a17e5664.9493c864.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[759566],{798882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var o=n(474848),r=n(28453);const c={id:"plugin-scaffolder-node.templateactionoptions",title:"TemplateActionOptions",description:"API reference for TemplateActionOptions"},s=void 0,i={id:"reference/plugin-scaffolder-node.templateactionoptions",title:"TemplateActionOptions",description:"API reference for TemplateActionOptions",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-node.templateactionoptions.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-node.templateactionoptions",permalink:"/docs/reference/plugin-scaffolder-node.templateactionoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-node.templateactionoptions.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-node.templateactionoptions",title:"TemplateActionOptions",description:"API reference for TemplateActionOptions"}},a={},p=[];function l(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-scaffolder-node"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateactionoptions",children:(0,o.jsx)(t.code,{children:"TemplateActionOptions"})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"export type TemplateActionOptions<TActionInput extends JsonObject = {}, TActionOutput extends JsonObject = {}, TInputSchema extends Schema | z.ZodType = {}, TOutputSchema extends Schema | z.ZodType = {}> = {\n    id: string;\n    description?: string;\n    examples?: TemplateExample[];\n    supportsDryRun?: boolean;\n    schema?: {\n        input?: TInputSchema;\n        output?: TOutputSchema;\n    };\n    handler: (ctx: ActionContext<TActionInput, TActionOutput>) => Promise<void>;\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"References:"})," ",(0,o.jsx)(t.a,{href:"/docs/reference/types.jsonobject",children:"JsonObject"}),", ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateexample",children:"TemplateExample"}),", ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.actioncontext",children:"ActionContext"})]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var o,c={},p=null,l=null;for(o in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,o)&&!a.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:r,type:e,key:p,ref:l,props:c,_owner:i.current}}t.Fragment=c,t.jsx=p,t.jsxs=p},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(296540);const r={},c=o.createContext(r);function s(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);