import{u as b,b as w,r as n,t as C,j as e,S as o,I as i,B as u,m as v}from"./index-e664e6dc.js";import{s as I}from"./singlepage-0b0b487b.js";import{B as N}from"./index-6997ccbf.js";import{H as m}from"./index-aa5ba88b.js";import{Q as y}from"./index-094b6315.js";import{F as s}from"./index-279b9278.js";import{S as F}from"./index-65a4c0be.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./index-f944a168.js";import"./InboxOutlined-6e2e7513.js";import"./selected-33965347.js";import"./Dragger-53e4e55c.js";import"./useForceUpdate-932ad153.js";import"./DeleteOutlined-50171d48.js";import"./CheckOutlined-f7d7f4b2.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./useIcons-0af35028.js";import"./Pagination-2f0e5cb7.js";import"./index-640f3908.js";const U=()=>{const x=b(),c=w(),[l]=s.useForm(),[d,a]=n.useState(!1),[r,h]=n.useState(!0);n.useEffect(()=>{document.title="添加单页面",x(C("添加单页面")),l.setFieldsValue({is_inherit:1})},[]);const p=t=>{d||(a(!0),I(t).then(f=>{a(!1),v.success("保存成功！"),c(-1)}).catch(f=>{a(!1)}))},j=t=>{console.log("Failed:",t)},g=t=>{t?l.setFieldsValue({is_inherit:1}):l.setFieldsValue({is_inherit:0})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(N,{title:"添加单页面"}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(s,{form:l,name:"singlepage-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:p,onFinishFailed:j,autoComplete:"off",children:[e.jsx(s.Item,{label:"页面标识",name:"sign",rules:[{required:!0,message:"请输入页面标识!"}],children:e.jsxs(o,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"sign",rules:[{required:!0,message:"请输入页面标识!"}],children:e.jsx(i,{style:{width:300},placeholder:"请输入页面标识",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(m,{text:"请填写英文字母+数字组合的一串字符串"})})]})}),e.jsx(s.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入标题!"}],children:e.jsxs(o,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"title",rules:[{required:!0,message:"请输入标题!"}],children:e.jsx(i,{style:{width:300},placeholder:"请输入标题",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(m,{text:"指定该页面在浏览器标签栏显示的标题"})})]})}),e.jsx(s.Item,{label:"继承布局",name:"is_inherit",children:e.jsxs(o,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"is_inherit",valuePropName:"checked",children:e.jsx(F,{onChange:g})}),e.jsx("div",{className:"ml-10",children:e.jsx(m,{text:"是否继承网站已有的布局（头部+导航栏+底部）"})})]})}),r&&e.jsx(s.Item,{label:"页面内容",name:"content",rules:[{required:!0,message:"请输入页面内容!"}],children:e.jsxs("div",{className:"c-flex w-800px",children:[e.jsx("div",{className:"changeContent ",onClick:()=>h(!r),children:"纯文本"}),e.jsx(s.Item,{name:"content",rules:[{required:!0,message:"请输入页面内容!"}],children:e.jsx(y,{mode:"",height:400,defautValue:"",isFormula:!1,setContent:t=>{l.setFieldsValue({content:t})}})})]})}),!r&&e.jsx(s.Item,{label:"页面内容",name:"content",rules:[{required:!0,message:"请输入页面内容!"}],children:e.jsxs("div",{className:"c-flex",children:[e.jsx("div",{className:"changeContent ",onClick:()=>h(!r),children:"富文本"}),e.jsx(s.Item,{name:"content",rules:[{required:!0,message:"请输入页面内容!"}],children:e.jsx(i.TextArea,{style:{width:800},placeholder:"请填写页面内容",allowClear:!0,rows:4})})]})}),e.jsx(s.Item,{label:"Seo关键字",name:"seo_keywords",children:e.jsx(i.TextArea,{style:{width:400},placeholder:"请填写Seo关键字",allowClear:!0,rows:4})}),e.jsx(s.Item,{label:"Seo描述",name:"seo_description",children:e.jsx(i.TextArea,{style:{width:400},placeholder:"请填写Seo描述",allowClear:!0,rows:4})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(u,{loading:d,type:"primary",onClick:()=>l.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(u,{type:"default",onClick:()=>c(-1),children:"取消"})})]})})]})};export{U as default};
