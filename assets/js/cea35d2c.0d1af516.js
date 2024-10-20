/*! For license information please see cea35d2c.0d1af516.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[962121],{779541:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>i,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=t(474848),o=t(28453);const s={id:"plugin-search-react.searchresultgrouplayoutprops",title:"SearchResultGroupLayoutProps",description:"API reference for SearchResultGroupLayoutProps"},c=void 0,a={id:"reference/plugin-search-react.searchresultgrouplayoutprops",title:"SearchResultGroupLayoutProps",description:"API reference for SearchResultGroupLayoutProps",source:"@site/../docs/reference/plugin-search-react.searchresultgrouplayoutprops.md",sourceDirName:"reference",slug:"/reference/plugin-search-react.searchresultgrouplayoutprops",permalink:"/docs/next/reference/plugin-search-react.searchresultgrouplayoutprops",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-search-react.searchresultgrouplayoutprops.md",tags:[],version:"current",frontMatter:{id:"plugin-search-react.searchresultgrouplayoutprops",title:"SearchResultGroupLayoutProps",description:"API reference for SearchResultGroupLayoutProps"}},l={},u=[];function p(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/next/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-search-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-search-react.searchresultgrouplayoutprops",children:(0,n.jsx)(r.code,{children:"SearchResultGroupLayoutProps"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Props for ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-search-react.searchresultgrouplayout",children:"SearchResultGroupLayout()"})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type SearchResultGroupLayoutProps<FilterOption> = ListProps & {\n    error?: Error;\n    loading?: boolean;\n    icon: JSX.Element;\n    title: ReactNode;\n    titleProps?: Partial<TypographyProps>;\n    link?: ReactNode;\n    linkProps?: Partial<LinkProps>;\n    filterOptions?: FilterOption[];\n    renderFilterOption?: (value: FilterOption, index: number, array: FilterOption[]) => JSX.Element | null;\n    filterFields?: string[];\n    renderFilterField?: (key: string) => JSX.Element | null;\n    resultItems?: SearchResult[];\n    renderResultItem?: (value: SearchResult, index: number, array: SearchResult[]) => JSX.Element | null;\n    noResultsComponent?: ReactNode;\n    disableRenderingWithNoResults?: boolean;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/next/reference/core-components.linkprops",children:"LinkProps"}),", ",(0,n.jsx)(r.a,{href:"/docs/next/reference/plugin-search-common.searchresult",children:"SearchResult"})]})]})}function i(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,s={},u=null,p=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,n)&&!l.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:u,ref:p,props:s,_owner:a.current}}r.Fragment=s,r.jsx=u,r.jsxs=u},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>a});var n=t(296540);const o={},s=n.createContext(o);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);