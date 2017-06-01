webpackJsonp([3],{399:function(e,t,a){var n=a(0)(a(436),a(489),null,null);e.exports=n.exports},423:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["email","password"]}},436:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(459),s=a.n(n);t.default={data:function(){return{ModalForm:s.a,isImageModalActive:!1,isCardModalActive:!1,isComponentModalActive:!1,formProps:{email:"evan@you.com",password:"testing"},props:[{name:"<code>active</code>",description:"Whether modal is active or not, use the <code>.sync</code> modifier to make it two-way binding",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>component</code>",description:"Component to be shown. Close Modal programatically by emitting a 'close' event — <code>this.$emit('close')</code> — from the component",type:"String",values:"—",default:"—"},{name:"<code>props</code>",description:"Props to be binded to the injected component",type:"Object",values:"—",default:"—"},{name:"<code>content</code>",description:"HTML content",type:"String",values:"—",default:"—"},{name:"<code>width</code>",description:"Width of the Modal, maximum of <code>960</code>",type:"Number, String",values:"—",default:"<code>960</code>"},{name:"<code>canCancel</code>",description:"Can close Modal by clicking 'X', pressing escape or clicking outside",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>onCancel</code>",description:"Callback function to call after user canceled (clicked 'X' / pressed escape / clicked outside)",type:"Function",values:"—",default:"—"}],events:[{name:"<code>close</code>",description:"Triggers when user closed/canceled or called programmatically from the injected component",parameters:"—"}],template1:'\n            <button class="button is-primary is-medium" @click="isImageModalActive = true">Launch image modal</button>\n            <button class="button is-primary is-medium" @click="isCardModalActive = true">Launch card modal</button>\n\n            <b-modal :active.sync="isImageModalActive">\n                <p class="image is-4by3">\n                    <img src="static/placeholder-1280x960.png">\n                </p>\n            </b-modal>\n\n            <b-modal :active.sync="isCardModalActive" :width="640">\n                <div class="card">\n                    <div class="card-image">\n                        <figure class="image is-4by3">\n                            <img src="static/placeholder-1280x960.png" alt="Image">\n                        </figure>\n                    </div>\n                    <div class="card-content">\n                        <div class="media">\n                            <div class="media-left">\n                                <figure class="image is-48x48">\n                                    <img src="static/placeholder-1280x960.png" alt="Image">\n                                </figure>\n                            </div>\n                            <div class="media-content">\n                                <p class="title is-4">John Smith</p>\n                                <p class="subtitle is-6">@johnsmith</p>\n                            </div>\n                        </div>\n\n                        <div class="content">\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.\n                            <a>#css</a> <a>#responsive</a>\n                            <br>\n                            <small>11:09 PM - 1 Jan 2016</small>\n                        </div>\n                    </div>\n                </div>\n            </b-modal>\n            ',template2:'\n            <button class="button is-primary is-medium" @click="isComponentModalActive = true">Launch component modal</button>\n\n            <b-modal\n                :active.sync="isComponentModalActive"\n                :component="ModalForm"\n                :props="formProps"\n                :width="380">\n            </b-modal>',code2:"\n            import ModalForm from './components/ModalForm'\n\n            export default {\n                data() {\n                    return {\n                        ModalForm,\n                        isComponentModalActive: false,\n                        formProps: {\n                            email: 'evan@you.com',\n                            password: 'testing'\n                        }\n                    }\n                }\n            }",code3:'\n            export default {\n                methods: {\n                    imageModal() {\n                        this.$modal.open(\n                            `<p class="image is-4by3">\n                                <img src="./static/placeholder-1280x960.png">\n                            </p>`\n                        )\n                    },\n                    cardModal() {\n                        this.$modal.open({\n                            width: 640,\n                            content: `<div class="card">\n                                <div class="card-image">\n                                    <figure class="image is-4by3">\n                                        <img src="./static/placeholder-1280x960.png" alt="Image">\n                                    </figure>\n                                </div>\n                                <div class="card-content">\n                                    <div class="media">\n                                        <div class="media-left">\n                                            <figure class="image is-48x48">\n                                                <img src="./static/placeholder-1280x960.png" alt="Image">\n                                            </figure>\n                                        </div>\n                                        <div class="media-content">\n                                            <p class="title is-4">John Smith</p>\n                                            <p class="subtitle is-6">@johnsmith</p>\n                                        </div>\n                                    </div>\n\n                                    <div class="content">\n                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.\n                                        <a>#css</a> <a>#responsive</a>\n                                        <br>\n                                        <small>11:09 PM - 1 Jan 2016</small>\n                                    </div>\n                                </div>\n                            </div>`\n                        })\n                    }\n                }\n            }',code4:"\n            import ModalForm from './components/ModalForm'\n\n            export default {\n                methods: {\n                    componentModal() {\n                        this.$modal.open({\n                            component: ModalForm,\n                            width: 380,\n                            props: {\n                                email: 'evan@you.com',\n                                password: 'testing'\n                            }\n                        })\n                    }\n                }\n            }",component:'\n            <template>\n                <div class="modal-card">\n                    <form action="">\n                        <header class="modal-card-head">\n                            <p class="modal-card-title">Login</p>\n                        </header>\n                        <section class="modal-card-body">\n                            <b-field label="Email">\n                                <b-input\n                                    type="email"\n                                    v-model="email"\n                                    placeholder="Your email"\n                                    required>\n                                </b-input>\n                            </b-field>\n\n                            <b-field label="Password">\n                                <b-input\n                                    type="password"\n                                    v-model="password"\n                                    password-reveal\n                                    placeholder="Your password"\n                                    required>\n                                </b-input>\n                            </b-field>\n\n                            <b-checkbox>Remember me</b-checkbox>\n                        </section>\n                        <footer class="modal-card-foot">\n                            <button class="button" type="button" @click="$emit(\'close\')">Close</button>\n                            <button class="button is-primary">Login</button>\n                        </footer>\n                    </form>\n                </div>\n            </template>\n\n            <script>\n                export default {\n                    props: [\'email\', \'password\']\n                }\n            <\/script>\n\n\n            <style scoped>\n                .modal-card {\n                    margin: 0 auto;\n                    width: auto;\n                }\n            </style>'}},methods:{componentModal:function(){this.$modal.open({component:s.a,width:380,props:{email:"evan@you.com",password:"testing"}})},imageModal:function(){this.$modal.open('<p class="image is-4by3">\n                    <img src="./static/placeholder-1280x960.png">\n                </p>')},cardModal:function(){this.$modal.open({width:640,content:'<div class="card">\n                    <div class="card-image">\n                        <figure class="image is-4by3">\n                        <img src="./static/placeholder-1280x960.png" alt="Image">\n                        </figure>\n                    </div>\n                    <div class="card-content">\n                        <div class="media">\n                        <div class="media-left">\n                            <figure class="image is-48x48">\n                            <img src="./static/placeholder-1280x960.png" alt="Image">\n                            </figure>\n                        </div>\n                        <div class="media-content">\n                            <p class="title is-4">John Smith</p>\n                            <p class="subtitle is-6">@johnsmith</p>\n                        </div>\n                        </div>\n\n                        <div class="content">\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.\n                        <a>#css</a> <a>#responsive</a>\n                        <br>\n                        <small>11:09 PM - 1 Jan 2016</small>\n                        </div>\n                    </div>\n                </div>'})}}}},447:function(e,t,a){t=e.exports=a(386)(),t.push([e.i,".modal-card[data-v-0c1098b8]{margin:0 auto;width:auto}","",{version:3,sources:["C:/projetos/buefy/docs/components/ModalForm.vue"],names:[],mappings:"AACA,6BACI,cAAe,AACf,UAAY,CACf",file:"ModalForm.vue",sourcesContent:["\n.modal-card[data-v-0c1098b8] {\n    margin: 0 auto;\n    width: auto;\n}\n"],sourceRoot:""}])},448:function(e,t,a){var n=a(447);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(411)("725447f8",n,!0)},459:function(e,t,a){a(448);var n=a(0)(a(423),a(469),"data-v-0c1098b8",null);e.exports=n.exports},469:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-card"},[a("form",{attrs:{action:""}},[e._m(0),e._v(" "),a("section",{staticClass:"modal-card-body"},[a("b-field",{attrs:{label:"Email"}},[a("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),a("b-field",{attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("b-checkbox",[e._v("Remember me")])],1),e._v(" "),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(t){e.$emit("close")}}},[e._v("Close")]),e._v(" "),a("button",{staticClass:"button is-primary"},[e._v("Login")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Login")])])}]}},489:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-spaced"},[e._v("Modal")]),e._v(" "),a("h2",{staticClass:"subtitle"},[e._v("Classic modal overlay to include any content you may need")]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"block"},[a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.isImageModalActive=!0}}},[e._v("Launch image modal")]),e._v(" "),a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.isCardModalActive=!0}}},[e._v("Launch card modal")])]),e._v(" "),a("b-modal",{attrs:{active:e.isImageModalActive},on:{"update:active":function(t){e.isImageModalActive=t}}},[a("p",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"static/placeholder-1280x960.png"}})])]),e._v(" "),a("b-modal",{attrs:{active:e.isCardModalActive,width:640},on:{"update:active":function(t){e.isCardModalActive=t}}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-4by3"},[a("img",{attrs:{src:"static/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{attrs:{src:"static/placeholder-1280x960.png",alt:"Image"}})])]),e._v(" "),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[e._v("John Smith")]),e._v(" "),a("p",{staticClass:"subtitle is-6"},[e._v("@johnsmith")])])]),e._v(" "),a("div",{staticClass:"content"},[e._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Phasellus nec iaculis mauris. "),a("a",[e._v("@bulmaio")]),e._v(".\n                    "),a("a",[e._v("#css")]),e._v(" "),a("a",[e._v("#responsive")]),e._v(" "),a("br"),e._v(" "),a("small",[e._v("11:09 PM - 1 Jan 2016")])])])])]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template1)))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Component Modal")]),e._v(" "),a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("button",{staticClass:"button is-primary is-medium",on:{click:function(t){e.isComponentModalActive=!0}}},[e._v("Launch component modal")])]),e._v(" "),a("b-modal",{attrs:{active:e.isComponentModalActive,component:e.ModalForm,props:e.formProps,width:380},on:{"update:active":function(t){e.isComponentModalActive=t}}}),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template2)))])]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code2)))])]),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("ModalForm component")]),e._v(" "),e._m(2),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.component)))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("Programmatically opening")]),e._v(" "),a("div",{staticClass:"block"},[a("button",{staticClass:"button is-primary is-medium",on:{click:e.imageModal}},[e._v("Launch image modal")]),e._v(" "),a("button",{staticClass:"button is-primary is-medium",on:{click:e.cardModal}},[e._v("Launch card modal")])]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code3)))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Programmatically opening Component Modal")]),e._v(" "),a("div",{staticClass:"content"},[e._m(3),e._v(" "),e._m(4),e._v(" "),a("button",{staticClass:"button is-primary is-medium",on:{click:e.componentModal}},[e._v("Launch component modal")])]),e._v(" "),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code4)))])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),a("b-tabs",[a("b-tab-item",{attrs:{label:"Properties"}},[a("b-table",{attrs:{data:e.props,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(t.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(t.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"type",label:"Type"}},[a("span",[e._v(e._s(t.row.type))])]),e._v(" "),a("b-table-column",{attrs:{field:"values",label:"Values"}},[a("span",{domProps:{innerHTML:e._s(t.row.values)}})]),e._v(" "),a("b-table-column",{attrs:{field:"default",label:"Default"}},[a("span",{domProps:{innerHTML:e._s(t.row.default)}})])]}}])})],1),e._v(" "),a("b-tab-item",{attrs:{label:"Events"}},[a("b-table",{attrs:{data:e.events,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(t.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(t.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[a("span",{domProps:{innerHTML:e._s(t.row.parameters)}})])]}}])})],1)],1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A modal with an injected component. When you want to close the Modal, emit a 'close' event — "),a("code",[e._v("this.$emit('close')")]),e._v(" — from the component.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The component will receive all props from the "),a("code",[e._v("props")]),e._v(" object.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"content"},[a("b",[e._v("Note:")]),e._v(" You should't mutate a prop directly, this is just an example.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A modal with an injected component. When you want to close the Modal, emit a 'close' event — "),a("code",[e._v("this.$emit('close')")]),e._v(" — from the component.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The component will receive all props from the "),a("code",[e._v("props")]),e._v(" object.")])}]}}});
//# sourceMappingURL=3.1e957ec35b8d612a6f3a.js.map