import{s,u as ee,y as te,p as c,t as h}from"./index-0a2a6377.js";import{f as se,a as oe}from"./practice-a58c635a.js";import{s as ne,o as ae,n as ce,q as re}from"./collection-c965a09a.js";import{b as ie}from"./icon-back-h-0fef6b27.js";import{c as le,n as ue}from"./icon-collect-n-7dad1c8c.js";import{C as de,S as me,I as he,Q as pe,J as fe,a as _e}from"./index-3f0f26f6.js";import{F as xe}from"./index-061cc82b.js";import"./index-43c62c0d.js";import"./index-c5f5279e.js";import"./useForceUpdate-37b3d847.js";const be="_navheader_353oh_1",ge="_top_353oh_9",i={navheader:be,top:ge,"left-top":"_left-top_353oh_22","icon-back":"_icon-back_353oh_29","right-top":"_right-top_353oh_34","prev-button":"_prev-button_353oh_40","next-button":"_next-button_353oh_54","filter-two-class":"_filter-two-class_353oh_68","project-box":"_project-box_353oh_80","left-box":"_left-box_353oh_89","right-box":"_right-box_353oh_101","wrongbook-join-box":"_wrongbook-join-box_353oh_109","delete-icon":"_delete-icon_353oh_116","buttons-box":"_buttons-box_353oh_138","see-answer":"_see-answer_353oh_148"},je="_box_1r42j_1",ve="_num_1r42j_4",m={box:je,"number-box":"_number-box_1r42j_4","active-num":"_active-num_1r42j_13","completed-num":"_completed-num_1r42j_28",num:ve,"number-box2":"_number-box2_1r42j_57"},Ce=({activeNum:C,qidArr:p,hasPracticeIds:f,change:u})=>{const t=d=>{u(d)};return s.jsxs("div",{className:m.box,children:[p.length<1e3&&s.jsx("div",{className:m["number-box"],children:p.map((d,r)=>s.jsx("div",{className:r+1===C?m["active-num"]:f[d]?m["completed-num"]:m.num,onClick:()=>t(r+1),children:r+1},r))}),p.length>=1e3&&s.jsx("div",{className:m["number-box2"],children:p.map((d,r)=>s.jsx("div",{className:r+1===C?m["active-num"]:f[d]?m["completed-num"]:m.num,onClick:()=>t(r+1),children:r+1},r))})]})},Oe=()=>{const C=ee(),p=new URLSearchParams(te().search),[f,u]=c.useState(!1),[t,d]=c.useState([]),[r,T]=c.useState([]),[D,L]=c.useState([]),[a,b]=c.useState(1),[A,k]=c.useState([]),[J,w]=c.useState("对答案"),[_,N]=c.useState(!1),[B,E]=c.useState(!0),[S,M]=c.useState(0),[I,R]=c.useState(0),[F,U]=c.useState({}),[y,q]=c.useState(!1),[Q,we]=c.useState(Number(p.get("type"))),[$,ye]=c.useState(Number(p.get("mode")));c.useEffect(()=>{K(),z()},[Q,$,S,I]),c.useEffect(()=>{V(),N(!1),w("对答案"),G()},[a]);const K=()=>{ne({question_type:Q}).then(e=>{let o=e.data.categories_count,n=e.data.categories,j=0;for(let l=0;l<n.length;l++)if(n[l].name=n[l].name+"("+o[n[l].id]+")",j=j+o[n[l].id],n[l].children.length>0){let x=n[l].children;for(let v=0;v<x.length;v++)x[v].name=x[v].name+"("+o[x[v].id]+")";n[l].children.unshift({id:0,name:"全部("+o[n[l].id]+")"})}n.unshift({id:0,name:"全部("+j+")"}),L(n)})},z=()=>{f||(u(!0),ae({type:Q,cid1:S,cid2:I}).then(e=>{d(e.data.first_question),T(e.data.questions_ids),O(e.data.first_question),u(!1)}).catch(e=>{u(!1)}))},O=e=>{se({question_id:e.id}).then(o=>{o.data.status===1?q(!0):q(!1)})},G=()=>{if(f)return;u(!0),d([]),k([]);let e=r[a-1];e&&ce(e,{from:"collection"}).then(o=>{let n=o.data.question;n.answer_content="",d(n),O(n),u(!1)}).catch(o=>{u(!1)})},P=()=>{let e=r[a-1],o=F;o[e]=!0,U(o);let n=_;w(n===!0?"对答案":"收起答案"),N(!n),n||re(e,{answer:A,from:"collection"}).then(j=>{})},H=()=>{C(-1)},V=()=>{document.onkeydown=e=>{let o=e||event||window.event;if(u(!1),o&&o.keyCode==37)if(a===1)h.error("没有上一题了");else{let n=a;n--,b(n)}else if(o&&o.keyCode==39)if(a===r.length)h.error("没有下一题了");else{let n=a;n++,b(n)}}},W=()=>{if(B&&h.info("可通过键盘← →方向键快速切题哦！"),!f){if(a===1)h.error("没有上一题了");else{let e=a;e--,b(e)}E(!1)}},X=()=>{if(B&&h.info("可通过键盘← →方向键快速切题哦！"),!f){if(a===r.length)h.error("没有下一题了");else{let e=a;e++,b(e)}E(!1)}},g=(e,o,n)=>{if(t&&t.type===6){let j=e.split("-"),l=parseInt(j[2]),x=[...A];x[l]=o,k(x)}else k(o);t&&(t.type===1||t.type===5)&&P()},Y=e=>{b(e)},Z=()=>{oe({question_id:t.id}).then(()=>{y?h.success("已取消收藏"):h.success("已收藏试题"),q(!y)})};return s.jsxs("div",{className:"full-container",children:[s.jsx("div",{className:i.navheader,children:s.jsxs("div",{className:i.top,children:[s.jsxs("div",{className:i["left-top"],onClick:()=>H(),children:[s.jsx("img",{className:i["icon-back"],src:ie}),"收藏习题本"]}),s.jsxs("div",{className:i["right-top"],children:[s.jsx("div",{className:i["prev-button"],onClick:()=>W(),children:"上一题"}),s.jsx("div",{className:i["next-button"],onClick:()=>X(),children:"下一题"})]})]})}),s.jsx("div",{className:i["filter-two-class"],children:s.jsx(xe,{categories:D,defaultKey:S,defaultChild:I,scenes:[],scene:"",onSelected:(e,o,n)=>{M(e),R(o),N(!1),w("对答案"),b(1)}})}),s.jsxs("div",{className:i["project-box"],children:[s.jsx("div",{className:i["left-box"],children:r&&s.jsx(Ce,{activeNum:a,qidArr:r,hasPracticeIds:F,change:e=>Y(e)})}),s.jsxs("div",{className:i["right-box"],children:[t&&s.jsxs(s.Fragment,{children:[t.type&&s.jsxs("div",{className:i["delete-icon"],onClick:()=>Z(),children:[y&&s.jsxs(s.Fragment,{children:[s.jsx("img",{src:le}),s.jsx("strong",{children:"已收藏"})]}),!y&&s.jsxs(s.Fragment,{children:[s.jsx("img",{src:ue}),"收藏试题"]})]}),s.jsxs("div",{className:i["practice-join-box"],children:[t.type===1&&s.jsx(de,{num:a,question:t,reply:null,score:t.score,isCorrect:0,isOver:_,wrongBook:!0,update:(e,o,n)=>{g(e,o)}},t.id),t.type===2&&s.jsx(me,{num:a,question:t,reply:"",score:t.score,isCorrect:0,isOver:_,wrongBook:!0,update:(e,o,n)=>{g(e,o)}},t.id),t.type===3&&s.jsx(he,{num:a,question:t,reply:"",score:t.score,isCorrect:0,isOver:_,wrongBook:!0,update:(e,o,n)=>{g(e,o)}},t.id),t.type===4&&s.jsx(pe,{num:a,question:t,reply:null,score:t.score,isCorrect:0,thumbs:[],isOver:_,showImage:!1,wrongBook:!0,update:(e,o,n)=>{g(e,o)}},t.id),t.type===5&&s.jsx(fe,{num:a,question:t,reply:null,score:t.score,isCorrect:0,isOver:_,wrongBook:!0,update:(e,o,n)=>{g(e,o)}},t.id),t.type===6&&s.jsx(_e,{num:a,question:t,reply:null,score:t.score,isCorrect:0,isOver:_,wrongBook:!0,showImage:!1,update:(e,o,n)=>{g(e,o)}},t.id)]})]}),t&&(t.type===2||t.type===3||t.type===4||t.type===6)&&s.jsx("div",{className:i["buttons-box"],children:s.jsx("div",{className:i["see-answer"],onClick:()=>P(),children:J})})]})]})]})};export{Oe as default};
