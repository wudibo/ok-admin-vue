import{d as te,a as m,N as Be,b as Ge,r as g,c as M,w as j,e as je,f as c,o as p,g as _,h as d,i as o,j as b,E as Ke,C as Ue,k as $,v as L,l as ne,u as R,m as K,R as We,n as U,p as qe,q as P,P as Ye,s as Xe,t as oe,x as T,y as H,z as O,A as W,B as q,D as Je,F as Qe,G as ae,M as Ze,S as et,H as ve,I as tt,J as ye,K as h,L as nt,O as ot,Q as at,T as rt,U as st,V as D,W as Y,X as ge,Y as Ce,Z as re,_ as V,$ as X,a0 as be,a1 as lt,a2 as it,a3 as ct,a4 as se,a5 as le,a6 as ut,a7 as dt,a8 as ke,a9 as mt,aa as pt,ab as ht,ac as ft,ad as _t,ae as Se,af as vt,ag as yt,ah as gt,ai as J,aj as Ct,ak as bt,al as Ee,am as kt,an as St,ao as Et,ap as wt,aq as Tt,ar as ie,as as Dt,at as Q,au as At,av as $t,aw as Lt,ax as Pt,ay as Ot,az as It,aA as zt,aB as Mt,aC as Nt,aD as Ft,aE as xt,aF as Rt,aG as Ht,aH as Vt,aI as Bt}from"./vendor.3e5191bd.js";const Gt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};Gt();const we={primaryColor:"#18A058",primaryColorHover:"#36AD6A",primaryColorPressed:"#0C7A43"},jt={primaryColor:"#009688",primaryColorHover:"#33aba0",primaryColorPressed:"#00877a"},Kt={primaryColor:"#1890ff",primaryColorHover:"#40a9ff",primaryColorPressed:"#096dd9",primaryColorDins:""},Ut={primaryColor:"#f5222d",primaryColorHover:"#ff4d4f",primaryColorPressed:"#cf1322"},Wt={primaryColor:"#ff7a45",primaryColorHover:"#ff4d4f",primaryColorPressed:"#d4380d"},qt={primaryColor:"#fa8c16",primaryColorHover:"#ffa940",primaryColorPressed:"#d46b08"},Yt={primaryColor:"#faad14",primaryColorHover:"#ffc53d",primaryColorPressed:"#d48806"},Xt={primaryColor:"#fadb14",primaryColorHover:"#ffec3d",primaryColorPressed:"#d4b106"},Jt={primaryColor:"#a0d911",primaryColorHover:"#bae637",primaryColorPressed:"#7cb305"},Qt={primaryColor:"#52c41a",primaryColorHover:"#73d13d",primaryColorPressed:"#389e0d"},Zt={primaryColor:"#13c2c2",primaryColorHover:"#36cfc9",primaryColorPressed:"#08979c"},en={primaryColor:"#2f54eb",primaryColorHover:"#597ef7",primaryColorPressed:"#1d39c4"},tn={primaryColor:"#722ed1",primaryColorHover:"#9254de",primaryColorPressed:"#531dab"},nn={primaryColor:"#eb2f96",primaryColorHover:"#f759ab",primaryColorPressed:"#c41d7f"},on={primaryColor:"#2d8cf0",primaryColorHover:"#57a3f3",primaryColorPressed:"#297ed8"},an={primaryColor:"#0960bd",primaryColorHover:"#3a80ca",primaryColorPressed:"#0856aa"},rn={primaryColor:"#536dfe",primaryColorHover:"#758afe",primaryColorPressed:"#4b62e5"},sn={primaryColor:"#ff5c93",primaryColorHover:"#ff7da9",primaryColorPressed:"#e65384"},ln={primaryColor:"#ee4f12",primaryColorHover:"#f17241",primaryColorPressed:"#d64710"},cn={primaryColor:"#0096c7",primaryColorHover:"#33abd2",primaryColorPressed:"#0087b3"},un={primaryColor:"#9c27b0",primaryColorHover:"#b052c0",primaryColorPressed:"#8c239e"},dn={primaryColor:"#ff9800",primaryColorHover:"#ffad33",primaryColorPressed:"#e68900"},mn={defaultColor:we,layuiColor:jt,antdColor:Kt,dustRedColor:Ut,volcanoColor:Wt,sunsetOrangeColor:qt,calendulaGoldColor:Yt,sunriseColor:Xt,limeColor:Jt,polarGreenColor:Qt,cyanColor:Zt,geekBlueColor:en,goldenPurpleColor:tn,magentaColor:nn,blueColor:on,pureBlueColor:an,purpleColor:rn,pinkColor:sn,orangeColor:ln,oceanColor:cn,purpleBColor:un,yellowColor:dn};var ce={isDarkTheme:!1,appTheme:we,appThemeList:mn},I=te("themeStore",{state:()=>({isDarkTheme:ce.isDarkTheme,appTheme:ce.appTheme,appThemeList:ce.appThemeList}),actions:{SET_APPTHEME(e){this.appTheme=e},SET_ISDARKTHEME(e){this.isDarkTheme=e}},getters:{isDarkThemeGetter:e=>e.isDarkTheme,appThemeGetter(){return this.appTheme},appThemeListGetter(){return this.appThemeList}}});var w=(e,t)=>{const n=e.__vccOpts||e;for(const[a,r]of t)n[a]=r;return n};const pn=m({name:"APP",components:{NConfigProvider:Be,NLoadingBarProvider:Ge},setup:()=>{const e=I(),t=g(null),n=M(()=>e.isDarkThemeGetter),a=document.getElementsByTagName("body")[0];return j(()=>{const r=e.appThemeGetter;t.value={common:r},a.style.setProperty("--primary-color",r.primaryColor),a.style.setProperty("--primary-color-hover",r.primaryColorHover),a.style.setProperty("--primary-color-pressed",r.primaryColorPressed)}),{darkTheme:je,isDarkTheme:n,themeOverrides:t}}});function hn(e,t,n,a,r,l){const s=c("router-view"),i=c("NLoadingBarProvider"),u=c("NConfigProvider");return p(),_(u,{theme:e.isDarkTheme?e.darkTheme:null,"theme-overrides":e.themeOverrides},{default:d(()=>[o(i,null,{default:d(()=>[o(s)]),_:1})]),_:1},8,["theme","theme-overrides"])}var fn=w(pn,[["render",hn]]);const _n="modulepreload",Te={},vn="/ok-admin-vue/",C=function(t,n){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=`${vn}${a}`,a in Te)return;Te[a]=!0;const r=a.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":_n,r||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),r)return new Promise((i,u)=>{s.addEventListener("load",i),s.addEventListener("error",u)})})).then(()=>t())};var A=te("adminStore",{state:()=>({keepAlives:[],layTags:[],layConfig:{sidebarInverted:!0,headerInverted:!1,collapsed:!1,tagShow:!0}}),actions:{SET_LAYTAGS(e){this.layTags=e},SET_LAYCONFIG:function(e){this.layConfig[e.key]=e.value},SET_LAYCONFIGS(e){this.layConfig=e},ADD_KEEPALIVES(e){this.keepAlives.indexOf(e)<0&&this.keepAlives.push(e)},DEL_KEEPALIVES(e){const t=this.keepAlives.indexOf(e);t>=0&&this.keepAlives.splice(t,1)}},getters:{keepAlivesGetter:e=>e.keepAlives,layTagsGetter:e=>e.layTags,layConfigGetter:e=>e.layConfig}});const yn=function(e){return o("path",{d:e,fill:"currentColor"},null,-1)};function ue(e){return _("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[yn(e)])}const gn="M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75zm-5.75 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5z";var Cn=m({name:"LockClosed",render(){return ue(gn)}});const bn="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z";m({name:"StarRound",render(){return ue(bn)}});const kn="M19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z";m({name:"StarBorderRound",render(){return ue(kn)}});var Sn=m({name:"ButtonFullScreen",components:{NIcon:b,ExpandOutline:Ke,ContractOutline:Ue},props:{size:{type:[Number,String],default:18}},setup(e){const t=g(!1),n=()=>{let a="",r="";t.value?(a=document,r=a.cancelFullScreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.exitFullScreen):(a=document.documentElement,r=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen||a.msRequestFullScreen),r&&(t.value=!t.value,r.call(a))};return()=>o("div",{title:"\u5168\u5C4F\u5207\u6362",onClick:n,class:"flex-center btn-content lay-hover"},[o(c("n-icon"),{class:"lay-hover",size:e.size},{default:()=>[$(o(c("contract-outline"),null,null),[[L,t.value]]),$(o(c("expand-outline"),null,null),[[L,!t.value]])]})])}});const En=function(e){return o("path",{d:e,fill:"currentColor"},null,-1)};function De(e){return _("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},[En(e)])}const wn="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z";var Tn=m({name:"MenuUnfoldOutlined",render(){return De(wn)}});const Dn="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z";var An=m({name:"MenuUnfoldOutlined",render(){return De(Dn)}}),$n=m({name:"ButtonMenu",props:{size:{type:[Number,String],default:20}},setup(e){const t=A(),n=ne("mobileOptions"),a=t.layConfigGetter;function r(){n.isMobile?n.showMobileSlidebar=!0:a.collapsed=!a.collapsed}return()=>o("div",{title:"\u83DC\u5355\u5207\u6362",onClick:r,class:"flex-center btn-content lay-hover"},[o(c("n-icon"),{size:e.size},{default:()=>[$(o(An,null,null),[[L,a.collapsed]]),$(o(Tn,null,null),[[L,!a.collapsed]])]})])}}),Ln=m({name:"ButtonMenu",props:{size:{type:[Number,String],default:18}},setup(e){const t=R(),n=K();let a="";n.afterEach(l=>{a=l.matched[l.matched.length-1].instances.default});function r(){a=a||t.matched[t.matched.length-1].instances.default,a.handleReload()}return()=>o("div",{title:"\u5237\u65B0\u9875\u9762",onClick:r,class:"flex-center btn-content lay-hover"},[o(c("n-icon"),{class:"lay-hover",size:e.size},{default:()=>[o(We,null,null)]})])}});var Pn=te("userStore",{state:()=>({testValue:1,userInfo:{userName:"admin",avatar:"https://portrait.gitee.com/uploads/avatars/user/442/1326874_zhizous_1615019143.png!avatar200"}}),actions:{SET_TESTVALUE(e){this.testValue=e},SET_USERNAME(e){this.userInfo.userName=e},SET_USERAVATAR(e){this.userInfo.avatar=e}},getters:{userInfoGetter:e=>e.userInfo,testValueGetter(){return this.testValue}}});const Ae=e=>()=>P(b,null,{default:()=>P(e)});var On=m({name:"UserMenu",setup(){const e=K(),t=I(),n=Pn(),a=M(()=>t.isDarkThemeGetter),r=[{label:"\u4E2A\u4EBA\u4E2D\u5FC3",icon:Ae(Xe),key:"user"},{type:"divider",key:"d1"},{label:"\u9000\u51FA\u767B\u5F55",key:"exit",icon:Ae(Ye)}];return{isDarkTheme:a,userMenus:r,userStore:n,handleSelect:s=>{console.log(s),s==="exit"&&e.replace("/login")}}},render:function(){const{userInfo:e}=this.userStore;return o(U,{trigger:"hover",onSelect:this.handleSelect,options:this.userMenus},{default:()=>[o("div",{class:`flex-center btn-content lay-hover ${this.isDarkTheme?"dark-hover":""}`},[o(qe,{circle:!0,size:"small",src:e.avatar},null),o("div",{class:"padding-left-10"},[e.userName])])]})}});var $e="/ok-admin-vue/assets/nav-theme-dark.d93c9dff.svg",In="/ok-admin-vue/assets/nav-theme-light.f039dce7.svg",zn="/ok-admin-vue/assets/header-theme-dark.932bb39b.svg",Mn=m({name:"SetNavigation",setup(){return{layConfig:A().layConfigGetter}},render:function(){return o("div",{class:"set-Navigation padding-bottom-10"},[o(oe,null,{default:()=>[T("\u5BFC\u822A\u680F\u98CE\u683C")]}),o(H,{class:"sidebar-thenme","x-gap":"12",cols:"3"},{default:()=>[o(O,{class:"thenme"},{default:()=>[o(W,{trigger:"hover"},{default:()=>[T("\u6697\u8272\u4FA7\u8FB9\u680F")],trigger:o("div",{onClick:()=>this.layConfig.sidebarInverted=!0,class:"thenme-checkbox pointer"},[o("img",{src:$e,alt:"navThemeDark"},null)])}),$(o("div",{class:"checked"},[o(b,{class:"checked-color",size:"10"},{default:()=>[o(q,null,null)]})]),[[L,this.layConfig.sidebarInverted]])]}),o(O,{class:"thenme"},{default:()=>[o(W,{trigger:"hover"},{default:()=>[T("\u4EAE\u8272\u4FA7\u8FB9\u680F")],trigger:o("div",{onClick:()=>this.layConfig.sidebarInverted=!1,class:"thenme-checkbox pointer"},[o("img",{src:In,alt:"navThemeLight"},null)])}),$(o("div",{class:"checked"},[o(b,{class:"checked-color",size:"10"},{default:()=>[o(q,null,null)]})]),[[L,!this.layConfig.sidebarInverted]])]})]}),o(H,{class:"header-thenme","x-gap":"12",cols:"3"},{default:()=>[o(O,{class:"thenme"},{default:()=>[o(W,{trigger:"hover"},{default:()=>[T("\u4EAE\u8272\u9876\u680F")],trigger:o("div",{onClick:()=>this.layConfig.headerInverted=!1,class:"thenme-checkbox pointer"},[o("img",{src:$e,alt:"navThemeDark"},null)])}),$(o("div",{class:"checked"},[o(b,{class:"checked-color",size:"10"},{default:()=>[o(q,null,null)]})]),[[L,!this.layConfig.headerInverted]])]}),o(O,{class:"thenme"},{default:()=>[o(W,{trigger:"hover"},{default:()=>[T("\u6697\u8272\u9876\u680F")],trigger:o("div",{onClick:()=>this.layConfig.headerInverted=!0,class:"thenme-checkbox pointer"},[o("img",{src:zn,alt:"headerThemeDark"},null)])}),$(o("div",{class:"checked"},[o(b,{class:"checked-color",size:"10"},{default:()=>[o(q,null,null)]})]),[[L,this.layConfig.headerInverted]])]})]})])}});function Nn(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Qe(e)}var Fn=m({name:"SetTheme",setup(){const e=I();return{themeStore:e,handleTheme(t){e.SET_APPTHEME(t)}}},render:function(){let e;const t=this.themeStore.appTheme,n=this.themeStore.appThemeList;return o("div",{class:"set-theme padding-bottom-10"},[o(oe,null,{default:()=>[T("\u7CFB\u7EDF\u4E3B\u9898")]}),o(H,{"x-gap":4,"y-gap":4,cols:8},Nn(e=Object.values(n).map((a,r)=>o(O,{key:r},{default:()=>[o("div",{class:"item",onClick:()=>this.handleTheme(a),style:{backgroundColor:a.primaryColor}},[$(o(b,null,{default:()=>[o(Je,null,null)]}),[[L,a.primaryColor===t.primaryColor]])])]})))?e:{default:()=>[e]})])}}),xn=m({name:"SetOther",setup(){return{layConfig:A().layConfigGetter}},render:function(){return o("div",{class:"padding-bottom-10"},[o(oe,null,{default:()=>[T("\u5176\u4ED6\u8BBE\u7F6E")]}),o("div",{class:"set-other"},[o("div",{class:"tit"},[T("\u5F00\u542F\u591A\u9875\u6807\u7B7E")]),o(ae,{value:this.layConfig.tagShow,"onUpdate:value":e=>this.layConfig.tagShow=e},null)])])}}),Rn=m({name:"SetDark",setup(){const e=I(),t=g(e.isDarkThemeGetter);return{isDarkTheme:t,handleDarkTheme(n){t.value=n,e.SET_ISDARKTHEME(n)}}},render:function(){return o("div",{class:"set-dark"},[o(ae,{railStyle:()=>({background:"#101014"}),value:this.isDarkTheme,"onUpdate:value":this.handleDarkTheme},{checked:()=>o(b,{class:"set-dark-icon"},{default:()=>[o(Ze,null,null)]}),unchecked:()=>o(b,{class:"set-dark-icon"},{default:()=>[o(et,null,null)]})})])}});const Hn=m({name:"LaySetting",components:{NDrawer:ve,NDrawerContent:tt,NScrollbar:ye,SetDark:Rn,SetTheme:Fn,SetOther:xn,SetNavigation:Mn},props:{size:{type:[Number,String],default:18}}}),Vn={class:"setting-box"};function Bn(e,t,n,a,r,l){const s=c("set-dark"),i=c("set-theme"),u=c("set-navigation"),f=c("set-other"),S=c("n-scrollbar"),E=c("n-drawer-content"),y=c("n-drawer");return p(),_(y,null,{default:d(()=>[o(E,{"body-style":{overflow:"hidden"},"body-content-style":{padding:0},title:"\u7CFB\u7EDF\u914D\u7F6E"},{default:d(()=>[o(S,{class:"set-scrollbar",scrollable:!0},{default:d(()=>[h("div",Vn,[o(s),o(i),o(u),o(f)])]),_:1})]),_:1})]),_:1})}var Gn=w(Hn,[["render",Bn],["__scopeId","data-v-b1ef2210"]]);const de=m({name:"LayHeader",components:{NGi:O,NGrid:H,NIcon:b,NBreadcrumb:nt,NBreadcrumbItem:ot,NDropdown:U,LaySetting:Gn,GlobeOutline:at,SettingsOutline:rt,UserMenu:On,LockClosed:Cn,ButtonMenu:$n,ButtonRefresh:Ln,ButtonFullScreen:Sn},setup(){const e=I(),t=R(),n=g(!1),a=M(()=>e.isDarkThemeGetter?"#101014":"#f8f8f9"),r=g([]);return j(()=>{r.value=[];const l=t.matched;for(let s=0;s<l.length;s++)r.value.push(l[s].meta.title)}),{setShow:n,matcheds:r,hoverColor:a,optionsISO:[{label:"\u7B80\u4F53\u4E2D\u6587",key:"zh"},{label:"English",key:"en"}],handleSelect:l=>{console.log(l)}}}}),Le=()=>{st(e=>({"714d35a6":e.hoverColor}))},Pe=de.setup;de.setup=Pe?(e,t)=>(Le(),Pe(e,t)):Le;const jn=de,Kn={class:"lay-header lay-select-none"},Un={class:"header-left"},Wn={class:"header-right"},qn={title:"\u9501\u5C4F","xs-hidden":"",class:"flex-center btn-content lay-hover"},Yn={title:"\u8BED\u8A00\u5207\u6362","xs-hidden":"",class:"flex-center btn-content lay-hover"};function Xn(e,t,n,a,r,l){const s=c("button-menu"),i=c("button-refresh"),u=c("n-breadcrumb-item"),f=c("n-breadcrumb"),S=c("n-gi"),E=c("lock-closed"),y=c("n-icon"),v=c("button-full-screen"),z=c("globe-outline"),ee=c("n-dropdown"),xe=c("user-menu"),Re=c("settings-outline"),He=c("lay-setting"),Ve=c("n-grid");return p(),D("div",Kn,[o(Ve,{"x-gap":"2",cols:"2"},{default:d(()=>[o(S,null,{default:d(()=>[h("div",Un,[o(s),o(i),o(f,{"sm-hidden":"","xs-hidden":""},{default:d(()=>[(p(!0),D(Y,null,ge(e.matcheds,x=>(p(),_(u,{key:x},{default:d(()=>[T(Ce(x),1)]),_:2},1024))),128))]),_:1})])]),_:1}),o(S,{suffix:""},{default:d(()=>[h("div",Wn,[h("div",qn,[o(y,{class:"lay-hover",size:"20"},{default:d(()=>[o(E)]),_:1})]),o(v,{"xs-hidden":"",size:"18"}),o(ee,{trigger:"hover",options:e.optionsISO,onSelect:e.handleSelect},{default:d(()=>[h("div",Yn,[o(y,{class:"lay-hover",size:"18"},{default:d(()=>[o(z)]),_:1})])]),_:1},8,["options","onSelect"]),o(xe),h("div",{title:"\u7CFB\u7EDF\u8BBE\u7F6E",class:"flex-center btn-content lay-hover",onClick:t[1]||(t[1]=x=>e.setShow=!0)},[o(y,{class:"setting-btn lay-hover",size:"18"},{default:d(()=>[o(Re)]),_:1}),o(He,{show:e.setShow,"onUpdate:show":t[0]||(t[0]=x=>e.setShow=x)},null,8,["show"])])])]),_:1})]),_:1})])}var Jn=w(jn,[["render",Xn],["__scopeId","data-v-5992f299"]]),Oe="/ok-admin-vue/assets/head.c9c18204.png",Qn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oe});const Zn=function(e,t=300){let n;return function(){n&&clearTimeout(n),n=setTimeout(function(a){e.apply(this,a)}.bind(this,arguments),t)}},eo=function(e){e(window.innerWidth),window.onresize=Zn(t=>{e(t.target.innerWidth)})},Ie=function(e){return!!/^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\\@&?=+,.!\\/~%\\$]*)?)$/i.test(e)};function to(e){return!e||!e.href?"":Ie(e.href)?e.href:""}let ze=[];function no(e){return()=>P(b,null,{default:()=>P(e)})}function oo(e,t){return/^\//.test(t)?t:/\/$/.test(e)?e+t:t?e+"/"+t:e}function me(e,t,n){if(e.meta&&e.meta.hidden)return n;const a=to(e.meta)||oo(t,e.path);if(n={label:e.meta?e.meta.title:e.name,key:a},e.meta&&e.meta.icon&&(n.icon=no(e.meta.icon)),!(e.children&&e.children.length&&(n.children=[],e.children.forEach(l=>{var s,i;if(!((s=l.meta)==null?void 0:s.hidden)){const u=me(l,a);u&&((i=n==null?void 0:n.children)==null||i.push(u))}}),n.children.length===0)))return n}const ao=function(){return ze=he.reduce((t,n)=>(n.component&&n.component.name==="Layout"&&t.push(n),t),[]).reduce((t,n)=>{if(n.meta&&n.meta.hidden)return t;if(n.children&&n.children.length===1){const a=me(n.children[0],n.path);a&&t.push(a)}else if(n.children&&n.children.length>1){const a=me(n,n.path);a&&t.push(a)}return t},[]),ze};const ro=m({name:"LayDrawer",components:{NDrawer:ve},props:{width:{type:Number,default:256}},setup(){const t=A().layConfigGetter,n=ne("mobileOptions");return eo(a=>{a<=768?(n.showMobileSlidebar=!1,n.isMobile=!0,t.collapsed=!1):n.isMobile=!1}),{layConfig:t,mobileOptions:n}}});function so(e,t,n,a,r,l){const s=c("n-drawer");return p(),D(Y,null,[e.mobileOptions.isMobile?(p(),_(s,{key:0,show:e.mobileOptions.showMobileSlidebar,"onUpdate:show":t[0]||(t[0]=i=>e.mobileOptions.showMobileSlidebar=i),class:"lay-drawer-slider",style:V({backgroundColor:e.layConfig.sidebarInverted?"#001428":""}),"native-scrollbar":!1,width:e.width,placement:"left"},{default:d(()=>[re(e.$slots,"default")]),_:3},8,["show","style","width"])):X("",!0),e.mobileOptions.isMobile?X("",!0):re(e.$slots,"default",{key:1})],64)}var lo=w(ro,[["render",so]]);const io=m({name:"LaySidebar",components:{LayDrawer:lo,NLayoutSider:be,NImage:lt,NMenu:it,NSpace:ct,NSwitch:ae},setup(e,t){const n=ao(),a=I(),r=A(),l=K(),s=R(),i=ne("mobileOptions"),u=r.layConfigGetter,f=M(()=>a.isDarkThemeGetter),S=g(!0),E=se({menuKey:"/form/test-form/test1",menuKeys:["/form","/form/test-form","/form/test-form/test1"]});return j(()=>{E.menuKey=s.fullPath;const y=s.fullPath.split("/");E.menuKeys=y.reduce((v,z)=>(z&&v.push((v[v.length-1]||"")+"/"+z),v),[])}),{isDarkTheme:f,menuConfig:E,layConfig:u,menuOptions:n,active:S,sliderWidth:240,getSrc:y=>({"../../assets/head.png":Qn})["../../assets/head.png"].default,handleUpdateValue:y=>{if(i.showMobileSlidebar=!1,Ie(y)){const v=document.createElement("a");v.href=y,v.target="_blank",v.click()}else l.push(y)}}}}),co=e=>(ut("data-v-63f2257f"),e=e(),dt(),e),uo={class:"lay-sidebar"},mo=co(()=>h("img",{class:"img",alt:"logo",src:Oe},null,-1)),po=[mo];function ho(e,t,n,a,r,l){const s=c("n-menu"),i=c("n-layout-sider"),u=c("lay-drawer");return p(),_(u,{show:e.active,"onUpdate:show":t[1]||(t[1]=f=>e.active=f),style:V({backgroundColor:e.layConfig.sidebarInverted?"#001428":""}),"native-scrollbar":!1,width:e.sliderWidth,placement:"left"},{default:d(()=>[o(i,{style:V({zIndex:999,minHeight:"100%",boxShadow:"0 0 8px var(--border-color)"}),width:e.sliderWidth,"native-scrollbar":!1,"collapse-mode":"width",collapsed:e.layConfig.collapsed,inverted:e.layConfig.sidebarInverted,"collapsed-width":64,bordered:""},{default:d(()=>[h("div",uo,[h("div",{class:le(["head",{"head-inverted":e.isDarkTheme||e.layConfig.sidebarInverted}])},po,2),(p(),_(s,{key:e.menuConfig.menuKey,indent:22,"collapsed-width":64,"collapsed-icon-size":22,inverted:e.layConfig.sidebarInverted,options:e.menuOptions,"default-value":e.menuConfig.menuKey,"expanded-keys":e.menuConfig.menuKeys,"onUpdate:value":e.handleUpdateValue,"onUpdate:expandedKeys":t[0]||(t[0]=f=>e.menuConfig.menuKeys=f)},null,8,["inverted","options","default-value","expanded-keys","onUpdate:value"]))])]),_:1},8,["style","width","collapsed","inverted"])]),_:1},8,["show","style","width"])}var fo=w(io,[["render",ho],["__scopeId","data-v-63f2257f"]]);const _o=function(e,t){return/^\//.test(t)?t:/\/$/.test(e)?e+t:t?e+"/"+t:e};function vo(e){return e.component&&e.component.name==="Layout"?e.children&&e.children.length:!1}const yo=function(e){const t=F.currentRoute;he.forEach(n=>{var a;vo(n)&&((a=n.children)==null||a.forEach(r=>{if(r.meta&&r.meta.affix){const l=_o(n.path,r.path),s=typeof r.component=="function"?r.component():r;e.push({fullPath:l,name:s.name,meta:r.meta})}}))}),ke(t,n=>{if(n.meta&&n.meta.tagHidden)return;const a=e.some(l=>l.fullPath===n.fullPath),r=n.matched;if(!a&&r.length){const l=r[r.length-1].components.default;e.push({name:l.name||"",fullPath:n.fullPath,meta:n.meta})}},{immediate:!0})},go=function(e,t){const n=t.querySelector(".tag-active");if(!n)return;const a=e.offsetWidth,r=n.offsetWidth,l=e.scrollLeft-n.offsetLeft,s=a-r;if(e.scrollLeft>n.offsetLeft){const i=n.previousSibling;i&&i.nodeType===1?e.scrollLeft=n.offsetLeft-i.offsetWidth:e.scrollLeft=0}else Math.abs(l)>s&&(e.scrollLeft=n.offsetLeft)},B=e=>P(b,null,{default:()=>P(e)}),Me=[{label:"\u5173\u95ED\u5DE6\u4FA7",key:"closeLeft",icon:()=>B(_t)},{label:"\u5173\u95ED\u53F3\u4FA7",key:"closeRight",icon:()=>B(mt)},{label:"\u5173\u95ED\u5176\u4ED6",key:"closeOther",icon:()=>B(pt)},{label:"\u5173\u95ED\u5168\u90E8",key:"closeAll",icon:()=>B(ht)},{label:"\u5173\u95ED\u5F53\u524D",key:"closeThis",icon:()=>B(ft)}],Co=function(e,t){const n=F.currentRoute.value,a=A(),r=t.findIndex(i=>i.fullPath===n.fullPath);let l=0,s=0;switch(e){case"closeLeft":for(;t[l].fullPath!==n.fullPath;)if(t[l].fullPath!==n.fullPath&&!t[l].meta.affix){const[i]=t.splice(l,1);a.DEL_KEEPALIVES(i.name)}else l++;break;case"closeRight":for(s=r+1;s<t.length&&t[s].fullPath!==n.fullPath;)if(t[s].fullPath!==n.fullPath&&!t[s].meta.affix){const[i]=t.splice(s,1);a.DEL_KEEPALIVES(i.name)}else s++;break;case"closeOther":for(let i=0;i<t.length;i++)if(t[i].fullPath!==n.fullPath&&!t[i].meta.affix){const[u]=t.splice(i,1);a.DEL_KEEPALIVES(u.name),i--}break;case"closeAll":for(let i=0;i<t.length;i++)if(!t[i].meta.affix){const[u]=t.splice(i,1);a.DEL_KEEPALIVES(u.name),i--}t.find(i=>i.fullPath===n.fullPath)||F.push(t[t.length-1].fullPath);break;case"closeThis":if(!t[r].meta.affix){r===0?F.push(t[r+1].fullPath):F.push(t[r-1].fullPath);const[i]=t.splice(r,1);a.DEL_KEEPALIVES(i.name)}break}},bo=m({name:"MouseMenu",components:{NDropdown:U},props:{handleMenuSelect:{type:Function,required:!0}},setup(e){const t=g(!1),n=g(0),a=g(0);return{menuOptions:Me,showDropdown:t,x:n,y:a,onMenuSelect(r){e.handleMenuSelect(r),t.value=!1},handleBlur(){t.value=!1},onContextMenu(r){r.preventDefault(),t.value=!0,n.value=r.clientX,a.value=r.clientY},onClickoutside(r){t.value=!1}}}});function ko(e,t,n,a,r,l){const s=c("n-dropdown");return p(),D(Y,null,[h("div",{onContextmenu:t[0]||(t[0]=(...i)=>e.onContextMenu&&e.onContextMenu(...i))},[re(e.$slots,"default")],32),o(s,{placement:"bottom-start",x:e.x,y:e.y,"on-select":e.onMenuSelect,"on-clickoutside":e.onClickoutside,options:e.menuOptions,show:e.showDropdown},null,8,["x","y","on-select","on-clickoutside","options","show"])],64)}var So=w(bo,[["render",ko]]);const Eo=m({name:"LayTag",components:{NIcon:b,NButton:Se,NScrollbar:ye,NDropdown:U,ChevronDownOutline:vt,CloseSharp:yt,MouseMenu:So},inheritAttrs:!1,setup(){const e=K(),t=R(),n=A(),a=I();let r=se([]);const l=g(null),s=g(),i=M(()=>a.isDarkThemeGetter);return yo(r),gt(()=>{const u=l.value.scrollbarInstRef.containerRef;j(()=>{r.length,t.fullPath,J(()=>{go(u,s.value)})})}),{tags:r,layTag:s,scrollbar:l,menuOptions:Me,isDarkTheme:i,handleMenuSelect(u){Co(u,r)},handleTagOpen(u){e.push(u)},handleTagClose(u){r[u].fullPath===t.fullPath&&(u===0?e.push(r[u+1].fullPath):e.push(r[u-1].fullPath));const[f]=r.splice(u,1);n.DEL_KEEPALIVES(f.name)},isAffix(u){return u.meta&&u.meta.affix}}}}),wo={class:"lay-tag-box"},To={ref:"layTag",class:"lay-tag"},Do={class:"tag-cont"},Ao={class:"lay-tag-menu"};function $o(e,t,n,a,r,l){const s=c("close-sharp"),i=c("n-icon"),u=c("n-button"),f=c("mouse-menu"),S=c("NScrollbar"),E=c("chevron-down-outline"),y=c("n-dropdown");return p(),D("div",wo,[o(S,{ref:"scrollbar",style:{flex:"1"},"vertical-rail-style":{bottom:0},scrollable:!0,"x-scrollable":!0},{default:d(()=>[o(f,{"handle-menu-select":e.handleMenuSelect},{default:d(()=>[h("div",To,[(p(!0),D(Y,null,ge(e.tags,(v,z)=>(p(),D("div",{key:v.fullPath,class:le(["tag-item",v.fullPath===e.$route.fullPath?"tag-active":"default"])},[h("div",Do,[o(u,{class:"tag-btn",style:V(e.isDarkTheme?{color:"#fff"}:{}),type:v.fullPath===e.$route.fullPath?"primary":"default",onClick:ee=>e.handleTagOpen(v.fullPath)},{default:d(()=>[h("span",null,Ce(v.meta.title),1),e.isAffix(v)?X("",!0):(p(),_(i,{key:0,class:le([e.isDarkTheme?"":"tag-close-hover","tag-close"]),onClick:Ct(ee=>e.handleTagClose(z),["stop"])},{default:d(()=>[o(s)]),_:2},1032,["class","onClick"]))]),_:2},1032,["style","type","onClick"])])],2))),128))],512)]),_:1},8,["handle-menu-select"])]),_:1},512),h("div",Ao,[o(y,{trigger:"hover",placement:"bottom-end","on-select":e.handleMenuSelect,options:e.menuOptions},{default:d(()=>[o(u,{style:{width:"32px",height:"32px"}},{default:d(()=>[o(i,{size:18},{default:d(()=>[o(E)]),_:1})]),_:1})]),_:1},8,["on-select","options"])])])}var Lo=w(Eo,[["render",$o],["__scopeId","data-v-116d65ac"]]);const Po=m({name:"LayMain",setup(){return{keepAlives:A().keepAlivesGetter}}});function Oo(e,t,n,a,r,l){const s=c("router-view");return p(),_(s,null,{default:d(({Component:i,route:u})=>[o(kt,{appear:"",name:u.meta.transition||"fade",mode:"out-in"},{default:d(()=>[e.keepAlives?(p(),_(bt,{key:0,include:e.keepAlives},[(p(),_(Ee(i),{key:u.fullPath}))],1032,["include"])):(p(),_(Ee(i),{key:u.fullPath}))]),_:2},1032,["name"])]),_:1})}var Io=w(Po,[["render",Oo]]);const zo=m({name:"Layout",components:{LayMain:Io,LayTag:Lo,LaySidebar:fo,LayHeader:Jn,NLayout:St,NLayoutHeader:Et,NLayoutContent:wt,NLayoutSider:be},setup(e,t){const n=I(),a=A(),r=R(),l=g(!1),s=a.layConfigGetter,i=M(()=>n.isDarkThemeGetter),u=se({isMobile:!1,showMobileSlidebar:!1});Tt("mobileOptions",u);const f=ie();return f.start(),ke(r,S=>{f.start(),J(()=>{setTimeout(()=>{f.finish()},200)})},{immediate:!0}),{isDarkTheme:i,routerShow:l,layConfig:s}}});function Mo(e,t,n,a,r,l){const s=c("lay-sidebar"),i=c("lay-header"),u=c("n-layout-header"),f=c("lay-tag"),S=c("lay-main"),E=c("n-layout-content"),y=c("n-layout");return p(),_(y,{class:"layout-container","has-sider":""},{default:d(()=>[o(s),o(y,{style:{height:"100%"}},{default:d(()=>[o(u,{position:"absolute",style:{height:"64px",overflow:"hidden","z-index":"9"},"native-scrollbar":!1,inverted:e.layConfig.headerInverted,bordered:""},{default:d(()=>[o(i)]),_:1},8,["inverted"]),e.layConfig.tagShow?(p(),_(u,{key:0,position:"absolute",bordered:"",style:{height:"48px",left:"0",top:"64px",right:"0"}},{default:d(()=>[o(f)]),_:1})):X("",!0),o(E,{class:"layout-main",position:"absolute","native-scrollbar":!1,style:V({bottom:0,zIndex:8,transition:"top .25s",top:e.layConfig.tagShow?"112px":"64px",background:e.isDarkTheme?"transparent":"#f0f2f5"})},{default:d(()=>[o(S)]),_:1},8,["style"])]),_:1})]),_:1})}var N=w(zo,[["render",Mo]]);const No={class:"iframe"},Fo=["src"],xo=m({props:{src:{type:String,default:"https://gitee.com/zhizous"}},setup(e){return(t,n)=>(p(),D("div",No,[h("iframe",{src:e.src,class:"iframe-view",frameborder:"0"},null,8,Fo)]))}});const Ro=m({name:"RouterReload",setup(){}}),Ho={class:"ok-loading"},Vo=h("div",{class:"ball-loader"},[h("span"),h("span"),h("span"),h("span")],-1),Bo=[Vo];function Go(e,t,n,a,r,l){return p(),D("div",Ho,Bo)}var pe=w(Ro,[["render",Go]]);function k(e){return()=>new Promise(t=>{e().then(n=>{const a=(n.default.name||"okAdminMain")+"$"+Date.now(),r=m({name:a,setup(){const l=g(!1),s=ie();let i=null;return{isReload:l,handleReload:()=>{l.value=!0,s==null||s.start(),i&&clearTimeout(i),i=setTimeout(()=>{J(()=>{l.value=!1,s==null||s.finish()})},260)}}},render:function(){return this.isReload?P(pe):P("div",{class:"ok-admin-main"},[o(n.default)])}});t(r)})})}const jo=e=>{const t="okAdminMain$"+Date.now();return m({name:t,setup(){const n=g(!1),a=ie();let r=null;return{isReload:n,handleReload:()=>{n.value=!0,a==null||a.start(),r&&clearTimeout(r),r=setTimeout(()=>{J(()=>{n.value=!1,a==null||a.finish()})},260)}}},render:function(){return this.isReload?P(pe):e}})},Z=e=>jo(o(xo,{src:e}));var Ko={path:"/multi",component:N,meta:{title:"\u5DE5\u5177",icon:Dt},children:[{path:"menu-one",name:"menu-one",meta:{title:"\u5916\u90E8\u94FE\u63A5",href:"https://gitee.com/zhizous"}},{path:"frame",name:"frame",component:Q,meta:{title:"\u5185\u5D4C\u7F51\u9875"},children:[{path:"ok-admin-vue",name:"ok-admin-vue",component:Z("http://www.zhizous.cn/"),meta:{title:"ok-admin-vue"}},{path:"vue3",name:"vue3",component:Z("https://v3.cn.vuejs.org/"),meta:{title:"VUE3\u5B98\u7F51"}},{path:"naive-ui",name:"naive-ui",component:Z("https://www.naiveui.com/zh-CN/os-theme"),meta:{title:"NaiveUI\u5B98\u7F51"}},{path:"gitee",name:"gitee",component:Z("https://gitee.com/zhizous"),meta:{keepAlive:!0,title:"\u7801\u4E91\u5730\u5740"}}]},{path:"menu-three",name:"menu-three",component:Q,meta:{title:"\u591A\u7EA7\u83DC\u5355"},children:[{path:"menu-three-one",name:"menu-three-one",component:{render(){return _("div",{},[o("span",{a:"asf"},"\u83DC\u53553.1"),o("div",{},"\u6709\u70B9\u641E\u5934")])}},meta:{title:"\u83DC\u53553.1"}},{path:"menu-three-two",name:"menu-three-two",component:{render(){return _("div",{},"\u83DC\u53553.2")}},meta:{title:"\u83DC\u53553.2"}},{path:"menu-three-three",name:"menu-three-three",component:{render(){return o("div",{},"\u83DC\u53553.3")}},meta:{title:"\u83DC\u53553.3"}},{path:"menu-three-four",name:"menu-three-four",component:Q,meta:{title:"\u83DC\u53553.4"},children:[{path:"menu-three-four-one",name:"menu-three-four-one",component:{render(){return _("div",{},[o("span",{a:"asf"},"\u83DC\u53553.4.1"),o("div",{},"\u6709\u70B9\u641E\u5934")])}},meta:{title:"\u83DC\u53553.4.1"}},{path:"menu-three-four-two",name:"menu-three-four-two",component:{render(){return _("div",{},"\u83DC\u53553.4.2")}},meta:{title:"\u83DC\u53553.4.2"}},{path:"menu-three-four-three",name:"menu-three-four-three",component:{render(){return o("div",{},"\u83DC\u53553.4.3")}},meta:{title:"\u83DC\u53553.4.3"}}]}]}]};function Uo(e){const t=A();e.meta&&e.meta.keepAlive&&t.ADD_KEEPALIVES(e.matched[e.matched.length-1].components.default.name)}function Wo(e){e.beforeEach(async(t,n,a)=>{a()}),e.afterEach((t,n,a)=>{Uo(t)})}function qo(e,t){return/^\//.test(t)?t:/\/$/.test(e)?e+t:t?e+"/"+t:e}function Ne(e,t,n){return n=n||{},e.component&&e.component.name==="Layout"?n={path:t,name:e.name,component:e.component,redirect:e.redirect,meta:e.meta,children:[]}:(n.children=n.children||[],n.children.push({path:t,name:e.name,component:e.component,redirect:e.redirect,meta:e.meta})),e.children&&e.children.length&&e.children.forEach(a=>{const r=qo(t,a.path);Ne(a,r,n)}),n}function Yo(e){const t=[];return e.forEach(n=>{n.children&&n.children.length?t.push(Ne(n,n.path)):t.push(n)}),t}const Xo=4<new Date().getHours()&&new Date().getHours()<18,he=[{path:"/",redirect:"/dashboard/control",component:pe},{path:"/dashboard",component:N,redirect:"/dashboard/control",meta:{title:"Dashboard",icon:At},children:[{path:"control",name:"control",component:k(()=>C(()=>import("./index.660337ba.js"),["assets/index.660337ba.js","assets/index.b1ea1c39.css","assets/vendor.3e5191bd.js"])),meta:{title:"\u63A7\u5236\u53F0",keepAlive:!0,icon:$t,affix:!0}},{path:"workplace",name:"workplace",component:k(()=>C(()=>import("./index.1532ba47.js"),["assets/index.1532ba47.js","assets/index.2bf3e73e.css","assets/vendor.3e5191bd.js"])),meta:{title:"\u5DE5\u4F5C\u53F0",keepAlive:!0,icon:Xo?Lt:Pt}}]},{path:"/form",name:"form",component:N,redirect:"/form/basic-form",meta:{title:"\u8868\u5355",icon:Ot},children:[{path:"basic-form",name:"basic-form",component:k(()=>C(()=>import("./basic-form.ab2d1fbd.js"),["assets/basic-form.ab2d1fbd.js","assets/vendor.3e5191bd.js"])),meta:{title:"\u57FA\u7840\u8868\u5355"}},{path:"advanced-form",name:"advanced-form",component:k(()=>C(()=>import("./advanced-form.ce383308.js"),["assets/advanced-form.ce383308.js","assets/vendor.3e5191bd.js"])),meta:{title:"\u9AD8\u7EA7\u8868\u5355"}},{path:"step-form",name:"step-form",component:k(()=>C(()=>import("./advanced-form.ce383308.js"),["assets/advanced-form.ce383308.js","assets/vendor.3e5191bd.js"])),meta:{title:"\u5206\u6B65\u8868\u5355"}},{path:"detail",name:"detail",component:k(()=>C(()=>import("./advanced-form.ce383308.js"),["assets/advanced-form.ce383308.js","assets/vendor.3e5191bd.js"])),meta:{title:"\u8868\u5355\u8BE6\u60C5"}},{path:"test-form",name:"test-form",component:Q,meta:{title:"test\u8868\u5355"},children:[{path:"test1",name:"test1",component:k(()=>C(()=>import("./test-form.e910bc79.js"),["assets/test-form.e910bc79.js","assets/vendor.3e5191bd.js"])),meta:{title:"test\u8868\u53551",keepAlive:!0}},{path:"test2",name:"test2",component:k(()=>C(()=>import("./test-form.e910bc79.js"),["assets/test-form.e910bc79.js","assets/vendor.3e5191bd.js"])),meta:{title:"test\u8868\u53552",keepAlive:!0}}]}]},{path:"/list",name:"list",component:N,redirect:"/list/table-list",meta:{title:"\u5217\u8868",icon:It},children:[{path:"table-list",name:"table-list",component:k(()=>C(()=>import("./table-list.127bec22.js"),["assets/table-list.127bec22.js","assets/table-list.e3006f20.css","assets/vendor.3e5191bd.js"])),meta:{title:"\u67E5\u8BE2\u8868\u683C"}},{path:"card-list",name:"card-list",component:k(()=>C(()=>import("./card-list.95ed36fe.js"),["assets/card-list.95ed36fe.js","assets/card-list.36e3627b.css","assets/vendor.3e5191bd.js"])),meta:{title:"\u5361\u7247\u5217\u8868"}}]},{path:"/exception",name:"exception",component:N,redirect:"/exception/404",meta:{title:"\u5F02\u5E38\u9875",icon:zt},children:[{path:"403",name:"403",component:k(()=>C(()=>import("./403.e24b9954.js"),["assets/403.e24b9954.js","assets/vendor.3e5191bd.js"])),meta:{title:"403"}},{path:"404",name:"404",component:k(()=>C(()=>import("./404.fc3aff13.js"),["assets/404.fc3aff13.js","assets/vendor.3e5191bd.js"])),meta:{title:"404"}},{path:"500",name:"500",component:k(()=>C(()=>import("./500.0b94f36f.js"),["assets/500.0b94f36f.js","assets/vendor.3e5191bd.js"])),meta:{title:"500"}}]},{path:"/user",component:N,children:[{path:"",name:"user",component:k(()=>C(()=>import("./index.cfd2b0f1.js"),["assets/index.cfd2b0f1.js","assets/index.444c15e0.css","assets/vendor.3e5191bd.js"])),meta:{title:"\u4E2A\u4EBA\u4E2D\u5FC3",icon:Mt}}]},Ko],Jo=[{path:"/login",name:"Login",component:()=>C(()=>import("./index.f9849c5a.js"),["assets/index.f9849c5a.js","assets/index.176f6b6c.css","assets/vendor.3e5191bd.js"]),meta:{title:"\u767B\u5F55"}}],Qo=Yo(he),Fe=Nt({history:Ft(),routes:Jo.concat(Qo),strict:!0,scrollBehavior:()=>({left:0,top:0})});Wo(Fe);var F=Fe,Zo={install(e){e.component("NButton",Se),e.component("NIcon",b),e.component("NForm",xt),e.component("NInput",Rt),e.component("NCard",Ht),e.component("NGrid",H),e.component("NGi",O),e.component("NGridItem",O)}};const ea={};function ta(e,t){return p(),D("div",null,"Hello")}var na=w(ea,[["render",ta]]),oa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:na}),aa=m({setup(){const e=g("\u4F60\u597D");return{current:e,handleTest(){e.value=Math.random()*1e3}}},render(){return o("div",null,[o("div",{style:"padding: 20px"},[this.current]),o("div",null,[o(c("n-button"),{onClick:this.handleTest},{default:()=>[T("\u70B9\u51FB")]})])])}}),ra=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:aa});const fe={"../components/global/Test.tsx":ra},_e={"../components/global/Hello.vue":oa};var sa={install:function(e){let t="";for(const n in fe)t=fe[n].default.name||n.substring(n.lastIndexOf("/")+1),t=t.replace(".tsx",""),e.component(t,fe[n].default);for(const n in _e)t=_e[n].default.name||n.substring(n.lastIndexOf("/")+1),t=t.replace(".vue",""),e.component(t,_e[n].default)}};const G=Vt(fn);G.use(Zo);G.use(sa);const la=Bt();G.use(la);G.use(F);G.mount("#app");export{w as _,mn as a,Pn as b,A as c,C as d,Oe as e,I as u};