import{u as y,b,r as n,t as v,j as e,B as l,m as w,i as B}from"./index-e664e6dc.js";import{i as N}from"./question-50fe1583.js";import{r as k,u as S}from"./xlsx-b055c42d.js";import{B as U}from"./index-6997ccbf.js";import{U as E}from"./index-a1a21b50.js";import"./LeftOutlined-feda539a.js";import"./Dragger-53e4e55c.js";import"./useForceUpdate-932ad153.js";import"./DeleteOutlined-50171d48.js";import"./CheckOutlined-f7d7f4b2.js";const Q=()=>{const c=y(),d=b(),[o,t]=n.useState(!1);n.useEffect(()=>{document.title="试题批量导入",c(v("试题批量导入"))},[]);const m={accept:".xls,.xlsx,application/vnd.ms-excel",beforeUpload:s=>{if(o)return;t(!0);const a=s,r=new FileReader;return r.onload=f=>{const h=f.target.result,i=k(h,{type:"binary"}),j=i.Sheets[i.SheetNames[0]],g=S.sheet_to_json(j,{header:1});p(g)},r.readAsBinaryString(a),!1}},p=(s,a)=>{s.splice(0,2),u(s)},u=s=>{N({line:3,data:s}).then(()=>{t(!1),w.success("导入成功！"),d(-1)}).catch(a=>{t(!1)})},x=()=>{let s=B()+"/template/试题批量导入模板.xlsx";window.open(s)};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(U,{title:"试题批量导入"}),e.jsx("div",{className:"user-import-box",children:e.jsxs("div",{className:"float-left d-flex mb-30x",children:[e.jsx("div",{children:e.jsx(E,{...m,showUploadList:!1,children:e.jsx(l,{loading:o,type:"primary",children:"导入表格"})})}),e.jsx("div",{className:"ml-30",children:e.jsx(l,{type:"link",className:"c-primary",onClick:()=>x(),children:"下载「试题批量导入模板」"})})]})})]})};export{Q as default};
