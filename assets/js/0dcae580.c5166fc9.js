/*! For license information please see 0dcae580.c5166fc9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[348397],{801916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(474848),c=n(28453);const o={id:"plugin-scaffolder-backend.createtemplateaction",title:"createTemplateAction()",description:"API reference for createTemplateAction()"},a=void 0,s={id:"reference/plugin-scaffolder-backend.createtemplateaction",title:"createTemplateAction()",description:"API reference for createTemplateAction()",source:"@site/versioned_docs/version-stable/reference/plugin-scaffolder-backend.createtemplateaction.md",sourceDirName:"reference",slug:"/reference/plugin-scaffolder-backend.createtemplateaction",permalink:"/docs/reference/plugin-scaffolder-backend.createtemplateaction",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-scaffolder-backend.createtemplateaction.md",tags:[],version:"stable",frontMatter:{id:"plugin-scaffolder-backend.createtemplateaction",title:"createTemplateAction()",description:"API reference for createTemplateAction()"}},i={},d=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-backend"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-backend.createtemplateaction",children:(0,r.jsx)(t.code,{children:"createTemplateAction"})})]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"createTemplateAction"})," from ",(0,r.jsx)(t.code,{children:"@backstage/plugin-scaffolder-node"})," instead"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'createTemplateAction: <TInputParams extends JsonObject = JsonObject, TOutputParams extends JsonObject = JsonObject, TInputSchema extends import("zod").ZodType<any, import("zod").ZodTypeDef, any> | import("jsonschema").Schema = {}, TOutputSchema extends import("zod").ZodType<any, import("zod").ZodTypeDef, any> | import("jsonschema").Schema = {}, TActionInput extends JsonObject = TInputSchema extends import("zod").ZodType<any, any, infer IReturn> ? IReturn : TInputParams, TActionOutput extends JsonObject = TOutputSchema extends import("zod").ZodType<any, any, infer IReturn_1> ? IReturn_1 : TOutputParams>(action: import("@backstage/plugin-scaffolder-node").TemplateActionOptions<TActionInput, TActionOutput, TInputSchema, TOutputSchema>) => TemplateActionNode<TActionInput, TActionOutput>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"action"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsxs)(t.p,{children:['import("@backstage/plugin-scaffolder-node").',(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateactionoptions",children:"TemplateActionOptions"}),"<TActionInput, TActionOutput, TInputSchema, TOutputSchema>"]}),"\n"]}),(0,r.jsx)(t.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/plugin-scaffolder-node.templateaction",children:"TemplateActionNode"}),"<TActionInput, TActionOutput>"]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var r=n(296540),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,o={},d=null,l=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:c,type:e,key:d,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(296540);const c={},o=r.createContext(c);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);