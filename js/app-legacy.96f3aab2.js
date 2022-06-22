(function(){"use strict";var t={537:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(9567),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("SearchItem"),n("ListItem")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"jumbotron"},[n("h3",{staticClass:"jumbotron-heading"},[t._v("Search Github Users")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],attrs:{type:"text",placeholder:"enter the name you search"},domProps:{value:t.keyWord},on:{input:function(e){e.target.composing||(t.keyWord=e.target.value)}}}),t._v("  "),n("button",{on:{click:t.searchUsers}},[t._v("Search")])])])},u=[],a=n(6166),c=n.n(a),l={name:"SearchItem",data:function(){return{keyWord:""}},methods:{searchUsers:function(){var t=this;c().get("https://api.github.com/search/users?q=".concat(this.keyWord)).then((function(e){console.log("chengong"),t.$bus.$emit("getUsers",e.data.items)}),(function(t){console.log("sbai",t.message)}))}}},f=l,h=n(1001),d=(0,h.Z)(f,s,u,!1,null,null,null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.users,(function(e){return n("div",{key:e.login,staticClass:"card"},[n("a",{attrs:{href:e.html_url,target:"_blank"}},[n("img",{staticStyle:{width:"100px"},attrs:{src:e.avatar_url}})]),n("p",{staticClass:"card-text"},[t._v(t._s(e.login))])])})),0)},m=[],g={name:"ListItem",data:function(){return{users:[]}},mounted:function(){var t=this;this.$bus.$on("getUsers",(function(e){console.log("收到数据",e),t.users=e}))}},b=g,y=(0,h.Z)(b,v,m,!1,null,"2297d55b",null),_=y.exports,k={name:"App",components:{SearchItem:p,ListItem:_}},w=k,x=(0,h.Z)(w,o,i,!1,null,null,null),O=x.exports;r.Z.config.productionTip=!1,new r.Z({el:"#app",render:function(t){return t(O)},beforeCreate:function(){r.Z.prototype.$bus=this}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[a])}))?r.splice(a--,1):(u=!1,i<s&&(s=i));if(u){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,s=r[0],u=r[1],a=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(a)var l=a(n)}for(e&&e(r);c<s.length;c++)i=s[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkgithubsearch"]=self["webpackChunkgithubsearch"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(537)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.96f3aab2.js.map