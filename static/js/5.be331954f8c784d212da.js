webpackJsonp([5],{469:function(e,t,a){var n=a(0)(a(566),a(820),null,null,null);e.exports=n.exports},508:function(e,t,a){"use strict";t.a=[{props:[{name:"<code>active</code>",description:"Whether modal is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>component</code>",description:"Component to be injected, used to open a component modal programmatically.\n                    Close modal within the component by emitting a 'close' event — <code>this.$emit('close')</code>.\n                    Be aware that the component won't have access to the main Vue instance (vuex, router, custom components, etc.)",type:"String",values:"—",default:"—"},{name:"<code>props</code>",description:"Props to be binded to the injected component",type:"Object",values:"—",default:"—"},{name:"<code>content</code>",description:"HTML content",type:"String",values:"—",default:"—"},{name:"<code>width</code>",description:"Width of the Modal, maximum of <code>960</code>",type:"Number, String",values:"—",default:"<code>960</code>"},{name:"<code>has-modal-card</code>",description:"If your modal content has a <code>.modal-card</code> as root, add this prop or the card might break on mobile",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animation</code>",description:"Custom animation (transition name)",type:"String",values:"—",default:"<code>zoom-out</code>"},{name:"<code>canCancel</code>",description:"Can close Modal by clicking 'X', pressing escape or clicking outside",type:"Boolean, Array",values:"<code>escape</code>, <code>x</code>, <code>outside</code>",default:"<code>['escape', 'x', 'outside']</code>"},{name:"<code>onCancel</code>",description:"Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside)",type:"Function",values:"—",default:"—"}],events:[{name:"<code>close</code>",description:"Triggers when user closed/canceled or called programmatically from the injected component",parameters:"—"}]}]},519:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["email","password"]}},563:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(698),i=a.n(n);t.default={components:{ModalForm:i.a},data:function(){return{isComponentModalActive:!1,formProps:{email:"evan@you.com",password:"testing"}}}}},564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{imageModal:function(){this.$modal.open('<p class="image is-4by3">\n                    <img src="./static/img/placeholder-1280x960.png">\n                </p>')},cardModal:function(){this.$modal.open({width:640,content:'<div class="card">\n                    <div class="card-image">\n                        <figure class="image is-4by3">\n                        <img src="./static/img/placeholder-1280x960.png" alt="Image">\n                        </figure>\n                    </div>\n                    <div class="card-content">\n                        <div class="media">\n                        <div class="media-left">\n                            <figure class="image is-48x48">\n                            <img src="./static/img/placeholder-1280x960.png" alt="Image">\n                            </figure>\n                        </div>\n                        <div class="media-content">\n                            <p class="title is-4">John Smith</p>\n                            <p class="subtitle is-6">@johnsmith</p>\n                        </div>\n                        </div>\n\n                        <div class="content">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.\n                        <a>#css</a> <a>#responsive</a>\n                        <br>\n                        <small>11:09 PM - 1 Jan 2016</small>\n                        </div>\n                    </div>\n                </div>'})}}}},565:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isImageModalActive:!1,isCardModalActive:!1}}}},566:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(508),i=a(751),s=a.n(i),o=a(662),r=a.n(o),c=a(749),l=a.n(c),d=a(660),m=a.n(d),u=a(609),p=a.n(u),v=a(750),h=a.n(v),g=a(661),f=a.n(g);t.default={components:{ExSimple:s.a,ExComponent:l.a,ExProgrammatic:h.a},data:function(){return{api:n.a,ExSimpleCode:r.a,ExComponentCode:m.a,ModalFormCode:p.a,ExProgrammaticCode:f.a}}}},595:function(e,t,a){t=e.exports=a(451)(!0),t.push([e.i,".modal-card[data-v-0c1098b8]{width:auto}","",{version:3,sources:["C:/projetos/buefy/docs/components/ModalForm.vue"],names:[],mappings:"AACA,6BACI,UAAY,CACf",file:"ModalForm.vue",sourcesContent:["\n.modal-card[data-v-0c1098b8] {\n    width: auto;\n}\n"],sourceRoot:""}])},598:function(e,t,a){var n=a(595);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(452)("acfef9c4",n,!0)},609:function(e,t){e.exports='<template>\r\n    <form action="">\r\n        <div class="modal-card">\r\n            <header class="modal-card-head">\r\n                <p class="modal-card-title">Login</p>\r\n            </header>\r\n            <section class="modal-card-body">\r\n                <b-field label="Email">\r\n                    <b-input\r\n                        type="email"\r\n                        v-model="email"\r\n                        placeholder="Your email"\r\n                        required>\r\n                    </b-input>\r\n                </b-field>\r\n\r\n                <b-field label="Password">\r\n                    <b-input\r\n                        type="password"\r\n                        v-model="password"\r\n                        password-reveal\r\n                        placeholder="Your password"\r\n                        required>\r\n                    </b-input>\r\n                </b-field>\r\n\r\n                <b-checkbox>Remember me</b-checkbox>\r\n            </section>\r\n            <footer class="modal-card-foot">\r\n                <button class="button" type="button" @click="$parent.close()">Close</button>\r\n                <button class="button is-primary">Login</button>\r\n            </footer>\r\n        </div>\r\n    </form>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        props: [\'email\', \'password\']\r\n    }\r\n<\/script>\r\n\r\n<style scoped>\r\n    .modal-card {\r\n        width: auto;\r\n    }\r\n</style>\r\n\r\n'},660:function(e,t){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="isComponentModalActive = true">\r\n            Launch component modal\r\n        </button>\r\n\r\n        <b-modal :active.sync="isComponentModalActive" has-modal-card>\r\n            <modal-form v-bind="formProps"></modal-form>\r\n        </b-modal>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    import ModalForm from \'@/components/ModalForm\'\r\n\r\n    export default {\r\n        components: {\r\n            ModalForm\r\n        },\r\n        data() {\r\n            return {\r\n                isComponentModalActive: false,\r\n                formProps: {\r\n                    email: \'evan@you.com\',\r\n                    password: \'testing\'\r\n                }\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},661:function(e,t){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="imageModal()">\r\n            Launch image modal\r\n        </button>\r\n        <button class="button is-primary is-medium"\r\n            @click="cardModal()">\r\n            Launch card modal\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            imageModal() {\r\n                this.$modal.open(\r\n                    `<p class="image is-4by3">\r\n                        <img src="./static/img/placeholder-1280x960.png">\r\n                    </p>`\r\n                )\r\n            },\r\n            cardModal() {\r\n                this.$modal.open({\r\n                    width: 640,\r\n                    content: `<div class="card">\r\n                        <div class="card-image">\r\n                            <figure class="image is-4by3">\r\n                            <img src="./static/img/placeholder-1280x960.png" alt="Image">\r\n                            </figure>\r\n                        </div>\r\n                        <div class="card-content">\r\n                            <div class="media">\r\n                            <div class="media-left">\r\n                                <figure class="image is-48x48">\r\n                                <img src="./static/img/placeholder-1280x960.png" alt="Image">\r\n                                </figure>\r\n                            </div>\r\n                            <div class="media-content">\r\n                                <p class="title is-4">John Smith</p>\r\n                                <p class="subtitle is-6">@johnsmith</p>\r\n                            </div>\r\n                            </div>\r\n\r\n                            <div class="content">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.\r\n                            <a>#css</a> <a>#responsive</a>\r\n                            <br>\r\n                            <small>11:09 PM - 1 Jan 2016</small>\r\n                            </div>\r\n                        </div>\r\n                    </div>`\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},662:function(e,t){e.exports='<template>\r\n    <section>\r\n        <button class="button is-primary is-medium"\r\n            @click="isImageModalActive = true">\r\n            Launch image modal\r\n        </button>\r\n        <button class="button is-primary is-medium"\r\n            @click="isCardModalActive = true">\r\n            Launch card modal\r\n        </button>\r\n\r\n        <b-modal :active.sync="isImageModalActive">\r\n            <p class="image is-4by3">\r\n                <img src="static/img/placeholder-1280x960.png">\r\n            </p>\r\n        </b-modal>\r\n\r\n        <b-modal :active.sync="isCardModalActive" :width="640">\r\n            <div class="card">\r\n                <div class="card-image">\r\n                    <figure class="image is-4by3">\r\n                        <img src="static/img/placeholder-1280x960.png" alt="Image">\r\n                    </figure>\r\n                </div>\r\n                <div class="card-content">\r\n                    <div class="media">\r\n                        <div class="media-left">\r\n                            <figure class="image is-48x48">\r\n                                <img src="static/img/placeholder-1280x960.png" alt="Image">\r\n                            </figure>\r\n                        </div>\r\n                        <div class="media-content">\r\n                            <p class="title is-4">John Smith</p>\r\n                            <p class="subtitle is-6">@johnsmith</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="content">\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.\r\n                        <a>#css</a> <a>#responsive</a>\r\n                        <br>\r\n                        <small>11:09 PM - 1 Jan 2016</small>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </b-modal>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                isImageModalActive: false,\r\n                isCardModalActive: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},698:function(e,t,a){function n(e){a(598)}var i=a(0)(a(519),a(800),n,"data-v-0c1098b8",null);e.exports=i.exports},749:function(e,t,a){var n=a(0)(a(563),a(821),null,null,null);e.exports=n.exports},750:function(e,t,a){var n=a(0)(a(564),a(827),null,null,null);e.exports=n.exports},751:function(e,t,a){var n=a(0)(a(565),a(880),null,null,null);e.exports=n.exports},800:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{action:""}},[a("div",{staticClass:"modal-card"},[e._m(0),e._v(" "),a("section",{staticClass:"modal-card-body"},[a("b-field",{attrs:{label:"Email"}},[a("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("b-field",{attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("b-checkbox",[e._v("Remember me")])],1),e._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.$parent.close()}}},[e._v("Close")]),e._v(" "),a("button",{staticClass:"button is-primary"},[e._v("Login")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Login")])])}]}},820:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-spaced"},[e._v("Modal")]),e._v(" "),a("h2",{staticClass:"subtitle"},[e._v("Classic modal overlay to include any content you may need")]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"block"},[a("ex-simple")],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"html"},[e._v(e._s(e.ExSimpleCode))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Component Modal")]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"block"},[a("ex-component")],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[a("code",{staticClass:"html"},[e._v(e._s(e.ExComponentCode))])]),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("ModalForm component")]),e._v(" "),a("b-message",{attrs:{type:"is-warning"}},[a("b",[e._v("Note:")]),e._v(" You should't mutate a prop directly, this is just an example.\n    ")]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[a("code",{staticClass:"html"},[e._v(e._s(e.ModalFormCode))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("Programmatically opening HTML Modal")]),e._v(" "),a("div",{staticClass:"block"},[a("ex-programmatic")],1),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[a("code",{staticClass:"html"},[e._v(e._s(e.ExProgrammaticCode))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),a("api-view",{attrs:{data:e.api}})],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("A modal with a component. When you want to close the Modal, call the 'close' method — "),a("code",[e._v("this.$parent.close()")]),e._v(" — from the component's parent.")])])}]}},821:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.isComponentModalActive=!0}}},[e._v("\n        Launch component modal\n    ")]),e._v(" "),a("b-modal",{attrs:{active:e.isComponentModalActive,"has-modal-card":""},on:{"update:active":function(t){e.isComponentModalActive=t}}},[a("modal-form",e._b({},"modal-form",e.formProps,!1))],1)],1)},staticRenderFns:[]}},827:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.imageModal()}}},[e._v("\n        Launch image modal\n    ")]),e._v(" "),a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.cardModal()}}},[e._v("\n        Launch card modal\n    ")])])},staticRenderFns:[]}},880:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.isImageModalActive=!0}}},[e._v("\n        Launch image modal\n    ")]),e._v(" "),a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.isCardModalActive=!0}}},[e._v("\n        Launch card modal\n    ")]),e._v(" "),a("b-modal",{attrs:{active:e.isImageModalActive},on:{"update:active":function(t){e.isImageModalActive=t}}},[a("p",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"static/img/placeholder-1280x960.png"}})])]),e._v(" "),a("b-modal",{attrs:{active:e.isCardModalActive,width:640},on:{"update:active":function(t){e.isCardModalActive=t}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"static/img/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{attrs:{src:"static/img/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[e._v("John Smith")]),e._v(" "),a("p",{staticClass:"subtitle is-6"},[e._v("@johnsmith")])])]),e._v(" "),a("div",{staticClass:"content"},[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Phasellus nec iaculis mauris. "),a("a",[e._v("@bulmaio")]),e._v(".\n                    "),a("a",[e._v("#css")]),e._v(" "),a("a",[e._v("#responsive")]),e._v(" "),a("br"),e._v(" "),a("small",[e._v("11:09 PM - 1 Jan 2016")])])])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.be331954f8c784d212da.js.map