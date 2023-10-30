import{u as k,v as F,s as e,a3 as i,p as s,y as I,S as m,x as J,z as b}from"./index-0a2a6377.js";import{l as z}from"./mock-5ce6978d.js";import{E as Q}from"./index-22e30517.js";import{F as U}from"./index-ff2cd36c.js";import{p as O}from"./mock-c1215ab8.js";import{P}from"./Pagination-79957343.js";import"./useForceUpdate-37b3d847.js";const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAJxQTFRFAAAAAP//AL+/AMSxAMi2ALyuAMKtAMSxAL2qAMGqAL+qALuqAL6qAL6sAL2nALyoALuoALupALyoALupALyoAL2oAL2nALuoALynAL2nALyoALyoALyoALyoALyoALynALunALynALuoALyoALyoALuoALyoALyoALynALunALuoALynALynALuoALynALyoALyoALuoALyoALun5JjEAQAAADN0Uk5TAAIEDQ4TGRobISQtMzc6TE9TWGJqbHd4eoOMnJ+hqquxt7jCzdLf5+jp6uvs7e7v8/n7JpnJuwAAANFJREFUOMu90dkOgjAUBNBREBDcFxB3cFcUcf7/33wwamOvTYzGebrNnLTJLfDb+P3hsO+/ratzkiTnVbmvZ+QhTQ9kVpd6Z8t9GwDae24dAYyYubfJyzjSe6tg5z53WFgaaPJcus+lM5sa6HHxPCzY00DI6fMwY/gpqHQTrsJHVky6FbX3NtSy8RQQU0isgIkEJhLYDQY7IwiAwASOAHA03VADasYn1sDaCE5A/h24OO7FCJjn4qLG0ibHCogkECnAXur90lb/u9xovaRRxr9yBUafR6fjdC93AAAAAElFTkSuQmCC",Y=({cid:n,title:a,charge:h,records:u,isFree:L,expiredMinutes:l,questionsCount:x})=>{const A=k(),y=F(o=>o.loginUser.value.isLogin),d=()=>{if(!y){p();return}A("/exam/mockpaper/detail/"+n)},p=()=>{let o=encodeURIComponent(window.location.pathname+window.location.search);A("/login?redirect="+o)};return e.jsxs("div",{className:i["paper-item-comp"],children:[u[n]&&e.jsx("div",{className:i.status,children:"已参考"}),e.jsxs("div",{className:i.title,children:[e.jsx("img",{className:i.icon,src:O}),e.jsx("div",{className:i.name,children:a})]}),e.jsxs("div",{className:i.button,onClick:()=>d(),children:[!L&&e.jsx("img",{className:i.icon,src:G}),e.jsx("span",{children:"立即考试"})]})]})},H="_content_1alpk_1",f={content:H,"filter-two-class":"_filter-two-class_1alpk_4","list-box":"_list-box_1alpk_14"},se=()=>{document.title="模拟考试";const n=k(),[a,h]=s.useState(!1),[u,L]=s.useState(!0),[l,x]=s.useState([]),[A,y]=s.useState(!1),[d,p]=s.useState(1),[o,V]=s.useState(10),[j,E]=s.useState(0),[R,T]=s.useState([]),[S,_]=s.useState([]),v=new URLSearchParams(I().search),[w,B]=s.useState(Number(v.get("cid"))||0),[C,M]=s.useState(Number(v.get("child"))||0);s.useEffect(()=>{D()},[d,o,A]);const q=()=>{p(1),x([]),y(!A)},D=()=>{a||(h(!0),z({page:d,page_size:o,cid1:w,cid2:C}).then(t=>{let r=[];t.data.categories.forEach(c=>{let g={id:c.id,name:c.name,children:[]};typeof t.data.category_children[c.id]<"u"&&g.children.push(...t.data.category_children[c.id]),r.push(g)}),x(t.data.data.data),E(t.data.data.total),T(r);let N=t.data.user_papers;if(N){const c=[...S];let g=Object.assign(c,N);_(g)}h(!1),L(!1)}))};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"bread-nav",children:[e.jsx("a",{onClick:()=>{n("/exam")},children:"考试练习"})," ","/",e.jsx("span",{children:"模拟考试"})]}),e.jsxs("div",{className:f.content,children:[e.jsxs("div",{className:f["filter-two-class"],children:[a&&u&&e.jsx(m.Button,{active:!0,style:{width:1140,height:24,marginTop:15,marginBottom:15}}),!u&&e.jsx(U,{loading:a,categories:R,defaultKey:w,defaultChild:C,onSelected:(t,r)=>{B(t),M(r),n(t===0?"/exam/mockpaper":r===0?"/exam/mockpaper?cid="+t:"/exam/mockpaper?cid="+t+"&child="+r),q()}})]}),a&&e.jsx(J,{style:{width:1200},children:e.jsxs("div",{style:{width:1200,display:"flex",flexDirection:"column"},children:[e.jsx(m.Button,{active:!0,style:{width:1200,height:116,borderRadius:8,marginTop:30,marginBottom:10}}),e.jsx(m.Button,{active:!0,style:{width:1200,height:116,borderRadius:8,marginTop:30,marginBottom:10}}),e.jsx(m.Button,{active:!0,style:{width:1200,height:116,borderRadius:8,marginTop:30,marginBottom:10}})]})}),!a&&l.length===0&&e.jsx(b,{span:24,children:e.jsx(Q,{})}),!a&&l.length>0&&e.jsx("div",{className:f["list-box"],children:l.map(t=>e.jsx(Y,{cid:t.id,title:t.title,charge:t.charge,records:S,isFree:t.cur_user_can_join,expiredMinutes:t.expired_minutes,questionsCount:t.questions_count},t.id))}),!a&&l.length>0&&o<j&&e.jsx(b,{span:24,style:{display:"flex",justifyContent:"center",marginTop:50},children:e.jsx(P,{onChange:t=>{p(t),window.scrollTo(0,0)},pageSize:o,defaultCurrent:d,total:j})})]})]})};export{se as default};
