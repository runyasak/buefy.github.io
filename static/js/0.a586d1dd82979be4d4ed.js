webpackJsonp([0,24,25,26,28,29],{391:function(t,e,s){var a=s(0)(null,s(431),null,null);t.exports=a.exports},392:function(t,e,s){var a=s(0)(null,s(433),null,null);t.exports=a.exports},393:function(t,e,s){var a=s(0)(null,s(435),null,null);t.exports=a.exports},394:function(t,e,s){var a=s(0)(null,s(430),null,null);t.exports=a.exports},395:function(t,e,s){var a=s(0)(null,s(436),null,null);t.exports=a.exports},398:function(t,e,s){var a=s(0)(s(442),s(479),null,null);t.exports=a.exports},423:function(t,e,s){t.exports=s.p+"static/img/buefy.027baee.png"},425:function(t,e){t.exports={name:"buefy",version:"0.4.5",homepage:"https://buefy.github.io",description:"Lightweight UI components for Vue.js based on Bulma",author:"Rafael Beraldo <rafael.pimpa@gmail.com>",license:"MIT",main:"lib/index.js",files:["lib","src"],repository:{type:"git",url:"https://github.com/rafaelpimpa/buefy.git"},bugs:{url:"https://github.com/rafaelpimpa/buefy/issues"},scripts:{dev:"node build/dev-server.js","build:lib:clean":"rimraf lib","build:lib:js":"vue build src/index.js --prod --lib Buefy --dist lib","build:lib:sass":"node-sass --output-style expanded --source-map true --include-path node_modules src/scss/buefy-build.scss lib/buefy.css","build:lib:autoprefix":"postcss --use autoprefixer --output lib/buefy.css lib/buefy.css","build:lib":"npm run build:lib:clean && npm run build:lib:js && npm run build:lib:sass && npm run build:lib:autoprefix","build:docs":"node build/build.js",build:"npm run build:lib && npm run build:docs"},keywords:["bulma","vue","vuejs","vue-bulma","components"],dependencies:{bulma:"^0.4.3",vue:"^2.3.4"},devDependencies:{autoprefixer:"^7.1.1","babel-core":"^6.22.1","babel-loader":"^6.2.10","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.2.1","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",bluebird:"^3.5.0",chalk:"^1.1.3","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","css-loader":"^0.26.1",eslint:"^3.19.0","eslint-config-vue":"^2.0.2","eslint-plugin-vue":"^2.0.1","eventsource-polyfill":"^0.9.6",express:"^4.14.1","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.10.0","friendly-errors-webpack-plugin":"^1.1.3","function-bind":"^1.1.0","highlight.js":"^9.10.0","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3","node-sass":"^4.5.3",opn:"^4.0.2","optimize-css-assets-webpack-plugin":"^1.3.0",ora:"^1.1.0","postcss-cli":"^4.0.0",rimraf:"^2.6.0","sass-loader":"^6.0.3",scrollreveal:"^3.3.5",semver:"^5.3.0","url-loader":"^0.5.7","vue-analytics":"^4.1.2","vue-loader":"^11.1.4","vue-progressbar":"^0.7.1","vue-resource":"^1.3.3","vue-router":"^2.2.0","vue-style-loader":"^2.0.0","vue-template-compiler":"^2.3.3",webpack:"^2.2.1","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.16.1","webpack-merge":"^2.6.1"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie < 10"]}},426:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(425),i=s.n(a);e.default={props:{home:Boolean},data:function(){return{isMenuActive:!1,version:i.a.version}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,s="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa",a="status=1,width=575,height=400,top="+e+",left="+t;window.open(s,"",a)}}}},427:function(t,e,s){t.exports=s.p+"static/img/buefy-light.5467348.png"},428:function(t,e,s){var a=s(0)(null,s(432),null,null);t.exports=a.exports},429:function(t,e,s){var a=s(0)(s(426),s(434),null,null);t.exports=a.exports},430:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-left"},[s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"quick-start"}},[t._v("Quick Start")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"customization"}},[t._v("Customization")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"constructor-options"}},[t._v("Constructor Options")])],1)},staticRenderFns:[]}},431:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-left"},[s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"table"}},[t._v("Table")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"pagination"}},[t._v("Pagination")])],1)},staticRenderFns:[]}},432:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("p",[t._v("Made with "),s("b-icon",{attrs:{icon:"favorite",type:"is-danger"}}),t._v(" by "),s("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[t._v("Rafael Beraldo")]),t._v(".")],1),t._v(" "),t._m(0),t._v(" "),s("b-field",[s("p",{staticClass:"control"},[s("a",{staticClass:"button",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[s("b-icon",{attrs:{pack:"fa",icon:"github"}}),t._v(" "),s("span",[t._v("GitHub")])],1)]),t._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-twitter",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[s("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),s("span",[t._v("Twitter")])],1)])])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("small",[t._v("\n                    The source code is licensed under "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(".\n                    "),s("br"),t._v("\n                    The website content is licensed under "),s("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[t._v("CC ANS 4.0")]),t._v(".\n                ")])])}]}},433:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-left"},[s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"field"}},[t._v("Field")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"input"}},[t._v("Input")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"select"}},[t._v("Select")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"autocomplete"}},[t._v("Autocomplete")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"checkbox"}},[t._v("Checkbox")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"radio"}},[t._v("Radio")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"switch"}},[t._v("Switch")])],1)},staticRenderFns:[]}},434:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"nav"},[a("div",{staticClass:"container"},[a("div",{staticClass:"nav-left"},[a("router-link",{staticClass:"nav-item is-brand",attrs:{to:"/",exact:""}},[t.home?a("img",{attrs:{src:s(427),alt:"Buefy"}}):a("img",{attrs:{src:s(423),alt:"Buefy"}})])],1),t._v(" "),a("div",{staticClass:"nav-center"},[a("a",{staticClass:"nav-item",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[a("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),t._v(" "),a("a",{staticClass:"nav-item",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[a("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1)]),t._v(" "),a("span",{staticClass:"nav-toggle",class:{"is-active":t.isMenuActive},on:{click:function(e){t.isMenuActive=!t.isMenuActive}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")]),t._v(" "),a("div",{staticClass:"nav-right nav-menu",class:{"is-active":t.isMenuActive}},[a("router-link",{staticClass:"nav-item",attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),a("router-link",{staticClass:"nav-item",attrs:{to:"/documentation"}},[t._v("Documentation")]),t._v(" "),a("div",{staticClass:"nav-item"},[a("a",{staticClass:"button is-outlined",class:t.home?"is-light":"is-twitter",on:{click:t.tweet}},[a("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),a("span",[t._v("Tweet")])],1)])],1)])])},staticRenderFns:[]}},435:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-left"},[s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"layout"}},[t._v("Layout")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"icon"}},[t._v("Icon")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"dropdown"}},[t._v("Dropdown")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"modal"}},[t._v("Modal")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"tabs"}},[t._v("Tabs")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"tooltip"}},[t._v("Tooltip")])],1)},staticRenderFns:[]}},436:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-left"},[s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"dialog"}},[t._v("Dialog")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"toast"}},[t._v("Toast")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"snackbar"}},[t._v("Snackbar")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"notification"}},[t._v("Notification")]),t._v(" "),s("router-link",{staticClass:"nav-item is-tab",attrs:{to:"message"}},[t._v("Message")])],1)},staticRenderFns:[]}},442:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(429),i=s.n(a),n=s(428),r=s.n(n),o=s(394),l=s.n(o),c=s(393),u=s.n(c),v=s(395),p=s.n(v),b=s(392),d=s.n(b),m=s(391),f=s.n(m);e.default={components:{AppHeader:i.a,AppFooter:r.a},data:function(){return{currentTab:l.a,tabs:[{title:"Installation",component:l.a},{title:"General",component:u.a},{title:"Notices",component:p.a},{title:"Form",component:d.a},{title:"Data",component:f.a}]}},beforeRouteEnter:function(t,e,s){s(function(e){e.currentTab=t.meta.category})}}},479:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("app-header"),t._v(" "),s("div",{staticClass:"hero is-primary"},[t._m(0),t._v(" "),s("div",{staticClass:"hero-foot"},[s("nav",{staticClass:"tabs is-boxed"},[s("div",{staticClass:"container"},[s("ul",t._l(t.tabs,function(e){return s("li",{key:e.title,class:{"is-active":t.currentTab===e.component}},[s("a",{on:{click:function(s){t.currentTab=e.component}}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])])}))])])])]),t._v(" "),s("nav",{staticClass:"nav has-shadow"},[s("div",{staticClass:"container"},[s(t.currentTab,{tag:"component"})],1)]),t._v(" "),s("section",{staticClass:"section"},[s("router-view")],1),t._v(" "),s("app-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("Documentation")]),t._v(" "),s("h2",{staticClass:"subtitle"},[t._v("Learn everything you need to start using Buefy ;)")])])])}]}}});
//# sourceMappingURL=0.a586d1dd82979be4d4ed.js.map