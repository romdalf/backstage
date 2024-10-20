/*! For license information please see 5b3c6e6b.935cad41.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[780647],{876132:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(474848),a=n(28453);const o={id:"authentication",title:"Authentication",description:"How to setup authentication for your Backstage app"},s=void 0,r={id:"getting-started/config/authentication",title:"Authentication",description:"How to setup authentication for your Backstage app",source:"@site/versioned_docs/version-stable/getting-started/config/authentication.md",sourceDirName:"getting-started/config",slug:"/getting-started/config/authentication",permalink:"/docs/getting-started/config/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/getting-started/config/authentication.md",tags:[],version:"stable",frontMatter:{id:"authentication",title:"Authentication",description:"How to setup authentication for your Backstage app"},sidebar:"docs",previous:{title:"Database",permalink:"/docs/getting-started/config/database"},next:{title:"Configuring App with plugins",permalink:"/docs/getting-started/configure-app-with-plugins"}},d={},l=[{value:"Summary",id:"summary",level:2},{value:"Setting up authentication",id:"setting-up-authentication",level:2},{value:"Add sign-in option to the frontend",id:"add-sign-in-option-to-the-frontend",level:2},{value:"Add sign-in resolver(s)",id:"add-sign-in-resolvers",level:2},{value:"Add the auth provider to the backend",id:"add-the-auth-provider-to-the-backend",level:2},{value:"Adding a User",id:"adding-a-user",level:2},{value:"Setting up a GitHub Integration",id:"setting-up-a-github-integration",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Audience: Admins or Developers"}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"We'll be walking you through how to setup authentication for your Backstage app using GitHub. After finishing this guide, you'll have both working authentication and users in your Backstage app to match to the users logging in!"}),"\n",(0,i.jsxs)(t.p,{children:["There are multiple authentication providers available for you to use with Backstage, feel free to follow ",(0,i.jsx)(t.a,{href:"/docs/auth/",children:"their instructions for adding authentication"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:['The default Backstage app comes with a guest Sign In Resolver. This resolver makes all users share a single "guest" identity and is only intended as a minimum requirement to quickly get up and running. You can read more about how ',(0,i.jsx)(t.a,{href:"/docs/auth/identity-resolver#sign-in-resolvers",children:"Sign In Resolvers"})," play a role in creating a ",(0,i.jsx)(t.a,{href:"/docs/auth/identity-resolver#backstage-user-identity",children:"Backstage User Identity"})," for logged in users."]})}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-authentication",children:"Setting up authentication"}),"\n",(0,i.jsxs)(t.p,{children:["For this tutorial we choose to use GitHub, a free service most of you might be familiar with, and we'll be using an OAuth app. For detailed options, see\n",(0,i.jsx)(t.a,{href:"/docs/auth/github/provider#create-an-oauth-app-on-github",children:"the GitHub auth provider documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://github.com/settings/applications/new",children:"https://github.com/settings/applications/new"}),' to create your OAuth App. The "Homepage URL" should point to Backstage\'s frontend, in our tutorial it would be ',(0,i.jsx)(t.code,{children:"http://localhost:3000"}),'. The "Authorization callback URL" will point to the auth backend, which will most likely be ',(0,i.jsx)(t.code,{children:"http://localhost:7007/api/auth/github/handler/frame"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of the GitHub OAuth creation page",src:n(360533).A+"",width:"593",height:"554"})}),"\n",(0,i.jsxs)(t.p,{children:["Take note of the ",(0,i.jsx)(t.code,{children:"Client ID"})," and the ",(0,i.jsx)(t.code,{children:"Client Secret"}),' (clicking the "Generate a new client secret" button will get this value for you). Open ',(0,i.jsx)(t.code,{children:"app-config.yaml"}),", and add them as ",(0,i.jsx)(t.code,{children:"clientId"})," and ",(0,i.jsx)(t.code,{children:"clientSecret"})," in this file. It should end up looking like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  # see https://backstage.io/docs/auth/ to learn about auth providers\n  /* highlight-add-start */\n  environment: development\n  /* highlight-add-end */\n  providers:\n    # See https://backstage.io/docs/auth/guest/provider\n    guest: {}\n    /* highlight-add-start */\n    github:\n      development:\n        clientId: YOUR CLIENT ID\n        clientSecret: YOUR CLIENT SECRET\n    /* highlight-add-end */\n"})}),"\n",(0,i.jsx)(t.h2,{id:"add-sign-in-option-to-the-frontend",children:"Add sign-in option to the frontend"}),"\n",(0,i.jsx)(t.p,{children:"The next step is to change the sign-in page. For this, you'll actually need to write some code."}),"\n",(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.code,{children:"packages/app/src/App.tsx"})," and below the last ",(0,i.jsx)(t.code,{children:"import"})," line, add:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:'title="packages/app/src/App.tsx"',children:"import { githubAuthApiRef } from '@backstage/core-plugin-api';\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Search for ",(0,i.jsx)(t.code,{children:"const app = createApp({"})," in this file, and below ",(0,i.jsx)(t.code,{children:"apis,"})," add:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="packages/app/src/App.tsx"',children:"components: {\n  SignInPage: props => (\n    <SignInPage\n      {...props}\n      auto\n      provider={{\n        id: 'github-auth-provider',\n        title: 'GitHub',\n        message: 'Sign in using GitHub',\n        apiRef: githubAuthApiRef,\n      }}\n    />\n  ),\n},\n"})}),"\n",(0,i.jsx)(t.h2,{id:"add-sign-in-resolvers",children:"Add sign-in resolver(s)"}),"\n",(0,i.jsx)(t.p,{children:"Next we need to add the sign-in resolver to our configuration. Here's how:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  # see https://backstage.io/docs/auth/ to learn about auth providers\n  environment: development\n  providers:\n    # See https://backstage.io/docs/auth/guest/provider\n    guest: {}\n    github:\n      development:\n        clientId: YOUR CLIENT ID\n        clientSecret: YOUR CLIENT SECRET\n        /* highlight-add-start */\n        signIn:\n          resolvers:\n            # Matches the GitHub username with the Backstage user entity name.\n            # See https://backstage.io/docs/auth/github/provider#resolvers for more resolvers.\n            - resolver: usernameMatchingUserEntityName\n        /* highlight-add-end */\n"})}),"\n",(0,i.jsxs)(t.p,{children:["What this will do is take the user details provided by the auth provider and match that against a User in the Catalog. In this case - ",(0,i.jsx)(t.code,{children:"usernameMatchingUserEntityName"})," - will match the GitHub user name with the ",(0,i.jsx)(t.code,{children:"metadata.name"}),' value of a User in the Catalog, if none is found you will get an "Failed to sign-in, unable to resolve user identity" message. We\'ll cover this in the next few sections.']}),"\n",(0,i.jsxs)(t.p,{children:["Learn more about this topic in the ",(0,i.jsx)(t.a,{href:"/docs/auth/identity-resolver#sign-in-resolvers",children:"Sign-in Resolvers"})," documentation."]}),"\n",(0,i.jsx)(t.h2,{id:"add-the-auth-provider-to-the-backend",children:"Add the auth provider to the backend"}),"\n",(0,i.jsx)(t.p,{children:"To add the auth provider to the backend, we will first need to install the package by running this command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-github-provider\n"})}),"\n",(0,i.jsx)(t.p,{children:"Then we will need to add this line:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(import('@backstage/plugin-auth-backend-module-github-provider'));\n/* highlight-add-end */\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Restart Backstage from the terminal, by stopping it with ",(0,i.jsx)(t.code,{children:"Ctrl+C"}),", and starting it with ",(0,i.jsx)(t.code,{children:"yarn dev"}),'. You should be welcomed by a login prompt! If you try to login at this point you will get a "Failed to sign-in, unable to resolve user identity" message, read on as we\'ll fix that next.']}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsx)(t.p,{children:"Sometimes the frontend starts before the backend resulting in errors on the sign in page. Wait for the backend to start and then reload Backstage to proceed."})}),"\n",(0,i.jsx)(t.h2,{id:"adding-a-user",children:"Adding a User"}),"\n",(0,i.jsxs)(t.p,{children:["The recommended approach for adding Users, and Groups, into your Catalog is to use one of the existing Org Entity Providers - ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/integrations/github/org",children:"like this one for GitHub"})," - or if those don't work you may need to ",(0,i.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/external-integrations#custom-entity-providers",children:"create one"})," that fits your Organization's needs."]}),"\n",(0,i.jsxs)(t.p,{children:["For the sake of this guide we'll simply step you though adding a User to the ",(0,i.jsx)(t.code,{children:"org.yaml"})," file that is included when you create a new Backstage instance. Let's do that:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["First open the ",(0,i.jsx)(t.code,{children:"/examples/org.yaml"})," file in your text editor of choice"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"At the bottom we'll add the following YAML:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"---\napiVersion: backstage.io/v1alpha1\nkind: User\nmetadata:\n  name: YOUR GITHUB USERNAME\nspec:\n  memberOf: [guests]\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Now make sure to replace the text "YOUR GITHUB USERNAME" with your actual GitHub User name.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Let's restart Backstage from the terminal once more, by stopping it with ",(0,i.jsx)(t.code,{children:"Ctrl+C"}),", and starting it with ",(0,i.jsx)(t.code,{children:"yarn dev"}),". You should now be able to log into Backstage and see items in your Catalog."]}),"\n",(0,i.jsx)(t.p,{children:"To learn more about Authentication in Backstage, here are some docs you\ncould read:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/auth/",children:"Authentication in Backstage"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/integrations/github/org",children:"Using organizational data from GitHub"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-a-github-integration",children:"Setting up a GitHub Integration"}),"\n",(0,i.jsxs)(t.p,{children:["The GitHub integration supports loading catalog entities from GitHub or GitHub Enterprise. Entities can be added to static catalog configuration, registered with the catalog-import plugin, or discovered from a GitHub organization. Users and Groups can also be loaded from an organization. While using ",(0,i.jsx)(t.a,{href:"/docs/integrations/github/github-apps",children:"GitHub Apps"})," might be the best way to set up integrations, for this tutorial you'll use a Personal Access Token."]}),"\n",(0,i.jsxs)(t.p,{children:["Create your Personal Access Token by opening ",(0,i.jsx)(t.a,{href:"https://github.com/settings/tokens/new",children:"the GitHub token creation page"}),". Use a name to identify this token and put it in the notes field. Choose a number of days for expiration. If you have a hard time picking a number, we suggest to go for 7 days, it's a lucky number."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Screenshot of the GitHub Personal Access Token creation page",src:n(600191).A+"",width:"784",height:"298"})}),"\n",(0,i.jsxs)(t.p,{children:["Set the scope to your likings. For this tutorial, selecting ",(0,i.jsx)(t.code,{children:"repo"})," and ",(0,i.jsx)(t.code,{children:"workflow"})," is required as the scaffolding job in this guide configures a GitHub actions workflow for the newly created project."]}),"\n",(0,i.jsxs)(t.p,{children:["For this tutorial, we will be writing the token to ",(0,i.jsx)(t.code,{children:"app-config.local.yaml"}),". This file might not exist for you, so if it doesn't go ahead and create it alongside the ",(0,i.jsx)(t.code,{children:"app-config.yaml"})," at the root of the project. This file should also be excluded in ",(0,i.jsx)(t.code,{children:".gitignore"}),", to avoid accidental committing of this file. More details on this file can be found in the ",(0,i.jsx)(t.a,{href:"/docs/conf/",children:"Static Configuration documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In your ",(0,i.jsx)(t.code,{children:"app-config.local.yaml"})," go ahead and add the following:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.local.yaml"',children:"integrations:\n  github:\n    - host: github.com\n      token: ghp_urtokendeinfewinfiwebfweb # this should be the token from GitHub\n"})}),"\n",(0,i.jsx)(t.p,{children:"That's settled. This information will be leveraged by other plugins."}),"\n",(0,i.jsxs)(t.p,{children:["If you're looking for a more production way to manage this secret, then you can do the following with the token being stored in an environment variable called ",(0,i.jsx)(t.code,{children:"GITHUB_TOKEN"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'title="app-config.local.yaml"',children:"integrations:\n  github:\n    - host: github.com\n      token: ${GITHUB_TOKEN} # this will use the environment variable GITHUB_TOKEN\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"note",children:(0,i.jsxs)(t.p,{children:["If you've updated the configuration for your integration, it's likely that the backend will need a restart to apply these changes. To do this, stop the running instance in your terminal with ",(0,i.jsx)(t.code,{children:"Control-C"}),", then start it again with ",(0,i.jsx)(t.code,{children:"yarn dev"}),". Once the backend has restarted, retry the operation."]})}),"\n",(0,i.jsx)(t.p,{children:"Some helpful links, for if you want to learn more about:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/integrations/",children:"Other available integrations"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/integrations/github/github-apps#docsNav",children:"Using GitHub Apps instead of a Personal Access Token"})}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},221020:(e,t,n)=>{var i=n(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,o={},l=null,h=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,i)&&!d.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:a,type:e,key:l,ref:h,props:o,_owner:r.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},360533:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/gh-oauth-6ba1157307d9e1a95301a49e9ee1b05b.png"},600191:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/gh-pat-b09e0abf61ff86557a8a986951584879.png"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(296540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);