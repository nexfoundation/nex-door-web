(function(t){function e(e){for(var s,o,i=e[0],u=e[1],c=e[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;n.push([1,"chunk-vendors"]),r()})({0:function(t,e){},"06c9":function(t,e,r){},1:function(t,e,r){t.exports=r("56d7")},"11be":function(t,e,r){"use strict";r("c10d")},"292d":function(t,e,r){},2980:function(t,e,r){"use strict";r("6aa5")},3270:function(t,e,r){"use strict";r("6940")},"354f":function(t,e,r){},"423c":function(t,e,r){t.exports=r.p+"img/headerimg.0177b56b.png"},5435:function(t,e,r){"use strict";r("fe26")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("a026"),a=r("8c4f"),n=r("00bd"),o=r("19b2"),i={Auth:{region:"eu-west-1",userPoolId:"eu-west-1_ctaTHezHj",userPoolWebClientId:"786nik0mrki48tkfsa7rrl9kto",mandatorySignIn:!1},API:{endpoints:[{name:"ServiceEndpoint",endpoint:"https://9vvzopbgn3.execute-api.eu-west-1.amazonaws.com/prod"}]}},u=i;n["Auth"].configure(i);var c=r("5f5b"),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth"},["signIn"===t.formType?e("div",[e("sign-in")],1):t._e(),"signUp"===t.formType?e("div",[e("sign-up",t._b({},"sign-up",{toggleForm:t.toggleForm},!1))],1):t._e(),"forgotPassword"===t.formType?e("div",[e("forgot-password",t._b({},"forgot-password",{toggleForm:t.toggleForm},!1))],1):t._e(),e("div",{staticClass:"link-container"},[e("p",{staticClass:"toggleButton",attrs:{v:""},on:{click:function(e){return t.toggleForm("signIn"===t.formType?"signUp":"signIn")}}},[t._v(t._s(t.formTitle))]),"signIn"==t.formType?e("p",{staticClass:"toggleButton",on:{click:function(e){return t.toggleForm("forgotPassword")}}},[t._v("忘記密碼？")]):t._e()])])},p=[],m=function(){var t=this,e=t._self._c;return e("div",[t.errorMessage?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.errorMessage))]):t._e(),e("div",{staticClass:"form-container"},[e("h1",{staticClass:"heading"},[t._v("登入 Sign In")]),e("div",{staticClass:"form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"input",attrs:{placeholder:"用戶名稱 (Username / Email)"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{placeholder:"密碼 (Password)",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),e("div",{staticClass:"button",on:{click:t.signIn}},[e("p",[t._v("登入 (Sign In)")])])])])])},d=[],f=(r("96cf"),r("3b8d")),v={name:"sign-in",methods:{signIn:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=this.form.username&&""!=this.form.password){t.next=3;break}return this.errorMessage="請填寫用戶名稱或密碼！",t.abrupt("return");case 3:return t.prev=3,t.next=6,this.$Amplify.Auth.signIn(this.form.username,this.form.password);case 6:e=t.sent,this.$store.dispatch("setIsAuthenticated",!0),this.$store.dispatch("setUser",e),this.$router.push("/"),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](3),console.log("error: ",t.t0),this.errorMessage=t.t0;case 16:case"end":return t.stop()}}),t,this,[[3,12]])})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{form:{username:"",password:""},errorMessage:void 0}}},h=v,g=(r("a628"),r("2877")),b=Object(g["a"])(h,m,d,!1,null,"99c3d8d8",null),_=b.exports,C=(r("c5f6"),function(){var t=this,e=t._self._c;return e("div",[t.errorMessage?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.errorMessage))]):t._e(),e("div",{staticClass:"form-container"},[e("h1",{staticClass:"heading"},[t._v("註冊 Sign Up")]),t.phase===Number(0)?e("div",{staticClass:"form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.attributes.email,expression:"form.attributes.email"}],staticClass:"input",attrs:{placeholder:"信箱 (Email)"},domProps:{value:t.form.attributes.email},on:{input:function(e){e.target.composing||t.$set(t.form.attributes,"email",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"input",attrs:{placeholder:"用戶名稱 (Username)"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{placeholder:"密碼 (Password)",type:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),e("div",{staticClass:"button",on:{click:t.signUp}},[e("p",[t._v("註冊 (Sign Up)")])])]):t._e(),t.phase===Number(1)?e("div",{staticClass:"form"},[e("p",[t._v("(請確認您的 Email 或是簡訊的 OTP 驗證碼)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.authCode,expression:"authCode"}],staticClass:"input",attrs:{placeholder:"請輸入臨時性驗證碼 (Authentication code)"},domProps:{value:t.authCode},on:{input:function(e){e.target.composing||(t.authCode=e.target.value)}}}),e("div",{staticClass:"button",on:{click:t.confirmSignUp}},[e("p",[t._v("確認 (Confirm Sign Up)")])])]):t._e()])])}),w=[],y={props:["toggleForm"],name:"sign-up",methods:{signUp:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.signUp(this.form);case 3:this.phase=1,console.log("user successfully signed up!"),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("error signing up...",t.t0),this.errorMessage=t.t0;case 11:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),confirmSignUp:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.confirmSignUp(this.form.username,this.authCode);case 3:this.toggleForm("signIn"),console.log("user successfully signed up!"),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("error signing up...",t.t0),this.errorMessage=t.t0;case 11:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{form:{username:"",password:"",attributes:{email:"",phone_number:""}},authCode:"",phase:0,errorMessage:void 0}}},x=y,k=(r("3270"),Object(g["a"])(x,C,w,!1,null,"2c9f35a0",null)),A=k.exports,P=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"form-container"},[e("h1",{staticClass:"heading"},[t._v("Reset Password")]),"resetPassword"===t.formState?e("div",{staticClass:"form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"input",attrs:{placeholder:"Username"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}}),e("div",{staticClass:"button",on:{click:t.forgotPassword}},[e("p",[t._v("Send verification code")])])]):t._e(),"resetPasswordConfirm"===t.formState?e("div",{staticClass:"form"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.authCode,expression:"form.authCode"}],staticClass:"input",attrs:{placeholder:"Verification Code"},domProps:{value:t.form.authCode},on:{input:function(e){e.target.composing||t.$set(t.form,"authCode",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"input",attrs:{type:"password",placeholder:"New Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),e("div",{staticClass:"button",on:{click:t.forgotPasswordSubmit}},[e("p",[t._v("Set new password")])])]):t._e()])])},j=[],I={username:"",password:"",authCode:""},S={name:"forgot-password",props:["toggleForm"],methods:{forgotPassword:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.forgotPassword(this.form.username);case 3:this.formState="resetPasswordConfirm",t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log("error: ",t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}(),forgotPasswordSubmit:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.forgotPasswordSubmit(this.form.username,this.form.authCode,this.form.password);case 3:this.form=I,alert("Successfully reset password1"),this.toggleForm("signIn"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("error: ",t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{formState:"resetPassword",form:I}}},U=S,O=(r("63f3"),Object(g["a"])(U,P,j,!1,null,"50646c8a",null)),$=O.exports,N={name:"auth",data:function(){return{formType:"signIn",formTitle:"還沒註冊？"}},components:{SignIn:_,SignUp:A,ForgotPassword:$},methods:{toggleForm:function(t){this.formType=t,"signIn"===t&&(this.formTitle="還沒註冊？"),"signUp"===t&&(this.formTitle="已經有一個帳號？")}}},T=N,M=(r("11be"),Object(g["a"])(T,l,p,!1,null,"6806ef75",null)),E=M.exports,R=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"header"},[e("img",{staticClass:"header-img",attrs:{src:r("423c")}}),e("router-link",{staticClass:"heading",attrs:{to:"/"}},[t._v("NEX Door")]),e("div",{staticClass:"header-menu"},[e("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Home")]),t.isAuthenticated?e("p",{staticClass:"link",on:{click:t.signOut}},[t._v("Sign Out")]):t._e(),t.isAuthenticated?t._e():e("router-link",{staticClass:"link",attrs:{to:"/auth"}},[t._v("Sign In")]),t.isAuthenticated?e("router-link",{staticClass:"link",attrs:{to:"/profile"}},[t._v("Profile")]):t._e(),e("router-link",{staticClass:"link",attrs:{to:"/protected"}},[t._v("Protected Route")])],1)],1),e("router-view"),t._m(0)],1)},F=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"row",attrs:{id:"nex-footer"}},[e("div",{staticClass:"col-md-8"},[e("p",{staticClass:"footer-text"},[t._v("NEX Work 為非營利服務平台，由美國 NEX Foundation 建置，2020 年正式營運。"),e("br"),t._v("NEX Foundation 為美國註冊商標，屬 NEX Foundation 所有。 其餘各商標均為個別原始公司所有，NEX Foundation 與各該公司並無代理權限或合作關係。"),e("br"),e("br"),t._v("Copyright © 2020")])]),e("div",{staticClass:"col-md-4"},[e("a",{attrs:{target:"_blank",href:"https://nexf.org"}},[e("img",{staticClass:"footer-logo",attrs:{src:r("b147"),alt:"NEX Foundation"}})])])])}],B={beforeCreate:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.currentAuthenticatedUser();case 3:e=t.sent,this.$store.dispatch("setIsAuthenticated",!0),this.$store.dispatch("setUser",e),this.$router.push("profile"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("error: ",t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),computed:{isAuthenticated:function(){return this.$store.state.isAuthenticated}},methods:{signOut:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.signOut();case 3:this.$store.dispatch("setIsAuthenticated",!1),this.$store.dispatch("setUser",{}),this.$router.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("error signing out.");case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},name:"app"},W=B,X=(r("2980"),Object(g["a"])(W,R,F,!1,null,"0cac2e61",null)),q=X.exports,H=(r("673e"),r("7f7f"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("h1",[t._v("關於 NEX Door")]),e("span",[t._v("串連世界各地的專家 解決各種疑難雜症")]),e("hr"),t._m(0),e("hr"),e("div",{staticClass:"card-columns"},t._l(t.users,(function(r){return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body",attrs:{set:t.user_attributes=t.getAttribute(r["Attributes"])}},[e("div",{staticClass:"media"},[e("img",{staticClass:"mr-3",attrs:{src:"https://www.gravatar.com/avatar/"+t.user_attributes["picture"]+"?s=80"}}),e("div",{staticClass:"media-body"},[e("h5",{staticClass:"mt-0"},[t._v(t._s(t.user_attributes["name"])+" ")]),t._v("\n                        "+t._s(t.user_attributes["custom:tags"])+"\n                    ")])]),e("hr"),e("p",[e("a",{staticClass:"btn btn-success",attrs:{href:t.user_attributes["custom:calendy_url"],disabled:!t.user_attributes["custom:calendy_url"]}},[t._v("預約")]),t._v("\n                     \n                    "),e("b-button",{attrs:{"data-username":t.user_attributes["name"],"data-userpicture":t.user_attributes["picture"],"data-userid":t.user_attributes["sub"]},on:{click:t.showIntroModal}},[t._v("關於我")])],1),e("p",{staticClass:"card-text",attrs:{id:"about-"+t.user_attributes["sub"]}},[t._v(t._s(t.user_attributes["profile"]))])])])})),0),e("b-modal",{ref:"my-modal",attrs:{id:"modal",title:"關於我"}},[e("div",{staticClass:"media"},[e("img",{staticClass:"mr-3",attrs:{src:"https://www.gravatar.com/avatar/"+t.modalCurrentUser["picture"]+"?s=80"}}),e("div",{staticClass:"media-body"},[e("h5",{staticClass:"mt-0"},[t._v(t._s(t.modalCurrentUser["name"])+" ")])])]),e("hr"),e("pre",{staticClass:"intro"},[t._v(t._s(t.intro))])])],1)}),z=[function(){var t=this,e=t._self._c;return e("blockquote",[e("p",[t._v("NEX Door 是一個非營利線上導師領航平台，連結世界各地菁英，創造團結互助的力量，建立台灣人互助網路。讓台灣人陪著台灣人在國際路上打開第一扇門或衝刺最後一哩路。")]),e("p",[t._v("「今日的路人是明日的引路人」，延續 Give and Take 的精神，讓我們啟動正向迴圈，幫助更多台灣人走向世界，讓回家的路變得更好。")])])}];r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54");function D(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=V(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var s=0,a=function(){};return{s:a,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){i=!0,n=t},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw n}}}}function V(t,e){if(t){if("string"===typeof t)return G(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(t,e):void 0}}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}var J={name:"home",created:function(){this.getData()},data:function(){return{users:void 0,intro:"",modalCurrentUser:{name:"",picture:""}}},methods:{showIntroModal:function(t){var e=t.currentTarget.getAttribute("data-userid");this.modalCurrentUser["name"]=t.currentTarget.getAttribute("data-username"),this.modalCurrentUser["picture"]=t.currentTarget.getAttribute("data-userpicture"),this.intro=document.getElementById("about-"+e).innerHTML,this.$refs["my-modal"].show()},getAttribute:function(t){var e,r={},s=D(t);try{for(s.s();!(e=s.n()).done;){var a=e.value;r[a["Name"]]=a["Value"]}}catch(n){s.e(n)}finally{s.f()}return r},getData:function(){var t=this,e="ServiceEndpoint",r="/query",s={headers:{}};n["API"].get(e,r,s).then((function(e){t.users=e})).catch((function(t){console.log(t.response)}))}}},L=J,Y=(r("7cc8"),Object(g["a"])(L,H,z,!1,null,"165bc368",null)),K=Y.exports,Q=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},Z=[],tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},et=[function(){var t=this,e=t._self._c;return e("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),e("br"),t._v("\n    check out the\n    "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],rt={name:"HelloWorld",props:{msg:String}},st=rt,at=(r("9172"),Object(g["a"])(st,tt,et,!1,null,"b6a59770",null)),nt=at.exports,ot={name:"app",components:{HelloWorld:nt}},it=ot,ut=(r("c65c"),Object(g["a"])(it,Q,Z,!1,null,null,null)),ct=ut.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t.errorMessage?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.errorMessage))]):t._e(),e("h1",[t._v("歡迎回來！")]),e("p",[t._v("在這裡你可以編輯你的個人資料，以讓更多人更加了解你！")]),e("code",[t._v(t._s(t.user_attributes))]),e("div",{attrs:{id:"profile-form"}},[e("form",[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label"},[t._v("用戶名稱 Username")]),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:""},domProps:{value:t.username}})])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label"},[t._v("Email")]),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control-plaintext",attrs:{type:"text",readonly:""},domProps:{value:t.user_attributes["email"]}})])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputName"}},[t._v("名稱 Name (必填)")]),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"Name",required:"required"},domProps:{value:t.user_attributes["name"]}})])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputProfilePhoto"}},[t._v("個人頭像 Photo (Gravatar)")]),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputProfilePhoto",placeholder:"205e460b479e2e5b48aec07710c08d50"},domProps:{value:t.user_attributes["picture"]}}),t._m(0)])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputWebsite"}},[t._v("個人網站 Website")]),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputWebsite",placeholder:"https://example.com"},domProps:{value:t.user_attributes["website"]}})])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputCalendy"}},[t._v("開放其他人向你諮詢 Accept Mentoring")]),e("div",{staticClass:"col-sm-10"},[e("select",{staticClass:"form-control",attrs:{id:"inputAcceptMentoring"}},[e("option",{attrs:{value:"0"},domProps:{selected:0==t.user_attributes["custom:accept_mentoring"]}},[t._v("No")]),e("option",{attrs:{value:"1"},domProps:{selected:1==t.user_attributes["custom:accept_mentoring"]}},[t._v("Yes")])])])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputCalendy"}},[t._v("個人預約連結 (Calendy)")]),e("div",{staticClass:"col-sm-10"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputCalendy",placeholder:"https://calendly.com/<username>"},domProps:{value:t.user_attributes["custom:calendy_url"]}}),t._m(1)])]),e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputCalendy"}},[t._v("諮詢類別 Tags")]),e("div",{staticClass:"col-sm-10"},[e("div",{staticClass:"tag-input"},[e("vue-tags-input",{attrs:{tags:t.tags,"autocomplete-items":t.availableMentoringTags},on:{"tags-changed":function(e){return t.tags=e}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}},[e("template",{slot:"autocomplete-header"},[e("strong",[t._v("選擇你可以提供的諮詢項目")])])],2)],1),t._v("\n                  "+t._s(t.user_attributes["custom:tags"])+"\n                ")])]),e("div",{staticClass:"form-group row"},[e("label",{attrs:{for:"inputProfileBio"}},[t._v("個人簡介 Bio")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user_attributes["profile"],expression:"user_attributes['profile']"}],staticClass:"form-control",attrs:{id:"inputProfileBio",rows:"20"},domProps:{value:t.user_attributes["profile"]},on:{input:function(e){e.target.composing||t.$set(t.user_attributes,"profile",e.target.value)}}})]),e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-sm-10"},[e("button",{staticClass:"btn btn-primary",on:{click:t.updateAttribute}},[t._v("Update")])])])])])])},pt=[function(){var t=this,e=t._self._c;return e("span",{staticClass:"help-block"},[t._v("(輸入 Gravatar 的用戶號碼 - https://www.gravatar.com/avatar/"),e("strong",[t._v("205e460b479e2e5b48aec07710c08d50")]),t._v(" | "),e("a",{attrs:{href:"https://gravatar.com"}},[t._v("免費註冊一個頭像")]),t._v(")")])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"help-block"},[t._v("("),e("a",{attrs:{href:"https://calendly.com/"}},[t._v("前往 Calendy")]),t._v(")")])}],mt=(r("ac6a"),r("c7a0")),dt=r.n(mt),ft={name:"home",components:{VueTagsInput:dt.a},beforeCreate:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.currentAuthenticatedUser();case 3:e=t.sent,r=e.attributes,console.log(r),this.user_attributes=r,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("error: ",t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{user_attributes:void 0,errorMessage:void 0,tag:"",tags:[],availableMentoringTags:["稅務簽證","職涯發展","商業創業","租屋買房","旅行生活","人生相談","興趣分享","設計美學","海外婚姻"]}},computed:{username:function(){return this.$store.state.user.username}},methods:{serializeTags:function(t){var e=[];return t.forEach((function(t){e.push(t["text"])})),e},updateAttribute:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$Amplify.Auth.currentAuthenticatedUser();case 3:return e=t.sent,t.next=6,this.$Amplify.Auth.updateUserAttributes(e,{name:document.getElementById("inputName").value,picture:document.getElementById("inputProfilePhoto").value,profile:document.getElementById("inputProfileBio").value,website:document.getElementById("inputWebsite").value,"custom:accept_mentoring":document.getElementById("inputAcceptMentoring").value,"custom:tags":JSON.stringify(this.serializeTags(this.tags)),"custom:calendy_url":document.getElementById("inputCalendy").value});case 6:return r=t.sent,console.log(r),t.next=10,this.$Amplify.Auth.currentAuthenticatedUser({bypassCache:!0});case 10:e=t.sent,this.$store.dispatch("setUser",e),this.$router.push("/"),t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log("error: ",t.t0),this.errorMessage=t.t0;case 19:case"end":return t.stop()}}),t,this,[[0,15]])})));function e(){return t.apply(this,arguments)}return e}()}},vt=ft,ht=(r("5435"),Object(g["a"])(vt,lt,pt,!1,null,"2d95ff60",null)),gt=ht.exports,bt=r("2f62");s["default"].use(bt["a"]);var _t={setIsAuthenticated:function(t,e){var r=t.commit;r("isAuthenticated",e)},setUser:function(t,e){var r=t.commit;r("setUser",e)}},Ct={isAuthenticated:function(t,e){t.isAuthenticated=e},setUser:function(t,e){t.user=e}},wt=new bt["a"].Store({state:{isAuthenticated:!1,user:{}},actions:_t,mutations:Ct}),yt=wt;n["default"].configure(u),r("845f");var xt=[{path:"/",component:K},{path:"/auth",component:E},{path:"/protected",component:ct,meta:{requiresAuth:!0}},{path:"/profile",component:gt,meta:{requiresAuth:!0}}],kt=new a["a"]({routes:xt});kt.beforeResolve((function(t,e,r){t.matched.some((function(t){return t.meta.requiresAuth}))&&s["default"].prototype.$Amplify.Auth.currentAuthenticatedUser().then((function(t){t&&t.signInUserSession&&r()})).catch((function(e){console.log("You are trying to access a protected route. Please sign in."),r({path:"/",query:{redirect:t.fullPath}})})),r()})),s["default"].config.productionTip=!1,s["default"].use(a["a"]),s["default"].use(c["a"]),s["default"].use(o["AmplifyPlugin"],n),new s["default"]({render:function(t){return t(q)},router:kt,store:yt}).$mount("#app")},"63f3":function(t,e,r){"use strict";r("06c9")},6940:function(t,e,r){},"6aa5":function(t,e,r){},"7cc8":function(t,e,r){"use strict";r("8b61")},"845f":function(t,e,r){},"8b61":function(t,e,r){},9172:function(t,e,r){"use strict";r("354f")},a628:function(t,e,r){"use strict";r("f6c0")},b147:function(t,e,r){t.exports=r.p+"img/nexf_logo.92777c6e.png"},c10d:function(t,e,r){},c65c:function(t,e,r){"use strict";r("292d")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},f6c0:function(t,e,r){},fe26:function(t,e,r){}});
//# sourceMappingURL=app.98f4a0ed.js.map