(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe5cf30"],{"0dcf":function(A,t,s){"use strict";s.r(t);var i=function(){var A=this,t=A._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"navheader borderbox"},[t("img",{staticClass:"back",attrs:{src:s("f508")},on:{click:function(t){return A.goGoods()}}}),t("div",{staticClass:"title"},[A._v("手动打款支付")])]),t("div",{staticClass:"normal-box"},[t("div",{staticClass:"orderNum"},[A._v(" 订单号："),t("span",[A._v(A._s(A.orderId))])]),t("div",{staticClass:"price"},[A._v(" 需支付："),t("span",{staticClass:"red"},[A._v("￥"),t("strong",[A._v(A._s(A.price))])])])]),t("div",{staticClass:"pay-box"},[A._m(0),t("div",{staticClass:"text",domProps:{innerHTML:A._s(A.text)}})]),t("div",{staticClass:"btns"},[t("div",{staticClass:"btn-confirm",on:{click:function(t){return A.confirm()}}},[A._v("我已完成支付")])])])},e=[function(){var A=this,t=A._self._c;return t("div",{staticClass:"tit"},[A._v(" 收款信息"),t("span",[A._v("（手动打款需后台验证后交付订单，请耐心等待）")])])}],a=(s("14d9"),s("2f62")),r={data(){return{loading:!1,orderId:this.$route.query.orderId,price:this.$route.query.price,payment:this.$route.query.payment,text:null,goods_type:this.$route.query.type,id:this.$route.query.id}},computed:{...Object(a["c"])(["isLogin","user"])},mounted(){this.initData()},methods:{initData(){this.$api.Order.HandPay({order_id:this.orderId}).then(A=>{this.text=A.data.text}).catch(A=>{this.$message.error(A.message),this.$router.push({name:"index"})})},goGoods(){this.$router.go(-2)},confirm(){this.$router.push({name:"Index"})}}},o=r,n=(s("881e"),s("2877")),c=Object(n["a"])(o,i,e,!1,null,"754a9b38",null);t["default"]=c.exports},"6ada":function(A,t,s){},"881e":function(A,t,s){"use strict";s("6ada")},f508:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAAEi6oPRAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACz+WTVAAADyUlEQVR4Ae2cPa4TMRCAXxIkoERCAgk6ChSlgSNQAKJCQkrCAZCQKDlBWm7wKF6fn4bQ8Ro4Ak1ugKCDEoSUhJlHRjIre3dsz2zsxSs9Nrv2zH7+1tn1/oSTk5hpOp2+qo0fj8d7nQr92rSuwkYeCmRXpIAW5o1MwRX+Q5mO/YUKGzU6Yi9WdyBBtXnRTcovYZW4A8uwF9+6mtFzFVTXTyaTn/v9/gqsv7xarX5Xy1kHEkrS7/cf25Jg0kYiM8lisTivktBybSJukloinyTORL5JMJFVNu6dXq/3q84JBpuTNRHuHUyGZGblus9O2TBQeLTb7T4g2XK5vFqXBMucibDQJ1ltIp9kjYm4yayyMdiccO/RDoAv7j2zrHzO1wCrF4U0j44fGDsYDG7N5/OvnDyXOJV86hAIHDouwrAXc2EwQMwQgRA8gvgcFCkuGkgKJBpIGiQYSAvEGwhAvkNHvUaBoX2E4l1z1jEfg+H8+NxMAnBrc1nqs3enpnMuAXBP5FS/ae4NRAm1wIKBtMCigaTBxICkwMSBbGBwwaK2HdpemRcDxQDXgNrXES687gLEm9Fo9Gw2m+24QOJjatyweZ7bbDZbWMVuOHv4wW2hCXOI+cKNxXpsck7SKkzI0EQMSAJGzJAUjAiQJEw0kDRMFJAGTDCQFkwQkCaMN5A2jBdQGzBsIDhR3oTK3zAAp5Aj8N/I5n9Z5zK4jn9qpgKgf5bNstjP7FOH9l0PaggbCAPagPICagPKG0gbKghIEyoYSAsqCkgDKhpIGkoESBJKDEgKShTIBgUPXh7As45PWMaZWOcyTiKqg49W8eRLy9vt9iN95szFgXCjh+e99BD5jANS6hQDxUAxUAwUA10wID700JZyuL/wDrZjvqx1Bo+/XmhsOxtBKAafysMfvgVpm+6DpM+2gph1Kg8VYoCqsSQGXvOzisFxKdyXeQIDZHE5yJJsDyIxrh6DYvAGVcjLSdWdULecnKBUxJC0ZASlJiYZQamKObqg1MUcTVAuYloXlJuY1gTlKkZdUO5i1ATB48+HMIB7f+wBHjUwdi46DoJe8xIuCU5tUG2NfG3bjlknepsc5KxBxA8bEPYo+FvjV89Wnuo60R5EjezK8QfboyKoS6JUBXVBVCuCchbVqqAcRR1FUE6ijiooB1FJCEpZVFKCUhSVpKCURCUtiCsK6uHPQ+64/rMPyhMyF70WCwHgxOCjHXwNCn9fjBe9lpjb8PLYdcv66FVZ9KBqKw8/vXoN62+AtPPhcHjq8xOsar6yXAwUA8VAqgb+AEqzClcpkwbAAAAAAElFTkSuQmCC"}}]);