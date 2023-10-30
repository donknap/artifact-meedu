import{u as L,b as O,r as a,t as K,j as e,I as M,B as b,d as R,S as _,D as A,e as $,E as q,m as G,M as H}from"./index-e664e6dc.js";import{l as J,d as Q}from"./book-7a089476.js";import{P as o}from"./index-0c53b4ac.js";import{O as U}from"./index-33d5723a.js";import{T as V}from"./index-ccd1b351.js";import{S as W}from"./index-640f3908.js";import{T as X}from"./Table-ee9d831a.js";import"./icon-option-c9fff0bb.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";import"./addEventListener-263e58b1.js";import"./Pagination-2f0e5cb7.js";import"./LeftOutlined-feda539a.js";import"./useForceUpdate-932ad153.js";import"./responsiveObserver-8e0341fc.js";import"./index-fa5b0e30.js";import"./iconUtil-a09ccdfb.js";const{confirm:Y}=H,be=()=>{const C=L(),l=O(),[m,n]=a.useState(!1),[w,u]=a.useState([]),[p,d]=a.useState(1),[h,k]=a.useState(10),[S,v]=a.useState(0),[c,x]=a.useState(!1),[g,j]=a.useState(""),[y,f]=a.useState([]),[N,D]=a.useState([]);a.useEffect(()=>{document.title="电子书",C(K("电子书"))},[]),a.useEffect(()=>{F()},[p,h,c]);const F=()=>{m||(n(!0),J({page:p,size:h,sort:"id",order:"desc",key:g,cid:y}).then(s=>{u(s.data.data.data),v(s.data.data.total);let t=s.data.categories;const i=[];for(let r=0;r<t.length;r++)i.push({label:t[r].name,value:t[r].id});D(i),n(!1)}).catch(s=>{n(!1)}))},T=()=>{d(1),k(10),u([]),j(""),f([]),x(!c)},B={current:p,pageSize:h,total:S,onChange:(s,t)=>E(s,t),showSizeChanger:!0},E=(s,t)=>{d(s),k(t)},P=[{title:"ID",width:"6%",render:(s,t)=>e.jsx("span",{children:t.id})},{title:"电子书",width:"27%",render:(s,t)=>e.jsx(V,{width:90,value:t.thumb,height:120,title:t.name,border:4})},{title:"分类",width:"10%",render:(s,t)=>{var i;return e.jsxs(e.Fragment,{children:[t.category&&e.jsx("span",{children:((i=t==null?void 0:t.category)==null?void 0:i.name)||"-"}),!t.category&&e.jsx("span",{className:"c-red",children:"数据不完整"})]})}},{title:"价格",width:"7%",render:(s,t)=>e.jsxs("span",{children:[t.charge,"元"]})},{title:"销量",width:"7%",render:(s,t)=>e.jsx("span",{children:t.user_count})},{title:"阅读",width:"7%",render:(s,t)=>e.jsxs("span",{children:[t.view_times,"次"]})},{title:"上架时间",width:"14%",render:(s,t)=>e.jsx("span",{children:R(t.published_at)})},{title:"是否显示",width:"8%",render:(s,t)=>e.jsxs(e.Fragment,{children:[t.is_show===1&&e.jsx("span",{className:"c-green",children:"· 显示"}),t.is_show!==1&&e.jsx("span",{className:"c-red",children:"· 隐藏"})]})},{title:"操作",width:"14%",fixed:"right",render:(s,t)=>{const i=[{key:"1",label:e.jsx(o,{type:"link",text:"编辑",class:"c-primary",icon:null,p:"addons.meedu_books.book.update",onClick:()=>{l("/meedubook/book/update?id="+t.id)},disabled:null})},{key:"2",label:e.jsx(o,{type:"link",text:"删除",class:"c-red",icon:null,p:"addons.meedu_books.book.delete",onClick:()=>{I(t.id)},disabled:null})}];return e.jsxs(_,{children:[e.jsx(o,{type:"link",text:"文章",class:"c-primary",icon:null,p:"addons.meedu_books.book_article.list",onClick:()=>{l("/meedubook/article/index?bid="+t.id+"&title="+t.name)},disabled:null}),e.jsx(o,{type:"link",text:"学员",class:"c-primary",icon:null,p:"addons.meedu_books.book.users",onClick:()=>{l("/meedubook/book/users?bid="+t.id)},disabled:null}),e.jsx(A,{menu:{items:i},children:e.jsx(b,{type:"link",className:"c-primary",onClick:r=>r.preventDefault(),children:e.jsxs(_,{size:"small",align:"center",children:["更多",e.jsx($,{})]})})})]})}}],z=()=>{d(1),u([]),x(!c)},I=s=>{s!==0&&Y({title:"操作确认",icon:e.jsx(q,{}),content:"确认删除此电子书？",centered:!0,okText:"确认",cancelText:"取消",onOk(){m||(n(!0),Q(s).then(()=>{n(!1),G.success("删除成功"),z()}).catch(t=>{n(!1)}))},onCancel(){console.log("Cancel")}})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsxs("div",{className:"float-left j-b-flex mb-30",children:[e.jsxs("div",{className:"d-flex",children:[e.jsx(o,{type:"primary",text:"新建电子书",class:"",icon:null,p:"addons.meedu_books.book.store",onClick:()=>l("/meedubook/book/create"),disabled:null}),e.jsx(o,{type:"primary",text:"电子书分类",class:"ml-10",icon:null,p:"addons.meedu_books.book_category.list",onClick:()=>l("/meedubook/category/index"),disabled:null}),e.jsx(o,{type:"primary",text:"电子书评论",class:"ml-10",icon:null,p:"addons.meedu_books.book.comments.list",onClick:()=>l("/meedubook/book/comment"),disabled:null}),e.jsx(o,{type:"primary",text:"文章评论",class:"ml-10",icon:null,p:"addons.meedu_books.book_article.comments.list",onClick:()=>l("/meedubook/article/comment"),disabled:null}),e.jsx(U,{text:"电子书推荐",value:"/system/bookConfig?referer=%2Fmeedubook%2Fbook%2Findex"})]}),e.jsxs("div",{className:"d-flex",children:[e.jsx(M,{value:g,onChange:s=>{j(s.target.value)},allowClear:!0,style:{width:150},placeholder:"电子书关键字"}),e.jsx(W,{style:{width:150,marginLeft:10},value:y,onChange:s=>{f(s)},allowClear:!0,placeholder:"分类",options:N}),e.jsx(b,{className:"ml-10",onClick:T,children:"清空"}),e.jsx(b,{className:"ml-10",type:"primary",onClick:()=>{d(1),x(!c)},children:"筛选"})]})]}),e.jsx("div",{className:"float-left",children:e.jsx(X,{loading:m,columns:P,dataSource:w,rowKey:s=>s.id,pagination:B})})]})};export{be as default};
