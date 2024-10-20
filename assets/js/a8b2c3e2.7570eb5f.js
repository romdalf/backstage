/*! For license information please see a8b2c3e2.7570eb5f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[818691],{384868:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=t(474848),s=t(28453);const c={id:"keeping-backstage-updated",title:"Keeping Backstage Updated",description:"How to keep your Backstage App updated"},i=void 0,o={id:"getting-started/keeping-backstage-updated",title:"Keeping Backstage Updated",description:"How to keep your Backstage App updated",source:"@site/versioned_docs/version-stable/getting-started/keeping-backstage-updated.md",sourceDirName:"getting-started",slug:"/getting-started/keeping-backstage-updated",permalink:"/docs/getting-started/keeping-backstage-updated",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/getting-started/keeping-backstage-updated.md",tags:[],version:"stable",frontMatter:{id:"keeping-backstage-updated",title:"Keeping Backstage Updated",description:"How to keep your Backstage App updated"},sidebar:"docs",previous:{title:"Create a Component",permalink:"/docs/getting-started/create-a-component"},next:{title:"Key Concepts",permalink:"/docs/getting-started/concepts"}},r={},d=[{value:"Updating Backstage versions with backstage-cli",id:"updating-backstage-versions-with-backstage-cli",level:2},{value:"Following create-app template changes",id:"following-create-app-template-changes",level:2},{value:"More information on dependency mismatches",id:"more-information-on-dependency-mismatches",level:2},{value:"Proxy",id:"proxy",level:2},{value:"Example Configuration",id:"example-configuration",level:3}];function l(e){const a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Backstage is always improving, so it's a good idea to stay in sync with the\nlatest releases. Backstage is more of a library than an application or service;\nsimilar to ",(0,n.jsx)(a.code,{children:"create-react-app"}),", the ",(0,n.jsx)(a.code,{children:"@backstage/create-app"})," tool gives you a\nstarting point that's meant to be evolved."]}),"\n",(0,n.jsx)(a.h2,{id:"updating-backstage-versions-with-backstage-cli",children:"Updating Backstage versions with backstage-cli"}),"\n",(0,n.jsxs)(a.p,{children:["The Backstage CLI has a command to bump all ",(0,n.jsx)(a.code,{children:"@backstage"})," packages and\ndependencies you're using to the latest versions:\n",(0,n.jsx)(a.a,{href:"https://backstage.io/docs/tooling/cli/03-commands#versionsbump",children:"versions:bump"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn backstage-cli versions:bump\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The reason for bumping all ",(0,n.jsx)(a.code,{children:"@backstage"})," packages at once is to maintain the\ndependencies that they have between each other."]}),"\n",(0,n.jsxs)(a.p,{children:["By default the bump command will upgrade ",(0,n.jsx)(a.code,{children:"@backstage"})," packages to the latest ",(0,n.jsx)(a.code,{children:"main"})," release line which is released monthly. For those in a hurry that want to track the ",(0,n.jsx)(a.code,{children:"next"})," release line which releases weekly can do so using the ",(0,n.jsx)(a.code,{children:"--release next"})," option."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn backstage-cli versions:bump --release next\n"})}),"\n",(0,n.jsxs)(a.p,{children:["If you are using other plugins you can pass in the ",(0,n.jsx)(a.code,{children:"--pattern"})," option to update\nmore than just the ",(0,n.jsx)(a.code,{children:"@backstage/*"})," dependencies."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn backstage-cli versions:bump --pattern '@{backstage,roadiehq}/*'\n"})}),"\n",(0,n.jsx)(a.h2,{id:"following-create-app-template-changes",children:"Following create-app template changes"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"@backstage/create-app"})," command creates the initial structure of your\nBackstage installation from a ",(0,n.jsx)(a.strong,{children:"template"}),". The source of this template in the\nBackstage repository is updated periodically, but your local ",(0,n.jsx)(a.code,{children:"app"})," and ",(0,n.jsx)(a.code,{children:"backend"}),"\npackages are established at ",(0,n.jsx)(a.code,{children:"create-app"})," time and won't automatically get these\ntemplate updates."]}),"\n",(0,n.jsxs)(a.p,{children:["For this reason, any changes made to the template are documented along with\nupgrade instructions in the\n",(0,n.jsx)(a.a,{href:"https://github.com/backstage/backstage/blob/master/packages/create-app/CHANGELOG.md",children:"changelog"}),"\nof the ",(0,n.jsx)(a.code,{children:"@backstage/create-app"})," package. We recommend peeking at this changelog\nfor any applicable updates when upgrading packages. As an alternative, the\n",(0,n.jsx)(a.a,{href:"https://backstage.github.io/upgrade-helper/",children:"Backstage Upgrade Helper"})," provides\na consolidated view of all the changes between two versions of Backstage. You\ncan find the current version of your Backstage installation in ",(0,n.jsx)(a.code,{children:"backstage.json"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"more-information-on-dependency-mismatches",children:"More information on dependency mismatches"}),"\n",(0,n.jsxs)(a.p,{children:["Backstage is structured as a monorepo with\n",(0,n.jsx)(a.a,{href:"https://classic.yarnpkg.com/en/docs/workspaces/",children:"Yarn workspaces"}),". This means\nthe ",(0,n.jsx)(a.code,{children:"app"})," and ",(0,n.jsx)(a.code,{children:"backend"})," packages, as well as any custom plugins you've added,\nare separate packages with their own ",(0,n.jsx)(a.code,{children:"package.json"})," and dependencies."]}),"\n",(0,n.jsxs)(a.p,{children:["When a given dependency version is the ",(0,n.jsx)(a.em,{children:"same"})," between different packages, the\ndependency is hoisted to the main ",(0,n.jsx)(a.code,{children:"node_modules"})," folder in the monorepo root to\nbe shared between packages. When ",(0,n.jsx)(a.em,{children:"different"})," versions of the same dependency are\nencountered, Yarn creates a ",(0,n.jsx)(a.code,{children:"node_modules"})," folder within a particular package.\nThis can lead to multiple versions of the same package being installed and used\nin the same app."]}),"\n",(0,n.jsxs)(a.p,{children:["All Backstage core packages are implemented in such as way that package\nduplication is ",(0,n.jsx)(a.strong,{children:"not"})," a problem. For example, duplicate installations of\npackages like ",(0,n.jsx)(a.code,{children:"@backstage/core-plugin-api"}),", ",(0,n.jsx)(a.code,{children:"@backstage/core-components"}),",\n",(0,n.jsx)(a.code,{children:"@backstage/plugin-catalog-react"}),", and ",(0,n.jsx)(a.code,{children:"@backstage/backend-plugin-api"})," are all\nacceptable."]}),"\n",(0,n.jsxs)(a.p,{children:["While package duplication might be acceptable in many cases, you might want to\ndeduplicate packages for the purpose of optimizing bundle size and installation\nspeed. We recommend using deduplication utilities such as ",(0,n.jsx)(a.code,{children:"yarn dedupe"})," to trim\ndown the number of duplicate packages."]}),"\n",(0,n.jsx)(a.h2,{id:"proxy",children:"Proxy"}),"\n",(0,n.jsxs)(a.p,{children:["The Backstage CLI uses ",(0,n.jsx)(a.a,{href:"https://www.npmjs.com/package/global-agent",children:"global-agent"})," to configure HTTP/HTTPS proxy settings using environment variables. This allows you to route the CLI\u2019s network traffic through a proxy server, which can be useful in environments with restricted internet access."]}),"\n",(0,n.jsx)(a.h3,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"export GLOBAL_AGENT_HTTP_PROXY=http://proxy.company.com:8080\nexport GLOBAL_AGENT_HTTPS_PROXY=https://secure-proxy.company.com:8080\nexport GLOBAL_AGENT_NO_PROXY=localhost,internal.company.com\n"})})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,a,t)=>{var n=t(296540),s=Symbol.for("react.element"),c=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,t){var n,c={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(l=a.ref),a)i.call(a,n)&&!r.hasOwnProperty(n)&&(c[n]=a[n]);if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===c[n]&&(c[n]=a[n]);return{$$typeof:s,type:e,key:d,ref:l,props:c,_owner:o.current}}a.Fragment=c,a.jsx=d,a.jsxs=d},474848:(e,a,t)=>{e.exports=t(221020)},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(296540);const s={},c=n.createContext(s);function i(e){const a=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(c.Provider,{value:a},e.children)}}}]);