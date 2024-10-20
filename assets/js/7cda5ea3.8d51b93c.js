/*! For license information please see 7cda5ea3.8d51b93c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[280782],{497602:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(474848),o=i(28453);const s={id:"defining",title:"Defining Configuration for your Plugin",description:"Documentation on Defining Configuration for your Plugin"},a=void 0,r={id:"conf/defining",title:"Defining Configuration for your Plugin",description:"Documentation on Defining Configuration for your Plugin",source:"@site/../docs/conf/defining.md",sourceDirName:"conf",slug:"/conf/defining",permalink:"/docs/next/conf/defining",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/conf/defining.md",tags:[],version:"current",frontMatter:{id:"defining",title:"Defining Configuration for your Plugin",description:"Documentation on Defining Configuration for your Plugin"},sidebar:"docs",previous:{title:"Writing Backstage Configuration Files",permalink:"/docs/next/conf/writing"},next:{title:"Getting Started",permalink:"/docs/next/notifications/"}},c={},d=[{value:"Schema Collection and Definition",id:"schema-collection-and-definition",level:2},{value:"Visibility",id:"visibility",level:2},{value:"Validation",id:"validation",level:2},{value:"Guidelines",id:"guidelines",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Configuration in Backstage is organized via a configuration schema, which in\nturn is defined using a superset of\n",(0,t.jsx)(n.a,{href:"https://json-schema.org/specification-links.html#draft-7",children:"JSON Schema Draft-07"}),".\nEach plugin or package within a Backstage app can contribute to the schema,\nwhich during validation is stitched together into a single schema."]}),"\n",(0,t.jsx)(n.h2,{id:"schema-collection-and-definition",children:"Schema Collection and Definition"}),"\n",(0,t.jsxs)(n.p,{children:['Schemas are collected from all packages and dependencies in each repo that are a\npart of the Backstage ecosystem, including the root package and transitive\ndependencies. The current definition of "part of the ecosystem" is that a\npackage has at least one dependency in the ',(0,t.jsx)(n.code,{children:"@backstage"})," namespace or a\n",(0,t.jsx)(n.code,{children:'"configSchema"'})," field in ",(0,t.jsx)(n.code,{children:"package.json"}),", but this is subject to change."]}),"\n",(0,t.jsxs)(n.p,{children:["Each package is searched for a schema at a single point of entry, a top-level\n",(0,t.jsx)(n.code,{children:'"configSchema"'})," field in ",(0,t.jsx)(n.code,{children:"package.json"}),". The field can either contain an\ninlined JSON schema, or a relative path to a schema file. Supported schema file\nformats are ",(0,t.jsx)(n.code,{children:".json"})," or ",(0,t.jsx)(n.code,{children:".d.ts"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsonc",metastring:'title="package.json"',children:'{\n  // ...\n  "files": [\n    // ...\n    "config.d.ts"\n  ],\n  "configSchema": "config.d.ts"\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["When defining a schema file, be sure to include the file in your\n",(0,t.jsx)(n.code,{children:"package.json"})," > ",(0,t.jsx)(n.code,{children:'"files"'})," field as well!"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["TypeScript configuration schema files should export a single ",(0,t.jsx)(n.code,{children:"Config"})," type, for\nexample:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface Config {\n  app: {\n    /**\n     * Frontend root URL\n     * @visibility frontend\n     */\n    baseUrl: string;\n\n    // Use @items.<name> to assign annotations to primitive array items\n    /** @items.visibility frontend */\n    myItems: string[];\n  };\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Separate ",(0,t.jsx)(n.code,{children:".json"})," schema files can use a top-level\n",(0,t.jsx)(n.code,{children:'"$schema": "https://backstage.io/schema/config-v1"'})," declaration in order to\nreceive schema validation and autocompletion. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "https://backstage.io/schema/config-v1",\n  "type": "object",\n  "properties": {\n    "app": {\n      "type": "object",\n      "properties": {\n        "baseUrl": {\n          "type": "string",\n          "description": "Frontend root URL",\n          "visibility": "frontend"\n        }\n      },\n      "required": ["baseUrl"]\n    },\n    "required": ["app"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"visibility",children:"Visibility"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"https://backstage.io/schema/config-v1"})," meta schema is a superset of JSON\nSchema Draft 07. The only additions are the custom ",(0,t.jsx)(n.code,{children:"visibility"})," and\n",(0,t.jsx)(n.code,{children:"deepVisibility"})," keywords, which are used to indicate whether the given config\nvalue should be visible in the frontend or not. The ",(0,t.jsx)(n.code,{children:"visibility"})," marker applies\nonly to the field it's on, while the ",(0,t.jsx)(n.code,{children:"deepVisibility"})," marker applies to the\nfield it's on and downwards in the hierarchy as well. The possible values are\n",(0,t.jsx)(n.code,{children:"frontend"}),", ",(0,t.jsx)(n.code,{children:"backend"}),", and ",(0,t.jsx)(n.code,{children:"secret"}),", where ",(0,t.jsx)(n.code,{children:"backend"})," is the default. A\nvisibility of ",(0,t.jsx)(n.code,{children:"secret"})," has the same scope at runtime, but it will be treated\nwith more care in certain contexts, and defining both ",(0,t.jsx)(n.code,{children:"frontend"})," and ",(0,t.jsx)(n.code,{children:"secret"}),"\nfor the same value in two different schemas will result in an error during\nschema merging."]}),"\n",(0,t.jsxs)(n.p,{children:["The visibility only applies to the direct parent of where the keyword is placed\nin the schema. For example, if you set the visibility to ",(0,t.jsx)(n.code,{children:"frontend"})," for a subset\nof the schema with ",(0,t.jsx)(n.code,{children:'type: "object"'}),", but none of the descendants, only an empty\nobject will be available in the frontend. The full ancestry does not need to\nhave correctly defined visibilities however, so it is enough to only for example\ndeclare the visibility of a leaf node of ",(0,t.jsx)(n.code,{children:'type: "string"'}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"visibility"})}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"frontend"})}),(0,t.jsx)(n.td,{children:"Visible in frontend and backend"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"backend"})}),(0,t.jsx)(n.td,{children:"(Default) Only in backend"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"secret"})}),(0,t.jsx)(n.td,{children:"Only in backend and may be excluded from logs for security reasons"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["You can set visibility with a ",(0,t.jsx)(n.code,{children:"@visibility"})," or ",(0,t.jsx)(n.code,{children:"@deepVisibility"})," comment in the\n",(0,t.jsx)(n.code,{children:"Config"})," Typescript interface."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface Config {\n  app: {\n    /**\n     * Frontend root URL\n     * NOTE: Visibility applies to only this field\n     * @visibility frontend\n     */\n    baseUrl: string;\n\n    /**\n     * Some custom complex type\n     * NOTE: Visibility applies recursively downward\n     * This is particularly useful for complex types like durations\n     * @deepVisibility frontend\n     */\n    customSchedule: HumanDuration;\n  };\n\n  backend: {\n    /**\n     * Some custom credentials type\n     * NOTE: Visibility applies recursively downward, and this would NOT have\n     * been safe if the regular visibility keyword had been used\n     * @deepVisibility secret\n     */\n    customCredentials: {\n      password: string;\n    };\n  };\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsxs)(n.p,{children:["Schemas can be validated using the ",(0,t.jsx)(n.code,{children:"backstage-cli config:check"})," command. If you\nwant to validate anything else than the default ",(0,t.jsx)(n.code,{children:"app-config.yaml"}),", be sure to\npass in all of the configuration files as ",(0,t.jsx)(n.code,{children:"--config <path>"})," options as well."]}),"\n",(0,t.jsxs)(n.p,{children:["To validate and examine the frontend configuration, use the\n",(0,t.jsx)(n.code,{children:"backstage-cli config:print --frontend"})," command. Just like for validation you\nmay need to pass in all files using one or multiple ",(0,t.jsx)(n.code,{children:"--config <path>"})," options."]}),"\n",(0,t.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Make limited use of static configuration. The first question to ask is whether\na particular option actually needs to be static configuration, or if it might\njust as well be a TypeScript API. In general, options that you want to be able\nto change for different deployment environments should be static\nconfiguration, while it should otherwise be avoided."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When defining configuration for your plugin, keep keys on ",(0,t.jsx)(n.code,{children:"camelCase"})," form and stick to\nexisting casing conventions such as ",(0,t.jsx)(n.code,{children:"baseUrl"})," rather than ",(0,t.jsx)(n.code,{children:"baseURL"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"It is also usually best to prefer objects over arrays, as it makes it possible\nto override individual values using separate files or environment variables."}),"\n",(0,t.jsx)(n.p,{children:"Avoid creating new top-level fields as much as possible. Either place your\nconfiguration within an existing known top-level block, or create a single new\none using e.g. the name of the product that the plugin integrates."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,i)=>{var t=i(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var t,s={},d=null,l=null;for(t in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:r.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,i)=>{e.exports=i(221020)},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(296540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);