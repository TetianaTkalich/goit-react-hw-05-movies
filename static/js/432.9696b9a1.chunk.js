"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[432],{432:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(687),u=n.n(c),o=n(791),s=n(515),i=n(429),p=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,o.useState)(null),f=(0,a.Z)(l,2),v=f[0],h=f[1],d=(0,o.useState)(!1),g=(0,a.Z)(d,2),m=g[0],x=g[1];(0,o.useEffect)((function(){w()}),[]);var w=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,s.XT)();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h(e.t0);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending Today"}),m&&"Loading ...",n&&(0,p.jsx)(i.Z,{movies:n}),v&&(0,p.jsx)("p",{children:"Something went wrong. Try later"})]})})}},429:function(e,t,n){var r=n(87),a=n(689),c=n(184);t.Z=function(e){var t=e.movies,n=(0,a.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.original_title;return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},children:(0,c.jsx)("p",{children:a})})},t)}))})})}},515:function(e,t,n){n.d(t,{Wf:function(){return i},XT:function(){return s},fU:function(){return l},l2:function(){return p},sv:function(){return f}});var r=n(861),a=n(687),c=n.n(a),u=n(243),o="7090c634f78ae231a1147c5f808c29ff",s=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=432.9696b9a1.chunk.js.map