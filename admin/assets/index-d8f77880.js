import{r as a,j as e,M as k,I as y,S as I,m as v,g as B,u as W,t as A,E as O}from"./index-e664e6dc.js";import{e as H,f as M,g as R,h as K,i as G}from"./path-d70a04d0.js";import{B as J}from"./index-6997ccbf.js";import{P}from"./index-0c53b4ac.js";import{H as E}from"./index-aa5ba88b.js";import{F as i}from"./index-279b9278.js";import{S as L}from"./index-640f3908.js";import{T as Q}from"./Table-ee9d831a.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./addEventListener-263e58b1.js";import"./Pagination-2f0e5cb7.js";import"./useForceUpdate-932ad153.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const X=t=>{const[n]=i.useForm(),[o,c]=a.useState(!1),[j,h]=a.useState([]);a.useEffect(()=>{t.open&&n.setFieldsValue({name:"",sort:"",parent_id:0})},[t.open]),a.useEffect(()=>{let d=[{value:0,label:"无-作为一级分类"}];for(let u=0;u<t.categories.length;u++)d.push({label:t.categories[u].name,value:t.categories[u].id});h(d)},[t.categories]);const p=d=>{o||(c(!0),H(d).then(u=>{c(!1),v.success("成功！"),t.onSuccess()}).catch(u=>{c(!1)}))},x=d=>{console.log("Failed:",d)};return e.jsx(e.Fragment,{children:t.open?e.jsx(k,{title:"添加分类",onCancel:()=>{t.onCancel()},open:!0,width:800,maskClosable:!1,onOk:()=>{n.submit()},centered:!0,children:e.jsx("div",{className:"float-left mt-30",children:e.jsxs(i,{form:n,name:"learnPath-create-dailog",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:p,onFinishFailed:x,autoComplete:"off",children:[e.jsx(i.Item,{label:"父级分类",name:"parent_id",rules:[{required:!0,message:"请选择父级分类!"}],children:e.jsx(L,{style:{width:300},placeholder:"请选择父级分类",allowClear:!0,options:j})}),e.jsx(i.Item,{label:"分类名称",name:"name",rules:[{required:!0,message:"请输入分类名称!"}],children:e.jsx(y,{style:{width:300},placeholder:"请输入分类名称",allowClear:!0})}),e.jsx(i.Item,{label:"排序",name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsxs(I,{align:"baseline",style:{height:32},children:[e.jsx(i.Item,{name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsx(y,{type:"number",style:{width:300},placeholder:"填输入排序",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(E,{text:"填写整数，数字越小排序越靠前"})})]})})]})})}):null})},Y=t=>{const[n]=i.useForm(),[o,c]=a.useState(!0),[j,h]=a.useState(!1),[p,x]=a.useState([]);a.useEffect(()=>{t.open&&(c(!0),n.setFieldsValue({name:"",sort:"",parent_id:0})),t.id>0&&d()},[t.open,t.id]),a.useEffect(()=>{let r=[{value:0,label:"无-作为一级分类"}];for(let f=0;f<t.categories.length;f++)r.push({label:t.categories[f].name,value:t.categories[f].id,disabled:t.categories[f].id===t.id});x(r)},[t.categories,t.id]);const d=async()=>{await u(),c(!1)},u=async()=>{const r=await M(t.id);n.setFieldsValue({name:r.data.name,sort:r.data.sort,parent_id:r.data.parent_id})},b=r=>{j||(h(!0),R(t.id,r).then(f=>{h(!1),v.success("成功！"),t.onSuccess()}).catch(f=>{h(!1)}))},C=r=>{console.log("Failed:",r)};return e.jsx(e.Fragment,{children:t.open?e.jsxs(k,{title:"编辑分类",onCancel:()=>{t.onCancel()},open:!0,width:800,maskClosable:!1,onOk:()=>{n.submit()},centered:!0,children:[o&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx(B,{})}),e.jsx("div",{style:{display:o?"none":"block"},className:"float-left mt-30",children:e.jsxs(i,{form:n,name:"learnPath-update-dailog",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:b,onFinishFailed:C,autoComplete:"off",children:[e.jsx(i.Item,{label:"父级分类",name:"parent_id",rules:[{required:!0,message:"请选择父级分类!"}],children:e.jsx(L,{style:{width:300},placeholder:"请选择父级分类",allowClear:!0,options:p})}),e.jsx(i.Item,{label:"分类名称",name:"name",rules:[{required:!0,message:"请输入分类名称!"}],children:e.jsx(y,{style:{width:300},placeholder:"请输入分类名称",allowClear:!0})}),e.jsx(i.Item,{label:"排序",name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsxs(I,{align:"baseline",style:{height:32},children:[e.jsx(i.Item,{name:"sort",rules:[{required:!0,message:"填输入排序!"}],children:e.jsx(y,{type:"number",style:{width:300},placeholder:"填输入排序",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(E,{text:"填写整数，数字越小排序越靠前"})})]})})]})})]}):null})},{confirm:Z}=k,pe=()=>{const t=W(),[n,o]=a.useState(!1),[c,j]=a.useState([]),[h,p]=a.useState(1),[x,d]=a.useState(10),[u,b]=a.useState(0),[C,r]=a.useState(!1),[f,S]=a.useState(!1),[D,w]=a.useState(!1),[_,q]=a.useState(0);a.useEffect(()=>{document.title="学习路径分类",t(A("学习路径分类"))},[]),a.useEffect(()=>{N()},[h,x,C]);const N=()=>{n||(o(!0),K({page:h,size:x}).then(s=>{const l=[];let g=s.data.data;for(let m=0;m<g.length;m++)g[m].children.length>0?l.push({name:g[m].name,id:g[m].id,sort:g[m].sort,children:g[m].children}):l.push({name:g[m].name,id:g[m].id,sort:g[m].sort});j(l),b(s.data.total),o(!1)}).catch(s=>{o(!1)}))},T={current:h,pageSize:x,total:u,onChange:(s,l)=>U(s,l),showSizeChanger:!0},U=(s,l)=>{p(s),d(l)},V=[{title:"排序",width:150,render:(s,l)=>e.jsx("span",{children:l.sort})},{title:"分类名",render:(s,l)=>e.jsxs("span",{children:[l.name," "]})},{title:"操作",width:160,fixed:"right",render:(s,l)=>e.jsxs(I,{children:[e.jsx(P,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.learnPaths.category.update",onClick:()=>{q(l.id),w(!0)},disabled:null}),e.jsx(P,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.learnPaths.category.delete",onClick:()=>{z(l.id)},disabled:null})]})}],F=()=>{p(1),j([]),r(!C)},z=s=>{s!==0&&Z({title:"操作确认",icon:e.jsx(O,{}),content:"确认删除此分类？",centered:!0,okText:"确认",cancelText:"取消",onOk(){n||(o(!0),G(s).then(()=>{o(!1),v.success("删除成功"),F()}).catch(l=>{o(!1)}))},onCancel(){console.log("Cancel")}})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(J,{title:"学习路径分类"}),e.jsx(X,{categories:c,open:f,onCancel:()=>S(!1),onSuccess:()=>{F(),S(!1)}}),e.jsx(Y,{id:_,categories:c,open:D,onCancel:()=>w(!1),onSuccess:()=>{F(),w(!1)}}),e.jsx("div",{className:"float-left  mt-30 mb-30",children:e.jsx(P,{type:"primary",text:"添加分类",class:"",icon:null,p:"addons.learnPaths.category.store",onClick:()=>S(!0),disabled:null})}),e.jsx("div",{className:"float-left",children:e.jsx(Q,{loading:n,columns:V,dataSource:c,rowKey:s=>s.id,pagination:T})})]})};export{pe as default};