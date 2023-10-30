import{u as K,v as q,s as e,a1 as o,p as s,y as z,S as j,x as D,z as N}from"./index-0a2a6377.js";import{l as F}from"./paper-f2aac85a.js";import{E as I}from"./index-22e30517.js";import{F as J}from"./index-ff2cd36c.js";import{p as U}from"./test-19b13b0b.js";import{P as O}from"./Pagination-79957343.js";import"./useForceUpdate-37b3d847.js";const H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAJxQTFRFAAAAgP//QL//TrH/Sbb/Q67/Pa3/RbH/Qqr/Pqr/QKr/Pqr/PKr6PKz6Pqf7PKj8Paj8Pan8Paj8Pqn8PKj6Paj6PKf7Pqj7Paf7PKf7PKj7PKj6Paj6PKj6PKj7Paf7Paf7Paf7Paj7PKj7Paj6Paj6Paj6Paj7PKf7PKf7Paj7Paf7Paf7PKj7PKf7Paj7Paj7PKj7Paj7PKf6OR4B+QAAADN0Uk5TAAIEDQ4TGRobISQtMzc6TE9TWGJqbHd4eoOMnJ+hqquxt7jCzdLf5+jp6uvs7e7v8/n7JpnJuwAAANFJREFUOMu90dkOgjAUBNBREBDcFxB3cFcUcf7/33wwamOvTYzGebrNnLTJLfDb+P3hsO+/ratzkiTnVbmvZ+QhTQ9kVpd6Z8t9GwDae24dAYyYubfJyzjSe6tg5z53WFgaaPJcus+lM5sa6HHxPCzY00DI6fMwY/gpqHQTrsJHVky6FbX3NtSy8RQQU0isgIkEJhLYDQY7IwiAwASOAHA03VADasYn1sDaCE5A/h24OO7FCJjn4qLG0ibHCogkECnAXur90lb/u9xovaRRxr9yBUafR6fjdC93AAAAAElFTkSuQmCC",M=({cid:n,title:a,charge:m,records:p,isFree:f,expiredMinutes:l,questionsCount:P})=>{const d=K(),x=q(i=>i.loginUser.value.isLogin),u=()=>{if(!x){g();return}d("/exam/papers/detail/"+n)},g=()=>{let i=encodeURIComponent(window.location.pathname+window.location.search);d("/login?redirect="+i)};return e.jsxs("div",{className:o["paper-item-comp"],children:[p[n]&&e.jsx("div",{className:o.status,children:"已参考"}),e.jsxs("div",{className:o.title,children:[e.jsx("img",{className:o.icon,src:U}),e.jsx("div",{className:o.name,children:a})]}),e.jsxs("div",{className:o.button,onClick:()=>u(),children:[!f&&e.jsx("img",{className:o.icon,src:H}),e.jsx("span",{children:"立即考试"})]})]})},Y="_content_1alpk_1",A={content:Y,"filter-two-class":"_filter-two-class_1alpk_4","list-box":"_list-box_1alpk_14"},se=()=>{document.title="在线考试";const n=K(),[a,m]=s.useState(!1),[p,f]=s.useState(!0),[l,P]=s.useState([]),[d,x]=s.useState(!1),[u,g]=s.useState(1),[i,G]=s.useState(10),[v,R]=s.useState(0),[T,_]=s.useState([]),[w,E]=s.useState([]),C=new URLSearchParams(z().search),[S,B]=s.useState(Number(C.get("cid"))||0),[b,L]=s.useState(Number(C.get("child"))||0);s.useEffect(()=>{k()},[u,i,d]);const Q=()=>{g(1),P([]),x(!d)},k=()=>{a||(m(!0),F({page:u,page_size:i,cid1:S,cid2:b}).then(t=>{let r=[];t.data.categories.forEach(c=>{let h={id:c.id,name:c.name,children:[]};typeof t.data.category_children[c.id]<"u"&&h.children.push(...t.data.category_children[c.id]),r.push(h)}),P(t.data.data.data),R(t.data.data.total),_(r);let y=t.data.user_papers;if(y){const c=[...w];let h=Object.assign(c,y);E(h)}m(!1),f(!1)}))};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"bread-nav",children:[e.jsx("a",{onClick:()=>{n("/exam")},children:"考试练习"})," ","/",e.jsx("span",{children:"在线考试"})]}),e.jsxs("div",{className:A.content,children:[e.jsxs("div",{className:A["filter-two-class"],children:[a&&p&&e.jsx(j.Button,{active:!0,style:{width:1140,height:24,marginTop:15,marginBottom:15}}),!p&&e.jsx(J,{loading:a,categories:T,defaultKey:S,defaultChild:b,onSelected:(t,r)=>{B(t),L(r),n(t===0?"/exam/papers":r===0?"/exam/papers?cid="+t:"/exam/papers?cid="+t+"&child="+r),Q()}})]}),a&&e.jsx(D,{style:{width:1200},children:e.jsxs("div",{style:{width:1200,display:"flex",flexDirection:"column"},children:[e.jsx(j.Button,{active:!0,style:{width:1200,height:116,borderRadius:8,marginTop:30,marginBottom:10}}),e.jsx(j.Button,{active:!0,style:{width:1200,height:116,borderRadius:8,marginTop:30,marginBottom:10}}),e.jsx(j.Button,{active:!0,style:{width:1200,height:116,borderRadius:8,marginTop:30,marginBottom:10}})]})}),!a&&l.length===0&&e.jsx(N,{span:24,children:e.jsx(I,{})}),!a&&l.length>0&&e.jsx("div",{className:A["list-box"],children:l.map(t=>e.jsx(M,{cid:t.id,title:t.title,charge:t.charge,records:w,isFree:t.cur_user_can_join,expiredMinutes:t.expired_minutes,questionsCount:t.questions_count},t.id))}),!a&&l.length>0&&i<v&&e.jsx(N,{span:24,style:{display:"flex",justifyContent:"center",marginTop:50},children:e.jsx(O,{onChange:t=>{g(t),window.scrollTo(0,0)},pageSize:i,defaultCurrent:u,total:v})})]})]})};export{se as default};