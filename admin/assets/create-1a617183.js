import{u as w,b as I,r,t as F,j as e,S as N,I as o,B as h,m as S}from"./index-e664e6dc.js";import{c as k,s as B}from"./wechat-5e5f70bc.js";import{B as T}from"./index-6997ccbf.js";import{H as E}from"./index-aa5ba88b.js";import{F as t}from"./index-279b9278.js";import{S as u}from"./index-640f3908.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";const G=()=>{const[m]=t.useForm(),x=w(),c=I(),[d,i]=r.useState(!1),[j,y]=r.useState([]),[p,f]=r.useState(""),b=[{value:"subscribe",label:"用户关注"},{value:"CLICK",label:"自定义菜单事件"}];r.useEffect(()=>{document.title="新建自动回复",x(F("新建自动回复")),g()},[]);const g=()=>{k().then(s=>{const a=[];let n=s.data.types;for(let l=0;l<n.length;l++)a.push({label:n[l].name,value:n[l].id});y(a)})},v=s=>{d||(i(!0),B(s).then(a=>{i(!1),S.success("保存成功！"),c(-1)}).catch(a=>{i(!1)}))},C=s=>{console.log("Failed:",s)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(T,{title:"新建自动回复"}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(t,{form:m,name:"wechat-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:v,onFinishFailed:C,autoComplete:"off",children:[e.jsx(t.Item,{label:"消息类型",name:"type",rules:[{required:!0,message:"请选择消息类型!"}],children:e.jsx(u,{style:{width:300},allowClear:!0,placeholder:"请选择消息类型",options:j,onChange:s=>{f(s)}})}),p==="text"&&e.jsx(t.Item,{label:"触发关键字",children:e.jsxs(N,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"rule",children:e.jsx(o,{style:{width:300},placeholder:"请输入触发关键字",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(E,{text:"支持正则表达式"})})]})}),p==="event"&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"事件",name:"event_type",children:e.jsx(u,{style:{width:300},allowClear:!0,placeholder:"请选择事件",options:b})}),e.jsx(t.Item,{label:"事件key",name:"event_key",children:e.jsx(o,{style:{width:300},allowClear:!0,placeholder:"请输入事件key"})})]}),e.jsx(t.Item,{label:"回复内容",name:"reply_content",rules:[{required:!0,message:"请输入回复内容!"}],children:e.jsx(o.TextArea,{style:{width:500,minHeight:120},placeholder:"请输入回复内容",allowClear:!0,maxLength:200})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(h,{loading:d,type:"primary",onClick:()=>m.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(h,{type:"default",onClick:()=>c(-1),children:"取消"})})]})})]})};export{G as default};
