import{_ as a,c as s}from"./index.99a0f8a5.js";import{d as e,t as o,aM as t,aN as r,aO as n,m as c,a4 as l,K as i,L as u,e as d,o as m,f as p,h as v,O as g,s as f}from"./vendor.2fa4a07a.js";var w=e({name:"Login",components:{PersonOutline:o,LockClosedOutline:t,LogoGithub:r,LogoFacebook:n},setup(){const s=c();return{formData:l({username:"admin",password:"123456"}),logo:a((()=>import("./logo.c8e0ff85.js")),[]),handleSubmit(){s.replace("/dashboard/control")},rules:{username:{required:!0,message:"请输入用户名！",trigger:"blur"},password:{required:!0,message:"请输入密码！",trigger:"blur"}}}}});const b=g();i("data-v-5d4cbaf1");const h={class:"view-account"},_={class:"view-account-container"},D=v("div",{class:"view-account-top"},[v("img",{class:"img",src:s,alt:"",srcset:""}),v("div",{class:"text"},"ok-admin-vue通用后台模版解决方案")],-1),L={class:"view-account-cont"},k={class:"view-account-cont"},O={class:"view-account-cont"},x=f("登录");u();const y=b(((a,s,e,o,t,r)=>{const n=d("n-input"),c=d("n-button");return m(),p("div",h,[v("div",_,[D,v("div",L,[v(n,{value:a.formData.username,"onUpdate:value":s[1]||(s[1]=s=>a.formData.username=s),type:"input",placeholder:"基本的 Input"},null,8,["value"])]),v("div",k,[v(n,{type:"password",value:a.formData.password,"onUpdate:value":s[2]||(s[2]=s=>a.formData.password=s),"show-password-toggle":"",placeholder:"密码",maxlength:8},null,8,["value"])]),v("div",O,[v(c,{onClick:a.handleSubmit,class:"other",size:"large",type:"primary"},{default:b((()=>[x])),_:1},8,["onClick"])])])])}));w.render=y,w.__scopeId="data-v-5d4cbaf1";export default w;
