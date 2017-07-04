webpackJsonp([20],{409:function(e,t,a){var n=a(0)(a(447),a(483),null,null);e.exports=n.exports},447:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{props:[{name:"<code>v-model</code>",description:"Binding value",type:"String, Number",values:"—",default:"—"},{name:"<code>type</code>",description:"Same as native input type",type:"String",values:"Any native input type, and <code>textarea</code>",default:"<code>text</code>"},{name:"<code>size</code>",description:"Vertical size of input, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>expanded</code>",description:"Makes input full width when inside a grouped or addon field",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>password-reveal</code>",description:"Add the reveal password functionality",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>loading</code>",description:"Add the loading state to the input",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon</code>",description:"Icon name to be added",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>",default:"<code>mdi</code>"},{name:"<code>autocomplete</code>",description:"Same as native <code>autocomplete</code>",type:"String",values:"<code>on</code>, <code>off</code>",default:"<code>on</code>"},{name:"<code>required</code>",description:"Same as native <code>required</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>disabled</code>",description:"Same as native <code>disabled</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>readonly</code>",description:"Same as native <code>readonly</code>",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>min</code>",description:"Same as native <code>min</code>",type:"Number",values:"—",default:"—"},{name:"<code>max</code>",description:"Same as native <code>max</code>",type:"Number",values:"—",default:"—"},{name:"<code>step</code>",description:"Same as native <code>step</code>",type:"Number",values:"—",default:"—"},{name:"<code>minlength</code>",description:"Same as native <code>minlength</code>",type:"Number",values:"—",default:"—"},{name:"<code>maxlength</code>",description:"Same as native <code>maxlength</code>, also adds character counter",type:"Number",values:"—",default:"—"},{name:"<code>name</code>",description:"Same as native <code>name</code>",type:"String",values:"—",default:"—"},{name:"<code>pattern</code>",description:"Same as native <code>pattern</code>",type:"String",values:"—",default:"—"},{name:"<code>placeholder</code>",description:"Same as native <code>placeholder</code>",type:"String",values:"—",default:"—"}],events:[{name:"<code>[any].native</code>",description:"Listen to native event, can be used with any (click, keydown, keyup, mouseenter, etc.). E.g: <code>click.native</code>",parameters:"<code>event: $event</code>"},{name:"<code>blur</code>",description:"Triggers when input has lost focus",parameters:"<code>event: $event</code>"},{name:"<code>focus</code>",description:"Triggers when input is focused",parameters:"<code>event: $event</code>"},{name:"<code>change</code>",description:"Triggers when input value is changed",parameters:"<code>value: String/Number</code>"}],methods:[{name:"<code>checkHtml5Validity</code>",description:"Check validation of HTML5 (add the message and type/color), also updates the <code>isValid</code> property"},{name:"<code>focus</code>",description:"Set focus (internally uses the native <code>.select()</code> method)"}],template1:'\n            <b-field label="Name">\n                <b-input value="John Silver"></b-input>\n            </b-field>\n\n            <b-field label="Email"\n                type="is-danger"\n                message="This email is invalid">\n                <b-input type="email"\n                    value="john@"\n                    maxlength="30">\n                </b-input>\n            </b-field>\n\n            <b-field label="Username"\n                type="is-success"\n                message="This username is available">\n                <b-input value="johnsilver" maxlength="30"></b-input>\n            </b-field>\n\n            <b-field label="Password">\n                <b-input type="password"\n                    value="iwantmytreasure"\n                    password-reveal>\n                </b-input>\n            </b-field>\n\n            <b-field label="Message">\n                <b-input maxlength="200" type="textarea"></b-input>\n            </b-field>',template2:'\n            <b-field>\n                <b-input placeholder="No label"></b-input>\n            </b-field>\n\n            <b-field label="Label">\n                <b-input placeholder="Text input"></b-input>\n            </b-field>\n\n            <b-field label="Success" type="is-success">\n                <b-input placeholder="Success"></b-input>\n            </b-field>\n\n            <b-field label="Error"\n                type="is-danger"\n                message="You can have a message too">\n                <b-input placeholder="Error"></b-input>\n            </b-field>\n\n            <b-field label="Info" type="is-info">\n                <b-input placeholder="Info"></b-input>\n            </b-field>\n\n            <b-field label="Warning" type="is-warning">\n                <b-input placeholder="Warning"></b-input>\n            </b-field>\n\n            <b-field label="Disabled">\n                <b-input placeholder="Disabled" disabled></b-input>\n            </b-field>\n\n            <b-field label="Loading">\n                <b-input placeholder="Loading" loading></b-input>\n            </b-field>',template3:'\n            <h3 class="subtitle">With Material Design Icons</h3>\n            <b-field>\n                <b-input placeholder="Search..."\n                    type="search"\n                    icon="search">\n                </b-input>\n            </b-field>\n            <b-field>\n                <b-input placeholder="Email"\n                    type="email"\n                    icon="email">\n                </b-input>\n            </b-field>\n            <b-field>\n                <b-input placeholder="Credit card"\n                    icon="payment">\n                </b-input>\n            </b-field>\n\n            <h3 class="subtitle">With FontAwesome</h3>\n            <b-field>\n                <b-input placeholder="Search..."\n                    type="search"\n                    icon-pack="fa"\n                    icon="search">\n                </b-input>\n            </b-field>\n            <b-field>\n                <b-input placeholder="Email"\n                    type="email"\n                    icon-pack="fa"\n                    icon="envelope">\n                </b-input>\n            </b-field>\n            <b-field>\n                <b-input placeholder="Credit card"\n                    icon-pack="fa"\n                    icon="credit-card">\n                </b-input>\n            </b-field>',template4:'\n            <b-field>\n                <b-input placeholder="Email" type="email"></b-input>\n            </b-field>\n\n            <b-field>\n                <b-input placeholder="Number"\n                    type="number"\n                    min="10"\n                    max="20">\n                </b-input>\n            </b-field>\n\n            <b-field>\n                <b-input placeholder="URL" type="url"></b-input>\n            </b-field>\n\n            <b-field>\n                <b-input type="textarea"\n                    minlength="10"\n                    maxlength="100"\n                    placeholder="Maxlength automatically counts characters">\n                </b-input>\n            </b-field>',template5:'\n            <b-field>\n                <b-input type="password"\n                    placeholder="Regular password input">\n                </b-input>\n            </b-field>\n\n            <b-field>\n                <b-input type="password"\n                    placeholder="Password reveal input"\n                    password-reveal>\n                </b-input>\n            </b-field>',template6:'\n            <b-field>\n                <b-input placeholder="Small"\n                    size="is-small"\n                    icon="person">\n                </b-input>\n            </b-field>\n\n            <b-field>\n                <b-input placeholder="Default"\n                    icon="person">\n                </b-input>\n            </b-field>\n\n            <b-field>\n                <b-input placeholder="Medium"\n                    size="is-medium"\n                    icon="person">\n                </b-input>\n            </b-field>\n\n            <b-field>\n                <b-input placeholder="Large"\n                    size="is-large"\n                    icon="person">\n                </b-input>\n            </b-field>'}}}},483:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title is-spaced"},[e._v("Input")]),e._v(" "),a("h2",{staticClass:"subtitle"},[e._v("\n        Get user Input.\n        Use with "),a("strong",[a("router-link",{attrs:{to:"/documentation/field"}},[e._v("Field")])],1),e._v(" to access all functionalities\n    ")]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:"John Silver"}})],1),e._v(" "),a("b-field",{attrs:{label:"Email",type:"is-danger",message:"This email is invalid"}},[a("b-input",{attrs:{type:"email",value:"john@",maxlength:"30"}})],1),e._v(" "),a("b-field",{attrs:{label:"Username",type:"is-success",message:"This username is available"}},[a("b-input",{attrs:{value:"johnsilver",maxlength:"30"}})],1),e._v(" "),a("b-field",{attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password",value:"iwantmytreasure","password-reveal":""}})],1),e._v(" "),a("b-field",{attrs:{label:"Message"}},[a("b-input",{attrs:{maxlength:"200",type:"textarea"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template1)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Types & States")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",[a("b-input",{attrs:{placeholder:"No label"}})],1),e._v(" "),a("b-field",{attrs:{label:"Label"}},[a("b-input",{attrs:{placeholder:"Text input"}})],1),e._v(" "),a("b-field",{attrs:{label:"Success",type:"is-success"}},[a("b-input",{attrs:{placeholder:"Success"}})],1),e._v(" "),a("b-field",{attrs:{label:"Error",type:"is-danger",message:"You can have a message too"}},[a("b-input",{attrs:{placeholder:"Error"}})],1),e._v(" "),a("b-field",{attrs:{label:"Info",type:"is-info"}},[a("b-input",{attrs:{placeholder:"Info"}})],1),e._v(" "),a("b-field",{attrs:{label:"Warning",type:"is-warning"}},[a("b-input",{attrs:{placeholder:"Warning"}})],1),e._v(" "),a("b-field",{attrs:{label:"Disabled"}},[a("b-input",{attrs:{placeholder:"Disabled",disabled:""}})],1),e._v(" "),a("b-field",{attrs:{label:"Loading"}},[a("b-input",{attrs:{placeholder:"Loading",loading:""}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template2)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Icons")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("h3",{staticClass:"subtitle"},[e._v("With Material Design Icons")]),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"search"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Email",type:"email",icon:"email"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Credit card",icon:"payment"}})],1),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("With FontAwesome")]),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Search...",type:"search","icon-pack":"fa",icon:"search"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Email",type:"email","icon-pack":"fa",icon:"envelope"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Credit card","icon-pack":"fa",icon:"credit-card"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template3)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("Validation")]),e._v(" "),a("h3",{staticClass:"subtitle"},[e._v("Automatic HTML5 validation on-blur")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",[a("b-input",{attrs:{placeholder:"Email",type:"email"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Number",type:"number",min:"10",max:"20"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"URL",type:"url"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{type:"textarea",minlength:"10",maxlength:"100",placeholder:"Maxlength automatically counts characters"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template4)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Password")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",[a("b-input",{attrs:{type:"password",placeholder:"Regular password input"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{type:"password",placeholder:"Password reveal input","password-reveal":""}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template5)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title"},[e._v("Sizes")]),e._v(" "),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("b-field",[a("b-input",{attrs:{placeholder:"Small",size:"is-small",icon:"person"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Default",icon:"person"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Medium",size:"is-medium",icon:"person"}})],1),e._v(" "),a("b-field",[a("b-input",{attrs:{placeholder:"Large",size:"is-large",icon:"person"}})],1)],1),e._v(" "),a("div",{staticClass:"column"},[a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[a("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template6)))])])])]),e._v(" "),a("hr"),e._v(" "),a("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),a("b-tabs",[a("b-tab-item",{attrs:{label:"Properties"}},[a("b-table",{attrs:{data:e.props,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(t.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(t.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"type",label:"Type"}},[a("span",[e._v(e._s(t.row.type))])]),e._v(" "),a("b-table-column",{attrs:{field:"values",label:"Values"}},[a("span",{domProps:{innerHTML:e._s(t.row.values)}})]),e._v(" "),a("b-table-column",{attrs:{field:"default",label:"Default"}},[a("span",{domProps:{innerHTML:e._s(t.row.default)}})])]}}])})],1),e._v(" "),a("b-tab-item",{attrs:{label:"Events"}},[a("b-table",{attrs:{data:e.events,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(t.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(t.row.description)}})]),e._v(" "),a("b-table-column",{attrs:{field:"parameters",label:"Parameters"}},[a("span",{domProps:{innerHTML:e._s(t.row.parameters)}})])]}}])})],1),e._v(" "),a("b-tab-item",{attrs:{label:"Methods"}},[a("b-table",{attrs:{data:e.methods,"default-sort":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("b-table-column",{attrs:{field:"name",label:"Name"}},[a("span",{domProps:{innerHTML:e._s(t.row.name)}})]),e._v(" "),a("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[a("span",{domProps:{innerHTML:e._s(t.row.description)}})])]}}])})],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=20.d52cb9bf933d0e861313.js.map