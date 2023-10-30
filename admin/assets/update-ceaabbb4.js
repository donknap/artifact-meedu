import{f as Q,u as W,b as X,r as a,t as Y,j as e,g as Z,I as m,S as d,B as I,m as r}from"./index-e664e6dc.js";import{g as $,c as ee,h as se}from"./mock-942c1c73.js";import{B as te}from"./index-6997ccbf.js";import{H as o}from"./index-aa5ba88b.js";import{F as t}from"./index-279b9278.js";import{S as V}from"./index-640f3908.js";import{S as N}from"./index-65a4c0be.js";import"./LeftOutlined-feda539a.js";import"./InfoCircleOutlined-e72834c1.js";import"./row-2dac17a4.js";import"./responsiveObserver-8e0341fc.js";import"./useIcons-0af35028.js";import"./CheckOutlined-f7d7f4b2.js";const je=()=>{const f=new URLSearchParams(Q().search),k=W(),_=X(),[n]=t.useForm(),[w,P]=a.useState(!0),[C,b]=a.useState(!1),[v,x]=a.useState(0),[B,y]=a.useState(0),[S,p]=a.useState(0),[j,F]=a.useState([]),[E,D]=a.useState([]),[L,M]=a.useState([]),[c,R]=a.useState({}),[g,H]=a.useState(Number(f.get("id")));a.useEffect(()=>{document.title="编辑模拟试卷",k(Y("编辑模拟试卷")),J()},[g]),a.useEffect(()=>{U()},[j]),a.useEffect(()=>{H(Number(f.get("id")))},[f.get("id")]);const J=async()=>{await O(),P(!1)},O=async()=>{if(g===0)return;var i=(await $(g)).data;n.setFieldsValue({category_id:i.category_id,title:i.title,is_invite:i.is_invite,is_vip_free:i.is_vip_free,charge:i.charge,expired_minutes:i.expired_minutes,pass_score:i.pass_score}),p(i.charge),y(i.is_invite),i.charge===0?(x(1),n.setFieldsValue({is_free:1})):(x(0),n.setFieldsValue({is_free:0}));let l=JSON.parse(i.rule);F(l.category_ids),n.setFieldsValue({category_ids:l.category_ids,choice:Number(l.num.choice),select:Number(l.num.select),judge:Number(l.num.judge),input:Number(l.num.input),qa:Number(l.num.qa),cap:Number(l.num.cap)})},U=()=>{ee({category_ids:j}).then(s=>{let i=s.data.categories;const l=[];for(let h=0;h<i.length;h++)l.push({label:i[h].name,value:i[h].id});D(l);let u=s.data.question_categories;const q=[];for(let h=0;h<u.length;h++)q.push({label:u[h].name,value:u[h].id});M(q),R(s.data.count_map)})},A=s=>{if(C)return;if(s.is_invite===0&&s.is_free===0&&!s.charge){r.error("价格不能为空");return}if(s.charge<0){r.error("价格不能为负数");return}if(s.choice>0||s.select>0||s.input>0||s.qa>0||s.judge>0||s.cap>0){if(s.choice>c[1]){r.error("单选题数量超出可抽取单选题总量");return}if(s.select>c[2]){r.error("多选题数量超出可抽取多选题总量");return}if(s.input>c[3]){r.error("填空题数量超出可抽取填空题总量");return}if(s.qa>c[4]){r.error("问答题数量超出可抽取问答题总量");return}if(s.judge>c[5]){r.error("判断题数量超出可抽取判断题总量");return}if(s.cap>c[6]){r.error("题帽题数量超出可抽取题帽题总量");return}if(s.choice<0){r.error("单选题数量不能为负数");return}if(s.select<0){r.error("多选题数量不能为负数");return}if(s.input<0){r.error("填空题数量不能为负数");return}if(s.qa<0){r.error("问答题数量不能为负数");return}if(s.judge<0){r.error("判断题数量不能为负数");return}if(s.cap<0){r.error("题帽题数量不能为负数");return}s.is_invite===0&&s.is_free===1&&(s.charge=0,p(0)),s.choice||(s.choice=0),s.select||(s.select=0),s.judge||(s.judge=0),s.input||(s.input=0),s.qa||(s.qa=0),s.cap||(s.cap=0)}b(!0);let i={category_ids:j,num:{choice:s.choice,select:s.select,input:s.input,qa:s.qa,judge:s.judge,cap:s.cap}},l=JSON.stringify(i);se(g,{rule:l,pass_score:s.pass_score,title:s.title,is_vip_free:s.is_vip_free,expired_minutes:s.expired_minutes,is_invite:s.is_invite,charge:S,category_id:s.category_id}).then(u=>{b(!1),r.success("保存成功！"),_(-1)}).catch(u=>{b(!1)})},T=s=>{console.log("Failed:",s)},z=s=>{s?(n.setFieldsValue({is_invite:1}),y(1)):(n.setFieldsValue({is_invite:0}),y(0))},G=s=>{s?(n.setFieldsValue({is_free:1,charge:0}),p(0),x(1)):(n.setFieldsValue({is_free:0}),x(0))},K=s=>{s?n.setFieldsValue({is_vip_free:1}):n.setFieldsValue({is_vip_free:0})};return e.jsxs("div",{className:"meedu-main-body",children:[e.jsx(te,{title:"编辑模拟试卷"}),w&&e.jsx("div",{className:"float-left text-center mt-30",children:e.jsx(Z,{})}),e.jsx("div",{style:{display:w?"none":"block"},className:"float-left mt-30",children:e.jsxs(t,{form:n,name:"mockPaper-update",labelCol:{span:3},wrapperCol:{span:21},initialValues:{remember:!0},onFinish:A,onFinishFailed:T,autoComplete:"off",children:[e.jsx(t.Item,{label:"标题",name:"title",rules:[{required:!0,message:"请输入试卷标题!"}],children:e.jsx(m,{style:{width:300},placeholder:"请输入试卷标题",allowClear:!0})}),e.jsx(t.Item,{label:"分类",name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"category_id",rules:[{required:!0,message:"请选择分类!"}],children:e.jsx(V,{style:{width:300},allowClear:!0,placeholder:"请选择分类",options:E})}),e.jsx(I,{type:"link",className:"c-primary",onClick:()=>{_("/exam/paper/category/index")},children:"分类管理"})]})}),e.jsx(t.Item,{label:"时间",name:"expired_minutes",rules:[{required:!0,message:"请输入时间!"}],children:e.jsx(m,{type:"number",style:{width:300},placeholder:"单位：分钟",allowClear:!0})}),e.jsx(t.Item,{label:"及格分",name:"pass_score",rules:[{required:!0,message:"请输入及格分!"}],children:e.jsx(m,{type:"number",style:{width:300},placeholder:"请输入及格分",allowClear:!0})}),e.jsx(t.Item,{label:"仅添加学员",name:"is_invite",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_invite",valuePropName:"checked",children:e.jsx(N,{onChange:z})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"开启仅添加学员的话，只有后台添加的用户可以参与考试"})})]})}),B===0&&e.jsx(t.Item,{label:"免费参与",name:"is_free",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_free",valuePropName:"checked",children:e.jsx(N,{onChange:G})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"开启所有用户均可直接考试。"})})]})}),v===0&&e.jsx(t.Item,{label:"价格",name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"charge",rules:[{required:!0,message:"请输入价格!"}],children:e.jsx(m,{onChange:s=>{p(Number(s.target.value))},type:"number",style:{width:300},placeholder:"单位：元",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"请输入整数"})})]})}),S>0&&e.jsx(t.Item,{label:"VIP免费",name:"is_vip_free",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"is_vip_free",valuePropName:"checked",children:e.jsx(N,{onChange:K})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"设置VIP免费的话，则VIP会员用户可以无需购买直接参与考试。"})})]})}),e.jsx(t.Item,{label:"试题随机范围",name:"category_ids",rules:[{required:!0,message:"请选择试题范围!"}],children:e.jsx(V,{style:{width:300},allowClear:!0,mode:"multiple",placeholder:"请选择范围",options:L,onChange:s=>{F(s)}})}),j.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(t.Item,{label:"单选题数量",name:"choice",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"choice",children:e.jsx(m,{type:"number",style:{width:300},placeholder:"请输入整数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsxs("span",{children:["（共",c[1],"题）"]})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"每次考试抽出的单选题数量"})})]})}),e.jsx(t.Item,{label:"多选题数量",name:"select",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"select",children:e.jsx(m,{type:"number",style:{width:300},placeholder:"请输入整数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsxs("span",{children:["（共",c[2],"题）"]})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"每次考试抽出的多选题数量"})})]})}),e.jsx(t.Item,{label:"判断题数量",name:"judge",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"judge",children:e.jsx(m,{type:"number",style:{width:300},placeholder:"请输入整数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsxs("span",{children:["（共",c[5],"题）"]})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"每次考试抽出的判断题数量"})})]})}),e.jsx(t.Item,{label:"填空题数量",name:"input",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"input",children:e.jsx(m,{type:"number",style:{width:300},placeholder:"请输入整数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsxs("span",{children:["（共",c[3],"题）"]})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"每次考试抽出填空题数量"})})]})}),e.jsx(t.Item,{label:"问答题数量",name:"qa",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"qa",children:e.jsx(m,{type:"number",style:{width:300},placeholder:"请输入整数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsxs("span",{children:["（共",c[4],"题）"]})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"每次考试抽出问答题数量"})})]})}),e.jsx(t.Item,{label:"题帽题数量",name:"cap",children:e.jsxs(d,{align:"baseline",style:{height:32},children:[e.jsx(t.Item,{name:"cap",children:e.jsx(m,{type:"number",style:{width:300},placeholder:"请输入整数",allowClear:!0})}),e.jsx("div",{className:"ml-10",children:e.jsxs("span",{children:["（共",c[6],"题）"]})}),e.jsx("div",{className:"ml-10",children:e.jsx(o,{text:"每次考试抽出题帽题数量"})})]})})]})]})}),e.jsx("div",{className:"bottom-menus",children:e.jsxs("div",{className:"bottom-menus-box",children:[e.jsx("div",{children:e.jsx(I,{loading:C,type:"primary",onClick:()=>n.submit(),children:"保存"})}),e.jsx("div",{className:"ml-24",children:e.jsx(I,{type:"default",onClick:()=>_(-1),children:"取消"})})]})})]})};export{je as default};