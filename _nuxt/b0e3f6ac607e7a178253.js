(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{183:function(t,s,n){var e=n(189);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,n(14).default)("c77b41b0",e,!0,{sourceMap:!1})},188:function(t,s,n){"use strict";var e=n(183);n.n(e).a},189:function(t,s,n){(t.exports=n(13)(!1)).push([t.i,"",""])},193:function(t,s,n){"use strict";n.r(s);var e={data:function(){return{questions:this.$store.state.questions,question_index:this.$store.state.question_index}},fetch:function(t){var s=t.store,n=t.params;s.dispatch("shuffle",{pref:n.id})}},i=(n(188),n(19)),o=Object(i.a)(e,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"container"},[n("h2",[t._v("hello "+t._s(t.$route.params.id))]),t._v("\n  "+t._s(t.questions[t.question_index].city)+"\n  "+t._s(t.questions[t.question_index].town)+"\n")])},[],!1,null,null,null);o.options.__file="_id.vue";s.default=o.exports}}]);