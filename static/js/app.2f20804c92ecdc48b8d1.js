webpackJsonp([1],{"+rrE":function(t,s,e){t.exports=e.p+"static/img/profile.77e7b53.jpg"},"2fMj":function(t,s){},"42DN":function(t,s){},Gh8s:function(t,s,e){t.exports=e.p+"static/img/bg-parallex-mob.88ed20a.jpg"},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("j1ja");var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")({name:"App"},i,!1,function(t){e("rDZb")},null,null).exports,r=e("/ocq"),n=e("tKpp"),o=e.n(n),c={name:"NavBar",props:{theme:{type:String,defaut:"white"}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"nav-bar",class:[t.theme]},[e("div",{staticClass:"container"},[e("div",{staticClass:"row d-md-flex d-none"},[t._m(0),t._v(" "),e("div",{staticClass:"col-9 text-right"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#profile",expression:"'#profile'"}],staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("\n          Profile\n        ")]),t._v(" "),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("\n          Skills\n        ")]),t._v(" "),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#history",expression:"'#history'"}],staticClass:"btn",attrs:{href:"javascript:;"}},[t._v("\n          History\n        ")])])]),t._v(" "),e("div",{staticClass:"d-md-none d-block"},[e("h4",{staticClass:"font-fm-ks text-center"},[t._v("Rivermin's")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#profile",expression:"'#profile'"}],staticClass:"btn btn-sm btn-block",attrs:{href:"javascript:;"}},[t._v("\n            Profile\n          ")])]),t._v(" "),e("div",{staticClass:"col"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],staticClass:"btn btn-sm btn-block",attrs:{href:"javascript:;"}},[t._v("\n            Skills\n          ")])]),t._v(" "),e("div",{staticClass:"col"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#history",expression:"'#history'"}],staticClass:"btn btn-sm btn-block",attrs:{href:"javascript:;"}},[t._v("\n            History\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-3"},[s("div",{staticClass:"h-100 d-flex align-items-center"},[s("h4",{staticClass:"font-fm-ks"},[this._v("Rivermin's")])])])}]};var v=e("VU/8")(c,d,!1,function(t){e("2fMj")},"data-v-2b9a0665",null).exports,m={name:"EduTimeline",props:{payload:{type:Object,default:function(){return{}}}}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"timeline-item",attrs:{"date-is":t.payload.date_range}},[t.payload.title?e("h4",[t._v(t._s(t.payload.title))]):t._e(),t._v(" "),t.payload.desc?e("p",{domProps:{innerHTML:t._s(t.payload.desc)}}):t._e()])},staticRenderFns:[]};var u=e("VU/8")(m,p,!1,function(t){e("aex4")},"data-v-1799d66e",null).exports,b={name:"Timeline",props:{theme:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"timeline",class:[t.theme]},t._l(t.items,function(s,a){return e("li",{key:a,staticClass:"timeline-item"},[e("div",{staticClass:"timeline-info"},[e("span",[t._v(t._s(s.date_label))])]),t._v(" "),e("div",{staticClass:"timeline-marker"}),t._v(" "),e("div",{staticClass:"timeline-content"},[e("div",{staticClass:"timeline-title"},[t._v(t._s(s.title))]),t._v(" "),e("p",{domProps:{innerHTML:t._s(s.content)}})])])}),0)},staticRenderFns:[]};var _,h=e("VU/8")(b,f,!1,function(t){e("R44U")},"data-v-95f46052",null).exports,C={name:"StarScore",props:{payload:{type:Object,default:function(){return{label:"라벨",score:5}}},color:{type:String,default:"#000000"}},methods:{getStarClass:function(t){var s=this.payload.score-t;return s>=0?["mdi mdi-star"]:s<0&&Math.abs(s)<1?["mdi mdi-star-half-full"]:["mdi mdi-star-outline"]}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row mt-2 mb-2"},[e("div",{staticClass:"col-md-4 col-6"},[e("span",{staticClass:"text-secondary"},[t._v(t._s(t.payload.label))])]),t._v(" "),e("div",{staticClass:"col-md-8 col-6"},t._l(5,function(s){return e("i",{key:s,class:t.getStarClass(s),style:{color:t.color}})}),0)])},staticRenderFns:[]},w=e("VU/8")(C,g,!1,null,null,null).exports,x={history:[{date_label:"2005.02",title:"광주 진흥 고등학교 졸업"},{date_label:"2005.03",title:"광주 조선대학교 입학",content:"신소재공학 전공"},{date_label:"2006.08 - 2008.07",title:"군 입대 및 만기 전역",content:"대한민국 해병대 2사단"},{date_label:"2008.09 - 2012.02",title:"대학교 복학 및 졸업"},{date_label:"2012.03 - 2012.09",title:"한빛 소프트 학원 수료",content:"자바 정부프레임워크 (Java, Spring)"},{date_label:"2012.10 - 2014.10 (약 2년)",title:"(주)FASolution",content:(_=[],_.push("금융권 시스템 개발 회사"),_.push("<strong>주업무:</strong> 웹개발, 모바일 화면개발"),_.push("<strong>사용언어 및 기술:</strong> Javascript, HTML, CSS"),_.push("<strong>참여 프로젝트:</strong> 롯대카드 푸쉬 어드민 개발, 교보생명 모바일 웹앱 화면개발, NS홈쇼핑 모바일 웹앱 화면개발"),_.join("<br>"))},{date_label:"2014.11 - 2016.09 (1년 10개월)",title:"루피스토리",content:function(){var t=[];return t.push("웹툰 통합 앱서비스 스타트업"),t.push("<strong>주업무:</strong> 10여개 웹툰 사이트 웹툰정보 자동수집 시스템 개발"),t.push("<strong>사용언어 및 기술:</strong> NodeJS, CasperJS, AngularJS, MySQL "),t.join("<br>")}()},{date_label:"2016.12 - 2020.12 (4년)",title:"(주)마도로스",content:function(){var t=[];return t.push("배낚시 중개 플랫폼 서비스 스타트업"),t.push("<strong>주업무:</strong> 플랫폼 사이트 및 3개 어드민 1인 기획 및 개발 "),t.push("<strong>사용언어 및 기술:</strong> NodeJS, VueJS, HTML, Docker, Aws, MariaDB, Firebase, Android(Java => kotlin), IOS(swift)"),t.join("<br>")}()}],skills:{Frontend:[{label:"Javascript",score:5},{label:"HTML",score:5},{label:"CSS",score:5},{label:"VueJS",score:5},{label:"NuxtJS",score:4}],Backend:[{label:"Java",score:3},{label:"NodeJS",score:5},{label:"Nginx",score:4},{label:"Docker",score:4},{label:"Spring",score:3}],Mobile:[{label:"Android",score:4},{label:"IOS",score:3}],Etc:[{label:"Aws",score:4},{label:"Firebase",score:4},{label:"서비스 기획",score:4}]}},k={name:"HomePage",components:{VueAos:o.a,Navbar:v,EduTimeline:u,Timeline:h,StarScore:w},data:function(){return{parallexImage:null,showFixedNavbar:!1,headerHeight:0,history:x.history,skills:x.skills,experience:x.experience}},mounted:function(){this.parallexImage=e(window.screen.width>480?"hnmH":"Gh8s"),this.headerHeight=this.$refs.profile.clientHeight,window.addEventListener("scroll",this.scrollListener)},methods:{scrollListener:function(t){var s=window.scrollY||document.documentElement.scrollTop;this.showFixedNavbar=s>this.headerHeight}}},y={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"parallex",style:{backgroundImage:"url("+t.parallexImage+")"}},[e("div",{ref:"fixedNavbar",staticClass:"fixed-navbar fixed-top",class:{show:t.showFixedNavbar}},[e("navbar")],1),t._v(" "),e("section",{ref:"profile",staticClass:"bg-dark-a5",attrs:{id:"profile"}},[e("navbar",{attrs:{theme:"white"}}),t._v(" "),t._m(0)],1),t._v(" "),e("vue-aos",{attrs:{"animation-class":"fade-in-up"}},[e("section",{ref:"skills",staticClass:"bg-white mb-3 pt-5 pb-5",attrs:{id:"skills"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-title"},[t._v("Skills")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.skills,function(s,a){return e("div",{key:a,staticClass:"col-md-4 mb-3"},[e("div",[e("strong",[t._v(t._s(a))]),t._v(" "),t._l(s,function(t,s){return e("star-score",{key:s,attrs:{payload:t,color:"#ff6b6b"}})})],2)])}),0)])])]),t._v(" "),e("vue-aos",{attrs:{"animation-class":"fade-in-up"}},[e("section",{ref:"history",staticClass:"bg-white mb-3 pt-5 pb-5",attrs:{id:"history"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-title"},[t._v("History")]),t._v(" "),e("timeline",{attrs:{items:t.history,theme:"timeline-centered"}})],1)])]),t._v(" "),e("vue-aos",{attrs:{"animation-class":"fade-in-up"}},[e("section",{ref:"experience",staticClass:"bg-white pt-5 pb-5",attrs:{id:"experience"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-title"},[t._v("Introduce")]),t._v(" "),e("div")])])]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"profile pt-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3 col-6 ml-auto mr-auto mb-5"},[a("img",{staticClass:"profile-img",attrs:{src:e("+rrE")}})]),t._v(" "),a("div",{staticClass:"col-md-9 mb-5"},[a("div",{staticClass:"b-line"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-3 col-form-label"},[t._v("Name")]),t._v(" "),a("div",{staticClass:"col-9 pt-2"},[t._v("서강민")])])]),t._v(" "),a("div",{staticClass:"b-line"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-3 col-form-label"},[t._v("Birth")]),t._v(" "),a("div",{staticClass:"col-9 pt-2"},[t._v("1980.03.19")])])]),t._v(" "),a("div",{staticClass:"b-line"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-3 col-form-label"},[t._v("Address")]),t._v(" "),a("div",{staticClass:"col-9 pt-2"},[t._v("서울시 중구 장충동2가 186-1")])])]),t._v(" "),a("div",{staticClass:"b-line"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-3 col-form-label"},[t._v("Email")]),t._v(" "),a("div",{staticClass:"col-9 pt-2 font-fm-"},[t._v("rivermin.seo@gmail.com")])])]),t._v(" "),a("div",{staticClass:"b-line"},[a("div",{staticClass:"row"},[a("label",{staticClass:"col-3 col-form-label"},[t._v("Link")]),t._v(" "),a("div",{staticClass:"col-9"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("a",{staticClass:"btn btn-block text-left text-white",attrs:{target:"_blank",href:"https://www.facebook.com/seogangmin86"}},[a("i",{staticClass:"mdi mdi-facebook"}),t._v("\n                        Facebook\n                      ")])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("a",{staticClass:"btn btn-block text-left text-white",attrs:{href:"#",target:"_blank"}},[a("i",{staticClass:"mdi mdi-github"}),t._v("\n                        Github\n                      ")])])])])])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"footer pt-3 pb-3 bg-dark-a5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"text-center text-white text-shadow-black font-fm-lob"},[s("strong",[this._v("Created By me")])])])])}]};var S=e("VU/8")(k,y,!1,function(t){e("42DN")},"data-v-70bbd451",null).exports;a.a.use(r.a);var N=new r.a({routes:[{path:"/",name:"Home",component:S}]}),j=e("bm7V"),H=e.n(j);a.a.config.productionTip=!1,a.a.use(H.a),new a.a({el:"#app",router:N,components:{App:l},template:"<App/>"})},R44U:function(t,s){},aex4:function(t,s){},hnmH:function(t,s,e){t.exports=e.p+"static/img/bg-parallex-pc.5b1b9a6.jpg"},rDZb:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.2f20804c92ecdc48b8d1.js.map