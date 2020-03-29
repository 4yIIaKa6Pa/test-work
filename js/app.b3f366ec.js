(function(t){function e(e){for(var a,n,o=e[0],l=e[1],p=e[2],u=0,h=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(h.length)h.shift()();return r.push.apply(r,p||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==i[l]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),i=s.n(a);i.a},"05a9":function(t,e,s){},"0f74":function(t,e,s){},"170e":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Header"),s("router-view")],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Header"},[s("router-link",{staticClass:"Header__logo",attrs:{to:"/"}},[t._v("Some Logo =)")]),s("ul",{staticClass:"Header__list"},[s("router-link",{staticClass:"Header__list-item",attrs:{to:"/films"}},[s("li",[t._v("Films")])]),s("router-link",{staticClass:"Header__list-item",attrs:{to:"/peoples"}},[s("li",[t._v("Peoples")])]),s("router-link",{staticClass:"Header__list-item",attrs:{to:"/starships"}},[s("li",[t._v("Starships")])])],1),s("Slide",{staticClass:"Header__burger",attrs:{right:""}},[s("router-link",{staticClass:"Header__list-item",attrs:{to:"/films"}},[s("li",[t._v("Films")])]),s("router-link",{staticClass:"Header__list-item",attrs:{to:"/peoples"}},[s("li",[t._v("Peoples")])]),s("router-link",{staticClass:"Header__list-item",attrs:{to:"/starships"}},[s("li",[t._v("Starships")])])],1)],1)},o=[],l=(s("a6be"),s("db0f")),p={name:"Header",components:{Slide:l["Slide"]}},c=p,u=s("2877"),h=Object(u["a"])(c,n,o,!1,null,"429667a8",null),f=h.exports,d={name:"App",components:{Header:f}},_=d,m=(s("034f"),Object(u["a"])(_,i,r,!1,null,null,null)),v=m.exports,g=(s("99af"),s("2f62")),b=s("bc3a"),S=s.n(b);a["a"].use(g["a"]);var C="https://swapi.co/api/",$=new g["a"].Store({state:{films:[],peoples:[],starships:[],filteredData:[]},mutations:{setFilms:function(t,e){t.films=e},setPeoples:function(t,e){t.peoples=e},setStarships:function(t,e){t.starships=e},setFilteredData:function(t,e){t.filteredData=e}},getters:{films:function(t){return t.films},peoples:function(t){return t.peoples},starships:function(t){return t.starships},filteredData:function(t){return t.filteredData}},actions:{getFilms:function(t){var e=t.commit;S.a.get("".concat(C,"films/")).then((function(t){e("setFilms",t.data.results)}))},getPeoples:function(t){var e=t.commit;S.a.get("".concat(C,"people/")).then((function(t){e("setPeoples",t.data.results)}))},getStarships:function(t){var e=t.commit;S.a.get("".concat(C,"starships/")).then((function(t){e("setStarships",t.data.results)}))},getFilteredData:function(t,e){var s=t.commit;S.a.get("".concat(C).concat(e.type,"/?search=").concat(e.value)).then((function(t){s("setFilteredData",t.data.results)})).catch((function(t){return console.log(t)}))}}}),y=$,P=s("8c4f"),F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Films"},[s("Loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),s("h1",{staticClass:"Films__name"},[t._v("Films")]),s("Search",{attrs:{"search-data":"films"}}),s("div",{staticClass:"Films__data"},t._l(t.films,(function(t){return s("Film",{key:t.id,attrs:{film:t}})})),1)],1)},H=[],L=(s("05a9"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Film"},[s("h2",[t._v(t._s(t.film.title))]),s("p",[t._v("Episode: "),s("span",[t._v(t._s(t.film.episode_id))])]),s("p",[t._v("Director: "),s("span",[t._v(t._s(t.film.director))])]),s("p",[t._v("Producer: "),s("span",[t._v(t._s(t.film.producer))])]),s("p",[t._v("Release Date: "),s("span",[t._v(t._s(t.film.release_date))])])])}),D=[],O=(s("aa48"),{name:"Film",props:["film"]}),x=O,j=Object(u["a"])(x,L,D,!1,null,"0cd59baa",null),k=j.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"Search__input",attrs:{type:"text"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),s("button",{staticClass:"Search__button",on:{click:t.search}},[t._v("Search")])])},E=[],M=(s("170e"),{name:"Search",props:["searchData"],data:function(){return{searchValue:""}},methods:{search:function(){this.$store.dispatch("getFilteredData",{type:this.searchData,value:this.searchValue})}}}),V=M,T=Object(u["a"])(V,w,E,!1,null,"3b2fa2e2",null),J=T.exports,A=s("9062"),B=s.n(A),G={name:"Films",components:{Film:k,Search:J,Loading:B.a},computed:{films:function(){return 0!==this.$store.getters.filteredData.length?this.$store.getters.filteredData:this.$store.getters.films},isLoading:function(){return 0===this.films.length}},mounted:function(){this.$store.dispatch("getFilms"),this.$store.commit("setFilteredData",[])}},N=G,R=Object(u["a"])(N,F,H,!1,null,"3f0d1e8e",null),q=R.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Starships"},[s("Loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),s("h1",{staticClass:"Starships__name"},[t._v("Starships")]),s("Search",{attrs:{"search-data":"starships"}}),s("div",{staticClass:"Starships__data"},t._l(t.starships,(function(t){return s("Starship",{key:t.id,attrs:{starship:t}})})),1)],1)},I=[],K=(s("b18a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"People"},[s("h2",[t._v(t._s(t.starship.name))]),s("p",[t._v("Model: "),s("span",[t._v(t._s(t.starship.model))])]),s("p",[t._v("Manufacturer: "),s("span",[t._v(t._s(t.starship.manufacturer))])]),s("p",[t._v("Cost in credits: "),s("span",[t._v(t._s(t.starship.cost_in_credits))])]),s("p",[t._v("Length: "),s("span",[t._v(t._s(t.starship.length))])]),s("p",[t._v("Max atmosphering speed: "),s("span",[t._v(t._s(t.starship.max_atmosphering_speed))])]),s("p",[t._v("Starship class: "),s("span",[t._v(t._s(t.starship.starship_class))])]),s("p",[t._v("Hyperdrive rating: "),s("span",[t._v(t._s(t.starship.hyperdrive_rating))])])])}),Q=[],U=(s("d5f9"),{name:"Starship",props:["starship"]}),W=U,X=Object(u["a"])(W,K,Q,!1,null,"bf94c7ae",null),Y=X.exports,Z={name:"Starships",components:{Search:J,Starship:Y,Loading:B.a},computed:{starships:function(){return 0!==this.$store.getters.filteredData.length?this.$store.getters.filteredData:this.$store.getters.starships},isLoading:function(){return 0===this.starships.length}},mounted:function(){this.$store.dispatch("getStarships"),this.$store.commit("setFilteredData",[])}},tt=Z,et=Object(u["a"])(tt,z,I,!1,null,"4bf47652",null),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Peoples"},[s("Loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),s("h1",{staticClass:"Peoples__name"},[t._v("Peoples")]),s("Search",{attrs:{"search-data":"people"}}),s("div",{staticClass:"Peoples__data"},t._l(t.peoples,(function(t){return s("People",{key:t.id,attrs:{people:t}})})),1)],1)},it=[],rt=(s("0f74"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"People"},[s("h2",[t._v(t._s(t.people.name))]),s("p",[t._v("Height: "),s("span",[t._v(t._s(t.people.height))])]),s("p",[t._v("Mass: "),s("span",[t._v(t._s(t.people.mass))])]),s("p",[t._v("Hair color: "),s("span",[t._v(t._s(t.people.hair_color))])]),s("p",[t._v("Skin color: "),s("span",[t._v(t._s(t.people.skin_color))])]),s("p",[t._v("Eye color: "),s("span",[t._v(t._s(t.people.eye_color))])]),s("p",[t._v("Birth year: "),s("span",[t._v(t._s(t.people.birth_year))])]),s("p",[t._v("Gender: "),s("span",[t._v(t._s(t.people.gender))])])])}),nt=[],ot=(s("690d"),{name:"People",props:["people"]}),lt=ot,pt=Object(u["a"])(lt,rt,nt,!1,null,"7f972298",null),ct=pt.exports,ut={name:"Peoples",components:{People:ct,Search:J,Loading:B.a},computed:{peoples:function(){return 0!==this.$store.getters.filteredData.length?this.$store.getters.filteredData:this.$store.getters.peoples},isLoading:function(){return 0===this.peoples.length}},mounted:function(){this.$store.dispatch("getPeoples"),this.$store.commit("setFilteredData",[])}},ht=ut,ft=Object(u["a"])(ht,at,it,!1,null,"68f76966",null),dt=ft.exports,_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Home-page"},[s("h1",[t._v("Home Page")]),s("Loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}}),s("h2",{staticClass:"Home-page__name"},[t._v("Films")]),s("div",{staticClass:"Home-page__data"},t._l(t.films,(function(t){return s("Film",{key:t.id,attrs:{film:t}})})),1),s("h2",{staticClass:"Home-page__name"},[t._v("Peoples")]),s("div",{staticClass:"Home-page__data"},t._l(t.peoples,(function(t){return s("People",{key:t.id,attrs:{people:t}})})),1),s("h2",{staticClass:"Home-page__name"},[t._v("Starships")]),s("div",{staticClass:"Home-page__data"},t._l(t.starships,(function(t){return s("Starship",{key:t.id,attrs:{starship:t}})})),1)],1)},mt=[],vt=(s("d149"),s("e40d"),{name:"HomePage",components:{Loading:B.a,Film:k,People:ct,Starship:Y},mounted:function(){this.$store.dispatch("getFilms"),this.$store.dispatch("getPeoples"),this.$store.dispatch("getStarships")},computed:{films:function(){return this.$store.getters.films},peoples:function(){return this.$store.getters.peoples},starships:function(){return this.$store.getters.starships},isLoading:function(){return 0===this.films.length&&0===this.peoples.length&&0===this.starships.length}}}),gt=vt,bt=Object(u["a"])(gt,_t,mt,!1,null,"37d37d91",null),St=bt.exports;a["a"].use(P["a"]);var Ct=new P["a"]({routes:[{path:"/films",component:q},{path:"/starships",component:st},{path:"/Peoples",component:dt},{path:"/",component:St}]}),$t=Ct;a["a"].config.productionTip=!1,new a["a"]({store:y,router:$t,render:function(t){return t(v)}}).$mount("#app")},"690d":function(t,e,s){},"85ec":function(t,e,s){},a6be:function(t,e,s){},aa48:function(t,e,s){},b18a:function(t,e,s){},d149:function(t,e,s){},d5f9:function(t,e,s){}});
//# sourceMappingURL=app.b3f366ec.js.map