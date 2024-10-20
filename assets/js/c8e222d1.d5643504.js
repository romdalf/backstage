/*! For license information please see c8e222d1.d5643504.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[480198],{556555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=t(474848),r=t(28453);const o={id:"oidc",title:"OIDC provider from scratch",description:"This section shows how to use an OIDC provider from scratch, same steps apply for custom providers."},s=void 0,a={id:"auth/oidc",title:"OIDC provider from scratch",description:"This section shows how to use an OIDC provider from scratch, same steps apply for custom providers.",source:"@site/../docs/auth/oidc.md",sourceDirName:"auth",slug:"/auth/oidc",permalink:"/docs/next/auth/oidc",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/auth/oidc.md",tags:[],version:"current",frontMatter:{id:"oidc",title:"OIDC provider from scratch",description:"This section shows how to use an OIDC provider from scratch, same steps apply for custom providers."},sidebar:"docs",previous:{title:"OAuth and OpenID Connect",permalink:"/docs/next/auth/oauth"},next:{title:"Contributing New Provider Modules",permalink:"/docs/next/auth/add-auth-provider"}},d={},h=[{value:"Summary",id:"summary",level:2},{value:"The API reference",id:"the-api-reference",level:3},{value:"The API Factory",id:"the-api-factory",level:3},{value:"The Auth Provider",id:"the-auth-provider",level:2},{value:"The Resolver",id:"the-resolver",level:3},{value:"The configuration",id:"the-configuration",level:3},{value:"The Sign In provider",id:"the-sign-in-provider",level:3},{value:"Note",id:"note",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This documentation is written for ",(0,i.jsx)(n.a,{href:"/docs/next/backend-system/",children:"the new backend system"})," which is the default since Backstage\n",(0,i.jsx)(n.a,{href:"/docs/next/releases/v1.24.0",children:"version 1.24"}),". If you are still on the old backend\nsystem, you may want to read ",(0,i.jsx)(n.a,{href:"/docs/next/auth/oidc--old",children:"its own article"}),"\ninstead, and ",(0,i.jsx)(n.a,{href:"/docs/next/backend-system/building-backends/migrating",children:"consider migrating"}),"!"]})}),"\n",(0,i.jsxs)(n.p,{children:["This section shows how to use an OIDC provider from scratch, same steps apply for custom\nproviders. Please note these steps are for using a provider, not how to implement one,\nand Backstage recommends creating custom providers specific to the IDP, so we'll use a\n",(0,i.jsx)(n.code,{children:"azureOIDC"})," provider throughout this example, feel free to change any of those refs\nto your provider name."]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"To add providers not enabled by default like OIDC, we need to follow some steps, we\nassume you already have a sign-in page to which we'll add the provider so users can\nsign in through the provider. In simple steps here's how you enable the provider:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create an API reference to identify the provider."}),"\n",(0,i.jsx)(n.li,{children:"Create the API factory that will handle the authentication."}),"\n",(0,i.jsx)(n.li,{children:"Add or reuse an auth provider so you can authenticate."}),"\n",(0,i.jsx)(n.li,{children:"Add or reuse a resolver to handle the result from the authentication."}),"\n",(0,i.jsx)(n.li,{children:"Configure the provider to access your 3rd party auth solution."}),"\n",(0,i.jsx)(n.li,{children:"Add the provider to sign in page so users can login with it."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"We'll explain each step more in detail next."}),"\n",(0,i.jsx)(n.h3,{id:"the-api-reference",children:"The API reference"}),"\n",(0,i.jsxs)(n.p,{children:["An API reference exist for the sake of ",(0,i.jsx)(n.strong,{children:"Dependency Injection"}),", check ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/api/utility-apis",children:"Utility APIs"}),"\nfor extended explanation."]}),"\n",(0,i.jsxs)(n.p,{children:["In this OIDC example, we'll create the API reference directly in the\n",(0,i.jsx)(n.code,{children:"packages/app/src/apis.ts"})," file, it is not a requirement to put the reference in this\nfile. Any location will do as long as it's available to be imported to where the API\nfactory is, as well as easily accessible to the rest of the application so any package\nand plugin can inject the API instance when necessary."]}),"\n",(0,i.jsx)(n.p,{children:"An example of such would be when you use an auth provider from a library installed with\nNPM, or any other library repository, you would import the API ref from the library."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export const azureOIDCAuthApiRef: ApiRef<\n  OpenIdConnectApi & ProfileInfoApi & BackstageIdentityApi & SessionApi\n> = createApiRef({\n  id: 'auth.my-custom-provider',\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Please note a few things, the ID can be anything you want as long as it doesn't conflict\nwith other refs, backstage recommends to use a custom name that references your custom\nprovider, for example we are using OIDC protocol with Azure, so we could use something\nlike ",(0,i.jsx)(n.code,{children:"auth.azure.oidc"})," as well."]}),"\n",(0,i.jsxs)(n.p,{children:["Also we're exporting this reference, as well as the ",(0,i.jsx)(n.code,{children:"typings"}),", we need to\nbe able to import this reference anywhere in the app, and the ",(0,i.jsx)(n.code,{children:"typings"})," will tell typescript\nwhat instance we're getting from DI when injecting the API. In this case we are defining\nan API for authentication, so we tell TS that this instance complies with 4 API\ninterfaces:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The OICD API that will handle authentication."}),"\n",(0,i.jsx)(n.li,{children:"Profile API for requesting user profile info from the auth provider in question."}),"\n",(0,i.jsx)(n.li,{children:"Backstage identity API to handle and associate the user profile with backstage identity."}),"\n",(0,i.jsx)(n.li,{children:"Session API, to handle the session the user will have while logged in."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"the-api-factory",children:"The API Factory"}),"\n",(0,i.jsx)(n.p,{children:"A factory is a function that can take some parameters or dependencies and return an\ninstance of something, in our case it will be a function that requests some backstage\nAPIs and use them to create an instance of an OIDC API provider."}),"\n",(0,i.jsx)(n.p,{children:"Please note that this function only runs (creates the instance) when somewhere else in\nthe app you request the DI to give you an instance of the OIDC provider using the API ref\ndefined above, and the DI will only run this function the first time, from then on any\nother DI injection will just receive the same instance created the first time, basically\nthe instance is cached by the DI library, a singleton."}),"\n",(0,i.jsxs)(n.p,{children:["Let's add our OIDC API factory to the APIs array in the ",(0,i.jsx)(n.code,{children:"packages/app/src/apis.ts"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="packages/app/src/apis.ts"',children:"/* highlight-add-next-line */\nimport { OAuth2 } from '@backstage/core-app-api';\n\nexport const apis: AnyApiFactory[] = [\n  /* highlight-add-start */\n  createApiFactory({\n    api: azureOIDCAuthApiRef,\n    deps: {\n      discoveryApi: discoveryApiRef,\n      oauthRequestApi: oauthRequestApiRef,\n      configApi: configApiRef,\n    },\n    factory: ({ discoveryApi, oauthRequestApi, configApi }) =>\n      OAuth2.create({\n        configApi,\n        discoveryApi,\n        oauthRequestApi,\n        provider: {\n          id: 'my-auth-provider',\n          title: 'My custom auth provider',\n          icon: () => null,\n        },\n        environment: configApi.getOptionalString('auth.environment'),\n        defaultScopes: ['openid', 'profile', 'email'],\n        popupOptions: {\n          // optional, used to customize login in popup size\n          size: {\n            fullscreen: true,\n          },\n          /**\n           * or specify popup width and height\n           * size: {\n              width: 1000,\n              height: 1000,\n            }\n           */\n        },\n      }),\n  }),\n  /* highlight-add-end */\n  // ..\n];\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Please note we're importing the ",(0,i.jsx)(n.code,{children:"OAuth2"})," class from ",(0,i.jsx)(n.code,{children:"@backstage/core-app-api"})," effectively\ndelegating the authentication to it. Also we're using the ",(0,i.jsx)(n.code,{children:"my-auth-provider"})," ID to tell\n",(0,i.jsx)(n.code,{children:"OAuth2"})," to use the auth provider we'll define in the next section, and added the default\nscopes to request ID, profile, email and user read permissions."]}),"\n",(0,i.jsx)(n.h2,{id:"the-auth-provider",children:"The Auth Provider"}),"\n",(0,i.jsx)(n.p,{children:"The Auth Provider is responsible for authenticating with the 3rd party service, and give\nus back the credentials, here's where you pick which protocol to use, be it Auth0, OAuth2,\nOIDC, SAML or any other that your 3rd party IDP provider supports."}),"\n",(0,i.jsx)(n.h3,{id:"the-resolver",children:"The Resolver"}),"\n",(0,i.jsx)(n.p,{children:"Resolvers exist to map user identity from the 3rd party (in this case an azure IDP\nprovider) to the backstage user identity."}),"\n",(0,i.jsx)(n.p,{children:"The default OIDC provider has built-in resolvers, here is how you configure them:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  environment: development\n  providers:\n    oidc:\n      development:\n        # ...\n        signIn:\n          resolvers:\n            - resolver: emailMatchingUserEntityProfileEmail\n"})}),"\n",(0,i.jsx)(n.p,{children:"But you can also write a custom resolver as well, see an example below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"/* highlight-add-start */\nimport { createBackendModule } from '@backstage/backend-plugin-api';\nimport {\n  authProvidersExtensionPoint,\n  createOAuthProviderFactory,\n} from '@backstage/plugin-auth-node';\nimport { oidcAuthenticator } from '@backstage/plugin-auth-backend-module-oidc-provider';\n\nconst myAuthProviderModule = createBackendModule({\n  // This ID must be exactly \"auth\" because that's the plugin it targets\n  pluginId: 'auth',\n  // This ID must be unique, but can be anything\n  moduleId: 'my-auth-provider',\n  register(reg) {\n    reg.registerInit({\n      deps: { providers: authProvidersExtensionPoint },\n      async init({ providers }) {\n        providers.registerProvider({\n          // This ID must match the actual provider config, e.g. addressing\n          // auth.providers.azure means that this must be \"azure\".\n          providerId: 'my-auth-provider',\n          // Use createProxyAuthProviderFactory instead if it's one of the proxy\n          // based providers rather than an OAuth based one\n          factory: createOAuthProviderFactory({\n            // For more info about authenticators please see https://backstage.io/docs/auth/add-auth-provider/#adding-an-oauth-based-provider\n            authenticator: oidcAuthenticator,\n            async signInResolver(info, ctx) {\n              const userRef = stringifyEntityRef({\n                kind: 'User',\n                name: info.result.userinfo.sub,\n                namespace: DEFAULT_NAMESPACE,\n              });\n              return ctx.issueToken({\n                claims: {\n                  sub: userRef, // The user's own identity\n                  ent: [userRef], // A list of identities that the user claims ownership through\n                },\n              });\n            },\n          }),\n        });\n      },\n    });\n  },\n});\n/* highlight-add-end */\n//...\nbackend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-next-line */\nbackend.add(myAuthProviderModule);\n//...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For a more a detailed explanation about resolvers check the\n",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/auth/identity-resolver",children:"Identity Resolver"})," page."]}),"\n",(0,i.jsx)(n.h3,{id:"the-configuration",children:"The configuration"}),"\n",(0,i.jsx)(n.p,{children:"Since we are using our custom OIDC Auth Provider, we need to add a configuration based\non the provider used, in this case based on OIDC protocol (remember the 3rd party has to\nsupport the protocol)."}),"\n",(0,i.jsxs)(n.p,{children:["In this example we'll configure OIDC with ",(0,i.jsx)(n.code,{children:"my-auth-provider"}),", to do so we need to\n",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/auth/microsoft/provider#create-an-app-registration-on-azure",children:"Create app registration"})," in the Azure console, the only difference is that the\n",(0,i.jsx)(n.code,{children:"http://localhost:7007/api/auth/microsoft/handler/frame"})," URL needs to change to\n",(0,i.jsx)(n.code,{children:"http://localhost:7007/api/auth/my-auth-provider/handler/frame"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Then we need to configure the env variables for the provider, based on the provider's code\nin ",(0,i.jsx)(n.code,{children:"plugins/auth-backend/src/providers/oidc/provider.ts"})," we need the following variables\nin the ",(0,i.jsx)(n.code,{children:"app-config.yaml"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="app-config.yaml"',children:"auth:\n  environment: development\n  ### Providing an auth.session.secret will enable session support in the auth-backend\n  session:\n    secret: ${SESSION_SECRET}\n  providers:\n    my-auth-provider:\n      development:\n        metadataUrl: https://example.com/.well-known/openid-configuration\n        clientId: ${AUTH_MY_CLIENT_ID}\n        clientSecret: ${AUTH_MY_CLIENT_SECRET}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Anything enclosed in ",(0,i.jsx)(n.code,{children:"${}"})," can be replaced directly in the yaml, or provided as\nenvironment variables, the way you obtain all these except ",(0,i.jsx)(n.code,{children:"scope"})," and ",(0,i.jsx)(n.code,{children:"prompt"})," is to\ncheck the App Registration you created:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientId"}),": Grab from the Overview page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"clientSecret"}),": Can only be seen when creating the secret, if you lose it you'll need a\nnew secret."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"metadataUrl"}),": In Overview > Endpoints tab, grab OpenID Connect metadata document URL."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"authorizationUrl"})," and ",(0,i.jsx)(n.code,{children:"tokenUrl"}),": Open the ",(0,i.jsx)(n.code,{children:"metadataUrl"})," in a browser, that json will\nhold these 2 urls somewhere in there."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tokenEndpointAuthMethod"}),": Don't define it, use the default unless you know what it does."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tokenSignedResponseAlg"}),": Don't define it, use the default unless you know what it does."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scope"}),": Only used if we didn't specify ",(0,i.jsx)(n.code,{children:"defaultScopes"})," in the provider's factory,\nbasically the same thing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prompt"}),": Recommended to use ",(0,i.jsx)(n.code,{children:"auto"})," so the browser will request login to the IDP if the\nuser has no active session."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note that for the time being, any change in this yaml file requires a restart of the app,\nalso you need to have the ",(0,i.jsx)(n.code,{children:"session.secret"})," part to use OIDC (some other providers might\nneed this as well) to support user sessions."]}),"\n",(0,i.jsx)(n.h3,{id:"the-sign-in-provider",children:"The Sign In provider"}),"\n",(0,i.jsxs)(n.p,{children:["The last step is to add the provider to the ",(0,i.jsx)(n.code,{children:"SignInPage"})," so users can sign in with your\nnew provider, please follow the ",(0,i.jsx)(n.a,{href:"https://backstage.io/docs/auth/#sign-in-configuration",children:"Sign In Configuration"})," docs, here's where you import\nand use the API reference we defined earlier."]}),"\n",(0,i.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,i.jsx)(n.p,{children:"These steps apply to most if not all the providers, including custom providers, the main\ndifference between different providers will be the contents of the API factory, the code\nin the Auth Provider Factory, the resolver, and the different variables each provider\nneeds in the YAML config or env variables."})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var i=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(e,n,t){var i,o={},h=null,c=null;for(i in void 0!==t&&(h=""+t),void 0!==n.key&&(h=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,i)&&!d.hasOwnProperty(i)&&(o[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===o[i]&&(o[i]=n[i]);return{$$typeof:r,type:e,key:h,ref:c,props:o,_owner:a.current}}n.Fragment=o,n.jsx=h,n.jsxs=h},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(296540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);