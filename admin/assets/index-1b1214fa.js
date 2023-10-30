import{r as a,j as t,I as z,B as w,a as P,M as L,m as R}from"./index-e664e6dc.js";import{l as K,z as D}from"./course-a9e2e142.js";import{T as _}from"./Table-ee9d831a.js";import{l as I}from"./live-f6850866.js";import{l as E}from"./role-ca0eb4dd.js";import{l as T}from"./book-7a089476.js";import{l as $}from"./path-d70a04d0.js";import{l as A}from"./topic-b9592fd8.js";import{l as M}from"./paper-f0c62327.js";import{l as B}from"./practice-47d493a3.js";import{l as V}from"./mock-942c1c73.js";import{T as F}from"./index-54aec4fc.js";const H=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),K({page:c,size:r,sort:"created_at",order:"desc",keywords:p}).then(e=>{g(e.data.courses.data),m(e.data.courses.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"课程ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"课程",render:(e,s)=>t.jsxs("div",{className:"d-flex",children:[t.jsx("div",{children:t.jsx("img",{src:s.thumb,width:"80",height:"60"})}),t.jsx("div",{className:"ml-15",children:s.title})]})},{title:"价格",width:120,dataIndex:"charge",render:e=>t.jsxs("span",{children:["￥",e]})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"vod",id:l.id,title:l.title,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},O=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),I({page:c,size:r,sort:"created_at",order:"desc",keywords:p}).then(e=>{g(e.data.data.data),m(e.data.data.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"课程ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"课程",render:(e,s)=>t.jsxs("div",{className:"d-flex",children:[t.jsx("div",{children:t.jsx("img",{src:s.thumb,width:"80",height:"60"})}),t.jsx("div",{className:"ml-15",children:s.title})]})},{title:"价格",width:120,dataIndex:"charge",render:e=>t.jsxs("span",{children:["￥",e]})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"live",id:l.id,title:l.title,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},X=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(!1);a.useEffect(()=>{r()},[c]);const r=()=>{h||(i(!0),E().then(m=>{g(m.data.data),i(!1)}).catch(m=>{i(!1)}))},f=[{title:"ID",width:120,render:(m,o)=>t.jsx("span",{children:o.id})},{title:"VIP",render:(m,o)=>t.jsx("div",{children:o.name})},{title:"价格",width:120,dataIndex:"charge",render:m=>t.jsxs("span",{children:["￥",m]})}],j={onChange:(m,o)=>{let n=o[0];n&&S.onChange({resource_type:"vip",id:n.id,title:n.name,thumb:null,charge:n.charge,original_charge:n.charge})}};return t.jsx("div",{className:"float-left",children:t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...j},loading:h,columns:f,dataSource:u,rowKey:m=>m.id,pagination:!1})})})},Y=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),T({page:c,size:r,sort:"created_at",order:"desc",key:p}).then(e=>{g(e.data.data.data),m(e.data.data.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"课程ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"电子书",render:(e,s)=>t.jsxs("div",{className:"d-flex",children:[t.jsx("div",{children:t.jsx("img",{src:s.thumb,width:"60",height:"80"})}),t.jsx("div",{className:"ml-15",children:s.name})]})},{title:"价格",width:120,dataIndex:"charge",render:e=>t.jsxs("span",{children:["￥",e]})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"book",id:l.id,title:l.name,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},Z=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),$({page:c,size:r,sort:"created_at",order:"desc",keywords:p}).then(e=>{g(e.data.data),m(e.data.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"路径ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"路径",render:(e,s)=>t.jsxs("div",{className:"d-flex",children:[t.jsx("div",{children:t.jsx("img",{src:s.thumb,width:"100",height:"80"})}),t.jsx("div",{className:"ml-15",children:s.name})]})},{title:"价格",width:120,dataIndex:"charge",render:e=>t.jsxs("span",{children:["￥",e]})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"learnPath",id:l.id,title:l.name,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},q=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),A({page:c,size:r,sort:"created_at",order:"desc",keywords:p}).then(e=>{g(e.data.data.data),m(e.data.data.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"图文ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"图文",render:(e,s)=>t.jsxs("div",{className:"d-flex",children:[t.jsx("div",{children:t.jsx("img",{src:s.thumb,width:"80",height:"60"})}),t.jsx("div",{className:"ml-15",children:s.title})]})},{title:"价格",width:120,dataIndex:"charge",render:e=>t.jsxs("span",{children:["￥",e]})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"topic",id:l.id,title:l.title,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},G=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),M({page:c,size:r,sort:"created_at",order:"desc",key:p}).then(e=>{g(e.data.data.data),m(e.data.data.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"试卷ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"试卷",render:(e,s)=>t.jsx("div",{children:s.title})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"paper",id:l.id,title:l.title,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},J=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),B({page:c,size:r,sort:"created_at",order:"desc",key:p}).then(e=>{g(e.data.data.data),m(e.data.data.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"练习ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"练习",render:(e,s)=>t.jsx("div",{children:s.name})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"practice",id:l.id,title:l.name,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},Q=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),V({page:c,size:r,sort:"created_at",order:"desc",key:p}).then(e=>{g(e.data.data),m(e.data.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"模拟卷ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"模拟卷",render:(e,s)=>t.jsx("div",{children:s.title})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"mock_paper",id:l.id,title:l.title,thumb:l.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},U=S=>{const[h,i]=a.useState(!1),[u,g]=a.useState([]),[c,d]=a.useState(1),[r,f]=a.useState(10),[j,m]=a.useState(0),[o,n]=a.useState(!1),[p,x]=a.useState("");a.useEffect(()=>{C()},[c,r,o]);const C=()=>{h||(i(!0),D({page:c,size:r,sort:"id",order:"desc",keywords:p}).then(e=>{g(e.data.videos.data),m(e.data.videos.total),i(!1)}).catch(e=>{i(!1)}))},y=()=>{d(1),f(10),g([]),x(""),n(!o)},v={current:c,pageSize:r,total:j,onChange:(e,s)=>b(e,s),showSizeChanger:!0},b=(e,s)=>{d(e),f(s)},N=[{title:"视频ID",width:120,render:(e,s)=>t.jsx("span",{children:s.id})},{title:"视频",render:(e,s)=>t.jsx("div",{children:s.title})}],k={onChange:(e,s)=>{let l=s[0];l&&S.onChange({resource_type:"video",id:l.id,title:l.title,thumb:l.course.thumb,charge:l.charge,original_charge:l.charge})}};return t.jsxs("div",{className:"float-left",children:[t.jsxs("div",{className:"float-left mb-15",children:[t.jsx(z,{value:p,onChange:e=>{x(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),t.jsx(w,{className:"ml-10",onClick:y,children:"清空"}),t.jsx(w,{className:"ml-10",type:"primary",onClick:()=>{d(1),n(!o)},children:"筛选"})]}),t.jsx("div",{className:"float-left mb-15",children:t.jsx(_,{rowSelection:{type:"radio",...k},loading:h,columns:N,dataSource:u,rowKey:e=>e.id,pagination:v})})]})},he=S=>{const[h,i]=a.useState(null),[u,g]=a.useState({}),[c,d]=a.useState([]),[r,f]=a.useState("vod"),j=P(n=>n.enabledAddonsConfig.value.enabledAddons);a.useEffect(()=>{if(!S.enabledResource)g({});else{let n=S.enabledResource.split(","),p={};n.forEach(x=>{p[x]=1}),g(p)}},[S.enabledResource]),a.useEffect(()=>{let n=[];u.vod&&n.push({label:"录播",key:"vod"}),u.vip&&n.push({label:"VIP会员",key:"vip"}),u.video&&n.push({label:"视频",key:"video"}),u.live&&j.Zhibo&&n.push({label:"直播",key:"live"}),u.book&&j.MeeduBooks&&n.push({label:"电子书",key:"book"}),u.learnPath&&j.LearningPaths&&n.push({label:"学习路径",key:"learn-path"}),u.topic&&j.MeeduTopics&&n.push({label:"图文",key:"topic"}),j.Paper&&(u.paper&&n.push({label:"试卷",key:"paper"}),u["mock-paper"]&&n.push({label:"模拟卷",key:"mock-paper"}),u.practice&&n.push({label:"练习",key:"practice"})),d(n),n.length===1&&f(n[0].key)},[u,j]);const m=n=>{f(n)},o=n=>{i(n)};return t.jsx(t.Fragment,{children:S.open?t.jsxs(L,{title:"选择",closable:!1,onCancel:()=>{S.onCancel()},open:!0,width:900,maskClosable:!1,onOk:()=>{if(!h){R.error("请先选择内容");return}S.onSelected(h)},centered:!0,children:[t.jsx("div",{className:"float-left",children:t.jsx(F,{defaultActiveKey:r,items:c,onChange:m})}),t.jsxs("div",{className:"float-left",style:{maxHeight:520,overflowX:"hidden",overflowY:"auto",marginBottom:10},children:[r==="vod"&&t.jsx(H,{onChange:o}),r==="vip"&&t.jsx(X,{onChange:o}),r==="live"&&t.jsx(O,{onChange:o}),r==="book"&&t.jsx(Y,{onChange:o}),r==="learn-path"&&t.jsx(Z,{onChange:o}),r==="topic"&&t.jsx(q,{onChange:o}),r==="paper"&&t.jsx(G,{onChange:o}),r==="practice"&&t.jsx(J,{onChange:o}),r==="mock-paper"&&t.jsx(Q,{onChange:o}),r==="video"&&t.jsx(U,{onChange:o})]})]}):null})};export{he as S};