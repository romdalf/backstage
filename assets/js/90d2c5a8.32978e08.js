/*! For license information please see 90d2c5a8.32978e08.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[647717],{900887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(474848),i=t(28453);const s={id:"locations",sidebar_label:"Locations",title:"Amazon Web Services CodeCommit Locations",description:"Setting up an integration with Amazon Web Services CodeCommit"},r=void 0,a={id:"integrations/aws-codecommit/locations",title:"Amazon Web Services CodeCommit Locations",description:"Setting up an integration with Amazon Web Services CodeCommit",source:"@site/versioned_docs/version-stable/integrations/aws-codecommit/locations.md",sourceDirName:"integrations/aws-codecommit",slug:"/integrations/aws-codecommit/locations",permalink:"/docs/integrations/aws-codecommit/locations",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/integrations/aws-codecommit/locations.md",tags:[],version:"stable",frontMatter:{id:"locations",sidebar_label:"Locations",title:"Amazon Web Services CodeCommit Locations",description:"Setting up an integration with Amazon Web Services CodeCommit"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Register an entity on AWS CodeCommit",id:"register-an-entity-on-aws-codecommit",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The AWS CodeCommit integration supports loading catalog entities from CodeCommit Repositories.\nEntities can be added to\n",(0,o.jsx)(n.a,{href:"/docs/features/software-catalog/configuration",children:"static catalog configuration"}),",\nor registered with the\n",(0,o.jsx)(n.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import",children:"catalog-import"}),"\nplugin."]}),"\n",(0,o.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To use this integration, add configuration to your ",(0,o.jsx)(n.code,{children:"app-config.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"integrations:\n  awsCodeCommit:\n    - region: eu-west-1\n"})}),"\n",(0,o.jsx)(n.p,{children:"This most basic example can only be used if you are running Backstage on an instance that has an IAM identity with the following policies:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Action": [\n                "codecommit:GetFile",\n                "codecommit:GetFolder"\n            ],\n            "Resource": "*",\n            "Effect": "Allow"\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"If you are running Backstage outside AWS and want to use Access key authentication, you can use the following configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"integrations:\n  awsCodeCommit:\n    - region: eu-west-1\n      accessKeyId: ${AWS_ACCESS_KEY_ID}\n      secretAccessKey: ${AWS_SECRET_ACCESS_KEY}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then make sure the environment variables ",(0,o.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})," and\n",(0,o.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})," are set when you run Backstage."]}),"\n",(0,o.jsxs)(n.p,{children:["Users with multiple AWS accounts may want to use a role for CodeCommit that is\nin a different AWS account. Using the ",(0,o.jsx)(n.code,{children:"roleArn"})," parameter as seen below, you can\ninstruct the AWS CodeCommit reader to assume a role before accessing CodeCommit:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"integrations:\n  awsCodeCommit:\n    - region: eu-west-1\n      roleArn: 'arn:aws:iam::xxxxxxxxxxxx:role/example-role'\n      externalId: 'some-id' # optional\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Each entry is a structure with the following ",(0,o.jsx)(n.strong,{children:"required"})," elements:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"region"}),": The AWS region to connect to, to communicate with the CodeCommit services"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The configuration can also provide a ",(0,o.jsx)(n.code,{children:"host"})," property like the other integrations. If it is not provided, it will be determined from the provided region.\ni.e. When you provide ",(0,o.jsx)(n.code,{children:"eu-west-1"})," as the region, Backstage will use the host ",(0,o.jsx)(n.code,{children:"eu-west-1.console.aws.amazon.com"})," to check whether a provided url matches the integration."]}),"\n",(0,o.jsx)(n.h2,{id:"register-an-entity-on-aws-codecommit",children:"Register an entity on AWS CodeCommit"}),"\n",(0,o.jsx)(n.p,{children:"To register an entity that is stored in an AWS CodeCommit repository, you need to fetch the URL from the AWS Console:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Navigate to the Code Commit service in the AWS Console (",(0,o.jsx)(n.a,{href:"https://console.aws.amazon.com/codecommit/home",children:"https://console.aws.amazon.com/codecommit/home"}),")"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.em,{children:"Optional: Make sure you select the correct region if you don't use the default one (us-east-1)"})}),"\n",(0,o.jsx)(n.li,{children:"Select the repository where the entity file is stored"}),"\n",(0,o.jsxs)(n.li,{children:["Inside the repository navigate to the backstage entity file (",(0,o.jsx)(n.code,{children:"catalog-info.yaml"}),") and open the file"]}),"\n",(0,o.jsx)(n.li,{children:"Now you can copy-paste the URL from your browser inside Backstage"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The format would be something like:\n",(0,o.jsx)(n.code,{children:"https://{region}.console.aws.amazon.com/codesuite/codecommit/repositories/{reponame}/browse/refs/heads/{branch}/--/catalog-info.yaml"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var o=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var o,s={},l=null,d=null;for(o in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)r.call(n,o)&&!c.hasOwnProperty(o)&&(s[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===s[o]&&(s[o]=n[o]);return{$$typeof:i,type:e,key:l,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(296540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);