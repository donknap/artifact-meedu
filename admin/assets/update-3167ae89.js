import{f as V,u as A,b as J,r as n,t as O,j as t,g as T,S as z,B as f,m as o}from"./index-e664e6dc.js";import{h as G,g as H,u as K}from"./question-50fe1583.js";import{B as M}from"./index-6997ccbf.js";import{P as W}from"./index-0c53b4ac.js";import{S as X,Q as Y,a as Z,b as $,c as ee,d as te,e as se}from"./cap-2a851c26.js";import{F as d}from"./index-279b9278.js";import{S}from"./index-640f3908.js";import"./LeftOutlined-feda539a.js";import"./CheckOutlined-f7d7f4b2.js";import"./Pagination-2f0e5cb7.js";import"./useForceUpdate-932ad153.js";import"./responsiveObserver-8e0341fc.js";import"./Dragger-53e4e55c.js";import"./DeleteOutlined-50171d48.js";import"./index-a50d5a64.js";import"./index-f944a168.js";import"./InboxOutlined-6e2e7513.js";import"./selected-33965347.js";import"./row-2dac17a4.js";import"./useIcons-0af35028.js";import"./index-aa5ba88b.js";import"./InfoCircleOutlined-e72834c1.js";import"./index-fa5b0e30.js";const Ne=()=>{const h=new URLSearchParams(V().search),q=A(),x=J(),[y]=d.useForm(),[j,N]=n.useState(!0),[m,u]=n.useState(!1),[i,v]=n.useState(0),[k,F]=n.useState([]),[c,Q]=n.useState([]),[_,P]=n.useState([]),[a,b]=n.useState({}),[C,w]=n.useState(null),[g,B]=n.useState(Number(h.get("id")));n.useEffect(()=>{document.title="编辑试题",q(O("编辑试题")),I()},[g]),n.useEffect(()=>{B(Number(h.get("id")))},[h.get("id")]);const I=async()=>{await E(),await L(),N(!1)},L=async()=>{if(g===0)return;var e=(await G(g)).data.data;y.setFieldsValue({category_id:e.category_id,level:e.level}),Q(e.type),v(1),b({category_id:e.category_id,level:e.level,type:e.type,content:e.content,score:e.score,answer:e.answer,option1:e.option1,option2:e.option2,option3:e.option3,option4:e.option4,option5:e.option5,option6:e.option6,option7:e.option7,option8:e.option8,option9:e.option9,option10:e.option10,remark:e.remark})},E=async()=>{const s=await H();let e=[];s.data.categories.length>0&&s.data.categories.map(l=>{e.push({label:l.name,value:l.id})}),F(e);let r=[];s.data.levels.length>0&&s.data.levels.map(l=>{r.push({label:l.name,value:l.id})}),P(r)},D=s=>{if(m)return;u(!0);let e={...a};e.category_id=s.category_id,e.level=s.level,b(e),v(i+1),u(!1)},R=s=>{console.log("Failed:",s)},U=()=>{if(!m){if((a.type===1||a.type===2)&&!a.option2){o.error("至少得有两个选项");return}if(a.type===6&&C){let s=!1;if(C.forEach((e,r)=>{let l=r+1;if(typeof e.score>"u"||e.score===null){o.error("请填写第"+l+"题子题分数"),s=!0;return}}),s)return}if(a.type===6&&!a.score){o.warning("请至少添加一个子题");return}if(a.type===3&&!a.score){o.warning("请填写每空分数");return}if(!a.score){o.warning("试题分数不能为空");return}if(!a.content){o.warning("试题内容不能为空");return}if((a.type===1||a.type===3||a.type===5)&&a.answer===null){o.warning("试题答案不能为空");return}if(a.type===2&&a.answer.length===0){o.warning("试题答案不能为空");return}u(!0),K(g,a).then(s=>{u(!1),o.success("保存成功！"),x(-1)}).catch(s=>{u(!1)})}},p=(s,e)=>{let r={...a};Object.assign(r,s),b(r),w(e||null)};return t.jsxs("div",{className:"meedu-main-body",children:[t.jsx(M,{title:"编辑试题"}),t.jsx("div",{className:"float-left step-box mb-30 mt-30",children:t.jsx(X,{current:i,items:[{title:"确认试题类型"},{title:"完善试题信息"}]})}),j&&t.jsx("div",{className:"float-left text-center",children:t.jsx(T,{})}),t.jsx("div",{className:"float-left",style:{display:!j&&i===0?"block":"none"},children:t.jsxs(d,{form:y,name:"question-update",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:D,onFinishFailed:R,autoComplete:"off",children:[t.jsx(d.Item,{label:"所属分类",name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:t.jsxs(z,{align:"baseline",style:{height:32},children:[t.jsx(d.Item,{name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:t.jsx(S,{style:{width:300},allowClear:!0,placeholder:"请选择分类",options:k})}),t.jsx(W,{type:"link",text:"分类管理",class:"c-primary",icon:null,p:"addons.Paper.question_category.list",onClick:()=>{x("/exam/question/category/index")},disabled:null})]})}),t.jsx(d.Item,{label:"试题难度",name:"level",rules:[{required:!0,message:"请选择试题难度!"}],children:t.jsx(S,{style:{width:300},allowClear:!0,placeholder:"请选择试题难度",options:_})})]})}),!j&&i===1&&t.jsxs("div",{className:"float-left pl-200",children:[c===1&&t.jsx(Y,{question:a,index:null,onChange:(s,e)=>p(s,e)}),c===2&&t.jsx(Z,{question:a,index:null,onChange:(s,e)=>p(s,e)}),c===3&&t.jsx($,{question:a,index:null,onChange:(s,e)=>p(s,e)}),c===4&&t.jsx(ee,{question:a,index:null,onChange:(s,e)=>p(s,e)}),c===5&&t.jsx(te,{question:a,index:null,onChange:(s,e)=>p(s,e)}),c===6&&t.jsx(se,{question:a,onChange:(s,e)=>p(s,e)})]}),t.jsx("div",{className:"bottom-menus",children:t.jsxs("div",{className:"bottom-menus-box",children:[t.jsxs("div",{children:[i===1&&t.jsx(f,{loading:m,type:"primary",onClick:()=>U(),children:"保存"}),i===0&&t.jsx(f,{loading:m,onClick:()=>y.submit(),children:"下一步"})]}),i===1&&t.jsx("div",{className:"ml-24",children:t.jsx(f,{onClick:()=>v(0),children:"上一步"})}),t.jsx("div",{className:"ml-24",children:t.jsx(f,{type:"default",onClick:()=>x(-1),children:"取消"})})]})})]})};export{Ne as default};
