(this.webpackJsonpretodo=this.webpackJsonpretodo||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),o=n.n(r),i=(n(15),n(9)),s=n(2),l=n(10),d=(n(16),n(6)),j=n.n(d),u=(n(17),n(0)),b=function(e){var t=e.text,n=e.onClick;return Object(u.jsx)("button",{onClick:n,className:"btn",children:t})};b.prototypes={text:j.a.string,onClick:j.a.func.isRequired};var x=b,O=(n(21),function(e){var t=e.title,n=e.onClick,c=e.cardName;return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)(x,{text:c,onClick:n})]})});O.defaultProps={title:"Todoist"};var f=O,h=n(8),g=(n(22),function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(JSON.parse(localStorage.getItem("#"+t.id)).important?"reminder":""),onDoubleClick:function(){return c(t)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:t.text}),Object(u.jsx)("p",{style:{marginTop:"4px",fontSize:"14px"},children:t.day})]}),Object(u.jsx)(h.a,{style:{color:"rgba(0,0,0,0.6)",cursor:"pointer"},onClick:function(){return n(t)}})]})}),m=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(g,{task:e,onDelete:n,onToggle:c},e.id)}))})},p=(n(23),function(e){var t=e.addTask,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),d=l[0],j=l[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r?d?(t({text:r,day:d}),o(""),j("")):alert("No Time"):alert("No Content")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Add Task"},value:r,onChange:function(e){return o(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("label",{children:"Note"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Note",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Add Note"},value:d,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsx)("div",{className:"save",children:Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-save"})})]})}),v=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),o=Object(s.a)(r,2),d=o[0],j=o[1],b=function(){for(var e=[],t=0;t<localStorage.length;t++){var n=localStorage.key(t);if("#"===n.charAt(0)){var c=localStorage.getItem(n);e=[].concat(Object(i.a)(e),[JSON.parse(c)])}}j(e)};return window.onload=function(){b()},Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container innerbox",children:[Object(u.jsx)(f,{title:"Todoist",onClick:function(){a(!n)},cardName:"Arrange"}),n&&Object(u.jsx)(p,{addTask:function(e){var t=Object(l.a)();localStorage.setItem("#"+t,JSON.stringify({id:t,text:e.text,day:e.day,important:!1})),b()}}),d.length>0?Object(u.jsx)(m,{tasks:d,onDelete:function(e){localStorage.removeItem("#"+e.id),b()},onToggle:function(e){localStorage.setItem("#"+e.id,JSON.stringify({id:e.id,text:e.text,day:e.day,important:!e.important})),b()}}):!n&&Object(u.jsx)("div",{style:{display:"flex",height:"80%",fontSize:"28px",justifyContent:"center",alignItems:"center"},children:Object(u.jsx)("div",{children:"No Tasks"})})]})})},k=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"home-page",children:Object(u.jsx)(v,{})})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.963733a6.chunk.js.map