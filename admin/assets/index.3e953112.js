import{u as a}from"./index.42e492d6.js";import{a as s,c as t,f as r,o as d,X as c,O as i,i as v,aJ as o,$ as e,h as l,Z as n,K as u,aP as p,L as k,p as w,x as m}from"./vendor.91668286.js";u("data-v-78a5c315");const x={class:"work"},f=i("div",{class:"work-tit"},"工作台",-1),$={class:"work-tip"},h={class:"work-info"},I={class:"work-avatar"},_={class:"work-help"},E={class:"work-help-title"},N=i("p",{class:"work-help-dist"},"今日有小雨",-1),j=p('<div class="work-extra" data-v-78a5c315><div class="work-extra-pronum" data-v-78a5c315><div data-v-78a5c315>项目数</div><div class="work-extra-count" data-v-78a5c315>12</div></div><div class="work-extra-pronum" data-v-78a5c315><div data-v-78a5c315>代办项</div><div class="work-extra-count" data-v-78a5c315>3/24</div></div><div class="work-extra-pronum" data-v-78a5c315><div data-v-78a5c315>积分</div><div class="work-extra-count" data-v-78a5c315>1,689</div></div></div>',1),y={class:"app-container"};k();var A=s({setup(s){const u=a(),{userInfo:p}=u,k=t((()=>function(a="Admin"){let s="";const t=(new Date).getHours();return t>=5&&t<=11?s=`早安，${a}，一日之计在于晨，越早预约办理，越早通过！`:t>11&&t<=14?s=`中午好，${a}，午休时间,您要保持睡眠哦！`:t>14&&t<=19?s=`下午好，${a}，祝您下午工作愉快！`:t>19&&t<=23?s=`晚上好，${a}，辛勤劳动了一天早点休息吧！`:t>=0&&t<5&&(s=`现在已经是深夜，${a} 别熬夜了，赶紧休息吧`),s}(u.userInfo.userName))),A=()=>{u.SET_USERNAME(parseInt(100*Math.random()+""))};return(a,s)=>{const t=r("NButton");return d(),c(n,null,[i("div",x,[f,i("div",$,[i("div",h,[i("div",I,[v(o(w),{src:o(p).avatar,circle:"",size:64},null,8,["src"])]),i("div",_,[i("p",E,e(o(k)),1),N])]),j])]),i("div",y,[v(t,{onClick:A,type:"primary"},{default:l((()=>[m("点击："+e(o(u).testValue),1)])),_:1})])],64)}}});A.__scopeId="data-v-78a5c315";export{A as default};
