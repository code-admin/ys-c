(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/detail"],{"2c6f":function(t,e,a){"use strict";a.r(e);var i=a("c66e"),s=a("847a");for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);var l=a("2877"),n=Object(l["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=n.exports},"7e3f":function(t,e,a){"use strict";a("ce56");var i=c(a("b0ce")),s=c(a("2c6f"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"847a":function(t,e,a){"use strict";a.r(e);var i=a("d97a"),s=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);e["default"]=s.a},c66e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0,mpcomid:"fc2c1372-0"}},[a("block",{slot:"backText"},[t._v("返回")]),a("block",{slot:"content"},[t._v("订单详情")])],1),a("view",{staticClass:"bg-white padding-bottom-xs"},[a("view",{staticClass:"cu-steps"},t._l(t.numList,function(e,i){return a("view",{key:i,staticClass:"cu-item",class:i>t.num?"":"text-blue"},[a("text",{staticClass:"num",attrs:{"data-index":i+1}}),t._v(t._s(e.name))])}))]),a("form",[a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("订单编号:")]),a("input",{attrs:{placeholder:"请输入订单编号",name:"input",value:"wx20171210160722"}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("下单时间:")]),a("picker",{attrs:{mode:"date",value:t.order.createDate,start:"2001-01-01",end:"2030-12-31",eventid:"fc2c1372-0"},on:{change:t.DateChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.order.createDate))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("下单人员:")]),a("input",{attrs:{placeholder:"请输入下单人员",name:"input",value:"章细花"}})]),t._l(t.order.goodsList,function(e,i){return a("view",{key:i,staticClass:"detail-item"},[a("view",{staticClass:"cu-form-group  margin-top"},[a("view",{staticClass:"title"},[t._v("销售类型:")]),a("picker",{attrs:{value:t.index,range:t.picker,eventid:"fc2c1372-1-"+i},on:{change:t.PickerChange}},[a("view",{staticClass:"picker"},[t._v(t._s(0===i?"按重量销售":"按条数销售"))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("品种:")]),a("picker",{attrs:{value:t.index,range:t.picker,eventid:"fc2c1372-2-"+i},on:{change:t.PickerChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.index>-1?t.picker[t.index]:"增白"))])])],1),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("要求:")]),a("input",{attrs:{placeholder:"请输入要求",name:"input",value:""}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("单价:")]),a("input",{attrs:{placeholder:"请输入单价",name:"input",value:""}}),a("view",{staticClass:"title"},[t._v("个数:")]),a("input",{attrs:{placeholder:"请输入个数",name:"input",value:""}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("宽度:")]),a("input",{attrs:{placeholder:"请输入宽度",name:"input",value:""}}),a("view",{staticClass:"title"},[t._v("克重:")]),a("input",{attrs:{placeholder:"请输入克重",name:"input",value:""}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("条数:")]),a("input",{attrs:{placeholder:"请输入条数",name:"input",value:""}}),a("view",{staticClass:"title"},[t._v("长度:")]),a("input",{attrs:{placeholder:"请输入长度",name:"input",value:""}})])])}),a("view",{staticClass:"cu-form-group margin-top"},[a("view",{staticClass:"title"},[t._v("发货方式:")]),a("picker",{attrs:{value:t.index,range:t.picker,eventid:"fc2c1372-3"},on:{change:t.PickerChange}},[a("view",{staticClass:"picker"},[t._v(t._s(t.index>-1?t.picker[t.index]:"德邦物流"))])])],1),a("view",{staticClass:"cu-form-group"},[a("input",{attrs:{placeholder:"请输入详细地址",name:"input",value:""}})]),a("view",{staticClass:"cu-form-group"},[a("view",{staticClass:"title"},[t._v("联系电话")]),a("input",{attrs:{placeholder:"请输入联系电话",name:"input"}}),a("view",{staticClass:"cu-capsule radius"},[a("view",{staticClass:"cu-tag bg-blue "},[t._v("+86")]),a("view",{staticClass:"cu-tag line-blue"},[t._v("中国大陆")])])]),a("view",{staticClass:"cu-form-group"},[a("textarea",{attrs:{maxlength:"-1",disabled:null!=t.modalName,placeholder:"请输入备注",eventid:"fc2c1372-4"},on:{input:t.textareaAInput}})])],2),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"bg-white padding margin-top"},[a("view",{staticClass:"cu-timeline"},[a("view",{staticClass:"cu-time"},[t._v("06-17")]),a("view",{staticClass:"cu-item text-blue"},[a("view",{staticClass:"content"},[a("view",{staticClass:"cu-capsule radius"},[a("view",{staticClass:"cu-tag bg-cyan"},[t._v("审核通过")]),a("view",{staticClass:"cu-tag line-cyan"},[t._v("10:00")])]),a("view",{staticClass:"margin-top"},[t._v("订单审核通过，下一步 等待审核。")])])]),a("view",{staticClass:"cu-item"},[a("view",{staticClass:"content"},[a("view",{staticClass:"cu-capsule radius"},[a("view",{staticClass:"cu-tag bg-grey"},[t._v("创建")]),a("view",{staticClass:"cu-tag line-grey"},[t._v("09:30")])]),a("view",{staticClass:"margin-top"},[t._v("订单 【wx20171210160722】 由 章细花 创建成功！")])])])])])}];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},d97a:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{num:1,numList:[{name:"创建"},{name:"审核中"},{name:"出库"},{name:"结束"}],order:{createDate:"2018-12-25",goodsList:[{},{},{}]},region:["浙江省","温州市","鹿城区"]}},methods:{RegionChange:function(t){this.region=t.detail.value}}};e.default=i}},[["7e3f","common/runtime","common/vendor"]]]);