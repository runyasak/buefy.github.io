webpackJsonp([23],{399:function(e,t,a){var s=a(0)(a(443),a(480),null,null);e.exports=s.exports},443:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{total:200,current:1,perPage:20,order:"",size:"",isSimple:!1,props:[{name:"<code>total</code>",description:"Total count of items",type:"Number",values:"—",default:"—"},{name:"<code>per-page</code>",description:"Items count for each page",type:"Number",values:"—",default:"<code>20</code>"},{name:"<code>current</code>",description:"Current page number, use the <code>.sync</code> modifier to make it two-way binding",type:"Number",values:"—",default:"<code>1</code>"},{name:"<code>order</code>",description:"Buttons order, optional",type:"String",values:"<code>is-centered</code>, <code>is-right</code>",default:"—"},{name:"<code>size</code>",description:"Pagination size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>simple</code>",description:"Simpler style",type:"Boolean",values:"—",default:"<code>false</code>"}],events:[{name:"<code>change</code>",description:"Triggers when the current page is changed",parameters:"<code>value: Number</code>"}],template:'\n            <b-pagination\n                :total="total"\n                :current.sync="current"\n                :order="order"\n                :size="size"\n                :simple="isSimple"\n                :per-page="perPage">\n            </b-pagination>',code:"\n            export default {\n                data() {\n                    return {\n                        total: 200,\n                        current: 1,\n                        perPage: 20,\n                        order: '',\n                        size: '',\n                        isSimple: false\n                    }\n                }\n            }"}}}},480:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-spaced"},[e._v("Pagination")]),e._v(" "),a("h2",{staticClass:"subtitle"},[e._v("A responsive and flexible pagination")]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Total"}},[a("b-input",{attrs:{type:"number"},model:{value:e.total,callback:function(t){e.total=t},expression:"total"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Items per page"}},[a("b-input",{attrs:{type:"number"},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("p",{staticClass:"control"},[a("label",{staticClass:"label"},[e._v("Order")]),e._v(" "),a("span",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.order,expression:"order"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.order=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),a("option",{attrs:{value:"is-centered"}},[e._v("is-centered")]),e._v(" "),a("option",{attrs:{value:"is-right"}},[e._v("is-right")])])])])]),e._v(" "),a("div",{staticClass:"column"},[a("p",{staticClass:"control"},[a("label",{staticClass:"label"},[e._v("Size")]),e._v(" "),a("span",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.size=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("default")]),e._v(" "),a("option",{attrs:{value:"is-small"}},[e._v("is-small")]),e._v(" "),a("option",{attrs:{value:"is-medium"}},[e._v("is-medium")]),e._v(" "),a("option",{attrs:{value:"is-large"}},[e._v("is-large")])])])])])]),e._v(" "),a("div",{staticClass:"block"},[a("b-switch",{model:{value:e.isSimple,callback:function(t){e.isSimple=t},expression:"isSimple"}},[e._v("Simple")])],1),e._v(" "),a("div",{staticClass:"example"},[a("b-pagination",{attrs:{total:e.total,current:e.current,order:e.order,size:e.size,simple:e.isSimple,"per-page":e.perPage},on:{"update:current":function(t){e.current=t}}})],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template)))])]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code)))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),a("b-tabs",[a("b-tab-item",{attrs:{label:"Properties"}},[a("b-table",{attrs:{data:e.props,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(t.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(t.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"type",label:"Type"}},[a("span",[e._v(e._s(t.row.type))])]),e._v(" "),a("b-table-column",{attrs:{field:"values",label:"Values"}},[a("span",{domProps:{innerHTML:e._s(t.row.values)}})]),e._v(" "),a("b-table-column",{attrs:{field:"default",label:"Default"}},[a("span",{domProps:{innerHTML:e._s(t.row.default)}})])]}}])})],1),e._v(" "),a("b-tab-item",{attrs:{label:"Events"}},[a("b-table",{attrs:{data:e.events,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(t.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(t.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[a("span",{domProps:{innerHTML:e._s(t.row.parameters)}})])]}}])})],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=23.15121f47a2033ddf486d.js.map