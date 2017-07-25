webpackJsonp([4],{454:function(o,n,t){var e=t(0)(t(501),t(558),null,null,null);o.exports=e.exports},472:function(o,n,t){o.exports=t.p+"static/img/buefy.027baee.png"},501:function(o,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{navigation:"home",isPublic:!0,dropdownProps:[{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>hoverable</code>",description:"Dropdown will be triggered by hover instead of click",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>position</code>",description:"Optional, position of the dropdown relative to the trigger",type:"String",values:"<code>is-top-right</code>, <code>is-top-left</code>, <code>is-bottom-left</code>",default:"Bottom right"},{name:"<code>disabled</code>",description:"Disables dropdown",type:"Boolean",values:"—",default:"<code>false</code>"}],dropdownEvents:[{name:"<code>change</code>",description:"Triggers when an option is selected",parameters:"<code>value: String</code>"},{name:"<code>active-change</code>",description:"Triggers when dropdown is activated or deactivated (visibility of list)",parameters:"<code>active: Boolean</code>"}],dropdownMethods:[{name:"<code>toggle</code>",description:"Toggle activation (dropdown list visibility)"}],optionProps:[{name:"<code>value</code>",description:"The value that will be returned on events and v-model",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>separator</code>",description:"Set the option to be a separator",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Option is disabled",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>subheader</code>",description:"Option is not a clickable item",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>has-link</code>",description:"Use it if your option is an anchor tag or <code>router-link</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>paddingless</code>",description:"Remove padding",type:"Boolean",values:"—",default:"<code>false</code>"}],optionEvents:[{name:"<code>click</code>",description:"Triggers when the option is clicked",parameters:"—"}],template1:'\n            <b-dropdown>\n                <button class="button is-primary" slot="trigger">\n                    <span>Click me!</span>\n                    <b-icon icon="arrow_drop_down"></b-icon>\n                </button>\n\n                <b-dropdown-option>Action</b-dropdown-option>\n                <b-dropdown-option>Another action</b-dropdown-option>\n                <b-dropdown-option>Something else</b-dropdown-option>\n            </b-dropdown>\n\n            <b-dropdown hoverable>\n                <button class="button is-info" slot="trigger">\n                    <span>Hover me!</span>\n                    <b-icon icon="arrow_drop_down"></b-icon>\n                </button>\n\n                <b-dropdown-option>Action</b-dropdown-option>\n                <b-dropdown-option>Another action</b-dropdown-option>\n                <b-dropdown-option>Something else</b-dropdown-option>\n            </b-dropdown>\n\n            <b-dropdown disabled>\n                <button class="button" slot="trigger">\n                    <span>Disabled</span>\n                    <b-icon icon="arrow_drop_down"></b-icon>\n                </button>\n\n                <b-dropdown-option>Action</b-dropdown-option>\n                <b-dropdown-option>Another action</b-dropdown-option>\n                <b-dropdown-option>Something else</b-dropdown-option>\n            </b-dropdown>\n\n            <b-dropdown>\n                <p class="tag is-success" slot="trigger">\n                    Custom trigger\n                </p>\n\n                <b-dropdown-option>Action</b-dropdown-option>\n                <b-dropdown-option>Another action</b-dropdown-option>\n                <b-dropdown-option>Something else</b-dropdown-option>\n            </b-dropdown>',template2:'\n            <nav class="navbar">\n                <div class="navbar-brand">\n                    <a class="navbar-item">\n                        <img src="../../../assets/buefy.png" alt="Buefy">\n                    </a>\n                    <a class="navbar-item"><b-icon pack="fa" icon="github"></b-icon></a>\n                    <a class="navbar-item"><b-icon pack="fa" icon="twitter"></b-icon></a>\n                </div>\n\n                <div class="navbar-menu">\n                    <div class="navbar-end">\n                        <b-dropdown v-model="navigation" position="is-bottom-left">\n                            <a class="navbar-item" slot="trigger">\n                                <span>Login</span>\n                                <b-icon icon="arrow_drop_down"></b-icon>\n                            </a>\n\n                            <b-dropdown-option subheader paddingless>\n                                <form action="">\n                                    <div class="modal-card" style="width:300px;">\n                                        <section class="modal-card-body">\n                                            <b-field label="Email">\n                                                <b-input\n                                                    type="email"\n                                                    placeholder="Your email"\n                                                    required>\n                                                </b-input>\n                                            </b-field>\n\n                                            <b-field label="Password">\n                                                <b-input\n                                                    type="password"\n                                                    password-reveal\n                                                    placeholder="Your password"\n                                                    required>\n                                                </b-input>\n                                            </b-field>\n\n                                            <b-checkbox>Remember me</b-checkbox>\n                                        </section>\n                                        <footer class="modal-card-foot">\n                                            <button class="button is-primary">Login</button>\n                                        </footer>\n                                    </div>\n                                </form>\n                            </b-dropdown-option>\n                        </b-dropdown>\n                    </div>\n                </div>\n            </nav>',template3:'\n            <nav class="navbar">\n                <div class="navbar-brand">\n                    <a class="navbar-item">\n                        <img src="../../../assets/buefy.png" alt="Buefy">\n                    </a>\n                    <a class="navbar-item"><b-icon pack="fa" icon="github"></b-icon></a>\n                    <a class="navbar-item"><b-icon pack="fa" icon="twitter"></b-icon></a>\n                </div>\n\n                <div class="navbar-menu">\n                    <div class="navbar-end">\n                        <b-dropdown v-model="navigation" position="is-bottom-left">\n                            <a class="navbar-item" slot="trigger">\n                                <span>Menu</span>\n                                <b-icon icon="arrow_drop_down"></b-icon>\n                            </a>\n\n                            <b-dropdown-option subheader>\n                                Logged as <b>Rafael Beraldo</b>\n                            </b-dropdown-option>\n                            <hr class="dropdown-divider">\n                            <b-dropdown-option has-link>\n                                <a href="https://google.com" target="_blank">\n                                    <b-icon icon="link"></b-icon>\n                                    Google (link)\n                                </a>\n                            </b-dropdown-option>\n                            <b-dropdown-option value="home">\n                                <b-icon icon="home"></b-icon>\n                                Home\n                            </b-dropdown-option>\n                            <b-dropdown-option value="products">\n                                <b-icon icon="shopping_cart"></b-icon>\n                                Products\n                            </b-dropdown-option>\n                            <b-dropdown-option value="blog" disabled>\n                                <b-icon icon="art_track"></b-icon>\n                                Blog\n                            </b-dropdown-option>\n                            <hr class="dropdown-divider">\n                            <b-dropdown-option value="settings">\n                                <b-icon icon="settings"></b-icon>\n                                Settings\n                            </b-dropdown-option>\n                            <b-dropdown-option value="logout">\n                                <b-icon icon="exit_to_app"></b-icon>\n                                Logout\n                            </b-dropdown-option>\n                        </b-dropdown>\n                    </div>\n                </div>\n            </nav>',code3:"\n            export default {\n                data() {\n                    return {\n                        navigation: 'home'\n                    }\n                }\n            }",template4:'\n            <b-dropdown v-model="isPublic">\n                <button class="button is-primary" type="button" slot="trigger">\n                    <template v-if="isPublic">\n                        <b-icon icon="public"></b-icon>\n                        <span>Public</span>\n                    </template>\n                    <template v-else>\n                        <b-icon icon="people"></b-icon>\n                        <span>Friends</span>\n                    </template>\n                    <b-icon icon="arrow_drop_down"></b-icon>\n                </button>\n\n                <b-dropdown-option :value="true">\n                    <div class="media">\n                        <b-icon class="media-left" icon="public"></b-icon>\n                        <div class="media-content">\n                            <h3>Public</h3>\n                            <small>Everyone can see</small>\n                        </div>\n                    </div>\n                </b-dropdown-option>\n\n                <b-dropdown-option :value="false">\n                    <div class="media">\n                        <b-icon class="media-left" icon="people"></b-icon>\n                        <div class="media-content">\n                            <h3>Friends</h3>\n                            <small>Only friends can see</small>\n                        </div>\n                    </div>\n                </b-dropdown-option>\n            </b-dropdown>',code4:"\n            export default {\n                data() {\n                    return {\n                        isPublic: true\n                    }\n                }\n            }"}}}},558:function(o,n,t){o.exports={render:function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"container"},[t("h1",{staticClass:"title is-spaced"},[o._v("Dropdown")]),o._v(" "),t("h2",{staticClass:"subtitle"},[o._v("\n        Dropdowns are very versatile, can used as a quick menu or even like a select for discoverable content\n    ")]),o._v(" "),t("hr"),o._v(" "),o._m(0),o._v(" "),t("div",{staticClass:"example"},[t("b-dropdown",[t("button",{staticClass:"button is-primary",slot:"trigger"},[t("span",[o._v("Click me!")]),o._v(" "),t("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),o._v(" "),t("b-dropdown-option",[o._v("Action")]),o._v(" "),t("b-dropdown-option",[o._v("Another action")]),o._v(" "),t("b-dropdown-option",[o._v("Something else")])],1),o._v(" "),t("b-dropdown",{attrs:{hoverable:""}},[t("button",{staticClass:"button is-info",slot:"trigger"},[t("span",[o._v("Hover me!")]),o._v(" "),t("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),o._v(" "),t("b-dropdown-option",[o._v("Action")]),o._v(" "),t("b-dropdown-option",[o._v("Another action")]),o._v(" "),t("b-dropdown-option",[o._v("Something else")])],1),o._v(" "),t("b-dropdown",{attrs:{disabled:""}},[t("button",{staticClass:"button",slot:"trigger"},[t("span",[o._v("Disabled")]),o._v(" "),t("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),o._v(" "),t("b-dropdown-option",[o._v("Action")]),o._v(" "),t("b-dropdown-option",[o._v("Another action")]),o._v(" "),t("b-dropdown-option",[o._v("Something else")])],1),o._v(" "),t("b-dropdown",[t("p",{staticClass:"tag is-success",slot:"trigger"},[o._v("\n                Custom trigger\n            ")]),o._v(" "),t("b-dropdown-option",[o._v("Action")]),o._v(" "),t("b-dropdown-option",[o._v("Another action")]),o._v(" "),t("b-dropdown-option",[o._v("Something else")])],1)],1),o._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t("code",{staticClass:"html"},[o._v(o._s(o._f("pre")(o.template1)))])]),o._v(" "),t("hr"),o._v(" "),t("h2",{staticClass:"title is-spaced"},[o._v("Dropdown content and position")]),o._v(" "),o._m(1),o._v(" "),t("div",{staticClass:"example is-paddingless"},[t("nav",{staticClass:"navbar"},[t("div",{staticClass:"navbar-brand"},[o._m(2),o._v(" "),t("a",{staticClass:"navbar-item"},[t("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),o._v(" "),t("a",{staticClass:"navbar-item"},[t("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1)]),o._v(" "),t("div",{staticClass:"navbar-menu"},[t("div",{staticClass:"navbar-end"},[t("b-dropdown",{attrs:{position:"is-bottom-left"},model:{value:o.navigation,callback:function(n){o.navigation=n},expression:"navigation"}},[t("a",{staticClass:"navbar-item",slot:"trigger"},[t("span",[o._v("Login")]),o._v(" "),t("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),o._v(" "),t("b-dropdown-option",{attrs:{subheader:"",paddingless:""}},[t("form",{attrs:{action:""}},[t("div",{staticClass:"modal-card",staticStyle:{width:"300px"}},[t("section",{staticClass:"modal-card-body"},[t("b-field",{attrs:{label:"Email"}},[t("b-input",{attrs:{type:"email",placeholder:"Your email",required:""}})],1),o._v(" "),t("b-field",{attrs:{label:"Password"}},[t("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""}})],1),o._v(" "),t("b-checkbox",[o._v("Remember me")])],1),o._v(" "),t("footer",{staticClass:"modal-card-foot"},[t("button",{staticClass:"button is-primary"},[o._v("Login")])])])])])],1)],1)])])]),o._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t("code",{staticClass:"html"},[o._v(o._s(o._f("pre")(o.template2)))])]),o._v(" "),t("hr"),o._v(" "),o._m(3),o._v(" "),t("div",{staticClass:"example is-paddingless"},[t("nav",{staticClass:"navbar"},[t("div",{staticClass:"navbar-brand"},[o._m(4),o._v(" "),t("a",{staticClass:"navbar-item"},[t("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),o._v(" "),t("a",{staticClass:"navbar-item"},[t("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1)]),o._v(" "),t("div",{staticClass:"navbar-menu"},[t("div",{staticClass:"navbar-end"},[t("b-dropdown",{attrs:{position:"is-bottom-left"},model:{value:o.navigation,callback:function(n){o.navigation=n},expression:"navigation"}},[t("a",{staticClass:"navbar-item",slot:"trigger"},[t("span",[o._v("Menu")]),o._v(" "),t("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),o._v(" "),t("b-dropdown-option",{attrs:{subheader:""}},[o._v("\n                            Logged as "),t("b",[o._v("Rafael Beraldo")])]),o._v(" "),t("hr",{staticClass:"dropdown-divider"}),o._v(" "),t("b-dropdown-option",{attrs:{"has-link":""}},[t("a",{attrs:{href:"https://google.com",target:"_blank"}},[t("b-icon",{attrs:{icon:"link"}}),o._v("\n                                Google (link)\n                            ")],1)]),o._v(" "),t("b-dropdown-option",{attrs:{value:"home"}},[t("b-icon",{attrs:{icon:"home"}}),o._v("\n                            Home\n                        ")],1),o._v(" "),t("b-dropdown-option",{attrs:{value:"products"}},[t("b-icon",{attrs:{icon:"shopping_cart"}}),o._v("\n                            Products\n                        ")],1),o._v(" "),t("b-dropdown-option",{attrs:{value:"blog",disabled:""}},[t("b-icon",{attrs:{icon:"art_track"}}),o._v("\n                            Blog\n                        ")],1),o._v(" "),t("hr",{staticClass:"dropdown-divider"}),o._v(" "),t("b-dropdown-option",{attrs:{value:"settings"}},[t("b-icon",{attrs:{icon:"settings"}}),o._v("\n                            Settings\n                        ")],1),o._v(" "),t("b-dropdown-option",{attrs:{value:"logout"}},[t("b-icon",{attrs:{icon:"exit_to_app"}}),o._v("\n                            Logout\n                        ")],1)],1)],1)])])]),o._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t("code",{staticClass:"html"},[o._v(o._s(o._f("pre")(o.template3)))])]),o._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t("code",{staticClass:"javascript"},[o._v(o._s(o._f("pre")(o.code3)))])]),o._v(" "),t("hr"),o._v(" "),t("h2",{staticClass:"title"},[o._v("Customizing with v-model")]),o._v(" "),t("div",{staticClass:"example"},[t("b-dropdown",{model:{value:o.isPublic,callback:function(n){o.isPublic=n},expression:"isPublic"}},[t("button",{staticClass:"button is-primary",attrs:{type:"button"},slot:"trigger"},[o.isPublic?[t("b-icon",{attrs:{icon:"public"}}),o._v(" "),t("span",[o._v("Public")])]:[t("b-icon",{attrs:{icon:"people"}}),o._v(" "),t("span",[o._v("Friends")])],o._v(" "),t("b-icon",{attrs:{icon:"arrow_drop_down"}})],2),o._v(" "),t("b-dropdown-option",{attrs:{value:!0}},[t("div",{staticClass:"media"},[t("b-icon",{staticClass:"media-left",attrs:{icon:"public"}}),o._v(" "),t("div",{staticClass:"media-content"},[t("h3",[o._v("Public")]),o._v(" "),t("small",[o._v("Everyone can see")])])],1)]),o._v(" "),t("b-dropdown-option",{attrs:{value:!1}},[t("div",{staticClass:"media"},[t("b-icon",{staticClass:"media-left",attrs:{icon:"people"}}),o._v(" "),t("div",{staticClass:"media-content"},[t("h3",[o._v("Friends")]),o._v(" "),t("small",[o._v("Only friends can see")])])],1)])],1)],1),o._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[t("code",{staticClass:"html"},[o._v(o._s(o._f("pre")(o.template4)))])]),o._v(" "),t("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t("code",{staticClass:"javascript"},[o._v(o._s(o._f("pre")(o.code4)))])]),o._v(" "),t("hr"),o._v(" "),t("h2",{staticClass:"title is-spaced"},[o._v("API")]),o._v(" "),t("h3",{staticClass:"subtitle"},[o._v("Dropdown")]),o._v(" "),t("b-tabs",[t("b-tab-item",{attrs:{label:"Properties"}},[t("b-table",{attrs:{data:o.dropdownProps,"default-sort":"name"},scopedSlots:o._u([{key:"default",fn:function(n){return[t("b-table-column",{attrs:{field:"name",label:"Name"}},[t("span",{domProps:{innerHTML:o._s(n.row.name)}})]),o._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[t("span",{domProps:{innerHTML:o._s(n.row.description)}})]),o._v(" "),t("b-table-column",{attrs:{field:"type",label:"Type"}},[t("span",[o._v(o._s(n.row.type))])]),o._v(" "),t("b-table-column",{attrs:{field:"values",label:"Values"}},[t("span",{domProps:{innerHTML:o._s(n.row.values)}})]),o._v(" "),t("b-table-column",{attrs:{field:"default",label:"Default"}},[t("span",{domProps:{innerHTML:o._s(n.row.default)}})])]}}])})],1),o._v(" "),t("b-tab-item",{attrs:{label:"Events"}},[t("b-table",{attrs:{data:o.dropdownEvents,"default-sort":"name"},scopedSlots:o._u([{key:"default",fn:function(n){return[t("b-table-column",{attrs:{field:"name",label:"Name"}},[t("span",{domProps:{innerHTML:o._s(n.row.name)}})]),o._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[t("span",{domProps:{innerHTML:o._s(n.row.description)}})]),o._v(" "),t("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[t("span",{domProps:{innerHTML:o._s(n.row.parameters)}})])]}}])})],1),o._v(" "),t("b-tab-item",{attrs:{label:"Methods"}},[t("b-table",{attrs:{data:o.dropdownMethods,"default-sort":"name"},scopedSlots:o._u([{key:"default",fn:function(n){return[t("b-table-column",{attrs:{field:"name",label:"Name"}},[t("span",{domProps:{innerHTML:o._s(n.row.name)}})]),o._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[t("span",{domProps:{innerHTML:o._s(n.row.description)}})])]}}])})],1)],1),o._v(" "),t("h2",{staticClass:"subtitle"},[o._v("Dropdown Option")]),o._v(" "),t("b-tabs",[t("b-tab-item",{attrs:{label:"Properties"}},[t("b-table",{attrs:{data:o.optionProps,"default-sort":"name"},scopedSlots:o._u([{key:"default",fn:function(n){return[t("b-table-column",{attrs:{field:"name",label:"Name"}},[t("span",{domProps:{innerHTML:o._s(n.row.name)}})]),o._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[t("span",{domProps:{innerHTML:o._s(n.row.description)}})]),o._v(" "),t("b-table-column",{attrs:{field:"type",label:"Type"}},[t("span",[o._v(o._s(n.row.type))])]),o._v(" "),t("b-table-column",{attrs:{field:"values",label:"Values"}},[t("span",{domProps:{innerHTML:o._s(n.row.values)}})]),o._v(" "),t("b-table-column",{attrs:{field:"default",label:"Default"}},[t("span",{domProps:{innerHTML:o._s(n.row.default)}})])]}}])})],1),o._v(" "),t("b-tab-item",{attrs:{label:"Events"}},[t("b-table",{attrs:{data:o.optionEvents,"default-sort":"name"},scopedSlots:o._u([{key:"default",fn:function(n){return[t("b-table-column",{attrs:{field:"name",label:"Name"}},[t("span",{domProps:{innerHTML:o._s(n.row.name)}})]),o._v(" "),t("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[t("span",{domProps:{innerHTML:o._s(n.row.description)}})]),o._v(" "),t("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[t("span",{domProps:{innerHTML:o._s(n.row.parameters)}})])]}}])})],1)],1)],1)},staticRenderFns:[function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("p",{staticClass:"content"},[o._v("\n        While it appear as a modal for tablet and smartphones,\n        Dropdowns with "),t("code",[o._v("hoverable")]),o._v(" prop won't change it's behavior to avoid any malfunction with hover.\n    ")])},function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("p",{staticClass:"content"},[o._v("Add the "),t("code",[o._v("subheader")]),o._v(" prop to the option to add "),t("strong",[o._v("any type of content")]),o._v(".")])},function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:t(472),alt:"Buefy"}})])},function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("p",{staticClass:"content"},[o._v("Add the "),t("code",[o._v("has-link")]),o._v(" prop to add a anchor tag / router-link, or "),t("code",[o._v("disabled")]),o._v(" to disable an option.")])},function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:t(472),alt:"Buefy"}})])}]}}});
//# sourceMappingURL=4.0dfdf2d14eb310ef4d3f.js.map