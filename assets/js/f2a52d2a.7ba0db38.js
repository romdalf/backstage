/*! For license information please see f2a52d2a.7ba0db38.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[741776],{935035:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(474848),r=t(28453);const o={id:"frontend-plugin-api.extensionblueprint.makewithoverrides",title:"ExtensionBlueprint.makeWithOverrides()",description:"API reference for ExtensionBlueprint.makeWithOverrides()"},s=void 0,a={id:"reference/frontend-plugin-api.extensionblueprint.makewithoverrides",title:"ExtensionBlueprint.makeWithOverrides()",description:"API reference for ExtensionBlueprint.makeWithOverrides()",source:"@site/../docs/reference/frontend-plugin-api.extensionblueprint.makewithoverrides.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.extensionblueprint.makewithoverrides",permalink:"/docs/next/reference/frontend-plugin-api.extensionblueprint.makewithoverrides",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/frontend-plugin-api.extensionblueprint.makewithoverrides.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.extensionblueprint.makewithoverrides",title:"ExtensionBlueprint.makeWithOverrides()",description:"API reference for ExtensionBlueprint.makeWithOverrides()"}},p={},d=[{value:"Parameters",id:"parameters",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api",children:(0,i.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.extensionblueprint",children:(0,i.jsx)(n.code,{children:"ExtensionBlueprint"})})," > ",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.extensionblueprint.makewithoverrides",children:(0,i.jsx)(n.code,{children:"makeWithOverrides"})})]}),"\n",(0,i.jsx)(n.p,{children:"Creates a new extension from the blueprint."}),"\n",(0,i.jsxs)(n.p,{children:["You must either pass ",(0,i.jsx)(n.code,{children:"params"})," directly, or define a ",(0,i.jsx)(n.code,{children:"factory"})," that can optionally call the original factory with the same params."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"makeWithOverrides<TNewName extends string | undefined, TExtensionConfigSchema extends {\n        [key in string]: (zImpl: typeof z) => z.ZodType;\n    }, UFactoryOutput extends ExtensionDataValue<any, any>, UNewOutput extends AnyExtensionDataRef, TExtraInputs extends {\n        [inputName in string]: ExtensionInput<AnyExtensionDataRef, {\n            optional: boolean;\n            singleton: boolean;\n        }>;\n    }>(args: {\n        name?: TNewName;\n        attachTo?: {\n            id: string;\n            input: string;\n        };\n        disabled?: boolean;\n        inputs?: TExtraInputs & {\n            [KName in keyof T['inputs']]?: `Error: Input '${KName & string}' is already defined in parent definition`;\n        };\n        output?: Array<UNewOutput>;\n        config?: {\n            schema: TExtensionConfigSchema & {\n                [KName in keyof T['config']]?: `Error: Config key '${KName & string}' is already defined in parent schema`;\n            };\n        };\n        factory(originalFactory: (params: T['params'], context?: {\n            config?: T['config'];\n            inputs?: ResolveInputValueOverrides<NonNullable<T['inputs']>>;\n        }) => ExtensionDataContainer<NonNullable<T['output']>>, context: {\n            node: AppNode;\n            apis: ApiHolder;\n            config: T['config'] & {\n                [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n            };\n            inputs: Expand<ResolvedExtensionInputs<T['inputs'] & TExtraInputs>>;\n        }): Iterable<UFactoryOutput> & VerifyExtensionFactoryOutput<AnyExtensionDataRef extends UNewOutput ? NonNullable<T['output']> : UNewOutput, UFactoryOutput>;\n    }): ExtensionDefinition<{\n        config: (string extends keyof TExtensionConfigSchema ? {} : {\n            [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>;\n        }) & T['config'];\n        configInput: (string extends keyof TExtensionConfigSchema ? {} : z.input<z.ZodObject<{\n            [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>;\n        }>>) & T['configInput'];\n        output: AnyExtensionDataRef extends UNewOutput ? T['output'] : UNewOutput;\n        inputs: T['inputs'] & TExtraInputs;\n        kind: T['kind'];\n        name: string | undefined extends TNewName ? T['name'] : TNewName;\n        params: T['params'];\n    }>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Parameter"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Type"}),"\n"]}),(0,i.jsxs)(n.th,{children:["\n",(0,i.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["\n",(0,i.jsx)(n.p,{children:"args"}),"\n"]}),(0,i.jsxs)(n.td,{children:["\n",(0,i.jsxs)(n.p,{children:["{ name?: TNewName; attachTo?: { id: string; input: string; }; disabled?: boolean; inputs?: TExtraInputs & { [KName in keyof T['inputs']]?: `Error: Input '${KName & string}' is already defined in parent definition`; }; output?: Array<UNewOutput>; config?: { schema: TExtensionConfigSchema & { [KName in keyof T['config']]?: `Error: Config key '${KName & string}' is already defined in parent schema`; }; }; factory(originalFactory: (params: T['params'], context?: { config?: T['config']; inputs?: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.resolveinputvalueoverrides",children:"ResolveInputValueOverrides"}),"<NonNullable<T['inputs']>>; }) => ",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.extensiondatacontainer",children:"ExtensionDataContainer"}),"<NonNullable<T['output']>>, context: { node: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.appnode",children:"AppNode"}),"; apis: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/core-plugin-api.apiholder",children:"ApiHolder"}),"; config: T['config'] & { [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; }; inputs: Expand<",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.resolvedextensioninputs",children:"ResolvedExtensionInputs"}),"<T['inputs'] & TExtraInputs>>; }): Iterable<UFactoryOutput> & VerifyExtensionFactoryOutput<",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"})," extends UNewOutput ? NonNullable<T['output']> : UNewOutput, UFactoryOutput>; }"]}),"\n"]}),(0,i.jsx)(n.td,{children:"\n"})]})})]}),"\n**Returns:**\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.extensiondefinition",children:"ExtensionDefinition"}),"<{ config: (string extends keyof TExtensionConfigSchema ? {} : { [key in keyof TExtensionConfigSchema]: z.infer<ReturnType<TExtensionConfigSchema[key]>>; }) & T['config']; configInput: (string extends keyof TExtensionConfigSchema ? {} : z.input<z.ZodObject<{ [key in keyof TExtensionConfigSchema]: ReturnType<TExtensionConfigSchema[key]>; }>>) & T['configInput']; output: ",(0,i.jsx)(n.a,{href:"/docs/next/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"})," extends UNewOutput ? T['output'] : UNewOutput; inputs: T['inputs'] & TExtraInputs; kind: T['kind']; name: string | undefined extends TNewName ? T['name'] : TNewName; params: T['params']; }>"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var i=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var i,o={},d=null,c=null;for(i in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,i)&&!p.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:d,ref:c,props:o,_owner:a.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(296540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);