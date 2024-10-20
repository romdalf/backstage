/*! For license information please see ff825e0a.fa3d925b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[253146],{992766:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var i=a(474848),t=a(28453);const s={id:"commands",title:"Commands",description:"Descriptions of all commands available in the CLI."},o=void 0,c={id:"tooling/cli/commands",title:"Commands",description:"Descriptions of all commands available in the CLI.",source:"@site/versioned_docs/version-stable/tooling/cli/03-commands.md",sourceDirName:"tooling/cli",slug:"/tooling/cli/commands",permalink:"/docs/tooling/cli/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/tooling/cli/03-commands.md",tags:[],version:"stable",sidebarPosition:3,frontMatter:{id:"commands",title:"Commands",description:"Descriptions of all commands available in the CLI."},sidebar:"docs",previous:{title:"Build System",permalink:"/docs/tooling/cli/build-system"},next:{title:"Linking in Local Packages",permalink:"/docs/tooling/local-dev/linking-local-packages"}},l={},r=[{value:"help",id:"help",level:2},{value:"repo build",id:"repo-build",level:2},{value:"repo lint",id:"repo-lint",level:2},{value:"package start",id:"package-start",level:2},{value:"package build",id:"package-build",level:2},{value:"package lint",id:"package-lint",level:2},{value:"package test",id:"package-test",level:2},{value:"package clean",id:"package-clean",level:2},{value:"package prepack",id:"package-prepack",level:2},{value:"package postpack",id:"package-postpack",level:2},{value:"new",id:"new",level:2},{value:"config:docs",id:"configdocs",level:2},{value:"config:print",id:"configprint",level:2},{value:"config:check",id:"configcheck",level:2},{value:"config:schema",id:"configschema",level:2},{value:"versions:bump",id:"versionsbump",level:2},{value:"build-workspace",id:"build-workspace",level:2},{value:"create-github-app",id:"create-github-app",level:2},{value:"info",id:"info",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This page lists all commands provided by the Backstage CLI, what they're for,\nand where to use them."}),"\n",(0,i.jsx)(n.h2,{id:"help",children:"help"}),"\n",(0,i.jsxs)(n.p,{children:["This command displays a help summary or detailed help screens for each command.\nBelow is a cleaned up output of ",(0,i.jsx)(n.code,{children:"yarn backstage-cli --help"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"new [options]                                  Open up an interactive guide to creating new things in\n                                                your app\ntest                                           Run tests, forwarding args to Jest, defaulting to watch\n                                                mode [DEPRECATED]\nconfig:docs [options]                          Browse the configuration reference documentation\nconfig:print [options]                         Print the app configuration for the current package\nconfig:check [options]                         Validate that the given configuration loads and matches\n                                                schema\nconfig:schema [options]                        Print configuration schema\nrepo [command]                                 Command that run across an entire Backstage project\npackage [command]                              Lifecycle scripts for individual packages\nmigrate [command]                              Migration utilities\nversions:bump [options]                        Bump Backstage packages to the latest versions\nclean                                          Delete cache directories [DEPRECATED]\nbuild-workspace <workspace-dir> [packages...]  Builds a temporary dist workspace from the provided\n                                                packages\ncreate-github-app <github-org>                 Create new GitHub App in your organization.\ninfo                                           Show helpful information for debugging and reporting bugs\nhelp [command]                                 display help for command\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"package"})," command category, ",(0,i.jsx)(n.code,{children:"yarn backstage-cli package --help"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"start [options]                  Start a package for local development\nbuild [options]                  Build a package for production deployment or publishing\nlint [options] [directories...]  Lint a package\ntest                             Run tests, forwarding args to Jest, defaulting to watch mode\nclean                            Delete cache directories\nprepack                          Prepares a package for packaging before publishing\npostpack                         Restores the changes made by the prepack command\nhelp [command]                   display help for command\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"repo"})," command category, ",(0,i.jsx)(n.code,{children:"yarn backstage-cli repo --help"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"build [options]              Build packages in the project, excluding bundled app and backend packages.\nlint [options]               Lint all packages in the project\nclean                        Delete cache and output directories\nlist-deprecations [options]  List deprecations\ntest [options]               Run tests, forwarding args to Jest, defaulting to watch mode\nhelp [command]               display help for command\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"migrate"})," command category, ",(0,i.jsx)(n.code,{children:"yarn backstage-cli migrate --help"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"package-roles         Add package role field to packages that don't have it\npackage-scripts       Set package scripts according to each package role\npackage-exports       Synchronize package subpath export definitions\npackage-lint-configs  Migrates all packages to use @backstage/cli/config/eslint-factory\nreact-router-deps     Migrates the react-router dependencies for all packages to be peer dependencies\nhelp [command]        display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"repo-build",children:"repo build"}),"\n",(0,i.jsxs)(n.p,{children:["Builds all packages in the project, excluding bundled packages by default, i.e. ones\nwith the role ",(0,i.jsx)(n.code,{children:"'frontend'"})," or ",(0,i.jsx)(n.code,{children:"'backend'"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli repo build [options]\n\nBuild packages in the project, excluding bundled app and backend packages.\n\nOptions:\n  --all          Build all packages, including bundled app and backend packages.\n  --since <ref>  Only build packages and their dev dependents that changed since the specified ref\n"})}),"\n",(0,i.jsx)(n.h2,{id:"repo-lint",children:"repo lint"}),"\n",(0,i.jsx)(n.p,{children:"Lint all packages in the project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'Usage: backstage-cli repo lint [options]\n\nLint all packages in the project\n\nOptions:\n  --format <format>  Lint report output format (default: "eslint-formatter-friendly")\n  --since <ref>      Only lint packages that changed since the specified ref\n  --fix              Attempt to automatically fix violations\n'})}),"\n",(0,i.jsx)(n.h2,{id:"package-start",children:"package start"}),"\n",(0,i.jsxs)(n.p,{children:["Starts the package for local development. See the frontend and backend development parts in the build system ",(0,i.jsx)(n.a,{href:"/docs/tooling/cli/build-system#bundling",children:"bundling"})," section for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package start [options]\n\nStart a package for local development\n\nOptions:\n  --config <path>  Config files to load instead of app-config.yaml (default: [])\n  --role <name>    Run the command with an explicit package role\n  --check          Enable type checking and linting if available\n  --inspect        Enable debugger in Node.js environments\n  --inspect-brk    Enable debugger in Node.js environments, breaking before code starts\n"})}),"\n",(0,i.jsx)(n.h2,{id:"package-build",children:"package build"}),"\n",(0,i.jsxs)(n.p,{children:["Build an individual package based on its role. See the build system ",(0,i.jsx)(n.a,{href:"/docs/tooling/cli/build-system#building",children:"building"})," and ",(0,i.jsx)(n.a,{href:"/docs/tooling/cli/build-system#bundling",children:"bundling"})," sections for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package build [options]\n\nBuild a package for production deployment or publishing\n\nOptions:\n  --role <name>              Run the command with an explicit package role\n  --minify                   Minify the generated code. Does not apply to app package (app is minified by default).\n  --skip-build-dependencies  Skip the automatic building of local dependencies. Applies to backend packages only.\n  --stats                    If bundle stats are available, write them to the output directory. Applies to app packages only.\n  --config <path>            Config files to load instead of app-config.yaml. Applies to app packages only. (default: [])\n"})}),"\n",(0,i.jsx)(n.h2,{id:"package-lint",children:"package lint"}),"\n",(0,i.jsxs)(n.p,{children:["Lint a package. In addition to the default ",(0,i.jsx)(n.code,{children:"eslint"})," behavior, this command will\ninclude TypeScript files, treat warnings as errors, and default to linting the\nentire directory if no specific files are listed. For more information, see the\nbuild system ",(0,i.jsx)(n.a,{href:"/docs/tooling/cli/build-system#linting",children:"linting"})," section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'Usage: backstage-cli package lint [options]\n\nLint a package\n\nOptions:\n  --format <format>  Lint report output format (default: "eslint-formatter-friendly")\n  --fix              Attempt to automatically fix violations\n'})}),"\n",(0,i.jsx)(n.h2,{id:"package-test",children:"package test"}),"\n",(0,i.jsxs)(n.p,{children:["Run tests, forwarding all unknown options to Jest, and defaulting to watch mode.\nWhen executing the tests, ",(0,i.jsx)(n.code,{children:"process.env.NODE_ENV"})," will be set to ",(0,i.jsx)(n.code,{children:'"test"'}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This command uses a default Jest configuration that is included in the CLI,\nwhich is set up with similar goals for speed, scale, and working within a\nmonorepo. The configuration sets the ",(0,i.jsx)(n.code,{children:"src"})," as the root directory, enforces the\n",(0,i.jsx)(n.code,{children:".test."})," infix for tests, and uses ",(0,i.jsx)(n.code,{children:"src/setupTests.ts"})," as the test setup\nlocation. The included configuration also supports test execution at the root of\na yarn workspaces monorepo by automatically creating one grouped configuration\nthat includes all packages that have ",(0,i.jsx)(n.code,{children:"backstage-cli test"})," in their package\n",(0,i.jsx)(n.code,{children:"test"})," script."]}),"\n",(0,i.jsxs)(n.p,{children:["For more information about configuration overrides and editor support, see the ",(0,i.jsx)(n.a,{href:"/docs/tooling/cli/build-system#jest-configuration",children:"Jest Configuration section"})," in the build system documentation."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package test [options]\n\nRun tests, forwarding args to Jest, defaulting to watch mode\n\nOptions:\n  --backstage-cli-help    display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"package-clean",children:"package clean"}),"\n",(0,i.jsx)(n.p,{children:"Remove cache and output directories."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package clean [options]\n\nDelete cache directories\n"})}),"\n",(0,i.jsx)(n.h2,{id:"package-prepack",children:"package prepack"}),"\n",(0,i.jsxs)(n.p,{children:["This command should be added as ",(0,i.jsx)(n.code,{children:"scripts.prepack"})," in all packages. It enables\npackaging- and publish-time overrides for fields inside ",(0,i.jsx)(n.code,{children:"packages.json"}),".\nFor more details, see the build system ",(0,i.jsx)(n.a,{href:"/docs/tooling/cli/build-system#publishing",children:"publishing"})," section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package prepack [options]\n\nPrepares a package for packaging before publishing\n"})}),"\n",(0,i.jsx)(n.h2,{id:"package-postpack",children:"package postpack"}),"\n",(0,i.jsxs)(n.p,{children:["This should be added as ",(0,i.jsx)(n.code,{children:"scripts.postpack"})," in all packages. It restores\n",(0,i.jsx)(n.code,{children:"package.json"})," to what it looked like before calling the ",(0,i.jsx)(n.code,{children:"prepack"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli package postpack [options]\n\nRestores the changes made by the prepack command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"new",children:"new"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"new"})," command opens up an interactive guide for you to create new things\nin your app. If you do not pass in any options it is completely interactive, but\nit is possible to pre-select what you want to create using the ",(0,i.jsx)(n.code,{children:"--select"})," flag,\nand provide options using ",(0,i.jsx)(n.code,{children:"--option"}),", for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"backstage-cli new --select plugin --option id=foo\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This command is typically added as script in the root ",(0,i.jsx)(n.code,{children:"package.json"})," to be\nexecuted with ",(0,i.jsx)(n.code,{children:"yarn new"}),", using options that are appropriate for the organization\nthat owns the app repo. For example you may have it set up like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "new": "backstage-cli new --scope internal --no-private --npm-registry https://acme.org/npm"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli create [options]\n\nOptions:\n  --select <name>          Select the thing you want to be creating upfront\n  --option <name>=<value>  Pre-fill options for the creation process (default: [])\n  --scope <scope>          The scope to use for new packages\n  --npm-registry <URL>     The package registry to use for new packages\n  --no-private             Do not mark new packages as private\n  -h, --help               display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configdocs",children:"config:docs"}),"\n",(0,i.jsx)(n.p,{children:"This commands opens up the reference documentation of your apps local\nconfiguration schema in the browser. This is useful to get an overview of what\nconfiguration values are available to use, a description of what they do and\ntheir format, and where they get sent."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:docs [options]\n\nBrowse the configuration reference documentation\n\nOptions:\n  --package <name>  Only include the schema that applies to the given package\n  -h, --help        display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configprint",children:"config:print"}),"\n",(0,i.jsxs)(n.p,{children:["Print the static configuration, defaulting to reading ",(0,i.jsx)(n.code,{children:"app-config.yaml"})," in the\nrepo root, using schema collected from all local packages in the repo."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, to validate that a given configuration value is visible in the\nfrontend when building the ",(0,i.jsx)(n.code,{children:"my-app"})," package, you can use the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn backstage-cli config:print --frontend --package my-app\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:print [options]\n\nOptions:\n  --package <name>   Only load config schema that applies to the given package\n  --lax              Do not require environment variables to be set\n  --frontend         Print only the frontend configuration\n  --with-secrets     Include secrets in the printed configuration\n  --format <format>  Format to print the configuration in, either json or yaml [yaml]\n  --config <path>    Config files to load instead of app-config.yaml (default: [])\n  -h, --help         display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configcheck",children:"config:check"}),"\n",(0,i.jsxs)(n.p,{children:["Validate that static configuration loads and matches schema, defaulting to\nreading ",(0,i.jsx)(n.code,{children:"app-config.yaml"})," in the repo root and using schema collected from all\nlocal packages in the repo."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:check [options]\n\nOptions:\n  --package <name>  Only load config schema that applies to the given package\n  --lax             Do not require environment variables to be set\n  --frontend        Only validate the frontend configuration\n  --deprecated      Output deprecated configuration settings\n  --strict          Ensure that the provided config(s) has no errors and does not contain keys not in the schema.\n  --config <path>   Config files to load instead of app-config.yaml (default: [])\n  -h, --help        display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configschema",children:"config:schema"}),"\n",(0,i.jsx)(n.p,{children:"Dump the configuration schema that was collected from all local packages in the\nrepo."}),"\n",(0,i.jsxs)(n.p,{children:["Note: when run by ",(0,i.jsx)(n.code,{children:"yarn"}),", supply the yarn option ",(0,i.jsx)(n.code,{children:"--silent"})," if you are using the\noutput in a command line pipe to avoid non schema output in the pipeline."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli config:schema [options]\n\nPrint configuration schema\n\nOptions:\n  --package <name>   Only output config schema that applies to the given package\n  --format <format>  Format to print the schema in, either json or yaml [yaml]\n  -h, --help         display help for command\n"})}),"\n",(0,i.jsx)(n.h2,{id:"versionsbump",children:"versions:bump"}),"\n",(0,i.jsxs)(n.p,{children:["Bump all ",(0,i.jsx)(n.code,{children:"@backstage"})," packages to the latest versions. This checks for updates\nin the package registry, and will update entries ",(0,i.jsx)(n.code,{children:"package.json"})," files when necessary. See more how this command can be configured and used ",(0,i.jsx)(n.a,{href:"/docs/getting-started/keeping-backstage-updated",children:"for keeping Backstage updated"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'Usage: backstage-cli versions:bump [options]\n\nOptions:\n  -h, --help        display help for command\n  --pattern <glob>  Override glob for matching packages to upgrade\n  --release <version|next|main> Bump to a specific Backstage release line or version (default: "main")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"build-workspace",children:"build-workspace"}),"\n",(0,i.jsxs)(n.p,{children:["Builds a mirror of the workspace using the packaged production version of each\npackage. This essentially calls ",(0,i.jsx)(n.code,{children:"yarn pack"})," in each included package and unpacks\nthe resulting archive in the target ",(0,i.jsx)(n.code,{children:"workspace-dir"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli build-workspace [options] <workspace-dir>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"create-github-app",children:"create-github-app"}),"\n",(0,i.jsxs)(n.p,{children:["Creates a GitHub App in your GitHub organization. This is an alternative to\ntoken-based ",(0,i.jsx)(n.a,{href:"/docs/integrations/github/locations",children:"GitHub integration"}),". See\n",(0,i.jsx)(n.a,{href:"/docs/integrations/github/github-apps",children:"GitHub Apps for Backstage Authentication"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Launches a browser to create the App through GitHub and saves the result as a\nYAML file that can be referenced in the GitHub integration configuration."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli create-github-app <github-org>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"info",children:"info"}),"\n",(0,i.jsxs)(n.p,{children:["Outputs debug information which is useful when opening an issue. Outputs system\ninformation, node.js and npm versions, CLI version and type (inside backstage\nrepo or a created app), all ",(0,i.jsx)(n.code,{children:"@backstage/*"})," package dependency versions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Usage: backstage-cli info\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,n,a)=>{var i=a(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,a){var i,s={},r=null,d=null;for(i in void 0!==a&&(r=""+a),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,i)&&!l.hasOwnProperty(i)&&(s[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===s[i]&&(s[i]=n[i]);return{$$typeof:t,type:e,key:r,ref:d,props:s,_owner:c.current}}n.Fragment=s,n.jsx=r,n.jsxs=r},474848:(e,n,a)=>{e.exports=a(221020)},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>c});var i=a(296540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);