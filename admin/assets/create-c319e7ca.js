import{u as P,b as T,r as o,t as H,j as e,S as m,I as g,B as b,M,m as w,h as E}from"./index-e664e6dc.js";import{c as R,s as A,l as L}from"./course-a9e2e142.js";import{B as Q}from"./index-6997ccbf.js";import{P as U}from"./index-0c53b4ac.js";import{H as u}from"./index-aa5ba88b.js";import{U as z}from"./index-8bc536fa.js";import{Q as O}from"./index-094b6315.js";import{F as t}from"./index-279b9278.js";import{S as $}from"./index-640f3908.js";import{R as G,C as y}from"./row-2dac17a4.js";import{S as C}from"./index-65a4c0be.js";import{D as J}from"./index-011730db.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./InboxOutlined-6e2e7513.js";import"./selected-33965347.js";import"./Dragger-53e4e55c.js";import"./useForceUpdate-932ad153.js";import"./DeleteOutlined-50171d48.js";import"./CheckOutlined-f7d7f4b2.js";import"./useIcons-0af35028.js";import"./Pagination-2f0e5cb7.js";import"./responsiveObserver-8e0341fc.js";import"./index-f944a168.js";const we=()=>{const[r]=t.useForm(),_=P(),d=T(),[j,x]=o.useState(!1),[I,v]=o.useState([]),[F,p]=o.useState(0),[f,N]=o.useState(""),[k,c]=o.useState(!1);o.useEffect(()=>{document.title="新建录播课程",_(H("新建录播课程")),r.setFieldsValue({is_show:1,is_free:0}),p(0),c(!1),S()},[]);const S=()=>{R().then(s=>{let a=s.data.categories;const h=[];for(let l=0;l<a.length;l++)if(a[l].children.length>0){h.push({label:a[l].name,value:a[l].id});let n=a[l].children;for(let i=0;i<n.length;i++)n[i].name="|----"+n[i].name,h.push({label:n[i].name,value:n[i].id})}else h.push({label:a[l].name,value:a[l].id});v(h)})},V=s=>{if(!j){if(s.is_free===1&&(s.charge=0),Number(s.charge)%1!==0){w.error("课程价格必须为整数型");return}if(s.is_free===0&&Number(s.charge)<=0){w.error("课程未设置免费时价格应该大于0");return}s.render_desc=s.original_desc,s.published_at=E(new Date(s.published_at)).format("YYYY-MM-DD HH:mm"),x(!0),A(s).then(a=>{x(!1),c(!0)}).catch(a=>{x(!1)})}},q=s=>{console.log("Failed:",s)},B=s=>{s?r.setFieldsValue({is_show:1}):r.setFieldsValue({is_show:0})},D=s=>{s?(r.setFieldsValue({is_free:1}),p(1)):(r.setFieldsValue({is_free:0}),p(0))},Y=()=>{L({page:1,size:1,sort:"id",order:"desc"}).then(s=>{d("/course/vod/video/index?course_id="+s.data.courses.data[0].id+"&title="+s.data.courses.data[0].title,{replace:!0})})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(Q,{title:"新建录播课程"}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(t,{form:r,name:"course-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:V,onFinishFailed:q,autoComplete:"off",children:[e.jsx(t.Item,{name:"category_id",label:"所属分类",rules:[{required:!0,message:"请选择所属分类!"}],children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"category_id",rules:[{required:!0,message:"请选择所属分类!"}],children:e.jsx($,{style:{width:300},allowClear:!0,placeholder:"请选择所属分类",options:I})}),e.jsx("div",{children:e.jsx(U,{type:"link",text:"分类管理",class:"c-primary",icon:null,p:"courseCategory",onClick:()=>{d("/course/vod/category/index")},disabled:null})})]})}),e.jsx(t.Item,{label:"课程名称",name:"title",rules:[{required:!0,message:"请输入课程名称!"}],children:e.jsx(g,{style:{width:300},placeholder:"请输入课程名称",allowClear:!0})}),e.jsx(t.Item,{label:"课程封面",name:"thumb",rules:[{required:!0,message:"请上传课程封面!"}],children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"thumb",rules:[{required:!0,message:"请上传课程封面!"}],children:e.jsx(z,{text:"选择图片",onSelected:s=>{r.setFieldsValue({thumb:s}),N(s)}})}),e.jsx("div",{className:"ml-10",children:e.jsx(u,{text:"长宽比4:3，建议尺寸：400x300像素"})})]})}),f&&e.jsxs(G,{style:{marginBottom:22},children:[e.jsx(y,{span:3}),e.jsx(y,{span:21,children:e.jsx("div",{className:"contain-thumb-box",style:{backgroundImage:`url(${f})`,width:200,height:150}})})]}),e.jsx(t.Item,{label:"免费",name:"is_free",valuePropName:"checked",children:e.jsx(C,{onChange:D})}),F===0&&e.jsx(t.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(g,{style:{width:300},placeholder:"单位：元",allowClear:!0,type:"number"})}),e.jsx("div",{className:"ml-10",children:e.jsx(u,{text:"最小单位“元”，不支持小数"})})]})}),e.jsx(t.Item,{label:"上架时间",required:!0,children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"published_at",rules:[{required:!0,message:"请选择上架时间!"}],children:e.jsx(J,{format:"YYYY-MM-DD HH:mm",style:{width:300},showTime:!0,placeholder:"请选择上架时间"})}),e.jsx("div",{className:"ml-10",children:e.jsx(u,{text:"上架时间越晚，排序越靠前"})})]})}),e.jsx(t.Item,{label:"显示",name:"is_show",children:e.jsxs(m,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_show",valuePropName:"checked",children:e.jsx(C,{onChange:B})}),e.jsx("div",{className:"ml-10",children:e.jsx(u,{text:"关闭后此课程在前台隐藏显示"})})]})}),e.jsx(t.Item,{label:"简短介绍",name:"short_description",rules:[{required:!0,message:"请输入简短介绍!"}],children:e.jsx(g.TextArea,{style:{width:800},placeholder:"请填写课程简单介绍",allowClear:!0,rows:4,maxLength:150,showCount:!0})}),e.jsx(t.Item,{label:"详情介绍",name:"original_desc",rules:[{required:!0,message:"请输入详情介绍!"}],style:{height:840},children:e.jsx("div",{className:"w-800px",children:e.jsx(O,{mode:"",height:800,defautValue:"",isFormula:!1,setContent:s=>{r.setFieldsValue({original_desc:s})}})})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(b,{loading:j,type:"primary",onClick:()=>r.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(b,{type:"default",onClick:()=>d(-1),children:"取消"})})]})}),k?e.jsx(M,{title:"",centered:!0,onCancel:()=>{c(!1),d("/course/vod/index",{replace:!0})},cancelText:"暂不排课",okText:"立即排课",open:!0,width:500,maskClosable:!1,onOk:()=>{c(!1),Y()},children:e.jsx("div",{className:"text-center",style:{marginTop:30,marginBottom:30},children:e.jsx("span",{children:"新建录播课成功，请在课程中添加课时排课吧！"})})}):null]})};export{we as default};
