/*! For license information please see 9c40f4c8.626e6875.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[53568],{581044:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=o(474848),a=o(28453);const i={id:"migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries."},s=void 0,r={id:"tutorials/migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries.",source:"@site/versioned_docs/version-stable/tutorials/migrating-away-from-core.md",sourceDirName:"tutorials",slug:"/tutorials/migrating-away-from-core",permalink:"/docs/tutorials/migrating-away-from-core",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/tutorials/migrating-away-from-core.md",tags:[],version:"stable",frontMatter:{id:"migrating-away-from-core",title:"Migrating away from @backstage/core",description:"Guide on how to migrate to the new Backstage core libraries."},sidebar:"docs",previous:{title:"Package Role Migration",permalink:"/docs/tutorials/package-role-migration"},next:{title:"Configuring Plugin Databases",permalink:"/docs/tutorials/configuring-plugin-databases"}},c={},d=[{value:"Migration",id:"migration",level:2},{value:"Step 1 - Run codemod",id:"step-1---run-codemod",level:3},{value:"Step 2 - Update dependencies",id:"step-2---update-dependencies",level:3},{value:"Step 3 - Manual review",id:"step-3---manual-review",level:3},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Removed <code>IconKey</code> type",id:"removed-iconkey-type",level:3},{value:"Constrained <code>IconComponent</code> type",id:"constrained-iconcomponent-type",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"@backstage/core"})," package has been split into three separate packages,\n",(0,t.jsx)(n.code,{children:"@backstage/core-app-api"}),", ",(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"}),", and\n",(0,t.jsx)(n.code,{children:"@backstage/core-components"}),". For more information about the reasoning behind\nthis change and the naming of the packages, see the\n",(0,t.jsx)(n.a,{href:"https://github.com/backstage/backstage/issues/4872",children:"original RFC"})," and\n",(0,t.jsx)(n.a,{href:"https://github.com/backstage/backstage/pull/5825",children:"initial PR"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The main purpose of the split is to make plugins more decoupled from the app,\nand open up for the possibility of combining plugins using many different\nversions of the core libraries. This should significantly reduce the maintenance\nburden on plugin authors, as well as reduce the impact of breaking changes in\nthe core APIs."}),"\n",(0,t.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,t.jsxs)(n.p,{children:["At a high level the migration is done by simply replacing usages of\n",(0,t.jsx)(n.code,{children:"@backstage/core"})," with one or more of the three new core libraries. There are a\nfew breaking changes in the new packages that are listed below, but for most\nplugins the migration is a simple replacement. In order to make the migration as\nsmooth as possible we provide a collection of tools to automate the majority of\nthe migration effort."]}),"\n",(0,t.jsx)(n.p,{children:"Below is a list of steps that should get most projects completely migrated, the\norder of the steps is a recommendation but not required, so don't worry if you\nneed to go back to previous steps to fix things."}),"\n",(0,t.jsx)(n.h3,{id:"step-1---run-codemod",children:"Step 1 - Run codemod"}),"\n",(0,t.jsxs)(n.p,{children:["The first step is to run\n",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/@backstage/codemods",children:(0,t.jsx)(n.code,{children:"@backstage/codemods"})}),"\nacross your project. This will automatically convert all module imports in your\nsource code to use one of the three new core packages instead. For example, the\nfollowing change might occur:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"/* highlight-remove-next-line */\nimport { useApi, configApiRef, InfoCard } from '@backstage/core';\n/* highlight-add-start */\nimport { useApi, configApiRef } from '@backstage/core-plugin-api';\nimport { InfoCard } from '@backstage/core-components';\n/* highlight-add-end */\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In a typical app created with ",(0,t.jsx)(n.code,{children:"@backstage/create-app"}),", you would run the\nfollowing:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"npx @backstage/codemods apply core-imports packages plugins\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The last two arguments, ",(0,t.jsx)(n.code,{children:"packages"})," and ",(0,t.jsx)(n.code,{children:"plugins"}),", are the folders that the\ncodemod should be applied to. Add or remove folders as needed for your project."]}),"\n",(0,t.jsxs)(n.p,{children:["The codemod might fail for some files because of the missing ",(0,t.jsx)(n.code,{children:"IconKey"})," type in\nany of the new packages. This is one of the few breaking changes. To fix, remove\nany ",(0,t.jsx)(n.code,{children:"IconKey"})," imports and replace usages of it with the ",(0,t.jsx)(n.code,{children:"string"})," type, see the\nbreaking changes section below for details. Once usages of ",(0,t.jsx)(n.code,{children:"IconKey"})," type have\nbeen removed, you can re-run the codemod for those files."]}),"\n",(0,t.jsxs)(n.p,{children:["Note that while the codemod tries to stick to using the existing formatting in\nyour project, it doesn't always manage to do that. If you're using ",(0,t.jsx)(n.code,{children:"prettier"})," to\nformat the code in your project, it's best to run ",(0,t.jsx)(n.code,{children:"prettier --write"})," on any\nfiles that were changed by the codemod."]}),"\n",(0,t.jsx)(n.h3,{id:"step-2---update-dependencies",children:"Step 2 - Update dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["The next step is to update dependencies in your ",(0,t.jsx)(n.code,{children:"package.json"})," files. Any\npackage that currently depends on ",(0,t.jsx)(n.code,{children:"@backstage/core"})," will need to have it\nreplaced by one or more of the new packages. The app package should have all\nthree packages added to ",(0,t.jsx)(n.code,{children:"dependencies"}),", while for plugins and additional non-app\npackages, the ",(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"})," and ",(0,t.jsx)(n.code,{children:"@backstage/core-components"}),"\npackages should be added to the set of regular ",(0,t.jsx)(n.code,{children:"dependencies"}),", and\n",(0,t.jsx)(n.code,{children:"@backstage/core-app-api"})," should be added to ",(0,t.jsx)(n.code,{children:"devDependencies"})," for usage in\ntests."]}),"\n",(0,t.jsxs)(n.p,{children:["A tool that can help out with step is the ",(0,t.jsx)(n.code,{children:"plugin:diff"})," command from the\n",(0,t.jsx)(n.code,{children:"@backstage/cli"}),", it will compare your plugin to the base plugin template and\nsuggest changes where the plugin deviates. A quick way to get this step done if\nyou have up-to-date project is to run the following in the project root:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# The --yes flag causes all suggested changes to be accepted automatically\nyarn diff --yes\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you do not have the ",(0,t.jsx)(n.code,{children:"diff"})," command set up in ",(0,t.jsx)(n.code,{children:"package.json"}),", you can also\nmanually execute the following in each plugin folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn backstage-cli plugin:diff --yes\n"})}),"\n",(0,t.jsx)(n.h3,{id:"step-3---manual-review",children:"Step 3 - Manual review"}),"\n",(0,t.jsxs)(n.p,{children:["At this point your app is either completely or very close to being migrated. Run\ntype checks with ",(0,t.jsx)(n.code,{children:"yarn tsc"})," to check if you hit any of the breaking changes\nbelow or if there are any other things to fix. It can also be worthwhile\nsearching for occurrences of ",(0,t.jsx)(n.code,{children:"@backstage/core"})," in the codebase, as that might\nfind usages in for example ",(0,t.jsx)(n.code,{children:"jest"})," mock calls, which aren't handled by the\ncodemod."]}),"\n",(0,t.jsx)(n.p,{children:"As a final step you'll want to boot up the app and take it through any regular\nverification step that you have set up for your project. Don't hesitate to open\na GitHub issue, PR, or reach out on Discord if you hit any snags, or if there\nare any additional steps or hints that you think should be added to this guide!"}),"\n",(0,t.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,t.jsxs)(n.p,{children:["The following is a list of breaking changes between ",(0,t.jsx)(n.code,{children:"@backstage/core"})," and the\nthree new core packages. Not that this list may not be exhaustive depending on\nwhen you migrate your app, as new releases of the new core packages may bring\nfurther changes."]}),"\n",(0,t.jsxs)(n.h3,{id:"removed-iconkey-type",children:["Removed ",(0,t.jsx)(n.code,{children:"IconKey"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IconKey"})," type used to be a string union of all known keys used for the app\nicons available through ",(0,t.jsx)(n.code,{children:"useApp().getSystemIcon(key)"}),". The type has been removed\nsince the set of allowed icon keys is no longer constrained, and there is\ninstead only a guarantee that the app provides a minimum set of icons, but can\nprovide any icons it wants beyond that. Migration is done by simply replacing\nold usages by the ",(0,t.jsx)(n.code,{children:"string"})," type."]}),"\n",(0,t.jsxs)(n.h3,{id:"constrained-iconcomponent-type",children:["Constrained ",(0,t.jsx)(n.code,{children:"IconComponent"})," type"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"IconComponent"})," type used to allow all of the props from the Material UI ",(0,t.jsx)(n.code,{children:"SvgIcon"}),".\nThis encouraged some bad patterns in open source plugins such as applying colors\nto the icons, which in turn hurt the ability to replace the icons with custom\nones. The ",(0,t.jsx)(n.code,{children:"IconComponent"})," type, which is now exported from\n",(0,t.jsx)(n.code,{children:"@backstage/core-plugin-api"}),", now only accepts a ",(0,t.jsx)(n.code,{children:"fontSize"})," prop used to set the\nsize of the icon. The type is compatible with the Material UI ",(0,t.jsx)(n.code,{children:"SvgIcon"}),", but there may\nbe situations where an icon needs an explicit cast to ",(0,t.jsx)(n.code,{children:"IconComponent"})," in order\nto narrow the type."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,o)=>{var t=o(296540),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,o){var t,i={},d=null,l=null;for(t in void 0!==o&&(d=""+o),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,t)&&!c.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:a,type:e,key:d,ref:l,props:i,_owner:r.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(296540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);