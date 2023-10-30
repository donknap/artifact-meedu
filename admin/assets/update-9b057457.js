import{f as T,u as U,b as A,r as i,t as Q,j as e,g as $,S as m,I as j,B as I,m as f,h as z}from"./index-e664e6dc.js";import{a as G,c as J,u as K}from"./course-a9e2e142.js";import{B as O}from"./index-6997ccbf.js";import{P as W}from"./index-0c53b4ac.js";import{H as h}from"./index-aa5ba88b.js";import{U as X}from"./index-8bc536fa.js";import{Q as Z}from"./index-094b6315.js";import{d as ee,D as se}from"./index-011730db.js";import{F as a}from"./index-279b9278.js";import{S as te}from"./index-640f3908.js";import{R as ae,C}from"./row-2dac17a4.js";import{S as N}from"./index-65a4c0be.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./InboxOutlined-6e2e7513.js";import"./selected-33965347.js";import"./Dragger-53e4e55c.js";import"./useForceUpdate-932ad153.js";import"./DeleteOutlined-50171d48.js";import"./CheckOutlined-f7d7f4b2.js";import"./useIcons-0af35028.js";import"./Pagination-2f0e5cb7.js";import"./responsiveObserver-8e0341fc.js";import"./index-f944a168.js";const ve=()=>{const u=new URLSearchParams(T().search),[r]=a.useForm(),F=U(),x=A(),[b,S]=i.useState(!0),[_,p]=i.useState(!1),[v,D]=i.useState([]),[Y,g]=i.useState(0),[y,w]=i.useState(""),[k,q]=i.useState(""),[c,V]=i.useState(Number(u.get("id")));i.useEffect(()=>{document.title="编辑录播课程",F(Q("编辑录播课程")),B()},[c]),i.useEffect(()=>{V(Number(u.get("id")))},[u.get("id")]);const B=async()=>{await P(),await H(),S(!1)},H=async()=>{if(c===0)return;var t=(await G(c)).data;r.setFieldsValue({category_id:t.category_id,title:t.title,thumb:t.thumb,is_show:t.is_show,is_free:t.is_free,short_description:t.short_description,original_desc:t.original_desc,charge:t.charge,published_at:ee(t.published_at,"YYYY-MM-DD HH:mm")}),g(t.is_free),q(t.original_desc),w(t.thumb)},P=async()=>{let t=(await J()).data.categories;const d=[];for(let l=0;l<t.length;l++)if(t[l].children.length>0){d.push({label:t[l].name,value:t[l].id});let o=t[l].children;for(let n=0;n<o.length;n++)o[n].name="|----"+o[n].name,d.push({label:o[n].name,value:o[n].id})}else d.push({label:t[l].name,value:t[l].id});D(d)},M=s=>{if(!_){if(s.is_free===1&&(s.charge=0),Number(s.charge)%1!==0){f.error("课程价格必须为整数型");return}if(s.is_free===0&&Number(s.charge)<=0){f.error("课程未设置免费时价格应该大于0");return}s.render_desc=s.original_desc,s.published_at=z(new Date(s.published_at)).format("YYYY-MM-DD HH:mm"),p(!0),K(c,s).then(t=>{p(!1),f.success("保存成功！"),x(-1)}).catch(t=>{p(!1)})}},E=s=>{console.log("Failed:",s)},L=s=>{s?r.setFieldsValue({is_show:1}):r.setFieldsValue({is_show:0})},R=s=>{s?(r.setFieldsValue({is_free:1}),g(1)):(r.setFieldsValue({is_free:0}),g(0))};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(O,{title:"编辑录播课程"}),b&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx($,{})}),e.jsx("div",{style:{display:b?"none":"block"},className:"float-left mt-30",children:e.jsxs(a,{form:r,name:"course-update",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:M,onFinishFailed:E,autoComplete:"off",children:[e.jsx(a.Item,{name:"category_id",label:"所属分类",rules:[{required:!0,message:"请选择所属分类!"}],children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(a.Item,{name:"category_id",rules:[{required:!0,message:"请选择所属分类!"}],children:e.jsx(te,{style:{width:300},allowClear:!0,placeholder:"请选择所属分类",options:v})}),e.jsx("div",{children:e.jsx(W,{type:"link",text:"分类管理",class:"c-primary",icon:null,p:"courseCategory",onClick:()=>{x("/course/vod/category/index")},disabled:null})})]})}),e.jsx(a.Item,{label:"课程名称",name:"title",rules:[{required:!0,message:"请输入课程名称!"}],children:e.jsx(j,{style:{width:300},placeholder:"请输入课程名称",allowClear:!0})}),e.jsx(a.Item,{label:"课程封面",name:"thumb",rules:[{required:!0,message:"请上传课程封面!"}],children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(a.Item,{name:"thumb",rules:[{required:!0,message:"请上传课程封面!"}],children:e.jsx(X,{text:"选择图片",onSelected:s=>{r.setFieldsValue({thumb:s}),w(s)}})}),e.jsx("div",{className:"ml-10",children:e.jsx(h,{text:"长宽比4:3，建议尺寸：400x300像素"})})]})}),y&&e.jsxs(ae,{style:{marginBottom:22},children:[e.jsx(C,{span:3}),e.jsx(C,{span:21,children:e.jsx("div",{className:"contain-thumb-box",style:{backgroundImage:`url(${y})`,width:200,height:150}})})]}),e.jsx(a.Item,{label:"免费",name:"is_free",valuePropName:"checked",children:e.jsx(N,{onChange:R})}),Y===0&&e.jsx(a.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(a.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(j,{style:{width:300},placeholder:"单位：元",allowClear:!0,type:"number"})}),e.jsx("div",{className:"ml-10",children:e.jsx(h,{text:"最小单位“元”，不支持小数"})})]})}),e.jsx(a.Item,{label:"上架时间",required:!0,children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(a.Item,{name:"published_at",rules:[{required:!0,message:"请选择上架时间!"}],children:e.jsx(se,{format:"YYYY-MM-DD HH:mm",style:{width:300},showTime:!0,placeholder:"请选择上架时间"})}),e.jsx("div",{className:"ml-10",children:e.jsx(h,{text:"上架时间越晚，排序越靠前"})})]})}),e.jsx(a.Item,{label:"显示",name:"is_show",children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(a.Item,{name:"is_show",valuePropName:"checked",children:e.jsx(N,{onChange:L})}),e.jsx("div",{className:"ml-10",children:e.jsx(h,{text:"关闭后此课程在前台隐藏显示"})})]})}),e.jsx(a.Item,{label:"简短介绍",name:"short_description",rules:[{required:!0,message:"请输入简短介绍!"}],children:e.jsx(j.TextArea,{style:{width:800},placeholder:"请填写课程简单介绍",allowClear:!0,rows:4,maxLength:150,showCount:!0})}),e.jsx(a.Item,{label:"详情介绍",name:"original_desc",rules:[{required:!0,message:"请输入详情介绍!"}],style:{height:840},children:e.jsx("div",{className:"w-800px",children:e.jsx(Z,{mode:"",height:800,defautValue:k,isFormula:!1,setContent:s=>{r.setFieldsValue({original_desc:s})}})})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(I,{loading:_,type:"primary",onClick:()=>r.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(I,{type:"default",onClick:()=>x(-1),children:"取消"})})]})})]})};export{ve as default};