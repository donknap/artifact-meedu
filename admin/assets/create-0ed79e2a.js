import{f as j,u as b,b as g,r as a,t as C,j as e,I as c,S as N,B as m,m as v}from"./index-e664e6dc.js";import{j as y}from"./practice-47d493a3.js";import{B as F}from"./index-6997ccbf.js";import{H as w}from"./index-aa5ba88b.js";import{F as s}from"./index-279b9278.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";const q=()=>{const r=new URLSearchParams(j().search),d=b(),l=g(),[o]=s.useForm(),[n,i]=a.useState(!1),[p,u]=a.useState(Number(r.get("pid")));a.useEffect(()=>{document.title="添加练习章节",d(C("添加练习章节"))},[]),a.useEffect(()=>{u(Number(r.get("pid")))},[r.get("pid")]);const h=t=>{n||(i(!0),t.pid=p,y(t).then(f=>{i(!1),v.success("保存成功！"),l(-1)}).catch(f=>{i(!1)}))},x=t=>{console.log("Failed:",t)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(F,{title:"添加练习章节"}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(s,{form:o,name:"practice-chapter-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:h,onFinishFailed:x,autoComplete:"off",children:[e.jsx(s.Item,{label:"章节名",name:"name",rules:[{required:!0,message:"请输入章节名!"}],children:e.jsx(c,{style:{width:300},placeholder:"请输入章节名",allowClear:!0})}),e.jsx(s.Item,{label:"排序",name:"sort",children:e.jsxs(N,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"sort",children:e.jsx(c,{type:"number",style:{width:300},placeholder:"请输入排序",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(w,{text:"请输入整数。小数排在前，大数排在后。"})})]})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(m,{loading:n,type:"primary",onClick:()=>o.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(m,{type:"default",onClick:()=>l(-1),children:"取消"})})]})})]})};export{q as default};