import{f as P,u as q,b as L,r as a,t as R,j as e,g as G,S as U,I as V,B as h,m as d,h as g}from"./index-e664e6dc.js";import{a as A,u as O}from"./miaosha-c7f5d1f2.js";import{B as z}from"./index-6997ccbf.js";import{H as J}from"./index-aa5ba88b.js";import{d as p,D as K}from"./index-011730db.js";import{F as r}from"./index-279b9278.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";const{RangePicker:Q}=K,oe=()=>{const i=new URLSearchParams(P().search),[n]=r.useForm(),f=q(),c=L(),[l,x]=a.useState(!0),[u,m]=a.useState(!1),[j,_]=a.useState(""),[Y,b]=a.useState(""),[D,y]=a.useState(""),[S,H]=a.useState(""),[M,N]=a.useState(0),[w,F]=a.useState(0),[o,I]=a.useState(Number(i.get("id")));a.useEffect(()=>{document.title="编辑秒杀活动",f(R("编辑秒杀活动")),k()},[o]),a.useEffect(()=>{I(Number(i.get("id")))},[i.get("id")]);const k=async()=>{await C(),x(!1)},C=async()=>{if(o===0)return;var s=(await A(o)).data;let E=[p(s.started_at,"YYYY-MM-DD HH:mm"),p(s.end_at,"YYYY-MM-DD HH:mm")];n.setFieldsValue({charge:s.charge,started_at:E}),b(s.goods_thumb),H(s.original_charge),_(s.goods_title),N(s.goods_id),y(s.goods_type),F(s.num)},B=t=>{if(!u){if(t.charge<0){d.error("请输入正确的秒杀价");return}if(t.num<0){d.error("请输入正确的库存");return}m(!0),t.goods_id=M,t.goods_type=D,t.num=w,t.original_charge=S,t.goods_title=j,t.goods_thumb=Y,t.end_at=g(new Date(t.started_at[1])).format("YYYY-MM-DD HH:mm"),t.started_at=g(new Date(t.started_at[0])).format("YYYY-MM-DD HH:mm"),O(o,t).then(s=>{m(!1),d.success("保存成功！"),c(-1)}).catch(s=>{m(!1)})}},T=t=>{console.log("Failed:",t)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(z,{title:"编辑秒杀活动"}),l&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx(G,{})}),e.jsx("div",{style:{display:l?"none":"block"},className:"float-left mt-30",children:e.jsxs(r,{form:n,name:"miaosha-update",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:B,onFinishFailed:T,autoComplete:"off",children:[e.jsx(r.Item,{label:"秒杀价",name:"charge",rules:[{required:!0,message:"请输入秒杀价!"}],children:e.jsxs(U,{align:"baseline",style:{height:32},children:[e.jsx(r.Item,{name:"charge",rules:[{required:!0,message:"请输入秒杀价!"}],children:e.jsx(V,{style:{width:300},placeholder:"请输入秒杀价",allowClear:!0,type:"number"})}),e.jsx("div",{className:"ml-10",children:e.jsx(J,{text:"最小单位：元。不支持小数。"})})]})}),e.jsx(r.Item,{label:"活动时间",name:"started_at",rules:[{required:!0,message:"请输入活动时间!"}],children:e.jsx(Q,{format:"YYYY-MM-DD HH:mm",showTime:!0,placeholder:["开始时间","结束时间"]})})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(h,{loading:u,type:"primary",onClick:()=>n.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(h,{type:"default",onClick:()=>c(-1),children:"取消"})})]})})]})};export{oe as default};
