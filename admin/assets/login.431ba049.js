import{_ as a,b as s}from"./index.6a6b9214.js";import{d as e,aw as o,R as t,ax as r,ay as n,$ as c,x as l,y as i,c as u,e as d,f as p,i as m,C as v,D as g}from"./vendor.431fb91e.js";var w=e({name:"Login",components:{PersonOutline:o,LockClosedOutline:t,LogoGithub:r,LogoFacebook:n},setup:()=>({formData:c({username:"admin",password:"123456"}),logo:a((()=>import("./logo.c8e0ff85.js")),[]),rules:{username:{required:!0,message:"请输入用户名！",trigger:"blur"},password:{required:!0,message:"请输入密码！",trigger:"blur"}}})});const f=v();l("data-v-77722992");const _={class:"view-account"},b={class:"view-account-container"},D=m("div",{class:"view-account-top"},[m("img",{class:"img",src:s,alt:"",srcset:""}),m("div",{class:"text"},"ok-admin-vue通用后台模版解决方案")],-1),h={class:"view-account-cont"},x={class:"view-account-cont"},y={class:"view-account-cont"},L=g("登录");i();const j=f(((a,s,e,o,t,r)=>{const n=u("n-input"),c=u("n-button");return d(),p("div",_,[m("div",b,[D,m("div",h,[m(n,{value:a.formData.username,"onUpdate:value":s[1]||(s[1]=s=>a.formData.username=s),type:"input",placeholder:"基本的 Input"},null,8,["value"])]),m("div",x,[m(n,{type:"password",value:a.formData.password,"onUpdate:value":s[2]||(s[2]=s=>a.formData.password=s),"show-password-toggle":"",placeholder:"密码",maxlength:8},null,8,["value"])]),m("div",y,[m(c,{class:"other",size:"large",type:"primary"},{default:f((()=>[L])),_:1})])])])}));w.render=j,w.__scopeId="data-v-77722992";export default w;
