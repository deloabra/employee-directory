(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),m=a.n(c),l=a(27),o=a(8),s=a(6),i=a(24),u=a.n(i),p=function(){return u.a.get("https://randomuser.me/api/?results=200&nat=us")};a(50);var f=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"employeeCard row"},r.a.createElement("span",{className:"col-lg-3 col-md-6"},r.a.createElement("img",{src:e.src,alt:e.firstName})),r.a.createElement("p",{className:"col-lg-3 col-md-6"},r.a.createElement("span",{className:"employeeInfo"},e.firstName," ",e.lastName)),r.a.createElement("p",{className:"col-lg-3 col-md-6"},r.a.createElement("span",{className:"employeeInfo"},e.email)),r.a.createElement("p",{className:"col-lg-3 col-md-6"},r.a.createElement("span",{className:"employeeInfo"},e.phone))),r.a.createElement("hr",null))};var d=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-success"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 text-white text-center"},"Employee Directory")))};a(51);var y,E=function(){var e=Object(s.e)();return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container d-flex justify-content-around flex-wrap"},r.a.createElement(o.b,{to:"/employee-directory"},r.a.createElement("button",{className:"/employee-directory"===e.pathname?"btn btn-warning":"btn btn-success"},"Default")),r.a.createElement(o.b,{to:"/employee-directory/male"},r.a.createElement("button",{className:"/employee-directory/male"===e.pathname?"btn btn-warning":"btn btn-success"},"Filter for Men")),r.a.createElement(o.b,{to:"/employee-directory/female"},r.a.createElement("button",{className:"/employee-directory/female"===e.pathname?"btn btn-warning":"btn btn-success"},"Filter for Women")),r.a.createElement(o.b,{to:"/employee-directory/sort"},r.a.createElement("button",{className:"/employee-directory/sort"===e.pathname?"btn btn-warning":"btn btn-success"},"Sort Alphabetically"))))};var b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){p().then((function(e){return y=e.data.results})).then((function(){return c(y)})).catch((function(e){return console.log(e)}))}),[]);var m=function(e){return a.filter((function(t){return t.gender===e}))};return r.a.createElement(o.a,null,r.a.createElement("div",{className:"bg-dark"},r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement(E,null),r.a.createElement(s.a,{exact:!0,path:"/employee-directory",component:function(){return a.map((function(e){return r.a.createElement(f,{key:e.name.first+e.name.last,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})}))}}),r.a.createElement(s.a,{exact:!0,path:"/employee-directory/male",component:function(){return m("male").map((function(e){return r.a.createElement(f,{key:e.name.first+e.name.last,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})}))}}),r.a.createElement(s.a,{exact:!0,path:"/employee-directory/female",component:function(){return m("female").map((function(e){return r.a.createElement(f,{key:e.name.first+e.name.last,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})}))}}),r.a.createElement(s.a,{exact:!0,path:"/employee-directory/sort",component:function(){return(e=a,e.slice().sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))).map((function(e){return r.a.createElement(f,{key:e.name.first+e.name.last,firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})}));var e}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.5dea0e31.chunk.js.map