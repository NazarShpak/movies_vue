(function(t){function e(e){for(var o,n,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)n=r[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],o=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(o=!1)}o&&(s.splice(e--,1),t=n(n.s=i[0]))}return t}var o={},a={app:0},s=[];function n(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=o,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/movies_vue/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"08b1":function(t,e,i){t.exports=i.p+"img/turn off.edc36a11.png"},"0b5e":function(t,e,i){"use strict";var o=i("45bb"),a=i.n(o);a.a},"0fa0":function(t,e,i){t.exports=i.p+"img/turn on.fbc83945.png"},"16d6":function(t,e,i){"use strict";var o=i("bcd4"),a=i.n(o);a.a},"1ac5":function(t,e,i){},"1e9c":function(t,e,i){t.exports=i.p+"media/allMoviesPage-audio.fa04b94f.mp3"},2016:function(t,e,i){t.exports=i.p+"media/mainPage-audio.7ab6e94d.mp3"},"2b02":function(t,e,i){"use strict";var o=i("a6fc"),a=i.n(o);a.a},"2fb4":function(t,e,i){},3507:function(t,e,i){},"45bb":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},["main"!==t.$route.name?i("movies-menu",{staticClass:"movies-menu"}):t._e(),i("router-view")],1)},s=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movies-menu"},[o("div",{staticClass:"container"},[o("audio",{ref:"audio",staticClass:"movies-menu__audio",attrs:{autoplay:this.autoplay,loop:!0,preload:"auto",src:i("1e9c")}}),o("button",{staticClass:"movies-menu__btn",on:{click:function(e){t.$router.push({name:"main"})}}},[t._v(" Головна ")]),o("button",{staticClass:"movies-menu__btn",on:{click:function(e){t.$router.push({name:"movies"})}}},[t._v(" Всі фільми ")]),o("button",{staticClass:"movies-menu__btn",on:{click:function(e){t.$router.push({name:"movies-map"})}}},[t._v(" Карта фільмів ")]),t.showBtn?o("img",{staticClass:"movies-menu__audio-btn",attrs:{src:i("0fa0")},on:{click:t.turnOff}}):o("img",{staticClass:"movies-menu__audio-btn",attrs:{src:i("08b1")},on:{click:t.turnOn}})])])},r=[],c={data:function(){return{showBtn:!0,autoplay:!0}},computed:{getAudio:function(){return this.$refs.audio}},methods:{turnOff:function(){this.showBtn=!1,this.getAudio.pause()},turnOn:function(){this.showBtn=!0,this.getAudio.play()}}},l=c,u=(i("16d6"),i("2877")),m=Object(u["a"])(l,n,r,!1,null,"10a71992",null),d=m.exports,v={name:"App",data:function(){return{}},components:{MoviesMenu:d}},p=v,f=(i("0b5e"),Object(u["a"])(p,a,s,!1,null,"44e55258",null)),_=f.exports,h=i("8c4f"),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-page"},[i("h1",{staticClass:"main-page__title"},[t._v(" MARVEL ")]),i("button",{staticClass:"main-page__btn",attrs:{type:"button"},on:{click:function(e){t.$router.push({name:"movies"})}}},[t._v(" Перейти до фільмів ")])])},b=[],C={computed:{audio:function(){return new Audio(i("2016"))}},mounted:function(){this.audio.play()},beforeDestroy:function(){this.audio.pause()}},w=C,y=(i("a5aa"),Object(u["a"])(w,g,b,!1,null,"26d6a364",null)),M=y.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"all-movies-page"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"all-movies-page__title"},[t._v("Топ від MARVEL")]),i("movies-cards-list",{attrs:{movies:t.movies}})],1)])},j=[],O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movies-cards-list"},t._l(t.movies,(function(t,e){return i("movie-card",{key:e,staticClass:"movie-card",attrs:{movie:t}})})),1)},k=[],$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie-card"},[i("img",{staticClass:"movie-card__img",attrs:{src:t.movie.img,alt:t.movie.title}}),i("p",{staticClass:"rating"},[t._v(t._s(t.movie.rating))]),i("p",{staticClass:"title"},[t._v(t._s(t.movie.title))]),i("router-link",{staticClass:"more-info",attrs:{to:{name:"about-movie",params:{movieName:t.movie.title}}}},[t._v(" Детальніше ")])],1)},P=[],S={props:{movie:{type:Object}}},N=S,D=(i("2b02"),Object(u["a"])(N,$,P,!1,null,"baf421e4",null)),E=D.exports,U={props:{movies:{type:Array}},components:{MovieCard:E}},A=U,T=(i("9b16"),Object(u["a"])(A,O,k,!1,null,"6dfd9644",null)),q=T.exports,R={data:function(){return{}},components:{MoviesCardsList:q},created:function(){this.$store.dispatch("loadMovies")},computed:{movies:function(){return this.$store.getters.getMovies}}},I=R,B=(i("d520"),Object(u["a"])(I,x,j,!1,null,"31889392",null)),F=B.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about-movie-page"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"about-movie-page__title"},[t._v(t._s(t.movie.title))]),i("youtube",{staticClass:"about-movie-page__video",attrs:{"video-id":t.videoId,host:t.movie.video,"player-height":"600","player-width":"1050"}}),i("div",{staticClass:"content"},[i("p",{staticClass:"content__title"},[t._v("Сюжет:")]),i("p",{staticClass:"content__description"},[t._v(t._s(t.movie.description))])]),i("div",{staticClass:"content"},[i("p",{staticClass:"content__title"},[t._v("Рейтинг:")]),i("p",{staticClass:"content__description"},[t._v(t._s(t.movie.rating))])]),i("div",{staticClass:"content"},[i("p",{staticClass:"content__title"},[t._v("Акторський склад:")]),i("p",{staticClass:"content__description"},[t._v(t._s(t.movie.actors.join(", ")))])]),i("div",{staticClass:"content"},[i("p",{staticClass:"content__title"},[t._v("Режисери:")]),i("p",{staticClass:"content__description description-last"},[t._v(t._s(t.movie.directors.join(", ")))])])],1)])},J=[],K=(i("7db0"),[{title:"Тор Рагнарок",description:"Повернувшись в Асгард в пошуках таємничого ворога, провідного полювання на Камені Нескінченності, Тор виявляє, що дії його брата Локі, який захопив трон Асгарда, привели до наближення найбільш страшної події - Рагнарека. За легендою це ознаменує останню битву Асгарда, наслідком якої стане його повне знищення. У спробі запобігти цю подію Тору належить вдатися до допомоги свого товариша з Месників - Халка. Разом їм доведеться зіткнутися віч-на-віч з лютим ворогом усіх дев'яти світів - вогненним демоном Суртуром, метою якого є виконання пророцтва про Рагнарека і знищення дев'яти світів.",rating:"9.4",actors:["Крис Хемсворт","Том Хиддлстон","Кейт Бланшетто","Идрис Эльба","Тесса Томпсон","Карл Урбан"],img:"https://cdn.smartfacts.ru/171909/tor-3-ragnarek_0.jpg",video:"https://www.youtube.com/embed/KoI61d_ol1",directors:["Тайка Вайтіті"]},{title:"Шан-Чи і легенда десяти кілець",description:"Шан-Чи пішов з рідного дому після того, як дізнався про зв'язки свого батька з могутнім кримінальним угрупованням. Чоловік хотів зробити сина професійним кілером, який приєднається до терористів, але хлопець переїхав в Америку і оселився в Сан-Франциско..",rating:"9.0",actors:["Симу Лю","Аквафина","Мишель Йео","Фала Чэнь","Тони Чу-вай Люн","Флориан Мунтяну","Ронни Чиэн","Даллас Лю","Чжан Мэнъэр"],img:"https://2datyvyhoda.ru/wp-content/uploads/2021/05/Shang-Chi-and-the-Legend-of-the-Ten-Rings-2021.jpg",video:"https://www.youtube.com/embed/whv6KtrXIc0",directors:["Дестин Дэниел Креттон "]},{title:"Вічні",description:"Вічні - представники раси генетично покращених суперлюдей, що таємно живуть на Землі. Вони з'явилися на світ 5 мільйонів років тому в результаті експериментів могутніх целестіалов. Наділені неймовірними суперздібностями, протягом тисячоліть вони ховалися від людської цивілізації, потай захищаючи людей від монстрів. Однак останні події і дії Таноса змусили їх вийти на світло..",rating:"9.4",actors:["Анджелина Джоли","Ричард Мэдден","Кумэйл Нанджиани","Сальма Хайек","Джемма Чан","Кит Харингтон","Барри Кеоган","Ма Дон-сок","Лия МакХью","Брайан Тайри Генри"],img:"https://i.ytimg.com/vi/0WVDKZJkGlY/maxresdefault.jpg",video:"https://www.youtube.com/embed/OsXjF63_Etw",directors:["Хлоя Чжа"]},{title:"Чорна вдова",description:"Наташі Романофф доведеться впритул зустрітися зі своїм минулим. Чорній Вдові доведеться згадати про те, що було в її житті задовго до приєднання до команди Месників, і дізнатися про небезпечну змову, в який виявляються втягнуті її старі знайомі - Олена, Олексій, також відомий як Червоний Страж і Меліна.",rating:"9.3",actors:["Скарлетт Йоханссон","Кевин Файги","Луис Д’Эспозито","Виктория Алонсо","Брэд Виндербаум","Найджел Гостелоу"],img:"https://thedirect.s3.amazonaws.com/media/article_full/black-widow-characters.jpg",video:"https://www.youtube.com/embed/W7Pl9s3ybvA",directors:["Кейт Шортланд"]}]),V={data:function(){return{movie:null}},created:function(){var t=this;this.movie=K.find((function(e){return e.title==t.$route.params.movieName}))}},W=V,X=(i("663f"),Object(u["a"])(W,L,J,!1,null,"5cb02700",null)),Y=X.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-movie-page"},[i("div",{staticClass:"container"},[t.showForm?i("form",{staticClass:"add-movie-page__form",attrs:{id:"form"},on:{submit:function(t){t.preventDefault()}}},[i("h2",{staticClass:"add-movie-page__title"},[t._v("Форма для додавання")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"add-movie-page__input",attrs:{type:"text",name:"movie-name",placeholder:"Назва фільму",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.rating,expression:"rating"}],staticClass:"add-movie-page__input",attrs:{type:"text",name:"movie-rating",placeholder:"Рейтинг",required:""},domProps:{value:t.rating},on:{input:function(e){e.target.composing||(t.rating=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.actors,expression:"actors"}],staticClass:"add-movie-page__input",attrs:{type:"text",name:"movie-actors",placeholder:"Актори",required:""},domProps:{value:t.actors},on:{input:function(e){e.target.composing||(t.actors=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.directors,expression:"directors"}],staticClass:"add-movie-page__input",attrs:{type:"text",name:"movie-directors",placeholder:"Режисер",required:""},domProps:{value:t.directors},on:{input:function(e){e.target.composing||(t.directors=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.imgUrl,expression:"imgUrl"}],staticClass:"add-movie-page__input",attrs:{type:"text",name:"movie-img-url",placeholder:"Посилання на картинку",required:""},domProps:{value:t.imgUrl},on:{input:function(e){e.target.composing||(t.imgUrl=e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.videoUrl,expression:"videoUrl"}],staticClass:"add-movie-page__input",attrs:{type:"text",name:"movie-video-url",placeholder:"Посилання на трейлер (YouTube)",required:""},domProps:{value:t.videoUrl},on:{input:function(e){e.target.composing||(t.videoUrl=e.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"add-movie-page__textarea",attrs:{name:"movie-description",placeholder:"Сюжет",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),i("button",{staticClass:"add-movie-page__btn",class:t.isComplete?"":"btn-disable",attrs:{disabled:!t.isComplete,type:"submit"},on:{click:t.addNewMovie}},[t._v(" Додати фільм ")])]):i("div",{staticClass:"add-movie-page__modal"},[i("h2",{staticClass:"add-movie-page__modal-title"},[t._v("Фільм додано")])])])])},G=[],Z=(i("a4d3"),i("e01a"),{data:function(){return{showModalWindow:!0,showForm:!0,title:null,description:null,rating:null,actors:null,img:null,video:null,directors:null}},computed:{getMovieInfo:function(){return{title:this.title,description:this.description,rating:this.rating,actors:[this.actors],img:this.imgUrl,video:this.videoUrl,directors:[this.directors]}},isComplete:function(){return this.title&&this.description&&this.rating&&this.actors&&this.imgUrl&&this.videoUrl}},methods:{addNewMovie:function(){this.$store.commit("addMovie",this.getMovieInfo),this.showForm=!1,this.backToMap()},backToMap:function(){var t=this;setTimeout((function(){return t.$router.push({name:"movies-map"})}),1500)}}}),H=Z,Q=(i("fe21"),Object(u["a"])(H,z,G,!1,null,"46747c04",null)),tt=Q.exports,et=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movies-map"},[o("div",{staticClass:"container"},[o("div",{staticClass:"movies-map__head"},[o("h1",{staticClass:"movies-map__title"},[t._v("Карта фільмів")]),o("div",{staticClass:"movies-map__sort-btn",on:{click:function(e){return t.showSortModal()}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.modalSort,expression:"modalSort"}],staticClass:"movies-map__modal-sort"}),o("div",{staticClass:"movies-map__item"},[o("img",{staticClass:"movies-map__img-add",attrs:{src:i("cf27")}}),o("span",{staticClass:"movies-map__add",on:{click:function(e){t.$router.push({name:"add-movie"})}}},[t._v(" Додати фільм ")])]),t._l(this.movies,(function(e,i){return o("div",{key:i,staticClass:"movies-map__item"},[o("img",{staticClass:"movies-map__img",attrs:{src:e["img"]}}),o("span",{staticClass:"movies-map__delete"},[o("button",{staticClass:"movies-map__delete-btn",on:{click:function(e){return t.showDeleteModal()}}})])])})),o("div",{directives:[{name:"show",rawName:"v-show",value:t.modalDelete,expression:"modalDelete"}],staticClass:"movies-map__modal-del"},[o("h2",{staticClass:"movies-map__modal-title"},[t._v("Видалити фільм?")]),o("div",{staticClass:"movies-map__modal-btns"},[o("button",{staticClass:"movies-map__modal-btn",on:{click:function(e){return t.deleteMovie(t.index)}}},[t._v(" Так ")]),o("button",{staticClass:"movies-map__modal-btn",on:{click:t.noDeleteMovie}},[t._v(" Ні ")])])])],2)])},it=[],ot={name:"MoviesMap",data:function(){return{modalSort:!1,modalDelete:!1}},computed:{movies:function(){return this.$store.getters.getMovies}},methods:{showDeleteModal:function(){this.modalDelete=!0},noDeleteMovie:function(){this.modalDelete=!1},deleteMovie:function(t){this.$store.commit("deleteMovie",t),this.modalDelete=!1},showSortModal:function(){this.modalSort?this.modalSort=!1:this.modalSort=!0}}},at=ot,st=(i("bf5f"),Object(u["a"])(at,et,it,!1,null,"36c541a6",null)),nt=st.exports,rt=new h["a"]({routes:[{path:"/",name:"main",component:M},{path:"/movies",name:"movies",component:F},{path:"/movies/:movieName",name:"about-movie",component:Y},{path:"/movies/:moviesMap",name:"movies-map",component:nt},{path:"/movies/:addMovie",name:"add-movie",component:tt}]}),ct=(i("a434"),i("d3b7"),i("96cf"),i("1da1")),lt=i("2f62");o["a"].use(lt["a"]);var ut=function(){return new Promise((function(t){setTimeout((function(){t(K)}),0)}))},mt=new lt["a"].Store({state:{movies:[]},getters:{getMovies:function(t){return t.movies}},mutations:{setMoviesArray:function(t,e){t.movies=e},addMovie:function(t,e){t.movies.unshift(e)},deleteMovie:function(t,e){t.movies.splice(e,1)}},actions:{loadMovies:function(t,e){return Object(ct["a"])(regeneratorRuntime.mark((function i(){var o,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return o=t.commit,i.prev=1,i.next=4,ut(e);case 4:a=i.sent,o("setMoviesArray",a),i.next=11;break;case 8:i.prev=8,i.t0=i["catch"](1),console.log(i.t0);case 11:case"end":return i.stop()}}),i,null,[[1,8]])})))()},loadMovie:function(t,e){return Object(ct["a"])(regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:o=t.commit;try{o("addMovie",e),o("deleteMovie",e)}catch(a){console.log(a)}case 2:case"end":return i.stop()}}),i)})))()}}}),dt=i("f6dd");i("2fb4");o["a"].use(dt["a"]),o["a"].use(h["a"]),o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(_)},router:rt,store:mt}).$mount("#app")},"663f":function(t,e,i){"use strict";var o=i("b8eb"),a=i.n(o);a.a},"90be":function(t,e,i){},"9b16":function(t,e,i){"use strict";var o=i("1ac5"),a=i.n(o);a.a},a191:function(t,e,i){},a5aa:function(t,e,i){"use strict";var o=i("a191"),a=i.n(o);a.a},a6fc:function(t,e,i){},b8eb:function(t,e,i){},bcd4:function(t,e,i){},bf5f:function(t,e,i){"use strict";var o=i("f230"),a=i.n(o);a.a},cf27:function(t,e,i){t.exports=i.p+"img/plus.c65d1498.png"},d520:function(t,e,i){"use strict";var o=i("90be"),a=i.n(o);a.a},f230:function(t,e,i){},fe21:function(t,e,i){"use strict";var o=i("3507"),a=i.n(o);a.a}});
//# sourceMappingURL=app.eb9fb6b5.js.map