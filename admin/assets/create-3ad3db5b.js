import{f as C,u as w,b as D,r,t as I,j as e,S as h,I as p,B as x,h as N,m as S}from"./index-e664e6dc.js";import{C as Y,D as k}from"./live-f6850866.js";import{B}from"./index-6997ccbf.js";import{P as F}from"./index-0c53b4ac.js";import{H}from"./index-aa5ba88b.js";import{F as s}from"./index-279b9278.js";import{S as P}from"./index-640f3908.js";import{D as q}from"./index-011730db.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";const Q=()=>{const o=new URLSearchParams(C().search),[c]=s.useForm(),f=w(),n=D(),[j,b]=r.useState([]),[d,m]=r.useState(!1),[i,g]=r.useState(Number(o.get("course_id")));r.useEffect(()=>{document.title="新建直播排课",f(I("新建直播排课")),_()},[i]),r.useEffect(()=>{g(Number(o.get("course_id")))},[o.get("course_id")]);const _=()=>{Y().then(t=>{var a=t.data.chapters[i];if(a&&a.length>0){let u=[];for(var l=0;l<a.length;l++)u.push({label:a[l].name,value:a[l].id});b(u)}})},v=t=>{d||(m(!0),t.published_at=N(new Date(t.published_at)).format("YYYY-MM-DD HH:mm"),t.course_id=i,t.estimate_duration=t.estimate_duration*60,t.is_show=1,k(t).then(a=>{m(!1),S.success("保存成功！"),n(-1)}).catch(a=>{m(!1)}))},y=t=>{console.log("Failed:",t)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(B,{title:"新建直播排课"}),e.jsx("div",{className:"float-left mt-30",children:e.jsxs(s,{form:c,name:"live-video-create",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:v,onFinishFailed:y,autoComplete:"off",children:[e.jsx(s.Item,{label:"章节",name:"chapter_id",children:e.jsxs(h,{align:"baseline",style:{height:32},children:[e.jsx(s.Item,{name:"chapter_id",children:e.jsx(P,{style:{width:300},allowClear:!0,placeholder:"请选择章节",options:j})}),e.jsx("div",{children:e.jsx(F,{type:"link",text:"章节管理",class:"c-primary",icon:null,p:"addons.Zhibo.course_chapter.list",onClick:()=>{n("/live/course/chapter/index?id="+i)},disabled:null})})]})}),e.jsx(s.Item,{label:"直播标题",name:"title",rules:[{required:!0,message:"请输入直播标题!"}],children:e.jsx(p,{style:{width:300},placeholder:"请输入直播标题",allowClear:!0})}),e.jsx(s.Item,{label:"直播时间",name:"published_at",rules:[{required:!0,message:"请选择直播时间!"}],children:e.jsx(q,{format:"YYYY-MM-DD HH:mm",style:{width:300},showTime:!0,placeholder:"请选择到期时间"})}),e.jsx(s.Item,{label:"预估直播时长",name:"estimate_duration",rules:[{required:!0,message:"请输入预估直播时长!"}],children:e.jsxs(h,{align:"center",children:[e.jsx(s.Item,{style:{marginBottom:0},name:"estimate_duration",rules:[{required:!0,message:"请输入预估直播时长!"}],children:e.jsx(p,{type:"number",addonAfter:"分钟",style:{width:300},placeholder:"请输入预估直播时长",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(H,{text:"学员观看直播超过此时长即代表学完此课时"})})]})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(x,{loading:d,type:"primary",onClick:()=>c.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(x,{type:"default",onClick:()=>n(-1),children:"取消"})})]})})]})};export{Q as default};
