import{_ as a,a as e}from"./index.7ce27b37.js";import{d as s,au as o,L as t,av as r,aw as n,Z as c,p as l,n as u,r as i,o as d,a as p,e as v,t as m,x as g}from"./vendor.c1018e31.js";var w=s({name:"Login",components:{PersonOutline:o,LockClosedOutline:t,LogoGithub:r,LogoFacebook:n},setup:()=>({formData:c({username:"admin",password:"123456"}),logo:a((()=>import("./logo.c8e0ff85.js")),void 0),rules:{username:{required:!0,message:"请输入用户名！",trigger:"blur"},password:{required:!0,message:"请输入密码！",trigger:"blur"}}})});const f=m();l("data-v-a49090ce");const _={class:"view-account"},b={class:"view-account-container"},h=v("div",{class:"view-account-top"},[v("img",{class:"img",src:e,alt:"",srcset:""}),v("div",{class:"text"},"ok-admin-vue通用后台模版解决方案")],-1),D={class:"view-account-cont"},L={class:"view-account-cont"},x={class:"view-account-cont"},y=g("登录");u();const j=f(((a,e,s,o,t,r)=>{const n=i("n-input"),c=i("n-button");return d(),p("div",_,[v("div",b,[h,v("div",D,[v(n,{value:a.formData.username,"onUpdate:value":e[1]||(e[1]=e=>a.formData.username=e),type:"input",placeholder:"基本的 Input"},null,8,["value"])]),v("div",L,[v(n,{type:"password",value:a.formData.password,"onUpdate:value":e[2]||(e[2]=e=>a.formData.password=e),"show-password-toggle":"",placeholder:"密码",maxlength:8},null,8,["value"])]),v("div",x,[v(c,{class:"other",size:"large",type:"primary"},{default:f((()=>[y])),_:1})])])])}));w.render=j,w.__scopeId="data-v-a49090ce";export default w;
