webpackJsonp([1],{330:function(t,e,n){var i=n(0)(n(358),n(393),null,null);t.exports=i.exports},350:function(t,e,n){t.exports=n.p+"static/img/buefy.027baee.png"},351:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(48);e.default={props:{home:Boolean},data:function(){return{isMenuActive:!1}},methods:{tweet:function(){var t=(window.screen.width-575)/2,e=(window.screen.height-400)/2,n="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa",i="status=1,width=575,height=400,top="+e+",left="+t;window.open(n,"",i)}},created:function(){var t=this;i.EventBus.$on("routeBeforeEach",function(e,n){t.isMenuActive=!1})}}},352:function(t,e,n){t.exports=n.p+"static/img/buefy-light.5467348.png"},353:function(t,e,n){var i=n(0)(null,n(355),null,null);t.exports=i.exports},354:function(t,e,n){var i=n(0)(n(351),n(356),null,null);t.exports=i.exports},355:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("p",[t._v("Made with "),n("b-icon",{attrs:{icon:"favorite",type:"is-danger"}}),t._v(" by "),n("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[t._v("Rafael Beraldo")]),t._v(".")],1),t._v(" "),t._m(0),t._v(" "),n("b-field",[n("p",{staticClass:"control"},[n("a",{staticClass:"button",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[n("b-icon",{attrs:{pack:"fa",icon:"github"}}),t._v(" "),n("span",[t._v("GitHub")])],1)]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-twitter",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[n("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),n("span",[t._v("Twitter")])],1)])])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("small",[t._v("\n                    The source code is licensed under "),n("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[t._v("MIT")]),t._v(".\n                    "),n("br"),t._v("\n                    The website content is licensed under "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[t._v("CC ANS 4.0")]),t._v(".\n                ")])])}]}},356:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"nav"},[i("div",{staticClass:"container"},[i("div",{staticClass:"nav-left"},[i("router-link",{staticClass:"nav-item is-brand",attrs:{to:"/",exact:""}},[t.home?i("img",{attrs:{src:n(352),alt:"Buefy"}}):i("img",{attrs:{src:n(350),alt:"Buefy"}})])],1),t._v(" "),i("div",{staticClass:"nav-center"},[i("a",{staticClass:"nav-item",attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[i("b-icon",{attrs:{pack:"fa",icon:"github"}})],1),t._v(" "),i("a",{staticClass:"nav-item",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[i("b-icon",{attrs:{pack:"fa",icon:"twitter"}})],1)]),t._v(" "),i("span",{staticClass:"nav-toggle",class:{"is-active":t.isMenuActive},on:{click:function(e){t.isMenuActive=!t.isMenuActive}}},[i("span"),t._v(" "),i("span"),t._v(" "),i("span")]),t._v(" "),i("div",{staticClass:"nav-right nav-menu",class:{"is-active":t.isMenuActive}},[i("router-link",{staticClass:"nav-item",attrs:{to:"/",exact:""}},[t._v("Home")]),t._v(" "),i("router-link",{staticClass:"nav-item",attrs:{to:"/documentation"}},[t._v("Documentation")]),t._v(" "),i("div",{staticClass:"nav-item"},[i("a",{staticClass:"button is-outlined",class:t.home?"is-light":"is-twitter",on:{click:t.tweet}},[i("b-icon",{attrs:{pack:"fa",icon:"twitter"}}),t._v(" "),i("span",[t._v("Tweet")])],1)])],1)])])},staticRenderFns:[]}},358:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(379),s=n.n(i),o=n(354),r=n.n(o),a=n(353),c=n.n(a);e.default={name:"app",components:{AppHeader:r.a,AppFooter:c.a},mounted:function(){var t=s()({duration:600,delay:200});t.reveal(".home-hero",{delay:0,origin:"top"},200),t.reveal(".features",200)}}},379:function(t,e,n){var i;!function(){"use strict";function s(t){return void 0===this||Object.getPrototypeOf(this)!==s.prototype?new s(t):(A=this,A.version="3.3.4",A.tools=new q,A.isSupported()?(A.tools.extend(A.defaults,t||{}),A.defaults.container=o(A.defaults),A.store={elements:{},containers:[]},A.sequences={},A.history=[],A.uid=0,A.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),A)}function o(t){if(t&&t.container){if("string"==typeof t.container)return window.document.documentElement.querySelector(t.container);if(A.tools.isNode(t.container))return t.container;console.log('ScrollReveal: invalid container "'+t.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return A.defaults.container}function r(t,e){return"string"==typeof t?Array.prototype.slice.call(e.querySelectorAll(t)):A.tools.isNode(t)?[t]:A.tools.isNodeList(t)?Array.prototype.slice.call(t):[]}function a(){return++A.uid}function c(t,e,n){e.container&&(e.container=n),t.config?t.config=A.tools.extendClone(t.config,e):t.config=A.tools.extendClone(A.defaults,e),"top"===t.config.origin||"bottom"===t.config.origin?t.config.axis="Y":t.config.axis="X"}function l(t){var e=window.getComputedStyle(t.domEl);t.styles||(t.styles={transition:{},transform:{},computed:{}},t.styles.inline=t.domEl.getAttribute("style")||"",t.styles.inline+="; visibility: visible; ",t.styles.computed.opacity=e.opacity,e.transition&&"all 0s ease 0s"!==e.transition?t.styles.computed.transition=e.transition+", ":t.styles.computed.transition=""),t.styles.transition.instant=u(t,0),t.styles.transition.delayed=u(t,t.config.delay),t.styles.transform.initial=" -webkit-transform:",t.styles.transform.target=" -webkit-transform:",f(t),t.styles.transform.initial+="transform:",t.styles.transform.target+="transform:",f(t)}function u(t,e){var n=t.config;return"-webkit-transition: "+t.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; transition: "+t.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+e/1e3+"s; "}function f(t){var e,n=t.config,i=t.styles.transform;e="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+e+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+t.styles.computed.opacity+";"}function d(t){var e=t.config.container;e&&A.store.containers.indexOf(e)===-1&&A.store.containers.push(t.config.container),A.store.elements[t.id]=t}function p(t,e,n){var i={target:t,config:e,interval:n};A.history.push(i)}function v(){if(A.isSupported()){g();for(var t=0;t<A.store.containers.length;t++)A.store.containers[t].addEventListener("scroll",m),A.store.containers[t].addEventListener("resize",m);A.initialized||(window.addEventListener("scroll",m),window.addEventListener("resize",m),A.initialized=!0)}return A}function m(){T(g)}function h(){var t,e,n,i;A.tools.forOwn(A.sequences,function(s){i=A.sequences[s],t=!1;for(var o=0;o<i.elemIds.length;o++)n=i.elemIds[o],e=A.store.elements[n],O(e)&&!t&&(t=!0);i.active=t})}function g(){var t,e;h(),A.tools.forOwn(A.store.elements,function(n){e=A.store.elements[n],t=w(e),_(e)?(e.config.beforeReveal(e.domEl),t?e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.delayed):e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.target+e.styles.transition.instant),y("reveal",e,t),e.revealing=!0,e.seen=!0,e.sequence&&b(e,t)):C(e)&&(e.config.beforeReset(e.domEl),e.domEl.setAttribute("style",e.styles.inline+e.styles.transform.initial+e.styles.transition.instant),y("reset",e),e.revealing=!1)})}function b(t,e){var n=0,i=0,s=A.sequences[t.sequence.id];s.blocked=!0,e&&"onload"===t.config.useDelay&&(i=t.config.delay),t.sequence.timer&&(n=Math.abs(t.sequence.timer.started-new Date),window.clearTimeout(t.sequence.timer)),t.sequence.timer={started:new Date},t.sequence.timer.clock=window.setTimeout(function(){s.blocked=!1,t.sequence.timer=null,m()},Math.abs(s.interval)+i-n)}function y(t,e,n){var i=0,s=0,o="after";switch(t){case"reveal":s=e.config.duration,n&&(s+=e.config.delay),o+="Reveal";break;case"reset":s=e.config.duration,o+="Reset"}e.timer&&(i=Math.abs(e.timer.started-new Date),window.clearTimeout(e.timer.clock)),e.timer={started:new Date},e.timer.clock=window.setTimeout(function(){e.config[o](e.domEl),e.timer=null},s-i)}function _(t){if(t.sequence){var e=A.sequences[t.sequence.id];return e.active&&!e.blocked&&!t.revealing&&!t.disabled}return O(t)&&!t.revealing&&!t.disabled}function w(t){var e=t.config.useDelay;return"always"===e||"onload"===e&&!A.initialized||"once"===e&&!t.seen}function C(t){if(t.sequence){return!A.sequences[t.sequence.id].active&&t.config.reset&&t.revealing&&!t.disabled}return!O(t)&&t.config.reset&&t.revealing&&!t.disabled}function x(t){return{width:t.clientWidth,height:t.clientHeight}}function k(t){if(t&&t!==window.document.documentElement){var e=E(t);return{x:t.scrollLeft+e.left,y:t.scrollTop+e.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function E(t){var e=0,n=0,i=t.offsetHeight,s=t.offsetWidth;do{isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent}while(t);return{top:e,left:n,height:i,width:s}}function O(t){var e=E(t.domEl),n=x(t.config.container),i=k(t.config.container),s=t.config.viewFactor,o=e.height,r=e.width,a=e.top,c=e.left,l=a+o,u=c+r;return function(){var e=a+o*s,f=c+r*s,d=l-o*s,p=u-r*s,v=i.y+t.config.viewOffset.top,m=i.x+t.config.viewOffset.left,h=i.y-t.config.viewOffset.bottom+n.height,g=i.x-t.config.viewOffset.right+n.width;return e<h&&d>v&&f>m&&p<g}()||function(){return"fixed"===window.getComputedStyle(t.domEl).position}()}function q(){}var A,T;s.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(t){},beforeReset:function(t){},afterReveal:function(t){},afterReset:function(t){}},s.prototype.isSupported=function(){var t=document.documentElement.style;return"WebkitTransition"in t&&"WebkitTransform"in t||"transition"in t&&"transform"in t},s.prototype.reveal=function(t,e,n,i){var s,u,f,m,h,g;if(void 0!==e&&"number"==typeof e?(n=e,e={}):void 0!==e&&null!==e||(e={}),s=o(e),u=r(t,s),!u.length)return console.log('ScrollReveal: reveal on "'+t+'" failed, no elements found.'),A;n&&"number"==typeof n&&(g=a(),h=A.sequences[g]={id:g,interval:n,elemIds:[],active:!1});for(var b=0;b<u.length;b++)m=u[b].getAttribute("data-sr-id"),m?f=A.store.elements[m]:(f={id:a(),domEl:u[b],seen:!1,revealing:!1},f.domEl.setAttribute("data-sr-id",f.id)),h&&(f.sequence={id:h.id,index:h.elemIds.length},h.elemIds.push(f.id)),c(f,e,s),l(f),d(f),A.tools.isMobile()&&!f.config.mobile||!A.isSupported()?(f.domEl.setAttribute("style",f.styles.inline),f.disabled=!0):f.revealing||f.domEl.setAttribute("style",f.styles.inline+f.styles.transform.initial);return!i&&A.isSupported()&&(p(t,e,n),A.initTimeout&&window.clearTimeout(A.initTimeout),A.initTimeout=window.setTimeout(v,0)),A},s.prototype.sync=function(){if(A.history.length&&A.isSupported()){for(var t=0;t<A.history.length;t++){var e=A.history[t];A.reveal(e.target,e.config,e.interval,!0)}v()}else console.log("ScrollReveal: sync failed, no reveals found.");return A},q.prototype.isObject=function(t){return null!==t&&"object"==typeof t&&t.constructor===Object},q.prototype.isNode=function(t){return"object"==typeof window.Node?t instanceof window.Node:t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},q.prototype.isNodeList=function(t){var e=Object.prototype.toString.call(t),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?t instanceof window.NodeList:t&&"object"==typeof t&&n.test(e)&&"number"==typeof t.length&&(0===t.length||this.isNode(t[0]))},q.prototype.forOwn=function(t,e){if(!this.isObject(t))throw new TypeError('Expected "object", but received "'+typeof t+'".');for(var n in t)t.hasOwnProperty(n)&&e(n)},q.prototype.extend=function(t,e){return this.forOwn(e,function(n){this.isObject(e[n])?(t[n]&&this.isObject(t[n])||(t[n]={}),this.extend(t[n],e[n])):t[n]=e[n]}.bind(this)),t},q.prototype.extendClone=function(t,e){return this.extend(this.extend({},t),e)},q.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},void 0!==(i=function(){return s}.call(e,n,e,t))&&(t.exports=i)}()},393:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("div",{staticClass:"hero is-fullheight is-primary"},[n("div",{staticClass:"hero-head"},[n("app-header",{attrs:{home:""}})],1),t._v(" "),n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-centered"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"github-button home-hero"},[n("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=rafaelpimpa&repo=buefy&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"140px",height:"30px"}}),t._v(" "),n("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=rafaelpimpa&repo=buefy&type=fork&count=false&size=large",frameborder:"0",scrolling:"0",width:"80px",height:"30px"}})],1),t._v(" "),n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-medium is-primary is-inverted is-outlined home-hero",attrs:{to:"/documentation/quick-start"}},[t._v("\n                        Get Started\n                    ")])],1)])])]),t._v(" "),n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("nav",{staticClass:"columns"},[n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{pack:"fa",icon:"github",size:"is-large"}}),t._v(" "),t._m(3),t._v(" "),t._m(4)],1),t._v(" "),n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{icon:"devices",size:"is-large"}}),t._v(" "),t._m(5),t._v(" "),t._m(6)],1),t._v(" "),n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{icon:"new_releases",size:"is-large"}}),t._v(" "),t._m(7),t._v(" "),t._m(8)],1),t._v(" "),n("div",{staticClass:"column has-text-centered features"},[n("b-icon",{attrs:{pack:"fa",icon:"paper-plane-o",size:"is-large"}}),t._v(" "),t._m(9),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("No other internal dependencies")])],1)])])])]),t._v(" "),n("app-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo-rounded home-hero"},[i("img",{attrs:{src:n(350),alt:"Buefy"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"subtitle home-hero"},[n("strong",[t._v("Lightweight")]),t._v(" UI components for "),n("strong",[n("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js")])]),t._v("\n                    based on "),n("strong",[n("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("Bulma")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"npm home-hero"},[n("code",[t._v("npm install buefy")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Free")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"subtitle"},[t._v("Open source on "),n("strong",[n("a",{attrs:{href:"https://github.com/rafaelpimpa/buefy",target:"_blank"}},[t._v("GitHub")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Responsive")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"subtitle"},[n("b",[t._v("Every")]),t._v(" component is responsive")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Modern")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"subtitle"},[t._v("\n                            Built with "),n("strong",[n("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js")])]),t._v("\n                            and "),n("strong",[n("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[t._v("Bulma")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-4"},[n("strong",[t._v("Lightweight")])])}]}}});
//# sourceMappingURL=1.99033ff6e3457d86319f.js.map