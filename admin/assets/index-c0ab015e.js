import{r as j,j as a,M as R,bY as k,B as u,m as v}from"./index-e664e6dc.js";import{R as T}from"./course-a9e2e142.js";import{B as _}from"./live-f6850866.js";import{u as N}from"./certificate-e647f7f6.js";import{u as g,a as A,r as F}from"./xlsx-b055c42d.js";import{U as X}from"./index-a1a21b50.js";const z=({id:h,type:c,open:b,name:p,onCancel:x,onSuccess:m})=>{const[w,l]=j.useState(!1);j.useEffect(()=>{},[b]);const E=()=>{var e=[["手机号"]];c==="cert"&&(e=[["证书编号","手机号"]]);var s=g.aoa_to_sheet(e),t=B(s,p||"学员批量导入模板");S(t,(p||"学员批量导入模板")+".xlsx")},B=(e,s)=>{s=s||"sheet1";var t={SheetNames:[s],Sheets:{}};t.Sheets[s]=e;var o={bookType:"xlsx",bookSST:!1,type:"binary"},r=A(t,o),n=new Blob([i(r)],{type:"application/octet-stream"});function i(f){for(var y=new ArrayBuffer(f.length),M=new Uint8Array(y),d=0;d!=f.length;++d)M[d]=f.charCodeAt(d)&255;return y}return n},S=(e,s)=>{typeof e=="object"&&e instanceof Blob&&(e=URL.createObjectURL(e));var t=document.createElement("a");t.href=e,t.download=s||"";var o;window.MouseEvent?o=new MouseEvent("click"):(o=document.createEvent("MouseEvents"),o.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),t.dispatchEvent(o)},U={accept:".xls,.xlsx,application/vnd.ms-excel",beforeUpload:e=>{if(w)return;l(!0);const s=e,t=new FileReader;return t.onload=o=>{const r=o.target.result,n=F(r,{type:"binary"}),i=n.Sheets[n.SheetNames[0]],f=g.sheet_to_json(i,{header:1});D(f)},t.readAsBinaryString(s),!1}},D=(e,s)=>{e.splice(0,1);let t=[];for(let o=0;o<e.length;o++){let r=e[o];if(typeof r===void 0)break;if(r.length===0)continue;let n=[];c==="cert"?(r.map(i=>{n.push(i)}),t.push(n)):t.push(r[0])}c==="vod"?L(t):c==="live"?C(t):c==="cert"&&I(t)},L=e=>{T(h,{mobiles:e}).then(()=>{l(!1),v.success("导入成功！"),m()}).catch(s=>{l(!1)})},C=e=>{_(h,{mobiles:e}).then(()=>{l(!1),v.success("导入成功！"),m()}).catch(s=>{l(!1)})},I=e=>{N(h,{data:e}).then(()=>{l(!1),v.success("导入成功！"),m()}).catch(s=>{l(!1)})};return a.jsx(a.Fragment,{children:b?a.jsxs(R,{title:"",centered:!0,forceRender:!0,open:!0,width:900,onCancel:()=>{x()},maskClosable:!1,closable:!1,footer:null,children:[a.jsx("div",{className:k.header,children:"学员批量导入"}),a.jsx("div",{className:k.body,children:a.jsxs("div",{className:"d-flex float-left",children:[a.jsx("div",{children:a.jsx(X,{...U,showUploadList:!1,children:a.jsx(u,{loading:w,type:"primary",children:"选择Excel表格文件"})})}),a.jsx("div",{className:"ml-30",children:a.jsxs(u,{type:"link",className:"c-primary",onClick:()=>E(),children:["点击链接下载「",p||"学员批量导入模板","」"]})})]})}),a.jsx("div",{slot:"footer",style:{display:"flex",flexDirection:"row-reverse"},children:a.jsx(u,{onClick:()=>x(),children:"取消"})})]}):null})};export{z as U};
