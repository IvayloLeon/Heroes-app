(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],Array(18).concat([function(e,a,t){var r={"./dc-arrow.jpg":28,"./dc-batman.jpg":29,"./dc-black.jpg":30,"./dc-blue.jpg":31,"./dc-flash.jpg":32,"./dc-green.jpg":33,"./dc-martian.jpg":34,"./dc-robin.jpg":35,"./dc-superman.jpg":36,"./dc-wonder.jpg":37,"./marvel-captain.jpg":38,"./marvel-cyclops.jpg":39,"./marvel-daredevil.jpg":40,"./marvel-hawkeye.jpg":41,"./marvel-hulk.jpg":42,"./marvel-iron.jpg":43,"./marvel-silver.jpg":44,"./marvel-spider.jpg":45,"./marvel-thor.jpg":46,"./marvel-wolverine.jpg":47};function c(e){var a=s(e);return t(a)}function s(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=s,e.exports=c,c.id=18},,,,,,,,,,function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-arrow.15b27bc2.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-batman.ab9eadc3.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-black.3747c663.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-blue.cc8169a3.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-flash.b3922f25.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-green.01c54ee1.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-martian.78565f7d.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-robin.ea4afe99.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-superman.e9391474.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/dc-wonder.970ba2d6.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-captain.d2c7774d.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-cyclops.f1442408.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-hawkeye.1f78e874.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-hulk.d1af5fe5.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-iron.b394df11.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-silver.1d43a08b.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-spider.054016b4.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-thor.c63e651c.jpg"},function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/marvel-wolverine.ee676488.jpg"},,,,,,,,function(e,a,t){"use strict";t.r(a);var r=t(1),c=t.n(r),s=t(20),n=t.n(s),i=t(9),l=Object(r.createContext)(null),o=t(4),u="[auth] Login",d="[auth] Logout",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u:return Object(o.a)(Object(o.a)({},a.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},p=t(0),h=function(e){var a=e.history,t=Object(r.useState)(""),c=Object(i.a)(t,2),s=c[0],n=c[1],o=Object(r.useContext)(l).dispatch;return Object(p.jsxs)("div",{className:"container mt-5",children:[Object(p.jsx)("h1",{children:"Login"}),Object(p.jsx)("hr",{}),Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Ingrese aqu\xed su nombre",value:s,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";o({type:u,payload:{name:s}}),a.replace(e)},children:"Login"})]})},b=t(2),m=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=t(5),f=function(e){var a=e.id,r=e.superhero,c=e.alter_ego,s=e.first_appearance,n=e.characters;return Object(p.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(p.jsxs)("div",{className:"row no-gutters",children:[Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)("img",{src:t(18)("./".concat(a,".jpg")).default,className:"card-img",alt:r})}),Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:r}),Object(p.jsx)("p",{className:"card-text",children:c}),c!==n&&Object(p.jsx)("p",{className:"card-text",children:n}),Object(p.jsx)("p",{className:"card-text",children:Object(p.jsx)("small",{className:"text-muted",children:s})}),Object(p.jsx)(v.b,{className:"btn btn-warning",to:"./hero/".concat(a),children:"Mas..."})]})})]})})},O=function(e){var a=e.publisher,t=Object(r.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher: ".concat(e," no es correcto"));return m.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(p.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:t.map((function(e){return Object(p.jsx)(f,Object(o.a)({},e),e.id)}))})},g=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"MarvelScreen"}),Object(p.jsx)("hr",{}),Object(p.jsx)(O,{publisher:"Marvel Comics"})]})},x=function(e){e.publisher;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"DcScreen"}),Object(p.jsx)("hr",{}),Object(p.jsx)(O,{publisher:"DC Comics"})]})},C=function(e){var a=e.history,c=Object(b.i)().heroeId,s=Object(r.useMemo)((function(){return e=c,m.find((function(a){return a.id===e}));var e}),[c]);if(!s)return Object(p.jsx)(b.a,{to:"/"});var n=s.superhero,i=s.publisher,l=s.alter_ego,o=s.first_appearance,u=s.characters;return Object(p.jsxs)("div",{className:"row mt-5 animate__animated animate__fadeIn",children:[Object(p.jsx)("div",{className:"col-4",children:Object(p.jsx)("img",{src:t(18)("./".concat(c,".jpg")).default,className:"img-thumbnail",alt:n})}),Object(p.jsxs)("div",{className:"col-8",children:[Object(p.jsx)("h3",{children:n}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("b",{children:"Alter ego:"})," ",l]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("b",{children:"Publisher:"})," ",i]}),Object(p.jsxs)("li",{className:"list-group-item",children:[Object(p.jsx)("b",{children:"First appearance:"})," ",o]})]}),Object(p.jsx)("h5",{children:"Characters"}),Object(p.jsx)("p",{children:u}),Object(p.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Go back"})]})]})},_=function(){var e=Object(r.useContext)(l).user.name,a=Object(b.g)(),t=Object(r.useContext)(l).dispatch;return Object(p.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(p.jsx)(v.b,{className:"navbar-brand",to:"/",children:"Heroes App"}),Object(p.jsx)("div",{className:"navbar-collapse",children:Object(p.jsxs)("div",{className:"navbar-nav",children:[Object(p.jsx)(v.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(p.jsx)(v.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(p.jsx)(v.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(p.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsx)("span",{className:"nav-item nav-link text-info",children:e}),Object(p.jsx)("button",{className:"nav-item nav-link btn btn-warning",onClick:function(){t({type:d,payload:{logged:!1}}),a.replace("/login")},children:"Logout"})]})})]})},N=t(22),y=t.n(N),k=t(13),M=function(e){var a=e.history,t=Object(b.h)().search,c=y.a.parse(t).q,s=void 0===c?"":c,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(r.useState)(e),t=Object(i.a)(a,2),c=t[0],s=t[1];return[c,function(e){var a=e.target;s(Object(o.a)(Object(o.a)({},c),{},Object(k.a)({},a.name,a.value)))},function(e){s(e)}]}({searchText:s}),l=Object(i.a)(n,2),u=l[0].searchText,d=l[1],j=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),m.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Search"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-5",children:[Object(p.jsx)("h4",{children:"Search Form"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(u))},children:[Object(p.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",value:u,onChange:d}),Object(p.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search"})]})]}),Object(p.jsxs)("div",{className:"col-7",children:[Object(p.jsx)("h4",{children:"Results"}),Object(p.jsx)("hr",{}),""===s&&Object(p.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),j.map((function(e){return Object(p.jsx)(f,Object(o.a)({},e),e.id)}))]})]})]})},S=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(_,{}),Object(p.jsx)("div",{className:"container mt-2",children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(b.b,{exact:!0,path:"/marvel",component:g}),Object(p.jsx)(b.b,{exact:!0,path:"/hero/:heroeId",component:C}),Object(p.jsx)(b.b,{exact:!0,path:"/dc",component:x}),Object(p.jsx)(b.b,{exact:!0,path:"/search",component:M}),Object(p.jsx)(b.a,{to:"/marvel"})]})})]})},w=t(14),D=["isAuthenticated","component"],A=function(e){var a=e.isAuthenticated,t=e.component,r=Object(w.a)(e,D);return localStorage.setItem("lastPath",r.location.pathname),Object(p.jsx)(b.b,Object(o.a)(Object(o.a)({},r),{},{component:function(e){return a?Object(p.jsx)(t,Object(o.a)({},e)):Object(p.jsx)(b.a,{to:"/login"})}}))},B=["isAuthenticated","component"],J=function(e){var a=e.isAuthenticated,t=e.component,r=Object(w.a)(e,B);return Object(p.jsx)(b.b,Object(o.a)(Object(o.a)({},r),{},{component:function(e){return a?Object(p.jsx)(b.a,{to:"/"}):Object(p.jsx)(t,Object(o.a)({},e))}}))},T=function(){var e=Object(r.useContext)(l).user;return Object(p.jsx)(v.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(b.d,{children:[Object(p.jsx)(J,{exact:!0,path:"/login",component:h,isAuthenticated:e.logged}),Object(p.jsx)(A,{path:"/",component:S,isAuthenticated:e.logged})]})})})},F=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(r.useReducer)(j,{},F),a=Object(i.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),Object(p.jsx)(l.Provider,{value:{user:t,dispatch:c},children:Object(p.jsx)(T,{})})};t(54);n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.c2e98ee9.chunk.js.map