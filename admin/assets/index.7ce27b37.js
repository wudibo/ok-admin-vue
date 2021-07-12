import{d as e,u as t,c as a,r as o,o as l,a as n,w as r,b as s,N as i,e as c,E as d,f as m,g as u,h as p,i as h,j as f,k as v,l as y,m as g,p as C,n as b,q as _,s as k,v as w,t as P,x as E,C as L,F as S,y as T,S as I,z as x,A,B as N,D as O,G as D,H as z,I as H,J as M,L as R,K as V,M as G,O as F,P as K,Q as j,R as U,T as W,U as B,V as $,W as q,X as Y,Y as J,Z as Q,_ as X,$ as Z,a0 as ee,a1 as te,a2 as ae,a3 as oe,a4 as le,a5 as ne,a6 as re,a7 as se,a8 as ie,a9 as ce,aa as de,ab as me,ac as ue,ad as pe,ae as he,af as fe,ag as ve,ah as ye,ai as ge,aj as Ce,ak as be,al as _e,am as ke,an as we,ao as Pe,ap as Ee,aq as Le,ar as Se}from"./vendor.c1018e31.js";var Te=e({setup(e){const d=t(),m=a((()=>({common:d.getters["theme/appThemeGetter"]})));return(e,t)=>{const a=o("router-view");return l(),n(s(i),{"theme-overrides":s(m)},{default:r((()=>[c(a)])),_:1},8,["theme-overrides"])}}});let Ie;const xe={},Ae=function(e,t){if(!t)return e();if(void 0===Ie){const e=document.createElement("link").relList;Ie=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in xe)return;xe[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":Ie,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))};function Ne(t){return()=>new Promise((a=>{t().then((t=>{const o=t.default.name+"$"+t.default.__hmrId,l=e({name:o,render:function(){return n("div",null,[c(t.default)])}});a(l)}))}))}const Oe=function(e){return c("path",{d:e,fill:"currentColor"},null,-1)};function De(e){return n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},[Oe(e)])}var ze=e({name:"MenuUnfoldOutlined",render:()=>De("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z")});var He=e({name:"MenuUnfoldOutlined",render:()=>De("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z")});const Me=function(e){return c("path",{d:e,fill:"currentColor"},null,-1)};function Re(e){return n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[Me(e)])}var Ve=e({name:"RefreshFilled",render:()=>Re("M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z")});e({name:"StarRound",render:()=>Re("M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z")});var Ge=e({name:"StarBorderRound",render:()=>Re("M19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z")});const Fe=function(e,t=300){t=t||300;let a=0;return function(){let o=Date.now();(a<1||o-a>=t)&&(e.apply(this,arguments),a=o)}},Ke=function(e){e(globalThis.innerWidth),globalThis.onresize=function(e,t=300){let a=null;return function(){a&&clearTimeout(a),a=setTimeout(function(t){e.apply(this,t)}.bind(this,arguments),t)}}((t=>{e(t.target.innerWidth)}))};var je=e({name:"SetNavigation",components:{EllipsisVertical:d,Ellipse:m,NTooltip:u,NDrawer:p,NDrawerContent:h,NGrid:f,NGi:v,NIcon:y,NDivider:g},setup:()=>({layConfig:t().getters["admin/layConfigGetter"],navThemeDark:"/ok-admin-vue/assets/nav-theme-dark.d93c9dff.svg",navThemeLight:"/ok-admin-vue/assets/nav-theme-light.f039dce7.svg",headerThemeDark:"/ok-admin-vue/assets/header-theme-dark.932bb39b.svg"})});const Ue=P();C("data-v-4d7459cf");const We={class:"padding-bottom-10"},Be=E("导航栏风格"),$e=E(" 暗色侧边栏 "),qe={class:"checked"},Ye=E(" 亮色侧边栏 "),Je={class:"checked"},Qe=E(" 亮色顶栏 "),Xe={class:"checked"},Ze=E(" 暗色顶栏 "),et={class:"checked"};b();const tt=Ue(((e,t,a,r,s,i)=>{const d=o("n-divider"),m=o("n-tooltip"),u=o("Ellipse"),p=o("n-icon"),h=o("n-gi"),f=o("n-grid");return l(),n("div",We,[c(d,null,{default:Ue((()=>[Be])),_:1}),_(" 左边栏主题 "),c(f,{class:"sidebar-thenme","x-gap":"12",cols:3},{default:Ue((()=>[_(" 左边栏暗色主题 "),c(h,{class:"thenme"},{default:Ue((()=>[c(m,{trigger:"hover"},{trigger:Ue((()=>[c("div",{onClick:t[1]||(t[1]=t=>e.layConfig.sidebarInverted=!0),class:"thenme-checkbox pointer"},[c("img",{src:e.navThemeDark,alt:"navThemeDark"},null,8,["src"])])])),default:Ue((()=>[$e])),_:1}),k(c("div",qe,[c(p,{color:"#18a058",size:"10"},{default:Ue((()=>[c(u)])),_:1})],512),[[w,e.layConfig.sidebarInverted]])])),_:1}),_(" 左边栏亮色主题 "),c(h,{class:"thenme"},{default:Ue((()=>[c(m,{trigger:"hover"},{trigger:Ue((()=>[c("div",{onClick:t[2]||(t[2]=t=>e.layConfig.sidebarInverted=!1),class:"thenme-checkbox pointer"},[c("img",{src:e.navThemeLight,alt:"navThemeLight"},null,8,["src"])])])),default:Ue((()=>[Ye])),_:1}),k(c("div",Je,[c(p,{color:"#18a058",size:"10"},{default:Ue((()=>[c(u)])),_:1})],512),[[w,!e.layConfig.sidebarInverted]])])),_:1})])),_:1}),_(" 头部主题 "),c(f,{class:"header-thenme","x-gap":"12",cols:3},{default:Ue((()=>[_(" 顶栏亮色主题 "),c(h,{class:"thenme"},{default:Ue((()=>[c(m,{trigger:"hover"},{trigger:Ue((()=>[c("div",{onClick:t[3]||(t[3]=t=>e.layConfig.headerInverted=!1),class:"thenme-checkbox pointer"},[c("img",{src:e.navThemeDark,alt:"navThemeDark"},null,8,["src"])])])),default:Ue((()=>[Qe])),_:1}),k(c("div",Xe,[c(p,{color:"#18a058",size:"10"},{default:Ue((()=>[c(u)])),_:1})],512),[[w,!e.layConfig.headerInverted]])])),_:1}),_(" 顶栏暗色主题 "),c(h,{class:"thenme"},{default:Ue((()=>[c(m,{trigger:"hover"},{trigger:Ue((()=>[c("div",{onClick:t[4]||(t[4]=t=>e.layConfig.headerInverted=!0),class:"thenme-checkbox pointer"},[c("img",{src:e.headerThemeDark,alt:"headerThemeDark"},null,8,["src"])])])),default:Ue((()=>[Ze])),_:1}),k(c("div",et,[c(p,{color:"#18a058",size:"10"},{default:Ue((()=>[c(u)])),_:1})],512),[[w,e.layConfig.headerInverted]])])),_:1})])),_:1})])}));je.render=tt,je.__scopeId="data-v-4d7459cf";var at=e({name:"SetTheme",components:{NGrid:f,NGi:v,NIcon:y,NDivider:g,CheckmarkSharp:L},setup(){const e=t();return{store:e,handleTheme(t){e.commit("theme/SET_APPTHEME",t)}}}});const ot=P();C("data-v-79382ade");const lt={class:"padding-bottom-10"},nt=E("系统主题");b();const rt=ot(((e,t,a,r,s,i)=>{const d=o("n-divider"),m=o("CheckmarkSharp"),u=o("n-icon"),p=o("n-gi"),h=o("n-grid");return l(),n("div",lt,[c(d,null,{default:ot((()=>[nt])),_:1}),c(h,{"x-gap":4,"y-gap":4,cols:8},{default:ot((()=>[(l(!0),n(S,null,T(e.store.state.theme.appThemeList,(t=>(l(),n(p,{key:t.primaryColor},{default:ot((()=>[c("div",{onClick:a=>e.handleTheme(t),class:"item",style:{backgroundColor:t.primaryColor}},[k(c(u,null,{default:ot((()=>[c(m)])),_:2},1536),[[w,t===e.store.state.theme.appTheme]])],12,["onClick"])])),_:2},1024)))),128))])),_:1})])}));at.render=rt,at.__scopeId="data-v-79382ade";var st=e({name:"LaySetting",components:{NDrawer:p,NDrawerContent:h,NScrollbar:I,SetTheme:at,SetNavigation:je,SettingsOutline:x},setup:()=>({show:A(!1)})});const it=P();C("data-v-d77f74aa");const ct={class:"setting-box"};b();const dt=it(((e,t,a,r,s,i)=>{const d=o("settings-outline"),m=o("n-icon"),u=o("set-theme"),p=o("set-navigation"),h=o("n-scrollbar"),f=o("n-drawer-content"),v=o("n-drawer");return l(),n(S,null,[c(m,{class:"setting-btn lay-hover",onClick:t[1]||(t[1]=t=>e.show=!0),size:"20"},{default:it((()=>[c(d)])),_:1}),c(v,{show:e.show,"onUpdate:show":t[2]||(t[2]=t=>e.show=t),width:256},{default:it((()=>[c(f,{"body-style":{overflow:"hidden"},"body-content-style":{padding:0},title:"系统配置"},{default:it((()=>[c(h,{class:"set-scrollbar",scrollable:!0},{default:it((()=>[c("div",ct,[c(u),c(p)])])),_:1})])),_:1})])),_:1},8,["show"])],64)}));st.render=dt,st.__scopeId="data-v-d77f74aa";var mt={name:"FullScreen",components:{NIcon:y,ExpandOutline:N,ContractOutline:O},setup(){const e=A(!1);return{isFullScreen:e,handleScreen(){let t="",a="";e.value?(t=document,a=t.cancelFullScreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.exitFullScreen):(t=document.documentElement,a=t.requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullScreen),a&&(e.value=!e.value,a.call(t))}}}};mt.render=function(e,t,a,s,i,d){const m=o("contract-outline"),u=o("expand-outline"),p=o("n-icon");return l(),n(p,{class:"lay-hover",onClick:s.handleScreen,size:"20"},{default:r((()=>[k(c(m,null,null,512),[[w,s.isFullScreen]]),k(c(u,null,null,512),[[w,!s.isFullScreen]])])),_:1},8,["onClick"])};var ut=e({name:"LayHeader",components:{NGi:v,NGrid:f,NIcon:y,NBreadcrumb:D,NBreadcrumbItem:z,NDropdown:H,FullScreen:mt,LaySetting:st,RefreshFilled:Ve,GlobeOutline:M,LockClosedOutline:R,MenuFoldOutlined:ze,MenuUnfoldOutlined:He},setup(e,a){const o=t(),l=V();let n=A([]);const r=G("mobileOptions"),s=o.getters["admin/layConfigGetter"];return F((()=>{n.value=[];const e=l.matched;for(let t=0;t<e.length;t++)n.value.push(e[t].meta.title)})),{matcheds:n,layConfig:s,optionsISO:[{label:"简体中文",key:"zh"},{label:"English",key:"en"}],handleSelect:e=>{console.log(e)},handleRefresh:Fe((()=>{s.refresh=!0,setTimeout((()=>{s.refresh=!1}),10)})),hanldeMenu(){r.isMobile?r.showMobileSlidebar=!0:s.collapsed=!0}}}});const pt=P();C("data-v-57f84128");const ht={class:"lay-header"},ft={class:"header-left"},vt={class:"header-refresh"},yt={class:"header-right"},gt={class:"flex-center padding-lr-10"},Ct={class:"flex-center padding-lr-10"},bt={class:"flex-center padding-lr-10"},_t={class:"flex-center padding-left-10"};b();const kt=pt(((e,t,a,r,s,i)=>{const d=o("menu-fold-outlined"),m=o("menu-unfold-outlined"),u=o("n-icon"),p=o("refresh-filled"),h=o("n-breadcrumb-item"),f=o("n-breadcrumb"),v=o("n-gi"),y=o("lock-closed-outline"),g=o("globe-outline"),C=o("n-dropdown"),b=o("full-screen"),P=o("lay-setting"),L=o("n-grid");return l(),n("div",ht,[c(L,{"x-gap":"2",cols:"2"},{default:pt((()=>[_(" left "),c(v,null,{default:pt((()=>[c("div",ft,[c(u,{class:"lay-hover",title:"菜单切换",size:"20"},{default:pt((()=>[k(c(d,{onClick:e.hanldeMenu},null,8,["onClick"]),[[w,!e.layConfig.collapsed]]),k(c(m,{onClick:t[1]||(t[1]=t=>e.layConfig.collapsed=!1)},null,512),[[w,e.layConfig.collapsed]])])),_:1}),c("div",vt,[c(u,{onClick:e.handleRefresh,title:"刷新",class:"lay-hover",size:"20"},{default:pt((()=>[c(p)])),_:1},8,["onClick"])]),_(" 面包屑 "),c(f,{class:"xs-hidden"},{default:pt((()=>[(l(!0),n(S,null,T(e.matcheds,(e=>(l(),n(h,{key:e},{default:pt((()=>[E(K(e),1)])),_:2},1024)))),128))])),_:1})])])),_:1}),_(" right "),c(v,{suffix:""},{default:pt((()=>[c("div",yt,[c("div",gt,[c(u,{title:"锁屏",class:"lay-hover",size:"20"},{default:pt((()=>[c(y)])),_:1})]),c("div",Ct,[c(C,{trigger:"hover",onSelect:e.handleSelect,options:e.optionsISO},{default:pt((()=>[c(u,{title:"语言",class:"lay-hover",size:"20"},{default:pt((()=>[c(g)])),_:1})])),_:1},8,["onSelect","options"])]),c("div",bt,[c(b)]),c("div",_t,[c(P)])])])),_:1})])),_:1})])}));ut.render=kt,ut.__scopeId="data-v-57f84128";var wt="/ok-admin-vue/assets/head.c9c18204.png",Pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wt}),Et=e({name:"LayDrawer",props:{sliderWidth:{type:Number,default:256}},components:{NDrawer:p},setup(){const e=t().getters["admin/layConfigGetter"],a=G("mobileOptions");return Ke((t=>{t<=768?(a.showMobileSlidebar=!1,a.isMobile=!0,e.collapsed=!1):a.isMobile=!1})),{layConfig:e,mobileOptions:a}}});Et.render=function(e,t,a,s,i,c){const d=o("n-drawer");return l(),n(S,null,[e.mobileOptions.isMobile?(l(),n(d,{key:0,class:"lay-drawer-slider",show:e.mobileOptions.showMobileSlidebar,"onUpdate:show":t[1]||(t[1]=t=>e.mobileOptions.showMobileSlidebar=t),style:{backgroundColor:e.layConfig.sidebarInverted?"#001428":""},"native-scrollbar":!1,width:e.sliderWidth,placement:"left"},{default:r((()=>[j(e.$slots,"default")])),_:3},8,["show","style","width"])):_("v-if",!0),e.mobileOptions.isMobile?_("v-if",!0):j(e.$slots,"default",{key:1})],64)};let Lt=[];function St(e,t,a){if(e.meta&&e.meta.hidden)return t;const o=(l=a,n=e.path,/^\//.test(n)?n:/\/$/.test(l)?l+n:n?l+"/"+n:l);var l,n;const r=e.meta?e.meta.title:e.name;var s;return t={label:r,key:o},e.meta&&e.meta.icon&&(t.icon=(s=e.meta.icon,()=>U(y,null,{default:()=>U(s)}))),e.children&&e.children.length&&(t.children=[],e.children.forEach((e=>{var a,l;(null==(a=e.meta)?void 0:a.hidden)||null==(l=t.children)||l.push(St(e,{},o))}))),t}var Tt=e({name:"LaySidebar",components:{LayDrawer:Et,NLayoutSider:W,NImage:B,NMenu:$,NSpace:q,NSwitch:Y},setup(e,a){const o=function(){const e=ea.reduce(((e,t)=>(t.component&&"Layout"===t.component.name&&e.push(t),e)),[]);return Lt=e.reduce(((e,t)=>(t.meta&&t.meta.hidden||(t.children&&1===t.children.length?e.push(St(t.children[0],{},t.path)):t.children&&t.children.length>1&&e.push(St(t,{},t.path))),e)),[]),Lt}(),l=t(),n=J(),r=V(),s=G("mobileOptions"),i=l.getters["admin/layConfigGetter"],c=A(!0),d=Q({menuKey:"",menuKeys:[""]});return F((()=>{d.menuKey=r.fullPath,d.menuKeys=r.matched.map((e=>e.path))})),{menuConfig:d,layConfig:i,menuOptions:o,active:c,sliderWidth:256,getSrc:e=>({"../../assets/head.png":Pt}["../../assets/head.png"].default),handleUpdateValue:e=>{s.showMobileSlidebar=!1,n.push(e)}}}});const It=P();C("data-v-85e93892");const xt={class:"lay-sidebar"},At=c("img",{class:"img",alt:"logo",src:wt},null,-1);b();const Nt=It(((e,t,a,r,s,i)=>{const d=o("n-menu"),m=o("n-layout-sider"),u=o("lay-drawer");return l(),n(u,{show:e.active,"onUpdate:show":t[2]||(t[2]=t=>e.active=t),style:{backgroundColor:e.layConfig.sidebarInverted?"#001428":""},"native-scrollbar":!1,width:e.sliderWidth,placement:"left"},{default:It((()=>[c(m,{style:{minHeight:"100%",boxShadow:"2px 0 6px var(--border-color)"},width:e.sliderWidth,"native-scrollbar":!1,"collapse-mode":"width",collapsed:e.layConfig.collapsed,inverted:e.layConfig.sidebarInverted,"collapsed-width":64,bordered:""},{default:It((()=>[c("div",xt,[c("div",{class:["head",{"head-inverted":e.layConfig.sidebarInverted}]},[At],2),c(d,{inverted:e.layConfig.sidebarInverted,indent:22,"collapsed-width":64,"collapsed-icon-size":22,options:e.menuOptions,key:e.menuConfig.menuKey,"default-value":e.menuConfig.menuKey,"expanded-keys":e.menuConfig.menuKeys,"onUpdate:value":e.handleUpdateValue,"onUpdate:expandedKeys":t[1]||(t[1]=t=>e.menuConfig.menuKeys=t)},null,8,["inverted","options","default-value","expanded-keys","onUpdate:value"])])])),_:1},8,["style","width","collapsed","inverted"])])),_:1},8,["show","style","width"])}));Tt.render=Nt,Tt.__scopeId="data-v-85e93892";const Ot={primaryColor:"#18A058",primaryColorHover:"#36AD6A",primaryColorPressed:"#0C7A43"};var Dt={appTheme:Ot,appThemeList:{defaultColor:Ot,layuiColor:{primaryColor:"#009688",primaryColorHover:"#33aba0",primaryColorPressed:"#00877a"},antdColor:{primaryColor:"#1890ff",primaryColorHover:"#40a9ff",primaryColorPressed:"#096dd9",primaryColorDins:""},dustRedColor:{primaryColor:"#f5222d",primaryColorHover:"#ff4d4f",primaryColorPressed:"#cf1322"},volcanoColor:{primaryColor:"#ff7a45",primaryColorHover:"#ff4d4f",primaryColorPressed:"#d4380d"},sunsetOrangeColor:{primaryColor:"#fa8c16",primaryColorHover:"#ffa940",primaryColorPressed:"#d46b08"},calendulaGoldColor:{primaryColor:"#faad14",primaryColorHover:"#ffc53d",primaryColorPressed:"#d48806"},sunriseColor:{primaryColor:"#fadb14",primaryColorHover:"#ffec3d",primaryColorPressed:"#d4b106"},limeColor:{primaryColor:"#a0d911",primaryColorHover:"#bae637",primaryColorPressed:"#7cb305"},polarGreenColor:{primaryColor:"#52c41a",primaryColorHover:"#73d13d",primaryColorPressed:"#389e0d"},cyanColor:{primaryColor:"#13c2c2",primaryColorHover:"#36cfc9",primaryColorPressed:"#08979c"},geekBlueColor:{primaryColor:"#2f54eb",primaryColorHover:"#597ef7",primaryColorPressed:"#1d39c4"},goldenPurpleColor:{primaryColor:"#722ed1",primaryColorHover:"#9254de",primaryColorPressed:"#531dab"},magentaColor:{primaryColor:"#eb2f96",primaryColorHover:"#f759ab",primaryColorPressed:"#c41d7f"},blueColor:{primaryColor:"#2d8cf0",primaryColorHover:"#57a3f3",primaryColorPressed:"#297ed8"},pureBlueColor:{primaryColor:"#0960bd",primaryColorHover:"#3a80ca",primaryColorPressed:"#0856aa"},purpleColor:{primaryColor:"#536dfe",primaryColorHover:"#758afe",primaryColorPressed:"#4b62e5"},pinkColor:{primaryColor:"#ff5c93",primaryColorHover:"#ff7da9",primaryColorPressed:"#e65384"},orangeColor:{primaryColor:"#ee4f12",primaryColorHover:"#f17241",primaryColorPressed:"#d64710"},oceanColor:{primaryColor:"#0096c7",primaryColorHover:"#33abd2",primaryColorPressed:"#0087b3"},purpleBColor:{primaryColor:"#9c27b0",primaryColorHover:"#b052c0",primaryColorPressed:"#8c239e"},yellowColor:{primaryColor:"#ff9800",primaryColorHover:"#ffad33",primaryColorPressed:"#e68900"}}};var zt=Z({modules:{admin:{namespaced:!0,state:{keepAlives:[],layTags:[],layConfig:{sidebarInverted:!0,headerInverted:!1,collapsed:!1}},mutations:{SET_LAYTAGS:(e,t)=>{e.layTags=t},SET_LAYCONFIG:function(e,t){e.layConfig[t.key]=t.value},SET_LAYCONFIGS:(e,t)=>{e.layConfig=t},ADD_KEEPALIVES:(e,t)=>{e.keepAlives.indexOf(t)<0&&e.keepAlives.push(t)},DEL_KEEPALIVES:(e,t)=>{const a=e.keepAlives.indexOf(t);a>=0&&e.keepAlives.splice(a,1)}},actions:{},getters:{keepAlivesGetter:(e,t,a)=>e.keepAlives,layTagsGetter:(e,t,a)=>e.layTags,layConfigGetter:(e,t,a)=>e.layConfig}},theme:{namespaced:!0,state:{appTheme:Dt.appTheme,appThemeList:Dt.appThemeList},mutations:{SET_APPTHEME:(e,t)=>{e.appTheme=t}},actions:{},getters:{appThemeGetter:(e,t,a)=>e.appTheme,appThemeListGetter:(e,t,a)=>e.appThemeList}}},state:{current:5},mutations:{SET_CURRENT:(e,t)=>{e.current+=parseInt(t)}},actions:{}});const Ht=e=>U(y,null,{default:()=>U(e)}),Mt=[{label:"关闭左侧",key:"closeLeft",icon:()=>Ht(le)},{label:"关闭右侧",key:"closeRight",icon:()=>Ht(ee)},{label:"关闭其他",key:"closeOther",icon:()=>Ht(te)},{label:"关闭全部",key:"closeAll",icon:()=>Ht(ae)},{label:"关闭当前",key:"closeThis",icon:()=>Ht(oe)}];var Rt=e({name:"LayTag",inheritAttrs:!1,components:{NIcon:y,NButton:ne,NScrollbar:I,NDropdown:H,ChevronDownOutline:re,CloseSharp:se},setup(){const e=J(),a=V(),o=t();let l=Q([]);const n=A(),r=A();return function(e){const t=aa.currentRoute;ea.forEach(((t,a)=>{var o,l;(l=t).component&&"Layout"===l.component.name&&l.children&&l.children.length&&(null==(o=t.children)||o.forEach((a=>{if(a.meta&&a.meta.affix){const n=(o=t.path,l=a.path,/^\//.test(l)?l:/\/$/.test(o)?o+l:l?o+"/"+l:o),r="function"==typeof a.component?a.component():a;e.push({fullPath:n,name:r.name,meta:a.meta})}var o,l})))})),X(t,(t=>{const a=e.some((e=>e.fullPath===t.fullPath)),o=t.matched;if(!a&&o.length){const a=o[o.length-1].components.default;e.push({name:a.name,fullPath:t.fullPath,meta:t.meta})}}),{immediate:!0})}(l),ie((()=>{const e=n.value.containerRef;F((()=>{l.length,a.fullPath,ce((()=>{!function(e,t){const a=t.querySelector(".tag-active");if(!a)return;const o=e.offsetWidth;t.offsetWidth;const l=a.offsetWidth,n=e.scrollLeft-a.offsetLeft,r=o-l;if(e.scrollLeft>a.offsetLeft){const t=a.previousSibling;t&&1===t.nodeType?e.scrollLeft=a.offsetLeft-t.offsetWidth:e.scrollLeft=0}else Math.abs(n)>r&&(e.scrollLeft=a.offsetLeft)}(e,r.value)}))}))})),{tags:l,layTag:r,scrollbar:n,menuOptions:Mt,handleMenuSelect(e){!function(e,t){const a=aa.currentRoute.value,o=t.findIndex((e=>e.fullPath===a.fullPath));switch(e){case"closeLeft":let e=0;for(;t[e].fullPath!==a.fullPath;)if(t[e].fullPath===a.fullPath||t[e].meta.affix)e++;else{const[a]=t.splice(e,1);zt.commit("admin/DEL_KEEPALIVES",a.name)}break;case"closeRight":let l=o+1;for(;l<t.length&&t[l].fullPath!==a.fullPath;)if(t[l].fullPath===a.fullPath||t[l].meta.affix)l++;else{const[e]=t.splice(l,1);zt.commit("admin/DEL_KEEPALIVES",e.name)}break;case"closeOther":for(let o=0;o<t.length;o++)if(t[o].fullPath!==a.fullPath&&!t[o].meta.affix){const[e]=t.splice(o,1);zt.commit("admin/DEL_KEEPALIVES",e.name),o--}break;case"closeAll":for(let a=0;a<t.length;a++)if(!t[a].meta.affix){const[e]=t.splice(a,1);zt.commit("admin/DEL_KEEPALIVES",e.name),a--}t.find((e=>e.fullPath===a.fullPath))||aa.push(t[t.length-1].fullPath);break;case"closeThis":if(!t[o].meta.affix){0===o?aa.push(t[o+1].fullPath):aa.push(t[o-1].fullPath);const[e]=t.splice(o,1);zt.commit("admin/DEL_KEEPALIVES",e.name)}}}(e,l)},handleTagOpen(t){e.push(t)},handleTagClose(t){l[t].fullPath===a.fullPath&&(0===t?e.push(l[t+1].fullPath):e.push(l[t-1].fullPath));const[n]=l.splice(t,1);o.commit("admin/DEL_KEEPALIVES",n.name)},isAffix:e=>e.meta&&e.meta.affix}}});const Vt=P();C("data-v-16b98275");const Gt={class:"lay-tag-box"},Ft={class:"lay-tag",ref:"layTag"},Kt={class:"tag-cont"},jt={class:"lay-tag-menu"};b();const Ut=Vt(((e,t,a,r,s,i)=>{const d=o("close-sharp"),m=o("n-icon"),u=o("n-button"),p=o("n-scrollbar"),h=o("chevron-down-outline"),f=o("n-dropdown");return l(),n("div",Gt,[c(p,{style:{flex:"1"},ref:"scrollbar","vertical-rail-style":{bottom:0},scrollable:!0,"x-scrollable":!0},{default:Vt((()=>[c("div",Ft,[(l(!0),n(S,null,T(e.tags,((t,a)=>(l(),n("div",{class:["tag-item",t.fullPath===e.$route.fullPath?"tag-active":"default"],key:t.fullPath},[c("div",Kt,[c(u,{class:"tag-btn",onClick:a=>e.handleTagOpen(t.fullPath),type:t.fullPath===e.$route.fullPath?"primary":"default"},{default:Vt((()=>[c("span",null,K(t.meta.title),1),e.isAffix(t)?_("v-if",!0):(l(),n(m,{key:0,onClick:de((t=>e.handleTagClose(a)),["stop"]),class:"tag-close"},{default:Vt((()=>[c(d)])),_:2},1032,["onClick"]))])),_:2},1032,["onClick","type"])])],2)))),128))],512)])),_:1},512),c("div",jt,[c(f,{trigger:"hover",placement:"bottom-end",onSelect:e.handleMenuSelect,options:e.menuOptions},{default:Vt((()=>[c(u,{style:{width:"32px",height:"32px"}},{default:Vt((()=>[c(m,{size:18},{default:Vt((()=>[c(h)])),_:1})])),_:1})])),_:1},8,["onSelect","options"])])])}));Rt.render=Ut,Rt.__scopeId="data-v-16b98275";var Wt=e({name:"layMain",setup(){const e=V(),a=t(),o=a.getters["admin/keepAlivesGetter"];return X(e,(()=>{e.meta&&e.meta.keepAlive&&a.commit("admin/ADD_KEEPALIVES",e.matched[e.matched.length-1].components.default.name)}),{immediate:!0}),{keepAlives:o}}});const Bt=P();C("data-v-72f96558");const $t={class:"lay-main"};b();const qt=Bt(((e,t,a,r,s,i)=>{const d=o("router-view");return l(),n(d,null,{default:Bt((({Component:t,route:a})=>[c("div",$t,[c(me,{appear:"",name:a.meta.transition||"fade",mode:"out-in"},{default:Bt((()=>[e.keepAlives?(l(),n(ue,{key:0,include:e.keepAlives},[(l(),n(pe(t),{key:a.fullPath}))],1032,["include"])):(l(),n(pe(t),{key:a.fullPath}))])),_:2},1032,["name"])])])),_:1})}));Wt.render=qt,Wt.__scopeId="data-v-72f96558";var Yt=e({name:"Layout",components:{LayMain:Wt,LayTag:Rt,LaySidebar:Tt,LayHeader:ut,NLayout:he,NLayoutHeader:fe,NLayoutContent:ve,NLayoutSider:W},setup(e,a){const o=t(),l=A(!1),n=o.getters["admin/layConfigGetter"],r=Q({isMobile:!1,showMobileSlidebar:!1});return ye("mobileOptions",r),{routerShow:l,layConfig:n}}});Yt.render=function(e,t,a,s,i,d){const m=o("lay-sidebar"),u=o("lay-header"),p=o("n-layout-header"),h=o("lay-tag"),f=o("n-layout-content"),v=o("lay-main"),y=o("n-layout");return l(),n(y,{class:"layout-container","has-sider":""},{default:r((()=>[_("  侧边栏   "),c(m),c(y,{style:{height:"100%"}},{default:r((()=>[_("  头部   "),c(p,{position:"absolute",style:{height:"64px",overflow:"hidden"},"native-scrollbar":!1,inverted:e.layConfig.headerInverted,bordered:""},{default:r((()=>[c(u)])),_:1},8,["inverted"]),_(" tag栏 "),c(f,{position:"absolute",style:{height:"48px",top:"64px",left:"0",right:"0"}},{default:r((()=>[c(h)])),_:1}),_("   主内容区   "),c(f,{position:"absolute",style:{top:"112px",bottom:"0",background:"#f0f2f5"},"native-scrollbar":!1},{default:r((()=>[c(v)])),_:1})])),_:1})])),_:1})};const Jt={class:"iframe"};var Qt=e({props:{src:{type:String,default:"https://gitee.com/zhizous"}},setup:e=>(t,a)=>(l(),n("div",Jt,[c("iframe",{src:e.src,class:"iframe-view",frameborder:"0"},null,8,["src"])]))});const Xt=e=>({render:()=>c(Qt,{src:e})});var Zt={path:"/multi",component:Yt,meta:{title:"多级菜单",icon:ge},children:[{path:"menu-one",name:"menu-one",component:Xt("https://v3.cn.vuejs.org/"),meta:{title:"VUE3官网"}},{path:"menu-naive-ui",name:"menu-naive-ui",component:Xt("https://www.naiveui.com/zh-CN/os-theme"),meta:{title:"NaiveUI官网"}},{path:"menu-gitee",name:"menu-gitee",component:Xt("https://gitee.com/zhizous"),meta:{title:"码云地址"}},{path:"menu-three",name:"menu-three",component:Ce,meta:{title:"菜单项"},children:[{path:"menu-three-one",name:"menu-three-one",component:{render:()=>n("div",{},[c("span",{a:"asf"},"菜单3.1"),c("div",{},"有点搞头")])},meta:{title:"菜单3.1"}},{path:"menu-three-two",name:"menu-three-two",component:{render:()=>n("div",{},"菜单3.2")},meta:{title:"菜单3.2"}},{path:"menu-three-three",name:"menu-three-three",component:{render:()=>c("div",{},"菜单3.3")},meta:{title:"菜单3.3"}},{path:"menu-three-four",name:"menu-three-four",component:Ce,meta:{title:"菜单3.4"},children:[{path:"menu-three-four-one",name:"menu-three-four-one",component:{render:()=>n("div",{},[c("span",{a:"asf"},"菜单3.4.1"),c("div",{},"有点搞头")])},meta:{title:"菜单3.4.1"}},{path:"menu-three-four-two",name:"menu-three-four-two",component:{render:()=>n("div",{},"菜单3.4.2")},meta:{title:"菜单3.4.2"}},{path:"menu-three-four-three",name:"menu-three-four-three",component:{render:()=>c("div",{},"菜单3.4.3")},meta:{title:"菜单3.4.3"}}]}]}]};be.configure({showSpinner:!1});const ea=[{path:"/",component:Yt,redirect:"/home",children:[{path:"/home",name:"home",component:Ne((()=>Ae((()=>import("./home.1f681fdf.js")),["/ok-admin-vue/assets/home.1f681fdf.js","/ok-admin-vue/assets/home.3e9d0645.css","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"首页",keepAlive:!0,icon:Ge,affix:!0}}]},{path:"/control",component:Yt,children:[{path:"",name:"control",component:Ne((()=>Ae((()=>import("./control.e7301454.js")),["/ok-admin-vue/assets/control.e7301454.js","/ok-admin-vue/assets/control.13b6a059.css","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"控制台",keepAlive:!0,icon:Ge}}]},{path:"/user",component:Yt,children:[{path:"",name:"user",component:Ne((()=>Ae((()=>import("./user.c9e18373.js")),["/ok-admin-vue/assets/user.c9e18373.js","/ok-admin-vue/assets/user.7ed772d7.css","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"个人中心",icon:Ge}}]},{path:"/form",name:"form",component:Yt,redirect:"/form/basic-form",meta:{title:"表单",icon:we},children:[{path:"basic-form",name:"basic-form",component:Ne((()=>Ae((()=>import("./basic-form.d4c7ee99.js")),["/ok-admin-vue/assets/basic-form.d4c7ee99.js","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"基础表单",icon:Ge}},{path:"advanced-form",name:"advanced-form",component:Ne((()=>Ae((()=>import("./advanced-form.8e3f851a.js")),["/ok-admin-vue/assets/advanced-form.8e3f851a.js","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"高级表单"}},{path:"step-form",name:"step-form",component:Ne((()=>Ae((()=>import("./advanced-form.8e3f851a.js")),["/ok-admin-vue/assets/advanced-form.8e3f851a.js","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"分步表单"}},{path:"detail",name:"detail",component:Ne((()=>Ae((()=>import("./advanced-form.8e3f851a.js")),["/ok-admin-vue/assets/advanced-form.8e3f851a.js","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"表单详情"}}]},{path:"/exception",name:"exception",component:Yt,redirect:"/exception/404",meta:{title:"异常页",icon:Pe},children:[{path:"403",name:"403",component:Ne((()=>Ae((()=>import("./403.2c47748e.js")),["/ok-admin-vue/assets/403.2c47748e.js","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"403"}},{path:"404",name:"404",component:Ne((()=>Ae((()=>import("./404.3308936a.js")),["/ok-admin-vue/assets/404.3308936a.js","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"404"}},{path:"500",name:"500",component:Ne((()=>Ae((()=>import("./500.7a3a4cda.js")),["/ok-admin-vue/assets/500.7a3a4cda.js","/ok-admin-vue/assets/vendor.c1018e31.js"]))),meta:{title:"500"}}]},Zt],ta=[{path:"/login",name:"Login",component:()=>Ae((()=>import("./login.132e8fa1.js")),["/ok-admin-vue/assets/login.132e8fa1.js","/ok-admin-vue/assets/login.bdd03f8a.css","/ok-admin-vue/assets/vendor.c1018e31.js"]),meta:{title:"登录"}}],aa=_e({history:ke(),routes:ta.concat(ea),strict:!0,scrollBehavior:()=>({left:0,top:0})});var oa;(oa=aa).beforeEach((async(e,t,a)=>{be.start(),a()})),oa.afterEach(((e,t,a)=>{be.done()}));var la={install(e){e.component("NButton",ne),e.component("NIcon",y),e.component("NForm",Ee),e.component("NInput",Le),e.component("NImage",B)}};const na=Se(Te);na.use(la),na.use(zt),na.use(aa),na.mount("#app");export{Ae as _,wt as a};
