import{u as ce,b as de,r as a,a as D,t as ue,j as s,B as _,m as r,I as fe,d as pe,S as me,E as v,M as he}from"./index-e664e6dc.js";import{n as ge,a as xe,t as Se,l as ye,b as _e,c as ve,d as je}from"./InboxOutlined-6e2e7513.js";import{D as Ce}from"./index-dbcffe83.js";import{P as j}from"./index-0c53b4ac.js";import{U as Te}from"./index-80ee2170.js";import{T as we}from"./Table-ee9d831a.js";import"./Dragger-53e4e55c.js";import"./useForceUpdate-932ad153.js";import"./DeleteOutlined-50171d48.js";import"./CheckOutlined-f7d7f4b2.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./index-93f1e1b9.js";import"./addEventListener-263e58b1.js";import"./useIcons-0af35028.js";import"./Pagination-2f0e5cb7.js";import"./LeftOutlined-feda539a.js";import"./index-640f3908.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const{confirm:C}=he,We=()=>{const O=ce();de();const[f,l]=a.useState(!1),[o,p]=a.useState([]),[m,c]=a.useState(1),[h,T]=a.useState(10),[P,z]=a.useState(0),[d,g]=a.useState(!1),[w,b]=a.useState(""),[k,U]=a.useState([]),[R,V]=a.useState([]),[I,B]=a.useState([]),[F,x]=a.useState(!1),[H,N]=a.useState(!1),[be,L]=a.useState(!1),[ke,A]=a.useState(!1),[Re,E]=a.useState(!1),[M,q]=a.useState({}),[G,J]=a.useState({}),i=D(e=>e.systemConfig.value.video.default_service),S=D(e=>e.enabledAddonsConfig.value.enabledAddons);a.useEffect(()=>{document.title="视频库",O(ue("视频库"))},[]),a.useEffect(()=>{i===""?N(!0):i==="local"?L(!0):i==="tencent"?A(!0):i==="aliyun"?E(!0):(N(!1),L(!1),A(!1),E(!1))},[i]),a.useEffect(()=>{Q()},[m,h,d]),a.useEffect(()=>{if(o.length===0)return;let e=[],t=[];for(var n=0;n<o.length;n++)o[n].storage_driver==="aliyun"&&e.push(o[n].storage_file_id),o[n].storage_driver==="tencent"&&t.push(o[n].storage_file_id);e.length>0&&S.AliyunHls&&le(e),t.length>0&&S.TencentCloudHls&&ie(t)},[o,S]);const Q=()=>{f||(l(!0),ge({page:m,size:h,keywords:w}).then(e=>{p(e.data.data),z(e.data.total),l(!1)}).catch(e=>{l(!1)}))},W=()=>{c(1),T(10),p([]),b(""),g(!d)},X={current:m,pageSize:h,total:P,onChange:(e,t)=>Y(e,t),showSizeChanger:!0},Y=(e,t)=>{c(e),T(t)},Z=[{title:"视频名称",dataIndex:"title",render:e=>s.jsx("span",{children:e})},{title:"视频时长",width:150,render:(e,t)=>s.jsx(Ce,{duration:t.duration})},{title:"大小",width:150,render:(e,t)=>s.jsxs("div",{children:[t.size_mb,"MB"]})},{title:"加密",width:120,render:(e,t)=>s.jsx(s.Fragment,{children:t.storage_driver==="aliyun"&&$(t.storage_file_id)?s.jsx("span",{children:"已加密"}):t.storage_driver==="tencent"&&ee(t.storage_file_id)?s.jsx("span",{children:"已加密"}):s.jsx("span",{children:"-"})})},{title:"上传时间",width:200,render:(e,t)=>s.jsx("div",{children:pe(t.created_at)})},{title:"操作",width:120,render:(e,t)=>s.jsxs(me,{children:[t.storage_driver==="aliyun"&&s.jsx(j,{type:"link",text:"加密",class:"c-primary",icon:null,p:"ali-hls-transcode.submit",onClick:()=>{ne(t.storage_file_id)},disabled:null}),t.storage_driver==="tencent"&&s.jsx(j,{type:"link",text:"加密",class:"c-primary",icon:null,p:"addons.TencentCloudHls.transcode.submit",onClick:()=>{oe(t.storage_file_id)},disabled:null})]})}],$=e=>typeof M[e]<"u",ee=e=>typeof G[e]<"u",te={selectedRowKeys:k,onChange:(e,t)=>{let n=[],K=[];t.map(y=>{y.storage_driver==="local"?n.push(y.storage_file_id):K.push(y.id)}),U(e),B(K),V(n)}},se=()=>{if(k.length===0){r.error("请选择需要操作的数据");return}C({title:"操作确认",icon:s.jsx(v,{}),content:"确认删除选中的视频？",centered:!0,okText:"确认",cancelText:"取消",onOk(){ae()},onCancel(){console.log("Cancel")}})},ae=async()=>{if(!f){l(!0);try{if(R.length>0){let e=await ye({ids:R})}if(I.length>0){let e=await _e({ids:I})}r.success("成功"),u(),l(!1)}catch{l(!1)}}},ne=e=>{C({title:"操作确认",icon:s.jsx(v,{}),content:"确认加密选中的视频？",centered:!0,okText:"确认",cancelText:"取消",onOk(){let t=[];t.push(e),ve({file_ids:t}).then(()=>{r.success("成功"),u()})},onCancel(){console.log("Cancel")}})},oe=e=>{C({title:"操作确认",icon:s.jsx(v,{}),content:"确认加密选中的视频？",centered:!0,okText:"确认",cancelText:"取消",onOk(){let t=[];t.push(e),je({file_ids:t}).then(()=>{r.success("成功"),u()})},onCancel(){console.log("Cancel")}})},u=()=>{c(1),p([]),g(!d)},le=e=>{xe({file_ids:e}).then(t=>{t.data.records&&q(t.data.records)})},ie=e=>{Se({file_ids:e}).then(t=>{t.data&&J(t.data)})},re=()=>{x(!1),u()};return s.jsxs("div",{className:"meedu-main-body",children:[s.jsxs("div",{className:"float-left j-b-flex mb-30",children:[s.jsxs("div",{className:"d-flex",children:[s.jsx(_,{type:"primary",onClick:()=>{if(H){r.warning("请先在系统配置的视频存储中完成参数配置");return}x(!0)},children:"上传视频"}),s.jsx(j,{type:"danger",text:"批量删除",class:"ml-10",icon:null,p:"media.video.delete.multi",onClick:()=>se(),disabled:null})]}),s.jsxs("div",{className:"d-flex",children:[s.jsx(fe,{value:w,onChange:e=>{b(e.target.value)},allowClear:!0,style:{width:150},placeholder:"关键字"}),s.jsx(_,{className:"ml-10",onClick:W,children:"清空"}),s.jsx(_,{className:"ml-10",type:"primary",onClick:()=>{c(1),g(!d)},children:"筛选"})]})]}),s.jsx("div",{className:"float-left",children:s.jsx(we,{rowSelection:{type:"checkbox",...te},loading:f,columns:Z,dataSource:o,rowKey:e=>e.id,pagination:X})}),s.jsx(Te,{open:F,onCancel:()=>x(!1),onSuccess:()=>{re()}})]})};export{We as default};
