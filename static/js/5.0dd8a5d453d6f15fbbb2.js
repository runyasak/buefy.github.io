webpackJsonp([5,57,110,111,112,113,114,115,155],{1054:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"default-container"},[i("h1",{staticClass:"title is-spaced"},[e._v("Tabs")]),e._v(" "),i("h2",{staticClass:"subtitle"},[e._v("Responsive horizontal navigation tabs, switch between contents with ease")]),e._v(" "),i("hr"),e._v(" "),i("Example",{attrs:{component:e.ExSimple,code:e.ExSimpleCode}}),e._v(" "),i("Example",{attrs:{component:e.ExPosition,code:e.ExPositionCode,title:"Position"}}),e._v(" "),i("Example",{attrs:{component:e.ExIcons,code:e.ExIconsCode,title:"Icons"}}),e._v(" "),i("Example",{attrs:{component:e.ExSizes,code:e.ExSizesCode,title:"Sizes"}}),e._v(" "),i("Example",{attrs:{component:e.ExTypes,code:e.ExTypesCode,title:"Types"}},[i("p",[e._v("If you want a more classic style with borders add the "),i("code",[e._v("is-boxed")]),e._v(" type.")]),e._v(" "),i("p",[e._v("Or like Radio Buttons with the "),i("code",[e._v("is-toggle")]),e._v(" or "),i("code",[e._v("is-toggle-rounded")]),e._v(" type.")])]),e._v(" "),i("Example",{attrs:{component:e.ExExpanded,code:e.ExExpandedCode,title:"Expanded"}},[i("p",{staticClass:"content"},[e._v("If you want the tabs to take full width, add the "),i("code",[e._v("expanded")]),e._v(" prop.")])]),e._v(" "),i("Example",{attrs:{component:e.ExCustomHeaders,code:e.ExCustomHeadersCode,title:"Custom Headers"}},[i("div",{staticClass:"tags has-addons"},[i("span",{staticClass:"tag is-success"},[e._v("New!")]),e._v(" "),i("span",{staticClass:"tag is-info"},[e._v("0.6.4")])]),e._v(" "),i("p",[e._v("\n            By adding a slot named "),i("code",[e._v("header")]),e._v(" you can customize the header of a tab item.\n        ")])]),e._v(" "),i("ApiView",{attrs:{data:e.api}})],1)},staticRenderFns:[]}},107:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{title:"Tabs",props:[{name:"<code>v-model</code>",description:"Binding value, tab index",type:"Number",values:"—",default:"<code>0</code>"},{name:"<code>expanded</code>",description:"Make tab full width",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>animated</code>",description:"Tabs have slide animation",type:"Boolean",values:"—",default:"<code>true</code>"},{name:"<code>type</code>",description:"Type/Style of the tab, optional",type:"String",values:"<code>is-boxed</code>, <code>is-toggle</code>",default:"—"},{name:"<code>size</code>",description:"Size of the tab, optional",type:"String",values:"<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>",default:"—"},{name:"<code>position</code>",description:"Position of the tab, optional",type:"String",values:"<code>is-centered</code>, <code>is-right</code>",default:"—"}],events:[{name:"<code>input</code>",description:"Triggers when tab is clicked",parameters:"<code>index: Number</code>"},{name:"<code>change</code>",description:"Triggers when active tab is changed",parameters:"<code>index: Number</code>"}]},{title:"Tab Item",props:[{name:"<code>label</code>",description:"Tab label",type:"String",values:"—",default:"—"},{name:"<code>icon</code>",description:"Icon name",type:"String",values:"—",default:"—"},{name:"<code>icon-pack</code>",description:"Icon pack to use",type:"String",values:"—",default:"<code>mdi</code>"},{name:"<code>disabled</code>",description:"Item is disabled",type:"Boolean",values:"-",default:"false"},{name:"<code>visible</code>",description:"Item is visible",type:"Boolean",values:"-",default:"true"}],slots:[{name:"default",description:"Tab item body",props:"—"},{name:"<code>header</code>",description:"Tab item custom header",props:"—"}]}]},194:function(e,t,i){var a=i(0)(null,i(803),null,null,null);e.exports=a.exports},195:function(e,t,i){var a=i(0)(null,i(806),null,null,null);e.exports=a.exports},196:function(e,t,i){var a=i(0)(null,i(861),null,null,null);e.exports=a.exports},197:function(e,t,i){var a=i(0)(null,i(761),null,null,null);e.exports=a.exports},198:function(e,t,i){var a=i(0)(i(724),i(774),null,null,null);e.exports=a.exports},199:function(e,t,i){var a=i(0)(null,i(779),null,null,null);e.exports=a.exports},200:function(e,t,i){var a=i(0)(null,i(781),null,null,null);e.exports=a.exports},251:function(e,t,i){var a=i(0)(i(897),i(1054),null,null,null);e.exports=a.exports},724:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{activeTab:0,showBooks:!1}}}},761:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-tabs",{staticClass:"block",attrs:{position:"is-centered"}},[i("b-tab-item",{attrs:{label:"Pictures"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos"}})],1),e._v(" "),i("b-tabs",{staticClass:"block",attrs:{position:"is-right"}},[i("b-tab-item",{attrs:{label:"Pictures"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos"}})],1)],1)},staticRenderFns:[]}},774:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("div",{staticClass:"block"},[i("button",{staticClass:"button",on:{click:function(t){e.activeTab=1}}},[e._v("Set Music")])]),e._v(" "),i("div",{staticClass:"block"},[i("b-switch",{model:{value:e.showBooks,callback:function(t){e.showBooks=t},expression:"showBooks"}},[e._v(" Show Books item ")])],1),e._v(" "),i("b-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("b-tab-item",{attrs:{label:"Pictures"}},[e._v("\n            Lorem ipsum dolor sit amet.\n        ")]),e._v(" "),i("b-tab-item",{attrs:{label:"Music"}},[e._v("\n            Lorem "),i("br"),e._v("\n            ipsum "),i("br"),e._v("\n            dolor "),i("br"),e._v("\n            sit "),i("br"),e._v("\n            amet.\n        ")]),e._v(" "),i("b-tab-item",{attrs:{visible:e.showBooks,label:"Books"}},[e._v("\n            What light is light, if Silvia be not seen? "),i("br"),e._v("\n            What joy is joy, if Silvia be not by— "),i("br"),e._v("\n            Unless it be to think that she is by "),i("br"),e._v("\n            And feed upon the shadow of perfection? "),i("br"),e._v("\n            Except I be by Silvia in the night, "),i("br"),e._v("\n            There is no music in the nightingale.\n        ")]),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",disabled:""}},[e._v("\n            Nunc nec velit nec libero vestibulum eleifend.\n            Curabitur pulvinar congue luctus.\n            Nullam hendrerit iaculis augue vitae ornare.\n            Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.\n        ")])],1)],1)},staticRenderFns:[]}},779:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-tabs",{staticClass:"block",attrs:{size:"is-small"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1),e._v(" "),i("b-tabs",{staticClass:"block",attrs:{size:"is-medium"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1),e._v(" "),i("b-tabs",{staticClass:"block",attrs:{size:"is-large"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1)],1)},staticRenderFns:[]}},781:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("b-tabs",{attrs:{type:"is-boxed"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1),e._v(" "),i("b-tabs",{attrs:{type:"is-toggle"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1),e._v(" "),i("b-tabs",{attrs:{type:"is-toggle-rounded"}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1)],1)},staticRenderFns:[]}},803:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-tabs",{attrs:{type:"is-boxed"}},[i("b-tab-item",[i("template",{slot:"header"},[i("b-icon",{attrs:{icon:"information-outline"}}),e._v(" "),i("span",[e._v(" Issues "),i("b-tag",{attrs:{rounded:""}},[e._v(" 3 ")])],1)],1)],2),e._v(" "),i("b-tab-item",[i("template",{slot:"header"},[i("b-icon",{attrs:{icon:"source-pull"}}),e._v(" "),i("span",[e._v(" Pull Requests "),i("b-tag",{attrs:{rounded:""}},[e._v(" 1 ")])],1)],1)],2)],1)},staticRenderFns:[]}},806:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-tabs",{attrs:{type:"is-toggle",expanded:""}},[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1)},staticRenderFns:[]}},861:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-tabs",[i("b-tab-item",{attrs:{label:"Pictures",icon:"google-photos"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Music",icon:"library-music"}}),e._v(" "),i("b-tab-item",{attrs:{label:"Videos",icon:"video"}})],1)},staticRenderFns:[]}},897:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(107),n=i(198),s=i.n(n),o=i(994),b=i.n(o),r=i(197),l=i.n(r),c=i(993),d=i.n(c),u=i(196),m=i.n(u),p=i(992),v=i.n(p),_=i(199),h=i.n(_),f=i(995),g=i.n(f),x=i(200),y=i.n(x),E=i(996),k=i.n(E),C=i(195),P=i.n(C),M=i(991),w=i.n(M),S=i(194),T=i.n(S),V=i(990),B=i.n(V);t.default={data:function(){return{api:a.default,ExSimple:s.a,ExPosition:l.a,ExIcons:m.a,ExSizes:h.a,ExTypes:y.a,ExExpanded:P.a,ExSimpleCode:b.a,ExPositionCode:d.a,ExIconsCode:v.a,ExSizesCode:g.a,ExTypesCode:k.a,ExExpandedCode:w.a,ExCustomHeaders:T.a,ExCustomHeadersCode:B.a}}}},990:function(e,t){e.exports='<template>\r\n    <b-tabs type="is-boxed">\r\n        <b-tab-item>\r\n            <template slot="header">\r\n                <b-icon icon="information-outline" />\r\n                <span> Issues <b-tag rounded> 3 </b-tag> </span>\r\n            </template>\r\n        </b-tab-item>\r\n        <b-tab-item>\r\n            <template slot="header">\r\n                <b-icon icon="source-pull" />\r\n                <span> Pull Requests <b-tag rounded> 1 </b-tag> </span>\r\n            </template>\r\n        </b-tab-item>\r\n    </b-tabs>\r\n</template>\r\n'},991:function(e,t){e.exports='<template>\r\n    <b-tabs type="is-toggle" expanded>\r\n        <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n        <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n        <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n    </b-tabs>\r\n</template>\r\n'},992:function(e,t){e.exports='<template>\r\n    <b-tabs>\r\n        <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n        <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n        <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n    </b-tabs>\r\n</template>\r\n'},993:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-tabs position="is-centered" class="block">\r\n            <b-tab-item label="Pictures"></b-tab-item>\r\n            <b-tab-item label="Music"></b-tab-item>\r\n            <b-tab-item label="Videos"></b-tab-item>\r\n        </b-tabs>\r\n\r\n        <b-tabs position="is-right" class="block">\r\n            <b-tab-item label="Pictures"></b-tab-item>\r\n            <b-tab-item label="Music"></b-tab-item>\r\n            <b-tab-item label="Videos"></b-tab-item>\r\n        </b-tabs>\r\n    </section>\r\n</template>\r\n'},994:function(e,t){e.exports='<template>\r\n    <section>\r\n        <div class="block">\r\n            <button class="button" @click="activeTab = 1">Set Music</button>\r\n        </div>\r\n        <div class="block">\r\n            <b-switch v-model="showBooks"> Show Books item </b-switch>\r\n        </div>\r\n        <b-tabs v-model="activeTab">\r\n            <b-tab-item label="Pictures">\r\n                Lorem ipsum dolor sit amet.\r\n            </b-tab-item>\r\n\r\n            <b-tab-item label="Music">\r\n                Lorem <br>\r\n                ipsum <br>\r\n                dolor <br>\r\n                sit <br>\r\n                amet.\r\n            </b-tab-item>\r\n\r\n            <b-tab-item :visible="showBooks" label="Books">\r\n                What light is light, if Silvia be not seen? <br>\r\n                What joy is joy, if Silvia be not by— <br>\r\n                Unless it be to think that she is by <br>\r\n                And feed upon the shadow of perfection? <br>\r\n                Except I be by Silvia in the night, <br>\r\n                There is no music in the nightingale.\r\n            </b-tab-item>\r\n\r\n            <b-tab-item label="Videos" disabled>\r\n                Nunc nec velit nec libero vestibulum eleifend.\r\n                Curabitur pulvinar congue luctus.\r\n                Nullam hendrerit iaculis augue vitae ornare.\r\n                Maecenas vehicula pulvinar tellus, id sodales felis lobortis eget.\r\n            </b-tab-item>\r\n        </b-tabs>\r\n    </section>\r\n</template>\r\n\r\n<script>\r\n    export default {\r\n        data() {\r\n            return {\r\n                activeTab: 0,\r\n                showBooks: false\r\n            }\r\n        }\r\n    }\r\n<\/script>\r\n'},995:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-tabs size="is-small" class="block">\r\n            <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n            <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n            <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n        </b-tabs>\r\n\r\n        <b-tabs size="is-medium" class="block">\r\n            <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n            <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n            <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n        </b-tabs>\r\n\r\n        <b-tabs size="is-large" class="block">\r\n            <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n            <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n            <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n        </b-tabs>\r\n    </section>\r\n</template>\r\n'},996:function(e,t){e.exports='<template>\r\n    <section>\r\n        <b-tabs type="is-boxed">\r\n            <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n            <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n            <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n        </b-tabs>\r\n\r\n        <b-tabs type="is-toggle">\r\n            <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n            <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n            <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n        </b-tabs>\r\n\r\n        <b-tabs type="is-toggle-rounded">\r\n            <b-tab-item label="Pictures" icon="google-photos"></b-tab-item>\r\n            <b-tab-item label="Music" icon="library-music"></b-tab-item>\r\n            <b-tab-item label="Videos" icon="video"></b-tab-item>\r\n        </b-tabs>\r\n    </section>\r\n</template>\r\n'}});
//# sourceMappingURL=5.0dd8a5d453d6f15fbbb2.js.map