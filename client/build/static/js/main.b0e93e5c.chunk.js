(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(8),l=a.n(r),c=(a(86),a(88),a(11)),i=a(12),s=a(15),m=a(13),u=a(14),h=a(33),d=a(158),b=a(157),g=a(160),p=a(3),E=a(34),f=a.n(E),O=a(75),w=a.n(O),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={room:"",owner:"",date:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({room:this.props.book.room,owner:this.props.book.owner,date:this.props.book.date})}},{key:"render",value:function(){return o.a.createElement("tr",null,o.a.createElement("td",null,this.state.owner),o.a.createElement("td",null,this.state.room),o.a.createElement("td",null,o.a.createElement(w.a,{format:"dddd, MMMM Do YYYY, h:mm a"},this.state.date)))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={bookings:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://localhost:8080/calendar").then(function(t){var a=t.data;e.setState({bookings:a})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return o.a.createElement(p.c,null,o.a.createElement(p.n,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Owner"),o.a.createElement("th",null,"Room #"),o.a.createElement("th",null,"Date"))),o.a.createElement("tbody",null,this.state.bookings.map(function(e){return o.a.createElement(v,{book:e})}))))}}]),t}(n.Component),j=a(79),C=a(5),D=a.n(C),y=a(159),S=(a(153),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleChangeDate=function(e){a.setState({startDate:e},function(){return console.log(a.state.startDate)})},a.handleChangeOwner=function(e){a.setState({owner:e.target.value})},a.handleChangeRoom=function(e){a.setState({room:e.target.value})},a.handleSubmit=function(){f.a.default.baseURL="https://calendar-lean.herokuapp.com/",f.a.post("/calendar",{date:a.state.startDate,owner:a.state.owner,room:a.state.room}).then(function(e){console.log("Success: ".concat(e)),a.setState({redirectToHome:!0})}).catch(function(e){console.log("An error occured while attempting to send data to db: ".concat(e))})},a.state={startDate:D()(),owner:"",room:"",redirectToHome:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.state.redirectToHome?o.a.createElement(y.a,{push:!0,to:"/"}):o.a.createElement(p.c,null,o.a.createElement(p.d,null,o.a.createElement(p.e,null,o.a.createElement(p.g,{for:"Owner"},"Owner"),o.a.createElement(p.f,{value:this.state.owner,onChange:this.handleChangeOwner,type:"text",name:"owner",id:"idOwner",placeholder:"John Doe"})),o.a.createElement(p.e,null,o.a.createElement(p.g,{for:"Date"},"Date - Time"),o.a.createElement(j.a,{placeholderText:"Click to select a date time",selected:this.state.startDate,onChange:this.handleChangeDate,showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:55,dateFormat:"YYYY/MM/DD",locale:"en-ca"})),o.a.createElement(p.e,null,o.a.createElement(p.g,{for:"Room"},"Room"),o.a.createElement(p.f,{value:this.state.room,onChange:this.handleChangeRoom,type:"text",name:"room",id:"idRoom",placeholder:"DB4040"})),o.a.createElement(p.a,{onClick:this.handleSubmit},"Submit")))}}]),t}(n.Component)),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a.state={isOpen:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(p.k,{color:"light",light:!0,expand:"md"},o.a.createElement(p.l,{tag:b.a,to:"/"},"Calendar"),o.a.createElement(p.m,{onClick:this.toggle}),o.a.createElement(p.b,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(p.h,{className:"ml-auto",navbar:!0},o.a.createElement(p.i,null,o.a.createElement(p.j,{tag:b.a,to:"/bookings/add"},"Add Booking"))))),o.a.createElement(g.a,{exact:!0,path:"/",component:k}),o.a.createElement(g.a,{path:"/bookings/add",component:S})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(156)},86:function(e,t,a){}},[[81,2,1]]]);
//# sourceMappingURL=main.b0e93e5c.chunk.js.map