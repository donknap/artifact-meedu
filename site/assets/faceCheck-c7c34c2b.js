import{u as m,ad as b,p as a,ae as k,t as i,af as y,cK as z,aw as I,aB as j,s,ai as F}from"./index-0a2a6377.js";const C="_box_10o5o_1",Q="_tip_10o5o_10",r={box:C,tip:Q};var t=null;const N=()=>{const l=m(),d=b(),[o,c]=a.useState(!1),[u,f]=a.useState("loading"),[S,g]=a.useState(""),[V,p]=a.useState("");a.useEffect(()=>(_(),document.title="实名认证",()=>{t&&clearInterval(t)}),[]);const _=()=>{o||(c(!0),k({s_url:"PC"}).then(e=>{c(!1),f(e.data.url),g(e.data.rule_id),p(e.data.biz_token),t=setInterval(()=>h(e.data.rule_id,e.data.biz_token),2500)}).catch(e=>{c(!1),t&&clearInterval(t),i.error(e.message||"无法发起实名认证")}))},h=(e,n)=>{y({rule_id:e,biz_token:n}).then(x=>{x.data.status===9&&(i.success("实名认证成功"),t&&clearInterval(t),z(),v())})},v=()=>{I().then(e=>{let n=e.data;d(j(n)),l("/",{replace:!0})})};return s.jsxs("div",{children:[s.jsx("div",{className:r.box,children:s.jsx(F,{size:300,value:u,status:o?"loading":"active"})}),s.jsx("p",{className:r.tip,children:"请使用微信扫码完成实名认证"})]})};export{N as default};
