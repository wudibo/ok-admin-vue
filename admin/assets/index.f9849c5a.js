import{_ as c,d as i,e as d}from"./index.13aca5e8.js";import{a as l,s as p,aT as _,aU as m,aV as v,m as f,a4 as g,f as n,o as h,V as w,K as o,i as t,h as F,a6 as b,a7 as B,x as C}from"./vendor.3e5191bd.js";const D=l({name:"Login",components:{PersonOutline:p,LockClosedOutline:_,LogoGithub:m,LogoFacebook:v},setup(){const e=f();return{formData:g({username:"admin",password:"123456"}),logo:i(()=>import("./logo.c8e0ff85.js"),[]),handleSubmit(){e.replace("/dashboard/control")},rules:{username:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\uFF01",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01",trigger:"blur"}}}}}),k=e=>(b("data-v-9ff37c8a"),e=e(),B(),e),x={class:"view-account"},y={class:"view-account-container"},I=k(()=>o("div",{class:"view-account-top"},[o("img",{class:"img",src:d,alt:"",srcset:""}),o("div",{class:"text"},"ok-admin-vue\u901A\u7528\u540E\u53F0\u6A21\u7248\u89E3\u51B3\u65B9\u6848")],-1)),V={class:"view-account-cont"},E={class:"view-account-cont"},L={class:"view-account-cont"},S=C("\u767B\u5F55");function A(e,a,$,j,N,O){const u=n("n-input"),r=n("n-button");return h(),w("div",x,[o("div",y,[I,o("div",V,[t(u,{value:e.formData.username,"onUpdate:value":a[0]||(a[0]=s=>e.formData.username=s),type:"input",placeholder:"\u57FA\u672C\u7684 Input"},null,8,["value"])]),o("div",E,[t(u,{value:e.formData.password,"onUpdate:value":a[1]||(a[1]=s=>e.formData.password=s),type:"password","show-password-toggle":"",placeholder:"\u5BC6\u7801",maxlength:8},null,8,["value"])]),o("div",L,[t(r,{class:"other",size:"large",type:"primary",onClick:e.handleSubmit},{default:F(()=>[S]),_:1},8,["onClick"])])])])}var U=c(D,[["render",A],["__scopeId","data-v-9ff37c8a"]]);export{U as default};