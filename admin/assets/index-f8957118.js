import{r as a,W as O,K as ae,aO as Mt,bb as pt,Q as Ge,U as _t,G as Kt,J as le,N as $e,X as mt,Z as ct,Y as Vt,a7 as $t,a9 as gt,aA as Ot,aq as Ht,ar as At,V as st,au as Rt,aV as Wt,as as Ft,at as jt,ax as Bt,bJ as dt,ay as zt}from"./index-e664e6dc.js";import{e as Ut,f as Gt,B as Jt,u as Xt,b as Yt,c as qt,D as Qt,d as Zt}from"./useIcons-0af35028.js";import{e as Ye,c as er,T as tr,i as rr,j as nr,k as ar,S as lr}from"./iconUtil-a09ccdfb.js";const or=function(e){var t=a.useRef({valueLabels:new Map});return a.useMemo(function(){var l=t.current.valueLabels,n=new Map,r=e.map(function(u){var o,c=u.value,i=(o=u.label)!==null&&o!==void 0?o:l.get(c);return n.set(c,i),O(O({},u),{},{label:i})});return t.current.valueLabels=n,[r]},[e])},ir=function(e,t,l,n){return a.useMemo(function(){var r=e.map(function(i){var s=i.value;return s}),u=t.map(function(i){var s=i.value;return s}),o=r.filter(function(i){return!n[i]});if(l){var c=Ye(r,!0,n);r=c.checkedKeys,u=c.halfCheckedKeys}return[Array.from(new Set([].concat(ae(o),ae(r)))),u]},[e,t,l,n])};function ur(e){return Array.isArray(e)?e:e!==void 0?[e]:[]}function cr(e){var t=e||{},l=t.label,n=t.value,r=t.children,u=n||"value";return{_title:l?[l]:["title","label"],value:u,key:u,children:r||"children"}}function qe(e){return!e||e.disabled||e.disableCheckbox||e.checkable===!1}function sr(e,t){var l=[];function n(r){r.forEach(function(u){var o=u[t.children];o&&(l.push(u[t.value]),n(o))})}return n(e),l}function ft(e){return e==null}const dr=function(e,t){return a.useMemo(function(){var l=er(e,{fieldNames:t,initWrapper:function(r){return O(O({},r),{},{valueEntities:new Map})},processEntity:function(r,u){var o=r.node[t.value];u.valueEntities.set(o,r)}});return l},[e,t])};var Ze=function(){return null},fr=["children","value"];function Ct(e){return Mt(e).map(function(t){if(!a.isValidElement(t)||!t.type)return null;var l=t,n=l.key,r=l.props,u=r.children,o=r.value,c=pt(r,fr),i=O({key:n,value:o},c),s=Ct(u);return s.length&&(i.children=s),i}).filter(function(t){return t})}function Qe(e){if(!e)return e;var t=O({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return Ge(!1,"New `rc-tree-select` not support return node instance as argument anymore. Please consider to remove `props` access."),t}}),t}function vr(e,t,l,n,r,u){var o=null,c=null;function i(){function s(d){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"0",E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return d.map(function(S,T){var D="".concat(N,"-").concat(T),P=S[u.value],W=l.includes(P),U=s(S[u.children]||[],D,W),m=a.createElement(Ze,S,U.map(function(b){return b.node}));if(t===P&&(o=m),W){var K={pos:D,node:m,children:U};return E||c.push(K),K}return null}).filter(function(S){return S})}c||(c=[],s(n),c.sort(function(d,N){var E=d.node.props.value,S=N.node.props.value,T=l.indexOf(E),D=l.indexOf(S);return T-D}))}Object.defineProperty(e,"triggerNode",{get:function(){return Ge(!1,"`triggerNode` is deprecated. Please consider decoupling data with node."),i(),o}}),Object.defineProperty(e,"allCheckedNodes",{get:function(){return Ge(!1,"`allCheckedNodes` is deprecated. Please consider decoupling data with node."),i(),r?c:c.map(function(d){var N=d.node;return N})}})}const hr=function(e,t,l){var n=l.treeNodeFilterProp,r=l.filterTreeNode,u=l.fieldNames,o=u.children;return a.useMemo(function(){if(!t||r===!1)return e;var c;if(typeof r=="function")c=r;else{var i=t.toUpperCase();c=function(N,E){var S=E[n];return String(S).toUpperCase().includes(i)}}function s(d){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return d.reduce(function(E,S){var T=S[o],D=N||c(t,Qe(S)),P=s(T||[],D);return(D||P.length)&&E.push(O(O({},S),{},_t({isLeaf:void 0},o,P))),E},[])}return s(e)},[e,t,o,n,r])};function vt(e){var t=a.useRef();t.current=e;var l=a.useCallback(function(){return t.current.apply(t,arguments)},[]);return l}function pr(e,t){var l=t.id,n=t.pId,r=t.rootPId,u={},o=[],c=e.map(function(i){var s=O({},i),d=s[l];return u[d]=s,s.key=s.key||d,s});return c.forEach(function(i){var s=i[n],d=u[s];d&&(d.children=d.children||[],d.children.push(i)),(s===r||!d&&r===null)&&o.push(i)}),o}function mr(e,t,l){return a.useMemo(function(){return e?l?pr(e,O({id:"id",pId:"pId",rootPId:null},l!==!0?l:{})):e:Ct(t)},[t,l,e])}var St=a.createContext(null),yt=a.createContext(null),gr={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Cr=function(t,l){var n=Ut(),r=n.prefixCls,u=n.multiple,o=n.searchValue,c=n.toggleOpen,i=n.open,s=n.notFoundContent,d=a.useContext(yt),N=d.virtual,E=d.listHeight,S=d.listItemHeight,T=d.treeData,D=d.fieldNames,P=d.onSelect,W=d.dropdownMatchSelectWidth,U=d.treeExpandAction,m=a.useContext(St),K=m.checkable,b=m.checkedKeys,F=m.halfCheckedKeys,oe=m.treeExpandedKeys,Se=m.treeDefaultExpandAll,Oe=m.treeDefaultExpandedKeys,ye=m.onTreeExpand,ie=m.treeIcon,ue=m.showTreeIcon,G=m.switcherIcon,be=m.treeLine,J=m.treeNodeFilterProp,ee=m.loadData,H=m.treeLoadedKeys,xe=m.treeMotion,we=m.onTreeLoad,Ie=m.keyEntities,j=a.useRef(),x=Kt(function(){return T},[i,T],function(f,w){return w[0]&&f[1]!==w[1]}),ce=a.useState(null),B=le(ce,2),X=B[0],se=B[1],V=Ie[X],de=a.useMemo(function(){return K?{checked:b,halfChecked:F}:null},[K,b,F]);a.useEffect(function(){if(i&&!u&&b.length){var f;(f=j.current)===null||f===void 0||f.scrollTo({key:b[0]}),se(b[0])}},[i]);var fe=String(o).toLowerCase(),Ee=function(w){return fe?String(w[J]).toLowerCase().includes(fe):!1},ve=a.useState(Oe),he=le(ve,2),ke=he[0],He=he[1],Y=a.useState(null),q=le(Y,2),pe=q[0],$=q[1],Ne=a.useMemo(function(){return oe?ae(oe):o?pe:ke},[ke,pe,oe,o]);a.useEffect(function(){o&&$(sr(T,D))},[o]);var Te=function(w){He(w),$(w),ye&&ye(w)},Q=function(w){w.preventDefault()},me=function(w,Z){var M=Z.node;K&&qe(M)||(P(M.key,{selected:!b.includes(M.key)}),u||c(!1))};if(a.useImperativeHandle(l,function(){var f;return{scrollTo:(f=j.current)===null||f===void 0?void 0:f.scrollTo,onKeyDown:function(Z){var M,De=Z.which;switch(De){case $e.UP:case $e.DOWN:case $e.LEFT:case $e.RIGHT:(M=j.current)===null||M===void 0||M.onKeyDown(Z);break;case $e.ENTER:{if(V){var Le=(V==null?void 0:V.node)||{},te=Le.selectable,Pe=Le.value;te!==!1&&me(null,{node:{key:X},selected:!b.includes(Pe)})}break}case $e.ESC:c(!1)}},onKeyUp:function(){}}}),x.length===0)return a.createElement("div",{role:"listbox",className:"".concat(r,"-empty"),onMouseDown:Q},s);var A={fieldNames:D};return H&&(A.loadedKeys=H),Ne&&(A.expandedKeys=Ne),a.createElement("div",{onMouseDown:Q},V&&i&&a.createElement("span",{style:gr,"aria-live":"assertive"},V.node.value),a.createElement(tr,mt({ref:j,focusable:!1,prefixCls:"".concat(r,"-tree"),treeData:x,height:E,itemHeight:S,virtual:N!==!1&&W!==!1,multiple:u,icon:ie,showIcon:ue,switcherIcon:G,showLine:be,loadData:o?null:ee,motion:xe,activeKey:X,checkable:K,checkStrictly:!0,checkedKeys:de,selectedKeys:K?[]:b,defaultExpandAll:Se},A,{onActiveChange:se,onSelect:me,onCheck:me,onExpand:Te,onLoad:we,filterTreeNode:Ee,expandAction:U})))},bt=a.forwardRef(Cr);bt.displayName="OptionList";var et="SHOW_ALL",tt="SHOW_PARENT",Je="SHOW_CHILD";function ht(e,t,l,n){var r=new Set(e);return t===Je?e.filter(function(u){var o=l[u];return!(o&&o.children&&o.children.some(function(c){var i=c.node;return r.has(i[n.value])})&&o.children.every(function(c){var i=c.node;return qe(i)||r.has(i[n.value])}))}):t===tt?e.filter(function(u){var o=l[u],c=o?o.parent:null;return!(c&&!qe(c.node)&&r.has(c.key))}):e}var Sr=["id","prefixCls","value","defaultValue","onChange","onSelect","onDeselect","searchValue","inputValue","onSearch","autoClearSearchValue","filterTreeNode","treeNodeFilterProp","showCheckedStrategy","treeNodeLabelProp","multiple","treeCheckable","treeCheckStrictly","labelInValue","fieldNames","treeDataSimpleMode","treeData","children","loadData","treeLoadedKeys","onTreeLoad","treeDefaultExpandAll","treeExpandedKeys","treeDefaultExpandedKeys","onTreeExpand","treeExpandAction","virtual","listHeight","listItemHeight","onDropdownVisibleChange","dropdownMatchSelectWidth","treeLine","treeIcon","showTreeIcon","switcherIcon","treeMotion"];function yr(e){return!e||Vt(e)!=="object"}var br=a.forwardRef(function(e,t){var l=e.id,n=e.prefixCls,r=n===void 0?"rc-tree-select":n,u=e.value,o=e.defaultValue,c=e.onChange,i=e.onSelect,s=e.onDeselect,d=e.searchValue,N=e.inputValue,E=e.onSearch,S=e.autoClearSearchValue,T=S===void 0?!0:S,D=e.filterTreeNode,P=e.treeNodeFilterProp,W=P===void 0?"value":P,U=e.showCheckedStrategy,m=e.treeNodeLabelProp,K=e.multiple,b=e.treeCheckable,F=e.treeCheckStrictly,oe=e.labelInValue,Se=e.fieldNames,Oe=e.treeDataSimpleMode,ye=e.treeData,ie=e.children,ue=e.loadData,G=e.treeLoadedKeys,be=e.onTreeLoad,J=e.treeDefaultExpandAll,ee=e.treeExpandedKeys,H=e.treeDefaultExpandedKeys,xe=e.onTreeExpand,we=e.treeExpandAction,Ie=e.virtual,j=e.listHeight,x=j===void 0?200:j,ce=e.listItemHeight,B=ce===void 0?20:ce,X=e.onDropdownVisibleChange,se=e.dropdownMatchSelectWidth,V=se===void 0?!0:se,de=e.treeLine,fe=e.treeIcon,Ee=e.showTreeIcon,ve=e.switcherIcon,he=e.treeMotion,ke=pt(e,Sr),He=Gt(l),Y=b&&!F,q=b||F,pe=F||oe,$=q||K,Ne=ct(o,{value:u}),Te=le(Ne,2),Q=Te[0],me=Te[1],A=a.useMemo(function(){return b?U||Je:et},[U,b]),f=a.useMemo(function(){return cr(Se)},[JSON.stringify(Se)]),w=ct("",{value:d!==void 0?d:N,postState:function(v){return v||""}}),Z=le(w,2),M=Z[0],De=Z[1],Le=function(v){De(v),E==null||E(v)},te=mr(ye,ie,Oe),Pe=dr(te,f),L=Pe.keyEntities,R=Pe.valueEntities,Me=a.useCallback(function(h){var v=[],p=[];return h.forEach(function(g){R.has(g)?p.push(g):v.push(g)}),{missingRawValues:v,existRawValues:p}},[R]),rt=hr(te,M,{fieldNames:f,treeNodeFilterProp:W,filterTreeNode:D}),nt=a.useCallback(function(h){if(h){if(m)return h[m];for(var v=f._title,p=0;p<v.length;p+=1){var g=h[v[p]];if(g!==void 0)return g}}},[f,m]),Ae=a.useCallback(function(h){var v=ur(h);return v.map(function(p){return yr(p)?{value:p}:p})},[]),je=a.useCallback(function(h){var v=Ae(h);return v.map(function(p){var g=p.label,_=p.value,I=p.halfChecked,C,y=R.get(_);if(y){var k;g=(k=g)!==null&&k!==void 0?k:nt(y.node),C=y.node.disabled}else if(g===void 0){var re=Ae(Q).find(function(Re){return Re.value===_});g=re.label}return{label:g,value:_,halfChecked:I,disabled:C}})},[R,nt,Ae,Q]),at=a.useMemo(function(){return Ae(Q)},[Ae,Q]),xt=a.useMemo(function(){var h=[],v=[];return at.forEach(function(p){p.halfChecked?v.push(p):h.push(p)}),[h,v]},[at]),lt=le(xt,2),_e=lt[0],ot=lt[1],it=a.useMemo(function(){return _e.map(function(h){return h.value})},[_e]),wt=ir(_e,ot,Y,L),ut=le(wt,2),Ke=ut[0],Be=ut[1],It=a.useMemo(function(){var h=ht(Ke,A,L,f),v=h.map(function(I){var C,y,k;return(C=(y=L[I])===null||y===void 0||(k=y.node)===null||k===void 0?void 0:k[f.value])!==null&&C!==void 0?C:I}),p=v.map(function(I){var C=_e.find(function(y){return y.value===I});return{value:I,label:C==null?void 0:C.label}}),g=je(p),_=g[0];return!$&&_&&ft(_.value)&&ft(_.label)?[]:g.map(function(I){var C;return O(O({},I),{},{label:(C=I.label)!==null&&C!==void 0?C:I.value})})},[f,$,Ke,_e,je,A,L]),Et=or(It),kt=le(Et,1),Nt=kt[0],ze=vt(function(h,v,p){var g=je(h);if(me(g),T&&De(""),c){var _=h;if(Y){var I=ht(h,A,L,f);_=I.map(function(z){var ne=R.get(z);return ne?ne.node[f.value]:z})}var C=v||{triggerValue:void 0,selected:void 0},y=C.triggerValue,k=C.selected,re=_;if(F){var Re=ot.filter(function(z){return!_.includes(z.value)});re=[].concat(ae(re),ae(Re))}var We=je(re),ge={preValue:_e,triggerValue:y},Ve=!0;(F||p==="selection"&&!k)&&(Ve=!1),vr(ge,y,h,te,Ve,f),q?ge.checked=k:ge.selected=k;var Ue=pe?We:We.map(function(z){return z.value});c($?Ue:Ue[0],pe?null:We.map(function(z){return z.label}),ge)}}),Xe=a.useCallback(function(h,v){var p,g=v.selected,_=v.source,I=L[h],C=I==null?void 0:I.node,y=(p=C==null?void 0:C[f.value])!==null&&p!==void 0?p:h;if(!$)ze([y],{selected:!0,triggerValue:y},"option");else{var k=g?[].concat(ae(it),[y]):Ke.filter(function(ne){return ne!==y});if(Y){var re=Me(k),Re=re.missingRawValues,We=re.existRawValues,ge=We.map(function(ne){return R.get(ne).key}),Ve;if(g){var Ue=Ye(ge,!0,L);Ve=Ue.checkedKeys}else{var z=Ye(ge,{checked:!1,halfCheckedKeys:Be},L);Ve=z.checkedKeys}k=[].concat(ae(Re),ae(Ve.map(function(ne){return L[ne].node[f.value]})))}ze(k,{selected:g,triggerValue:y},_||"option")}g||!$?i==null||i(y,Qe(C)):s==null||s(y,Qe(C))},[Me,R,L,f,$,it,ze,Y,i,s,Ke,Be]),Tt=a.useCallback(function(h){if(X){var v={};Object.defineProperty(v,"documentClickClose",{get:function(){return Ge(!1,"Second param of `onDropdownVisibleChange` has been removed."),!1}}),X(h,v)}},[X]),Dt=vt(function(h,v){var p=h.map(function(g){return g.value});if(v.type==="clear"){ze(p,{},"selection");return}v.values.length&&Xe(v.values[0].value,{selected:!1,source:"selection"})}),Lt=a.useMemo(function(){return{virtual:Ie,dropdownMatchSelectWidth:V,listHeight:x,listItemHeight:B,treeData:rt,fieldNames:f,onSelect:Xe,treeExpandAction:we}},[Ie,V,x,B,rt,f,Xe,we]),Pt=a.useMemo(function(){return{checkable:q,loadData:ue,treeLoadedKeys:G,onTreeLoad:be,checkedKeys:Ke,halfCheckedKeys:Be,treeDefaultExpandAll:J,treeExpandedKeys:ee,treeDefaultExpandedKeys:H,onTreeExpand:xe,treeIcon:fe,treeMotion:he,showTreeIcon:Ee,switcherIcon:ve,treeLine:de,treeNodeFilterProp:W,keyEntities:L}},[q,ue,G,be,Ke,Be,J,ee,H,xe,fe,he,Ee,ve,de,W,L]);return a.createElement(yt.Provider,{value:Lt},a.createElement(St.Provider,{value:Pt},a.createElement(Jt,mt({ref:t},ke,{id:He,prefixCls:r,mode:$?"multiple":void 0,displayValues:Nt,onDisplayValuesChange:Dt,searchValue:M,onSearch:Le,OptionList:bt,emptyOptions:!te.length,onDropdownVisibleChange:Tt,dropdownMatchSelectWidth:V}))))}),Fe=br;Fe.TreeNode=Ze;Fe.SHOW_ALL=et;Fe.SHOW_PARENT=tt;Fe.SHOW_CHILD=Je;const xr=e=>{const{componentCls:t,treePrefixCls:l,colorBgElevated:n}=e,r=`.${l}`;return[{[`${t}-dropdown`]:[{padding:`${e.paddingXS}px ${e.paddingXS/2}px`},nr(l,gt(e,{colorBgContainer:n})),{[r]:{borderRadius:0,[`${r}-list-holder-inner`]:{alignItems:"stretch",[`${r}-treenode`]:{[`${r}-node-content-wrapper`]:{flex:"auto"}}}}},ar(`${l}-checkbox`,e),{"&-rtl":{direction:"rtl",[`${r}-switcher${r}-switcher_close`]:{[`${r}-switcher-icon svg`]:{transform:"rotate(90deg)"}}}}]}]};function wr(e,t){return $t("TreeSelect",l=>{const n=gt(l,{treePrefixCls:t});return[xr(n)]},rr)(e)}var Ir=globalThis&&globalThis.__rest||function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]]);return l};const Er=(e,t)=>{var l,{prefixCls:n,size:r,disabled:u,bordered:o=!0,className:c,rootClassName:i,treeCheckable:s,multiple:d,listHeight:N=256,listItemHeight:E=26,placement:S,notFoundContent:T,switcherIcon:D,treeLine:P,getPopupContainer:W,popupClassName:U,dropdownClassName:m,treeIcon:K=!1,transitionName:b,choiceTransitionName:F="",status:oe,treeExpandAction:Se,builtinPlacements:Oe,dropdownMatchSelectWidth:ye,popupMatchSelectWidth:ie,allowClear:ue}=e,G=Ir(e,["prefixCls","size","disabled","bordered","className","rootClassName","treeCheckable","multiple","listHeight","listItemHeight","placement","notFoundContent","switcherIcon","treeLine","getPopupContainer","popupClassName","dropdownClassName","treeIcon","transitionName","choiceTransitionName","status","treeExpandAction","builtinPlacements","dropdownMatchSelectWidth","popupMatchSelectWidth","allowClear"]);const{getPopupContainer:be,getPrefixCls:J,renderEmpty:ee,direction:H,virtual:xe,popupMatchSelectWidth:we,popupOverflow:Ie}=a.useContext(Ht),j=J(),x=J("select",n),ce=J("select-tree",n),B=J("tree-select",n),{compactSize:X,compactItemClassnames:se}=At(x,H),[V,de]=Xt(x),[fe]=wr(B,ce),Ee=st(U||m,`${B}-dropdown`,{[`${B}-dropdown-rtl`]:H==="rtl"},i,de),ve=!!(s||d),he=Yt(G.suffixIcon,G.showArrow),ke=(l=ie??ye)!==null&&l!==void 0?l:we,{status:He,hasFeedback:Y,isFormItemInput:q,feedbackIcon:pe}=a.useContext(Rt),$=zt(He,oe),{suffixIcon:Ne,removeIcon:Te,clearIcon:Q}=qt(Object.assign(Object.assign({},G),{multiple:ve,showSuffixIcon:he,hasFeedback:Y,feedbackIcon:pe,prefixCls:x,componentName:"TreeSelect"})),me=ue===!0?{clearIcon:Q}:ue;let A;T!==void 0?A=T:A=(ee==null?void 0:ee("Select"))||a.createElement(Qt,{componentName:"Select"});const f=Wt(G,["suffixIcon","itemIcon","removeIcon","clearIcon","switcherIcon"]),w=a.useMemo(()=>S!==void 0?S:H==="rtl"?"bottomRight":"bottomLeft",[S,H]),Z=Zt(Oe,Ie),M=Ft(R=>{var Me;return(Me=r??X)!==null&&Me!==void 0?Me:R}),De=a.useContext(jt),Le=u??De,te=st(!n&&B,{[`${x}-lg`]:M==="large",[`${x}-sm`]:M==="small",[`${x}-rtl`]:H==="rtl",[`${x}-borderless`]:!o,[`${x}-in-form-item`]:q},Bt(x,$,Y),se,c,i,de),Pe=R=>a.createElement(lr,{prefixCls:ce,switcherIcon:D,treeNodeProps:R,showLine:P}),L=a.createElement(Fe,Object.assign({virtual:xe,disabled:Le},f,{dropdownMatchSelectWidth:ke,builtinPlacements:Z,ref:t,prefixCls:x,className:te,listHeight:N,listItemHeight:E,treeCheckable:s&&a.createElement("span",{className:`${x}-tree-checkbox-inner`}),treeLine:!!P,suffixIcon:Ne,multiple:ve,placement:w,removeIcon:Te,allowClear:me,switcherIcon:Pe,showTreeIcon:K,notFoundContent:A,getPopupContainer:W||be,treeMotion:null,dropdownClassName:Ee,choiceTransitionName:dt(j,"",F),transitionName:dt(j,"slide-up",b),treeExpandAction:Se}));return V(fe(L))},kr=a.forwardRef(Er),Ce=kr,Nr=Ot(Ce);Ce.TreeNode=Ze;Ce.SHOW_ALL=et;Ce.SHOW_PARENT=tt;Ce.SHOW_CHILD=Je;Ce._InternalPanelDoNotUseOrYouWillBeFired=Nr;const Pr=Ce;export{Pr as T};
