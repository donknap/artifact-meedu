import{u as z,r as a,t as A,j as e,B as j,m as g,E as F,d as Y,h as I,M as K}from"./index-e664e6dc.js";import{i as H,j as O}from"./book-7a089476.js";import{B as U}from"./index-6997ccbf.js";import{P as q}from"./index-0c53b4ac.js";import{T as G}from"./Table-ee9d831a.js";import{D as J}from"./index-011730db.js";import"./LeftOutlined-feda539a.js";import"./addEventListener-263e58b1.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./Pagination-2f0e5cb7.js";import"./useForceUpdate-932ad153.js";import"./responsiveObserver-8e0341fc.js";import"./index-640f3908.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const{confirm:Q}=K,{RangePicker:V}=J,ue=()=>{const S=z(),[i,n]=a.useState(!1),[k,c]=a.useState([]),[l,o]=a.useState(1),[d,p]=a.useState(10),[C,y]=a.useState(0),[r,m]=a.useState(!1),[v,N]=a.useState(""),[b,x]=a.useState([]),[w,f]=a.useState([]),[u,h]=a.useState([]);a.useEffect(()=>{document.title="电子书评论",S(A("电子书评论"))},[]),a.useEffect(()=>{_()},[l,d,r]);const _=()=>{i||(n(!0),H({page:l,size:d,user_id:v,bid:null,created_at:b}).then(t=>{c(t.data.data.data),y(t.data.data.total),n(!1)}).catch(t=>{n(!1)}))},D=()=>{if(u.length===0){g.error("请选择需要操作的数据");return}Q({title:"操作确认",icon:e.jsx(F,{}),content:"确认删除选中的评论？",centered:!0,okText:"确认",cancelText:"取消",onOk(){i||(n(!0),O({ids:u}).then(()=>{n(!1),g.success("成功"),B()}).catch(t=>{n(!1)}))},onCancel(){console.log("Cancel")}})},P=()=>{o(1),p(10),c([]),h([]),N(""),f([]),x([]),m(!r)},B=()=>{o(1),c([]),h([]),m(!r)},M={current:l,pageSize:d,total:C,onChange:(t,s)=>E(t,s),showSizeChanger:!0},E=(t,s)=>{o(t),p(s)},R=[{title:"学员",width:300,render:(t,s)=>e.jsxs(e.Fragment,{children:[s.user&&e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:s.user.avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:s.user.nick_name})]}),!s.user&&e.jsx("span",{className:"c-red",children:"学员不存在"})]})},{title:"电子书",render:(t,s)=>e.jsx(e.Fragment,{children:s.book&&e.jsx("span",{children:s.book.name})})},{title:"评论内容",render:(t,s)=>e.jsx("div",{dangerouslySetInnerHTML:{__html:s.content}})},{title:"时间",width:200,dataIndex:"updated_at",render:t=>e.jsx("span",{children:Y(t)})}],T={selectedRowKeys:u,onChange:(t,s)=>{h(t)}},L=t=>t&&t>=I().add(0,"days");return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(U,{title:"电子书评论"}),e.jsxs("div",{className:"float-left j-b-flex mb-30 mt-30",children:[e.jsx("div",{className:"d-flex",children:e.jsx(q,{type:"danger",text:"删除",class:"",icon:null,p:"course_comment.destroy",onClick:()=>D(),disabled:null})}),e.jsxs("div",{className:"d-flex",children:[e.jsx(V,{disabledDate:L,format:"YYYY-MM-DD",value:w,style:{marginLeft:10},onChange:(t,s)=>{s[1]+=" 23:59:59",x(s),f(t)},placeholder:["评论时间-开始","评论时间-结束"]}),e.jsx(j,{className:"ml-10",onClick:P,children:"清空"}),e.jsx(j,{className:"ml-10",type:"primary",onClick:()=>{o(1),m(!r)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(G,{rowSelection:{type:"checkbox",...T},loading:i,columns:R,dataSource:k,rowKey:t=>t.id,pagination:M})})]})};export{ue as default};
