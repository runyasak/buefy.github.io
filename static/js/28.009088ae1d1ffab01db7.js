webpackJsonp([28],{503:function(t,e,o){var s=o(0)(o(647),o(954),null,null,null);t.exports=s.exports},553:function(t,e,o){"use strict";e.a=[{props:[{name:"<code>type</code>",description:"Type (color) of the toast",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-dark</code>"},{name:"<code>message</code>",description:"Message text",type:"String",values:"—",default:"—"},{name:"<code>position</code>",description:"Which position the toast will appear",type:"String",values:"<code>is-top-right</code>, <code>is-top</code>, <code>is-top-left</code>, <code>is-bottom-right</code>, <code>is-bottom</code>, <code>is-bottom-left</code>",default:"<code>is-top</code>"},{name:"<code>duration</code>",description:"Visibility duration in milliseconds",type:"Number",values:"—",default:"<code>2000</code>"},{name:"<code>queue</code>",description:"If should queue with others notices (snackbar/toast)",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>container</code>",description:"DOM element the toast will be created on. Note that this also changes the <code>position</code> of the toast from <code>fixed</code> to <code>absolute</code>. Meaning that the container should be <code>fixed</code>.",type:"String",values:"—",default:"<code>body</code>"}]}]},615:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{toast:function(){this.$toast.open("Something happened")},success:function(){this.$toast.open({message:"Something happened correctly!",type:"is-success"})},danger:function(){this.$toast.open({duration:5e3,message:"Something's not good, also I'm on bottom",position:"is-bottom",type:"is-danger"})}}}},647:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(553),n=o(882),c=o.n(n),i=o(772),a=o.n(i);e.default={components:{ExSimple:c.a},data:function(){return{api:s.a,ExSimpleCode:a.a}}}},772:function(t,e){t.exports="<template>\r\n    <section>\r\n        <button class=\"button is-medium\" @click=\"toast\">\r\n            Launch toast (default)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-success\" @click=\"success\">\r\n            Launch toast (custom)\r\n        </button>\r\n\r\n        <button class=\"button is-medium is-danger\" @click=\"danger\">\r\n            Launch toast (custom)\r\n        </button>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        methods: {\r\n            toast() {\r\n                this.$toast.open('Something happened')\r\n            },\r\n            success() {\r\n                this.$toast.open({\r\n                    message: 'Something happened correctly!',\r\n                    type: 'is-success'\r\n                })\r\n            },\r\n            danger() {\r\n                this.$toast.open({\r\n                    duration: 5000,\r\n                    message: `Something's not good, also I'm on bottom`,\r\n                    position: 'is-bottom',\r\n                    type: 'is-danger'\r\n                })\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n"},882:function(t,e,o){var s=o(0)(o(615),o(993),null,null,null);t.exports=s.exports},954:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",{staticClass:"title is-spaced"},[t._v("Toast")]),t._v(" "),o("h2",{staticClass:"subtitle"},[t._v("Toasts are simple text messages to inform the user")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"content"},[o("p",[t._v("They have a slightly transparency and are queued to not confuse the user.")]),t._v(" "),o("p",[o("small",[o("b",[t._v("Note:")]),t._v(" They queue with "),o("router-link",{attrs:{to:"/documentation/snackbar"}},[t._v("Snackbars")]),t._v(" as well.")],1)]),t._v(" "),t._m(0),t._v(" "),o("p",[t._v("\n            You can disable queue by passing the "),o("code",[t._v("queue: false")]),t._v(" object attribute or by using\n            "),o("router-link",{attrs:{to:"/documentation/constructor-options"}},[t._v("constructor options")]),t._v(".\n        ")],1)]),t._v(" "),o("div",{staticClass:"block"},[o("ex-simple")],1),t._v(" "),o("CodeView",{attrs:{code:t.ExSimpleCode}}),t._v(" "),o("hr"),t._v(" "),o("h2",{staticClass:"title is-spaced"},[t._v("API")]),t._v(" "),o("ApiView",{attrs:{data:t.api}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tags has-addons"},[o("span",{staticClass:"tag is-success"},[t._v("New!")]),t._v(" "),o("span",{staticClass:"tag is-info"},[t._v("0.6.2")])])}]}},993:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("button",{staticClass:"button is-medium",on:{click:t.toast}},[t._v("\n        Launch toast (default)\n    ")]),t._v(" "),o("button",{staticClass:"button is-medium is-success",on:{click:t.success}},[t._v("\n        Launch toast (custom)\n    ")]),t._v(" "),o("button",{staticClass:"button is-medium is-danger",on:{click:t.danger}},[t._v("\n        Launch toast (custom)\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=28.009088ae1d1ffab01db7.js.map