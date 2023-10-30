import{f as P,u as H,b as M,r as a,t as Q,j as e,g as K,I as m,S as b,B as j,m as $}from"./index-e664e6dc.js";import{a as z,u as G}from"./creditMall-a16e6879.js";import{B as J}from"./index-6997ccbf.js";import{H as f}from"./index-aa5ba88b.js";import{U as O}from"./index-8bc536fa.js";import{Q as W}from"./index-094b6315.js";import{F as i}from"./index-279b9278.js";import{T as X}from"./index-54aec4fc.js";import{R as Y,C as g}from"./row-2dac17a4.js";import{S as Z}from"./index-65a4c0be.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./InboxOutlined-6e2e7513.js";import"./selected-33965347.js";import"./Dragger-53e4e55c.js";import"./useForceUpdate-932ad153.js";import"./DeleteOutlined-50171d48.js";import"./CheckOutlined-f7d7f4b2.js";import"./useIcons-0af35028.js";import"./Pagination-2f0e5cb7.js";import"./responsiveObserver-8e0341fc.js";import"./index-640f3908.js";import"./index-f944a168.js";import"./PlusOutlined-4cee6348.js";const Ie=()=>{const o=new URLSearchParams(P().search),[l]=i.useForm(),y=H(),d=M(),[u,v]=a.useState(!0),[h,n]=a.useState(!1),[c,w]=a.useState("base"),[_,S]=a.useState(""),[ee,I]=a.useState(""),[p,x]=a.useState(""),[C,k]=a.useState(0),[N,F]=a.useState(0),[V,B]=a.useState(""),[r,q]=a.useState(Number(o.get("id"))),T=[{key:"base",label:"基础信息"},{key:"dev",label:"可选信息"}];a.useEffect(()=>{document.title="编辑积分商品",y(Q("编辑积分商品")),E()},[r]),a.useEffect(()=>{q(Number(o.get("id")))},[o.get("id")]);const E=async()=>{await R(),v(!1)},R=async()=>{if(r===0)return;var t=(await z(r)).data;l.setFieldsValue({v_id:t.v_id,title:t.title,thumb:t.thumb,is_show:t.is_show,desc:t.desc,stock_count:t.stock_count,charge:t.charge}),x(t.thumb),I(t.title),k(t.is_v),F(t.v_id),B(t.v_type),S(t.desc)},A=s=>{w(s)},D=s=>{h||(s.is_v=C,s.v_id=N,s.v_type=V,n(!0),G(r,s).then(t=>{n(!1),$.success("保存成功！"),d(-1)}).catch(t=>{n(!1)}))},U=s=>{console.log("Failed:",s)},L=s=>{s?l.setFieldsValue({is_show:1}):l.setFieldsValue({is_show:0})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(J,{title:"编辑积分商品"}),e.jsx("div",{className:"center-tabs mb-30",children:e.jsx(X,{defaultActiveKey:c,items:T,onChange:A})}),u&&e.jsx("div",{className:"float-left text-center",children:e.jsx(K,{})}),e.jsx("div",{style:{display:u?"none":"block"},className:"float-left",children:e.jsxs(i,{form:l,name:"creditMall-update",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:D,onFinishFailed:U,autoComplete:"off",children:[e.jsxs("div",{style:{display:c==="base"?"block":"none"},children:[e.jsx(i.Item,{label:"商品名",name:"title",rules:[{required:!0,message:"请输入商品名!"}],children:e.jsx(m,{style:{width:300},placeholder:"请输入商品名",allowClear:!0})}),e.jsx(i.Item,{label:"商品封面",name:"thumb",rules:[{required:!0,message:"请上传商品封面!"}],children:e.jsx(O,{text:"上传封面",onSelected:s=>{l.setFieldsValue({thumb:s}),x(s)}})}),p&&e.jsxs(Y,{style:{marginBottom:22},children:[e.jsx(g,{span:3}),e.jsx(g,{span:21,children:e.jsx("div",{className:"contain-thumb-box",style:{backgroundImage:`url(${p})`,width:400,height:400,backgroundColor:"#f4fafe"}})})]}),e.jsx(i.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(b,{align:"baseline",style:{height:32},children:[e.jsx(i.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(m,{style:{width:300},placeholder:"单位：积分",allowClear:!0,type:"number"})}),e.jsx("div",{className:"ml-10",children:e.jsx(f,{text:"价格最小单位为：积分，不支持小数"})})]})}),e.jsx(i.Item,{label:"介绍",name:"desc",rules:[{required:!0,message:"请输入介绍!"}],style:{height:440},children:e.jsx(W,{mode:"",height:400,defautValue:_,isFormula:!1,setContent:s=>{l.setFieldsValue({desc:s})}})}),e.jsx(i.Item,{label:"库存",name:"stock_count",rules:[{required:!0,message:"请输入库存!"}],children:e.jsx(m,{type:"number",style:{width:300},placeholder:"商品库存数量",allowClear:!0})})]}),e.jsx("div",{style:{display:c==="dev"?"block":"none"},children:e.jsx(i.Item,{label:"显示",name:"is_show",children:e.jsxs(b,{align:"baseline",style:{height:32},children:[e.jsx(i.Item,{name:"is_show",valuePropName:"checked",children:e.jsx(Z,{onChange:L})}),e.jsx("div",{className:"ml-10",children:e.jsx(f,{text:"控制用户是否能看到该商品"})})]})})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(j,{loading:h,type:"primary",onClick:()=>l.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(j,{type:"default",onClick:()=>d(-1),children:"取消"})})]})})]})};export{Ie as default};