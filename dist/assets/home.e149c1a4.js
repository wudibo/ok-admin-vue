import{d as s,ad as a,ae as t,u as e,J as n,t as o,x as r,r as c,o as u,c as l,a as d,l as m,A as i,F as f,y as v,z as h}from"./vendor.22c6f53c.js";var p=s({name:"home",components:{NH2:a,NH3:t},setup(s,a){const t=e(),o=n({current:1});return{store:t,obj:o,testFun:()=>{t.commit("SET_CURRENT",100*Math.random()),o.current=1e3*Math.random()}}}});const _=h();o("data-v-36795382");const k={class:"home"},b=m("ok-admin-vue"),j=m("城府路");r();const x=_(((s,a,t,e,n,o)=>{const r=c("n-h2"),h=c("n-h3"),p=c("n-button");return u(),l("div",k,[d(r,null,{default:_((()=>[b])),_:1}),d(h,null,{default:_((()=>[m("store.current: "+i(s.store.state.current),1)])),_:1}),(u(),l(f,null,v(5,(a=>d("div",{key:a,class:"flex"},[d(p,{size:"small",type:"success",onClick:s.testFun},{default:_((()=>[j])),_:1},8,["onClick"]),m(" "+i(s.obj.current),1)]))),64))])}));p.render=x,p.__scopeId="data-v-36795382";export default p;
