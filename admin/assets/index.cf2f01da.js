import{d as e,u as t,a,r as o,w as n,o as l,b as r,c as s,e as i,f as c,g as d,h as m,N as u,n as p,i as h,j as f,k as v,E as y,C as g,l as b,v as C,m as _,R as k,p as w,q as S,s as P,P as E,t as L,x,y as T,z,A as I,B as A,D as N,F as O,G as D,H,I as M,J as R,K as G,L as V,M as B,O as K,Q as j,S as U,T as F,U as $,V as W,W as q,X as Y,Y as J,Z as Q,_ as X,$ as Z,a0 as ee,a1 as te,a2 as ae,a3 as oe,a4 as ne,a5 as le,a6 as re,a7 as se,a8 as ie,a9 as ce,aa as de,ab as me,ac as ue,ad as pe,ae as he,af as fe,ag as ve,ah as ye,ai as ge,aj as be,ak as Ce,al as _e,am as ke,an as we,ao as Se,ap as Pe,aq as Ee,ar as Le,as as xe,at as Te,au as ze,av as Ie,aw as Ae,ax as Ne,ay as Oe,az as De,aA as He}from"./vendor.a7285a33.js";var Me=e({setup(e){const v=t(),y=a(),g=o(null),b=o(null),C=document.getElementsByTagName("body")[0];return n((()=>{const e=v.getters["theme/appThemeGetter"];b.value={common:e},C.style.setProperty("--primary-color",e.primaryColor),C.style.setProperty("--primary-color-hover",e.primaryColorHover),C.style.setProperty("--primary-color-pressed",e.primaryColorPressed)})),l((()=>{r(y,(e=>{var t;null==(t=g.value)||t.start(),p((()=>{var e;null==(e=g.value)||e.finish()}))}))})),(e,t)=>{const a=s("router-view");return i(),c(m(u),{"theme-overrides":m(b)},{default:d((()=>[h(m(f),{ref:g},{default:d((()=>[h(a)])),_:1},512)])),_:1},8,["theme-overrides"])}}});let Re;const Ge={},Ve=function(e,t){if(!t||0===t.length)return e();if(void 0===Re){const e=document.createElement("link").relList;Re=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in Ge)return;Ge[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":Re,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},Be=function(e){return h("path",{d:e,fill:"currentColor"},null,-1)};function Ke(e){return c("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[Be(e)])}var je=e({name:"LockClosed",render:()=>Ke("M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75zm-5.75 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5z")});e({name:"StarRound",render:()=>Ke("M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z")});e({name:"StarBorderRound",render:()=>Ke("M19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z")});var Ue=e({name:"ButtonFullScreen",props:{size:{type:[Number,String],default:18}},components:{NIcon:v,ExpandOutline:y,ContractOutline:g},setup(e){let t=o(!1);const a=()=>{let e="",a="";t.value?(e=document,a=e.cancelFullScreen||e.webkitCancelFullScreen||e.mozCancelFullScreen||e.exitFullScreen):(e=document.documentElement,a=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen),a&&(t.value=!t.value,a.call(e))};return()=>h("div",{title:"全屏切换",onClick:a,class:"flex-center btn-content lay-hover"},[h(s("n-icon"),{class:"lay-hover",size:e.size},{default:()=>[b(h(s("contract-outline"),null,null),[[C,t.value]]),b(h(s("expand-outline"),null,null),[[C,!t.value]])]})])}});const Fe=function(e){return h("path",{d:e,fill:"currentColor"},null,-1)};function $e(e){return c("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},[Fe(e)])}var We=e({name:"MenuUnfoldOutlined",render:()=>$e("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z")});var qe=e({name:"MenuUnfoldOutlined",render:()=>$e("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z")}),Ye=e({name:"ButtonMenu",props:{size:{type:[Number,String],default:20}},setup(e){const a=t(),o=_("mobileOptions"),n=a.getters["admin/layConfigGetter"];function l(){o.isMobile?o.showMobileSlidebar=!0:n.collapsed=!n.collapsed}return()=>h("div",{title:"菜单切换",onClick:l,class:"flex-center btn-content lay-hover"},[h(s("n-icon"),{size:e.size},{default:()=>[b(h(qe,null,null),[[C,n.collapsed]]),b(h(We,null,null),[[C,!n.collapsed]])]})])}}),Je=e({name:"ButtonMenu",props:{size:{type:[Number,String],default:18}},setup(e){const o=t(),n=a();function l(){n.matched[n.matched.length-1].instances.default.handleReload()}return _("mobileOptions"),o.getters["admin/layConfigGetter"],()=>h("div",{title:"刷新页面",onClick:l,class:"flex-center btn-content lay-hover"},[h(s("n-icon"),{class:"lay-hover",size:e.size},{default:()=>[h(k,null,null)]})])}}),Qe="/ok-admin-vue/assets/avatar.6ed3105e.png";const Xe=e=>()=>P(v,null,{default:()=>P(e)});var Ze=e({name:"UserMenu",setup(){const e=S();return{userMenus:[{label:"个人中心",icon:Xe(T),key:"user"},{type:"divider",key:"d1"},{label:"退出登录",key:"exit",icon:Xe(E)}],handleSelect:t=>{console.log(t),"exit"===t&&e.replace("/login")}}},render:function(){return h(w,{trigger:"hover",onSelect:this.handleSelect,options:this.userMenus},{default:()=>[h("div",{class:"flex-center btn-content lay-hover"},[h(L,{circle:!0,size:"small",src:Qe},null),h("div",{class:"padding-left-10"},[x("Admin")])])]})}}),et=e({name:"SetNavigation",components:{EllipsisVertical:z,Ellipse:I,NTooltip:A,NDrawer:N,NDrawerContent:O,NGrid:D,NGi:H,NIcon:v,NDivider:M},setup:()=>({layConfig:t().getters["admin/layConfigGetter"],navThemeDark:"/ok-admin-vue/assets/nav-theme-dark.d93c9dff.svg",navThemeLight:"/ok-admin-vue/assets/nav-theme-light.f039dce7.svg",headerThemeDark:"/ok-admin-vue/assets/header-theme-dark.932bb39b.svg"})});const tt=B();R("data-v-062512b7");const at={class:"padding-bottom-10"},ot=x("导航栏风格"),nt=x(" 暗色侧边栏 "),lt={class:"checked"},rt=x(" 亮色侧边栏 "),st={class:"checked"},it=x(" 亮色顶栏 "),ct={class:"checked"},dt=x(" 暗色顶栏 "),mt={class:"checked"};G();const ut=tt(((e,t,a,o,n,l)=>{const r=s("n-divider"),d=s("n-tooltip"),m=s("Ellipse"),u=s("n-icon"),p=s("n-gi"),f=s("n-grid");return i(),c("div",at,[h(r,null,{default:tt((()=>[ot])),_:1}),V(" 左边栏主题 "),h(f,{class:"sidebar-thenme","x-gap":"12",cols:3},{default:tt((()=>[V(" 左边栏暗色主题 "),h(p,{class:"thenme"},{default:tt((()=>[h(d,{trigger:"hover"},{trigger:tt((()=>[h("div",{onClick:t[1]||(t[1]=t=>e.layConfig.sidebarInverted=!0),class:"thenme-checkbox pointer"},[h("img",{src:e.navThemeDark,alt:"navThemeDark"},null,8,["src"])])])),default:tt((()=>[nt])),_:1}),b(h("div",lt,[h(u,{class:"checked-color",size:"10"},{default:tt((()=>[h(m)])),_:1})],512),[[C,e.layConfig.sidebarInverted]])])),_:1}),V(" 左边栏亮色主题 "),h(p,{class:"thenme"},{default:tt((()=>[h(d,{trigger:"hover"},{trigger:tt((()=>[h("div",{onClick:t[2]||(t[2]=t=>e.layConfig.sidebarInverted=!1),class:"thenme-checkbox pointer"},[h("img",{src:e.navThemeLight,alt:"navThemeLight"},null,8,["src"])])])),default:tt((()=>[rt])),_:1}),b(h("div",st,[h(u,{class:"checked-color",size:"10"},{default:tt((()=>[h(m)])),_:1})],512),[[C,!e.layConfig.sidebarInverted]])])),_:1})])),_:1}),V(" 头部主题 "),h(f,{class:"header-thenme","x-gap":"12",cols:3},{default:tt((()=>[V(" 顶栏亮色主题 "),h(p,{class:"thenme"},{default:tt((()=>[h(d,{trigger:"hover"},{trigger:tt((()=>[h("div",{onClick:t[3]||(t[3]=t=>e.layConfig.headerInverted=!1),class:"thenme-checkbox pointer"},[h("img",{src:e.navThemeDark,alt:"navThemeDark"},null,8,["src"])])])),default:tt((()=>[it])),_:1}),b(h("div",ct,[h(u,{class:"checked-color",size:"10"},{default:tt((()=>[h(m)])),_:1})],512),[[C,!e.layConfig.headerInverted]])])),_:1}),V(" 顶栏暗色主题 "),h(p,{class:"thenme"},{default:tt((()=>[h(d,{trigger:"hover"},{trigger:tt((()=>[h("div",{onClick:t[4]||(t[4]=t=>e.layConfig.headerInverted=!0),class:"thenme-checkbox pointer"},[h("img",{src:e.headerThemeDark,alt:"headerThemeDark"},null,8,["src"])])])),default:tt((()=>[dt])),_:1}),b(h("div",mt,[h(u,{class:"checked-color",size:"10"},{default:tt((()=>[h(m)])),_:1})],512),[[C,e.layConfig.headerInverted]])])),_:1})])),_:1})])}));et.render=ut,et.__scopeId="data-v-062512b7";var pt=e({name:"SetTheme",components:{NGrid:D,NGi:H,NIcon:v,NDivider:M,CheckmarkSharp:K},setup(){const e=t();return{store:e,handleTheme(t){e.commit("theme/SET_APPTHEME",t)}}}});const ht=B();R("data-v-9960ee9a");const ft={class:"padding-bottom-10"},vt=x("系统主题");G();const yt=ht(((e,t,a,o,n,l)=>{const r=s("n-divider"),d=s("CheckmarkSharp"),m=s("n-icon"),u=s("n-gi"),p=s("n-grid");return i(),c("div",ft,[h(r,null,{default:ht((()=>[vt])),_:1}),h(p,{"x-gap":4,"y-gap":4,cols:8},{default:ht((()=>[(i(!0),c(j,null,U(e.store.state.theme.appThemeList,(t=>(i(),c(u,{key:t.primaryColor},{default:ht((()=>[h("div",{onClick:a=>e.handleTheme(t),class:"item",style:{backgroundColor:t.primaryColor}},[b(h(m,null,{default:ht((()=>[h(d)])),_:2},1536),[[C,t===e.store.state.theme.appTheme]])],12,["onClick"])])),_:2},1024)))),128))])),_:1})])}));pt.render=yt,pt.__scopeId="data-v-9960ee9a";var gt=e({name:"SetOther",components:{NDivider:M,NSwitch:F},setup:()=>({layConfig:t().getters["admin/layConfigGetter"]})});const bt=B();R("data-v-08bc7439");const Ct={class:"padding-bottom-10"},_t=x("其他设置"),kt={class:"set-other"},wt=h("div",{class:"tit"},"开启多页标签",-1);G();const St=bt(((e,t,a,o,n,l)=>{const r=s("n-divider"),d=s("n-switch");return i(),c("div",Ct,[h(r,null,{default:bt((()=>[_t])),_:1}),h("div",kt,[wt,h(d,{value:e.layConfig.tagShow,"onUpdate:value":t[1]||(t[1]=t=>e.layConfig.tagShow=t)},null,8,["value"])])])}));gt.render=St,gt.__scopeId="data-v-08bc7439";var Pt=e({name:"LaySetting",props:{size:{type:[Number,String],default:18}},components:{NDrawer:N,NDrawerContent:O,NScrollbar:$,SetTheme:pt,SetOther:gt,SetNavigation:et,SettingsOutline:W}});const Et=B();R("data-v-ba31cfda");const Lt={class:"setting-box"};G();const xt=Et(((e,t,a,o,n,l)=>{const r=s("set-theme"),d=s("set-navigation"),m=s("set-other"),u=s("n-scrollbar"),p=s("n-drawer-content"),f=s("n-drawer");return i(),c(f,null,{default:Et((()=>[h(p,{"body-style":{overflow:"hidden"},"body-content-style":{padding:0},title:"系统配置"},{default:Et((()=>[h(u,{class:"set-scrollbar",scrollable:!0},{default:Et((()=>[h("div",Lt,[h(r),h(d),h(m)])])),_:1})])),_:1})])),_:1})}));Pt.render=xt,Pt.__scopeId="data-v-ba31cfda";var Tt=e({name:"LayHeader",components:{NGi:H,NGrid:D,NIcon:v,NBreadcrumb:q,NBreadcrumbItem:Y,NDropdown:w,LaySetting:Pt,GlobeOutline:J,SettingsOutline:W,UserMenu:Ze,LockClosed:je,ButtonMenu:Ye,ButtonRefresh:Je,ButtonFullScreen:Ue},setup(){const e=a(),t=o(!1);let l=o([]);return n((()=>{l.value=[];const t=e.matched;for(let e=0;e<t.length;e++)l.value.push(t[e].meta.title)})),{setShow:t,matcheds:l,optionsISO:[{label:"简体中文",key:"zh"},{label:"English",key:"en"}],handleSelect:e=>{console.log(e)}}}});const zt=B();R("data-v-2b55d5ce");const It={class:"lay-header"},At={class:"header-left"},Nt={class:"header-right"},Ot={title:"锁屏","xs-hidden":"",class:"flex-center btn-content lay-hover"},Dt={title:"语言切换","xs-hidden":"",class:"flex-center btn-content lay-hover"};G();const Ht=zt(((e,t,a,o,n,l)=>{const r=s("button-menu"),d=s("button-refresh"),m=s("n-breadcrumb-item"),u=s("n-breadcrumb"),p=s("n-gi"),f=s("lock-closed"),v=s("n-icon"),y=s("button-full-screen"),g=s("globe-outline"),b=s("n-dropdown"),C=s("user-menu"),_=s("settings-outline"),k=s("lay-setting"),w=s("n-grid");return i(),c("div",It,[h(w,{"x-gap":"2",cols:"2"},{default:zt((()=>[V(" left "),h(p,null,{default:zt((()=>[h("div",At,[V(" 菜单切换 "),h(r),V(" 刷新页面 "),h(d),V(" 面包屑 "),h(u,{"sm-hidden":"","xs-hidden":""},{default:zt((()=>[(i(!0),c(j,null,U(e.matcheds,(e=>(i(),c(m,{key:e},{default:zt((()=>[x(Q(e),1)])),_:2},1024)))),128))])),_:1})])])),_:1}),V(" right "),h(p,{suffix:""},{default:zt((()=>[h("div",Nt,[V(" 锁屏 "),h("div",Ot,[h(v,{class:"lay-hover",size:"20"},{default:zt((()=>[h(f)])),_:1})]),V(" 全屏按钮 "),h(y,{"xs-hidden":"",size:"18"}),V(" 语言切换 "),h(b,{trigger:"hover",onSelect:e.handleSelect,options:e.optionsISO},{default:zt((()=>[h("div",Dt,[h(v,{class:"lay-hover",size:"18"},{default:zt((()=>[h(g)])),_:1})])])),_:1},8,["onSelect","options"]),V(" 用户菜单 "),h(C),V(" 系统设置 "),h("div",{onClick:t[2]||(t[2]=t=>e.setShow=!0),title:"系统设置",class:"flex-center btn-content lay-hover"},[h(v,{class:"setting-btn lay-hover",size:"18"},{default:zt((()=>[h(_)])),_:1}),h(k,{show:e.setShow,"onUpdate:show":t[1]||(t[1]=t=>e.setShow=t)},null,8,["show"])])])])),_:1})])),_:1})])}));Tt.render=Ht,Tt.__scopeId="data-v-2b55d5ce";var Mt="/ok-admin-vue/assets/head.c9c18204.png",Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mt});const Gt=function(e){e(globalThis.innerWidth),globalThis.onresize=function(e,t=300){let a=null;return function(){a&&clearTimeout(a),a=setTimeout(function(t){e.apply(this,t)}.bind(this,arguments),t)}}((t=>{e(t.target.innerWidth)}))},Vt=function(e){return!!/^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i.test(e)};let Bt=[];function Kt(e,t,a){if(e.meta&&e.meta.hidden)return a;const o=((r=e.meta)&&r.href&&Vt(r.href)?r.href:"")||(n=t,l=e.path,/^\//.test(l)?l:/\/$/.test(n)?n+l:l?n+"/"+l:n);var n,l,r;const s=e.meta?e.meta.title:e.name;var i;return a={label:s,key:o},e.meta&&e.meta.icon&&(a.icon=(i=e.meta.icon,()=>P(v,null,{default:()=>P(i)}))),e.children&&e.children.length&&(a.children=[],e.children.forEach((e=>{var t,n;if(!(null==(t=e.meta)?void 0:t.hidden)){const t=Kt(e,o);t&&(null==(n=null==a?void 0:a.children)||n.push(t))}})),0===a.children.length)?void 0:a}var jt=e({name:"LayDrawer",props:{width:{type:Number,default:256}},components:{NDrawer:N},setup(){const e=t().getters["admin/layConfigGetter"],a=_("mobileOptions");return Gt((t=>{t<=768?(a.showMobileSlidebar=!1,a.isMobile=!0,e.collapsed=!1):a.isMobile=!1})),{layConfig:e,mobileOptions:a}}});jt.render=function(e,t,a,o,n,l){const r=s("n-drawer");return i(),c(j,null,[e.mobileOptions.isMobile?(i(),c(r,{key:0,class:"lay-drawer-slider",show:e.mobileOptions.showMobileSlidebar,"onUpdate:show":t[1]||(t[1]=t=>e.mobileOptions.showMobileSlidebar=t),style:{backgroundColor:e.layConfig.sidebarInverted?"#001428":""},"native-scrollbar":!1,width:e.width,placement:"left"},{default:d((()=>[X(e.$slots,"default")])),_:3},8,["show","style","width"])):V("v-if",!0),e.mobileOptions.isMobile?V("v-if",!0):X(e.$slots,"default",{key:1})],64)};var Ut=e({name:"LaySidebar",components:{LayDrawer:jt,NLayoutSider:Z,NImage:ee,NMenu:te,NSpace:ae,NSwitch:F},setup(e,l){const r=function(){const e=Sa.reduce(((e,t)=>(t.component&&"Layout"===t.component.name&&e.push(t),e)),[]);return Bt=e.reduce(((e,t)=>{if(t.meta&&t.meta.hidden)return e;if(t.children&&1===t.children.length){const a=Kt(t.children[0],t.path);a&&e.push(a)}else if(t.children&&t.children.length>1){const a=Kt(t,t.path);a&&e.push(a)}return e}),[]),Bt}(),s=t(),i=S(),c=a(),d=_("mobileOptions"),m=s.getters["admin/layConfigGetter"],u=o(!0),p=oe({menuKey:"",menuKeys:[""]});return n((()=>{p.menuKey=c.fullPath,p.menuKeys=c.matched.map((e=>e.path))})),{menuConfig:p,layConfig:m,menuOptions:r,active:u,sliderWidth:240,getSrc:e=>({"../../assets/head.png":Rt}["../../assets/head.png"].default),handleUpdateValue:e=>{if(d.showMobileSlidebar=!1,Vt(e)){const t=document.createElement("a");t.href=e,t.target="_blank",t.click()}else i.push(e)}}}});const Ft=B();R("data-v-c2962a42");const $t={class:"lay-sidebar"},Wt=h("img",{class:"img",alt:"logo",src:Mt},null,-1);G();const qt=Ft(((e,t,a,o,n,l)=>{const r=s("n-menu"),d=s("n-layout-sider"),m=s("lay-drawer");return i(),c(m,{show:e.active,"onUpdate:show":t[2]||(t[2]=t=>e.active=t),style:{backgroundColor:e.layConfig.sidebarInverted?"#001428":""},"native-scrollbar":!1,width:e.sliderWidth,placement:"left"},{default:Ft((()=>[h(d,{style:{zIndex:999,minHeight:"100%",boxShadow:"2px 0 6px var(--border-color)"},width:e.sliderWidth,"native-scrollbar":!1,"collapse-mode":"width",collapsed:e.layConfig.collapsed,inverted:e.layConfig.sidebarInverted,"collapsed-width":64,bordered:""},{default:Ft((()=>[h("div",$t,[h("div",{class:["head",{"head-inverted":e.layConfig.sidebarInverted}]},[Wt],2),h(r,{indent:22,"collapsed-width":64,"collapsed-icon-size":22,inverted:e.layConfig.sidebarInverted,options:e.menuOptions,key:e.menuConfig.menuKey,"default-value":e.menuConfig.menuKey,"expanded-keys":e.menuConfig.menuKeys,"onUpdate:value":e.handleUpdateValue,"onUpdate:expandedKeys":t[1]||(t[1]=t=>e.menuConfig.menuKeys=t)},null,8,["inverted","options","default-value","expanded-keys","onUpdate:value"])])])),_:1},8,["style","width","collapsed","inverted"])])),_:1},8,["show","style","width"])}));Ut.render=qt,Ut.__scopeId="data-v-c2962a42";var Yt={namespaced:!0,state:{keepAlives:[],layTags:[],layConfig:{sidebarInverted:!0,headerInverted:!1,collapsed:!1,tagShow:!0}},mutations:{SET_LAYTAGS:(e,t)=>{e.layTags=t},SET_LAYCONFIG:function(e,t){e.layConfig[t.key]=t.value},SET_LAYCONFIGS:(e,t)=>{e.layConfig=t},ADD_KEEPALIVES:(e,t)=>{e.keepAlives.indexOf(t)<0&&e.keepAlives.push(t)},DEL_KEEPALIVES:(e,t)=>{const a=e.keepAlives.indexOf(t);a>=0&&e.keepAlives.splice(a,1)}},actions:{},getters:{keepAlivesGetter:(e,t,a)=>e.keepAlives,layTagsGetter:(e,t,a)=>e.layTags,layConfigGetter:(e,t,a)=>e.layConfig}},Jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yt});const Qt={primaryColor:"#18A058",primaryColorHover:"#36AD6A",primaryColorPressed:"#0C7A43"},Xt={defaultColor:Qt,layuiColor:{primaryColor:"#009688",primaryColorHover:"#33aba0",primaryColorPressed:"#00877a"},antdColor:{primaryColor:"#1890ff",primaryColorHover:"#40a9ff",primaryColorPressed:"#096dd9",primaryColorDins:""},dustRedColor:{primaryColor:"#f5222d",primaryColorHover:"#ff4d4f",primaryColorPressed:"#cf1322"},volcanoColor:{primaryColor:"#ff7a45",primaryColorHover:"#ff4d4f",primaryColorPressed:"#d4380d"},sunsetOrangeColor:{primaryColor:"#fa8c16",primaryColorHover:"#ffa940",primaryColorPressed:"#d46b08"},calendulaGoldColor:{primaryColor:"#faad14",primaryColorHover:"#ffc53d",primaryColorPressed:"#d48806"},sunriseColor:{primaryColor:"#fadb14",primaryColorHover:"#ffec3d",primaryColorPressed:"#d4b106"},limeColor:{primaryColor:"#a0d911",primaryColorHover:"#bae637",primaryColorPressed:"#7cb305"},polarGreenColor:{primaryColor:"#52c41a",primaryColorHover:"#73d13d",primaryColorPressed:"#389e0d"},cyanColor:{primaryColor:"#13c2c2",primaryColorHover:"#36cfc9",primaryColorPressed:"#08979c"},geekBlueColor:{primaryColor:"#2f54eb",primaryColorHover:"#597ef7",primaryColorPressed:"#1d39c4"},goldenPurpleColor:{primaryColor:"#722ed1",primaryColorHover:"#9254de",primaryColorPressed:"#531dab"},magentaColor:{primaryColor:"#eb2f96",primaryColorHover:"#f759ab",primaryColorPressed:"#c41d7f"},blueColor:{primaryColor:"#2d8cf0",primaryColorHover:"#57a3f3",primaryColorPressed:"#297ed8"},pureBlueColor:{primaryColor:"#0960bd",primaryColorHover:"#3a80ca",primaryColorPressed:"#0856aa"},purpleColor:{primaryColor:"#536dfe",primaryColorHover:"#758afe",primaryColorPressed:"#4b62e5"},pinkColor:{primaryColor:"#ff5c93",primaryColorHover:"#ff7da9",primaryColorPressed:"#e65384"},orangeColor:{primaryColor:"#ee4f12",primaryColorHover:"#f17241",primaryColorPressed:"#d64710"},oceanColor:{primaryColor:"#0096c7",primaryColorHover:"#33abd2",primaryColorPressed:"#0087b3"},purpleBColor:{primaryColor:"#9c27b0",primaryColorHover:"#b052c0",primaryColorPressed:"#8c239e"},yellowColor:{primaryColor:"#ff9800",primaryColorHover:"#ffad33",primaryColorPressed:"#e68900"}};var Zt={appTheme:Qt,appThemeList:Xt};var ea={namespaced:!0,state:{appTheme:Zt.appTheme,appThemeList:Zt.appThemeList},mutations:{SET_APPTHEME:(e,t)=>{e.appTheme=t}},actions:{},getters:{appThemeGetter:(e,t,a)=>e.appTheme,appThemeListGetter:(e,t,a)=>e.appThemeList}};const ta={"./modules/admin.ts":Jt,"./modules/theme.ts":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ea})},aa={};for(const za in ta)aa[za.replace(/(\.\/modules\/|\.ts)/g,"")]=ta[za].default;var oa=ne({modules:aa,state:{current:5},mutations:{SET_CURRENT:(e,t)=>{e.current+=parseInt(t)}},actions:{}});const na=e=>P(v,null,{default:()=>P(e)}),la=[{label:"关闭左侧",key:"closeLeft",icon:()=>na(ce)},{label:"关闭右侧",key:"closeRight",icon:()=>na(le)},{label:"关闭其他",key:"closeOther",icon:()=>na(re)},{label:"关闭全部",key:"closeAll",icon:()=>na(se)},{label:"关闭当前",key:"closeThis",icon:()=>na(ie)}];var ra=e({name:"LayTag",inheritAttrs:!1,components:{NIcon:v,NButton:de,NScrollbar:$,NDropdown:w,ChevronDownOutline:me,CloseSharp:ue},setup(){const e=S(),s=a(),i=t();let c=oe([]);const d=o(),m=o();return function(e){const t=Ea.currentRoute;Sa.forEach(((t,a)=>{var o,n;(n=t).component&&"Layout"===n.component.name&&n.children&&n.children.length&&(null==(o=t.children)||o.forEach((a=>{if(a.meta&&a.meta.affix){const l=(o=t.path,n=a.path,/^\//.test(n)?n:/\/$/.test(o)?o+n:n?o+"/"+n:o),r="function"==typeof a.component?a.component():a;e.push({fullPath:l,name:r.name,meta:a.meta})}var o,n})))})),r(t,(t=>{if(t.meta&&t.meta.tagHidden)return;const a=e.some((e=>e.fullPath===t.fullPath)),o=t.matched;if(!a&&o.length){const a=o[o.length-1].components.default;e.push({name:a.name,fullPath:t.fullPath,meta:t.meta})}}),{immediate:!0})}(c),l((()=>{const e=d.value.containerRef;n((()=>{c.length,s.fullPath,p((()=>{!function(e,t){const a=t.querySelector(".tag-active");if(!a)return;const o=e.offsetWidth;t.offsetWidth;const n=a.offsetWidth,l=e.scrollLeft-a.offsetLeft,r=o-n;if(e.scrollLeft>a.offsetLeft){const t=a.previousSibling;t&&1===t.nodeType?e.scrollLeft=a.offsetLeft-t.offsetWidth:e.scrollLeft=0}else Math.abs(l)>r&&(e.scrollLeft=a.offsetLeft)}(e,m.value)}))}))})),{tags:c,layTag:m,scrollbar:d,menuOptions:la,handleMenuSelect(e){!function(e,t){const a=Ea.currentRoute.value,o=t.findIndex((e=>e.fullPath===a.fullPath));switch(e){case"closeLeft":let e=0;for(;t[e].fullPath!==a.fullPath;)if(t[e].fullPath===a.fullPath||t[e].meta.affix)e++;else{const[a]=t.splice(e,1);oa.commit("admin/DEL_KEEPALIVES",a.name)}break;case"closeRight":let n=o+1;for(;n<t.length&&t[n].fullPath!==a.fullPath;)if(t[n].fullPath===a.fullPath||t[n].meta.affix)n++;else{const[e]=t.splice(n,1);oa.commit("admin/DEL_KEEPALIVES",e.name)}break;case"closeOther":for(let o=0;o<t.length;o++)if(t[o].fullPath!==a.fullPath&&!t[o].meta.affix){const[e]=t.splice(o,1);oa.commit("admin/DEL_KEEPALIVES",e.name),o--}break;case"closeAll":for(let a=0;a<t.length;a++)if(!t[a].meta.affix){const[e]=t.splice(a,1);oa.commit("admin/DEL_KEEPALIVES",e.name),a--}t.find((e=>e.fullPath===a.fullPath))||Ea.push(t[t.length-1].fullPath);break;case"closeThis":if(!t[o].meta.affix){0===o?Ea.push(t[o+1].fullPath):Ea.push(t[o-1].fullPath);const[e]=t.splice(o,1);oa.commit("admin/DEL_KEEPALIVES",e.name)}}}(e,c)},handleTagOpen(t){e.push(t)},handleTagClose(t){c[t].fullPath===s.fullPath&&(0===t?e.push(c[t+1].fullPath):e.push(c[t-1].fullPath));const[a]=c.splice(t,1);i.commit("admin/DEL_KEEPALIVES",a.name)},isAffix:e=>e.meta&&e.meta.affix}}});const sa=B();R("data-v-11490e6c");const ia={class:"lay-tag-box lay-hairline--bottom"},ca={class:"lay-tag",ref:"layTag"},da={class:"tag-cont"},ma={class:"lay-tag-menu"};G();const ua=sa(((e,t,a,o,n,l)=>{const r=s("close-sharp"),d=s("n-icon"),m=s("n-button"),u=s("n-scrollbar"),p=s("chevron-down-outline"),f=s("n-dropdown");return i(),c("div",ia,[h(u,{style:{flex:"1"},ref:"scrollbar","vertical-rail-style":{bottom:0},scrollable:!0,"x-scrollable":!0},{default:sa((()=>[h("div",ca,[(i(!0),c(j,null,U(e.tags,((t,a)=>(i(),c("div",{class:["tag-item",t.fullPath===e.$route.fullPath?"tag-active":"default"],key:t.fullPath},[h("div",da,[h(m,{class:"tag-btn",onClick:a=>e.handleTagOpen(t.fullPath),type:t.fullPath===e.$route.fullPath?"primary":"default"},{default:sa((()=>[h("span",null,Q(t.meta.title),1),e.isAffix(t)?V("v-if",!0):(i(),c(d,{key:0,onClick:pe((t=>e.handleTagClose(a)),["stop"]),class:"tag-close"},{default:sa((()=>[h(r)])),_:2},1032,["onClick"]))])),_:2},1032,["onClick","type"])])],2)))),128))],512)])),_:1},512),h("div",ma,[h(f,{trigger:"hover",placement:"bottom-end",onSelect:e.handleMenuSelect,options:e.menuOptions},{default:sa((()=>[h(m,{style:{width:"32px",height:"32px"}},{default:sa((()=>[h(d,{size:18},{default:sa((()=>[h(p)])),_:1})])),_:1})])),_:1},8,["onSelect","options"])])])}));ra.render=ua,ra.__scopeId="data-v-11490e6c";var pa=e({name:"layMain",setup:()=>({keepAlives:t().getters["admin/keepAlivesGetter"]})});pa.render=function(e,t,a,o,n,l){const r=s("router-view");return i(),c(r,null,{default:d((({Component:t,route:a})=>[h(ve,{appear:"",name:a.meta.transition||"fade",mode:"out-in"},{default:d((()=>[e.keepAlives?(i(),c(he,{key:0,include:e.keepAlives},[(i(),c(fe(t),{key:a.fullPath}))],1032,["include"])):(i(),c(fe(t),{key:a.fullPath}))])),_:2},1032,["name"])])),_:1})};var ha=e({name:"Layout",components:{LayMain:pa,LayTag:ra,LaySidebar:Ut,LayHeader:Tt,NLayout:ye,NLayoutHeader:ge,NLayoutContent:be,NLayoutSider:Z},setup(e,a){const n=t(),l=o(!1),r=n.getters["admin/layConfigGetter"],s=oe({isMobile:!1,showMobileSlidebar:!1});return Ce("mobileOptions",s),{routerShow:l,layConfig:r}}});ha.render=function(e,t,a,o,n,l){const r=s("lay-sidebar"),m=s("lay-header"),u=s("n-layout-header"),p=s("lay-tag"),f=s("n-layout-content"),v=s("lay-main"),y=s("n-layout");return i(),c(y,{class:"layout-container","has-sider":""},{default:d((()=>[V("  侧边栏   "),h(r),h(y,{style:{height:"100%"}},{default:d((()=>[V("  头部   "),h(u,{position:"absolute",style:{height:"64px",overflow:"hidden","z-index":"9"},"native-scrollbar":!1,inverted:e.layConfig.headerInverted,bordered:""},{default:d((()=>[h(m)])),_:1},8,["inverted"]),V(" tag栏 "),e.layConfig.tagShow?(i(),c(f,{key:0,position:"absolute",style:{height:"48px",left:"0",top:"64px",right:"0"}},{default:d((()=>[h(p)])),_:1})):V("v-if",!0),V("   主内容区   "),h(f,{class:"layout-main",position:"absolute","native-scrollbar":!1,style:{bottom:0,zIndex:8,transition:"top .25s",top:e.layConfig.tagShow?"112px":"64px",background:"#f0f2f5"}},{default:d((()=>[h(v)])),_:1},8,["style"])])),_:1})])),_:1})};const fa={class:"iframe"};var va=e({props:{src:{type:String,default:"https://gitee.com/zhizous"}},setup:e=>(t,a)=>(i(),c("div",fa,[h("iframe",{src:e.src,class:"iframe-view",frameborder:"0"},null,8,["src"])]))});const ya=e=>({render:()=>h(va,{src:e})});var ga={path:"/multi",component:ha,meta:{title:"工具",icon:_e},children:[{path:"menu-one",name:"menu-one",meta:{title:"外部链接",href:"https://gitee.com/zhizous"}},{path:"frame",name:"frame",component:ke,meta:{title:"内嵌网页"},children:[{path:"vue3",name:"vue3",component:ya("https://v3.cn.vuejs.org/"),meta:{title:"VUE3官网"}},{path:"naive-ui",name:"naive-ui",component:ya("https://www.naiveui.com/zh-CN/os-theme"),meta:{title:"NaiveUI官网"}},{path:"gitee",name:"gitee",component:ya("https://gitee.com/zhizous"),meta:{title:"码云地址"}}]},{path:"menu-three",name:"menu-three",component:ke,meta:{title:"多级菜单"},children:[{path:"menu-three-one",name:"menu-three-one",component:{render:()=>c("div",{},[h("span",{a:"asf"},"菜单3.1"),h("div",{},"有点搞头")])},meta:{title:"菜单3.1"}},{path:"menu-three-two",name:"menu-three-two",component:{render:()=>c("div",{},"菜单3.2")},meta:{title:"菜单3.2"}},{path:"menu-three-three",name:"menu-three-three",component:{render:()=>h("div",{},"菜单3.3")},meta:{title:"菜单3.3"}},{path:"menu-three-four",name:"menu-three-four",component:ke,meta:{title:"菜单3.4"},children:[{path:"menu-three-four-one",name:"menu-three-four-one",component:{render:()=>c("div",{},[h("span",{a:"asf"},"菜单3.4.1"),h("div",{},"有点搞头")])},meta:{title:"菜单3.4.1"}},{path:"menu-three-four-two",name:"menu-three-four-two",component:{render:()=>c("div",{},"菜单3.4.2")},meta:{title:"菜单3.4.2"}},{path:"menu-three-four-three",name:"menu-three-four-three",component:{render:()=>h("div",{},"菜单3.4.3")},meta:{title:"菜单3.4.3"}}]}]}]},ba=e({name:"routerReload",setup(){}});const Ca={class:"ok-loading"},_a=h("div",{class:"ball-loader"},[h("span"),h("span"),h("span"),h("span")],-1);function ka(t){return()=>new Promise((a=>{t().then((t=>{const n=(t.default.name||"okAdminMain")+"$"+Date.now(),l=e({name:n,setup(){const e=o(!1),t=we();let a=null;return{isReload:e,handleReload:()=>{e.value=!0,null==t||t.start(),a&&clearTimeout(a),a=setTimeout((()=>{p((()=>{e.value=!1,null==t||t.finish()}))}),260)}}},render:function(){return this.isReload?P(ba):P("div",{class:"ok-admin-main"},[h(t.default)])}});a(l)}))}))}ba.render=function(e,t,a,o,n,l){return i(),c("div",Ca,[_a])};const wa=4<(new Date).getHours()&&(new Date).getHours()<18,Sa=[{path:"/",redirect:"/dashboard/control",component:ba},{path:"/dashboard",component:ha,redirect:"/dashboard/control",meta:{title:"Dashboard",icon:Ee},children:[{path:"control",name:"control",component:ka((()=>Ve((()=>import("./index.3a865e7e.js")),["/ok-admin-vue/assets/index.3a865e7e.js","/ok-admin-vue/assets/index.6aea864c.css","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"控制台",keepAlive:!0,icon:Le,affix:!0}},{path:"workplace",name:"workplace",component:ka((()=>Ve((()=>import("./index.784519f5.js")),["/ok-admin-vue/assets/index.784519f5.js","/ok-admin-vue/assets/index.129fc274.css","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"工作台",keepAlive:!0,icon:wa?xe:Te}}]},{path:"/form",name:"form",component:ha,redirect:"/form/basic-form",meta:{title:"表单",icon:ze},children:[{path:"basic-form",name:"basic-form",component:ka((()=>Ve((()=>import("./basic-form.b2d8957d.js")),["/ok-admin-vue/assets/basic-form.b2d8957d.js","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"基础表单"}},{path:"advanced-form",name:"advanced-form",component:ka((()=>Ve((()=>import("./advanced-form.abbd5f69.js")),["/ok-admin-vue/assets/advanced-form.abbd5f69.js","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"高级表单"}},{path:"step-form",name:"step-form",component:ka((()=>Ve((()=>import("./advanced-form.abbd5f69.js")),["/ok-admin-vue/assets/advanced-form.abbd5f69.js","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"分步表单"}},{path:"detail",name:"detail",component:ka((()=>Ve((()=>import("./advanced-form.abbd5f69.js")),["/ok-admin-vue/assets/advanced-form.abbd5f69.js","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"表单详情"}}]},{path:"/exception",name:"exception",component:ha,redirect:"/exception/404",meta:{title:"异常页",icon:Ie},children:[{path:"403",name:"403",component:ka((()=>Ve((()=>import("./403.2e9cb8f7.js")),["/ok-admin-vue/assets/403.2e9cb8f7.js","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"403"}},{path:"404",name:"404",component:ka((()=>Ve((()=>import("./404.c0e173d9.js")),["/ok-admin-vue/assets/404.c0e173d9.js","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"404"}},{path:"500",name:"500",component:ka((()=>Ve((()=>import("./500.5630268b.js")),["/ok-admin-vue/assets/500.5630268b.js","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"500"}}]},{path:"/user",component:ha,children:[{path:"",name:"user",component:ka((()=>Ve((()=>import("./index.833a5b11.js")),["/ok-admin-vue/assets/index.833a5b11.js","/ok-admin-vue/assets/index.2388d9f3.css","/ok-admin-vue/assets/vendor.a7285a33.js"]))),meta:{title:"个人中心",icon:Ae}}]},ga],Pa=[{path:"/login",name:"Login",component:()=>Ve((()=>import("./index.b6ebddd2.js")),["/ok-admin-vue/assets/index.b6ebddd2.js","/ok-admin-vue/assets/index.12d7bef5.css","/ok-admin-vue/assets/vendor.a7285a33.js"]),meta:{title:"登录"}}],Ea=Se({history:Pe(),routes:Pa.concat(Sa),strict:!0,scrollBehavior:()=>({left:0,top:0})});var La;(La=Ea).beforeEach((async(e,t,a)=>{a()})),La.afterEach(((e,t,a)=>{var o;(o=e).meta&&o.meta.keepAlive&&oa.commit("admin/ADD_KEEPALIVES",o.matched[o.matched.length-1].components.default.name)}));var xa={install(e){e.component("NButton",de),e.component("NIcon",v),e.component("NForm",Ne),e.component("NInput",Oe),e.component("NCard",De),e.component("NGrid",D),e.component("NGi",H),e.component("NGridItem",H)}};const Ta=He(Me);Ta.use(xa),Ta.use(oa),Ta.use(Ea),Ta.mount("#app");export{Ve as _,Xt as a,Qe as b,Mt as c};
