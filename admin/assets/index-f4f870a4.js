import{u as K,b as M,r as s,t as O,j as e,B as p,I as R,d as q,S,D as A,e as $,E as G,m as H,M as J}from"./index-e664e6dc.js";import{l as Q,c as U,d as V}from"./practice-47d493a3.js";import{P as c}from"./index-0c53b4ac.js";import{S as W}from"./index-640f3908.js";import{T as X}from"./Table-ee9d831a.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./addEventListener-263e58b1.js";import"./Pagination-2f0e5cb7.js";import"./LeftOutlined-feda539a.js";import"./useForceUpdate-932ad153.js";import"./responsiveObserver-8e0341fc.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const{confirm:Y}=J,ue=()=>{const b=K(),r=M(),[m,l]=s.useState(!1),[v,u]=s.useState([]),[x,o]=s.useState(1),[h,g]=s.useState(20),[w,P]=s.useState(0),[d,f]=s.useState(!1),[y,j]=s.useState(""),[C,k]=s.useState([]),[N,_]=s.useState([]);s.useEffect(()=>{document.title="练习",b(O("练习")),E()},[]),s.useEffect(()=>{D()},[x,h,d]);const D=()=>{m||(l(!0),Q({page:x,size:h,sort:"id",order:"desc",key:y,category_id:C}).then(t=>{u(t.data.data.data),P(t.data.data.total),l(!1)}).catch(t=>{l(!1)}))},E=()=>{U().then(t=>{let a=t.data.categories;const i=[];for(let n=0;n<a.length;n++)i.push({label:a[n].name,value:a[n].id});_(i)})},z=()=>{o(1),g(20),u([]),j(""),k([]),f(!d)},T={current:x,pageSize:h,total:w,onChange:(t,a)=>I(t,a),showSizeChanger:!0},I=(t,a)=>{o(t),g(a)},L=[{title:"分类",width:200,render:(t,a)=>{var i;return e.jsx("span",{children:((i=a==null?void 0:a.category)==null?void 0:i.name)||"-"})}},{title:"练习名",width:500,render:(t,a)=>e.jsx("span",{children:a.name})},{title:"题目数",render:(t,a)=>e.jsxs("div",{children:[a.question_count,"个"]})},{title:"时间",width:200,dataIndex:"created_at",render:t=>e.jsx("span",{children:q(t)})},{title:"操作",width:160,fixed:"right",render:(t,a)=>{const i=[{key:"1",label:e.jsx(c,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.Paper.practice.update",onClick:()=>{r("/exam/practice/update?id="+a.id)},disabled:null})},{key:"2",label:e.jsx(c,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.Paper.practice.delete",onClick:()=>{F(a.id)},disabled:null})}];return e.jsxs(S,{children:[e.jsx(c,{type:"link",text:"章节",class:"c-primary",icon:null,p:"addons.Paper.practice_chapter.list",onClick:()=>{r("/exam/practice/chapter/index?id="+a.id)},disabled:null}),e.jsx(c,{type:"link",text:"学员",class:"c-primary",icon:null,p:"addons.Paper.practice.users",onClick:()=>{r("/exam/practice/user?id="+a.id)},disabled:null}),e.jsx(A,{menu:{items:i},children:e.jsx(p,{type:"link",className:"c-primary",onClick:n=>n.preventDefault(),children:e.jsxs(S,{size:"small",align:"center",children:["更多",e.jsx($,{})]})})})]})}}],B=()=>{o(1),u([]),f(!d)},F=t=>{t!==0&&Y({title:"操作确认",icon:e.jsx(G,{}),content:"确认删除此练习？",centered:!0,okText:"确认",cancelText:"取消",onOk(){if(!m){l(!0);var a=[];a.push(t),V({ids:a}).then(()=>{l(!1),H.success("删除成功"),B()}).catch(i=>{l(!1)})}},onCancel(){console.log("Cancel")}})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsxs("div",{className:"float-left j-b-flex mb-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(c,{type:"primary",text:"新建练习",class:"",icon:null,p:"addons.Paper.practice.store",onClick:()=>r("/exam/practice/create"),disabled:null}),e.jsx(p,{type:"primary",className:"ml-10",onClick:()=>r("/exam/paper/category/index"),children:"分类管理"})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(R,{value:y,onChange:t=>{j(t.target.value)},allowClear:!0,style:{width:150},placeholder:"练习试卷关键字"}),e.jsx(W,{style:{width:150,marginLeft:10},value:C,onChange:t=>{k(t)},allowClear:!0,placeholder:"分类",options:N}),e.jsx(p,{className:"ml-10",onClick:z,children:"清空"}),e.jsx(p,{className:"ml-10",type:"primary",onClick:()=>{o(1),f(!d)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(X,{loading:m,columns:L,dataSource:v,rowKey:t=>t.id,pagination:T})})]})};export{ue as default};
