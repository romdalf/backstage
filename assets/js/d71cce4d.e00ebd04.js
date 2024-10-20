/*! For license information please see d71cce4d.e00ebd04.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[561056],{557623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(474848),c=n(28453);const s={id:"backend-test-utils.mockdirectory.content",title:"MockDirectory.content()",description:"API reference for MockDirectory.content()"},o=void 0,i={id:"reference/backend-test-utils.mockdirectory.content",title:"MockDirectory.content()",description:"API reference for MockDirectory.content()",source:"@site/versioned_docs/version-stable/reference/backend-test-utils.mockdirectory.content.md",sourceDirName:"reference",slug:"/reference/backend-test-utils.mockdirectory.content",permalink:"/docs/reference/backend-test-utils.mockdirectory.content",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/backend-test-utils.mockdirectory.content.md",tags:[],version:"stable",frontMatter:{id:"backend-test-utils.mockdirectory.content",title:"MockDirectory.content()",description:"API reference for MockDirectory.content()"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils",children:(0,r.jsx)(t.code,{children:"@backstage/backend-test-utils"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockdirectory",children:(0,r.jsx)(t.code,{children:"MockDirectory"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockdirectory.content",children:(0,r.jsx)(t.code,{children:"content"})})]}),"\n",(0,r.jsx)(t.p,{children:"Reads the content of the mock directory."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"content(options?: MockDirectoryContentOptions): MockDirectoryContent | undefined;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Parameter"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Type"}),"\n"]}),(0,r.jsxs)(t.th,{children:["\n",(0,r.jsx)(t.p,{children:"Description"}),"\n"]})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:"options"}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockdirectorycontentoptions",children:"MockDirectoryContentOptions"})}),"\n"]}),(0,r.jsxs)(t.td,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"(Optional)"})}),"\n"]})]})})]}),"\n**Returns:**\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/backend-test-utils.mockdirectorycontent",children:"MockDirectoryContent"})," | undefined"]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(t.p,{children:"Text files will be returned as strings, while binary files will be returned as buffers. By default the file extension is used to determine whether a file should be read as text."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"expect(mockDir.content()).toEqual({\n  'test.txt': 'content',\n  'sub-dir': {\n    'file.txt': 'content',\n    'nested-dir': {\n      'file.txt': 'content',\n    },\n  },\n  'empty-dir': {},\n  'binary-file': Buffer.from([0, 1, 2]),\n});\n"})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,r)&&!d.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:c,type:e,key:l,ref:a,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(296540);const c={},s=r.createContext(c);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);