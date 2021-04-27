(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{191:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"e",(function(){return d})),o.d(e,"d",(function(){return l})),o.d(e,"b",(function(){return c})),o.d(e,"c",(function(){return v})),o.d(e,"f",(function(){return _}));o(34),o(150);var n=["Feature","Docs","Issue","Backend","Frontent"],r=[{id:1,name:"Add more frameworks",description:"We need to add more frameworks",type:"Issue",confidential:"Yes",remind:!0,date:"2021-04-07"}],d=function(){return r},l=function(t){return d().filter((function(e){return e.id===t}))[0]},c=function(t){var e=d();t.id=e.length?e[e.length-1].id+1:1,e.push(t)},v=function(t){var e=d(),o=l(t),n=e.indexOf(o);e.splice(n,1)},_=function(t){var e=l(t.id),o=d(),n=o.indexOf(e);o[n]=t}},192:function(t,e,o){"use strict";o.r(e);o(33),o(29),o(43),o(53);var n=o(1),r=o(191),d=n.a.extend({props:["todo"],data:function(){return{types:r.a,errors:{status:!1}}},methods:{updateTodoHandler:function(t){var e=this;t.preventDefault(),this.errors={status:!1},this.todo.name||(this.errors.name="Name is required.",this.errors.status=!0),this.todo.description||(this.errors.description="Description is required.",this.errors.status=!0),this.todo.type||(this.errors.type="Type is required.",this.errors.status=!0),this.todo.date||(this.errors.date="Date is required.",this.errors.status=!0),setTimeout((function(){e.errors.status?alert("All Fields are required"):e.$emit("onAddOrUpdate",e.todo)}))}}}),l=o(35),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h4",[t._v(t._s(t.todo.id?"Update":"Add")+" Todo")]),t._v(" "),o("form",{attrs:{novalidate:""},on:{submit:t.updateTodoHandler}},[o("table",[o("tbody",[o("tr",[t._m(0),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.name,expression:"todo.name"}],attrs:{id:"name",type:"text",name:"name",required:""},domProps:{value:t.todo.name},on:{input:function(e){e.target.composing||t.$set(t.todo,"name",e.target.value)}}})]),t._v(" "),o("td",[t._v(t._s(t.errors.name))])]),t._v(" "),o("tr",[t._m(1),t._v(" "),o("td",[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todo.description,expression:"todo.description"}],attrs:{id:"description",name:"description",required:""},domProps:{value:t.todo.description},on:{input:function(e){e.target.composing||t.$set(t.todo,"description",e.target.value)}}})]),t._v(" "),o("td",[t._v(t._s(t.errors.description))])]),t._v(" "),o("tr",[t._m(2),t._v(" "),o("td",[o("select",{directives:[{name:"model",rawName:"v-model",value:t.todo.type,expression:"todo.type"}],attrs:{id:"type",name:"type",required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.todo,"type",e.target.multiple?o:o[0])}}},t._l(t.types,(function(e){return o("option",{key:e,domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])})),0)]),t._v(" "),o("td",[t._v(t._s(t.errors.type))])]),t._v(" "),o("tr",[t._m(3),t._v(" "),o("td",[o("label",{attrs:{for:"confidential1"}},[t._v("Yes")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.Confidential,expression:"todo.Confidential"}],attrs:{id:"confidential1",type:"radio",name:"confidential",value:"Yes"},domProps:{checked:t._q(t.todo.Confidential,"Yes")},on:{change:function(e){return t.$set(t.todo,"Confidential","Yes")}}}),t._v(" "),o("label",{attrs:{for:"confidential2"}},[t._v("No")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.Confidential,expression:"todo.Confidential"}],attrs:{id:"confidential2",type:"radio",name:"confidential",value:"No"},domProps:{checked:t._q(t.todo.Confidential,"No")},on:{change:function(e){return t.$set(t.todo,"Confidential","No")}}})]),t._v(" "),o("td")]),t._v(" "),o("tr",[t._m(4),t._v(" "),o("td",[o("label",{attrs:{for:"remind"}},[t._v("Yes")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.remind,expression:"todo.remind"}],attrs:{id:"remind",type:"checkbox",name:"remind"},domProps:{checked:Array.isArray(t.todo.remind)?t._i(t.todo.remind,null)>-1:t.todo.remind},on:{change:function(e){var o=t.todo.remind,n=e.target,r=!!n.checked;if(Array.isArray(o)){var d=t._i(o,null);n.checked?d<0&&t.$set(t.todo,"remind",o.concat([null])):d>-1&&t.$set(t.todo,"remind",o.slice(0,d).concat(o.slice(d+1)))}else t.$set(t.todo,"remind",r)}}})]),t._v(" "),o("td")]),t._v(" "),o("tr",[t._m(5),t._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.date,expression:"todo.date"}],attrs:{id:"date",type:"date",name:"date",required:""},domProps:{value:t.todo.date},on:{input:function(e){e.target.composing||t.$set(t.todo,"date",e.target.value)}}})]),t._v(" "),o("td",[t._v(t._s(t.errors.date))])]),t._v(" "),o("tr",[o("th",{attrs:{colspan:"2",align:"right"}},[o("button",{attrs:{type:"submit"}},[t._v(t._s(t.todo.id?"Update":"Add"))])])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("label",{attrs:{for:"name"}},[t._v("Name")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("label",{attrs:{for:"description"}},[t._v("description")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("label",[t._v("Type")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("label",[t._v("Confidential")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",{attrs:{align:"left"}},[o("label",[t._v("Remind")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("label",{attrs:{for:"date"}},[t._v("Date")])])}],!1,null,null,null);e.default=component.exports},193:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(191),d=n.a.extend({data:function(){return{currentTodo:null,todos:Object(r.e)()}},methods:{addTodoHandler:function(){this.currentTodo={confidential:"No",remind:!1}},selectTodoHandler:function(t){this.currentTodo=Object(r.d)(t)},deleteTodoHandler:function(t){Object(r.c)(t),this.todos=Object(r.e)()},onUpdateTodoHandler:function(t){t.id?Object(r.f)(t):Object(r.b)(t),this.currentTodo=null}}}),l=o(35),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h3",[t._v("Todos "),o("button",{on:{click:function(e){return t.addTodoHandler()}}},[t._v("New")])]),t._v(" "),t.currentTodo?o("TodoForm",{attrs:{todo:t.currentTodo},on:{onAddOrUpdate:t.onUpdateTodoHandler}}):t._e(),t._v(" "),o("br"),t._v(" "),o("table",[t._m(0),t._v(" "),o("tbody",t._l(t.todos,(function(e){return o("tr",{key:e.id},[o("td",[t._v(t._s(e.id))]),t._v(" "),o("td",[t._v(t._s(e.name))]),t._v(" "),o("td",[t._v(t._s(e.description))]),t._v(" "),o("td",[t._v(t._s(e.type))]),t._v(" "),o("td",[t._v(t._s(e.confidential))]),t._v(" "),o("td",[t._v(t._s(e.remind.toString()))]),t._v(" "),o("td",[t._v(t._s(e.date))]),t._v(" "),o("td",[o("button",{attrs:{type:"button"},on:{click:function(o){return t.selectTodoHandler(e.id)}}},[t._v("\n            Edit\n          ")]),t._v(" "),o("button",{attrs:{type:"button"},on:{click:function(o){return t.deleteTodoHandler(e.id)}}},[t._v("\n            Delete\n          ")])])])})),0)])],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Id")]),t._v(" "),o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("description")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",[t._v("Confidential")]),t._v(" "),o("th",[t._v("Remind")]),t._v(" "),o("th",[t._v("Date")]),t._v(" "),o("th",[t._v("Actions")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TodoForm:o(192).default})},194:function(t,e,o){"use strict";o.r(e);var n=o(1).a.extend({head:{title:"Lighthouse Test | Nuxt"},meta:[{hid:"description",name:"description",content:"Lighthouse Test | Nuxt"}]}),r=o(35),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("h2",[t._v("Home")]),t._v(" "),o("Todos")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Todos:o(193).default})}}]);