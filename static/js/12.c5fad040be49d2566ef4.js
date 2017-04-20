webpackJsonp([12],{360:function(e,t,s){var n=s(0)(s(391),s(407),null,null);e.exports=n.exports},391:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{sass:"\n                // Import Bulma's core\n                @import \"~bulma/sass/utilities/_all\";\n\n                // Set your colors\n                $primary: #8c67ef;\n                $primary-invert: findColorInvert($primary);\n                $twitter: #4099FF;\n                $twitter-invert: findColorInvert($twitter);\n                $facebook: #4267B2;\n                $facebook-invert: findColorInvert($facebook);\n                $google-plus: #DB4437;\n                $google-plus-invert: findColorInvert($google-plus);\n\n                // Setup $colors to use as bulma classes (e.g. 'is-twitter')\n                $colors: (\n                    white: ($white, $black),\n                    black: ($black, $white),\n                    light: ($light, $light-invert),\n                    dark: ($dark, $dark-invert),\n                    primary: ($primary, $primary-invert),\n                    info: ($info, $info-invert),\n                    success: ($success, $success-invert),\n                    warning: ($warning, $warning-invert),\n                    danger: ($danger, $danger-invert),\n                    twitter: ($twitter, $twitter-invert),\n                    facebook: ($facebook, $facebook-invert),\n                    google-plus: ($google-plus, $google-plus-invert)\n                );\n\n                // Links\n                $link: $primary;\n                $link-invert: $primary-invert;\n                $link-focus-border: $primary;\n                ",sassFinal:'\n                ... // Your variables\n\n                @import "~bulma";\n                @import "~buefy/src/scss/buefy";',importing:"\n                import Vue from 'vue'\n                import Buefy from 'buefy'\n\n                Vue.use(Buefy)\n\n                // OR\n\n                Vue.component(Buefy.Checkbox.name, Buefy.Checkbox)\n                Vue.component(Buefy.Table.name, Buefy.Table)\n                ..."}}}},407:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",{staticClass:"title is-spaced"},[e._v("Customizing theme with Sass")]),e._v(" "),e._m(0),e._v(" "),s("hr"),e._v(" "),e._m(1),e._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[s("code",{staticClass:"bash"},[e._v("npm install buefy")])]),e._v(" "),e._m(2),e._v(" "),s("hr"),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("div",{staticClass:"example"},[s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"sass"},[e._v(e._s(e._f("pre")(e.sass)))])])]),e._v(" "),s("hr"),e._v(" "),e._m(5),e._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"sass"},[e._v(e._s(e._f("pre")(e.sassFinal)))])]),e._v(" "),s("hr"),e._v(" "),e._m(6),e._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.importing)))])]),e._v(" "),s("hr"),e._v(" "),e._m(7)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{staticClass:"subtitle"},[e._v("\n        If you're familiar with "),s("a",{attrs:{href:"http://sass-lang.com/"}},[e._v("Sass")]),e._v(" and want to "),s("strong",[e._v("customize")]),e._v("\n        Buefy with your own theme,follow these steps\n    ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{staticClass:"subtitle"},[s("span",{staticClass:"list-number"},[e._v("1")]),e._v(" Install Buefy via npm")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"content"},[e._v("or clone the repository: "),s("a",{attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[e._v("https://github.com/rafaelpimpa/buefy")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{staticClass:"subtitle"},[s("span",{staticClass:"list-number"},[e._v("2")]),e._v(" Set your variables with Sass")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"content"},[s("b",[e._v("Tip:")]),e._v(" You can see all Bulma's variables "),s("a",{attrs:{href:"http://bulma.io/documentation/overview/variables/",target:"_blank"}},[e._v("here")]),e._v(".\n        There's also another variable created by Buefy: "),s("code",[e._v("$speed-slow: 150ms !default")]),e._v(".\n    ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{staticClass:"subtitle"},[s("span",{staticClass:"list-number"},[e._v("3")]),e._v(" Import Bulma and Buefy styles "),s("em",[e._v("after")]),e._v(" having set your variables")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h3",{staticClass:"subtitle"},[s("span",{staticClass:"list-number"},[e._v("4")]),e._v(" Import and use Buefy. You can also enable individual components")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"content"},[e._v("\n        If you're still not sure how to proceed, take a look at this "),s("a",{attrs:{href:"https://github.com/rafaelpimpa/buefy-simple",target:"_blank"}},[e._v("\n        repository with a basic setup to customize Buefy")]),e._v(".\n    ")])}]}}});
//# sourceMappingURL=12.c5fad040be49d2566ef4.js.map