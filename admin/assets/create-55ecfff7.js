import{u as B,b as q,r,t as T,j as e,S as c,B as h,I as f,M as E,m as j}from"./index-e664e6dc.js";import{c as H,s as M,l as z}from"./practice-47d493a3.js";import{B as A}from"./index-6997ccbf.js";import{H as u}from"./index-aa5ba88b.js";import{F as t}from"./index-279b9278.js";import{S as D}from"./index-640f3908.js";import{S as b}from"./index-65a4c0be.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";const ee=()=>{const _=B(),l=q(),[a]=t.useForm(),[p,o]=r.useState(!1),[v,y]=r.useState([]),[C,x]=r.useState(0),[N,m]=r.useState(0),[F,d]=r.useState(!1);r.useEffect(()=>{document.title="新建练习",_(T("新建练习")),a.setFieldsValue({is_free:0,is_vip_free:0}),m(0),I()},[]);const I=()=>{H().then(s=>{let i=s.data.categories;const g=[];for(let n=0;n<i.length;n++)g.push({label:i[n].name,value:i[n].id});y(g)})},S=s=>{if(!p){if(s.is_free===1&&(s.charge=0),Number(s.charge)%1!==0){j.error("价格必须为整数型");return}if(s.is_free===0&&Number(s.charge)<=0){j.error("练习未设置免费时价格应该大于0");return}o(!0),M(s).then(i=>{o(!1),d(!0)}).catch(i=>{o(!1)})}},w=s=>{console.log("Failed:",s)},V=s=>{s?a.setFieldsValue({is_vip_free:1}):a.setFieldsValue({is_vip_free:0})},k=s=>{s?(a.setFieldsValue({is_free:1,is_vip_free:0}),m(1),x(0)):(a.setFieldsValue({is_free:0}),m(0))},P=()=>{z({page:1,size:10,sort:"id",order:"desc"}).then(s=>{l("/exam/practice/chapter/index?id="+s.data.data.data[0].id,{replace:!0})})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(A,{title:"新建练习"}),e.jsxs("div",{className:"float-left mt-30",children:[e.jsxs(t,{form:a,name:"practice-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:S,onFinishFailed:w,autoComplete:"off",children:[e.jsx(t.Item,{label:"分类",name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:e.jsxs(c,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:e.jsx(D,{style:{width:300},allowClear:!0,placeholder:"请选择分类",options:v})}),e.jsx(h,{type:"link",className:"c-primary",onClick:()=>{l("/exam/paper/category/index")},children:"分类管理"})]})}),e.jsx(t.Item,{label:"练习名",name:"name",rules:[{required:!0,message:"请输入练习名!"}],children:e.jsx(f,{style:{width:300},placeholder:"请输入练习名",allowClear:!0})}),e.jsx(t.Item,{label:"免费",name:"is_free",children:e.jsxs(c,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_free",valuePropName:"checked",children:e.jsx(b,{onChange:k})}),e.jsx("div",{className:"ml-10",children:e.jsx(u,{text:"开启免费的话所有用户都可直接参与练习。"})})]})}),N===0&&e.jsx(t.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(c,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(f,{type:"number",style:{width:300},placeholder:"单位：元",allowClear:!0,onChange:s=>{x(Number(s.target.value))}})}),e.jsx("div",{className:"ml-10",children:e.jsx(u,{text:"请输入整数"})})]})}),C>0&&e.jsx(t.Item,{label:"VIP免费",name:"is_vip_free",children:e.jsxs(c,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_vip_free",valuePropName:"checked",children:e.jsx(b,{onChange:V})}),e.jsx("div",{className:"ml-10",children:e.jsx(u,{text:"开启VIP会员免费的话，VIP用户将直接参与练习。"})})]})})]}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(h,{loading:p,type:"primary",onClick:()=>a.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(h,{type:"default",onClick:()=>l(-1),children:"取消"})})]})}),F?e.jsx(E,{title:"",onCancel:()=>{d(!1),l("/exam/practice/index",{replace:!0})},cancelText:"暂不组卷",okText:"立即组卷",open:!0,width:500,maskClosable:!1,onOk:()=>{d(!1),P()},centered:!0,children:e.jsx("div",{className:"text-center",style:{marginTop:30,marginBottom:30},children:e.jsx("span",{children:"新建练习成功，请在添加章节后再在试题库中选择试题组卷吧！"})})}):null]})]})};export{ee as default};
