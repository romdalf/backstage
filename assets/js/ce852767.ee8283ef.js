/*! For license information please see ce852767.ee8283ef.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[99058],{964234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(474848),o=n(28453);const s={id:"troubleshooting",title:"Troubleshooting Auth",description:"Guidance for various issues that one might run into when setting up authentication"},r=void 0,a={id:"auth/troubleshooting",title:"Troubleshooting Auth",description:"Guidance for various issues that one might run into when setting up authentication",source:"@site/../docs/auth/troubleshooting.md",sourceDirName:"auth",slug:"/auth/troubleshooting",permalink:"/docs/next/auth/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/auth/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting Auth",description:"Guidance for various issues that one might run into when setting up authentication"},sidebar:"docs",previous:{title:"Auto Logout",permalink:"/docs/next/auth/autologout"},next:{title:"Overview",permalink:"/docs/next/permissions/overview"}},h={},l=[{value:"Sign-in fails with &quot;... provider is not configured to support sign-in&quot;",id:"sign-in-fails-with--provider-is-not-configured-to-support-sign-in",level:2},{value:"Auth fails with &quot;Auth provider registered for ... is misconfigured&quot;",id:"auth-fails-with-auth-provider-registered-for--is-misconfigured",level:2},{value:"Auth fails with &quot;Login failed; caused by NotAllowedError: Origin &#39;...&#39; is not allowed&quot;",id:"auth-fails-with-login-failed-caused-by-notallowederror-origin--is-not-allowed",level:2},{value:"Sign-in fails with the error &quot;User not found&quot;",id:"sign-in-fails-with-the-error-user-not-found",level:2},{value:"General troubleshooting",id:"general-troubleshooting",level:2},{value:"Stepping through authentication manually",id:"stepping-through-authentication-manually",level:3},{value:"Inspecting the refresh call",id:"inspecting-the-refresh-call",level:3},{value:"Inspecting the contents of a Backstage token",id:"inspecting-the-contents-of-a-backstage-token",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Auth is tricky and doesn't always work as expected. Below you'll find some of the common\nproblems one might run into when setting up authentication, as well as some general\ntroubleshooting tips."}),"\n",(0,i.jsx)(t.h2,{id:"sign-in-fails-with--provider-is-not-configured-to-support-sign-in",children:'Sign-in fails with "... provider is not configured to support sign-in"'}),"\n",(0,i.jsxs)(t.p,{children:["This happens if you try to sign in using an auth provider that has not been\nconfigured to allow sign-in. See the ",(0,i.jsx)(t.a,{href:"/docs/next/auth/identity-resolver",children:"Sign-in Identities and Resolvers"}),"\npage for information about how to configure and customize sign-in."]}),"\n",(0,i.jsx)(t.p,{children:"As part of the 1.1 release of Backstage we removed the default implementations\nof all sign-in resolvers. This was a necessary security fix as well as a step\ntowards providing more clarity in the configuration of the sign-in process.\nYou may encounter this error if you are upgrading from a previous version, in\nwhich case you would need to configure a sign-in resolver as described above."}),"\n",(0,i.jsx)(t.h2,{id:"auth-fails-with-auth-provider-registered-for--is-misconfigured",children:'Auth fails with "Auth provider registered for ... is misconfigured"'}),"\n",(0,i.jsx)(t.p,{children:"This will typically only happen during development, as in a production build the auth\nbackend will fail to start up altogether if a provider is misconfigured."}),"\n",(0,i.jsxs)(t.p,{children:["Double check that your configuration for the provider is correct. Note that environment variables\nsuch as ",(0,i.jsx)(t.code,{children:"AUTH_OAUTH2_CLIENT_ID"})," must be set and will ",(0,i.jsx)(t.strong,{children:"NOT"})," be picked up from ",(0,i.jsx)(t.code,{children:".env"})," files.\nYou can use the ",(0,i.jsx)(t.code,{children:"yarn backstage-cli config:print --lax"})," command to print your local configuration."]}),"\n",(0,i.jsxs)(t.p,{children:["The backend logs should also provide insight into why the configuration of the provider\nfails. In working setup the backend should log something like ",(0,i.jsx)(t.code,{children:'"Configuring provider, oauth2"'}),",\nwhile it with otherwise log a warning like ",(0,i.jsx)(t.code,{children:'"Skipping oauth2 auth provider, ..."'}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"auth-fails-with-login-failed-caused-by-notallowederror-origin--is-not-allowed",children:"Auth fails with \"Login failed; caused by NotAllowedError: Origin '...' is not allowed\""}),"\n",(0,i.jsxs)(t.p,{children:["This will happen if the origin of the configured ",(0,i.jsx)(t.code,{children:"app.baseUrl"})," in the auth backend does not\nmatch the origin that the frontend is being accessed at. Make sure that ",(0,i.jsx)(t.code,{children:"app.baseUrl"})," matches\nwhat a user sees in the browser address bar."]}),"\n",(0,i.jsxs)(t.p,{children:["If you wish to support multiple different origins at once, there is an experimental configuration\nthat lets you do this. The ",(0,i.jsx)(t.code,{children:"auth.experimentalExtraAllowedOrigins"})," key accepts a list of origin\nglob patterns where sign-in should be allowed from."]}),"\n",(0,i.jsx)(t.h2,{id:"sign-in-fails-with-the-error-user-not-found",children:'Sign-in fails with the error "User not found"'}),"\n",(0,i.jsxs)(t.p,{children:["Many built-in sign-in resolvers require user entities to be present in the catalog. This\nerror is encountered if authentication is successful, but a matching user entity is not\npresent in the catalog. If you wish to enable sign-in without having users be represented\nin the catalog data, see the method that's documented in the\n",(0,i.jsx)(t.a,{href:"/docs/next/auth/identity-resolver#sign-in-without-users-in-the-catalog",children:"sign-in resolver documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to customize this error message, you can create a custom sign-in resolver and\ncatch the ",(0,i.jsx)(t.code,{children:"NotFoundError"})," thrown by ",(0,i.jsx)(t.code,{children:"ctx.signInWithCatalogUser"})," or ",(0,i.jsx)(t.code,{children:"ctx.findCatalogUser"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"general-troubleshooting",children:"General troubleshooting"}),"\n",(0,i.jsx)(t.p,{children:"This section contains some general troubleshooting tips."}),"\n",(0,i.jsx)(t.h3,{id:"stepping-through-authentication-manually",children:"Stepping through authentication manually"}),"\n",(0,i.jsx)(t.p,{children:"Authentication happens in a popup window that redirects to the identity providers authorization\nendpoint. Once auth is complete the identity provider will redirect back to the auth backend,\nwhich immediately serves a simple HTML page that posts the result back to the main window, which\nthen closes the popup."}),"\n",(0,i.jsxs)(t.p,{children:["Because the popup is closed automatically it can sometimes be difficult to inspect the auth\nflow, especially if one wants to debug the cookies that are being set. One way around this is to\nmanually head to the ",(0,i.jsx)(t.code,{children:"/start"})," endpoint of the provider, which is the page that the popup will\npoint to initially. For example, if you want to troubleshoot GitHub auth locally, you'd head\nto ",(0,i.jsx)(t.code,{children:"http://localhost:7007/api/auth/github/start?env=development"}),". Note that the ",(0,i.jsx)(t.code,{children:"env"})," parameter\nneeds to be set, and it's possible that you may need to set the ",(0,i.jsx)(t.code,{children:"scope"})," parameter for some providers\nas well."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you've stepped through the auth flow you should end up at the ",(0,i.jsx)(t.code,{children:"/handler/frame"})," endpoint, which displays\nan empty page. This is where the result is normally posted back to the main window, but since we've\nreached it using the manual flow that won't happen. You can still inspect the result though, both\nby viewing the source code of the page, or printing the value of the ",(0,i.jsx)(t.code,{children:"authResponse"})," variable in the console."]}),"\n",(0,i.jsx)(t.h3,{id:"inspecting-the-refresh-call",children:"Inspecting the refresh call"}),"\n",(0,i.jsxs)(t.p,{children:["If you're running into problems with session persistence, such as users being signed out when reloading\nthe page, it will be something that's going wrong with the call to the ",(0,i.jsx)(t.code,{children:"/refresh"})," endpoint of the\nauth provider. Head to the network inspector and filter by ",(0,i.jsx)(t.code,{children:"/refresh"}),". Find the ",(0,i.jsx)(t.code,{children:"GET"})," request towards\n",(0,i.jsx)(t.code,{children:"<backend.baseUrl>/api/auth/<provider>/refresh"})," and inspect the request."]}),"\n",(0,i.jsx)(t.p,{children:"Note that extra calls to the refresh endpoint may be made by the frontend in order to check whether\nauth providers have an existing session. This means that there might be multiple calls, including some\nthat are failing. Make sure you're looking at the refresh call to the provider that you're troubleshooting,\nand don't worry about other failing refresh calls."}),"\n",(0,i.jsx)(t.h3,{id:"inspecting-the-contents-of-a-backstage-token",children:"Inspecting the contents of a Backstage token"}),"\n",(0,i.jsx)(t.p,{children:"The Backstage token that's issues during sign-in is a plain JWT. You can inspect the contents using\nany tool that supports JWTs, or you can parse the payload yourself in for example the browser console\nor a Node.js REPL:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"atob(token.split('.')[1]);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},221020:(e,t,n)=>{var i=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,c=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)r.call(t,i)&&!h.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:l,ref:c,props:s,_owner:a.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(296540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);