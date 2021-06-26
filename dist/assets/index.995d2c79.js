import{d as e,r as a,o as t,c as n,N as l,a as s,b as o,e as r,f as d,g as i,i as c,p as u,h as p,j as h,w as m,k as f,l as v,m as y,n as g,q as _,s as b,t as C,u as w,v as x,x as L,B as k,C as P,y as I,F as N,z as E,A,D as S,E as T,G as O,H as V,I as K,J as R,K as U,L as j,M as z,O as B,P as D,Q as $,R as M}from"./vendor.2680878c.js";var H=e({name:"App"});let G;H.render=function(e,l,s,o,r,d){const i=a("router-view");return t(),n(i)};const q={},F=function(e,a){if(!a)return e();if(void 0===G){const e=document.createElement("link").relList;G=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if(e in q)return;q[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=a?"stylesheet":G,a||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),a?new Promise(((e,a)=>{n.addEventListener("load",e),n.addEventListener("error",a)})):void 0}))).then((()=>e()))},J=function(e,a=300){a=a||300;let t=0;return function(){let n=Date.now();(t<1||n-t>=a)&&(e.apply(this,arguments),t=n)}};var Q=e({name:"LayHeader",components:{NGi:l,NIcon:s,NGrid:o,NSwitch:r,NBreadcrumb:d,NBreadcrumbItem:i},setup(e,a){const t=c("layConfig");return{layConfig:t,handleRefresh:J((()=>{t.refresh=!1,setTimeout((()=>{t.refresh=!0}))}))}}});const W=m();u("data-v-b96da4ac");const X={class:"lay-header"},Y={class:"header-padding-xs"},Z=f(" collapsed "),ee={class:"header-padding-xs"},ae=f(" inverted "),te={class:"header-refresh"},ne=h("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[h("path",{d:"M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",fill:"currentColor"})],-1),le=f("首页"),se=f("Dashboard"),oe=f("主控台"),re=h("div",{class:"green"},"2",-1);p();const de=W(((e,l,s,o,r,d)=>{const i=a("n-switch"),c=a("n-icon"),u=a("n-breadcrumb-item"),p=a("n-breadcrumb"),m=a("n-gi"),f=a("n-grid");return t(),n("div",X,[h(f,{"x-gap":"12",cols:2},{default:W((()=>[h(m,{class:"header-padding-xs header-left"},{default:W((()=>[h("div",Y,[h(i,{value:e.layConfig.collapsed,"onUpdate:value":l[1]||(l[1]=a=>e.layConfig.collapsed=a)},null,8,["value"]),Z]),h("div",ee,[h(i,{value:e.layConfig.sidebarInverted,"onUpdate:value":l[2]||(l[2]=a=>e.layConfig.sidebarInverted=a)},null,8,["value"]),ae]),h("div",te,[h(c,{onClick:e.handleRefresh,class:"re-icon",size:"20"},{default:W((()=>[ne])),_:1},8,["onClick"])]),h(p,null,{default:W((()=>[h(u,null,{default:W((()=>[le])),_:1}),h(u,null,{default:W((()=>[se])),_:1}),h(u,null,{default:W((()=>[oe])),_:1})])),_:1})])),_:1}),h(m,{class:"header-padding-xs header-right"},{default:W((()=>[re])),_:1})])),_:1})])}));Q.render=de,Q.__scopeId="data-v-b96da4ac";var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/assets/head.c9c18204.png"});let ce=[];function ue(e,a,t){if(e.meta&&e.meta.hidden)return a;const n=(l=t,o=e.path,/^\//.test(o)?o:/\/$/.test(l)?l+o:o?l+"/"+o:l);var l,o;const r=e.meta?e.meta.title:e.name;var d;return a={label:r,key:n},e.meta&&e.meta.icon&&(a.icon=(d=e.meta.icon,()=>v(s,null,{default:()=>v(d)}))),e.children&&e.children.length&&(a.children=[],e.children.forEach((e=>{var t,l;(null==(t=e.meta)?void 0:t.hidden)||null==(l=a.children)||l.push(ue(e,{},n))}))),a}var pe=e({name:"LaySidebar",components:{NLayoutSider:y,NImage:g,NMenu:_,NSpace:b,NSwitch:r},setup(e,a){const t=function(){const e=Pe.reduce(((e,a)=>(a.component&&"Layout"===a.component.name&&e.push(a),e)),[]);return ce=e.reduce(((e,a)=>(a.children&&1===a.children.length?e.push(ue(a.children[0],{},a.path)):e.push(ue(a,{},a.path)),e)),[]),ce}(),n=w(),l=x(),s=C(l.fullPath),o=C(["dance-dance-dance","food"]);return{layConfig:c("layConfig"),menuKeys:o,menuKey:s,menuOptions:t,getSrc:e=>{const a="../../assets/head.png",t={"../../assets/head.png":ie};return console.log(t[a].default),t[a].default},handleUpdateValue:e=>{n.push(e)}}}});const he=m();u("data-v-6e616b66");const me={class:"lay-sidebar"},fe=h("img",{class:"img",alt:"logo",src:"/assets/head.c9c18204.png"},null,-1);p();const ve=he(((e,l,s,o,r,d)=>{const i=a("n-menu"),c=a("n-layout-sider");return t(),n(c,{"native-scrollbar":!1,"collapse-mode":"width",collapsed:e.layConfig.collapsed,inverted:e.layConfig.sidebarInverted,"collapsed-width":64,bordered:""},{default:he((()=>[h("div",me,[h("div",{class:["head",{"head-inverted":e.layConfig.sidebarInverted}]},[fe],2),h(i,{inverted:e.layConfig.sidebarInverted,indent:22,"collapsed-width":64,"collapsed-icon-size":22,"onUpdate:value":e.handleUpdateValue,"onUpdate:expandedKeys":l[1]||(l[1]=a=>e.menuKeys=a),modelValue:e.menuKey,"onUpdate:modelValue":l[2]||(l[2]=a=>e.menuKey=a),"default-value":e.menuKey,"expanded-keys":e.menuKeys,options:e.menuOptions},null,8,["inverted","onUpdate:value","modelValue","default-value","expanded-keys","options"])])])),_:1},8,["collapsed","inverted"])}));pe.render=ve,pe.__scopeId="data-v-6e616b66";var ye=e({name:"LayTag",inheritAttrs:!1,components:{NButton:k,CloseSharp:P},setup(){const e=w(),a=x(),t=I([]);return function(e,a,t){Pe.reduce(((e,a)=>(a.component&&"Layout"===a.component.name&&e.push(a),e)),[]).forEach((a=>{a.children&&a.children.length&&a.children.forEach((t=>{if(t.meta&&t.meta.affix){const s=(n=a.path,l=t.path,/^\//.test(l)?l:/\/$/.test(n)?n+l:l?n+"/"+l:n);e.push({fullPath:s,meta:t.meta})}var n,l}))})),L(a,(t=>{e.some((e=>e.fullPath===t.fullPath))||e.push({fullPath:a.fullPath,meta:a.meta})}),{immediate:!0})}(t,a),{tags:t,handleTagOpen(a){e.push(a)},handleTagClose(n){t[n].fullPath===a.fullPath&&(0===n?e.replace(t[n+1].fullPath):e.replace(t[n-1].fullPath)),t.splice(n,1)},isAffix:e=>e.meta&&e.meta.affix}}});const ge=m();u("data-v-42a1114e");const _e={class:"lay-tag"};p();const be=ge(((e,l,s,o,r,d)=>{const i=a("close-sharp"),c=a("n-icon"),u=a("n-button");return t(),n("div",_e,[(t(!0),n(N,null,E(e.tags,((a,l)=>(t(),n("div",{key:a.fullPath,class:"tag-item"},[h(u,{class:"tag-btn",onClick:t=>e.handleTagOpen(a.fullPath),type:a.fullPath===e.$route.fullPath?"primary":"default",bordered:!1},{default:ge((()=>[h("span",null,A(a.meta.title),1),e.isAffix(a)?T("",!0):(t(),n(c,{key:0,onClick:S((a=>e.handleTagClose(l)),["stop"]),class:"tag-close"},{default:ge((()=>[h(i)])),_:2},1032,["onClick"]))])),_:2},1032,["onClick","type"])])))),128))])}));ye.render=be,ye.__scopeId="data-v-42a1114e";var Ce=e({name:"Layout",components:{LayTag:ye,LaySidebar:pe,LayHeader:Q,NLayout:O,NLayoutHeader:V,NLayoutContent:K,NLayoutSider:y},setup(e,a){const t=I({sidebarInverted:!0,collapsed:!1,refresh:!0});return R("layConfig",t),{layConfig:t}}});const we=m(),xe=we(((e,l,s,o,r,d)=>{const i=a("lay-sidebar"),c=a("lay-header"),u=a("n-layout-header"),p=a("lay-tag"),m=a("n-layout-content"),f=a("transform"),v=a("router-view"),y=a("n-layout");return t(),n(y,{style:{height:"100vh",top:"0",bottom:"0"},"has-sider":""},{default:we((()=>[h(i),h(y,{style:{height:"100%"}},{default:we((()=>[h(u,{position:"absolute",style:{height:"64px"},"native-scrollbar":!1,bordered:""},{default:we((()=>[h(c)])),_:1}),h(m,{position:"absolute",style:{height:"48px",top:"64px",left:"0",right:"0"}},{default:we((()=>[h(p)])),_:1}),h(m,{position:"absolute",style:{top:"112px",bottom:"0"},"native-scrollbar":!1},{default:we((()=>[h(v,null,{default:we((({Component:a})=>[e.layConfig.refresh?(t(),n(f,{key:0},{default:we((()=>[(t(),n(U,null,[e.$route.meta.keepAlive?(t(),n(j(a),{key:0})):T("",!0)],1024)),e.$route.meta.keepAlive?T("",!0):(t(),n(j(a),{key:0}))])),_:2},1024)):T("",!0)])),_:1})])),_:1})])),_:1})])),_:1})}));Ce.render=xe,Ce.__scopeId="data-v-e52c67ae";const Le=function(e){return h("path",{d:e,fill:"currentColor"},null,-1)};var ke=e({name:"StarBorderRound",render:()=>n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[Le("M19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z")])});const Pe=[{path:"/",component:Ce,redirect:"/home",children:[{path:"/home",name:"home",component:()=>F((()=>import("./home.0cd4399e.js")),["/assets/home.0cd4399e.js","/assets/home.a42a9bd9.css","/assets/vendor.2680878c.js"]),meta:{title:"首页",keepAlive:!0,icon:ke,affix:!0}}]},{path:"/user",component:Ce,children:[{path:"",name:"user",component:()=>F((()=>import("./user.bfe5ebaf.js")),["/assets/user.bfe5ebaf.js","/assets/vendor.2680878c.js"]),meta:{title:"个人中心",icon:ke}}]},{path:"/form",component:Ce,redirect:"/form/basic-form",meta:{title:"表单",icon:D},children:[{path:"basic-form",name:"basic-form",component:()=>F((()=>import("./basic-form.77394e79.js")),["/assets/basic-form.77394e79.js","/assets/vendor.2680878c.js"]),meta:{title:"基础表单",icon:ke}},{path:"advanced-form",name:"advanced-form",component:()=>F((()=>import("./advanced-form.b3423ca7.js")),["/assets/advanced-form.b3423ca7.js","/assets/vendor.2680878c.js"]),meta:{title:"高级表单"}}]}],Ie=z({history:B(),routes:Pe});const Ne=$(H);Ne.use(Ie),Ne.use(M),Ne.mount("#app");
