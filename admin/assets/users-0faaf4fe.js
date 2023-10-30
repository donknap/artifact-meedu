import{f as q,u as G,r as a,t as J,j as e,I as Q,B as k,d as V,m as d,E as X,h as Z,M as $}from"./index-e664e6dc.js";import{A as v,B as ee,C as se}from"./book-7a089476.js";import{B as te}from"./index-6997ccbf.js";import{P as D}from"./index-0c53b4ac.js";import{u as ae,w as re}from"./xlsx-b055c42d.js";import{U as oe}from"./index-c7ada621.js";import{T as ne}from"./Table-ee9d831a.js";import"./LeftOutlined-feda539a.js";import"./member-2027a1b9.js";import"./index-640f3908.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./index-011730db.js";import"./addEventListener-263e58b1.js";import"./Pagination-2f0e5cb7.js";import"./useForceUpdate-932ad153.js";import"./responsiveObserver-8e0341fc.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const{confirm:le}=$,ve=()=>{const u=new URLSearchParams(q().search),B=G(),[n,r]=a.useState(!1),[E,m]=a.useState([]),[h,i]=a.useState(1),[p,w]=a.useState(10),[b,I]=a.useState(0),[c,f]=a.useState(!1),[x,C]=a.useState(""),[A,g]=a.useState(!1),[j,S]=a.useState([]),[l,P]=a.useState(Number(u.get("bid")));a.useEffect(()=>{document.title="付费学员",B(J("付费学员"))},[]),a.useEffect(()=>{P(Number(u.get("bid")))},[u.get("bid")]),a.useEffect(()=>{U()},[l,h,p,c]);const U=()=>{n||(r(!0),v(l,{page:h,size:p,user_id:x}).then(s=>{m(s.data.data),I(s.data.total),r(!1)}).catch(s=>{r(!1)}))},L=()=>{i(1),w(10),m([]),C(""),S([]),f(!c)},N=()=>{i(1),m([]),S([]),f(!c)},R={current:h,pageSize:p,total:b,onChange:(s,t)=>z(s,t),showSizeChanger:!0},z=(s,t)=>{i(s),w(t)},M=[{title:"学员ID",width:120,render:(s,t)=>e.jsx("span",{children:t.user_id})},{title:"学员",render:(s,t)=>e.jsxs(e.Fragment,{children:[t.user&&e.jsxs("div",{className:"user-item d-flex",children:[e.jsx("div",{className:"avatar",children:e.jsx("img",{src:t.user.avatar,width:"40",height:"40"})}),e.jsx("div",{className:"ml-10",children:t.user.nick_name})]}),!t.user&&e.jsx("span",{className:"c-red",children:"学员不存在"})]})},{title:"价格",width:200,render:(s,t)=>e.jsxs("span",{children:["￥",t.charge]})},{title:"订阅时间",width:200,dataIndex:"created_at",render:s=>e.jsx("span",{children:V(s)})}],T=()=>{if(j.length===0){d.error("请选择需要操作的数据");return}le({title:"操作确认",icon:e.jsx(X,{}),content:"确认删除选中的学员？",centered:!0,okText:"确认",cancelText:"取消",onOk(){n||(r(!0),ee(l,{ids:j.join(",")}).then(()=>{r(!1),d.success("成功"),N()}).catch(s=>{r(!1)}))},onCancel(){console.log("Cancel")}})},F=()=>{if(n)return;r(!0),v(l,{page:1,size:b,user_id:x}).then(t=>{if(t.data.total===0){d.error("数据为空"),r(!1);return}let W="电子书订阅学员.xlsx",y="sheet1",_=[["学员ID","学员","手机号","价格","时间"]];t.data.data.forEach(o=>{_.push([o.user_id,o.user.nick_name,o.user.mobile,o.charge===0?"-":"￥"+o.charge,Z(o.created_at).format("YYYY-MM-DD HH:mm")])});const H=ae.json_to_sheet(_),O={SheetNames:[y],Sheets:{[y]:H}};re(O,W),r(!1)})},Y={selectedRowKeys:j,onChange:(s,t)=>{S(s)}},K=s=>{n||(r(!0),se(l,{user_ids:s.join(",")}).then(()=>{r(!1),d.success("成功"),g(!1),N()}).catch(t=>{r(!1)}))};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(te,{title:"付费学员"}),e.jsxs("div",{className:"float-left j-b-flex mb-30 mt-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(D,{type:"primary",text:"添加学员",class:"",icon:null,p:"addons.meedu_books.book.user.add",onClick:()=>g(!0),disabled:null}),e.jsx(D,{type:"danger",text:"删除学员",class:"ml-10",icon:null,p:"addons.meedu_books.book.user.del",onClick:()=>T(),disabled:null})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(Q,{value:x,onChange:s=>{C(s.target.value)},allowClear:!0,style:{width:150},placeholder:"学员ID"}),e.jsx(k,{className:"ml-10",onClick:L,children:"清空"}),e.jsx(k,{className:"ml-10",type:"primary",onClick:()=>{i(1),f(!c)},children:"筛选"}),e.jsx(k,{className:"ml-10",type:"primary",onClick:()=>F(),children:"导出表格"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(ne,{rowSelection:{type:"checkbox",...Y},loading:n,columns:M,dataSource:E,rowKey:s=>s.id,pagination:R})}),e.jsx(oe,{type:"",open:A,onCancel:()=>g(!1),onSuccess:s=>{K(s)}})]})};export{ve as default};
