(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6103a5e8"],{"0385":function(t,i,s){"use strict";s("15c1")},"0e15":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAACFQTFRFAAAAmZmZmZmZmpqamZmZmJiYmpqamZmZmZmZmZmZmZmZj90NQwAAAAp0Uk5TAAV9fqChrq/y85vAgSoAAACVSURBVCjPY2AgAzBPFYAxGT0UgCTnqkSYgNiqCUCSZdUyqBLGrFUBECoRpgAiBaPhMjCGGFwvhIXQCmUiFEDYSAogSpAVgJQsr0JSAFaCooCBQXzVqkIGfAKMVatWLRdAUQA0tBBFQaE4shIQhxHJXqClhSBRuMViYNUIJRjeRw8gjCBkRQ5kB2zRwDwFEVGRBuRENQB0ZkRoxWocxwAAAABJRU5ErkJggg=="},"15c1":function(t,i,s){},"42e0":function(t,i,s){"use strict";s("efdf")},"5f01":function(t,i,s){"use strict";var e=function(){var t=this,i=t._self._c;return i("transition",{attrs:{name:"fade"}},[t.status?i("div",{staticClass:"mask"},[i("div",{staticClass:"modal"},[i("div",{staticClass:"body"},[i("div",{staticClass:"top"},[i("div",{staticClass:"btn_default",on:{click:t.cancel}},[t._v("取消")])]),i("div",{staticClass:"item"},[i("div",{staticClass:"captcha"},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.captcha.img,expression:"captcha.img"}],attrs:{src:t.captcha.img},on:{click:t.getCaptcha}})])]),i("div",{staticClass:"item"},[i("div",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.captcha,expression:"form.captcha"}],staticClass:"input-text",attrs:{type:"text",placeholder:"请输入图中字符"},domProps:{value:t.form.captcha},on:{input:function(i){i.target.composing||t.$set(t.form,"captcha",i.target.value)}}})])])]),i("div",{staticClass:"bottom"},[i("div",{staticClass:"btn_primary",class:{active:t.form.captcha},on:{click:t.change}},[t._v(" 确认 ")])])])]):t._e()])},a=[],o={props:["status","reStatus"],data(){return{captcha:{key:null,img:null},form:{captcha:""}}},mounted(){this.getCaptcha()},watch:{reStatus(){this.form.captcha=null,this.getCaptcha()}},methods:{getCaptcha(){this.$api.Other.Captcha().then(t=>{this.captcha=t.data})},cancel(){this.$emit("cancel",!0)},change(){""!==this.form.captcha.trim()&&this.$emit("change",this.form.captcha,this.captcha)}}},c=o,n=(s("f0ca"),s("2877")),r=Object(n["a"])(c,e,a,!1,null,"22cab0f2",null);i["a"]=r.exports},"617f":function(t,i,s){},"8add":function(t,i,s){"use strict";var e=function(){var t=this,i=t._self._c;return t.status?i("div",{staticClass:"box"},[i("captcha-dialog",{attrs:{status:t.openmask,reStatus:t.reCaptcha},on:{change:t.sendSms,cancel:t.qx}}),i("div",{staticClass:"sms-login-form"},[i("div",{staticClass:"sms-login-title"},[t._v("输入短信验证码")]),i("div",{staticClass:"item"},[i("div",{staticClass:"text"},[t._v(" 验证码已发送至 "),i("span",{staticClass:"value"},[t._v(t._s(t.mobile))])]),i("div",{staticClass:"buttons"},[i("span",{staticClass:"send-sms-button",on:{click:function(i){return t.openDialog()}}},[t.sms.loading?[t._v(" "+t._s(t.sms.current)+"s ")]:[t._v("重新发送")]],2)])]),i("div",{staticClass:"item"},[i("div",{staticClass:"name"},[t._v("验证码")]),i("div",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.sms,expression:"form.sms"}],staticClass:"input-text",attrs:{type:"number",placeholder:"请输入短信验证码"},domProps:{value:t.form.sms},on:{input:function(i){i.target.composing||t.$set(t.form,"sms",i.target.value)}}}),i("img",{directives:[{name:"show",rawName:"v-show",value:t.form.sms,expression:"form.sms"}],staticStyle:{width:"16px",height:"16px"},attrs:{src:s("0e15")},on:{click:function(i){return t.clearSms()}}})])])]),i("div",{staticClass:"login-button-box"},[i("div",{staticClass:"btn-confirm",class:{active:t.form.sms},on:{click:t.confirm}},[t._v(" "+t._s(t.text)+" ")])])],1):t._e()},a=[],o=s("5f01"),c={components:{CaptchaDialog:o["a"]},props:["mobile","status","text","scene"],data(){return{interval:null,openmask:!1,captcha:{key:null,img:null},form:{sms:"",captcha:""},sms:{loading:!1,max:120,current:0},reCaptcha:!1}},beforeDestroy(){clearInterval(this.interval)},mounted(){this.sms.loading=!0,this.sms.current=this.sms.max,this.interval=setInterval(()=>{this.sms.current<=1?(this.sms.loading=!1,clearInterval(this.interval)):this.sms.current--},1e3)},methods:{goBack(){this.$emit("cancel",!0)},openDialog(){this.sms.loading||(this.form.captcha=null,this.openmask=!0)},qx(){this.openmask=!1},sendSms(t,i){this.form.captcha=t,this.captcha=i,this.$api.Other.SendSms({mobile:this.mobile,image_key:this.captcha.key,image_captcha:this.form.captcha,scene:this.scene}).then(()=>{this.sms.loading=!0,this.sms.current=this.sms.max,this.interval=setInterval(()=>{this.sms.current<=1?(this.sms.loading=!1,clearInterval(this.interval)):this.sms.current--},1e3),this.openmask=!1}).catch(t=>{this.reCaptcha=!this.reCaptcha,this.$message.error(t.message)})},getCaptcha(){this.$api.Other.Captcha().then(t=>{this.captcha=t.data})},clearSms(){this.form.sms=null},confirm(){""!==this.form.sms.trim()?this.$emit("change",this.form.sms):this.$message.error("请输入短信验证码")}}},n=c,r=(s("fe73"),s("2877")),l=Object(r["a"])(n,e,a,!1,null,"2c4375c0",null);i["a"]=l.exports},"9a06":function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAADQlJREFUeNrtnVtMHNcZx7dN0latEjdqorwkktVIrSr1IZItpU0rFbCxAZubEzAG37k4YDs2wSZRn0IvUqXKfkjyVqet+lDTRGoemuah4WYMu6y5LLCAgfXaTitVEYEmMWF35swsp983u7Psnt3ZM7M7l13HI/0Ee853zvf9/2dm9jKz4HLl6da9SB99/WO6ozsoN712J9LTfSfS231H9nTflgMX78hr8PsG/JSR7ruRDaXtrhxQYiBWGQNjlTlgLteDLfN2NkAfuxiU94OZly7elnxgaAR+0iiyTiSGaHt3dC6fMjfkwFwPHIfttSDdBga1AENgjHQBTEuPHCPX9iiYS8kJubGGr5brlH6t665cDnt4L5gUuhAEU4JyDEmhK0bcyCCLZJDYuPh8CX1Qw0U4ZXXdpeVY233rex2lD4EJjReCEX9Xgsl5hh9rxFrvL+Nvy81dQTnAM+DVWwzBZLZiZQU2Xm1n52Pb+fnlANZc8Atx4S79adftiC/F2AKhKxjxoYaCM75riT7xajBy5dWgHOkEIVqwgjttRk9+1ABcQU0FYX5nQK4GVjsDIEAlV7MCHHjx5uRfRW15a3wbpY9AkZfP35I3z0PB6ejUyXmLyDk/aOsMSpdRa16Zf/4O3Q57h/e8heblGV7UnB+nnH/TnecC8sq5ZYlqEmDQ6mfaVcGG57Mlv7yC2p19sr1NS6Ggda4B9y/r6IEze/4t2nBuWRZfWZJonGWbWWJwIL/iwS25wVbzMSEUEEkRzhhylkGrn2us1ri8yS9HXoEd0hbzzy3TUkgqnk0j8KsMeoLeWGr+mSDdeWZJWgeowmIUtpgzDLmKU/Ow8+Zh/nX0yJqXmjfpdki6Ei/GTBhBtmNmfvAIvTL9TRZM7D0NCRJRk542Gb3z5mt+9MrUN2tnliKXMxZzk4Ukw4uPt3PGFVB+WITLpph/elGu7liUNjtg4i0Ig6QLtcCOnCmA/OAZepfbqQc+AYTJVrUTRdvbY/AL5BVOMiAJIOr904uk/fQyfR6u6z5ZN0+/gZydok+2L5CfnF6MtHcsyu9DnGB+/mz0S6ttuXyK2rFA3gFhVBNIlkSm2MR47jwqSt89EPJG29K9J4zsOLCn9+DYnPPnqB92iCvZmX9TegEmjWQuIlroy/B7IvrjOEJvyh/Bnv501juQP/RMx4LUl3V+Ljr0g4fopeHLiO3z0jQ7cQrzMRb0IjGkj1OE3ZTffIPSr+d8SfRd+tDLN+W3DOfP0G9Y/zyZNnR5s2NBbo5PnoZTDLx2Lqohscft8+RNs9/HtC/Ib+vNzyMb/XA6b9a/x8yTwKk0E9rCguS24mJ40SB9GEz2OKULPUVv+U9g82Jj2xyhiDq4zShzDLH2+Hwa/W3z8KS5TL9v2VW7AH0WFvieZn6m3Wz9bfNyI/emKUjoT5nAJk7NSxcsv3S6ELnonD7iz3jzV8usXNEKgTzUCVt1oice9v7/nVz81PKbaJvG1h5rnZM+azVQv5n6T4HHGU4/cm/SYD8HNpne+DTtsAC/tet6Ruuc+LuMOizUjx6nN3+Cbmv1S6EWCHSC9kX6Q7sWoMVPf+SUTvQYvU5dgDnSYnSy5hgmFPax3ZdUW/zSf3KtO1v9bXNyS7qChtQJm2dtQhUwJ//B7gU46Sd/ZA20Sz96nfLEBB3SSeg8mRDIPua1a8Vx4/3ySdsXYJa08uq0UL+EnseLOTEt7FeCZhhmbWJe+rndC3BiVvpFSh026kfPE/YG6dIJSMiiFnLCJOLJmfY2P33W7gVonRZ+wK3XQv3N4PnW3jBDfCdMTGSIWUk8MkO/Y/spCL64d2KWEMd0g+eJhUQSO4+zTKeHnTQlZkYLMcq0CIciGXXqzj6o2aPUwOqwQT96jt7jq4GdWgn0IzIYGDtD/uzUAkDuv+SuPXv9x2bpDtcxn9h0DAYlEg+II3IgGvDjjvukIqcW4Oi0VJyuTtv0g/dQhPirNB3J6O3njUspSPrU6bu7sQbH9M9KPbAApPcoBGcHiaG3PbkfxHucXwDicUo/eo+HoUdtOAKdifAnyq7Q+PzT0j+cXoCjPukD5/QTj+uIjwSOTEGDHajJp/AQld49Pki/5fQCYA1Yi936o49JABdg7TA80MPWZERBq197XHz8UBGlD+fN99sm6CNwJFyzT398AdZcMNGG3gUwB/J500zoaVeebQ03Qs9AbV/Y6QV67zo8KcoARZps4Mgk6XTl6XZ4QrjQZJMPTVHPZVfTJJHtSyr9t/xD+s18XQB8PmiaIp/Y5wdRFmCD7WjkMcHAa4/RNCW97srz7bBP+qVV+lP8AO9djRNkLWWgNYRqfPS7+b4AjbP0cag1bIcnhybENResROBQ9IHV/M1VIBvU+p4dnqD3roYJ4ok3jjNotXPiGmIkxUyK9YWyAA2T4kHT9aeLA+8hGeltSBhkDURuvE4fL5QFwNMQ1my5L+A9HG5SDy/woAZ64w7eEOddBbYdmiDzpunXigfvXWBOE0AtZVy8WmgLcHCcXLXcF/DeVTdJd9TDg/o0AfU60THu94W2AFizifrTgt67qkboo7CHRuoNDDQKzP+bRHF1U+tP1t8gr+TN3n5DOHdoIvm7XFizlZ4AkaqR2L2wdTdEX50XVoSLwCDqY5zEvyeF98jXj0v/hAKW8mUBoMblunHxg8T791/yiu+Ypj8d4PlWAePkkrkJ2HnIJ7Ve+j18I1Y3Lr2nttePZ7hT2C7zJ4R9at31XvHdOrhvsxKOBqzZPP1p+sFz19ZqC/thxSn85CBGGROS0WzfAhJ/ATEbiXGwF0w6+ach8VszUMNUvP6oxg0w/wuz9aeM9ybcmFUOt8lBh/QidCSSMuGYmERqvNoXjddqT6TuBrwUc2h7aSz868RabNMPXpcn3poYPQrI0IvKpKkT88l2HBTjEWUY+6Ltp54x8SUwRU6u3x796HXq3uAlLQc8AjWCOmFKO4tWnFqUV/zswBi17SLNgRn6NBj2OWuMXfrR6zRPRnQbFBWKBokxBMuBw/HvVWNfPmX3EVDlp0+B3vfT12WdfvS4bkLjL7YfGBN7MajWIthiasfEvzr6F8shN2i+mlKXlfrHSK9mPXCYVNS6IVgv6uTuLPCIBF+aOv0yFGsADSQ7Dcb113jk8ox7RK1b9NdgYOIgk0iazyM4flecumEt3HpN0S/6uUf8AbfYWGNi0owFjYo/zs048qfaMfJOTkcA1GCX3mrwlv/yDN6OV7uFQPUoDNDCHWM0N2rc4oTmExL31CEfA0GbSJUnfCybOXZD7ho3GTdcezb6wVNdf6pA2bPcpDlXc/VQFf15q8otlRk5Z4OYt2Hc5pY4cRNqfsvIc0qVWyhTctugM7qz6fxjHcpRAB8PQGHTVTGT4oww8Nr1jo8yB0b21IwKe6qvhZ6Bz2O+jXXg50c1o+S5ylFyvGpUvFo9Koa08it9EIOxNaNfPqd89gRz4FzKnDg35IA4f8Y6jdbP0Q/5fLr3fnWrdodeqHLjR6YCrYzBJuK1a/VzYYQVcn7YISK1o1J2/4UDDtMrlWkEPcAA4GHWrxAqB+89UTkSXt1/XaDpUJOk9I3EYONV1OJij3XPW2D50Tv0MKfXyJWjYjVMtskr5gEpi7BZOSya8y9P9o0Il/fBpLmiFmdVfF7lB89Me6e4A+6f33dd9O4bhomHE5IMh5PhtvNgxmnF5Xn+/eAVembq2/UyT3h7xXB4BaBbCApqYRW6CSfBCtSKSyUv86+gV9Z8hDtCdkKidbaAimvhZHQK57frHJ8n+cuvCevokaUfXFWMSKWQVCxXEqoIDGENBA2S41Rh/PnyJz96gt7Y8ulh2fXQofJhIVIGycu4xYUNGGhsXP7kBy+GRXv/jwwmhMRiGRReNhRORi1Oq51Fbxwbj7kdzq94YLf5iaejvUPC+l4oJhOsQK1+3jgtnMqP2m077WhtpfCkA8Wu7NVhxH3GSqnVT7i6T0eD4e1QkFctbs9gMlrthhmKYjSPBfm9qDmv7ibGNx5lQ+TyniFhM2eh+QpoQ42mv8kyc9s7IFaXDoZXAXqfsYraCuLe+iL4BLB0ULiyZ0CIlA5A8UZRRRuNNzpOR37Y6yOopSjXTzWd2Pb0h14oHRCmd4OQTKjCdzuEVn6svQQ0uAp5w0uCuwbDzSAoYJZhu/qjWLgoAazZyTu3zV8IuCYKwhp3Dwh+1UAuAzH67QFr2z0gNhq+fltQG9yYVDwgVICxvSUDQqgkwYASBradNUwrTou0cVAD1oI1OXqbpBPb7o/otpJ+0lLSLwyBGVJJHxiSCdY8rX7eOMzVH8acLViD68Hmcj3/4dpjRX3C/l0DwqXiPsFX0idEisG8TLBGZ4iL4Jy7BsglzIG5HjjO2X4G394s+tfGzqK+cFPxgNhTjKeJvrCnuD8cAEPXYIE24LGM4O/Yhn1KjHJKEXtwLM6Bc+Wrzv8DFeMO6pMFmfMAAAAASUVORK5CYII="},a27c:function(t,i,s){},a563:function(t,i,s){"use strict";s("a27c")},b1ef:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAGxQTFRFAAAAAP//M7P/RKr/NqH/PKj/Pqj5Pab7PKb7Par8PKj5Pqf8Paj6PKj7O6f7PKf5PKb6PKj6PKj7PKj7PKj7PKf6PKf6O6f6PKf6PKf7PKf7PKf6PKf7O6f6PKf7PKj7PKf6O6f6PKf7PKf6hGtaNQAAACN0Uk5TAAEKDxMmKT9IS1VjaYSFiI2Nrbu+v8nX1+fq7e7x8fL4+fzsjIJEAAAAqUlEQVQ4y+3VyxbCIAwE0LGKWt9ifVdE+f9/dEErbUllVq4667sgySEBlDYuEaMVoEpHpFTQjoqG4aCBIzPAP0C7HM8fBLQ5gE0a2hwA1kno3fSegpW7xsW8DpcfLsD3DKN9vwvwDAC7XhfgcxKk4BpvPGa1lFyz6qKSomu1x8ut6Np99FJ0nYbXMnbdyXgpuGiERSa7eNanxeo2fNcvpBcpvZrpZc+ejw8TAcavjdEDuAAAAABJRU5ErkJggg=="},bd01:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},[i("captcha-dialog",{attrs:{status:t.openmask,reStatus:t.reCaptcha},on:{change:t.sendSms,cancel:t.qx}}),i("div",{staticClass:"navheader borderbox",staticStyle:{"border-bottom":"none"}},[i("img",{staticClass:"back",attrs:{src:s("f508")},on:{click:function(i){return t.goBack()}}})]),t.confirmDialog?t._e():[i("div",{staticClass:"sms-login-form"},[i("div",{staticClass:"sms-login-title"},[t._v("登录/注册")]),i("div",{staticClass:"item"},[i("div",{staticClass:"name"},[t._v("手机号")]),i("div",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.mobile,expression:"form.mobile"}],staticClass:"input-text",attrs:{type:"number",placeholder:"请输入手机号码"},domProps:{value:t.form.mobile},on:{input:function(i){i.target.composing||t.$set(t.form,"mobile",i.target.value)}}}),i("img",{directives:[{name:"show",rawName:"v-show",value:t.form.mobile,expression:"form.mobile"}],staticStyle:{width:"16px",height:"16px"},attrs:{src:s("0e15")},on:{click:function(i){return t.clearMobile()}}})])])]),i("div",{staticClass:"box border-box mt-15 pl-60 pr-60"},[i("div",{staticClass:"btn-confirm",class:{active:t.form.mobile},on:{click:t.openDialog}},[t._v(" 获取短信验证码 ")])]),i("div",{staticClass:"login-button-box"},[i("span",{staticClass:"login-password-way",on:{click:t.goLoginPasswordPage}},[t._v("使用密码登录")])]),i("protocol",{on:{agree:t.protocolAgree}}),t.config?i("div",{staticClass:"login-other-way"},[i("div",{staticClass:"socialite-box"},[t.isInH5Wechat||1!==t.config.socialites.qq?t._e():i("div",{staticClass:"socialite-login-item",on:{click:function(i){return t.socialiteLogin("qq")}}},[i("img",{attrs:{src:s("9a06")}})]),t.isInH5Wechat&&1===t.config.socialites.wechat_oauth?i("div",{staticClass:"socialite-login-item",on:{click:function(i){return t.h5WorkWeixinLogin()}}},[i("img",{attrs:{src:s("df80")}})]):t._e()])]):t._e()],t.confirmDialog?[i("confirm-login",{attrs:{text:"登录/注册",scene:"login",status:t.confirmDialog,mobile:t.form.mobile},on:{change:t.loginHandler,cancel:t.loginCancel}})]:t._e(),t.visible?i("show-model",{attrs:{title:t.modelTitle,text:t.modelText,confirmText:t.confirmText},on:{change:t.confirmModel,cancel:t.cancelModel}}):t._e()],2)},a=[],o=(s("14d9"),function(){var t=this,i=t._self._c;return i("div",{staticClass:"protocol",class:{active:"wechat"===t.type},on:{click:t.agreeHandle}},[t.agree?i("div",{staticClass:"checkbox-dot"},[i("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:s("b1ef")}})]):i("div",{staticClass:"checkbox-circle"}),i("div",{staticClass:"protocol-text"},[t._v(" 勾选同意 "),i("span",{staticClass:"href",on:{click:function(i){return t.openPage(t.config.user_protocol)}}},[t._v("《用户协议》")]),t._v(" 和 "),i("span",{staticClass:"href",on:{click:function(i){return t.openPage(t.config.user_private_protocol)}}},[t._v("《隐私协议》")])])])}),c=[],n=s("2f62"),r={props:["action","type"],data(){return{agree:!1}},watch:{agree(){this.$emit("agree",this.agree)}},computed:{...Object(n["c"])(["config"])},methods:{agreeHandle(){this.agree=!this.agree},openPage(t){window.open(t)}}},l=r,h=(s("42e0"),s("2877")),A=Object(h["a"])(l,o,c,!1,null,"01391ca1",null),m=A.exports,g=s("8add"),u=s("5f01"),d=s("357c"),f={components:{Protocol:m,ConfirmLogin:g["a"],CaptchaDialog:u["a"],ShowModel:d["a"]},data(){return{loading:!1,url:this.$route.query.url||null,captcha:{key:null,img:null},form:{mobile:"",sms:"",captcha:""},sms:{loading:!1,max:120,current:0},wechatMini:{userInfo:null,step:1},agreeProtocol:!1,confirmDialog:!1,openmask:!1,reCaptcha:!1,visible:!1,modelTitle:null,modelText:null,confirmText:null}},computed:{...Object(n["c"])(["config"]),isInH5Wechat(){return this.$utils.isWechat()}},mounted(){this.getCaptcha()},methods:{...Object(n["b"])(["submitLogin","logout"]),cancelModel(){this.logout(),this.visible=!1,this.$router.replace({name:"Me"})},confirmModel(){this.visible=!1,"实名认证"===this.modelTitle?this.goFaceVerify():"绑定手机号"===this.modelTitle&&this.$router.push({name:"BindMobile"})},protocolAgree(t){this.agreeProtocol=t},loginCancel(){this.confirmDialog=!1},clearMobile(){this.form.mobile=null},openDialog(){this.sms.loading||""!==this.form.mobile.trim()&&(this.$utils.isChinaMobilePhone(this.form.mobile)?!1!==this.agreeProtocol?(this.form.captcha=null,this.openmask=!0):this.$message.error("请同意协议"):this.$message.error("请输入正确的手机号"))},qx(){this.openmask=!1},getCaptcha(){this.$api.Other.Captcha().then(t=>{this.captcha=t.data})},sendSms(t,i){this.form.captcha=t,this.captcha=i,this.form.mobile&&this.$api.Other.SendSms({mobile:this.form.mobile,image_key:this.captcha.key,image_captcha:this.form.captcha,scene:"login"}).then(()=>{this.openmask=!1,this.confirmDialog=!0}).catch(t=>{this.reCaptcha=!this.reCaptcha,this.$message.error(t.message)})},loginHandler(t){this.loading||(this.form.sms=t,this.$api.Auth.SmsLogin({mobile:this.form.mobile,mobile_code:this.form.sms,msv:""}).then(t=>{this.loading=!1,this.handler(t.data.token)}).catch(t=>{this.loading=!1,this.$message.error(t.message)}))},handler(t){this.$utils.saveToken(t),this.$api.User.Detail().then(t=>{this.submitLogin(t.data),1===this.config.member.enabled_mobile_bind_alert&&1!==t.data.is_bind_mobile?(this.modelTitle="绑定手机号",this.modelText="登录前请绑定手机号",this.confirmText="立即绑定",this.visible=!0):!1===t.data.is_face_verify&&!0===this.config.member.enabled_face_verify?(this.modelTitle="实名认证",this.modelText="登录前请完成实名认证",this.confirmText="立即认证",this.visible=!0):setTimeout(()=>{this.$router.back()},500)}).catch(t=>{401===t.code?(this.$utils.clearToken(),window.location.href=this.url):this.$message.error(t.message)})},goFaceVerify(){let t=this.$utils.getHost()+"/auth/faceSuccess";this.$api.Member.TecentFaceVerify({s_url:t}).then(t=>{this.$utils.saveBizToken(t.data.biz_token),this.$utils.saveRuleId(t.data.rule_id),window.location.href=t.data.url}).catch(t=>{this.$message.error(t.message||"无法发起实名认证")})},goLoginPasswordPage(){this.$router.push({name:"LoginPassword",query:{url:this.url}})},socialiteLogin(t){if(!this.agreeProtocol)return void this.$message.error("请先同意协议");let i=this.url,s=encodeURIComponent(this.$utils.removeTokenParams(i)),e=encodeURIComponent(this.$utils.getHost()+"/login-error");window.location.href=this.config.url+"/api/v3/auth/login/socialite/"+t+"?s_url="+s+"&f_url="+e+"&action=login"},h5WorkWeixinLogin(){if(!this.agreeProtocol)return void this.$message.error("请先同意协议");let t=this.url,i=encodeURIComponent(this.$utils.removeTokenParams(t)),s=encodeURIComponent(this.$utils.getHost()+"/login-error");window.location.href=this.config.url+"/api/v3/auth/login/wechat/oauth?s_url="+i+"&f_url="+s+"&action=login"}}},p=f,v=(s("0385"),s("a563"),Object(h["a"])(p,e,a,!1,null,"17e421df",null));i["default"]=v.exports},d8e2:function(t,i,s){},df80:function(t,i){t.exports="data:image/png;base64,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"},efdf:function(t,i,s){},f0ca:function(t,i,s){"use strict";s("d8e2")},f508:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAAEi6oPRAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACz+WTVAAADyUlEQVR4Ae2cPa4TMRCAXxIkoERCAgk6ChSlgSNQAKJCQkrCAZCQKDlBWm7wKF6fn4bQ8Ro4Ak1ugKCDEoSUhJlHRjIre3dsz2zsxSs9Nrv2zH7+1tn1/oSTk5hpOp2+qo0fj8d7nQr92rSuwkYeCmRXpIAW5o1MwRX+Q5mO/YUKGzU6Yi9WdyBBtXnRTcovYZW4A8uwF9+6mtFzFVTXTyaTn/v9/gqsv7xarX5Xy1kHEkrS7/cf25Jg0kYiM8lisTivktBybSJukloinyTORL5JMJFVNu6dXq/3q84JBpuTNRHuHUyGZGblus9O2TBQeLTb7T4g2XK5vFqXBMucibDQJ1ltIp9kjYm4yayyMdiccO/RDoAv7j2zrHzO1wCrF4U0j44fGDsYDG7N5/OvnDyXOJV86hAIHDouwrAXc2EwQMwQgRA8gvgcFCkuGkgKJBpIGiQYSAvEGwhAvkNHvUaBoX2E4l1z1jEfg+H8+NxMAnBrc1nqs3enpnMuAXBP5FS/ae4NRAm1wIKBtMCigaTBxICkwMSBbGBwwaK2HdpemRcDxQDXgNrXES687gLEm9Fo9Gw2m+24QOJjatyweZ7bbDZbWMVuOHv4wW2hCXOI+cKNxXpsck7SKkzI0EQMSAJGzJAUjAiQJEw0kDRMFJAGTDCQFkwQkCaMN5A2jBdQGzBsIDhR3oTK3zAAp5Aj8N/I5n9Z5zK4jn9qpgKgf5bNstjP7FOH9l0PaggbCAPagPICagPKG0gbKghIEyoYSAsqCkgDKhpIGkoESBJKDEgKShTIBgUPXh7As45PWMaZWOcyTiKqg49W8eRLy9vt9iN95szFgXCjh+e99BD5jANS6hQDxUAxUAwUA10wID700JZyuL/wDrZjvqx1Bo+/XmhsOxtBKAafysMfvgVpm+6DpM+2gph1Kg8VYoCqsSQGXvOzisFxKdyXeQIDZHE5yJJsDyIxrh6DYvAGVcjLSdWdULecnKBUxJC0ZASlJiYZQamKObqg1MUcTVAuYloXlJuY1gTlKkZdUO5i1ATB48+HMIB7f+wBHjUwdi46DoJe8xIuCU5tUG2NfG3bjlknepsc5KxBxA8bEPYo+FvjV89Wnuo60R5EjezK8QfboyKoS6JUBXVBVCuCchbVqqAcRR1FUE6ijiooB1FJCEpZVFKCUhSVpKCURCUtiCsK6uHPQ+64/rMPyhMyF70WCwHgxOCjHXwNCn9fjBe9lpjb8PLYdcv66FVZ9KBqKw8/vXoN62+AtPPhcHjq8xOsar6yXAwUA8VAqgb+AEqzClcpkwbAAAAAAElFTkSuQmCC"},fe73:function(t,i,s){"use strict";s("617f")}}]);