(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{61:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=function(e){var t=e.title,n=e.label;return c.a.createElement("div",{className:"Item"},c.a.createElement("div",null,c.a.createElement("i",{className:"fas fa-film"})," ",t),c.a.createElement("div",null,n))},l=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Listing"),e.list.map((function(e){return c.a.createElement(r,{key:e.id,title:e.title,label:e.label})})))},i=n(33),s=n.n(i),u=n(35),o=n.n(u),f=n(36),m=n.n(f),d=n(40),p=n.n(d),v="".concat("http://localhost:3000/api/v1","/movies"),E=function(e){return p.a.get("".concat(v,"?section=").concat(e))},b=function(){var e=Object(a.useState)([]),t=m()(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){o()(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("estrenos-imprescindibles-en-taquilla");case 2:t=e.sent,c(t.data.data.contents.data);case 4:case"end":return e.stop()}}),e)})))()}),[]),n};t.default=function(){var e=b();return c.a.createElement(l,{list:e})}}}]);