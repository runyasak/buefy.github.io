webpackJsonp([0],{439:function(e,a,l){var t=l(0)(l(458),l(483),null,null);e.exports=t.exports},456:function(e,a){e.exports=[{id:1,first_name:"Ryan",last_name:"Hill",gender:"Male"},{id:2,first_name:"Kathryn",last_name:"Ward",gender:"Female"},{id:3,first_name:"Sharon",last_name:"Welch",gender:"Female"},{id:4,first_name:"Beverly",last_name:"Gutierrez",gender:"Female"},{id:5,first_name:"Gloria",last_name:"Boyd",gender:"Female"},{id:6,first_name:"Lillian",last_name:"Coleman",gender:"Female"},{id:7,first_name:"Cheryl",last_name:"Austin",gender:"Female"},{id:8,first_name:"Elizabeth",last_name:"Morrison",gender:"Female"},{id:9,first_name:"Harry",last_name:"Howard",gender:"Male"},{id:10,first_name:"Phyllis",last_name:"Walker",gender:"Female"},{id:11,first_name:"Shawn",last_name:"Perez",gender:"Male"},{id:12,first_name:"Diana",last_name:"Brooks",gender:"Female"},{id:13,first_name:"Louis",last_name:"Porter",gender:"Male"},{id:14,first_name:"Tina",last_name:"Andrews",gender:"Female"},{id:15,first_name:"Anne",last_name:"Lopez",gender:"Female"},{id:16,first_name:"Denise",last_name:"Nichols",gender:"Female"},{id:17,first_name:"Sean",last_name:"Wallace",gender:"Male"},{id:18,first_name:"Julia",last_name:"Garcia",gender:"Female"},{id:19,first_name:"Diane",last_name:"Holmes",gender:"Female"},{id:20,first_name:"Steven",last_name:"Stone",gender:"Male"},{id:21,first_name:"Jean",last_name:"Hernandez",gender:"Female"},{id:22,first_name:"Timothy",last_name:"Murray",gender:"Male"},{id:23,first_name:"Joe",last_name:"Williams",gender:"Male"},{id:24,first_name:"Kimberly",last_name:"Frazier",gender:"Female"},{id:25,first_name:"Bonnie",last_name:"Watson",gender:"Female"},{id:26,first_name:"Jimmy",last_name:"Stone",gender:"Male"},{id:27,first_name:"Justin",last_name:"Nguyen",gender:"Male"},{id:28,first_name:"Judith",last_name:"Ross",gender:"Female"},{id:29,first_name:"Kenneth",last_name:"Rice",gender:"Male"},{id:30,first_name:"Joe",last_name:"Freeman",gender:"Male"},{id:31,first_name:"Kevin",last_name:"Wagner",gender:"Male"},{id:32,first_name:"Paul",last_name:"Price",gender:"Male"},{id:33,first_name:"Earl",last_name:"Gomez",gender:"Male"},{id:34,first_name:"Jason",last_name:"Mitchell",gender:"Male"},{id:35,first_name:"Brian",last_name:"Freeman",gender:"Male"},{id:36,first_name:"Norma",last_name:"Berry",gender:"Female"},{id:37,first_name:"Brenda",last_name:"Holmes",gender:"Female"},{id:38,first_name:"Sharon",last_name:"Wilson",gender:"Female"},{id:39,first_name:"Nicholas",last_name:"Cruz",gender:"Male"},{id:40,first_name:"Jeffrey",last_name:"Roberts",gender:"Male"},{id:41,first_name:"Sean",last_name:"Banks",gender:"Male"},{id:42,first_name:"Donald",last_name:"Hart",gender:"Male"},{id:43,first_name:"Harold",last_name:"Gutierrez",gender:"Male"},{id:44,first_name:"Larry",last_name:"Burke",gender:"Male"},{id:45,first_name:"Lori",last_name:"Martin",gender:"Female"},{id:46,first_name:"Annie",last_name:"Johnson",gender:"Female"},{id:47,first_name:"Lawrence",last_name:"Knight",gender:"Male"},{id:48,first_name:"Jimmy",last_name:"James",gender:"Male"},{id:49,first_name:"Melissa",last_name:"Willis",gender:"Female"},{id:50,first_name:"Craig",last_name:"Clark",gender:"Male"},{id:51,first_name:"Denise",last_name:"Garza",gender:"Female"},{id:52,first_name:"Albert",last_name:"Wheeler",gender:"Male"},{id:53,first_name:"Heather",last_name:"Howard",gender:"Female"},{id:54,first_name:"Keith",last_name:"Stone",gender:"Male"},{id:55,first_name:"Marie",last_name:"Peters",gender:"Female"},{id:56,first_name:"Phyllis",last_name:"Bailey",gender:"Female"},{id:57,first_name:"Paul",last_name:"Boyd",gender:"Male"},{id:58,first_name:"Nicholas",last_name:"Torres",gender:"Male"},{id:59,first_name:"John",last_name:"Hawkins",gender:"Male"},{id:60,first_name:"Harold",last_name:"Reed",gender:"Male"}]},458:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=l(456),n=l.n(t);a.default={data:function(){return{tableData:n.a,checkItems:[],selItem:{},isBordered:!1,isStriped:!1,isNarrowed:!1,isSelectable:!1,isCheckable:!1,isPaginationSimple:!1,perPage:10,props:[{name:"<code>data</code>",description:"Table data",type:"Array",values:"—",default:"—"},{name:"<code>bordered</code>",description:"Border to all cells",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>narrowed</code>",description:"Makes the cells narrower",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>selectable</code>",description:"Table rows will be selectable (single)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>checkable</code>",description:"Table rows can be checked (multiple)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>paginated</code>",description:"Adds pagination the the table",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>per-page</code>",description:"How many items per page (if <code>paginated</code>)",type:"Boolean",values:"—",default:"<code>20</code>"},{name:"<code>pagination-simple</code>",description:"Simpler pagination (if <code>paginated</code>)",type:"Boolean",values:"—",default:"<code>false</code>"},{name:"<code>html</code>",description:"Table cells prints HTML",type:"Boolean",values:"—",default:"<code>false</code>"}],template:'\n                <b-table\n                    :data="tableData"\n                    :bordered="isBordered"\n                    :striped="isStriped"\n                    :narrowed="isNarrowed"\n                    :selectable="isSelectable"\n                    :checkable="isCheckable"\n                    paginated\n                    :per-page="perPage"\n                    :pagination-simple="isPaginationSimple"\n                    @check="checked"\n                    @select="selected">\n                    <b-table-column field="id" label="ID" sortable width="40" numeric></b-table-column>\n                    <b-table-column field="first_name" label="First Name" sortable></b-table-column>\n                    <b-table-column field="last_name" label="Last Name"></b-table-column>\n                    <b-table-column field="gender" label="Gender"></b-table-column>\n                </b-table>',code:'\n                export default {\n                    data() {\n                        return {\n                            tableData: [\n                                {"id":1,"first_name":"Ryan","last_name":"Hill","gender":"Male"},\n                                {"id":2,"first_name":"Kathryn","last_name":"Ward","gender":"Female"},\n                                {"id":3,"first_name":"Sharon","last_name":"Welch","gender":"Female"},\n                                {"id":4,"first_name":"Beverly","last_name":"Gutierrez","gender":"Female"},\n                                {"id":5,"first_name":"Gloria","last_name":"Boyd","gender":"Female"},\n                                [...]\n                            ]\n                            checkItems: [],\n                            selItem: {},\n                            isBordered: false,\n                            isStriped: false,\n                            isNarrowed: false,\n                            isSelectable: false,\n                            isCheckable: false,\n                            isPaginationSimple: false,\n                            perPage: 10,\n                        }\n                    },\n                    methods: {\n                        checked(items, item) {\n                            this.checkItems = items\n                        },\n                        selected(item) {\n                            this.selItem = item\n                        }\n                    }\n                }'}},methods:{checked:function(e,a){this.checkItems=e},selected:function(e){this.selItem=e}}}},483:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",[l("h1",{staticClass:"title is-spaced"},[e._v("Table")]),e._v(" "),l("h2",{staticClass:"subtitle"},[e._v("Tabulated data are sometimes needed")]),e._v(" "),l("hr"),e._v(" "),l("div",{staticClass:"columns is-marginless"},[l("div",{staticClass:"column example is-8"},[l("div",{staticClass:"content"},[l("b-switch",{model:{value:e.isBordered,callback:function(a){e.isBordered=a},expression:"isBordered"}},[e._v("Bordered")]),e._v(" "),l("b-switch",{model:{value:e.isStriped,callback:function(a){e.isStriped=a},expression:"isStriped"}},[e._v("Striped")]),e._v(" "),l("b-switch",{model:{value:e.isNarrowed,callback:function(a){e.isNarrowed=a},expression:"isNarrowed"}},[e._v("Narrowed")]),e._v(" "),l("b-switch",{model:{value:e.isSelectable,callback:function(a){e.isSelectable=a},expression:"isSelectable"}},[e._v("Selectable")]),e._v(" "),l("b-switch",{model:{value:e.isCheckable,callback:function(a){e.isCheckable=a},expression:"isCheckable"}},[e._v("Checkable")]),e._v(" "),l("b-switch",{model:{value:e.isPaginationSimple,callback:function(a){e.isPaginationSimple=a},expression:"isPaginationSimple"}},[e._v("Simple pagination")])],1),e._v(" "),l("div",{staticClass:"field"},[l("p",{staticClass:"control"},[l("label",{staticClass:"label"},[e._v("Items per page")]),e._v(" "),l("span",{staticClass:"select"},[l("select",{directives:[{name:"model",rawName:"v-model",value:e.perPage,expression:"perPage"}],on:{change:function(a){var l=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.perPage=a.target.multiple?l:l[0]}}},[l("option",{attrs:{value:"5"}},[e._v("5")]),e._v(" "),l("option",{attrs:{value:"10"}},[e._v("10")]),e._v(" "),l("option",{attrs:{value:"15"}},[e._v("15")]),e._v(" "),l("option",{attrs:{value:"20"}},[e._v("20")])])])])]),e._v(" "),l("b-table",{attrs:{data:e.tableData,bordered:e.isBordered,striped:e.isStriped,narrowed:e.isNarrowed,selectable:e.isSelectable,checkable:e.isCheckable,paginated:"","per-page":e.perPage,"pagination-simple":e.isPaginationSimple},on:{check:e.checked,select:e.selected}},[l("b-table-column",{attrs:{field:"id",label:"ID",sortable:"",width:"40",numeric:""}}),e._v(" "),l("b-table-column",{attrs:{field:"first_name",label:"First Name",sortable:""}}),e._v(" "),l("b-table-column",{attrs:{field:"last_name",label:"Last Name"}}),e._v(" "),l("b-table-column",{attrs:{field:"gender",label:"Gender"}})],1)],1),e._v(" "),l("div",{staticClass:"column"},[l("h3",{staticClass:"subtitle"},[e._v("Selected item")]),e._v(" "),l("pre",{staticClass:"content"},[e._v("\n"+e._s(e.selItem)+"\n                ")]),e._v(" "),l("h3",{staticClass:"subtitle"},[e._v("Checked items")]),e._v(" "),l("pre",[e._v("\n"+e._s(e.checkItems)+"\n                ")])])]),e._v(" "),l("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content"},[l("code",{staticClass:"html"},[e._v(e._s(e._f("pre")(e.template)))])]),e._v(" "),l("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[l("code",{staticClass:"javascript"},[e._v(e._s(e._f("pre")(e.code)))])]),e._v(" "),l("hr"),e._v(" "),l("h2",{staticClass:"subtitle"},[e._v("Properties")]),e._v(" "),l("b-table",{attrs:{data:e.props,"default-sort":"name",html:""}},[l("b-table-column",{attrs:{field:"name",label:"Name"}}),e._v(" "),l("b-table-column",{attrs:{field:"description",label:"Description",width:"620"}}),e._v(" "),l("b-table-column",{attrs:{field:"type",label:"Type"}}),e._v(" "),l("b-table-column",{attrs:{field:"values",label:"Values"}}),e._v(" "),l("b-table-column",{attrs:{field:"default",label:"Default"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.cdedb41a96097b4cef99.js.map