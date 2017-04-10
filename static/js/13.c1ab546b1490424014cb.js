webpackJsonp([13],{330:function(n,i,s){var o=s(0)(s(357),s(386),null,null);n.exports=o.exports},357:function(n,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{props:[{name:"<code>type</code>",description:"Type (color) of the icon, optional",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                        <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                        <code>is-warning</code>, <code>is-danger</code>,\n                        and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>",default:"<code>mdi</code>"},{name:"<code>icon</code>",description:"Icon name",type:"String",values:"—",default:"—"},{name:"<code>size</code>",description:"Icon size, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"}],template:'\n                <div class="block">\n                    <b-icon icon="person"></b-icon>\n                    <b-icon icon="home"></b-icon>\n                    <b-icon icon="dashboard"></b-icon>\n                </div>\n\n                <div class="block">\n                    <b-icon\n                        icon="person"\n                        size="is-medium">\n                    </b-icon>\n                    <b-icon\n                        icon="home"\n                        size="is-medium">\n                    </b-icon>\n                    <b-icon\n                        icon="dashboard"\n                        size="is-medium">\n                    </b-icon>\n                </div>\n\n                <div class="block">\n                    <b-icon\n                        icon="person"\n                        size="is-large"\n                        type="is-success">\n                    </b-icon>\n                    <b-icon\n                        icon="home"\n                        size="is-large"\n                        type="is-info">\n                    </b-icon>\n                    <b-icon\n                        icon="dashboard"\n                        size="is-large"\n                        type="is-primary">\n                    </b-icon>\n                </div>\n\n                <button class="button is-dark">\n                    <b-icon icon="done"></b-icon>\n                    <span>Finish</span>\n                </button>\n\n                <button class="button is-warning">\n                    <b-icon icon="done"></b-icon>\n                    <span>Finish</span>\n                </button>',template2:'\n                <div class="block">\n                    <b-icon\n                        pack="fa"\n                        icon="user">\n                    </b-icon>\n                    <b-icon\n                        pack="fa"\n                        icon="home">\n                    </b-icon>\n                    <b-icon\n                        pack="fa"\n                        icon="dashboard">\n                    </b-icon>\n                </div>\n\n                <div class="block">\n                    <b-icon\n                        pack="fa"\n                        icon="user"\n                        size="is-medium">\n                    </b-icon>\n                    <b-icon\n                        pack="fa"\n                        icon="home"\n                        size="is-medium">\n                    </b-icon>\n                    <b-icon\n                        pack="fa"\n                        icon="dashboard"\n                        size="is-medium">\n                    </b-icon>\n                </div>\n\n                <div class="block">\n                    <b-icon\n                        pack="fa"\n                        icon="user"\n                        size="is-large"\n                        type="is-success">\n                    </b-icon>\n                    <b-icon\n                        pack="fa"\n                        icon="home"\n                        size="is-large"\n                        type="is-info">\n                    </b-icon>\n                    <b-icon\n                        pack="fa"\n                        icon="dashboard"\n                        size="is-large"\n                        type="is-primary">\n                    </b-icon>\n                </div>\n\n                <button class="button is-dark">\n                    <b-icon pack="fa" icon="check"></b-icon>\n                    <span>Finish</span>\n                </button>\n\n                <button class="button is-warning">\n                    <b-icon pack="fa" icon="check"></b-icon>\n                    <span>Finish</span>\n                </button>'}}}},386:function(n,i){n.exports={render:function(){var n=this,i=n.$createElement,s=n._self._c||i;return s("div",[s("h1",{staticClass:"title is-spaced"},[n._v("Icon")]),n._v(" "),s("h2",{staticClass:"subtitle"},[n._v("Icons take an important role of any application")]),n._v(" "),s("hr"),n._v(" "),n._m(0),n._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h3",{staticClass:"subtitle"},[n._v("Material Design Icons")]),n._v(" "),s("div",{staticClass:"example"},[s("div",{staticClass:"block"},[s("b-icon",{attrs:{icon:"person"}}),n._v(" "),s("b-icon",{attrs:{icon:"home"}}),n._v(" "),s("b-icon",{attrs:{icon:"dashboard"}})],1),n._v(" "),s("div",{staticClass:"block"},[s("b-icon",{attrs:{icon:"person",size:"is-medium"}}),n._v(" "),s("b-icon",{attrs:{icon:"home",size:"is-medium"}}),n._v(" "),s("b-icon",{attrs:{icon:"dashboard",size:"is-medium"}})],1),n._v(" "),s("div",{staticClass:"block"},[s("b-icon",{attrs:{icon:"person",size:"is-large",type:"is-success"}}),n._v(" "),s("b-icon",{attrs:{icon:"home",size:"is-large",type:"is-info"}}),n._v(" "),s("b-icon",{attrs:{icon:"dashboard",size:"is-large",type:"is-primary"}})],1),n._v(" "),s("button",{staticClass:"button is-dark"},[s("b-icon",{attrs:{icon:"done"}}),n._v(" "),s("span",[n._v("Finish")])],1),n._v(" "),s("button",{staticClass:"button is-warning"},[s("b-icon",{attrs:{icon:"done"}}),n._v(" "),s("span",[n._v("Finish")])],1)]),n._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[s("code",{staticClass:"html"},[n._v(n._s(n._f("pre")(n.template)))])])]),n._v(" "),s("div",{staticClass:"column"},[s("h3",{staticClass:"subtitle"},[n._v("FontAwesome")]),n._v(" "),s("div",{staticClass:"example"},[s("div",{staticClass:"block"},[s("b-icon",{attrs:{pack:"fa",icon:"user"}}),n._v(" "),s("b-icon",{attrs:{pack:"fa",icon:"home"}}),n._v(" "),s("b-icon",{attrs:{pack:"fa",icon:"dashboard"}})],1),n._v(" "),s("div",{staticClass:"block"},[s("b-icon",{attrs:{pack:"fa",icon:"user",size:"is-medium"}}),n._v(" "),s("b-icon",{attrs:{pack:"fa",icon:"home",size:"is-medium"}}),n._v(" "),s("b-icon",{attrs:{pack:"fa",icon:"dashboard",size:"is-medium"}})],1),n._v(" "),s("div",{staticClass:"block"},[s("b-icon",{attrs:{pack:"fa",icon:"user",size:"is-large",type:"is-success"}}),n._v(" "),s("b-icon",{attrs:{pack:"fa",icon:"home",size:"is-large",type:"is-info"}}),n._v(" "),s("b-icon",{attrs:{pack:"fa",icon:"dashboard",size:"is-large",type:"is-primary"}})],1),n._v(" "),s("button",{staticClass:"button is-dark"},[s("b-icon",{attrs:{pack:"fa",icon:"check"}}),n._v(" "),s("span",[n._v("Finish")])],1),n._v(" "),s("button",{staticClass:"button is-warning"},[s("b-icon",{attrs:{pack:"fa",icon:"check"}}),n._v(" "),s("span",[n._v("Finish")])],1)]),n._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[s("code",{staticClass:"html"},[n._v(n._s(n._f("pre")(n.template2)))])])])]),n._v(" "),s("hr"),n._v(" "),s("h2",{staticClass:"subtitle"},[n._v("Properties")]),n._v(" "),s("b-table",{attrs:{data:n.props,"default-sort":"name",html:""}},[s("b-table-column",{attrs:{field:"name",label:"Name"}}),n._v(" "),s("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}}),n._v(" "),s("b-table-column",{attrs:{field:"type",label:"Type"}}),n._v(" "),s("b-table-column",{attrs:{field:"values",label:"Values"}}),n._v(" "),s("b-table-column",{attrs:{field:"default",label:"Default"}})],1)],1)},staticRenderFns:[function(){var n=this,i=n.$createElement,s=n._self._c||i;return s("p",{staticClass:"content"},[n._v("Buefy is compatible with both "),s("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[n._v("Material Design Icons")]),n._v("\n    and "),s("a",{attrs:{href:"http://fontawesome.io/",target:"_blank"}},[n._v("FontAwesome")]),n._v(". They adapt to most elements background automatically\n    — but you can also override their colors.")])}]}}});
//# sourceMappingURL=13.c1ab546b1490424014cb.js.map