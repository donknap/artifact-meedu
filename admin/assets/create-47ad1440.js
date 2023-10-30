import{u as T,b as H,r,t as M,j as e,S as i,I as u,B as f,M as E,m as _,h as R}from"./index-e664e6dc.js";import{c as A,s as L,l as Q}from"./book-7a089476.js";import{B as U}from"./index-6997ccbf.js";import{P as z}from"./index-0c53b4ac.js";import{H as o}from"./index-aa5ba88b.js";import{U as O}from"./index-8bc536fa.js";import{Q as $}from"./index-094b6315.js";import{F as t}from"./index-279b9278.js";import{S as G}from"./index-640f3908.js";import{R as J,C as w}from"./row-2dac17a4.js";import{S as x}from"./index-65a4c0be.js";import{D as K}from"./index-011730db.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./InboxOutlined-6e2e7513.js";import"./selected-33965347.js";import"./Dragger-53e4e55c.js";import"./useForceUpdate-932ad153.js";import"./DeleteOutlined-50171d48.js";import"./CheckOutlined-f7d7f4b2.js";import"./useIcons-0af35028.js";import"./Pagination-2f0e5cb7.js";import"./responsiveObserver-8e0341fc.js";import"./index-f944a168.js";const we=()=>{const[a]=t.useForm(),C=T(),n=H(),[p,c]=r.useState(!1),[y,k]=r.useState([]),[I,h]=r.useState(0),[N,g]=r.useState(0),[j,v]=r.useState(""),[F,m]=r.useState(!1);r.useEffect(()=>{document.title="新建电子书",C(M("新建电子书")),a.setFieldsValue({is_show:1,is_free:0,is_vip_free:0}),h(0),m(!1),V()},[]);const V=()=>{A().then(s=>{let l=s.data.categories;const b=[];for(let d=0;d<l.length;d++)b.push({label:l[d].name,value:l[d].id});k(b)})},S=s=>{if(!p){if(s.is_free===1&&(s.charge=0),Number(s.charge)%1!==0){_.error("电子书价格必须为整数");return}if(s.is_free===0&&Number(s.charge)<=0){_.error("电子书未设置免费时价格应该大于0");return}s.render_desc=s.original_desc,s.published_at=R(new Date(s.published_at)).format("YYYY-MM-DD HH:mm"),c(!0),L(s).then(l=>{c(!1),m(!0)}).catch(l=>{c(!1)})}},q=s=>{console.log("Failed:",s)},B=s=>{s?a.setFieldsValue({is_show:1}):a.setFieldsValue({is_show:0})},P=s=>{s?(a.setFieldsValue({is_free:1,charge:0}),h(1),g(0)):(a.setFieldsValue({is_free:0}),h(0))},D=s=>{s?a.setFieldsValue({is_vip_free:1}):a.setFieldsValue({is_vip_free:0})},Y=()=>{Q({page:1,size:1,sort:"id",order:"desc"}).then(s=>{n("/meedubook/article/index?bid="+s.data.data.data[0].id+"&title="+s.data.data.data[0].name,{replace:!0})})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(U,{title:"新建电子书"}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(t,{form:a,name:"book-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:S,onFinishFailed:q,autoComplete:"off",children:[e.jsx(t.Item,{name:"cid",label:"所属分类",rules:[{required:!0,message:"请选择所属分类!"}],children:e.jsxs(i,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"cid",rules:[{required:!0,message:"请选择所属分类!"}],children:e.jsx(G,{style:{width:300},allowClear:!0,placeholder:"请选择所属分类",options:y})}),e.jsx("div",{children:e.jsx(z,{type:"link",text:"分类管理",class:"c-primary",icon:null,p:"addons.meedu_books.book_category.list",onClick:()=>{n("/meedubook/category/index")},disabled:null})})]})}),e.jsx(t.Item,{label:"电子书名称",name:"name",rules:[{required:!0,message:"请输入电子书名称!"}],children:e.jsx(u,{style:{width:300},placeholder:"请输入电子书名称",allowClear:!0})}),e.jsx(t.Item,{label:"电子书封面",name:"thumb",rules:[{required:!0,message:"请上传电子书封面!"}],children:e.jsxs(i,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"thumb",rules:[{required:!0,message:"请上传电子书封面!"}],children:e.jsx(O,{text:"选择图片",onSelected:s=>{a.setFieldsValue({thumb:s}),v(s)}})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"长宽比3:4，建议尺寸：300x400像素"})})]})}),j&&e.jsxs(J,{style:{marginBottom:22},children:[e.jsx(w,{span:3}),e.jsx(w,{span:21,children:e.jsx("div",{className:"normal-thumb-box",style:{backgroundImage:`url(${j})`,width:90,height:120}})})]}),e.jsx(t.Item,{label:"免费",name:"is_free",valuePropName:"checked",children:e.jsx(x,{onChange:P})}),I===0&&e.jsx(t.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(i,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(u,{style:{width:300},placeholder:"单位：元",allowClear:!0,type:"number",onChange:s=>{g(Number(s.target.value))}})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"最小单位“元”，不支持小数"})})]})}),N>0&&e.jsx(t.Item,{label:"会员免费",name:"is_vip_free",children:e.jsxs(i,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_vip_free",valuePropName:"checked",children:e.jsx(x,{onChange:D})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"如果开启该选项，则购买VIP会员的学员可以无需购买即可观看该电子书。"})})]})}),e.jsx(t.Item,{label:"上架时间",required:!0,children:e.jsxs(i,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"published_at",rules:[{required:!0,message:"请选择上架时间!"}],children:e.jsx(K,{format:"YYYY-MM-DD HH:mm",style:{width:300},showTime:!0,placeholder:"请选择上架时间"})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"上架时间越晚，排序越靠前"})})]})}),e.jsx(t.Item,{label:"显示",name:"is_show",children:e.jsxs(i,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_show",valuePropName:"checked",children:e.jsx(x,{onChange:B})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"关闭后电子书在前台隐藏显示"})})]})}),e.jsx(t.Item,{label:"简短介绍",name:"short_desc",rules:[{required:!0,message:"请输入简短介绍!"}],children:e.jsx(u.TextArea,{style:{width:800},placeholder:"请填写课程简单介绍",allowClear:!0,rows:4,maxLength:150,showCount:!0})}),e.jsx(t.Item,{label:"详情介绍",name:"original_desc",rules:[{required:!0,message:"请输入详情介绍!"}],style:{height:840},children:e.jsx("div",{className:"w-800px",children:e.jsx($,{mode:"",height:800,defautValue:"",isFormula:!1,setContent:s=>{a.setFieldsValue({original_desc:s})}})})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(f,{loading:p,type:"primary",onClick:()=>a.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(f,{type:"default",onClick:()=>n(-1),children:"取消"})})]})}),F?e.jsx(E,{title:"",centered:!0,onCancel:()=>{m(!1),n("/meedubook/book/index",{replace:!0})},cancelText:"暂不添加",okText:"立即添加",open:!0,width:500,maskClosable:!1,onOk:()=>{m(!1),Y()},children:e.jsx("div",{className:"text-center",style:{marginTop:30,marginBottom:30},children:e.jsx("span",{children:"新建电子书成功，请在电子书中添加文章吧！"})})}):null]})};export{we as default};
