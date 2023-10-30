import{u as Q,b as X,f as Y,r as o,t as Z,j as e,g as $,S as I,I as j,B as w,m as ee}from"./index-e664e6dc.js";import{n as te,o as se}from"./path-d70a04d0.js";import{B as ae}from"./index-6997ccbf.js";import{P as C}from"./index-0c53b4ac.js";import{H as P}from"./index-aa5ba88b.js";import{S as ie}from"./multiIndex-776acf1e.js";import{T as g}from"./index-ccd1b351.js";import{p as re}from"./default-paper-c83eabd4.js";import{F as c}from"./index-279b9278.js";import{T as le}from"./Table-ee9d831a.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./course-a9e2e142.js";import"./live-f6850866.js";import"./role-ca0eb4dd.js";import"./book-7a089476.js";import"./paper-f0c62327.js";import"./practice-47d493a3.js";import"./mock-942c1c73.js";import"./index-54aec4fc.js";import"./PlusOutlined-4cee6348.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./addEventListener-263e58b1.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./Pagination-2f0e5cb7.js";import"./useForceUpdate-932ad153.js";import"./index-640f3908.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const Ee=()=>{const N=Q(),b=X(),[u]=c.useForm(),p=new URLSearchParams(Y().search),[y,k]=o.useState(!0),[h,x]=o.useState(!1),[s,d]=o.useState([]),[_,f]=o.useState(!1),[F,B]=o.useState([]),[L,D]=o.useState([]),[R,T]=o.useState([]),[V,q]=o.useState([]),[E,U]=o.useState([]),[m,A]=o.useState(Number(p.get("id"))),[v,H]=o.useState(Number(p.get("path_id")));o.useEffect(()=>{document.title="编辑学习步骤",N(Z("编辑学习步骤")),M()},[m,v]),o.useEffect(()=>{A(Number(p.get("id"))),H(Number(p.get("path_id"))),S()},[p.get("id"),p.get("path_id")]),o.useEffect(()=>{let i=[],t=[],a=[],l=[],n=[];if(s.length>0)for(let r=0;r<s.length;r++)s[r].type==="vod"?i.push(s[r].id):s[r].type==="live"?t.push(s[r].id):s[r].type==="paper"?a.push(s[r].id):s[r].type==="book"?l.push(s[r].id):s[r].type==="practice"&&n.push(s[r].id);B(i),D(t),q(a),T(l),U(n)},[s]);const M=async()=>{await S(),k(!1)},S=async()=>{if(m===0)return;var t=(await te(m)).data;u.setFieldsValue({name:t.step.name,sort:t.step.sort,desc:t.step.desc});let a=t.courses,l=[];if(a.length>0)for(let n=0;n<a.length;n++){let r=a[n].type;r==="course"&&(r="vod"),r==="paper_practice"&&(r="practice"),r==="paper_paper"&&(r="paper");let O={type:r,id:a[n].other_id,title:a[n].name,thumb:a[n].thumb,charge:a[n].charge};l.push(O)}d(l)},W=i=>{if(h)return;let t=[];if(s.length>0)for(let a=0;a<s.length;a++){let l=s[a].type;l==="vod"&&(l="course"),l==="practice"&&(l="paper_practice"),l==="paper"&&(l="paper_paper");let n={type:l,other_id:s[a].id,name:s[a].title,thumb:s[a].thumb,charge:s[a].charge};t.push(n)}x(!0),i.path_id=v,i.courses=t,se(m,i).then(a=>{x(!1),ee.success("成功！"),b(-1)}).catch(a=>{x(!1)})},K=i=>{console.log("Failed:",i)},z=[{title:"关联课程",width:"53%",render:(i,t)=>e.jsx(e.Fragment,{children:t.type==="book"?e.jsx(g,{value:t.thumb,width:90,height:120,title:t.title,border:4}):t.type==="paper"||t.type==="practice"?e.jsx(g,{value:re,width:120,height:90,title:t.title,border:4}):e.jsx(g,{value:t.thumb,width:120,height:90,title:t.title,border:4})})},{title:"课程类型",width:"20%",render:(i,t)=>e.jsxs(e.Fragment,{children:[t.type==="vod"&&e.jsx("span",{children:"录播课程"}),t.type==="live"&&e.jsx("span",{children:"直播课程"}),t.type==="book"&&e.jsx("span",{children:"电子书"}),t.type==="paper"&&e.jsx("span",{children:"考试"}),t.type==="practice"&&e.jsx("span",{children:"练习"})]})},{title:"单品价格",width:"21%",render:(i,t)=>e.jsxs(e.Fragment,{children:[t.charge===0&&e.jsx("span",{children:"免费"}),t.charge!==0&&e.jsxs("span",{children:["￥",t.charge]})]})},{title:"操作",width:"6%",render:(i,t)=>e.jsx(C,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.learnPaths.relation.update",onClick:()=>{G(t.id)},disabled:null})}],G=i=>{const t=[...s],a=t.findIndex(l=>l.id===i);a>=0&&t.splice(a,1),t.length>0?d(t):d([])},J=i=>{let t=[...s];t=t.concat(i),d(t),f(!1)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(ae,{title:"编辑学习步骤"}),e.jsx(ie,{type:!0,selectedVod:F,selectedLive:L,selectedBook:R,selectedPaper:V,selectedMockPaper:[],selectedPractice:E,selectedVip:[],open:_,enabledResource:"vod,live,book,paper,practice",onCancel:()=>f(!1),onSelected:i=>{J(i)}}),y&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx($,{})}),e.jsxs("div",{style:{display:y?"none":"block"},className:"float-left",children:[e.jsx("div",{className:"from-title mt-30",children:"学习步骤基本信息"}),e.jsxs(c,{form:u,name:"learnPath-step-update",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:W,onFinishFailed:K,autoComplete:"off",children:[e.jsx(c.Item,{label:"排序",name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsxs(I,{align:"baseline",style:{height:32},children:[e.jsx(c.Item,{name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsx(j,{type:"number",style:{width:300},placeholder:"填输入整数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(P,{text:"请输入整数。小数排在前，大数排在后。"})})]})}),e.jsx(c.Item,{label:"步骤名称",name:"name",rules:[{required:!0,message:"请输入步骤名称!"}],children:e.jsx(j,{style:{width:300},placeholder:"请输入步骤名称",allowClear:!0})}),e.jsx(c.Item,{label:"步骤简介",name:"desc",rules:[{required:!0,message:"请输入步骤简介!"}],children:e.jsxs(I,{align:"baseline",children:[e.jsx(c.Item,{name:"desc",rules:[{required:!0,message:"填输入步骤简介!"}],children:e.jsx(j.TextArea,{style:{width:800},placeholder:"请输入步骤简介",allowClear:!0,rows:4,maxLength:150})}),e.jsx("div",{className:"ml-10",children:e.jsx(P,{text:"请输入整数。小数排在前，大数排在后。"})})]})})]}),e.jsx("div",{className:"from-title mt-30",children:"学习步骤关联课程"}),e.jsx("div",{className:"float-left mb-30",children:e.jsx(C,{type:"primary",text:"添加课程",class:"",icon:null,p:"addons.learnPaths.relation.store",onClick:()=>f(!0),disabled:null})}),e.jsx("div",{className:"float-left",children:e.jsx(le,{loading:h,columns:z,dataSource:s,rowKey:i=>i.id,pagination:!1})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(w,{loading:h,type:"primary",onClick:()=>u.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(w,{type:"default",onClick:()=>b(-1),children:"取消"})})]})})]})]})};export{Ee as default};