import{r as i,a7 as H,a9 as B,aq as J,V}from"./index-e664e6dc.js";import{u as D,r as v}from"./responsiveObserver-8e0341fc.js";const K=i.createContext({}),X=K,Q=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},U=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},Y=(e,t)=>{const{componentCls:s,gridColumns:n}=e,r={};for(let o=n;o>=0;o--)o===0?(r[`${s}${t}-${o}`]={display:"none"},r[`${s}-push-${o}`]={insetInlineStart:"auto"},r[`${s}-pull-${o}`]={insetInlineEnd:"auto"},r[`${s}${t}-push-${o}`]={insetInlineStart:"auto"},r[`${s}${t}-pull-${o}`]={insetInlineEnd:"auto"},r[`${s}${t}-offset-${o}`]={marginInlineStart:0},r[`${s}${t}-order-${o}`]={order:0}):(r[`${s}${t}-${o}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${o/n*100}%`,maxWidth:`${o/n*100}%`}],r[`${s}${t}-push-${o}`]={insetInlineStart:`${o/n*100}%`},r[`${s}${t}-pull-${o}`]={insetInlineEnd:`${o/n*100}%`},r[`${s}${t}-offset-${o}`]={marginInlineStart:`${o/n*100}%`},r[`${s}${t}-order-${o}`]={order:o});return r},P=(e,t)=>Y(e,t),Z=(e,t,s)=>({[`@media (min-width: ${t}px)`]:Object.assign({},P(e,s))}),z=H("Grid",e=>[Q(e)]),ee=H("Grid",e=>{const t=B(e,{gridColumns:24}),s={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[U(t),P(t,""),P(t,"-xs"),Object.keys(s).map(n=>Z(t,s[n],n)).reduce((n,r)=>Object.assign(Object.assign({},n),r),{})]});var te=globalThis&&globalThis.__rest||function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};function ne(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const re=["xs","sm","md","lg","xl","xxl"],se=i.forwardRef((e,t)=>{const{getPrefixCls:s,direction:n}=i.useContext(J),{gutter:r,wrap:o}=i.useContext(X),{prefixCls:y,span:d,order:$,offset:g,push:b,pull:h,className:R,children:G,flex:j,style:O}=e,S=te(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),a=s("col",y),[w,I]=ee(a);let m={};re.forEach(f=>{let l={};const u=e[f];typeof u=="number"?l.span=u:typeof u=="object"&&(l=u||{}),delete S[f],m=Object.assign(Object.assign({},m),{[`${a}-${f}-${l.span}`]:l.span!==void 0,[`${a}-${f}-order-${l.order}`]:l.order||l.order===0,[`${a}-${f}-offset-${l.offset}`]:l.offset||l.offset===0,[`${a}-${f}-push-${l.push}`]:l.push||l.push===0,[`${a}-${f}-pull-${l.pull}`]:l.pull||l.pull===0,[`${a}-${f}-flex-${l.flex}`]:l.flex||l.flex==="auto",[`${a}-rtl`]:n==="rtl"})});const E=V(a,{[`${a}-${d}`]:d!==void 0,[`${a}-order-${$}`]:$,[`${a}-offset-${g}`]:g,[`${a}-push-${b}`]:b,[`${a}-pull-${h}`]:h},R,m,I),c={};if(r&&r[0]>0){const f=r[0]/2;c.paddingLeft=f,c.paddingRight=f}return j&&(c.flex=ne(j),o===!1&&!c.minWidth&&(c.minWidth=0)),w(i.createElement("div",Object.assign({},S,{style:Object.assign(Object.assign({},c),O),className:E,ref:t}),G))}),ce=se;var oe=globalThis&&globalThis.__rest||function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(s[n[r]]=e[n[r]]);return s};function T(e,t){const[s,n]=i.useState(typeof e=="string"?e:""),r=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let o=0;o<v.length;o++){const y=v[o];if(!t[y])continue;const d=e[y];if(d!==void 0){n(d);return}}};return i.useEffect(()=>{r()},[JSON.stringify(e),t]),s}const le=i.forwardRef((e,t)=>{const{prefixCls:s,justify:n,align:r,className:o,style:y,children:d,gutter:$=0,wrap:g}=e,b=oe(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:h,direction:R}=i.useContext(J),[G,j]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[O,S]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),a=T(r,O),w=T(n,O),I=i.useRef($),m=D();i.useEffect(()=>{const x=m.subscribe(A=>{S(A);const p=I.current||0;(!Array.isArray(p)&&typeof p=="object"||Array.isArray(p)&&(typeof p[0]=="object"||typeof p[1]=="object"))&&j(A)});return()=>m.unsubscribe(x)},[]);const E=()=>{const x=[void 0,void 0];return(Array.isArray($)?$:[$,void 0]).forEach((p,W)=>{if(typeof p=="object")for(let k=0;k<v.length;k++){const N=v[k];if(G[N]&&p[N]!==void 0){x[W]=p[N];break}}else x[W]=p}),x},c=h("row",s),[f,l]=z(c),u=E(),F=V(c,{[`${c}-no-wrap`]:g===!1,[`${c}-${w}`]:w,[`${c}-${a}`]:a,[`${c}-rtl`]:R==="rtl"},o,l),C={},M=u[0]!=null&&u[0]>0?u[0]/-2:void 0;M&&(C.marginLeft=M,C.marginRight=M),[,C.rowGap]=u;const[_,L]=u,q=i.useMemo(()=>({gutter:[_,L],wrap:g}),[_,L,g]);return f(i.createElement(X.Provider,{value:q},i.createElement("div",Object.assign({},b,{className:F,style:Object.assign(Object.assign({},C),y),ref:t}),d)))}),fe=le;export{ce as C,fe as R};
