webpackJsonp([30],{469:function(e,t,o){var a=o(0)(o(604),o(870),null,null,null);e.exports=a.exports},519:function(e,t,o){"use strict";t.a=[{props:[{name:"<code>defaultIconPack</code>",description:'Icon pack used internally and on the Icon component attribute —\n                    <a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a> or\n                    <a href="http://fontawesome.io/" target="_blank">FontAwesome</a>',type:"String",values:"<code>mdi</code>, <code>fa</code>",default:"<code>mdi</code>"},{name:"<code>defaultContainerElement</code>",description:"Default container attribute for floating Notices (Toasts & Snackbars). Note that this also\n                    changes the <code>position</code> of the Notices from <code>fixed</code> to <code>absolute</code>.\n                    Meaning that the container <em>should</em> be <code>fixed</code>.",type:"String",values:"—",default:"<code>body</code>"},{name:"<code>defaultDialogConfirmText</code>",description:"Default dialog <code>confirmText</code> attribute",type:"String",values:"—",default:"<code>OK</code>"},{name:"<code>defaultDialogCancelText</code>",description:"Default dialog <code>cancelText</code> attribute",type:"String",values:"—",default:"<code>Cancel</code>"},{name:"<code>defaultSnackbarDuration</code>",description:"Default snackbar <code>duration</code> attribute.",type:"Number",values:"—",default:"<code>3500</code>"},{name:"<code>defaultToastDuration</code>",description:"Default toast <code>duration</code> attribute.",type:"Number",values:"—",default:"<code>2000</code>"},{name:"<code>defaultTooltipType</code>",description:"Default tooltip type (color) attribute.",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                    <code>is-warning</code>, <code>is-danger</code>,\n                    and any other colors you've set in the <code>$colors</code> list on Sass",default:"<code>is-primary</code>"},{name:"<code>defaultTooltipAnimated</code>",description:"Default tooltip <code>animated</code> attribute.",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>defaultInputAutocomplete</code>",description:"Default input <code>autocomplete</code> attribute.",type:"String",values:"<code>on</code>, <code>off</code>",default:"<code>on</code>"},{name:"<code>defaultDateFormatter</code>",description:"Default datepicker <code>date-formatter</code> attribute",type:"Function",values:"—",default:"<code>date.toLocaleDateString()</code>"},{name:"<code>defaultDateParser</code>",description:"Default datepicker <code>date-parser</code> attribute",type:"Function",values:"—",default:"<code>Date.parse(date)</code>"},{name:"<code>defaultDayNames</code>",description:"Default datepicker <code>day-names</code> attribute",type:"Array",values:"—",default:"<code>['Su', 'M', 'Tu', 'W', 'Th', 'F', 'S']</code>"},{name:"<code>defaultMonthNames</code>",description:"Default datepicker <code>month-names</code> attribute",type:"Array",values:"—",default:"<code>['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']</code>"},{name:"<code>defaultFirstDayOfWeek</code>",description:"Default datepicker <code>first-day-of-week</code> attribute",type:"Number",values:"—",default:"<code>0</code>"},{name:"<code>defaultTimeFormatter</code>",description:"Default timepicker <code>time-formatter</code> attribute",type:"Function",values:"—",default:"<code>HH:mm</code> or <code>HH:mm AM/PM</code>"},{name:"<code>defaultTimeParser</code>",description:"Default timepicker <code>time-parser</code> attribute",type:"Function",values:"—",default:"<code>HH:mm</code> or <code>HH:mm AM/PM</code>"},{name:"<code>defaultModalScroll</code>",description:"Default modal/dialog <code>scroll</code> attribute",type:"String",values:"<code>clip</code>, <code>keep</code>",default:"<code>clip</code>"}]}]},604:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(519);t.default={data:function(){return{api:a.a,usage:"\n            Vue.use(Buefy, {\n                defaultIconPack: 'fa',\n                defaultContainerElement: '#content',\n                // ...\n            })"}}}},870:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",{staticClass:"title is-spaced"},[e._v("Constructor options")]),e._v(" "),o("h2",{staticClass:"subtitle"},[e._v("These are global default options, which are set on Buefy initialization")]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"example is-paddingless"},[o("CodeView",{attrs:{code:e._f("pre")(e.usage),lang:"javascript"}})],1),e._v(" "),o("hr"),e._v(" "),o("h3",{staticClass:"subtitle"},[e._v("Options")]),e._v(" "),o("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=30.b0e4a378f446c1f8e06e.js.map