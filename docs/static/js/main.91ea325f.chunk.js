(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/logo.281afe7b.svg"},27:function(e,a,t){e.exports=t(47)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),d=t(17),r=t.n(d),i=(t(32),t(10)),o=t(18),c=t(19),s=t(20),m=t(25),u=t(21),g=t(9),h=t(26),_=(t(33),function(){return fetch("https://dogtest-c855.restdb.io/rest/dogs",{method:"GET",headers:{"x-apikey":"5d0e613652556062830a46a9",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()})}),p=(t(34),t(4)),E=t(22),f=t.n(E),b=function(e){return l.a.createElement("div",{className:"header__container"},l.a.createElement("div",{className:"header__wrapper"},l.a.createElement("div",{className:"header__title"},l.a.createElement(p.b,{className:"link__header",to:"/"},l.a.createElement("img",{className:"image__logo",src:f.a,alt:"logo"}))),l.a.createElement("div",{className:"header__menu"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"menu__list"},l.a.createElement("li",{className:"menu__link"},l.a.createElement(p.b,{className:"link__header",to:"/"},"Search")),l.a.createElement("li",{className:"menu__link"},l.a.createElement(p.b,{className:"link__header",to:"/adddog"},"Add")))))))},D=(t(39),t(6)),N=(t(40),function(e){var a=e.handleInputChange,t=e.newDog,n=e.handleAdd,d=e.isDisabled;return l.a.createElement("div",{className:"add-dog__container"},l.a.createElement("form",{className:"form__add"},l.a.createElement("label",{className:"label__add",htmlFor:"name"}," ","name:"),l.a.createElement("input",{value:t.name,onChange:a,className:"input__add",id:"name",name:"name",type:"text",required:!0}),l.a.createElement("label",{className:"label__add",htmlFor:"age"}," ","age:"," "),l.a.createElement("input",{value:t.age,onChange:a,className:"input__add",id:"age",name:"age",type:"number",required:!0}),l.a.createElement("label",{className:"label__add",htmlFor:"gender"}," ","gender:"," "),l.a.createElement("select",{value:t.gender,onChange:a,className:"input__add select__add",id:"gender",name:"gender",required:!0},l.a.createElement("option",{value:"female"},"female"),l.a.createElement("option",{value:"male"},"male")),l.a.createElement("label",{className:"label__add",htmlFor:"breed"}," ","breed:"," "),l.a.createElement("input",{value:t.breed,onChange:a,className:"input__add",id:"breed",name:"breed",type:"text",required:!0}),l.a.createElement("label",{className:"label__add",htmlFor:"location"}," ","location:"),l.a.createElement("input",{value:t.location,onChange:a,className:"input__add",id:"location",name:"location",type:"text",required:!0}),l.a.createElement(p.b,{className:"link__header",to:"/"},l.a.createElement("button",{disabled:d,type:"button",className:"btn__add",onClick:n},"Add Doggo"))))}),v=(t(41),t(42),function(e){var a=e.filter,t=e.handleFilter;return l.a.createElement("div",{className:"filter__container"},l.a.createElement("form",{className:"filter__form"},l.a.createElement("input",{type:"text",className:"filter__input",placeholder:"search breed",value:a,onChange:t,id:"breed_searcher"}),l.a.createElement("label",{className:"filter__label",htmlFor:"breed_searcher"})))}),y=(t(43),t(44),function(e){var a=e.dog,t=e.handleDelete;return l.a.createElement("div",{className:"dog__card"},l.a.createElement("h2",{className:"dog__name"},a.name),l.a.createElement("div",{className:"dog__info"},l.a.createElement("p",null,a.breed),l.a.createElement("p",null,a.age," years"),l.a.createElement("p",null,a.gender),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-map-marker-alt location"})," ",a.location)),l.a.createElement("button",{className:"btn__card delete",value:a._id,onClick:t},"X"),l.a.createElement(p.b,{to:"/editdog/".concat(a._id),className:"btn__card edit"},"edit"))}),C=function(e){var a=e.dataDogs,t=e.handleDelete;return e.isLoading?l.a.createElement("p",{className:"doglist__loader"}," loading... "):0===a.length?l.a.createElement("p",{className:"doglist__loader"}," ","No results found, try a different breed"," "):l.a.createElement("div",{className:"doglist__container"},l.a.createElement("p",{className:"doglist__results"},a.length," results found"),l.a.createElement("ul",{className:"doglist"},a.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(y,{dog:e,handleDelete:t}))})))},w=function(e){var a=e.dataDogs,t=e.filter,n=e.handleFilter,d=e.handleDelete,r=e.isLoading;return l.a.createElement("div",{className:"doglist__container"},l.a.createElement(v,{filter:t,handleFilter:n}),l.a.createElement(C,{dataDogs:a,handleDelete:d,isLoading:r}))},j=(t(45),function(e){var a=e.handleInputChange,t=e.newDog,n=e.dogToEdit,d=e.handleEditDog;return n?l.a.createElement("div",{className:"add-dog__container"},l.a.createElement("form",{className:"form__add"},l.a.createElement("label",{className:"label__add",htmlFor:"name"}," ","name:"),l.a.createElement("input",{value:t.name,placeholder:n.name,onChange:a,className:"input__add",id:"name",name:"name",type:"text",required:!0}),l.a.createElement("label",{className:"label__add",htmlFor:"age"}," ","age:"," "),l.a.createElement("input",{value:t.age,placeholder:n.age,onChange:a,className:"input__add",id:"age",name:"age",type:"number",required:!0}),l.a.createElement("label",{className:"label__add",htmlFor:"gender"}," ","gender:"," "),l.a.createElement("select",{value:t.gender,onChange:a,className:"input__add select__add",id:"gender",name:"gender"},l.a.createElement("option",{value:"female"},"female"),l.a.createElement("option",{value:"male"},"male")),l.a.createElement("label",{className:"label__add",htmlFor:"breed"}," ","breed:"," "),l.a.createElement("input",{value:t.breed,placeholder:n.breed,onChange:a,className:"input__add",id:"breed",name:"breed",type:"text",required:!0}),l.a.createElement("label",{className:"label__add",htmlFor:"location"}," ","location:"),l.a.createElement("input",{value:t.location,placeholder:n.location,onChange:a,className:"input__add",id:"location",name:"location",type:"text",required:!0}),l.a.createElement("button",{type:"button",className:"btn__add",value:n._id,onClick:d},"Edit Doggo"))):l.a.createElement("p",null,"Loading")}),k=function(e){var a=e.dataDogs,t=e.filter,n=e.handleFilter,d=e.handleDelete,r=e.isLoading,i=e.handleInputChange,o=e.newDog,c=e.handleAdd,s=e.isDisabled,m=e.getDog,u=e.handleEditDog;return l.a.createElement("div",{className:"main__container"},l.a.createElement(D.c,null,l.a.createElement(D.a,{exact:!0,path:"/",render:function(e){return l.a.createElement(w,{dataDogs:a,filter:t,isLoading:r,handleFilter:n,handleDelete:d})}}),l.a.createElement(D.a,{path:"/adddog",render:function(e){return l.a.createElement(N,{handleInputChange:i,newDog:o,handleAdd:c,isDisabled:s})}}),l.a.createElement(D.a,{path:"/editdog/:id",render:function(e){return l.a.createElement(j,{match:e.match,newDog:o,handleInputChange:i,dogToEdit:m(e.match.params.id),handleEditDog:u})}})))},F=(t(46),function(e){return l.a.createElement("div",{className:"footer__container"},l.a.createElement("p",null,"made by @qoqoconqu"))}),L=function(e){var a=e.dataDogs,t=e.filter,n=e.handleFilter,d=e.handleDelete,r=e.isLoading,i=e.handleInputChange,o=e.newDog,c=e.handleAdd,s=e.isDisabled,m=e.getDog,u=e.handleEditDog;return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(k,{dataDogs:a,filter:t,handleFilter:n,handleDelete:d,isLoading:r,handleInputChange:i,newDog:o,handleAdd:c,isDisabled:s,getDog:m,handleEditDog:u}),l.a.createElement(F,null))},A=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target.value,n=e.target.name;t.setState(function(e){return{newDog:Object(o.a)({},e.newDog,Object(i.a)({},n,a))}}),""!==t.state.newDog.name&&""!==t.state.newDog.breed&&t.setState({isDisabled:!1})},t.handleAdd=function(){fetch("https://dogtest-c855.restdb.io/rest/dogs",{method:"POST",body:JSON.stringify(t.state.newDog),headers:{"x-apikey":"5d0e613652556062830a46a9",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json().then(_().then(function(e){t.setState({dataDogs:e,isLoading:!1})}))})},t.handleDelete=function(e){t.setState({isLoading:!0});var a=e.target.value;fetch("https://dogtest-c855.restdb.io/rest/dogs/".concat(a),{method:"DELETE",headers:{"x-apikey":"5d0e613652556062830a46a9",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json().then(_().then(function(e){t.setState({dataDogs:e,isLoading:!1})}))})},t.handleFilter=function(e){var a=e.target.value;t.setState({filter:a})},t.compare=function(e,a){return e.name<a.name?-1:e.name>a.name?1:0},t.state={dataDogs:[],filter:"",isLoading:!0,isDisabled:!0,newDog:{name:"",age:"",gender:"",location:"",breed:""}},t.getDog=t.getDog.bind(Object(g.a)(t)),t.handleEditDog=t.handleEditDog.bind(Object(g.a)(t)),t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"getDog",value:function(e){return this.state.dataDogs.find(function(a){return a._id===e})}},{key:"handleEditDog",value:function(e){var a=this,t=e.target.value;this.setState({isLoading:!0}),fetch("https://dogtest-c855.restdb.io/rest/dogs/".concat(t),{method:"PATCH",body:JSON.stringify(this.state.newDog),headers:{"x-apikey":"5d0e613652556062830a46a9",Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json().then(_().then(function(e){a.setState({dataDogs:e,isLoading:!1})}))})}},{key:"componentDidMount",value:function(){var e=this;_().then(function(a){e.setState({dataDogs:a,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.dataDogs,t=e.filter,n=e.isLoading,d=e.newDog,r=e.isDisabled;return l.a.createElement("div",null,l.a.createElement(L,{dataDogs:a.sort(this.compare).filter(function(e){return""===t||e.breed.includes(t.toLowerCase())}),filter:t,isLoading:n,handleFilter:this.handleFilter,handleDelete:this.handleDelete,handleInputChange:this.handleInputChange,newDog:d,handleAdd:this.handleAdd,isDisabled:r,getDog:this.getDog,handleEditDog:this.handleEditDog}))}}]),a}(l.a.Component);r.a.render(l.a.createElement(p.a,null,l.a.createElement(A,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.91ea325f.chunk.js.map