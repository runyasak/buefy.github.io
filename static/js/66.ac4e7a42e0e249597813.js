webpackJsonp([66],{177:function(n,t,e){var o=e(0)(e(708),e(779),null,null,null);n.exports=o.exports},708:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{snackbar:function(){this.$snackbar.open("Default, positioned bottom-right with a green 'OK' button")},warning:function(){var n=this;this.$snackbar.open({message:"Yellow button and positioned top-left",type:"is-warning",position:"is-top",actionText:"Retry",queue:!1,onAction:function(){n.$toast.open({message:"Action pressed",queue:!1})}})},danger:function(){var n=this;this.$snackbar.open({duration:5e3,message:"Snackbar with red action, positioned on bottom-left and a callback",type:"is-danger",position:"is-bottom-left",actionText:"Undo",onAction:function(){n.$toast.open({message:"Action pressed",queue:!1})}})}}}},779:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("button",{staticClass:"button is-medium",on:{click:n.snackbar}},[n._v("\n        Launch snackbar (default)\n    ")]),n._v(" "),e("button",{staticClass:"button is-medium is-warning",on:{click:n.warning}},[n._v("\n        Launch snackbar (custom)\n    ")]),n._v(" "),e("button",{staticClass:"button is-medium is-danger",on:{click:n.danger}},[n._v("\n        Launch snackbar (custom)\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=66.ac4e7a42e0e249597813.js.map