(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/feedback/feedback"],{"02bc":function(t,e,a){"use strict";a("ce56");var i=n(a("b0ce")),s=n(a("8c73"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"3e11":function(t,e,a){"use strict";a.r(e);var i=a("eb54"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},"5dd0":function(t,e,a){"use strict";var i=a("c6a2"),s=a.n(i);s.a},"8c73":function(t,e,a){"use strict";a.r(e);var i=a("ea35"),s=a("3e11");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("5dd0");var c=a("2877"),r=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},af7e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("navigator",{attrs:{url:"/pages/home/feedback/detail?feedbackId=iw2389276172s3l23231a","hover-class":"navigator-hover"}},[a("view",{staticClass:"cu-card case"},[a("view",{staticClass:"cu-item shadow"},[a("view",{staticClass:"flex solid-bottom padding justify-between align-center"},[a("view",{staticClass:"text-cut text-black text-bold text-grey"},[t._v("克重不准，同一批次色差很严重！！！！")]),a("view",{staticClass:"cu-tag light bg-orange"},[t._v("质量问题")])]),a("view",{staticClass:"padding"},[a("view",{staticClass:"flex justify-between"},[a("view",[a("view",{staticClass:"flex justify-start align-center"},[a("view",{staticClass:"padding-right-xs text-grey"},[t._v("客户名称:")]),a("view",{staticClass:"padding-right-xl"},[t._v("章细花")]),a("view",{},[a("text",{staticClass:"cuIcon-dianhua padding-right-xs text-orange"}),t._v("13800138000")])])]),a("view")]),a("view",{staticClass:"flex align-center margin-top-xs"},[a("view",{staticClass:"padding-right-xs text-grey"},[t._v("机台号:")]),a("view",{staticClass:"padding-right-xl text-red"},[t._v("17")]),a("view",{staticClass:"padding-right-xs text-grey"},[t._v("生产日期:")]),a("view",{staticClass:"padding-right-xl"},[t._v("2019-04-16")]),a("view",{staticClass:"cu-tag light round bg-blue sm"},[t._v("一级增白")])]),a("view",{staticClass:"flex align-center margin-top-xs"},[a("view",{staticClass:"padding-right-xs text-grey"},[t._v("宽度:")]),a("view",{staticClass:"padding-right-xl text-red"},[t._v("60")]),a("view",{staticClass:"padding-right-xs text-grey"},[t._v("克重:")]),a("view",{staticClass:"padding-right-xs text-red"},[t._v("55")])]),a("view",{staticClass:"flex align-center margin-top-xs"},[a("view",{staticClass:"padding-right-xs text-grey"},[t._v("备注:")]),a("view",{staticClass:"text-cut max-width550"},[t._v("这时一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的备注")])])]),a("view",{staticClass:"flex solid-top padding justify-between align-center"},[a("view",{staticClass:"text-cut lighttext-blue"},[a("text",{staticClass:"cuIcon-countdown padding-right-xs text-orange"}),t._v("2017-11-30 10:13:22")])])])])])],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},c552:function(t,e,a){},c6a2:function(t,e,a){},cf22:function(t,e,a){"use strict";a.r(e);var i=a("d0a4"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},d0a4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},methods:{}};e.default=i},ea35:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-red",isBack:!0,mpcomid:"9438f118-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("反馈")])],1),a("scroll-view",{staticClass:"bg-white nav text-center fixed",style:[{top:t.CustomBar+"px"}],attrs:{"scroll-x":""}},t._l(t.tabs,function(e,i){return a("view",{key:i,staticClass:"cu-item",class:i==t.TabCur?"text-red cur":"",attrs:{"data-id":i,eventid:"9438f118-0-"+i},on:{tap:t.tabSelect}},[t._v(t._s(t.tabs[i]))])})),t._l(t.feedbackList,function(t,e){return a("feedback-card",{key:e,attrs:{mpcomid:"9438f118-1-"+e}})})],2)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},eb54:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("fb1a"));function s(t){return t&&t.__esModule?t:{default:t}}var n={components:{FeedbackCard:i.default},data:function(){return{TabCur:0,CustomBar:this.CustomBar,tabs:["全部","待反馈","已反馈"],feedbackList:[{},{},{},{}]}},methods:{tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id}}};e.default=n},f6cf:function(t,e,a){"use strict";var i=a("c552"),s=a.n(i);s.a},fb1a:function(t,e,a){"use strict";a.r(e);var i=a("af7e"),s=a("cf22");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("f6cf");var c=a("2877"),r=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports}},[["02bc","common/runtime","common/vendor"]]]);