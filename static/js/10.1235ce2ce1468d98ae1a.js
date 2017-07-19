webpackJsonp([10],{457:function(e,i,t){var s=t(0)(t(501),t(529),null,null,null);e.exports=s.exports},501:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{isActive:!0,props:[{name:"<code>type</code>",description:"Type (color) of the message, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                        <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                        <code>is-warning</code>, <code>is-danger</code>,\n                        and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>active</code>",description:"Whether notification is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>closable</code>",description:"Adds an 'X' button that closes the notification — works if has a <code>title</code>",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>has-icon</code>",description:"Adds an icon on the left side depending on the <code>type</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>title</code>",description:"Message title",type:"String",values:"—",default:"—"}],events:[{name:"<code>close</code>",description:"Triggers when user closes the message",parameters:"—"}],template1:'\n            <button class="button block" @click="isActive = true">Show first</button>\n            <b-message title="Default" :active.sync="isActive">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Danger" type="is-danger">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Danger with icon" type="is-danger" has-icon>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Success" type="is-success">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Success with icon" type="is-success" has-icon>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Info" type="is-info">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Info with icon" type="is-info" has-icon>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Warning" type="is-warning">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message title="Warning with icon" type="is-warning" has-icon>\n                Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>',template2:'\n            <b-message>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-danger">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-danger" has-icon>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-success">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-success" has-icon>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-info">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-info" has-icon>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-warning">\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>\n\n            <b-message type="is-warning" has-icon>\n                Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            </b-message>'}}}},529:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title is-spaced"},[e._v("Message")]),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("Colored message blocks, to draw attention of your user")]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("button",{staticClass:"button block",on:{click:function(i){e.isActive=!0}}},[e._v("Show first")]),e._v(" "),t("b-message",{attrs:{title:"Default",active:e.isActive},on:{"update:active":function(i){e.isActive=i}}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Danger",type:"is-danger"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Danger with icon",type:"is-danger","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Success",type:"is-success"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Success with icon",type:"is-success","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Info",type:"is-info"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Info with icon",type:"is-info","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Warning",type:"is-warning"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{title:"Warning with icon",type:"is-warning","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")])],1),e._v(" "),t("div",{staticClass:"column"},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template1)))])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("Message without title becomes headerless")]),e._v(" "),t("p",{staticClass:"content"},[e._v("They are automatically non-closable.")]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("b-message",[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-danger"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-danger","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-success"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-success","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-info"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-info","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-warning"}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")]),e._v(" "),t("b-message",{attrs:{type:"is-warning","has-icon":""}},[e._v("\n                Lorem ipsum dolor sit amet, consectetur warning elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit\n            ")])],1),e._v(" "),t("div",{staticClass:"column"},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template2)))])])])]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),t("b-tabs",[t("b-tab-item",{attrs:{label:"Properties"}},[t("b-table",{attrs:{data:e.props,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("b-table-column",{attrs:{field:"name",label:"Name"}},[t("span",{domProps:{innerHTML:e._s(i.row.name)}})]),e._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[t("span",{domProps:{innerHTML:e._s(i.row.description)}})]),e._v(" "),t("b-table-column",{attrs:{field:"type",label:"Type"}},[t("span",[e._v(e._s(i.row.type))])]),e._v(" "),t("b-table-column",{attrs:{field:"values",label:"Values"}},[t("span",{domProps:{innerHTML:e._s(i.row.values)}})]),e._v(" "),t("b-table-column",{attrs:{field:"default",label:"Default"}},[t("span",{domProps:{innerHTML:e._s(i.row.default)}})])]}}])})],1),e._v(" "),t("b-tab-item",{attrs:{label:"Events"}},[t("b-table",{attrs:{data:e.events,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("b-table-column",{attrs:{field:"name",label:"Name"}},[t("span",{domProps:{innerHTML:e._s(i.row.name)}})]),e._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[t("span",{domProps:{innerHTML:e._s(i.row.description)}})]),e._v(" "),t("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[t("span",{domProps:{innerHTML:e._s(i.row.parameters)}})])]}}])})],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.1235ce2ce1468d98ae1a.js.map