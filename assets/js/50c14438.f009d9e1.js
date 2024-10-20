/*! For license information please see 50c14438.f009d9e1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[870457],{731381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=n(474848),o=n(28453);const i={id:"migrating-to-rjsf-v5",title:"Migrating to react-jsonschema-form@v5",description:"Docs on migrating to `react-jsonschema-form`@v5 and the new designs"},a=void 0,r={id:"features/software-templates/migrating-to-rjsf-v5",title:"Migrating to react-jsonschema-form@v5",description:"Docs on migrating to `react-jsonschema-form`@v5 and the new designs",source:"@site/../docs/features/software-templates/migrating-to-rjsf-v5.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/migrating-to-rjsf-v5",permalink:"/docs/next/features/software-templates/migrating-to-rjsf-v5",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-templates/migrating-to-rjsf-v5.md",tags:[],version:"current",frontMatter:{id:"migrating-to-rjsf-v5",title:"Migrating to react-jsonschema-form@v5",description:"Docs on migrating to `react-jsonschema-form`@v5 and the new designs"},sidebar:"docs",previous:{title:"Authorizing scaffolder tasks, parameters, steps, and actions",permalink:"/docs/next/features/software-templates/authorizing-scaffolder-template-details"},next:{title:"Migrating to v1beta3 templates",permalink:"/docs/next/features/software-templates/migrating-from-v1beta2-to-v1beta3"}},l={},h=[{value:"What&#39;s <code>react-jsonschema-form</code>?",id:"whats-react-jsonschema-form",level:2},{value:"What&#39;s new?",id:"whats-new",level:2},{value:"How do I upgrade",id:"how-do-i-upgrade",level:2},{value:"Escape hatch",id:"escape-hatch",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Note",type:"note",children:(0,s.jsxs)(t.p,{children:["If you were previously using the ",(0,s.jsx)(t.code,{children:"/alpha"})," imports to test out the ",(0,s.jsx)(t.code,{children:"scaffolder/next"})," work, those imports have been promoted to the default exports from the respective packages. You should just have to remove the ",(0,s.jsx)(t.code,{children:"/alpha"})," from the import path, and remove the ",(0,s.jsx)(t.code,{children:"Next"})," from the import name. ",(0,s.jsx)(t.code,{children:"NextScaffolderPage"})," -> ",(0,s.jsx)(t.code,{children:"ScaffolderPage"}),", ",(0,s.jsx)(t.code,{children:"createNextScaffolderFieldExtension"})," -> ",(0,s.jsx)(t.code,{children:"createScaffolderFieldExtension"})," etc."]})}),"\n",(0,s.jsxs)(t.h2,{id:"whats-react-jsonschema-form",children:["What's ",(0,s.jsx)(t.code,{children:"react-jsonschema-form"}),"?"]}),"\n",(0,s.jsxs)(t.p,{children:["This library is core to the frontend part of the scaffolder plugin, and is responsible for rendering the form in which developers and end users fill out to meet the ",(0,s.jsx)(t.code,{children:"jsonschema"})," requirement for the parameters section."]}),"\n",(0,s.jsxs)(t.p,{children:["Since the initial release of the ",(0,s.jsx)(t.code,{children:"scaffolder"})," plugin, we we're on a pretty old version of ",(0,s.jsx)(t.code,{children:"react-jsonschema-form"})," (v3), which has been pretty outdated as of late. The problem with us just bumping this library was that there are several breaking changes with the new v5 version, which we've tried pretty aggressively not to pass on to our end users for their templates and ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/writing-custom-field-extensions/",children:"Custom Field Extensions"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["We're hoping that by duplicating the types from version 3 of ",(0,s.jsx)(t.code,{children:"react-jsonschema-form"})," and making these the types that we will support even though the underlying library is v5, it should get us through all of the breaking changes without passing that down."]}),"\n",(0,s.jsx)(t.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,s.jsxs)(t.p,{children:["With that in mind, this release has ",(0,s.jsx)(t.code,{children:"v5"})," of ",(0,s.jsx)(t.code,{children:"react-jsonschema-form"}),", and with that comes all the new features and bugfixes in ",(0,s.jsx)(t.code,{children:"v4"})," that we were waiting for - one of the main ones being the ability to use ",(0,s.jsx)(t.code,{children:"if / then / else"})," syntax in the ",(0,s.jsx)(t.code,{children:"template.yaml"})," definitions! \ud83c\udf89"]}),"\n",(0,s.jsxs)(t.p,{children:["We've also rebuilt how validation works in the ",(0,s.jsx)(t.code,{children:"scaffolder"})," components, which now means that we've opened the ability to have ",(0,s.jsx)(t.code,{children:"async"})," validation functions in your ",(0,s.jsx)(t.code,{children:"Field Extensions"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Some of the pages have gotten a little bit of an overhaul in terms of UI based on some research and feedback from the community and internally."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"TemplateList"})," page has gotten some new ",(0,s.jsx)(t.code,{children:"Card"})," components which show a little more information than the previous version with a little ",(0,s.jsx)(t.code,{children:"material-ui"})," standards."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"WizardPage"})," has received some new updates with the stepper now running horizontally, and the ",(0,s.jsx)(t.code,{children:"Review"})," step being a dedicated step in the stepper."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"OngoingTask"})," page now does not show the logs by default, and instead has a much cleaner interface for tracking the ongoing steps and the pipeline of actions that are currently showing.\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You can also now provide your own ",(0,s.jsx)(t.code,{children:"OutputsComponent"})," which can be used to render the outputs from an ongoing / completed task in a way that suits your templates the best. For instance, if your template produces ",(0,s.jsx)(t.code,{children:"Pull Requests"}),", it could be useful to render these in an interactive way where you can see the statuses of each of these ",(0,s.jsx)(t.code,{children:"Pull Requests"})," in the ",(0,s.jsx)(t.code,{children:"Ongoing Task"})," page."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There's also a lot of bug fixes, and other things, but these are the main ones that we wanted to highlight."}),"\n",(0,s.jsx)(t.h2,{id:"how-do-i-upgrade",children:"How do I upgrade"}),"\n",(0,s.jsxs)(t.p,{children:["With the release of ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/releases/tag/v1.20.0",children:(0,s.jsx)(t.code,{children:"v1.20.0"})})," these changes should have been made for you. We're hoping that it should be pretty transparent, and things just work as expected. Please reach out to us on ",(0,s.jsx)(t.a,{href:"https://discord.com/invite/MUpMjP2",children:"discord"})," or in a ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?assignees=&labels=bug&projects=&template=bug.yaml&title=%F0%9F%90%9B+Bug+Report%3A+%3Ctitle%3E",children:"issue"})," if you're having issues."]}),"\n",(0,s.jsxs)(t.p,{children:["It's possible that if you have a hard dependency on any of the ",(0,s.jsx)(t.code,{children:"@rjsf/*"})," libraries in your app, you'll need to bump these manually to the version that we currently support: ",(0,s.jsx)(t.code,{children:"5.13.6"})," at the time of writing. There could be breaking changes that you will have to fix here however, which we think should be pretty simple, but they're things like changing imports from ",(0,s.jsx)(t.code,{children:"@rjsf/core"})," to ",(0,s.jsx)(t.code,{children:"@rjsf/utils"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"/* highlight-remove-next-line */\nimport { FieldValidation } from '@rjsf/core';\n/* highlight-add-next-line */\nimport { FieldValidation } from '@rjsf/utils';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"escape-hatch",children:"Escape hatch"}),"\n",(0,s.jsxs)(t.p,{children:["If for some reason the upgrade to ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/releases/tag/v1.20.0",children:(0,s.jsx)(t.code,{children:"v1.20.0"})})," didn't go as planned, there's an escape hatch for use until the next mainline release in which we will try to get any issues fixed before removing the legacy code."]}),"\n",(0,s.jsxs)(t.p,{children:["We've moved some of the older exports to an ",(0,s.jsx)(t.code,{children:"/alpha"})," export so you should be able switch to using the old library just in case."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"/* highlight-remove-next-line */\nimport { ScaffolderPage } from '@backstage/plugin-scaffolder';\n/* highlight-add-next-line */\nimport { LegacyScaffolderPage } from '@backstage/plugin-scaffolder/alpha';\n"})}),"\n",(0,s.jsx)(t.p,{children:"And this API should be the exact same as the previous Router, so you should be able to make a change like the following further down in this file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"<Route\n  path=\"/create\"\n  element={\n    {/* highlight-remove-next-line */}\n    <ScaffolderPage\n    {/* highlight-add-next-line */}\n    <LegacyScaffolderPage\n      groups={[\n        {\n          title: 'Recommended',\n          filter: entity =>\n            entity?.metadata?.tags?.includes('recommended') ?? false,\n        },\n      ]}\n    />\n  }\n>\n  <ScaffolderFieldExtensions>\n    <LowerCaseValuePickerFieldExtension />\n    {/* ... other extensions */}\n  </ScaffolderFieldExtensions>\n  <ScaffolderLayouts>\n    <TwoColumnLayout />\n    {/* ... other layouts */}\n  </ScaffolderLayouts>\n</Route>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["And you can also update any of your ",(0,s.jsx)(t.code,{children:"CustomFieldExtensions"})," to use the old helper like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"/* highlight-remove-next-line */\nimport { createScaffolderFieldExtension } from '@backstage/plugin-scaffolder';\n/* highlight-add-next-line */\nimport { createLegacyScaffolderFieldExtension } from '@backstage/plugin-scaffolder-react/alpha';\n\nexport const EntityNamePickerFieldExtension = scaffolderPlugin.provide(\n  /* highlight-remove-next-line */\n  createScaffolderFieldExtension({\n  /* highlight-add-next-line */\n  createLegacyScaffolderFieldExtension({\n    component: EntityNamePicker,\n    name: 'EntityNamePicker',\n    validation: entityNamePickerValidation,\n  }),\n);\n"})}),"\n",(0,s.jsx)(t.p,{children:"And in the component themselves, you might have to do the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"/* highlight-remove-next-line */\nimport { FieldExtensionComponentProps } from '@backstage/plugin-scaffolder-react';\n/* highlight-add-next-line */\nimport { LegacyFieldExtensionComponentProps } from '@backstage/plugin-scaffolder-react/alpha';\n\nexport const EntityNamePicker = (\n  /* highlight-remove-next-line */\n  props: FieldExtensionComponentProps<string, EntityNamePickerProps>,\n  /* highlight-add-next-line */\n  props: LegacyFieldExtensionComponentProps<string, EntityNamePickerProps>,\n) => {\n  const {\n    onChange,\n    required,\n    schema: { title = 'Name', description = 'Unique name of the component' },\n    rawErrors,\n    formData,\n    idSchema,\n    placeholder,\n  } = props;\n  // ..\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var s=n(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,n){var s,i={},h=null,c=null;for(s in void 0!==n&&(h=""+n),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,s)&&!l.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:o,type:e,key:h,ref:c,props:i,_owner:r.current}}t.Fragment=i,t.jsx=h,t.jsxs=h},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(296540);const o={},i=s.createContext(o);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);