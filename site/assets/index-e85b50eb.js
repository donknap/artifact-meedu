import{u as C,p as a,aT as w,aU as y,s,x as z,ao as T,z as u}from"./index-0a2a6377.js";import{E}from"./index-22e30517.js";import{N as M}from"./index-e0c6d110.js";import{P}from"./Pagination-79957343.js";import"./useForceUpdate-37b3d847.js";const k="_box_13xq0_1",D="_title_13xq0_27",L="_name_13xq0_33",R="_info_13xq0_40",A="_green_13xq0_47",F="_item_13xq0_50",t={box:k,"project-box":"_project-box_13xq0_8","paper-item-comp":"_paper-item-comp_13xq0_17",title:D,name:L,info:R,green:A,item:F},J=()=>{document.title="我的问答";const _=C(),[n,o]=a.useState(!1),[r,d]=a.useState([]),[x,g]=a.useState(!1),[l,m]=a.useState(1),[c,Q]=a.useState(10),[p,h]=a.useState(0),[i,f]=a.useState(1),N=[{name:"我的问题",id:1},{name:"我的回答",id:2}];a.useEffect(()=>{i==1?v():i===2&&b()},[l,c,x,i]);const v=()=>{n||(o(!0),w({page:l,page_size:c}).then(e=>{d(e.data.data.data),h(e.data.data.total),o(!1)}))},b=()=>{n||(o(!0),y({page:l,page_size:c}).then(e=>{d(e.data.data.data),h(e.data.data.total),o(!1)}))},j=e=>{_("/wenda/detail/"+e)},S=()=>{m(1),d([]),g(!x)},q=e=>{n||(f(e),S())};return s.jsx("div",{className:"container",children:s.jsxs("div",{className:t.box,children:[s.jsx(M,{cid:13,refresh:!0}),s.jsxs("div",{className:t["project-box"],children:[s.jsx("div",{className:"member-tabs",children:N.map(e=>s.jsxs("div",{className:i===e.id?"active item-tab":"item-tab",onClick:()=>q(e.id),children:[e.name,i===e.id&&s.jsx("div",{className:"actline"})]},e.id))}),n&&s.jsx(z,{children:s.jsx("div",{className:"float-left d-j-flex mt-50",children:s.jsx(T,{size:"large"})})}),!n&&r.length===0&&s.jsx(u,{span:24,children:s.jsx(E,{})}),!n&&r.length>0&&s.jsxs(s.Fragment,{children:[i===1&&r.map(e=>s.jsxs("div",{className:t["paper-item-comp"],onClick:()=>j(e.id),children:[s.jsx("div",{className:t.title,children:e.title}),s.jsxs("div",{className:t.info,children:[e.status===0&&s.jsx("span",{children:"未解决"}),e.status===1&&s.jsx("span",{className:t.green,children:"已解决"}),s.jsx("span",{className:t.item,children:"|"}),s.jsxs("span",{children:[e.answer_count," 回答"]})]})]},e.id)),i===2&&r.map(e=>s.jsxs("div",{className:t["paper-item-comp"],onClick:()=>j(e.question_id),children:[s.jsx("div",{className:t.title,dangerouslySetInnerHTML:{__html:e.render_content.length>51?e.render_content.slice(0,51)+"...":e.render_content}}),s.jsxs("div",{className:t.info,children:[e.status===0&&s.jsx("span",{children:"未解决"}),e.is_correct===1&&s.jsxs(s.Fragment,{children:[s.jsx("span",{className:t.green,children:"被采纳"}),s.jsx("span",{className:t.item,children:"|"})]}),s.jsxs("span",{children:["积分+",e.vote_count]})]})]},e.id))]}),!n&&r.length>0&&c<p&&s.jsx(u,{span:24,style:{display:"flex",justifyContent:"center",marginTop:50,marginBottom:30},children:s.jsx(P,{onChange:e=>{m(e),window.scrollTo(0,0)},pageSize:c,defaultCurrent:l,total:p})})]})]})})};export{J as default};
