(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c(5),o=c.n(r),s=c(2),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(a.useState)(e),c=Object(s.a)(t,2),n=c[0],r=c[1],o=function(){r(n+1)},i=function(){r(n-1)},l=function(){r(e)};return{counter:n,increment:o,decrement:i,reset:l}},l=function(e){var t=Object(a.useState)({data:null,loading:!0,error:null}),c=Object(s.a)(t,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){r({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){r({loading:!1,error:null,data:e})}))}),[e]),n},d=(c(4),function(){var e=i(1),t=e.counter,c=e.increment,a=e.decrement,r=l("https://www.breakingbadapi.com/api/quotes/".concat(t)),o=r.loading,s=r.data,d=!!s&&s[0],b=d.author,j=d.quote,u=d.series;return Object(n.jsxs)("div",{className:"content-card-info",children:[Object(n.jsx)("h1",{children:"Quotes of Breaking Bad"}),Object(n.jsx)("hr",{}),o?Object(n.jsx)("div",{className:"alert alert-info text-center ",children:"loading..."}):Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"card card-quote",children:Object(n.jsxs)("div",{className:"card-body quote-flex",children:[Object(n.jsx)("h5",{className:"card-title",children:u}),Object(n.jsx)("hr",{}),Object(n.jsxs)("p",{className:"card-text",children:[" ",j," "]}),Object(n.jsxs)("footer",{className:"blockquote-footer text-right-quote",children:["From : ",b]})]})}),t>1?Object(n.jsx)("button",{onClick:a,className:"btn btn-light btn-quote",children:"Last quote"}):"",Object(n.jsx)("button",{onClick:c,className:"btn btn-info btn-quote",children:"Next quote"})]})]})}),b=function(){var e=i(1),t=e.counter,c=e.increment,a=e.decrement,r=l("https://www.breakingbadapi.com/api/characters/".concat(t)),o=r.loading,s=r.data,d=!!s&&s[0],b=d.name,j=d.nickname,u=d.occupation,h=d.status,x=d.img,m=d.appearance,O=d.category,f=d.portrayed,p=!!u&&(u.length>0?u.map((function(e,t){return t>0?", "+e:" "+e})):"No hay ocupaciones"),g=!!m&&(m.length>0?m.map((function(e,t){return t>0?", "+e:" "+e})):"No hay ocupaciones");return Object(n.jsxs)("div",{className:"content-card-info",children:[Object(n.jsx)("h1",{children:"Character information."}),Object(n.jsx)("hr",{}),o?Object(n.jsx)("div",{className:"alert alert-info text-center ",children:"loading..."}):Object(n.jsxs)("div",{className:"content-box",children:[Object(n.jsxs)("div",{className:"card card-quote",children:[Object(n.jsx)("div",{style:{width:"100%",height:"20rem",backgroundImage:"url(".concat(x,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",objectFit:"cover",backgroundColor:"black"},className:"img-quote",alt:b}),Object(n.jsxs)("div",{className:"card-body quote-flex",children:[Object(n.jsx)("h5",{className:"card-title",children:b}),Object(n.jsxs)("div",{className:"card-text",children:["Alias : ",j,Object(n.jsx)("br",{}),"Interpreter : ",f,Object(n.jsx)("br",{}),"Status : ",h,Object(n.jsx)("br",{}),"Appearances : ",g,Object(n.jsx)("br",{}),"Activities :",p,Object(n.jsx)("br",{})]}),Object(n.jsxs)("footer",{className:"blockquote-footer text-right-quote",children:["From : ",O]})]})]}),t>1?Object(n.jsx)("button",{onClick:a,className:"btn btn-light btn-quote",children:"Last"}):"",Object(n.jsx)("button",{onClick:c,className:"btn btn-info btn-quote",children:"Next"})]})]})};o.a.render(Object(n.jsxs)("div",{className:"app-content",children:[Object(n.jsx)(b,{}),Object(n.jsx)(d,{})]}),document.getElementById("root"))},4:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.e3cf1e97.chunk.js.map