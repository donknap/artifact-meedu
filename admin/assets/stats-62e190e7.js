import{f as E,u as L,r as s,t as b,j as a}from"./index-e664e6dc.js";import{q as C}from"./live-f6850866.js";import{D as I}from"./index-dbcffe83.js";import{B as N}from"./index-6997ccbf.js";import{T as O}from"./Table-ee9d831a.js";import"./LeftOutlined-feda539a.js";import"./addEventListener-263e58b1.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./Pagination-2f0e5cb7.js";import"./useForceUpdate-932ad153.js";import"./responsiveObserver-8e0341fc.js";import"./index-640f3908.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const Y=()=>{const r=new URLSearchParams(E().search),m=L(),[u,n]=s.useState(!1),[x,f]=s.useState([]),[d,h]=s.useState(""),[c,o]=s.useState(""),[p,B]=s.useState(!1),[F,_]=s.useState(0),[M,j]=s.useState(0),[R,S]=s.useState(0),[l,g]=s.useState(Number(r.get("id")));s.useEffect(()=>{document.title="直播课程统计",m(b("直播课程统计"))},[]),s.useEffect(()=>{g(Number(r.get("id")))},[r.get("id")]),s.useEffect(()=>{v()},[l,d,c,p]);const v=()=>{u||(n(!0),C(l,{sort:d,order:c}).then(e=>{_(e.data.max_chat_count),S(e.data.max_user_count),j(e.data.max_duration),f(e.data.videos),n(!1)}).catch(e=>{n(!1)}))},w=[{title:"直播课",render:(e,t)=>a.jsx("span",{children:t.title})},{title:"学习人数",width:200,defaultSortOrder:void 0,sorter:(e,t)=>e.user_count-t.user_count,dataIndex:"user_count",render:(e,t)=>a.jsx(a.Fragment,{children:t.status===0||t.status===1?a.jsx("span",{children:"-"}):a.jsx("span",{children:t.user_count})})},{title:"聊天消息数",width:200,defaultSortOrder:void 0,sorter:(e,t)=>e.chat_count-t.chat_count,dataIndex:"chat_count",render:(e,t)=>a.jsx(a.Fragment,{children:t.status===0||t.status===1?a.jsx("span",{children:"-"}):a.jsx("span",{children:t.chat_count})})},{title:"直播时长",width:200,defaultSortOrder:void 0,sorter:(e,t)=>e.real_duration-t.real_duration,dataIndex:"real_duration",render:(e,t)=>a.jsx(a.Fragment,{children:t.status===0||t.status===1?a.jsx("span",{children:"-"}):a.jsx(I,{duration:t.real_duration})})}],D=(e,t,i,T)=>{i.order==="ascend"?o("asc"):i.order==="descend"?o("desc"):o(""),h(i.field)};return a.jsxs("div",{className:"meedu-main-body",children:[a.jsx(N,{title:"直播课程统计"}),a.jsx("div",{className:"float-left mt-30",children:a.jsx(O,{loading:u,columns:w,dataSource:x,rowKey:e=>e.id,pagination:!1,onChange:D})})]})};export{Y as default};
