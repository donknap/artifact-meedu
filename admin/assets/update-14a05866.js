import{f as N,u as v,b as y,r as a,t as C,j as e,I as d,S as F,B as p,m as w}from"./index-e664e6dc.js";import{k as I,m as S}from"./practice-47d493a3.js";import{B}from"./index-6997ccbf.js";import{H as k}from"./index-aa5ba88b.js";import{F as r}from"./index-279b9278.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";const A=()=>{const t=new URLSearchParams(N().search),u=v(),c=y(),[l]=r.useForm(),[m,o]=a.useState(!1),[n,h]=a.useState(Number(t.get("id"))),[x,f]=a.useState(Number(t.get("pid")));a.useEffect(()=>{document.title="编辑练习章节",u(C("编辑练习章节"))},[]),a.useEffect(()=>{h(Number(t.get("id"))),f(Number(t.get("pid"))),t.get("id")&&j()},[t.get("id"),t.get("pid")]);const j=()=>{n!==0&&I(n).then(s=>{var i=s.data.data;l.setFieldsValue({name:i.name,sort:i.sort})})},g=s=>{m||(o(!0),s.pid=x,S(n,s).then(i=>{o(!1),w.success("保存成功！"),c(-1)}).catch(i=>{o(!1)}))},b=s=>{console.log("Failed:",s)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(B,{title:"编辑练习章节"}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(r,{form:l,name:"practice-chapter-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:g,onFinishFailed:b,autoComplete:"off",children:[e.jsx(r.Item,{label:"章节名",name:"name",rules:[{required:!0,message:"请输入章节名!"}],children:e.jsx(d,{style:{width:300},placeholder:"请输入章节名",allowClear:!0})}),e.jsx(r.Item,{label:"排序",name:"sort",children:e.jsxs(F,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"sort",children:e.jsx(d,{type:"number",style:{width:300},placeholder:"请输入排序",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(k,{text:"请输入整数。小数排在前，大数排在后。"})})]})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(p,{loading:m,type:"primary",onClick:()=>l.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(p,{type:"default",onClick:()=>c(-1),children:"取消"})})]})})]})};export{A as default};