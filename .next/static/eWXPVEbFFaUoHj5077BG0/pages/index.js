(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RNiq:function(e,t,n){"use strict";n.r(t);var i=n("o0o1"),r=n.n(i);function a(e,t,n,i,r,a,o){try{var s=e[a](o),p=s.value}catch(c){return void n(c)}s.done?t(p):Promise.resolve(p).then(i,r)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function s(e){a(o,i,r,s,p,"next",e)}function p(e){a(o,i,r,s,p,"throw",e)}s(void 0)}))}}var s=n("q1tI"),p=n.n(s),c=(n("vcXL"),n("5Yp1")),u=p.a.createElement,l=function(e){var t=Object(s.useState)("USD"),n=t[0],i=t[1],r="";return"USD"===n?r=u("li",{className:"list-group-item"},"Bitcoin rate for ",e.bpi.bpi.USD.description,": ",u("span",{className:"badge badge-primary"},e.bpi.bpi.USD.code),u("strong",null,e.bpi.bpi.USD.rate)):"GBP"===n?r=u("li",{className:"list-group-item"},"Bitcoin rate for ",e.bpi.bpi.GBP.description,": ",u("span",{className:"badge badge-primary"},e.bpi.bpi.GBP.code),u("strong",null,e.bpi.bpi.GBP.rate)):"EUR"===n&&(r=u("li",{className:"list-group-item"},"Bitcoin rate for ",e.bpi.bpi.EUR.description,": ",u("span",{className:"badge badge-primary"},e.bpi.bpi.EUR.code),u("strong",null,e.bpi.bpi.EUR.rate))),u("div",null,u("ul",{className:"list-group"},r),u("br",null),u("select",{onChange:function(e){return i(n=e.target.value)},className:"form-control"},u("option",{value:"USD"},"USD"),u("option",{value:"GBP"},"GBP"),u("option",{value:"EUR"},"EUR")))},b=p.a.createElement,d=function(e){return b(c.a,null,b("div",null,b("h1",null,"Current Bitcoin rate"),e.bpi.time.updated,b(l,{bpi:e.bpi})))};d.getInitialProps=o(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coindesk.com/v1/bpi/currentprice.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{bpi:n});case 7:case"end":return e.stop()}}),e)})));t.default=d},vcXL:function(e,t,n){"use strict";var i=self.fetch.bind(self);e.exports=i,e.exports.default=e.exports},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);