var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{d as r,r as o,o as s,c as i,a as c,E as d,b as u,e as m,i as h,w as p,F as f,f as v,v as g,g as y,N as _,h as b,j as k,k as C,l as w,m as L,p as x,n as I,q as z,s as P,t as T,u as E,x as O,y as N,z as S,A as D,B as A,C as M,D as j,G as V,H as R,I as H,J as U,K,L as B,M as $,O as F,P as G,Q as q,R as W,S as J,T as Q,U as X,V as Y,W as Z,X as ee,Y as te,Z as ae}from"./vendor.51f221d9.js";var ne=r({name:"App"});let le;ne.render=function(e,t,a,n,l,r){const c=o("router-view");return s(),i(c)};const re={},oe=function(e,t){if(!t)return e();if(void 0===le){const e=document.createElement("link").relList;le=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in re)return;re[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":le,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},se=function(e){return c("path",{d:e,fill:"currentColor"},null,-1)};function ie(e){return i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},[se(e)])}var ce=r({name:"MenuUnfoldOutlined",render:()=>ie("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z")});var de=r({name:"MenuUnfoldOutlined",render:()=>ie("M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z")});const ue=function(e){return c("path",{d:e,fill:"currentColor"},null,-1)};function me(e){return i("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[ue(e)])}var he=r({name:"RefreshFilled",render:()=>me("M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z")});r({name:"StarRound",render:()=>me("M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z")});var pe=r({name:"StarBorderRound",render:()=>me("M19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z")});const fe=function(e,t=300){t=t||300;let a=0;return function(){let n=Date.now();(a<1||n-a>=t)&&(e.apply(this,arguments),a=n)}};var ve=r({name:"LaySetting",components:{Ellipse:d,EllipsisVertical:u},setup(){const e=h("layConfig");return console.log(((e,r)=>{for(var o in r||(r={}))a.call(r,o)&&l(e,o,r[o]);if(t)for(var o of t(r))n.call(r,o)&&l(e,o,r[o]);return e})({},e)),{navThemeDark:"/ok-admin-vue/assets/nav-theme-dark.412a3268.svg",navThemeLight:"/ok-admin-vue/assets/nav-theme-light.5da91eb2.svg",headerThemeDark:"/ok-admin-vue/assets/header-theme-dark.256f0496.svg",layConfig:e,show:m(!1)}}});const ge=y("主题风格设置"),ye={class:"checked"},_e={class:"checked"},be={class:"checked"},ke={class:"checked"};ve.render=function(e,t,a,n,l,r){const d=o("ellipsis-vertical"),u=o("n-icon"),m=o("n-divider"),h=o("Ellipse"),y=o("n-gi"),_=o("n-grid"),b=o("n-drawer-content"),k=o("n-drawer");return s(),i(f,null,[c(u,{class:"setting-btn pointer",onClick:t[1]||(t[1]=t=>e.show=!0),size:"20"},{default:p((()=>[c(d)])),_:1}),c(k,{show:e.show,"onUpdate:show":t[6]||(t[6]=t=>e.show=t),width:300},{default:p((()=>[c(b,{title:""},{default:p((()=>[c("div",null,[c(m,null,{default:p((()=>[ge])),_:1}),c(_,{class:"thenme-box sidebar-thenme","x-gap":"12",cols:3},{default:p((()=>[c(y,{class:"thenme"},{default:p((()=>[c("div",{onClick:t[2]||(t[2]=t=>e.layConfig.sidebarInverted=!0),class:"thenme-checkbox pointer"},[c("img",{src:e.navThemeDark,alt:"navThemeDark"},null,8,["src"])]),v(c("div",ye,[c(u,{color:"#18a058",size:"10"},{default:p((()=>[c(h)])),_:1})],512),[[g,e.layConfig.sidebarInverted]])])),_:1}),c(y,{class:"thenme"},{default:p((()=>[c("div",{onClick:t[3]||(t[3]=t=>e.layConfig.sidebarInverted=!1),class:"thenme-checkbox pointer"},[c("img",{src:e.navThemeLight,alt:"navThemeLight"},null,8,["src"])]),v(c("div",_e,[c(u,{color:"#18a058",size:"10"},{default:p((()=>[c(h)])),_:1})],512),[[g,!e.layConfig.sidebarInverted]])])),_:1})])),_:1}),c(_,{class:"thenme-box header-thenme","x-gap":"12",cols:3},{default:p((()=>[c(y,{class:"thenme"},{default:p((()=>[c("div",{onClick:t[4]||(t[4]=t=>e.layConfig.headerInverted=!1),class:"thenme-checkbox pointer"},[c("img",{src:e.navThemeDark,alt:"navThemeDark"},null,8,["src"])]),v(c("div",be,[c(u,{color:"#18a058",size:"10"},{default:p((()=>[c(h)])),_:1})],512),[[g,!e.layConfig.headerInverted]])])),_:1}),c(y,{class:"thenme"},{default:p((()=>[c("div",{onClick:t[5]||(t[5]=t=>e.layConfig.headerInverted=!0),class:"thenme-checkbox pointer"},[c("img",{src:e.headerThemeDark,alt:"headerThemeDark"},null,8,["src"])]),v(c("div",ke,[c(u,{color:"#18a058",size:"10"},{default:p((()=>[c(h)])),_:1})],512),[[g,e.layConfig.headerInverted]])])),_:1})])),_:1})])])),_:1})])),_:1},8,["show"])],64)};var Ce=r({name:"LayHeader",components:{NGi:_,NIcon:b,NGrid:k,NSwitch:C,NBreadcrumb:w,NBreadcrumbItem:L,LaySetting:ve,RefreshFilled:he,MenuFoldOutlined:ce,MenuUnfoldOutlined:de},setup(e,t){const a=h("layConfig");return{layConfig:a,handleRefresh:fe((()=>{a.refresh=!0,setTimeout((()=>{a.refresh=!1}),10)}))}}});const we=z();x("data-v-6eea631f");const Le={class:"lay-header"},xe={class:"header-refresh"},Ie=y("首页"),ze=y("Dashboard"),Pe=y("主控台");I();const Te=we(((e,t,a,n,l,r)=>{const d=o("menu-fold-outlined"),u=o("menu-unfold-outlined"),m=o("n-icon"),h=o("refresh-filled"),p=o("n-breadcrumb-item"),f=o("n-breadcrumb"),y=o("n-gi"),_=o("lay-setting"),b=o("n-grid");return s(),i("div",Le,[c(b,{"x-gap":"24",cols:2},{default:we((()=>[c(y,{class:"header-left"},{default:we((()=>[c(m,{style:{cursor:"pointer"},size:"20"},{default:we((()=>[v(c(d,{onClick:t[1]||(t[1]=t=>e.layConfig.collapsed=!0)},null,512),[[g,!e.layConfig.collapsed]]),v(c(u,{onClick:t[2]||(t[2]=t=>e.layConfig.collapsed=!1)},null,512),[[g,e.layConfig.collapsed]])])),_:1}),c("div",xe,[c(m,{onClick:e.handleRefresh,class:"re-icon",size:"20"},{default:we((()=>[c(h)])),_:1},8,["onClick"])]),c(f,null,{default:we((()=>[c(p,null,{default:we((()=>[Ie])),_:1}),c(p,null,{default:we((()=>[ze])),_:1}),c(p,null,{default:we((()=>[Pe])),_:1})])),_:1})])),_:1}),c(y,{class:"header-right"},{default:we((()=>[c(_)])),_:1})])),_:1})])}));Ce.render=Te,Ce.__scopeId="data-v-6eea631f";var Ee="/ok-admin-vue/assets/head.c9c18204.png",Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ee});let Ne=[];function Se(e,t,a){if(e.meta&&e.meta.hidden)return t;const n=(l=a,r=e.path,/^\//.test(r)?r:/\/$/.test(l)?l+r:r?l+"/"+r:l);var l,r;const o=e.meta?e.meta.title:e.name;var s;return t={label:o,key:n},e.meta&&e.meta.icon&&(t.icon=(s=e.meta.icon,()=>P(b,null,{default:()=>P(s)}))),e.children&&e.children.length&&(t.children=[],e.children.forEach((e=>{var a,l;(null==(a=e.meta)?void 0:a.hidden)||null==(l=t.children)||l.push(Se(e,{},n))}))),t}var De=r({name:"LaySidebar",components:{NLayoutSider:T,NImage:E,NMenu:O,NSpace:N,NSwitch:C},setup(e,t){const a=function(){const e=Je.reduce(((e,t)=>(t.component&&"Layout"===t.component.name&&e.push(t),e)),[]);return Ne=e.reduce(((e,t)=>(t.children&&1===t.children.length?e.push(Se(t.children[0],{},t.path)):e.push(Se(t,{},t.path)),e)),[]),Ne}(),n=A(),l=M(),r=S({menuKey:"",menuKeys:[""]}),o=h("layConfig");return D((()=>{r.menuKey=l.fullPath,r.menuKeys=l.matched.map((e=>e.path))})),{menuConfig:r,layConfig:o,menuOptions:a,getSrc:e=>{const t="../../assets/head.png",a={"../../assets/head.png":Oe};return console.log(a[t].default),a[t].default},handleUpdateValue:e=>{n.push(e)}}}});const Ae=z();x("data-v-7b8b0aa7");const Me={class:"lay-sidebar"},je=c("img",{class:"img",alt:"logo",src:Ee},null,-1);I();const Ve=Ae(((e,t,a,n,l,r)=>{const d=o("n-menu"),u=o("n-layout-sider");return s(),i(u,{"native-scrollbar":!1,"collapse-mode":"width",collapsed:e.layConfig.collapsed,inverted:e.layConfig.sidebarInverted,"collapsed-width":64,bordered:""},{default:Ae((()=>[c("div",Me,[c("div",{class:["head",{"head-inverted":e.layConfig.sidebarInverted}]},[je],2),c(d,{inverted:e.layConfig.sidebarInverted,indent:22,"collapsed-width":64,"collapsed-icon-size":22,options:e.menuOptions,key:e.menuConfig.menuKey,"default-value":e.menuConfig.menuKey,"expanded-keys":e.menuConfig.menuKeys,"onUpdate:value":e.handleUpdateValue,"onUpdate:expandedKeys":t[1]||(t[1]=t=>e.menuConfig.menuKeys=t)},null,8,["inverted","options","default-value","expanded-keys","onUpdate:value"])])])),_:1},8,["collapsed","inverted"])}));De.render=Ve,De.__scopeId="data-v-7b8b0aa7";var Re=r({name:"LayTag",inheritAttrs:!1,components:{NButton:V,CloseSharp:R},setup(){const e=A(),t=M(),a=S([]);return function(e,t,a){Je.reduce(((e,t)=>(t.component&&"Layout"===t.component.name&&e.push(t),e)),[]).forEach((t=>{t.children&&t.children.length&&t.children.forEach((a=>{if(a.meta&&a.meta.affix){const r=(n=t.path,l=a.path,/^\//.test(l)?l:/\/$/.test(n)?n+l:l?n+"/"+l:n);e.push({fullPath:r,meta:a.meta})}var n,l}))})),j(t,(a=>{e.some((e=>e.fullPath===a.fullPath))||e.push({fullPath:t.fullPath,meta:t.meta})}),{immediate:!0})}(a,t),{tags:a,handleTagOpen(t){e.push(t)},handleTagClose(n){a[n].fullPath===t.fullPath&&(0===n?e.replace(a[n+1].fullPath):e.replace(a[n-1].fullPath)),a.splice(n,1)},isAffix:e=>e.meta&&e.meta.affix}}});const He=z();x("data-v-4b9628bc");const Ue={class:"lay-tag"};I();const Ke=He(((e,t,a,n,l,r)=>{const d=o("close-sharp"),u=o("n-icon"),m=o("n-button");return s(),i("div",Ue,[(s(!0),i(f,null,H(e.tags,((t,a)=>(s(),i("div",{key:t.fullPath,class:"tag-item"},[c(m,{class:"tag-btn",onClick:a=>e.handleTagOpen(t.fullPath),type:t.fullPath===e.$route.fullPath?"primary":"default",bordered:!1},{default:He((()=>[c("span",null,U(t.meta.title),1),e.isAffix(t)?B("",!0):(s(),i(u,{key:0,onClick:K((t=>e.handleTagClose(a)),["stop"]),class:"tag-close"},{default:He((()=>[c(d)])),_:2},1032,["onClick"]))])),_:2},1032,["onClick","type"])])))),128))])}));Re.render=Ke,Re.__scopeId="data-v-4b9628bc";var Be=r({name:"Layout",components:{LayTag:Re,LaySidebar:De,LayHeader:Ce,NLayout:$,NLayoutHeader:F,NLayoutContent:G,NLayoutSider:T},setup(e,t){const a=S({sidebarInverted:!0,headerInverted:!1,collapsed:!1,refresh:!1});return q("layConfig",a),{layConfig:a}}});const $e=z(),Fe=$e(((e,t,a,n,l,r)=>{const d=o("lay-sidebar"),u=o("lay-header"),m=o("n-layout-header"),h=o("lay-tag"),p=o("n-layout-content"),f=o("transform"),v=o("router-view"),g=o("n-layout");return s(),i(g,{style:{height:"100vh",top:"0",bottom:"0"},"has-sider":""},{default:$e((()=>[c(d),c(g,{style:{height:"100%"}},{default:$e((()=>[c(m,{position:"absolute",style:{height:"64px"},"native-scrollbar":!1,inverted:e.layConfig.headerInverted,bordered:""},{default:$e((()=>[c(u)])),_:1},8,["inverted"]),c(p,{position:"absolute",style:{height:"48px",top:"64px",left:"0",right:"0"}},{default:$e((()=>[c(h)])),_:1}),c(p,{position:"absolute",style:{top:"112px",bottom:"0"},"native-scrollbar":!1},{default:$e((()=>[c(v,null,{default:$e((({Component:t})=>[e.layConfig.refresh?B("",!0):(s(),i(f,{key:0},{default:$e((()=>[(s(),i(W,null,[e.$route.meta.keepAlive?(s(),i(J(t),{key:0})):B("",!0)],1024)),e.$route.meta.keepAlive?B("",!0):(s(),i(J(t),{key:0}))])),_:2},1024))])),_:1})])),_:1})])),_:1})])),_:1})}));Be.render=Fe,Be.__scopeId="data-v-53fc5a18";var Ge=r({name:"IFrameView",props:{src:{type:String,default:"https://gitee.com/zhizous"}}});const qe={class:"iframe"};Ge.render=function(e,t,a,n,l,r){return s(),i("div",qe,[c("iframe",{src:e.src,class:"iframe-view",frameborder:"0"},null,8,["src"])])};const We=e=>({render:()=>i(Ge,{src:e})});const Je=[{path:"/",component:Be,redirect:"/home",children:[{path:"/home",name:"home",component:()=>oe((()=>import("./home.659f8d51.js")),["/ok-admin-vue/assets/home.659f8d51.js","/ok-admin-vue/assets/home.a42a9bd9.css","/ok-admin-vue/assets/vendor.51f221d9.js"]),meta:{title:"首页",keepAlive:!0,icon:pe,affix:!0}}]},{path:"/user",component:Be,children:[{path:"",name:"user",component:()=>oe((()=>import("./user.2370a13d.js")),["/ok-admin-vue/assets/user.2370a13d.js","/ok-admin-vue/assets/vendor.51f221d9.js"]),meta:{title:"个人中心",icon:pe}}]},{path:"/form",component:Be,redirect:"/form/basic-form",meta:{title:"表单",icon:ee},children:[{path:"basic-form",name:"basic-form",component:()=>oe((()=>import("./basic-form.12e0a9ae.js")),["/ok-admin-vue/assets/basic-form.12e0a9ae.js","/ok-admin-vue/assets/vendor.51f221d9.js"]),meta:{title:"基础表单",icon:pe}},{path:"advanced-form",name:"advanced-form",component:()=>oe((()=>import("./advanced-form.5dfb7d30.js")),["/ok-admin-vue/assets/advanced-form.5dfb7d30.js","/ok-admin-vue/assets/vendor.51f221d9.js"]),meta:{title:"高级表单"}},{path:"step-form",name:"step-form",component:()=>oe((()=>import("./advanced-form.5dfb7d30.js")),["/ok-admin-vue/assets/advanced-form.5dfb7d30.js","/ok-admin-vue/assets/vendor.51f221d9.js"]),meta:{title:"分步表单"}},{path:"detail",name:"detail",component:()=>oe((()=>import("./advanced-form.5dfb7d30.js")),["/ok-admin-vue/assets/advanced-form.5dfb7d30.js","/ok-admin-vue/assets/vendor.51f221d9.js"]),meta:{title:"表单详情"}}]},{path:"/multi",component:Be,meta:{title:"多级菜单",icon:Q},children:[{path:"menu-one",name:"menu-one",component:We("https://v3.cn.vuejs.org/"),meta:{title:"VUE3官网"}},{path:"menu-naive-ui",name:"menu-naive-ui",component:We("https://www.naiveui.com/zh-CN/os-theme"),meta:{title:"NaiveUI官网"}},{path:"menu-gitee",name:"menu-gitee",component:We("https://gitee.com/zhizous"),meta:{title:"码云地址"}},{path:"menu-three",name:"menu-three",component:X,meta:{title:"菜单项"},children:[{path:"menu-three-one",name:"menu-three-one",component:{render:()=>i("div",{},[c("span",{a:"asf"},"菜单3.1"),c("div",{},"有点搞头")])},meta:{title:"菜单3.1"}},{path:"menu-three-two",name:"menu-three-two",component:{render:()=>i("div",{},"菜单3.2")},meta:{title:"菜单3.2"}},{path:"menu-three-three",name:"menu-three-three",component:{render:()=>c("div",{},"菜单3.3")},meta:{title:"菜单3.3"}},{path:"menu-three-four",name:"menu-three-four",component:X,meta:{title:"菜单3.4"},children:[{path:"menu-three-four-one",name:"menu-three-four-one",component:{render:()=>i("div",{},[c("span",{a:"asf"},"菜单3.4.1"),c("div",{},"有点搞头")])},meta:{title:"菜单3.4.1"}},{path:"menu-three-four-two",name:"menu-three-four-two",component:{render:()=>i("div",{},"菜单3.4.2")},meta:{title:"菜单3.4.2"}},{path:"menu-three-four-three",name:"menu-three-four-three",component:{render:()=>c("div",{},"菜单3.4.3")},meta:{title:"菜单3.4.3"}}]}]}]}],Qe=Y({history:Z(),routes:Je});const Xe=te(ne);Xe.use(Qe),Xe.use(ae),Xe.mount("#app");
