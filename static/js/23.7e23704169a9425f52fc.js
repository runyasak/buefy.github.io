webpackJsonp([23],{440:function(e,c,a){var t=a(0)(a(485),a(540),null,null,null);e.exports=t.exports},485:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{checkbox:!0,checkboxGroup:["Flint"],checkboxProps:[{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"<code>false</code>"},{name:"<code>custom-value</code>",description:"Native value when used inside a Checkbox Group",type:"Any",values:"—",default:"—"},{name:"<code>true-value</code>",description:"Overrides the returned value when it's checked",type:"Any",values:"—",default:"<code>true</code>"},{name:"<code>false-value</code>",description:"Overrides the returned value when it's not checked",type:"Any",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Same as native <code>disabled</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>name</code>",description:"Same as native <code>name</code>",type:"String",values:"—",default:"—"},{name:"<code>checked</code>",description:"Same as native <code>checked</code>, only works for initial state (not reactive)",type:"Boolean",values:"—",default:"<code>false</code>"}],checkboxEvents:[{name:"<code>change</code>",description:"Triggers when the value of checkbox changes",parameters:"<code>value: Boolean</code>, <code>event: $event</code>"}],checkboxGroupProps:[{name:"<code>v-model</code>",description:"Binding value",type:"Array",values:"—",default:"—"}],checkboxGroupEvents:[{name:"<code>change</code>",description:"Triggers when the value of any checkbox changes",parameters:"<code>value: Array</code></code>"}],template1:'\n            <div class="block">\n                <b-checkbox>Basic</b-checkbox>\n                <b-checkbox v-model="checkbox">{{ checkbox }}</b-checkbox>\n                <b-checkbox disabled>Disabled</b-checkbox>\n                <b-checkbox disabled checked>Disabled Checked</b-checkbox>\n            </div>\n\n            <h3 class="subtitle">Vertical</h3>\n            <div class="field">\n                <b-checkbox>Basic</b-checkbox>\n            </div>\n            <div class="field">\n                <b-checkbox v-model="checkbox">{{ checkbox }}</b-checkbox>\n            </div>\n            <div class="field">\n                <b-checkbox disabled>Disabled</b-checkbox>\n            </div>\n            <div class="field">\n                <b-checkbox disabled checked>Disabled Checked</b-checkbox>\n            </div>',code1:"\n            export default {\n                data() {\n                    return {\n                        checkbox: true\n                    }\n                }\n            }",template2:'\n            <div class="block">\n                <b-checkbox-group v-model="checkboxGroup">\n                    <b-checkbox custom-value="Silver">Silver</b-checkbox>\n                    <b-checkbox custom-value="Flint">Flint</b-checkbox>\n                    <b-checkbox custom-value="Vane">Vane</b-checkbox>\n                    <b-checkbox custom-value="Billy" disabled>Billy</b-checkbox>\n                </b-checkbox-group>\n            </div>\n            <p class="content"><b>Selection:</b> {{ checkboxGroup }}</p>\n\n            <h3 class="subtitle">Vertical example</h3>\n            <b-checkbox-group v-model="checkboxGroup">\n                <div class="field">\n                    <b-checkbox custom-value="Silver">Silver</b-checkbox>\n                </div>\n                <div class="field">\n                    <b-checkbox custom-value="Flint">Flint</b-checkbox>\n                </div>\n                <div class="field">\n                    <b-checkbox custom-value="Vane">Vane</b-checkbox>\n                </div>\n                <div class="field">\n                    <b-checkbox custom-value="Billy" disabled>Billy</b-checkbox>\n                </div>\n            </b-checkbox-group>',code2:"\n            export default {\n                data() {\n                    return {\n                        checkboxGroup: ['Flint']\n                    }\n                }\n            }"}}}},540:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,a=e._self._c||c;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-spaced"},[e._v("Checkbox")]),e._v(" "),a("h2",{staticClass:"subtitle"},[e._v("Select a single or grouped options")]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"block"},[a("b-checkbox",[e._v("Basic")]),e._v(" "),a("b-checkbox",{model:{value:e.checkbox,callback:function(c){e.checkbox=c},expression:"checkbox"}},[e._v(e._s(e.checkbox))]),e._v(" "),a("b-checkbox",{attrs:{disabled:""}},[e._v("Disabled")]),e._v(" "),a("b-checkbox",{attrs:{disabled:"",checked:""}},[e._v("Disabled Checked")])],1),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("Vertical example")]),e._v(" "),a("div",{staticClass:"field"},[a("b-checkbox",[e._v("Basic")])],1),e._v(" "),a("div",{staticClass:"field"},[a("b-checkbox",{model:{value:e.checkbox,callback:function(c){e.checkbox=c},expression:"checkbox"}},[e._v(e._s(e.checkbox))])],1),e._v(" "),a("div",{staticClass:"field"},[a("b-checkbox",{attrs:{disabled:""}},[e._v("Disabled")])],1),e._v(" "),a("div",{staticClass:"field"},[a("b-checkbox",{attrs:{disabled:"",checked:""}},[e._v("Disabled Checked")])],1)]),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template1)))])]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code1)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Checkbox Group")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"block"},[a("b-checkbox-group",{model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[a("b-checkbox",{attrs:{"custom-value":"Silver"}},[e._v("Silver")]),e._v(" "),a("b-checkbox",{attrs:{"custom-value":"Flint"}},[e._v("Flint")]),e._v(" "),a("b-checkbox",{attrs:{"custom-value":"Vane"}},[e._v("Vane")]),e._v(" "),a("b-checkbox",{attrs:{"custom-value":"Billy",disabled:""}},[e._v("Billy")])],1)],1),e._v(" "),a("p",{staticClass:"content"},[a("b",[e._v("Selection:")]),e._v(" "+e._s(e.checkboxGroup))]),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("Vertical example")]),e._v(" "),a("b-checkbox-group",{model:{value:e.checkboxGroup,callback:function(c){e.checkboxGroup=c},expression:"checkboxGroup"}},[a("div",{staticClass:"field"},[a("b-checkbox",{attrs:{"custom-value":"Silver"}},[e._v("Silver")])],1),e._v(" "),a("div",{staticClass:"field"},[a("b-checkbox",{attrs:{"custom-value":"Flint"}},[e._v("Flint")])],1),e._v(" "),a("div",{staticClass:"field"},[a("b-checkbox",{attrs:{"custom-value":"Vane"}},[e._v("Vane")])],1),e._v(" "),a("div",{staticClass:"field"},[a("b-checkbox",{attrs:{"custom-value":"Billy",disabled:""}},[e._v("Billy")])],1)])],1),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template2)))])]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code2)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("Checkbox")]),e._v(" "),a("b-tabs",[a("b-tab-item",{attrs:{label:"Properties"}},[a("b-table",{attrs:{data:e.checkboxProps,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(c){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(c.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(c.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"type",label:"Type"}},[a("span",[e._v(e._s(c.row.type))])]),e._v(" "),a("b-table-column",{attrs:{field:"values",label:"Values"}},[a("span",{domProps:{innerHTML:e._s(c.row.values)}})]),e._v(" "),a("b-table-column",{attrs:{field:"default",label:"Default"}},[a("span",{domProps:{innerHTML:e._s(c.row.default)}})])]}}])})],1),e._v(" "),a("b-tab-item",{attrs:{label:"Events"}},[a("b-table",{attrs:{data:e.checkboxEvents,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(c){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(c.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(c.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[a("span",{domProps:{innerHTML:e._s(c.row.parameters)}})])]}}])})],1)],1),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("Checkbox Group")]),e._v(" "),a("b-tabs",[a("b-tab-item",{attrs:{label:"Properties"}},[a("b-table",{attrs:{data:e.checkboxGroupProps,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(c){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(c.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(c.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"type",label:"Type"}},[a("span",[e._v(e._s(c.row.type))])]),e._v(" "),a("b-table-column",{attrs:{field:"values",label:"Values"}},[a("span",{domProps:{innerHTML:e._s(c.row.values)}})]),e._v(" "),a("b-table-column",{attrs:{field:"default",label:"Default"}},[a("span",{domProps:{innerHTML:e._s(c.row.default)}})])]}}])})],1),e._v(" "),a("b-tab-item",{attrs:{label:"Events"}},[a("b-table",{attrs:{data:e.checkboxGroupEvents,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(c){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(c.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(c.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[a("span",{domProps:{innerHTML:e._s(c.row.parameters)}})])]}}])})],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=23.7e23704169a9425f52fc.js.map