/*! For license information please see 4c1996f9.a54a700d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[763204],{920171:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var d=r(474848),s=r(28453);const t={id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"},i=void 0,l={id:"reference/plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap",source:"@site/versioned_docs/version-stable/reference/plugin-catalog-backend-module-ldap.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap",permalink:"/docs/reference/plugin-catalog-backend-module-ldap",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-catalog-backend-module-ldap.md",tags:[],version:"stable",frontMatter:{id:"plugin-catalog-backend-module-ldap",title:"@backstage/plugin-catalog-backend-module-ldap",description:"API Reference for @backstage/plugin-catalog-backend-module-ldap"}},a={},c=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,d.jsx)(n.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})]}),"\n",(0,d.jsx)(n.p,{children:"A Backstage catalog backend module that helps integrate towards LDAP"}),"\n",(0,d.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Class"}),"\n"]}),(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapclient",children:"LdapClient"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsxs)(n.p,{children:["Basic wrapper for the ",(0,d.jsx)(n.code,{children:"ldapjs"})," library."]}),"\n",(0,d.jsx)(n.p,{children:"Helps out with promisifying calls, paging, binding etc."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Reads user and group entries out of an LDAP service, and provides them as User and Group entities for the catalog."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgreaderprocessor",children:"LdapOrgReaderProcessor"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Extracts teams and users out of an LDAP server."}),"\n"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Function"}),"\n"]}),(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultgrouptransformer",children:"defaultGroupTransformer(vendor, config, entry)"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The default implementation of the transformation from an LDAP entry to a Group entity."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.defaultusertransformer",children:"defaultUserTransformer(vendor, config, entry)"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The default implementation of the transformation from an LDAP entry to a User entity."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.mapstringattr",children:"mapStringAttr(entry, vendor, attributeName, setter)"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Maps a single-valued attribute to a consumer."}),"\n",(0,d.jsx)(n.p,{children:"This helper can be useful when implementing a user or group transformer."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaplegacyconfig",children:"readLdapLegacyConfig(config)"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Parses configuration."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readldaporg",children:"readLdapOrg(client, userConfig, groupConfig, vendorConfig, options)"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Reads users and groups out of an LDAP provider."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.readproviderconfigs",children:"readProviderConfigs(config)"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Parses all configured providers."}),"\n"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Interface"}),"\n"]}),(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions",children:"LdapOrgEntityProviderLegacyOptions"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsxs)(n.p,{children:["Options for ",(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"}),"."]}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:"LdapOrgEntityProviderTransformsExtensionPoint"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsxs)(n.p,{children:["Interface for ",(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:"LdapOrgEntityProviderTransformsExtensionPoint"}),"."]}),"\n"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Variable"}),"\n"]}),(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.catalogmoduleldaporgentityprovider",children:"catalogModuleLdapOrgEntityProvider"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Registers the LdapOrgEntityProvider with the catalog processing extension point."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_dn_annotation",children:"LDAP_DN_ANNOTATION"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The name of an entity annotation, that references the DN of the LDAP object it was ingested from."}),"\n",(0,d.jsx)(n.p,{children:"The DN is the fully qualified name that identifies the item; for example, for an item with the DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with that full string as its value."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_rdn_annotation",children:"LDAP_RDN_ANNOTATION"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The name of an entity annotation, that references the RDN of the LDAP object it was ingested from."}),"\n",(0,d.jsx)(n.p,{children:'The RDN is the name of the leftmost attribute that identifies the item; for example, for an item with the fully qualified DN uid=john,ou=people,ou=spotify,dc=spotify,dc=net the generated entity would have this annotation, with the value "john".'}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldap_uuid_annotation",children:"LDAP_UUID_ANNOTATION"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The name of an entity annotation, that references the UUID of the LDAP object it was ingested from."}),"\n",(0,d.jsx)(n.p,{children:"The UUID is the globally unique ID that identifies the item; for example, for an item with the UUID 76ef928a-b251-1037-9840-d78227f36a7e, the generated entity would have this annotation, with that full string as its value."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovidertransformsextensionpoint",children:"ldapOrgEntityProviderTransformsExtensionPoint"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Extension point used to customize the transforms used by the module."}),"\n"]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Type Alias"}),"\n"]}),(0,d.jsxs)(n.th,{children:["\n",(0,d.jsx)(n.p,{children:"Description"}),"\n"]})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.bindconfig",children:"BindConfig"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The settings to use for the a command."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.groupconfig",children:"GroupConfig"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The settings that govern the reading and interpretation of groups."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.grouptransformer",children:"GroupTransformer"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Customize the ingested Group entity"}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovideroptions",children:"LdapOrgEntityProviderOptions"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsxs)(n.p,{children:["Options for ",(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityprovider",children:"LdapOrgEntityProvider"}),"."]}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapproviderconfig",children:"LdapProviderConfig"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The configuration parameters for a single LDAP provider."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldapvendor",children:"LdapVendor"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"An LDAP Vendor handles unique nuances between different vendors."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.tlsconfig",children:"TLSConfig"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"TLS settings"}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.userconfig",children:"UserConfig"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"The settings that govern the reading and interpretation of users."}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.usertransformer",children:"UserTransformer"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Customize the ingested User entity"}),"\n"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.vendorconfig",children:"VendorConfig"})}),"\n"]}),(0,d.jsxs)(n.td,{children:["\n",(0,d.jsx)(n.p,{children:"Configuration for LDAP vendor-specific attributes."}),"\n",(0,d.jsx)(n.p,{children:"Allows custom attribute names for distinguished names (DN) and universally unique identifiers (UUID) in LDAP directories."}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},221020:(e,n,r)=>{var d=r(296540),s=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var d,t={},c=null,o=null;for(d in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(o=n.ref),n)i.call(n,d)&&!a.hasOwnProperty(d)&&(t[d]=n[d]);if(e&&e.defaultProps)for(d in n=e.defaultProps)void 0===t[d]&&(t[d]=n[d]);return{$$typeof:s,type:e,key:c,ref:o,props:t,_owner:l.current}}n.Fragment=t,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var d=r(296540);const s={},t=d.createContext(s);function i(e){const n=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);