(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(38)},24:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(10),c=a.n(s);a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(26);var i=a(3),l=a(11),r=a(4),d=a(12),h=a(13),u=a(17),g=a(14),m=a(18),b=(a(28),a(30),function(e){var t=e.addChange,a=e.textChange,n=e.keyPressed;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{type:"text",onChange:a,onKeyPress:n,name:"searchField",className:"pa1 b--none bg-light-gray",placeholder:"Add.."}),o.a.createElement("button",{onClick:t,className:"btn pa1 bw1 b--none bg-light-red"},"Add To List"))}),f=(a(32),function(e){var t=e.title,a=e.chChange,n=e.done,s=e.user,c=e.delTodo,i=s.completed,l=s.id;return n=function(){return{textDecoration:i?"line-through":"none",backgroundColor:i?"#785F69":"#fff"}},o.a.createElement("div",{className:"tl"},o.a.createElement("p",{className:"bg-light-gray bl bw2 mw8 center b--gray pa2 ma1",style:n()},o.a.createElement("input",{onChange:a.bind(void 0,l),type:"checkbox",className:"mr2"}),t,o.a.createElement("button",{className:"delete b--none",onClick:c.bind(void 0,l)},"Delete")))}),p=function(e){var t=e.done,a=e.todoslist,n=e.chChange,s=e.delTodo;return o.a.createElement("div",null,a.map(function(e,a){return o.a.createElement(f,{key:a,title:e.title,id:e.val,chChange:n,delTodo:s,user:e,done:t})}))},v=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(u.a)(this,Object(g.a)(t).call(this))).ontextChange=function(t){e.setState({searchField:t.target.value})},e.keyPressed=function(t){if("Enter"===t.key){var a={id:e.state.todoslist.length,title:e.state.searchField,completed:!1};e.state.searchField.length>0&&(e.setState({todoslist:[].concat(Object(r.a)(e.state.todoslist),[a])}),e.setState({searchField:""}),t.target.value="")}},e.addChange=function(){var t={id:e.state.todoslist.length,title:e.state.searchField,completed:!1};e.state.searchField.length>0&&(e.setState({todoslist:[].concat(Object(r.a)(e.state.todoslist),[t])}),e.setState({searchField:""}))},e.checkChange=function(t){e.setState({todoslist:e.state.todoslist.map(function(e,a){return e.id===t&&(e.completed=!e.completed),e})})},e.delTodo=function(t){e.setState({todoslist:Object(r.a)(e.state.todoslist.filter(function(e){return e.id!==t}))})},e.state={todoslist:[],searchField:""},e}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"bg-light-red f1 pa2 lh-copy"},"To-do List"),o.a.createElement(b,{textChange:this.ontextChange,addChange:this.addChange,keyPressed:this.keyPressed}),o.a.createElement(p,{delTodo:this.delTodo,done:this.done,todoslist:this.state.todoslist,chChange:this.checkChange}))}}]),t}(n.Component),C=a(16),E={searchField:""},y=Object(l.createLogger)(),k=Object(i.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},Object(i.a)(y));c.a.render(o.a.createElement(C.a,{store:k},o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.76b2deae.chunk.js.map