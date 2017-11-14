webpackJsonp([6],{476:function(e,n,t){var a=t(0)(t(611),t(957),null,null,null);e.exports=a.exports},525:function(e,n,t){"use strict";n.a=[{props:[{name:"<code>v-model</code>",description:"Binding value",type:"String, Number",values:"—",default:"—"},{name:"<code>type</code>",description:"Input type, like native",type:"String",values:"Any native input type, and <code>textarea</code>",default:"<code>text</code>"},{name:"<code>size</code>",description:"Vertical size of input, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>expanded</code>",description:"Makes input full width when inside a grouped or addon field",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>password-reveal</code>",description:"Add the reveal password functionality",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>loading</code>",description:"Add the loading state to the input",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>icon</code>",description:"Icon name to be added",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"<code>mdi</code>, <code>fa</code>",default:"<code>mdi</code>"},{name:"<code>maxlength</code>",description:"Same as native <code>maxlength</code>, plus character counter",type:"String, Number",values:"—",default:"—"},{name:"<code>has-counter</code>",description:"Show character counter when <code>maxlength</code> prop is passed",type:"Boolean",values:"—",default:"true"},{name:"Any native attribute",description:"—",type:"—",values:"—",default:"—"}],events:[{name:"<code>input</code>",description:"Triggers when value is changed",parameters:"<code>value: String|Number</code>"},{name:"<code>focus</code>",description:"Triggers when input has received focus",parameters:"<code>event: $event</code>"},{name:"<code>blur</code>",description:"Triggers when input has lost focus",parameters:"<code>event: $event</code>"},{name:"<code>[any].native</code>",description:"Listen to any native event, e.g. <code>click.native</code>",parameters:"<code>event: $event</code>"}],methods:[{name:"<code>checkHtml5Validity</code>",description:"Check validation of HTML5 (add the message and type/color), also updates the <code>isValid</code> property",return:"<code>isValid: Boolean</code>"},{name:"<code>focus</code>",description:"Set focus (internally uses the native <code>.select()</code> method)",return:"—"}]}]},561:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{name:"John Silver"}}}},611:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(525),r=t(785),i=t.n(r),l=t(683),s=t.n(l),o=t(787),c=t.n(o),d=t(685),p=t.n(d),u=t(783),b=t.n(u),f=t(681),v=t.n(f),m=t(788),h=t.n(m),_=t(686),x=t.n(_),y=t(784),g=t.n(y),C=t(682),w=t.n(C),E=t(786),S=t.n(E),k=t(684),I=t.n(k);n.default={components:{ExSimple:i.a,ExTypesStates:c.a,ExIcons:b.a,ExValidation:h.a,ExPassword:g.a,ExSizes:S.a},data:function(){return{api:a.a,ExSimpleCode:s.a,ExTypesStatesCode:p.a,ExIconsCode:v.a,ExValidationCode:x.a,ExPasswordCode:w.a,ExSizesCode:I.a}}}},681:function(e,n){e.exports='<template>\r\n    <section>\r\n        <h3 class="subtitle">With Material Design Icons</h3>\r\n        <b-field>\r\n            <b-input placeholder="Search..."\r\n                type="search"\r\n                icon="magnify">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Email"\r\n                type="email"\r\n                icon="email">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Credit card"\r\n                icon="credit-card">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <h3 class="subtitle">With FontAwesome</h3>\r\n        <b-field>\r\n            <b-input placeholder="Search..."\r\n                type="search"\r\n                icon-pack="fa"\r\n                icon="search">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Email"\r\n                type="email"\r\n                icon-pack="fa"\r\n                icon="envelope">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Credit card"\r\n                icon-pack="fa"\r\n                icon="credit-card">\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},682:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input type="password"\r\n                placeholder="Regular password input">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input type="password"\r\n                placeholder="Password reveal input"\r\n                password-reveal>\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},683:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field label="Name">\r\n            <b-input v-model="name"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Email"\r\n            type="is-danger"\r\n            message="This email is invalid">\r\n            <b-input type="email"\r\n                value="john@"\r\n                maxlength="30"\r\n                :has-counter="false">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Username"\r\n            type="is-success"\r\n            message="This username is available">\r\n            <b-input value="johnsilver" maxlength="30"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Password">\r\n            <b-input type="password"\r\n                value="iwantmytreasure"\r\n                password-reveal>\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Message">\r\n            <b-input maxlength="200" type="textarea"></b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                name: \'John Silver\'\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},684:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input placeholder="Small"\r\n                size="is-small"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Default"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Medium"\r\n                size="is-medium"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Large"\r\n                size="is-large"\r\n                icon="account">\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},685:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input placeholder="No label"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Label">\r\n            <b-input placeholder="Text input"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Success" type="is-success">\r\n            <b-input placeholder="Success"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Error"\r\n            type="is-danger"\r\n            message="You can have a message too">\r\n            <b-input placeholder="Error"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Info" type="is-info">\r\n            <b-input placeholder="Info"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Warning" type="is-warning">\r\n            <b-input placeholder="Warning"></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Disabled">\r\n            <b-input placeholder="Disabled" disabled></b-input>\r\n        </b-field>\r\n\r\n        <b-field label="Loading">\r\n            <b-input placeholder="Loading" loading></b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},686:function(e,n){e.exports='<template>\r\n    <section>\r\n        <b-field>\r\n            <b-input placeholder="Email" type="email"></b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="Number"\r\n                type="number"\r\n                min="10"\r\n                max="20">\r\n            </b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input placeholder="URL" type="url"></b-input>\r\n        </b-field>\r\n\r\n        <b-field>\r\n            <b-input type="textarea"\r\n                minlength="10"\r\n                maxlength="100"\r\n                placeholder="Maxlength automatically counts characters">\r\n            </b-input>\r\n        </b-field>\r\n    </section>\r\n</template>\r\n'},783:function(e,n,t){var a=t(0)(null,t(891),null,null,null);e.exports=a.exports},784:function(e,n,t){var a=t(0)(null,t(905),null,null,null);e.exports=a.exports},785:function(e,n,t){var a=t(0)(t(561),t(898),null,null,null);e.exports=a.exports},786:function(e,n,t){var a=t(0)(null,t(919),null,null,null);e.exports=a.exports},787:function(e,n,t){var a=t(0)(null,t(966),null,null,null);e.exports=a.exports},788:function(e,n,t){var a=t(0)(null,t(863),null,null,null);e.exports=a.exports},863:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{placeholder:"Email",type:"email"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Number",type:"number",min:"10",max:"20"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"URL",type:"url"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{type:"textarea",minlength:"10",maxlength:"100",placeholder:"Maxlength automatically counts characters"}})],1)],1)},staticRenderFns:[]}},891:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("h3",{staticClass:"subtitle"},[e._v("With Material Design Icons")]),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"magnify"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Email",type:"email",icon:"email"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Credit card",icon:"credit-card"}})],1),e._v(" "),t("h3",{staticClass:"subtitle"},[e._v("With FontAwesome")]),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Search...",type:"search","icon-pack":"fa",icon:"search"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Email",type:"email","icon-pack":"fa",icon:"envelope"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Credit card","icon-pack":"fa",icon:"credit-card"}})],1)],1)},staticRenderFns:[]}},898:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",{attrs:{label:"Name"}},[t("b-input",{model:{value:e.name,callback:function(n){e.name=n},expression:"name"}})],1),e._v(" "),t("b-field",{attrs:{label:"Email",type:"is-danger",message:"This email is invalid"}},[t("b-input",{attrs:{type:"email",value:"john@",maxlength:"30","has-counter":!1}})],1),e._v(" "),t("b-field",{attrs:{label:"Username",type:"is-success",message:"This username is available"}},[t("b-input",{attrs:{value:"johnsilver",maxlength:"30"}})],1),e._v(" "),t("b-field",{attrs:{label:"Password"}},[t("b-input",{attrs:{type:"password",value:"iwantmytreasure","password-reveal":""}})],1),e._v(" "),t("b-field",{attrs:{label:"Message"}},[t("b-input",{attrs:{maxlength:"200",type:"textarea"}})],1)],1)},staticRenderFns:[]}},905:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{type:"password",placeholder:"Regular password input"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{type:"password",placeholder:"Password reveal input","password-reveal":""}})],1)],1)},staticRenderFns:[]}},919:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{placeholder:"Small",size:"is-small",icon:"account"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Default",icon:"account"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Medium",size:"is-medium",icon:"account"}})],1),e._v(" "),t("b-field",[t("b-input",{attrs:{placeholder:"Large",size:"is-large",icon:"account"}})],1)],1)},staticRenderFns:[]}},957:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h1",{staticClass:"title is-spaced"},[e._v("Input")]),e._v(" "),t("h2",{staticClass:"subtitle"},[e._v("\n        Get user Input.\n        Use with "),t("strong",[t("router-link",{attrs:{to:"/documentation/field"}},[e._v("Field")])],1),e._v(" to access all functionalities\n    ")]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("ex-simple")],1),e._v(" "),t("div",{staticClass:"column"},[t("CodeView",{attrs:{code:e.ExSimpleCode}})],1)]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Types and states")]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("ex-types-states")],1),e._v(" "),t("div",{staticClass:"column"},[t("CodeView",{attrs:{code:e.ExTypesStatesCode}})],1)]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Icons")]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("ex-icons")],1),e._v(" "),t("div",{staticClass:"column"},[t("CodeView",{attrs:{code:e.ExIconsCode}})],1)]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title is-spaced"},[e._v("Validation")]),e._v(" "),t("h3",{staticClass:"subtitle"},[e._v("Automatic HTML5 validation on-blur")]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("ex-validation")],1),e._v(" "),t("div",{staticClass:"column"},[t("CodeView",{attrs:{code:e.ExValidationCode}})],1)]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Password")]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("ex-password")],1),e._v(" "),t("div",{staticClass:"column"},[t("CodeView",{attrs:{code:e.ExPasswordCode}})],1)]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title"},[e._v("Sizes")]),e._v(" "),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("ex-sizes")],1),e._v(" "),t("div",{staticClass:"column"},[t("CodeView",{attrs:{code:e.ExSizesCode}})],1)]),e._v(" "),t("hr"),e._v(" "),t("h2",{staticClass:"title is-spaced"},[e._v("API")]),e._v(" "),t("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"content"},[e._v("You can use the "),t("code",[e._v("password-reveal")]),e._v(" prop to add a button that reveals password")])}]}},966:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",[t("b-field",[t("b-input",{attrs:{placeholder:"No label"}})],1),e._v(" "),t("b-field",{attrs:{label:"Label"}},[t("b-input",{attrs:{placeholder:"Text input"}})],1),e._v(" "),t("b-field",{attrs:{label:"Success",type:"is-success"}},[t("b-input",{attrs:{placeholder:"Success"}})],1),e._v(" "),t("b-field",{attrs:{label:"Error",type:"is-danger",message:"You can have a message too"}},[t("b-input",{attrs:{placeholder:"Error"}})],1),e._v(" "),t("b-field",{attrs:{label:"Info",type:"is-info"}},[t("b-input",{attrs:{placeholder:"Info"}})],1),e._v(" "),t("b-field",{attrs:{label:"Warning",type:"is-warning"}},[t("b-input",{attrs:{placeholder:"Warning"}})],1),e._v(" "),t("b-field",{attrs:{label:"Disabled"}},[t("b-input",{attrs:{placeholder:"Disabled",disabled:""}})],1),e._v(" "),t("b-field",{attrs:{label:"Loading"}},[t("b-input",{attrs:{placeholder:"Loading",loading:""}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.773c9f72e88729291804.js.map