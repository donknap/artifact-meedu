import{q as g,u,p as a,v as x,s as e,cp as p}from"./index-0a2a6377.js";function h(){return g.get("/api/v2/roles",{})}const j="_content_14guq_1",v="_box_14guq_6",b="_title_14guq_15",N="_name_14guq_57",q="_price_14guq_68",f="_small_14guq_78",w="_desc_14guq_81",R="_button_14guq_101",o={content:j,box:v,title:b,"role-item-box":"_role-item-box_14guq_36","role-item":"_role-item_14guq_36",name:N,price:q,small:f,desc:w,button:R},y=()=>{document.title="会员中心";const c=u(),[l,i]=a.useState([]),r=x(s=>s.loginUser.value.isLogin);a.useEffect(()=>{d()},[]);const d=()=>{h().then(s=>{i(s.data)})},_=()=>{let s=encodeURIComponent(window.location.pathname+window.location.search);c("/login?redirect="+s)},m=(s,n,t)=>{if(!r){_();return}c("/order?goods_id="+s+"&goods_type=role&goods_charge="+t+"&goods_label=VIP会员&goods_name="+n)};return e.jsx("div",{className:o.content,children:e.jsxs("div",{className:o.box,children:[e.jsxs("div",{className:o.title,children:[e.jsx("img",{src:p}),e.jsx("span",{children:"请选择会员套餐"})]}),e.jsx("div",{className:o["role-item-box"],children:l.map(s=>e.jsxs("div",{className:o["role-item"],children:[e.jsx("div",{className:o.name,children:s.name}),e.jsxs("div",{className:o.price,children:[e.jsx("span",{className:o.small,children:"￥"}),s.charge,e.jsxs("span",{className:o.small,children:["/",s.expire_days,"天"]})]}),e.jsx("div",{className:o.desc,children:s.desc_rows.map((n,t)=>e.jsx("p",{children:n},t))}),e.jsx("div",{className:o.button,onClick:()=>m(s.id,s.name,s.charge),children:"购买"})]},s.id))})]})})};export{y as default};
