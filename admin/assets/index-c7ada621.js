import{r as a,j as e,M as $,bZ as N,I as q,B as _,m as G,d as H}from"./index-e664e6dc.js";import{l as J}from"./member-2027a1b9.js";import{S as Q}from"./index-640f3908.js";import{T as V}from"./Table-ee9d831a.js";import{D as W}from"./index-011730db.js";const{RangePicker:X}=W,re=({open:D,type:m,onCancel:K,onSuccess:u})=>{const[g,n]=a.useState(!1),[R,x]=a.useState([]),[o,i]=a.useState(1),[d,f]=a.useState(10),[A,I]=a.useState(0),[c,p]=a.useState(!1),[j,S]=a.useState(""),[w,C]=a.useState([]),[L,P]=a.useState([]),[T,b]=a.useState([]),[z,v]=a.useState([]),[h,y]=a.useState([]),[F,k]=a.useState([]);a.useEffect(()=>{M()},[o,d,c]);const M=()=>{g||(n(!0),J({page:o,size:d,sort:"id",order:"desc",keywords:j,role_id:null,tag_id:w,created_at:T}).then(t=>{x(t.data.data.data),I(t.data.data.total);let s=t.data.tags,l=[];s.map(r=>{l.push({label:r.name,value:r.id})}),P(l),n(!1)}).catch(t=>{n(!1)}))},Y=()=>{if(h.length===0){G.error("请选择需要操作的学员");return}u(m==="mobile"?F:h)},E=()=>{i(1),f(10),x([]),y([]),S(""),v([]),b([]),C([]),p(!c)},B=[{title:"ID",width:120,render:(t,s)=>e.jsx("span",{children:s.id})},{title:"学员",render:(t,s)=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:s.avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:s.nick_name})]})})},{title:"手机号码",width:200,render:(t,s)=>e.jsxs(e.Fragment,{children:[s.mobile&&e.jsx("span",{children:s.mobile}),!s.mobile&&e.jsx("span",{children:"-"})]})},{title:"注册时间",width:200,dataIndex:"created_at",render:t=>e.jsx("span",{children:H(t)})}],O={current:o,pageSize:d,total:A,onChange:(t,s)=>U(t,s),showSizeChanger:!0},U=(t,s)=>{i(t),f(s)},Z={selectedRowKeys:h,onChange:(t,s)=>{if(y(t),m==="mobile"){let l=[];s.map(r=>{l.push(r.mobile)}),k(l)}else k([])}};return e.jsx(e.Fragment,{children:D?e.jsxs($,{title:"",centered:!0,forceRender:!0,open:!0,width:1200,onCancel:()=>{K()},maskClosable:!1,closable:!1,onOk:()=>Y(),children:[e.jsx("div",{className:N.header,children:"添加学员"}),e.jsxs("div",{className:N.body,children:[e.jsxs("div",{className:"d-flex float-left",children:[e.jsx(q,{value:j,style:{width:150},onChange:t=>{S(t.target.value)},allowClear:!0,placeholder:"关键字"}),e.jsx(Q,{style:{width:150,marginLeft:10},value:w,onChange:t=>{C(t)},allowClear:!0,placeholder:"学员标签",options:L}),e.jsx(X,{format:"YYYY-MM-DD",value:z,style:{marginLeft:10},onChange:(t,s)=>{s[1]+=" 23:59:59",b(s),v(t)},placeholder:["注册-开始日期","注册-结束日期"]}),e.jsx(_,{className:"ml-10",onClick:E,children:"清空"}),e.jsx(_,{className:"ml-10",type:"primary",onClick:()=>{i(1),p(!c)},children:"筛选"})]}),e.jsx("div",{className:"float-left mt-30",children:e.jsx(V,{rowSelection:{type:"checkbox",...Z},loading:g,columns:B,dataSource:R,rowKey:t=>t.id,pagination:O})})]})]}):null})};export{re as U};
