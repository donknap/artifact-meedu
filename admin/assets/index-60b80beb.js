import{u as z,b as E,r as a,t as F,j as t,I as D,B as _,d as I,S as G}from"./index-e664e6dc.js";import{o as K}from"./creditMall-a16e6879.js";import{B as R}from"./index-6997ccbf.js";import{P as y}from"./index-0c53b4ac.js";import{S as A}from"./index-640f3908.js";import{T as O}from"./Table-ee9d831a.js";import"./LeftOutlined-feda539a.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./addEventListener-263e58b1.js";import"./Pagination-2f0e5cb7.js";import"./useForceUpdate-932ad153.js";import"./responsiveObserver-8e0341fc.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const ie=()=>{const w=z(),c=E(),[h,r]=a.useState(!1),[S,m]=a.useState([]),[l,d]=a.useState(1),[n,p]=a.useState(10),[C,k]=a.useState(0),[o,u]=a.useState(!1),[x,j]=a.useState(""),[N,b]=a.useState([]),[g,f]=a.useState([]);a.useEffect(()=>{document.title="积分订单",w(F("积分订单"))},[]),a.useEffect(()=>{T()},[l,n,o]);const T=()=>{h||(r(!0),K({page:l,size:n,key:x,goods_type:g}).then(s=>{m(s.data.data.data),k(s.data.data.total);let e=s.data.types;const v=[];for(let i=0;i<e.length;i++)v.push({label:e[i].name,value:e[i].value});b(v),r(!1)}).catch(s=>{r(!1)}))},B=()=>{d(1),p(10),m([]),f([]),j(""),u(!o)},P={current:l,pageSize:n,total:C,onChange:(s,e)=>L(s,e),showSizeChanger:!0},L=(s,e)=>{d(s),p(e)},M=[{title:"ID",width:60,render:(s,e)=>t.jsx("span",{children:e.id})},{title:"类型",width:60,render:(s,e)=>t.jsxs(t.Fragment,{children:[e.goods_is_v===1&&t.jsx("div",{children:"虚拟"}),e.goods_is_v===0&&t.jsx("div",{children:"实物"})]})},{title:"商品名称",render:(s,e)=>t.jsx("div",{children:e.goods_title})},{title:"学员",width:300,render:(s,e)=>t.jsxs(t.Fragment,{children:[e.user&&t.jsxs("div",{className:"user-item d-flex",children:[t.jsx("div",{className:"avatar",children:t.jsx("img",{src:e.user.avatar,width:"40",height:"40"})}),t.jsx("div",{className:"ml-10",children:e.user.nick_name})]}),!e.user&&t.jsx("span",{className:"c-red",children:"学员不存在"})]})},{title:"价格",width:200,render:(s,e)=>t.jsxs("div",{children:[e.total_charge,"积分"]})},{title:"状态",width:120,render:(s,e)=>t.jsxs(t.Fragment,{children:[e.is_send===1&&t.jsx("span",{children:"已发货成功"}),e.is_send===0&&t.jsx("span",{children:"发货中"})]})},{title:"运单号",width:200,render:(s,e)=>t.jsx("div",{children:e.express_number})},{title:"时间",width:200,render:(s,e)=>t.jsx("div",{children:I(e.created_at)})},{title:"备注",width:150,render:(s,e)=>t.jsx("span",{children:e.remark})},{title:"操作",width:130,render:(s,e)=>t.jsxs(G,{children:[t.jsx(y,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.credit1Mall.orders.update",onClick:()=>{c("/creditMall/orders/update?id="+e.id)},disabled:null}),e.is_send!==1&&t.jsx(y,{type:"link",text:"发货",class:"c-primary",icon:null,p:"addons.credit1Mall.orders.send",onClick:()=>{c("/creditMall/orders/send?id="+e.id+"&goods_is_v="+e.goods_is_v)},disabled:null})]})}];return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(R,{title:"积分订单"}),t.jsxs("div",{className:"float-left j-b-flex mt-30 mb-30",children:[t.jsx("div",{}),t.jsxs("div",{className:"d-flex",children:[t.jsx(D,{value:x,onChange:s=>{j(s.target.value)},allowClear:!0,style:{width:150},placeholder:"商品名称关键字"}),t.jsx(A,{style:{width:150,marginLeft:10},value:g,onChange:s=>{f(s)},allowClear:!0,placeholder:"商品分类",options:N}),t.jsx(_,{className:"ml-10",onClick:B,children:"清空"}),t.jsx(_,{className:"ml-10",type:"primary",onClick:()=>{d(1),u(!o)},children:"筛选"})]})]}),t.jsx("div",{className:"float-left",children:t.jsx(O,{loading:h,columns:M,dataSource:S,rowKey:s=>s.id,pagination:P})})]})};export{ie as default};
