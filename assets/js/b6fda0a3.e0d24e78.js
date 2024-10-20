/*! For license information please see b6fda0a3.e0d24e78.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[192498],{349542:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var s=n(474848),c=n(28453);const t={id:"plugin-kubernetes-react",title:"@backstage/plugin-kubernetes-react",description:"API Reference for @backstage/plugin-kubernetes-react"},d=void 0,i={id:"reference/plugin-kubernetes-react",title:"@backstage/plugin-kubernetes-react",description:"API Reference for @backstage/plugin-kubernetes-react",source:"@site/versioned_docs/version-stable/reference/plugin-kubernetes-react.md",sourceDirName:"reference",slug:"/reference/plugin-kubernetes-react",permalink:"/docs/reference/plugin-kubernetes-react",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/reference/plugin-kubernetes-react.md",tags:[],version:"stable",frontMatter:{id:"plugin-kubernetes-react",title:"@backstage/plugin-kubernetes-react",description:"API Reference for @backstage/plugin-kubernetes-react"}},l={},h=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function o(e){const r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react",children:(0,s.jsx)(r.code,{children:"@backstage/plugin-kubernetes-react"})})]}),"\n",(0,s.jsx)(r.p,{children:"Web library for the kubernetes-react plugin."}),"\n",(0,s.jsx)(r.h2,{id:"classes",children:"Classes"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Class"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.aksclusterlinksformatter",children:"AksClusterLinksFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.akskubernetesauthprovider",children:"AksKubernetesAuthProvider"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.eksclusterlinksformatter",children:"EksClusterLinksFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.gkeclusterlinksformatter",children:"GkeClusterLinksFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.googlekubernetesauthprovider",children:"GoogleKubernetesAuthProvider"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesauthproviders",children:"KubernetesAuthProviders"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesbackendclient",children:"KubernetesBackendClient"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesclusterlinkformatter",children:"KubernetesClusterLinkFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesproxyclient",children:"KubernetesProxyClient"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"A client for common requests through the proxy endpoint of the kubernetes backend plugin."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.oidckubernetesauthprovider",children:"OidcKubernetesAuthProvider"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.openshiftclusterlinksformatter",children:"OpenshiftClusterLinksFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.rancherclusterlinksformatter",children:"RancherClusterLinksFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.serversidekubernetesauthprovider",children:"ServerSideKubernetesAuthProvider"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"No-op KubernetesAuthProvider, authorization will be handled in the kubernetes-backend plugin"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.standardclusterlinksformatter",children:"StandardClusterLinksFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Function"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.cluster",children:"Cluster({ clusterObjects, podsWithErrors })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Component for rendering Kubernetes resources in a cluster"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.cronjobsaccordions",children:"CronJobsAccordions({})"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.customresources",children:"CustomResources({})"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.errorlist",children:"ErrorList({ podAndErrors })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Shows a list of errors found on a Pod"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.errorpanel",children:"ErrorPanel({ entityName, errorMessage, clustersWithErrors, })"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.errorreporting",children:"ErrorReporting({ detectedErrors, clusters, })"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.events",children:"Events({ involvedObjectName, namespace, clusterName, warningEventsOnly, })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Retrieves and shows Kubernetes events for the given object"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.eventscontent",children:"EventsContent({ events, warningEventsOnly, })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Shows given Kubernetes events"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.getdefaultformatters",children:"getDefaultFormatters(deps)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.horizontalpodautoscalerdrawer",children:"HorizontalPodAutoscalerDrawer(props)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.ingressesaccordions",children:"IngressesAccordions({})"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.jobsaccordions",children:"JobsAccordions({ jobs })"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesdrawer",children:"KubernetesDrawer({ open, label, drawerContentsHeader, kubernetesObject, children, })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Button/Drawer component for Kubernetes Objects"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawer",children:"KubernetesStructuredMetadataTableDrawer({ object, renderObject, kind, buttonVariant, expanded, children, })"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.linkerrorpanel",children:"LinkErrorPanel({ cluster, errorMessage, })"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.manifestyaml",children:"ManifestYaml({ object })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Renders a Kubernetes object as a YAML code snippet"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.pendingpodcontent",children:"PendingPodContent({ pod })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Shows details about pod's conditions as it starts"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.poddrawer",children:"PodDrawer({ podAndErrors, open })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"A Drawer for Kubernetes Pods"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podexecterminal",children:"PodExecTerminal(props)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsxs)(r.p,{children:["Executes a ",(0,s.jsx)(r.code,{children:"/bin/sh"})," process in the given pod's container and opens a terminal connected to it"]}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podexecterminaldialog",children:"PodExecTerminalDialog(props)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Opens a terminal connected to the given pod's container in a dialog"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podlogsdialog",children:"PodLogsDialog({ containerScope })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Shows the logs for the given pod in a Dialog"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podstable",children:"PodsTable({ pods, extraColumns })"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.resourceutilization",children:"ResourceUtilization({ compressed, title, usage, total, totalFormatted, })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Context for Pod Metrics"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.servicesaccordions",children:"ServicesAccordions({})"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.usecustomresources",children:"useCustomResources(entity, customResourceMatchers, intervalMs)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Retrieves the provided custom resources related to the provided entity, refreshes at an interval."}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.useevents",children:"useEvents({ involvedObjectName, namespace, clusterName, })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Retrieves the events for the given object"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.usekubernetesobjects",children:"useKubernetesObjects(entity, intervalMs)"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.usematchingerrors",children:"useMatchingErrors(matcher)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Find errors which match the resource"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.usepodlogs",children:"usePodLogs({ containerScope, previous })"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Retrieves the logs for the given pod"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.usepodmetrics",children:"usePodMetrics(clusterName, matcher)"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Find metrics matching the provided pod"}),"\n"]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Interface"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.clusterlinksformatter",children:"ClusterLinksFormatter"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.clusterlinksformatteroptions",children:"ClusterLinksFormatterOptions"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.containercardprops",children:"ContainerCardProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for ContainerCard"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.containerscope",children:"ContainerScope"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Contains the details needed to make a log request to Kubernetes"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.customresourcesprops",children:"CustomResourcesProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.errorlistprops",children:"ErrorListProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for ErrorList"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.eventscontentprops",children:"EventsContentProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for Events"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.eventsoptions",children:"EventsOptions"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Arguments for useEvents"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.eventsprops",children:"EventsProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for Events"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.fixdialogprops",children:"FixDialogProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for FixDialog"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesapi",children:"KubernetesApi"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesauthprovider",children:"KubernetesAuthProvider"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesauthprovidersapi",children:"KubernetesAuthProvidersApi"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesclusterlinkformatterapi",children:"KubernetesClusterLinkFormatterApi"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesdrawerable",children:"KubernetesDrawerable"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesdrawerprops",children:"KubernetesDrawerProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props of KubernetesDrawer"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesobject",children:"KubernetesObject"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"The type of object that can be represented by the Drawer"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesobjects",children:"KubernetesObjects"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesproxyapi",children:"KubernetesProxyApi"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesstructuredmetadatatabledrawerprops",children:"KubernetesStructuredMetadataTableDrawerProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.manifestyamlprops",children:"ManifestYamlProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props of ManifestYaml"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.pendingpodcontentprops",children:"PendingPodContentProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for PendingPodContent"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podanderrors",children:"PodAndErrors"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Wraps a pod with the associated detected errors and cluster"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.poddrawerprops",children:"PodDrawerProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for PodDrawer"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podexecterminalprops",children:"PodExecTerminalProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props drilled down to the PodExecTerminal component"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podlogsdialogprops",children:"PodLogsDialogProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for PodLogsDialog"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podlogsoptions",children:"PodLogsOptions"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Arguments for usePodLogs"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podlogsprops",children:"PodLogsProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for PodLogs"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podscope",children:"PodScope"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Contains the details needed to make a log request to Kubernetes, except the container name"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.resourceutilizationprops",children:"ResourceUtilizationProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Context for Pod Metrics"}),"\n"]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"variables",children:"Variables"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Variable"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.clustercontext",children:"ClusterContext"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.containercard",children:"ContainerCard"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Shows details about a container within a pod"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.default_formatter_name",children:"DEFAULT_FORMATTER_NAME"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.detectederrorscontext",children:"DetectedErrorsContext"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Context for detected errors"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.fixdialog",children:"FixDialog"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"A dialog for fixing detected Kubernetes errors"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.groupedresponsescontext",children:"GroupedResponsesContext"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesapiref",children:"kubernetesApiRef"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesauthprovidersapiref",children:"kubernetesAuthProvidersApiRef"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesclusterlinkformatterapiref",children:"kubernetesClusterLinkFormatterApiRef"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.kubernetesproxyapiref",children:"kubernetesProxyApiRef"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podlogs",children:"PodLogs"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Shows the logs for the given pod"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podmetricscontext",children:"PodMetricsContext"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Context for Pod Metrics"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podnameswitherrorscontext",children:"PodNamesWithErrorsContext"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podnameswithmetricscontext",children:"PodNamesWithMetricsContext"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.ready_columns",children:"READY_COLUMNS"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.resource_columns",children:"RESOURCE_COLUMNS"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Type Alias"}),"\n"]}),(0,s.jsxs)(r.th,{children:["\n",(0,s.jsx)(r.p,{children:"Description"}),"\n"]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.clusterprops",children:"ClusterProps"})}),"\n"]}),(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:"Props for Cluster"}),"\n"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.cronjobsaccordionsprops",children:"CronJobsAccordionsProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.errormatcher",children:"ErrorMatcher"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.errorpanelprops",children:"ErrorPanelProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.errorreportingprops",children:"ErrorReportingProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.formatclusterlinkoptions",children:"FormatClusterLinkOptions"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.ingressesaccordionsprops",children:"IngressesAccordionsProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.jobsaccordionsprops",children:"JobsAccordionsProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.linkerrorpanelprops",children:"LinkErrorPanelProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podcolumns",children:"PodColumns"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podmetricsmatcher",children:"PodMetricsMatcher"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.podstablesprops",children:"PodsTablesProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/reference/plugin-kubernetes-react.servicesaccordionsprops",children:"ServicesAccordionsProps"})}),"\n"]}),(0,s.jsx)(r.td,{children:"\n"})]})]})]})]})}function x(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},221020:(e,r,n)=>{var s=n(296540),c=Symbol.for("react.element"),t=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,n){var s,t={},h=null,o=null;for(s in void 0!==n&&(h=""+n),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(o=r.ref),r)d.call(r,s)&&!l.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:c,type:e,key:h,ref:o,props:t,_owner:i.current}}r.Fragment=t,r.jsx=h,r.jsxs=h},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var s=n(296540);const c={},t=s.createContext(c);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);