(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{28:function(e,a,t){e.exports=t(57)},50:function(e,a,t){},51:function(e,a,t){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),m=t.n(l),c=t(27),s=t(6),o=t(7),i=t(24),u=t.n(i),p=function(){return u.a.get("https://randomuser.me/api/?results=200&nat=us")};t(50);var f=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"employeeCard row"},r.a.createElement("span",{className:"col-lg-3 col-md-6"},r.a.createElement("img",{src:e.src,alt:e.firstName})),r.a.createElement("p",{className:"col-lg-3 col-md-6"},r.a.createElement("span",{className:"employeeInfo"},e.firstName," ",e.lastName)),r.a.createElement("p",{className:"col-lg-3 col-md-6"},r.a.createElement("span",{className:"employeeInfo"},e.email)),r.a.createElement("p",{className:"col-lg-3 col-md-6"},r.a.createElement("span",{className:"employeeInfo"},e.phone))),r.a.createElement("hr",null))};var E=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid bg-success"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 text-white text-center"},"Employee Directory")))};t(51);var d,h=function(){var e=Object(o.e)();return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container d-flex justify-content-around flex-wrap"},r.a.createElement(s.a,null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"/"===e.pathname?"btn btn-warning":"btn btn-success"},"Default")),r.a.createElement(s.b,{to:"/male"},r.a.createElement("button",{className:"/male"===e.pathname?"btn btn-warning":"btn btn-success"},"Filter for Men")),r.a.createElement(s.b,{to:"/female"},r.a.createElement("button",{className:"/female"===e.pathname?"btn btn-warning":"btn btn-success"},"Filter for Women")),r.a.createElement(s.b,{to:"/sort"},r.a.createElement("button",{className:"/sort"===e.pathname?"btn btn-warning":"btn btn-success"},"Sort Alphabetically")))))};var b=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){p().then((function(e){return d=e.data.results})).then((function(){return l(d)})).catch((function(e){return console.log(e)}))}),[]);var m,i=function(e){return t.filter((function(a){return a.gender===e}))};return r.a.createElement(s.a,null,r.a.createElement("div",{className:"bg-dark"},r.a.createElement(E,null),r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(o.a,{path:"/"},r.a.createElement("div",null,t.map((function(e){return r.a.createElement(f,{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})})))),r.a.createElement(o.a,{path:"/employee-directory"},r.a.createElement("div",null,t.map((function(e){return r.a.createElement(f,{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})})))),r.a.createElement(o.a,{path:"/male"},r.a.createElement("div",null,i("male").map((function(e){return r.a.createElement(f,{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})})))),r.a.createElement(o.a,{path:"/female"},r.a.createElement("div",null,i("female").map((function(e){return r.a.createElement(f,{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})})))),r.a.createElement(o.a,{path:"/sort"},r.a.createElement("div",null,(m=t,m.sort((function(e,a){return e.name.last.localeCompare(a.name.last)}))).map((function(e){return r.a.createElement(f,{firstName:e.name.first,lastName:e.name.last,email:e.email,phone:e.phone,src:e.picture.medium})})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.41de78ad.chunk.js.map