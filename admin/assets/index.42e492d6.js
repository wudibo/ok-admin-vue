import{d as e,a as t,N as a,b as n,r as o,c as r,w as l,e as s,f as i,o as c,g as d,h as u,i as m,j as h,E as p,C as f,k as v,v as y,l as g,u as b,m as C,R as k,n as _,p as S,q as w,P as T,s as E,t as P,x as L,y as x,z as D,A,B as I,D as z,F as O,G as M,M as N,S as H,H as R,I as V,J as G,K as j,L as B,O as K,Q as U,T as $,U as F,V as W,W as q,X as Y,Y as X,Z as J,_ as Q,$ as Z,a0 as ee,a1 as te,a2 as ae,a3 as ne,a4 as oe,a5 as re,a6 as le,a7 as se,a8 as ie,a9 as ce,aa as de,ab as ue,ac as me,ad as he,ae as pe,af as fe,ag as ve,ah as ye,ai as ge,aj as be,ak as Ce,al as ke,am as _e,an as Se,ao as we,ap as Te,aq as Ee,ar as Pe,as as Le,at as xe,au as De,av as Ae,aw as Ie,ax as ze,ay as Oe,az as Me,aA as Ne,aB as He,aC as Re,aD as Ve,aE as Ge,aF as je,aG as Be,aH as Ke,aI as Ue}from"./vendor.91668286.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const $e={primaryColor:"#1890ff",primaryColorHover:"#40a9ff",primaryColorPressed:"#096dd9",primaryColorDins:""},Fe={defaultColor:{primaryColor:"#18A058",primaryColorHover:"#36AD6A",primaryColorPressed:"#0C7A43"},layuiColor:{primaryColor:"#009688",primaryColorHover:"#33aba0",primaryColorPressed:"#00877a"},antdColor:$e,dustRedColor:{primaryColor:"#f5222d",primaryColorHover:"#ff4d4f",primaryColorPressed:"#cf1322"},volcanoColor:{primaryColor:"#ff7a45",primaryColorHover:"#ff4d4f",primaryColorPressed:"#d4380d"},sunsetOrangeColor:{primaryColor:"#fa8c16",primaryColorHover:"#ffa940",primaryColorPressed:"#d46b08"},calendulaGoldColor:{primaryColor:"#faad14",primaryColorHover:"#ffc53d",primaryColorPressed:"#d48806"},sunriseColor:{primaryColor:"#fadb14",primaryColorHover:"#ffec3d",primaryColorPressed:"#d4b106"},limeColor:{primaryColor:"#a0d911",primaryColorHover:"#bae637",primaryColorPressed:"#7cb305"},polarGreenColor:{primaryColor:"#52c41a",primaryColorHover:"#73d13d",primaryColorPressed:"#389e0d"},cyanColor:{primaryColor:"#13c2c2",primaryColorHover:"#36cfc9",primaryColorPressed:"#08979c"},geekBlueColor:{primaryColor:"#2f54eb",primaryColorHover:"#597ef7",primaryColorPressed:"#1d39c4"},goldenPurpleColor:{primaryColor:"#722ed1",primaryColorHover:"#9254de",primaryColorPressed:"#531dab"},magentaColor:{primaryColor:"#eb2f96",primaryColorHover:"#f759ab",primaryColorPressed:"#c41d7f"},blueColor:{primaryColor:"#2d8cf0",primaryColorHover:"#57a3f3",primaryColorPressed:"#297ed8"},pureBlueColor:{primaryColor:"#0960bd",primaryColorHover:"#3a80ca",primaryColorPressed:"#0856aa"},purpleColor:{primaryColor:"#536dfe",primaryColorHover:"#758afe",primaryColorPressed:"#4b62e5"},pinkColor:{primaryColor:"#ff5c93",primaryColorHover:"#ff7da9",primaryColorPressed:"#e65384"},orangeColor:{primaryColor:"#ee4f12",primaryColorHover:"#f17241",primaryColorPressed:"#d64710"},oceanColor:{primaryColor:"#0096c7",primaryColorHover:"#33abd2",primaryColorPressed:"#0087b3"},purpleBColor:{primaryColor:"#9c27b0",primaryColorHover:"#b052c0",primaryColorPressed:"#8c239e"},yellowColor:{primaryColor:"#ff9800",primaryColorHover:"#ffad33",primaryColorPressed:"#e68900"}};var We={isDarkTheme:!1,appTheme:$e,appThemeList:Fe},qe=e("themeStore",{state:()=>({isDarkTheme:We.isDarkTheme,appTheme:We.appTheme,appThemeList:We.appThemeList}),actions:{SET_APPTHEME(e){this.appTheme=e},SET_ISDARKTHEME(e){this.isDarkTheme=e}},getters:{isDarkThemeGetter:e=>e.isDarkTheme,appThemeGetter:e=>e.appTheme,appThemeListGetter(){return this.appThemeList}}}),Ye=t({name:"APP",components:{NConfigProvider:a,NLoadingBarProvider:n},setup:()=>{const e=qe(),t=o(null),a=r((()=>e.isDarkThemeGetter)),n=document.getElementsByTagName("body")[0];return l((()=>{const a=e.appThemeGetter;t.value={common:a},n.style.setProperty("--primary-color",a.primaryColor),n.style.setProperty("--primary-color-hover",a.primaryColorHover),n.style.setProperty("--primary-color-pressed",a.primaryColorPressed)})),{darkTheme:s,isDarkTheme:a,themeOverrides:t}}});Ye.render=function(e,t,a,n,o,r){const l=i("router-view"),s=i("NLoadingBarProvider"),h=i("NConfigProvider");return c(),d(h,{theme:e.isDarkTheme?e.darkTheme:null,"theme-overrides":e.themeOverrides},{default:u((()=>[m(s,null,{default:u((()=>[m(l)])),_:1})])),_:1},8,["theme","theme-overrides"])};const Xe={},Je=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/ok-admin-vue/${e}`)in Xe)return;Xe[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":"modulepreload",t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var Qe=e("adminStore",{state:()=>({keepAlives:[],layTags:[],layConfig:{sidebarInverted:!0,headerInverted:!1,collapsed:!1,tagShow:!0}}),actions:{SET_LAYTAGS(e){this.layTags=e},SET_LAYCONFIG:function(e){this.layConfig[e.key]=e.value},SET_LAYCONFIGS(e){this.layConfig=e},ADD_KEEPALIVES(e){this.keepAlives.indexOf(e)<0&&this.keepAlives.push(e)},DEL_KEEPALIVES(e){const t=this.keepAlives.indexOf(e);t>=0&&this.keepAlives.splice(t,1)}},getters:{keepAlivesGetter:e=>e.keepAlives,layTagsGetter:e=>e.layTags,layConfigGetter:e=>e.layConfig}});const Ze=function(e){return m("path",{d:e,fill:"currentColor"},null,-1)};function et(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[Ze(e)])}var tt=t({name:"LockClosed",render:()=>et("M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75zm-5.75 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5z")});t({name:"StarRound",render:()=>et("M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z")});t({name:"StarBorderRound",render:()=>et("M19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z")});var at=t({name:"ButtonFullScreen",props:{size:{type:[Number,String],default:18}},components:{NIcon:h,ExpandOutline:p,ContractOutline:f},setup(e){let t=o(!1);const a=()=>{let e="",a="";t.value?(e=document,a=e.cancelFullScreen||e.webkitCancelFullScreen||e.mozCancelFullScreen||e.exitFullScreen):(e=document.documentElement,a=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen),a&&(t.value=!t.value,a.call(e))};return()=>m("div",{title:"全屏切换",onClick:a,class:"flex-center btn-content lay-hover"},[m(i("n-icon"),{class:"lay-hover",size:e.size},{default:()=>[v(m(i("contract-outline"),null,null),[[y,t.value]]),v(m(i("expand-outline"),null,null),[[y,!t.value]])]})])}});const nt=function(e){return m("path",{d:e,fill:"currentColor"},null,-1)};function ot(e){return d("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},[nt(e)])}var rt=t({name:"MenuUnfoldOutlined",render:()=>ot("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z")});var lt=t({name:"MenuUnfoldOutlined",render:()=>ot("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z")}),st=t({name:"ButtonMenu",props:{size:{type:[Number,String],default:20}},setup(e){const t=Qe(),a=g("mobileOptions"),n=t.layConfigGetter;function o(){a.isMobile?a.showMobileSlidebar=!0:n.collapsed=!n.collapsed}return()=>m("div",{title:"菜单切换",onClick:o,class:"flex-center btn-content lay-hover"},[m(i("n-icon"),{size:e.size},{default:()=>[v(m(lt,null,null),[[y,n.collapsed]]),v(m(rt,null,null),[[y,!n.collapsed]])]})])}}),it=t({name:"ButtonMenu",props:{size:{type:[Number,String],default:18}},setup(e){const t=b(),a=C();let n="";function o(){n=n||t.matched[t.matched.length-1].instances.default,n.handleReload()}return a.afterEach((e=>{n=e.matched[e.matched.length-1].instances.default})),()=>m("div",{title:"刷新页面",onClick:o,class:"flex-center btn-content lay-hover"},[m(i("n-icon"),{class:"lay-hover",size:e.size},{default:()=>[m(k,null,null)]})])}}),ct=e("userStore",{state:()=>({testValue:1,userInfo:{userName:"admin",avatar:"https://portrait.gitee.com/uploads/avatars/user/442/1326874_zhizous_1615019143.png!avatar200"}}),actions:{SET_TESTVALUE(e){this.testValue=e},SET_USERNAME(e){this.userInfo.userName=e},SET_USERAVATAR(e){this.userInfo.avatar=e}},getters:{userInfoGetter:e=>e.userInfo,testValueGetter(){return this.testValue}}});const dt=e=>()=>w(h,null,{default:()=>w(e)});var ut=t({name:"UserMenu",setup(){const e=C(),t=qe(),a=ct();return{isDarkTheme:r((()=>t.isDarkThemeGetter)),userMenus:[{label:"个人中心",icon:dt(E),key:"user"},{type:"divider",key:"d1"},{label:"退出登录",key:"exit",icon:dt(T)}],userStore:a,handleSelect:t=>{console.log(t),"exit"===t&&e.replace("/login")}}},render:function(){const{userInfo:e}=this.userStore;return m(_,{trigger:"hover",onSelect:this.handleSelect,options:this.userMenus},{default:()=>[m("div",{class:"flex-center btn-content lay-hover "+(this.isDarkTheme?"dark-hover":"")},[m(S,{circle:!0,size:"small",src:e.avatar},null),m("div",{class:"padding-left-10"},[e.userName])])]})}}),mt="/ok-admin-vue/assets/nav-theme-dark.d93c9dff.svg",ht=t({name:"SetNavigation",setup:()=>({layConfig:Qe().layConfigGetter}),render:function(){return m("div",{class:"set-Navigation padding-bottom-10"},[m(P,null,{default:()=>[L("导航栏风格")]}),m(x,{class:"sidebar-thenme","x-gap":"12",cols:"3"},{default:()=>[m(D,{class:"thenme"},{default:()=>[m(A,{trigger:"hover"},{default:()=>[L("暗色侧边栏")],trigger:m("div",{onClick:()=>this.layConfig.sidebarInverted=!0,class:"thenme-checkbox pointer"},[m("img",{src:mt,alt:"navThemeDark"},null)])}),v(m("div",{class:"checked"},[m(h,{class:"checked-color",size:"10"},{default:()=>[m(I,null,null)]})]),[[y,this.layConfig.sidebarInverted]])]}),m(D,{class:"thenme"},{default:()=>[m(A,{trigger:"hover"},{default:()=>[L("亮色侧边栏")],trigger:m("div",{onClick:()=>this.layConfig.sidebarInverted=!1,class:"thenme-checkbox pointer"},[m("img",{src:"/ok-admin-vue/assets/nav-theme-light.f039dce7.svg",alt:"navThemeLight"},null)])}),v(m("div",{class:"checked"},[m(h,{class:"checked-color",size:"10"},{default:()=>[m(I,null,null)]})]),[[y,!this.layConfig.sidebarInverted]])]})]}),m(x,{class:"header-thenme","x-gap":"12",cols:"3"},{default:()=>[m(D,{class:"thenme"},{default:()=>[m(A,{trigger:"hover"},{default:()=>[L("亮色顶栏")],trigger:m("div",{onClick:()=>this.layConfig.headerInverted=!1,class:"thenme-checkbox pointer"},[m("img",{src:mt,alt:"navThemeDark"},null)])}),v(m("div",{class:"checked"},[m(h,{class:"checked-color",size:"10"},{default:()=>[m(I,null,null)]})]),[[y,!this.layConfig.headerInverted]])]}),m(D,{class:"thenme"},{default:()=>[m(A,{trigger:"hover"},{default:()=>[L("暗色顶栏")],trigger:m("div",{onClick:()=>this.layConfig.headerInverted=!0,class:"thenme-checkbox pointer"},[m("img",{src:"/ok-admin-vue/assets/header-theme-dark.932bb39b.svg",alt:"headerThemeDark"},null)])}),v(m("div",{class:"checked"},[m(h,{class:"checked-color",size:"10"},{default:()=>[m(I,null,null)]})]),[[y,this.layConfig.headerInverted]])]})]})])}});var pt=t({name:"SetTheme",setup(){const e=qe();return{themeStore:e,handleTheme(t){e.SET_APPTHEME(t)}}},render:function(){let e;const t=this.themeStore.appTheme,a=this.themeStore.appThemeList;return m("div",{class:"set-theme padding-bottom-10"},[m(P,null,{default:()=>[L("系统主题")]}),m(x,{"x-gap":4,"y-gap":4,cols:8},(n=e=Object.keys(a).map((e=>m(D,{key:e},{default:()=>[m("div",{class:"item",onClick:()=>this.handleTheme(a[e]),style:{backgroundColor:a[e].primaryColor}},[v(m(h,null,{default:()=>[m(z,null,null)]}),[[y,a[e].primaryColor===t.primaryColor]])])]}))),"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!O(n)?e:{default:()=>[e]}))]);var n}}),ft=t({name:"SetOther",setup:()=>({layConfig:Qe().layConfigGetter}),render:function(){return m("div",{class:"padding-bottom-10"},[m(P,null,{default:()=>[L("其他设置")]}),m("div",{class:"set-other"},[m("div",{class:"tit"},[L("开启多页标签")]),m(M,{value:this.layConfig.tagShow,"onUpdate:value":e=>this.layConfig.tagShow=e},null)])])}}),vt=t({name:"SetDark",setup(){const e=qe(),t=o(e.isDarkThemeGetter);return{isDarkTheme:t,handleDarkTheme(a){t.value=a,e.SET_ISDARKTHEME(a)}}},render:function(){return m("div",{class:"set-dark"},[m(M,{class:"set-dark-switch",value:this.isDarkTheme,"onUpdate:value":this.handleDarkTheme},{checked:()=>m(h,{class:"set-dark-icon"},{default:()=>[m(N,null,null)]}),unchecked:()=>m(h,{class:"set-dark-icon"},{default:()=>[m(H,null,null)]})})])}}),yt=t({name:"LaySetting",props:{size:{type:[Number,String],default:18}},components:{NDrawer:R,NDrawerContent:V,NScrollbar:G,SetDark:vt,SetTheme:pt,SetOther:ft,SetNavigation:ht}});j("data-v-245afb11");const gt={class:"setting-box"};B(),yt.render=function(e,t,a,n,o,r){const l=i("set-dark"),s=i("set-theme"),h=i("set-navigation"),p=i("set-other"),f=i("n-scrollbar"),v=i("n-drawer-content"),y=i("n-drawer");return c(),d(y,null,{default:u((()=>[m(v,{"body-style":{overflow:"hidden"},"body-content-style":{padding:0},title:"系统配置"},{default:u((()=>[m(f,{class:"set-scrollbar",scrollable:!0},{default:u((()=>[K("div",gt,[m(l),m(s),m(h),m(p)])])),_:1})])),_:1})])),_:1})},yt.__scopeId="data-v-245afb11";const bt=t({name:"LayHeader",components:{NGi:D,NGrid:x,NIcon:h,NBreadcrumb:U,NBreadcrumbItem:$,NDropdown:_,LaySetting:yt,GlobeOutline:F,SettingsOutline:W,UserMenu:ut,LockClosed:tt,ButtonMenu:st,ButtonRefresh:it,ButtonFullScreen:at},setup(){const e=qe(),t=b(),a=o(!1),n=r((()=>e.isDarkThemeGetter?"#101014":"#f8f8f9"));let s=o([]);return l((()=>{s.value=[];const e=t.matched;for(let t=0;t<e.length;t++)s.value.push(e[t].meta.title)})),{setShow:a,matcheds:s,hoverColor:n,optionsISO:[{label:"简体中文",key:"zh"},{label:"English",key:"en"}],handleSelect:e=>{console.log(e)}}}}),Ct=()=>{q((e=>({"331a6ea4":e.hoverColor})))},kt=bt.setup;bt.setup=kt?(e,t)=>(Ct(),kt(e,t)):Ct;j("data-v-f3f24a8c");const _t={class:"lay-header lay-select-none"},St={class:"header-left"},wt={class:"header-right"},Tt={title:"锁屏","xs-hidden":"",class:"flex-center btn-content lay-hover"},Et={title:"语言切换","xs-hidden":"",class:"flex-center btn-content lay-hover"};B(),bt.render=function(e,t,a,n,o,r){const l=i("button-menu"),s=i("button-refresh"),h=i("n-breadcrumb-item"),p=i("n-breadcrumb"),f=i("n-gi"),v=i("lock-closed"),y=i("n-icon"),g=i("button-full-screen"),b=i("globe-outline"),C=i("n-dropdown"),k=i("user-menu"),_=i("settings-outline"),S=i("lay-setting"),w=i("n-grid");return c(),Y("div",_t,[m(w,{"x-gap":"2",cols:"2"},{default:u((()=>[X(" left "),m(f,null,{default:u((()=>[K("div",St,[X(" 菜单切换 "),m(l),X(" 刷新页面 "),m(s),X(" 面包屑 "),m(p,{"sm-hidden":"","xs-hidden":""},{default:u((()=>[(c(!0),Y(J,null,Q(e.matcheds,(e=>(c(),d(h,{key:e},{default:u((()=>[L(Z(e),1)])),_:2},1024)))),128))])),_:1})])])),_:1}),X(" right "),m(f,{suffix:""},{default:u((()=>[K("div",wt,[X(" 锁屏 "),K("div",Tt,[m(y,{class:"lay-hover",size:"20"},{default:u((()=>[m(v)])),_:1})]),X(" 全屏按钮 "),m(g,{"xs-hidden":"",size:"18"}),X(" 语言切换 "),m(C,{trigger:"hover",onSelect:e.handleSelect,options:e.optionsISO},{default:u((()=>[K("div",Et,[m(y,{class:"lay-hover",size:"18"},{default:u((()=>[m(b)])),_:1})])])),_:1},8,["onSelect","options"]),X(" 用户菜单 "),m(k),X(" 系统设置 "),K("div",{onClick:t[1]||(t[1]=t=>e.setShow=!0),title:"系统设置",class:"flex-center btn-content lay-hover"},[m(y,{class:"setting-btn lay-hover",size:"18"},{default:u((()=>[m(_)])),_:1}),m(S,{show:e.setShow,"onUpdate:show":t[0]||(t[0]=t=>e.setShow=t)},null,8,["show"])])])])),_:1})])),_:1})])},bt.__scopeId="data-v-f3f24a8c";var Pt="/ok-admin-vue/assets/head.c9c18204.png",Lt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pt});const xt=function(e){e(window.innerWidth),window.onresize=function(e,t=300){let a=null;return function(){a&&clearTimeout(a),a=setTimeout(function(t){e.apply(this,t)}.bind(this,arguments),t)}}((t=>{e(t.target.innerWidth)}))},Dt=function(e){return!!/^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i.test(e)};let At=[];function It(e,t,a){if(e.meta&&e.meta.hidden)return a;const n=((l=e.meta)&&l.href&&Dt(l.href)?l.href:"")||(o=t,r=e.path,/^\//.test(r)?r:/\/$/.test(o)?o+r:r?o+"/"+r:o);var o,r,l;const s=e.meta?e.meta.title:e.name;var i;return a={label:s,key:n},e.meta&&e.meta.icon&&(a.icon=(i=e.meta.icon,()=>w(h,null,{default:()=>w(i)}))),e.children&&e.children.length&&(a.children=[],e.children.forEach((e=>{var t,o;if(!(null==(t=e.meta)?void 0:t.hidden)){const t=It(e,n);t&&(null==(o=null==a?void 0:a.children)||o.push(t))}})),0===a.children.length)?void 0:a}var zt=t({name:"LayDrawer",props:{width:{type:Number,default:256}},components:{NDrawer:R},setup(){const e=Qe().layConfigGetter,t=g("mobileOptions");return xt((a=>{a<=768?(t.showMobileSlidebar=!1,t.isMobile=!0,e.collapsed=!1):t.isMobile=!1})),{layConfig:e,mobileOptions:t}}});zt.render=function(e,t,a,n,o,r){const l=i("n-drawer");return c(),Y(J,null,[e.mobileOptions.isMobile?(c(),d(l,{key:0,class:"lay-drawer-slider",show:e.mobileOptions.showMobileSlidebar,"onUpdate:show":t[0]||(t[0]=t=>e.mobileOptions.showMobileSlidebar=t),style:te({backgroundColor:e.layConfig.sidebarInverted?"#001428":""}),"native-scrollbar":!1,width:e.width,placement:"left"},{default:u((()=>[ee(e.$slots,"default")])),_:3},8,["show","style","width"])):X("v-if",!0),e.mobileOptions.isMobile?X("v-if",!0):ee(e.$slots,"default",{key:1})],64)};var Ot=t({name:"LaySidebar",components:{LayDrawer:zt,NLayoutSider:ae,NImage:ne,NMenu:oe,NSpace:re,NSwitch:M},setup(e,t){const a=function(){const e=ra.reduce(((e,t)=>(t.component&&"Layout"===t.component.name&&e.push(t),e)),[]);return At=e.reduce(((e,t)=>{if(t.meta&&t.meta.hidden)return e;if(t.children&&1===t.children.length){const a=It(t.children[0],t.path);a&&e.push(a)}else if(t.children&&t.children.length>1){const a=It(t,t.path);a&&e.push(a)}return e}),[]),At}(),n=qe(),s=Qe(),i=C(),c=b(),d=g("mobileOptions"),u=s.layConfigGetter,m=r((()=>n.isDarkThemeGetter)),h=o(!0),p=le({menuKey:"/form/test-form/test1",menuKeys:["/form","/form/test-form","/form/test-form/test1"]});return l((()=>{p.menuKey=c.fullPath;const e=c.fullPath.split("/");p.menuKeys=e.reduce(((e,t)=>(t&&e.push((e[e.length-1]||"")+"/"+t),e)),[])})),{isDarkTheme:m,menuConfig:p,layConfig:u,menuOptions:a,active:h,sliderWidth:240,getSrc:e=>({"../../assets/head.png":Lt}["../../assets/head.png"].default),handleUpdateValue:e=>{if(d.showMobileSlidebar=!1,Dt(e)){const t=document.createElement("a");t.href=e,t.target="_blank",t.click()}else i.push(e)}}}});j("data-v-4d8f694c");const Mt={class:"lay-sidebar"},Nt=[K("img",{class:"img",alt:"logo",src:Pt},null,-1)];B(),Ot.render=function(e,t,a,n,o,r){const l=i("n-menu"),s=i("n-layout-sider"),h=i("lay-drawer");return c(),d(h,{show:e.active,"onUpdate:show":t[1]||(t[1]=t=>e.active=t),style:te({backgroundColor:e.layConfig.sidebarInverted?"#001428":""}),"native-scrollbar":!1,width:e.sliderWidth,placement:"left"},{default:u((()=>[m(s,{style:te({zIndex:999,minHeight:"100%",boxShadow:"0 0 8px var(--border-color)"}),width:e.sliderWidth,"native-scrollbar":!1,"collapse-mode":"width",collapsed:e.layConfig.collapsed,inverted:e.layConfig.sidebarInverted,"collapsed-width":64,bordered:""},{default:u((()=>[K("div",Mt,[K("div",{class:se(["head",{"head-inverted":e.isDarkTheme||e.layConfig.sidebarInverted}])},Nt,2),m(l,{indent:22,"collapsed-width":64,"collapsed-icon-size":22,inverted:e.layConfig.sidebarInverted,options:e.menuOptions,key:e.menuConfig.menuKey,"default-value":e.menuConfig.menuKey,"expanded-keys":e.menuConfig.menuKeys,"onUpdate:value":e.handleUpdateValue,"onUpdate:expandedKeys":t[0]||(t[0]=t=>e.menuConfig.menuKeys=t)},null,8,["inverted","options","default-value","expanded-keys","onUpdate:value"])])])),_:1},8,["style","width","collapsed","inverted"])])),_:1},8,["show","style","width"])},Ot.__scopeId="data-v-4d8f694c";const Ht=e=>w(h,null,{default:()=>w(e)}),Rt=[{label:"关闭左侧",key:"closeLeft",icon:()=>Ht(he)},{label:"关闭右侧",key:"closeRight",icon:()=>Ht(ce)},{label:"关闭其他",key:"closeOther",icon:()=>Ht(de)},{label:"关闭全部",key:"closeAll",icon:()=>Ht(ue)},{label:"关闭当前",key:"closeThis",icon:()=>Ht(me)}];var Vt=t({name:"MouseMenu",props:["handleMenuSelect"],components:{NDropdown:_},setup(e){const t=o(!1),a=o(0),n=o(0);return{menuOptions:Rt,showDropdown:t,x:a,y:n,handleMenuSelect(a){e.handleMenuSelect(a),t.value=!1},handleBlur(){t.value=!1},handleContextMenu(e){e.preventDefault(),t.value=!0,a.value=e.clientX,n.value=e.clientY},onClickoutside(e){t.value=!1}}}});Vt.render=function(e,t,a,n,o,r){const l=i("n-dropdown");return c(),Y(J,null,[K("div",{onContextmenu:t[0]||(t[0]=(...t)=>e.handleContextMenu&&e.handleContextMenu(...t))},[ee(e.$slots,"default")],32),m(l,{placement:"bottom-start",onSelect:e.handleMenuSelect,x:e.x,y:e.y,options:e.menuOptions,show:e.showDropdown,"on-clickoutside":e.onClickoutside},null,8,["onSelect","x","y","options","show","on-clickoutside"])],64)};var Gt=t({name:"LayTag",inheritAttrs:!1,components:{NIcon:h,NButton:pe,NScrollbar:G,NDropdown:_,ChevronDownOutline:fe,CloseSharp:ve,MouseMenu:Vt},setup(){const e=C(),t=b(),a=Qe(),n=qe();let s=le([]);const i=o(),c=o(),d=r((()=>n.isDarkThemeGetter));return function(e){const t=da.currentRoute;ra.forEach((t=>{var a,n;(n=t).component&&"Layout"===n.component.name&&n.children&&n.children.length&&(null==(a=t.children)||a.forEach((a=>{if(a.meta&&a.meta.affix){const r=(n=t.path,o=a.path,/^\//.test(o)?o:/\/$/.test(n)?n+o:o?n+"/"+o:n),l="function"==typeof a.component?a.component():a;e.push({fullPath:r,name:l.name,meta:a.meta})}var n,o})))})),ie(t,(t=>{if(t.meta&&t.meta.tagHidden)return;const a=e.some((e=>e.fullPath===t.fullPath)),n=t.matched;if(!a&&n.length){const a=n[n.length-1].components.default;e.push({name:a.name,fullPath:t.fullPath,meta:t.meta})}}),{immediate:!0})}(s),ye((()=>{const e=i.value.containerRef;l((()=>{s.length,t.fullPath,ge((()=>{!function(e,t){const a=t.querySelector(".tag-active");if(!a)return;const n=e.offsetWidth;t.offsetWidth;const o=a.offsetWidth,r=e.scrollLeft-a.offsetLeft,l=n-o;if(e.scrollLeft>a.offsetLeft){const t=a.previousSibling;t&&1===t.nodeType?e.scrollLeft=a.offsetLeft-t.offsetWidth:e.scrollLeft=0}else Math.abs(r)>l&&(e.scrollLeft=a.offsetLeft)}(e,c.value)}))}))})),{tags:s,layTag:c,scrollbar:i,menuOptions:Rt,isDarkTheme:d,handleMenuSelect(e){!function(e,t){const a=da.currentRoute.value,n=Qe(),o=t.findIndex((e=>e.fullPath===a.fullPath));switch(e){case"closeLeft":let e=0;for(;t[e].fullPath!==a.fullPath;)if(t[e].fullPath===a.fullPath||t[e].meta.affix)e++;else{const[a]=t.splice(e,1);n.DEL_KEEPALIVES(a.name)}break;case"closeRight":let r=o+1;for(;r<t.length&&t[r].fullPath!==a.fullPath;)if(t[r].fullPath===a.fullPath||t[r].meta.affix)r++;else{const[e]=t.splice(r,1);n.DEL_KEEPALIVES(e.name)}break;case"closeOther":for(let o=0;o<t.length;o++)if(t[o].fullPath!==a.fullPath&&!t[o].meta.affix){const[e]=t.splice(o,1);n.DEL_KEEPALIVES(e.name),o--}break;case"closeAll":for(let a=0;a<t.length;a++)if(!t[a].meta.affix){const[e]=t.splice(a,1);n.DEL_KEEPALIVES(e.name),a--}t.find((e=>e.fullPath===a.fullPath))||da.push(t[t.length-1].fullPath);break;case"closeThis":if(!t[o].meta.affix){0===o?da.push(t[o+1].fullPath):da.push(t[o-1].fullPath);const[e]=t.splice(o,1);n.DEL_KEEPALIVES(e.name)}}}(e,s)},handleTagOpen(t){e.push(t)},handleTagClose(n){s[n].fullPath===t.fullPath&&(0===n?e.push(s[n+1].fullPath):e.push(s[n-1].fullPath));const[o]=s.splice(n,1);a.DEL_KEEPALIVES(o.name)},isAffix:e=>e.meta&&e.meta.affix}}});j("data-v-539fc556");const jt={class:"lay-tag-box"},Bt={class:"lay-tag",ref:"layTag"},Kt={class:"tag-cont"},Ut={class:"lay-tag-menu"};B(),Gt.render=function(e,t,a,n,o,r){const l=i("close-sharp"),s=i("n-icon"),h=i("n-button"),p=i("mouse-menu"),f=i("n-scrollbar"),v=i("chevron-down-outline"),y=i("n-dropdown");return c(),Y("div",jt,[m(f,{style:{flex:"1"},ref:"scrollbar","vertical-rail-style":{bottom:0},scrollable:!0,"x-scrollable":!0},{default:u((()=>[m(p,{handleMenuSelect:e.handleMenuSelect},{default:u((()=>[K("div",Bt,[(c(!0),Y(J,null,Q(e.tags,((t,a)=>(c(),Y("div",{class:se(["tag-item",t.fullPath===e.$route.fullPath?"tag-active":"default"]),key:t.fullPath},[K("div",Kt,[m(h,{class:"tag-btn",style:te(e.isDarkTheme?{color:"#fff"}:{}),type:t.fullPath===e.$route.fullPath?"primary":"default",onClick:a=>e.handleTagOpen(t.fullPath)},{default:u((()=>[K("span",null,Z(t.meta.title),1),e.isAffix(t)?X("v-if",!0):(c(),d(s,{key:0,onClick:be((t=>e.handleTagClose(a)),["stop"]),class:se([e.isDarkTheme?"":"tag-close-hover","tag-close"])},{default:u((()=>[m(l)])),_:2},1032,["onClick","class"]))])),_:2},1032,["style","type","onClick"])])],2)))),128))],512)])),_:1},8,["handleMenuSelect"])])),_:1},512),K("div",Ut,[m(y,{trigger:"hover",placement:"bottom-end",onSelect:e.handleMenuSelect,options:e.menuOptions},{default:u((()=>[m(h,{style:{width:"32px",height:"32px"}},{default:u((()=>[m(s,{size:18},{default:u((()=>[m(v)])),_:1})])),_:1})])),_:1},8,["onSelect","options"])])])},Gt.__scopeId="data-v-539fc556";var $t=t({name:"layMain",setup:()=>({keepAlives:Qe().keepAlivesGetter})});$t.render=function(e,t,a,n,o,r){const l=i("router-view");return c(),d(l,null,{default:u((({Component:t,route:a})=>[m(_e,{appear:"",name:a.meta.transition||"fade",mode:"out-in"},{default:u((()=>[e.keepAlives?(c(),d(Ce,{key:0,include:e.keepAlives},[(c(),d(ke(t),{key:a.fullPath}))],1032,["include"])):(c(),d(ke(t),{key:a.fullPath}))])),_:2},1032,["name"])])),_:1})};var Ft=t({name:"Layout",components:{LayMain:$t,LayTag:Gt,LaySidebar:Ot,LayHeader:bt,NLayout:Se,NLayoutHeader:we,NLayoutContent:Te,NLayoutSider:ae},setup(e,t){const a=qe(),n=Qe(),l=b(),s=o(!1),i=n.layConfigGetter,c=r((()=>a.isDarkThemeGetter)),d=le({isMobile:!1,showMobileSlidebar:!1});Ee("mobileOptions",d);const u=Pe();return u.start(),ie(l,(e=>{u.start(),ge((()=>{setTimeout((()=>{u.finish()}),200)}))}),{immediate:!0}),{isDarkTheme:c,routerShow:s,layConfig:i}}});Ft.render=function(e,t,a,n,o,r){const l=i("lay-sidebar"),s=i("lay-header"),h=i("n-layout-header"),p=i("lay-tag"),f=i("lay-main"),v=i("n-layout-content"),y=i("n-layout");return c(),d(y,{class:"layout-container","has-sider":""},{default:u((()=>[X("  侧边栏   "),m(l),m(y,{style:{height:"100%"}},{default:u((()=>[X("  头部   "),m(h,{position:"absolute",style:{height:"64px",overflow:"hidden","z-index":"9"},"native-scrollbar":!1,inverted:e.layConfig.headerInverted,bordered:""},{default:u((()=>[m(s)])),_:1},8,["inverted"]),X(" tag栏 "),e.layConfig.tagShow?(c(),d(h,{key:0,position:"absolute",bordered:"",style:{height:"48px",left:"0",top:"64px",right:"0"}},{default:u((()=>[m(p)])),_:1})):X("v-if",!0),X("   主内容区   "),m(v,{class:"layout-main",position:"absolute","native-scrollbar":!1,style:te({bottom:0,zIndex:8,transition:"top .25s",top:e.layConfig.tagShow?"112px":"64px",background:e.isDarkTheme?"transparent":"#f0f2f5"})},{default:u((()=>[m(f)])),_:1},8,["style"])])),_:1})])),_:1})};const Wt={class:"iframe"},qt=["src"];var Yt=t({props:{src:{type:String,default:"https://gitee.com/zhizous"}},setup:e=>(t,a)=>(c(),Y("div",Wt,[K("iframe",{src:e.src,class:"iframe-view",frameborder:"0"},null,8,qt)]))}),Xt=t({name:"routerReload",setup(){}});const Jt={class:"ok-loading"},Qt=[K("div",{class:"ball-loader"},[K("span"),K("span"),K("span"),K("span")],-1)];function Zt(e){return()=>new Promise((a=>{e().then((e=>{const n=(e.default.name||"okAdminMain")+"$"+Date.now(),r=t({name:n,setup(){const e=o(!1),t=Pe();let a=null;return{isReload:e,handleReload:()=>{e.value=!0,null==t||t.start(),a&&clearTimeout(a),a=setTimeout((()=>{ge((()=>{e.value=!1,null==t||t.finish()}))}),260)}}},render:function(){return this.isReload?w(Xt):w("div",{class:"ok-admin-main"},[m(e.default)])}});a(r)}))}))}Xt.render=function(e,t,a,n,o,r){return c(),Y("div",Jt,Qt)};const ea=e=>{const a="okAdminMain$"+Date.now();return t({name:a,setup(){const e=o(!1),t=Pe();let a=null;return{isReload:e,handleReload:()=>{e.value=!0,null==t||t.start(),a&&clearTimeout(a),a=setTimeout((()=>{ge((()=>{e.value=!1,null==t||t.finish()}))}),260)}}},render:function(){return this.isReload?w(Xt):e}})},ta=e=>ea(m(Yt,{src:e}));var aa={path:"/multi",component:Ft,meta:{title:"工具",icon:Le},children:[{path:"menu-one",name:"menu-one",meta:{title:"外部链接",href:"https://gitee.com/zhizous"}},{path:"frame",name:"frame",component:xe,meta:{title:"内嵌网页"},children:[{path:"ok-admin-vue",name:"ok-admin-vue",component:ta("http://www.zhizous.cn/"),meta:{title:"ok-admin-vue"}},{path:"vue3",name:"vue3",component:ta("https://v3.cn.vuejs.org/"),meta:{title:"VUE3官网"}},{path:"naive-ui",name:"naive-ui",component:ta("https://www.naiveui.com/zh-CN/os-theme"),meta:{title:"NaiveUI官网"}},{path:"gitee",name:"gitee",component:ta("https://gitee.com/zhizous"),meta:{keepAlive:!0,title:"码云地址"}}]},{path:"menu-three",name:"menu-three",component:xe,meta:{title:"多级菜单"},children:[{path:"menu-three-one",name:"menu-three-one",component:{render:()=>d("div",{},[m("span",{a:"asf"},"菜单3.1"),m("div",{},"有点搞头")])},meta:{title:"菜单3.1"}},{path:"menu-three-two",name:"menu-three-two",component:{render:()=>d("div",{},"菜单3.2")},meta:{title:"菜单3.2"}},{path:"menu-three-three",name:"menu-three-three",component:{render:()=>m("div",{},"菜单3.3")},meta:{title:"菜单3.3"}},{path:"menu-three-four",name:"menu-three-four",component:xe,meta:{title:"菜单3.4"},children:[{path:"menu-three-four-one",name:"menu-three-four-one",component:{render:()=>d("div",{},[m("span",{a:"asf"},"菜单3.4.1"),m("div",{},"有点搞头")])},meta:{title:"菜单3.4.1"}},{path:"menu-three-four-two",name:"menu-three-four-two",component:{render:()=>d("div",{},"菜单3.4.2")},meta:{title:"菜单3.4.2"}},{path:"menu-three-four-three",name:"menu-three-four-three",component:{render:()=>m("div",{},"菜单3.4.3")},meta:{title:"菜单3.4.3"}}]}]}]};function na(e,t,a){return a=a||{},e.component&&"Layout"===e.component.name?a={path:t,name:e.name,component:e.component,redirect:e.redirect,meta:e.meta,children:[]}:(a.children=a.children||[],a.children.push({path:t,name:e.name,component:e.component,redirect:e.redirect,meta:e.meta})),e.children&&e.children.length&&e.children.forEach((e=>{var n,o;na(e,(n=t,o=e.path,/^\//.test(o)?o:/\/$/.test(n)?n+o:o?n+"/"+o:n),a)})),a}const oa=4<(new Date).getHours()&&(new Date).getHours()<18,ra=[{path:"/",redirect:"/dashboard/control",component:Xt},{path:"/dashboard",component:Ft,redirect:"/dashboard/control",meta:{title:"Dashboard",icon:De},children:[{path:"control",name:"control",component:Zt((()=>Je((()=>import("./index.d36462c6.js")),["assets/index.d36462c6.js","assets/index.19127936.css","assets/vendor.91668286.js"]))),meta:{title:"控制台",keepAlive:!0,icon:Ae,affix:!0}},{path:"workplace",name:"workplace",component:Zt((()=>Je((()=>import("./index.3e953112.js")),["assets/index.3e953112.js","assets/index.eaa6c231.css","assets/vendor.91668286.js"]))),meta:{title:"工作台",keepAlive:!0,icon:oa?Ie:ze}}]},{path:"/form",name:"form",component:Ft,redirect:"/form/basic-form",meta:{title:"表单",icon:Oe},children:[{path:"basic-form",name:"basic-form",component:Zt((()=>Je((()=>import("./basic-form.48d10084.js")),["assets/basic-form.48d10084.js","assets/vendor.91668286.js"]))),meta:{title:"基础表单"}},{path:"advanced-form",name:"advanced-form",component:Zt((()=>Je((()=>import("./advanced-form.093eb85d.js")),["assets/advanced-form.093eb85d.js","assets/vendor.91668286.js"]))),meta:{title:"高级表单"}},{path:"step-form",name:"step-form",component:Zt((()=>Je((()=>import("./advanced-form.093eb85d.js")),["assets/advanced-form.093eb85d.js","assets/vendor.91668286.js"]))),meta:{title:"分步表单"}},{path:"detail",name:"detail",component:Zt((()=>Je((()=>import("./advanced-form.093eb85d.js")),["assets/advanced-form.093eb85d.js","assets/vendor.91668286.js"]))),meta:{title:"表单详情"}},{path:"test-form",name:"test-form",component:xe,meta:{title:"test表单"},children:[{path:"test1",name:"test1",component:Zt((()=>Je((()=>import("./test-form.a1b1c455.js")),["assets/test-form.a1b1c455.js","assets/vendor.91668286.js"]))),meta:{title:"test表单1",keepAlive:!0}},{path:"test2",name:"test2",component:Zt((()=>Je((()=>import("./test-form.a1b1c455.js")),["assets/test-form.a1b1c455.js","assets/vendor.91668286.js"]))),meta:{title:"test表单2",keepAlive:!0}}]}]},{path:"/list",name:"list",component:Ft,redirect:"/list/table-list",meta:{title:"列表",icon:Me},children:[{path:"table-list",name:"table-list",component:Zt((()=>Je((()=>import("./table-list.17faf6bc.js")),["assets/table-list.17faf6bc.js","assets/table-list.9ec93eaf.css","assets/vendor.91668286.js"]))),meta:{title:"查询表格"}},{path:"card-list",name:"card-list",component:Zt((()=>Je((()=>import("./card-list.5dc06ead.js")),["assets/card-list.5dc06ead.js","assets/card-list.b0de126f.css","assets/vendor.91668286.js"]))),meta:{title:"卡片列表"}}]},{path:"/exception",name:"exception",component:Ft,redirect:"/exception/404",meta:{title:"异常页",icon:Ne},children:[{path:"403",name:"403",component:Zt((()=>Je((()=>import("./403.5aa46325.js")),["assets/403.5aa46325.js","assets/vendor.91668286.js"]))),meta:{title:"403"}},{path:"404",name:"404",component:Zt((()=>Je((()=>import("./404.ced6621d.js")),["assets/404.ced6621d.js","assets/vendor.91668286.js"]))),meta:{title:"404"}},{path:"500",name:"500",component:Zt((()=>Je((()=>import("./500.e8506244.js")),["assets/500.e8506244.js","assets/vendor.91668286.js"]))),meta:{title:"500"}}]},{path:"/user",component:Ft,children:[{path:"",name:"user",component:Zt((()=>Je((()=>import("./index.3c6c3935.js")),["assets/index.3c6c3935.js","assets/index.06dec8c8.css","assets/vendor.91668286.js"]))),meta:{title:"个人中心",icon:He}}]},aa],la=[{path:"/login",name:"Login",component:()=>Je((()=>import("./index.88f366b5.js")),["assets/index.88f366b5.js","assets/index.384fd8ab.css","assets/vendor.91668286.js"]),meta:{title:"登录"}}],sa=function(e){const t=[];return e.forEach((e=>{e.children&&e.children.length?t.push(na(e,e.path)):t.push(e)})),t}(ra),ia=Re({history:Ve(),routes:la.concat(sa),strict:!0,scrollBehavior:()=>({left:0,top:0})});var ca;(ca=ia).beforeEach((async(e,t,a)=>{a()})),ca.afterEach(((e,t,a)=>{!function(e){const t=Qe();e.meta&&e.meta.keepAlive&&t.ADD_KEEPALIVES(e.matched[e.matched.length-1].components.default.name)}(e)}));var da=ia,ua={install(e){e.component("NButton",pe),e.component("NIcon",h),e.component("NForm",Ge),e.component("NInput",je),e.component("NCard",Be),e.component("NGrid",x),e.component("NGi",D),e.component("NGridItem",D)}};const ma={};ma.render=function(e,t){return c(),Y("div",null,"Hello")};var ha=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ma}),pa=t({setup(){const e=o("你好");return{current:e,handleTest(){e.value=1e3*Math.random()}}},render(){return m("div",null,[m("div",{style:"padding: 20px"},[this.current]),m("div",null,[m(i("n-button"),{onClick:this.handleTest},{default:()=>[L("点击")]})])])}});const fa={"../components/global/Test.tsx":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pa})},va={"../components/global/Hello.vue":ha};var ya={install:function(e){let t="";for(let a in fa)t=fa[a].default.name||a.substr(a.lastIndexOf("/")+1),t=t.replace(".tsx",""),e.component(t,fa[a].default);for(let a in va)t=va[a].default.name||a.substr(a.lastIndexOf("/")+1),t=t.replace(".vue",""),e.component(t,va[a].default)}};const ga=Ke(Ye);ga.use(ua),ga.use(ya);const ba=Ue();ga.use(ba),ga.use(da),ga.mount("#app");export{Je as _,Fe as a,Qe as b,Pt as c,ct as u};
