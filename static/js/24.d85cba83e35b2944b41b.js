webpackJsonp([24],{449:function(t,e,n){var s=n(0)(n(496),n(534),null,null,null);t.exports=s.exports},496:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{props:[{name:"<code>type</code>",description:"Type (color) of the field and help message, also adds a matching icon, optional. Used by Input, Select and Autocomplete",type:"String",values:"<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,\n                        <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,\n                        <code>is-warning</code>, <code>is-danger</code>,\n                        and any other colors you've set in the <code>$colors</code> list on Sass",default:"—"},{name:"<code>label</code>",description:"Field label",type:"String",values:"—",default:"—"},{name:"<code>message</code>",description:"Help message text",type:"String",values:"—",default:"—"},{name:"<code>grouped</code>",description:"Direct child components/elements of Field will be grouped horizontally (see which ones at the top of the page)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>position</code>",description:"Which position should the addons appear, optional",type:"Boolean",values:"<code>is-left</code>, <code>is-centered</code>, <code>is-right</code>",default:"<code>is-left</code>"},{name:"<code>addons</code>",description:"Field automatically unify controls",type:"Boolean",values:"—",default:"<code>true</code>"}],template1:'\n            <b-field label="Name">\n                <b-input value="Kevin Garvey"></b-input>\n            </b-field>\n\n            <b-field label="Email"\n                type="is-danger"\n                message="This email is invalid">\n                <b-input type="email"\n                    value="john@"\n                    maxlength="30">\n                </b-input>\n            </b-field>\n\n            <b-field label="Username"\n                type="is-success"\n                message="This username is available">\n                <b-input value="johnsilver" maxlength="30"></b-input>\n            </b-field>\n\n            <b-field label="Subject">\n                <b-select placeholder="Select a subject">\n                    <option value="1">Option 1</option>\n                    <option value="2">Option 2</option>\n                </b-select>\n            </b-field>',template2:'\n            <b-field>\n                <b-input placeholder="Search..."\n                    type="search"\n                    icon="search">\n                </b-input>\n                <p class="control">\n                    <button class="button is-primary">Search</button>\n                </p>\n            </b-field>\n\n            <b-field>\n                <b-select placeholder="Currency">\n                    <option>$</option>\n                    <option>£</option>\n                    <option>€</option>\n                </b-select>\n                <b-input type="number" placeholder="0,00"></b-input>\n                <p class="control">\n                    <button class="button is-success">Transfer</button>\n                </p>\n            </b-field>\n\n            <b-field>\n                <p class="control">\n                    <button class="button">\n                        <b-icon icon="format_bold"></b-icon>\n                    </button>\n                </p>\n                <p class="control">\n                    <button class="button">\n                        <b-icon icon="format_italic"></b-icon>\n                    </button>\n                </p>\n                <p class="control">\n                    <button class="button">\n                        <b-icon icon="format_underlined"></b-icon>\n                    </button>\n                </p>\n                <p class="control">\n                    <button class="button">\n                        <b-icon icon="format_align_left"></b-icon>\n                    </button>\n                </p>\n                <p class="control">\n                    <button class="button">\n                        <b-icon icon="format_align_center"></b-icon>\n                    </button>\n                </p>\n                <p class="control">\n                    <button class="button">\n                        <b-icon icon="format_align_right"></b-icon>\n                    </button>\n                </p>\n                <b-input placeholder="Search..." type="search" icon="search"></b-input>\n            </b-field>\n\n            <b-field>\n                <p class="control">\n                    <button class="button is-primary">\n                        Button\n                    </button>\n                </p>\n                <p class="control">\n                    <b-dropdown>\n                        <button class="button is-primary" slot="trigger">\n                            <b-icon icon="arrow_drop_down"></b-icon>\n                        </button>\n\n                        <b-dropdown-option>Action</b-dropdown-option>\n                        <b-dropdown-option>Another action</b-dropdown-option>\n                        <b-dropdown-option>Something else</b-dropdown-option>\n                    </b-dropdown>\n                </p>\n            </b-field>\n\n            <b-field>\n                <p class="control">\n                    <b-dropdown>\n                        <button class="button" slot="trigger">\n                            <span>Filters</span>\n                            <b-icon icon="arrow_drop_down"></b-icon>\n                        </button>\n\n                        <b-dropdown-option value="open_issues">Open Issues and Pull Requests</b-dropdown-option>\n                        <b-dropdown-option value="your_issues">Your Issues</b-dropdown-option>\n                        <b-dropdown-option value="pull_requests">Your Pull Requests</b-dropdown-option>\n                        <b-dropdown-option value="everything">Everything</b-dropdown-option>\n                    </b-dropdown>\n                </p>\n                <b-input icon="search" type="search" placeholder="Search..."></b-input>\n            </b-field>',template3:'\n            <b-field>\n                <b-input placeholder="Search..."\n                    type="search"\n                    icon="search">\n                </b-input>\n                <p class="control">\n                    <button class="button is-info">Search</button>\n                </p>\n            </b-field>\n\n            <hr>\n            <b-field position="is-centered">\n                <b-input placeholder="Search..."\n                    type="search"\n                    icon="search">\n                </b-input>\n                <p class="control">\n                    <button class="button is-info">Search</button>\n                </p>\n            </b-field>\n\n            <hr>\n            <b-field position="is-right">\n                <b-input placeholder="Search..."\n                    type="search"\n                    icon="search">\n                </b-input>\n                <p class="control">\n                    <button class="button is-info">Search</button>\n                </p>\n            </b-field>\n\n            <hr>\n            <b-field>\n                <b-input placeholder="Your email"></b-input>\n                <p class="control">\n                    <span class="button is-static">@gmail.com</span>\n                </p>\n            </b-field>\n            <b-field>\n                <b-input placeholder="Your email" expanded></b-input>\n                <p class="control">\n                    <span class="button is-static">@gmail.com</span>\n                </p>\n            </b-field>',template4:'\n            <b-field grouped>\n                <b-input placeholder="Search..."></b-input>\n                <p class="control">\n                    <button class="button is-primary">Search</button>\n                </p>\n                <p class="control">\n                    <button class="button">Clear</button>\n                </p>\n            </b-field>\n\n            <b-field grouped>\n                <b-input placeholder="Search..." expanded></b-input>\n                <p class="control">\n                    <button class="button is-primary">Search</button>\n                </p>\n                <p class="control">\n                    <button class="button">Clear</button>\n                </p>\n            </b-field>',template5:'\n            <b-field grouped>\n                <b-field label="Personal title">\n                    <b-select>\n                        <option>Mr.</option>\n                        <option>Ms.</option>\n                    </b-select>\n                </b-field>\n                <b-field label="Name" expanded>\n                    <b-input></b-input>\n                </b-field>\n                <b-field label="Email" expanded>\n                    <b-input></b-input>\n                </b-field>\n            </b-field>',template6:'\n            <b-field grouped>\n                <b-field label="Name" expanded>\n                    <b-field>\n                        <b-select placeholder="Title">\n                            <option>Mr.</option>\n                            <option>Ms.</option>\n                        </b-select>\n                        <b-input placeholder="Name" expanded></b-input>\n                    </b-field>\n                </b-field>\n                <b-field label="Email" expanded>\n                    <b-input placeholder="some@email.com"></b-input>\n                </b-field>\n            </b-field>'}}}},534:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-spaced"},[t._v("Field")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("Fields are used to add functionality to controls and/or to unify/group components and elements")]),t._v(" "),n("hr"),t._v(" "),t._m(0),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-field",{attrs:{label:"Name"}},[n("b-input",{attrs:{value:"Kevin Garvey"}})],1),t._v(" "),n("b-field",{attrs:{label:"Email",type:"is-danger",message:"This email is invalid"}},[n("b-input",{attrs:{type:"email",value:"john@",maxlength:"30"}})],1),t._v(" "),n("b-field",{attrs:{label:"Username",type:"is-success",message:"This username is available"}},[n("b-input",{attrs:{value:"johnsilver",maxlength:"30"}})],1),t._v(" "),n("b-field",{attrs:{label:"Subject"}},[n("b-select",{attrs:{placeholder:"Select a subject"}},[n("option",{attrs:{value:"1"}},[t._v("Option 1")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Option 2")])])],1)],1),t._v(" "),n("div",{staticClass:"column"},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[n("code",{staticClass:"html"},[t._v(t._s(t._f("pre")(t.template1)))])])])]),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title is-spaced"},[t._v("Addons")]),t._v(" "),n("h3",{staticClass:"subtitle"},[t._v("Those components are automatically unified when inside a Field")]),t._v(" "),n("b-message",{attrs:{type:"is-warning"}},[n("b",[t._v("Note:")]),t._v(" Be aware of it's responsiveness, avoid large groups/addons since they don't break lines, this is just an example.\n    ")]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b-field",[n("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"search"}}),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-primary"},[t._v("Search")])])],1),t._v(" "),n("b-field",[n("b-select",{attrs:{placeholder:"Currency"}},[n("option",[t._v("$")]),t._v(" "),n("option",[t._v("£")]),t._v(" "),n("option",[t._v("€")])]),t._v(" "),n("b-input",{attrs:{type:"number",placeholder:"0,00"}}),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-success"},[t._v("Transfer")])])],1),t._v(" "),n("b-field",[n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"format_bold"}})],1)]),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"format_italic"}})],1)]),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"format_underlined"}})],1)]),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"format_align_left"}})],1)]),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"format_align_center"}})],1)]),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[n("b-icon",{attrs:{icon:"format_align_right"}})],1)]),t._v(" "),n("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"search"}})],1),t._v(" "),n("b-field",[n("p",{staticClass:"control"},[n("button",{staticClass:"button is-primary"},[t._v("\n                        Button\n                    ")])]),t._v(" "),n("p",{staticClass:"control"},[n("b-dropdown",[n("button",{staticClass:"button is-primary",slot:"trigger"},[n("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),t._v(" "),n("b-dropdown-option",[t._v("Action")]),t._v(" "),n("b-dropdown-option",[t._v("Another action")]),t._v(" "),n("b-dropdown-option",[t._v("Something else")])],1)],1)]),t._v(" "),n("b-field",[n("p",{staticClass:"control"},[n("b-dropdown",[n("button",{staticClass:"button",slot:"trigger"},[n("span",[t._v("Filters")]),t._v(" "),n("b-icon",{attrs:{icon:"arrow_drop_down"}})],1),t._v(" "),n("b-dropdown-option",{attrs:{value:"open_issues"}},[t._v("Open Issues and Pull Requests")]),t._v(" "),n("b-dropdown-option",{attrs:{value:"your_issues"}},[t._v("Your Issues")]),t._v(" "),n("b-dropdown-option",{attrs:{value:"pull_requests"}},[t._v("Your Pull Requests")]),t._v(" "),n("b-dropdown-option",{attrs:{value:"everything"}},[t._v("Everything")])],1)],1),t._v(" "),n("b-input",{attrs:{icon:"search",type:"search",placeholder:"Search..."}})],1)],1),t._v(" "),n("div",{staticClass:"column"},[n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[n("code",{staticClass:"html"},[t._v(t._s(t._f("pre")(t.template2)))])])])]),t._v(" "),n("hr"),t._v(" "),n("h3",{staticClass:"subtitle is-4"},[t._v("Positions and static buttons")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"example"},[n("b-field",[n("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"search"}}),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-info"},[t._v("Search")])])],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{position:"is-centered"}},[n("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"search"}}),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-info"},[t._v("Search")])])],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{position:"is-right"}},[n("b-input",{attrs:{placeholder:"Search...",type:"search",icon:"search"}}),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-info"},[t._v("Search")])])],1),t._v(" "),n("hr"),t._v(" "),n("b-field",[n("b-input",{attrs:{placeholder:"Your email"}}),t._v(" "),n("p",{staticClass:"control"},[n("span",{staticClass:"button is-static"},[t._v("@gmail.com")])])],1),t._v(" "),n("b-field",[n("b-input",{attrs:{placeholder:"Your email",expanded:""}}),t._v(" "),n("p",{staticClass:"control"},[n("span",{staticClass:"button is-static"},[t._v("@gmail.com")])])],1)],1),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[n("code",{staticClass:"html"},[t._v(t._s(t._f("pre")(t.template3)))])]),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title is-spaced"},[t._v("Groups")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("b-message",{attrs:{type:"is-warning"}},[n("b",[t._v("Note:")]),t._v(" Be aware of it's responsiveness, avoid large groups/addons since they don't break lines, this is just an example.\n    ")]),t._v(" "),n("div",{staticClass:"example"},[n("b-field",{attrs:{grouped:""}},[n("b-input",{attrs:{placeholder:"Search..."}}),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-primary"},[t._v("Search")])]),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[t._v("Clear")])])],1),t._v(" "),n("b-field",{attrs:{grouped:""}},[n("b-input",{attrs:{placeholder:"Search...",expanded:""}}),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-primary"},[t._v("Search")])]),t._v(" "),n("p",{staticClass:"control"},[n("button",{staticClass:"button"},[t._v("Clear")])])],1)],1),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[n("code",{staticClass:"html"},[t._v(t._s(t._f("pre")(t.template4)))])]),t._v(" "),n("hr"),t._v(" "),n("h3",{staticClass:"subtitle is-4"},[t._v("Nested Fields can be grouped as well")]),t._v(" "),n("div",{staticClass:"example"},[n("b-field",{attrs:{grouped:""}},[n("b-field",{attrs:{label:"Personal title"}},[n("b-select",[n("option",[t._v("Mr.")]),t._v(" "),n("option",[t._v("Ms.")])])],1),t._v(" "),n("b-field",{attrs:{label:"Name",expanded:""}},[n("b-input")],1),t._v(" "),n("b-field",{attrs:{label:"Email",expanded:""}},[n("b-input")],1)],1)],1),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[n("code",{staticClass:"html"},[t._v(t._s(t._f("pre")(t.template5)))])]),t._v(" "),n("hr"),t._v(" "),n("h3",{staticClass:"title"},[t._v("Combining addons and groups")]),t._v(" "),n("div",{staticClass:"example"},[n("b-field",{attrs:{grouped:""}},[n("b-field",{attrs:{label:"Name",expanded:""}},[n("b-field",[n("b-select",{attrs:{placeholder:"Title"}},[n("option",[t._v("Mr.")]),t._v(" "),n("option",[t._v("Ms.")])]),t._v(" "),n("b-input",{attrs:{placeholder:"Name",expanded:""}})],1)],1),t._v(" "),n("b-field",{attrs:{label:"Email",expanded:""}},[n("b-input",{attrs:{placeholder:"some@email.com"}})],1)],1)],1),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"block"},[n("code",{staticClass:"html"},[t._v(t._s(t._f("pre")(t.template6)))])]),t._v(" "),n("hr"),t._v(" "),n("h2",{staticClass:"title is-spaced"},[t._v("API")]),t._v(" "),n("b-tabs",[n("b-tab-item",{attrs:{label:"Properties"}},[n("b-table",{attrs:{data:t.props,"default-sort":"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{field:"name",label:"Name"}},[n("span",{domProps:{innerHTML:t._s(e.row.name)}})]),t._v(" "),n("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}},[n("span",{domProps:{innerHTML:t._s(e.row.description)}})]),t._v(" "),n("b-table-column",{attrs:{field:"type",label:"Type"}},[n("span",[t._v(t._s(e.row.type))])]),t._v(" "),n("b-table-column",{attrs:{field:"values",label:"Values"}},[n("span",{domProps:{innerHTML:t._s(e.row.values)}})]),t._v(" "),n("b-table-column",{attrs:{field:"default",label:"Default"}},[n("span",{domProps:{innerHTML:t._s(e.row.default)}})])]}}])})],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("These components can be used as a "),n("strong",[t._v("direct child")]),t._v(" of Field:")]),t._v(" "),n("ul",[n("li",[t._v("Input")]),t._v(" "),n("li",[t._v("Select")]),t._v(" "),n("li",[t._v("Autocomplete")])]),t._v(" "),n("p",[t._v("And "),n("code",[t._v(".control")]),t._v(" elements (for buttons).")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"content"},[t._v("Use the "),n("code",[t._v("expanded")]),t._v(" prop to "),n("b",[t._v("fill up the remaining space")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"subtitle"},[t._v("Or grouped horizontally with the "),n("code",[t._v("grouped")]),t._v(" property")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"content"},[t._v("Use the "),n("code",[t._v("expanded")]),t._v(" prop to "),n("b",[t._v("fill up the remaining space")]),t._v(".")])}]}}});
//# sourceMappingURL=24.d85cba83e35b2944b41b.js.map