webpackJsonp([6],{466:function(n,t,e){var o=e(0)(e(561),e(889),null,null,null);n.exports=o.exports},483:function(n,t,e){n.exports=e.p+"static/img/buefy.027baee.png"},506:function(n,t,e){"use strict";t.a=[{title:"Dropdown",props:[{name:"<code>v-model</code>",description:"Binding value",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>hoverable</code>",description:"Dropdown will be triggered by hover instead of click",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>position</code>",description:"Optional, position of the dropdown relative to the trigger",type:"String",values:"<code>is-top-right</code>, <code>is-top-left</code>, <code>is-bottom-left</code>",default:"Bottom right"},{name:"<code>disabled</code>",description:"Disables dropdown",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>inline</code>",description:"Dropdown content (items) are shown inline, trigger is removed",type:"Boolean",values:"—",default:"<code>false</code>"}],events:[{name:"<code>change</code>",description:"Triggers when an item is selected",parameters:"<code>value: String</code>"},{name:"<code>active-change</code>",description:"Triggers when dropdown is activated or deactivated (visibility of list)",parameters:"<code>active: Boolean</code>"}],methods:[{name:"<code>toggle</code>",description:"Toggle activation (dropdown list visibility)"}]},{title:"Item",props:[{name:"<code>value</code>",description:"The value that will be returned on events and v-model",type:"Any",values:"—",default:"<code>null</code>"},{name:"<code>separator</code>",description:"Set the item to be a separator",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Item is disabled",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>custom</code>",description:"Item is not a clickable item",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>has-link</code>",description:"Use it if your item is an anchor tag or <code>router-link</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>paddingless</code>",description:"Remove padding",type:"Boolean",values:"—",default:"<code>false</code>"}],events:[{name:"<code>click</code>",description:"Triggers when the item is clicked",parameters:"—"}]}]},558:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(483),r=e.n(o);t.default={data:function(){return{logo:r.a}}}},559:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isPublic:!0}}}},560:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(483),r=e.n(o);t.default={data:function(){return{logo:r.a,navigation:"home"}}}},561:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(506),r=e(746),i=e.n(r),a=e(657),s=e.n(a),d=e(743),c=e.n(d),l=e(654),p=e.n(l),v=e(745),b=e.n(v),m=e(656),u=e.n(m),_=e(744),g=e.n(_),w=e(655),f=e.n(w);t.default={components:{ExSimple:i.a,ExContentPosition:c.a,ExHasLinkDisabled:b.a,ExCustomize:g.a},data:function(){return{api:o.a,ExSimpleCode:s.a,ExContentPositionCode:p.a,ExHasLinkDisabledCode:u.a,ExCustomizeCode:f.a}}}},596:function(n,t,e){t=n.exports=e(451)(!0),t.push([n.i,".tag[data-v-46f4bf80]{cursor:pointer}","",{version:3,sources:["C:/projetos/buefy/docs/pages/documentation/general/dropdown/examples/ExSimple.vue"],names:[],mappings:"AACA,sBACI,cAAgB,CACnB",file:"ExSimple.vue",sourcesContent:["\n.tag[data-v-46f4bf80] {\n    cursor: pointer;\n}\n"],sourceRoot:""}])},599:function(n,t,e){var o=e(596);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);e(452)("3758e0ca",o,!0)},654:function(n,t){n.exports='<template>\r\n    <nav class="navbar">\r\n        <div class="navbar-brand">\r\n            <a class="navbar-item">\r\n                <img :src="logo" alt="Buefy">\r\n            </a>\r\n            <a class="navbar-item"><b-icon pack="fa" icon="github"></b-icon></a>\r\n            <a class="navbar-item"><b-icon pack="fa" icon="twitter"></b-icon></a>\r\n        </div>\r\n\r\n        <div class="navbar-menu">\r\n            <div class="navbar-end">\r\n                <b-dropdown v-model="navigation" position="is-bottom-left">\r\n                    <a class="navbar-item" slot="trigger">\r\n                        <span>Login</span>\r\n                        <b-icon icon="arrow_drop_down"></b-icon>\r\n                    </a>\r\n\r\n                    <b-dropdown-item custom paddingless>\r\n                        <form action="">\r\n                            <div class="modal-card" style="width:300px;">\r\n                                <section class="modal-card-body">\r\n                                    <b-field label="Email">\r\n                                        <b-input\r\n                                            type="email"\r\n                                            placeholder="Your email"\r\n                                            required>\r\n                                        </b-input>\r\n                                    </b-field>\r\n\r\n                                    <b-field label="Password">\r\n                                        <b-input\r\n                                            type="password"\r\n                                            password-reveal\r\n                                            placeholder="Your password"\r\n                                            required>\r\n                                        </b-input>\r\n                                    </b-field>\r\n\r\n                                    <b-checkbox>Remember me</b-checkbox>\r\n                                </section>\r\n                                <footer class="modal-card-foot">\r\n                                    <button class="button is-primary">Login</button>\r\n                                </footer>\r\n                            </div>\r\n                        </form>\r\n                    </b-dropdown-item>\r\n                </b-dropdown>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</template>\r\n\r\n<script>\r\n    import logo from \'@/assets/buefy.png\'\r\n\r\n    export default {\r\n        data() {\r\n            return { logo }\r\n        }\r\n    }\r\n<\/script>\r\n'},655:function(n,t){n.exports='<template>\r\n    <b-dropdown v-model="isPublic">\r\n        <button class="button is-primary" type="button" slot="trigger">\r\n            <template v-if="isPublic">\r\n                <b-icon icon="public"></b-icon>\r\n                <span>Public</span>\r\n            </template>\r\n            <template v-else>\r\n                <b-icon icon="people"></b-icon>\r\n                <span>Friends</span>\r\n            </template>\r\n            <b-icon icon="arrow_drop_down"></b-icon>\r\n        </button>\r\n\r\n        <b-dropdown-item :value="true">\r\n            <div class="media">\r\n                <b-icon class="media-left" icon="public"></b-icon>\r\n                <div class="media-content">\r\n                    <h3>Public</h3>\r\n                    <small>Everyone can see</small>\r\n                </div>\r\n            </div>\r\n        </b-dropdown-item>\r\n\r\n        <b-dropdown-item :value="false">\r\n            <div class="media">\r\n                <b-icon class="media-left" icon="people"></b-icon>\r\n                <div class="media-content">\r\n                    <h3>Friends</h3>\r\n                    <small>Only friends can see</small>\r\n                </div>\r\n            </div>\r\n        </b-dropdown-item>\r\n    </b-dropdown>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isPublic: true\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},656:function(n,t){n.exports='<template>\r\n    <nav class="navbar">\r\n        <div class="navbar-brand">\r\n            <a class="navbar-item">\r\n                <img :src="logo" alt="Buefy">\r\n            </a>\r\n            <a class="navbar-item"><b-icon pack="fa" icon="github"></b-icon></a>\r\n            <a class="navbar-item"><b-icon pack="fa" icon="twitter"></b-icon></a>\r\n        </div>\r\n\r\n        <div class="navbar-menu">\r\n            <div class="navbar-end">\r\n                <b-dropdown v-model="navigation" position="is-bottom-left">\r\n                    <a class="navbar-item" slot="trigger">\r\n                        <span>Menu</span>\r\n                        <b-icon icon="arrow_drop_down"></b-icon>\r\n                    </a>\r\n\r\n                    <b-dropdown-item custom>\r\n                        Logged as <b>Rafael Beraldo</b>\r\n                    </b-dropdown-item>\r\n                    <hr class="dropdown-divider">\r\n                    <b-dropdown-item has-link>\r\n                        <a href="https://google.com" target="_blank">\r\n                            <b-icon icon="link"></b-icon>\r\n                            Google (link)\r\n                        </a>\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="home">\r\n                        <b-icon icon="home"></b-icon>\r\n                        Home\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="products">\r\n                        <b-icon icon="shopping_cart"></b-icon>\r\n                        Products\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="blog" disabled>\r\n                        <b-icon icon="art_track"></b-icon>\r\n                        Blog\r\n                    </b-dropdown-item>\r\n                    <hr class="dropdown-divider">\r\n                    <b-dropdown-item value="settings">\r\n                        <b-icon icon="settings"></b-icon>\r\n                        Settings\r\n                    </b-dropdown-item>\r\n                    <b-dropdown-item value="logout">\r\n                        <b-icon icon="exit_to_app"></b-icon>\r\n                        Logout\r\n                    </b-dropdown-item>\r\n                </b-dropdown>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</template>\r\n\r\n<script>\r\n    import logo from \'@/assets/buefy.png\'\r\n\r\n    export default {\r\n        data() {\r\n            return {\r\n                logo,\r\n                navigation: \'home\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},657:function(n,t){n.exports='<template>\r\n    <section>\r\n        <b-dropdown>\r\n            <button class="button is-primary" slot="trigger">\r\n                <span>Click me!</span>\r\n                <b-icon icon="arrow_drop_down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown hoverable>\r\n            <button class="button is-info" slot="trigger">\r\n                <span>Hover me!</span>\r\n                <b-icon icon="arrow_drop_down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown disabled>\r\n            <button class="button" slot="trigger">\r\n                <span>Disabled</span>\r\n                <b-icon icon="arrow_drop_down"></b-icon>\r\n            </button>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n\r\n        <b-dropdown>\r\n            <p class="tag is-success" slot="trigger">\r\n                Custom trigger\r\n            </p>\r\n\r\n            <b-dropdown-item>Action</b-dropdown-item>\r\n            <b-dropdown-item>Another action</b-dropdown-item>\r\n            <b-dropdown-item>Something else</b-dropdown-item>\r\n        </b-dropdown>\r\n    </section>\r\n</template>\r\n\r\n<style scoped>\r\n    .tag {\r\n        cursor: pointer;\r\n    }\r\n</style>\r\n'},743:function(n,t,e){var o=e(0)(e(558),e(865),null,null,null);n.exports=o.exports},744:function(n,t,e){var o=e(0)(e(559),e(845),null,null,null);n.exports=o.exports},745:function(n,t,e){var o=e(0)(e(560),e(810),null,null,null);n.exports=o.exports},746:function(n,t,e){function o(n){e(599)}var r=e(0)(null,e(839),o,"data-v-46f4bf80",null);n.exports=r.exports},810:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:n.logo,alt:"Buefy"}})]),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1)]),n._v(" "),e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end"},[e("b-dropdown",{attrs:{position:"is-bottom-left"},model:{value:n.navigation,callback:function(t){n.navigation=t},expression:"navigation"}},[e("a",{staticClass:"navbar-item",slot:"trigger"},[e("span",[n._v("Menu")]),n._v(" "),e("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),n._v(" "),e("b-dropdown-item",{attrs:{custom:""}},[n._v("\n                    Logged as "),e("b",[n._v("Rafael Beraldo")])]),n._v(" "),e("hr",{staticClass:"dropdown-divider"}),n._v(" "),e("b-dropdown-item",{attrs:{"has-link":""}},[e("a",{attrs:{href:"https://google.com",target:"_blank"}},[e("b-icon",{attrs:{icon:"link"}}),n._v("\n                        Google (link)\n                    ")],1)]),n._v(" "),e("b-dropdown-item",{attrs:{value:"home"}},[e("b-icon",{attrs:{icon:"home"}}),n._v("\n                    Home\n                ")],1),n._v(" "),e("b-dropdown-item",{attrs:{value:"products"}},[e("b-icon",{attrs:{icon:"shopping_cart"}}),n._v("\n                    Products\n                ")],1),n._v(" "),e("b-dropdown-item",{attrs:{value:"blog",disabled:""}},[e("b-icon",{attrs:{icon:"art_track"}}),n._v("\n                    Blog\n                ")],1),n._v(" "),e("hr",{staticClass:"dropdown-divider"}),n._v(" "),e("b-dropdown-item",{attrs:{value:"settings"}},[e("b-icon",{attrs:{icon:"settings"}}),n._v("\n                    Settings\n                ")],1),n._v(" "),e("b-dropdown-item",{attrs:{value:"logout"}},[e("b-icon",{attrs:{icon:"exit_to_app"}}),n._v("\n                    Logout\n                ")],1)],1)],1)])])},staticRenderFns:[]}},839:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("b-dropdown",[e("button",{staticClass:"button is-primary",slot:"trigger"},[e("span",[n._v("Click me!")]),n._v(" "),e("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1),n._v(" "),e("b-dropdown",{attrs:{hoverable:""}},[e("button",{staticClass:"button is-info",slot:"trigger"},[e("span",[n._v("Hover me!")]),n._v(" "),e("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1),n._v(" "),e("b-dropdown",{attrs:{disabled:""}},[e("button",{staticClass:"button",slot:"trigger"},[e("span",[n._v("Disabled")]),n._v(" "),e("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1),n._v(" "),e("b-dropdown",[e("p",{staticClass:"tag is-success",slot:"trigger"},[n._v("\n            Custom trigger\n        ")]),n._v(" "),e("b-dropdown-item",[n._v("Action")]),n._v(" "),e("b-dropdown-item",[n._v("Another action")]),n._v(" "),e("b-dropdown-item",[n._v("Something else")])],1)],1)},staticRenderFns:[]}},845:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-dropdown",{model:{value:n.isPublic,callback:function(t){n.isPublic=t},expression:"isPublic"}},[e("button",{staticClass:"button is-primary",attrs:{type:"button"},slot:"trigger"},[n.isPublic?[e("b-icon",{attrs:{icon:"public"}}),n._v(" "),e("span",[n._v("Public")])]:[e("b-icon",{attrs:{icon:"people"}}),n._v(" "),e("span",[n._v("Friends")])],n._v(" "),e("b-icon",{attrs:{icon:"arrow_drop_down"}})],2),n._v(" "),e("b-dropdown-item",{attrs:{value:!0}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"media-left",attrs:{icon:"public"}}),n._v(" "),e("div",{staticClass:"media-content"},[e("h3",[n._v("Public")]),n._v(" "),e("small",[n._v("Everyone can see")])])],1)]),n._v(" "),e("b-dropdown-item",{attrs:{value:!1}},[e("div",{staticClass:"media"},[e("b-icon",{staticClass:"media-left",attrs:{icon:"people"}}),n._v(" "),e("div",{staticClass:"media-content"},[e("h3",[n._v("Friends")]),n._v(" "),e("small",[n._v("Only friends can see")])])],1)])],1)},staticRenderFns:[]}},865:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:n.logo,alt:"Buefy"}})]),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),n._v(" "),e("a",{staticClass:"navbar-item"},[e("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1)]),n._v(" "),e("div",{staticClass:"navbar-menu"},[e("div",{staticClass:"navbar-end"},[e("b-dropdown",{attrs:{position:"is-bottom-left"},model:{value:n.navigation,callback:function(t){n.navigation=t},expression:"navigation"}},[e("a",{staticClass:"navbar-item",slot:"trigger"},[e("span",[n._v("Login")]),n._v(" "),e("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),n._v(" "),e("b-dropdown-item",{attrs:{custom:"",paddingless:""}},[e("form",{attrs:{action:""}},[e("div",{staticClass:"modal-card",staticStyle:{width:"300px"}},[e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Email"}},[e("b-input",{attrs:{type:"email",placeholder:"Your email",required:""}})],1),n._v(" "),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""}})],1),n._v(" "),e("b-checkbox",[n._v("Remember me")])],1),n._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button is-primary"},[n._v("Login")])])])])])],1)],1)])])},staticRenderFns:[]}},889:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-spaced"},[n._v("Dropdown")]),n._v(" "),e("h2",{staticClass:"subtitle"},[n._v("\n        Dropdowns are very versatile, can used as a quick menu or even like a select for discoverable content\n    ")]),n._v(" "),e("hr"),n._v(" "),n._m(0),n._v(" "),e("div",{staticClass:"example"},[e("ex-simple")],1),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[e("code",{staticClass:"html"},[n._v(n._s(n.ExSimpleCode))])]),n._v(" "),e("hr"),n._v(" "),e("h2",{staticClass:"title is-spaced"},[n._v("Dropdown content and position")]),n._v(" "),n._m(1),n._v(" "),e("div",{staticClass:"example is-paddingless"},[e("ex-content-position")],1),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[e("code",{staticClass:"html"},[n._v(n._s(n.ExContentPositionCode))])]),n._v(" "),n._m(2),n._v(" "),e("div",{staticClass:"example is-paddingless"},[e("ex-has-link-disabled")],1),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[e("code",{staticClass:"html"},[n._v(n._s(n.ExHasLinkDisabledCode))])]),n._v(" "),e("hr"),n._v(" "),e("h2",{staticClass:"title"},[n._v("Customizing with v-model")]),n._v(" "),e("div",{staticClass:"example"},[e("ex-customize")],1),n._v(" "),e("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"example-code"},[e("code",{staticClass:"html"},[n._v(n._s(n.ExCustomizeCode))])]),n._v(" "),e("hr"),n._v(" "),e("h2",{staticClass:"title is-spaced"},[n._v("API")]),n._v(" "),e("api-view",{attrs:{data:n.api}})],1)},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",{staticClass:"content"},[n._v("\n        While it appear as a modal for tablet and smartphones,\n        Dropdowns with "),e("code",[n._v("hoverable")]),n._v(" prop won't change it's behavior to avoid any malfunction with hover.\n    ")])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",{staticClass:"content"},[n._v("Add the "),e("code",[n._v("custom")]),n._v(" prop to the item to add "),e("strong",[n._v("any type of content")]),n._v(".")])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",{staticClass:"content"},[n._v("Add the "),e("code",[n._v("has-link")]),n._v(" prop to add a anchor tag / router-link, or "),e("code",[n._v("disabled")]),n._v(" to disable an item.")])}]}}});
//# sourceMappingURL=6.6d94266ebb2146fbe63f.js.map