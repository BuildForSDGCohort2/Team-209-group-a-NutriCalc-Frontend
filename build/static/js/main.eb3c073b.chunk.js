(this.webpackJsonpnutricalc=this.webpackJsonpnutricalc||[]).push([[0],{44:function(e,t,a){e.exports=a(72)},50:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(37),r=a.n(c),o=a(8),u=a(11),i=a(4),s=Object(n.createContext)(),m=function(e){var t=e.reducer,a=e.initialState,c=e.children;return l.a.createElement(s.Provider,{value:Object(n.useReducer)(t,a)},c)},d=function(){return Object(n.useContext)(s)},p=a(29),E=a.n(p),b=a(38),f=function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n,l,c,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.lat,n=t.lng,l="https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=9281dccaff366986bb8ab36a4dcaba3f"),e.prev=2,e.next=5,fetch(l).then((function(e){console.log(e.json())}));case 5:return c=e.sent,e.next=8,c();case 8:return r=e.sent,e.abrupt("return",r);case 12:e.prev=12,e.t0=e.catch(2);case 14:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),v=(a(50),a(85)),h=function(){return l.a.createElement("div",null,l.a.createElement(v.a,{elevation:3}))},g=function(){var e=d(),t=Object(o.a)(e,1)[0].cood;return Object(n.useEffect)((function(){t?f(t.lat,t.long):console.log("no coods")}),[t,t.lat,t.long]),l.a.createElement("div",null,l.a.createElement("div",null),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"home-container"},l.a.createElement("h6",null,"Its easy! Click on new farm input, choose the type of crop, the type of fertilizer input, the land acreage"," "),l.a.createElement("h6",null,"weather"),l.a.createElement("div",{className:"weather"},l.a.createElement("h5",null,"City: Kitale"),l.a.createElement("h6",null,"Weather description"),l.a.createElement("p",null,"qrggugbbbbxgbkXBKGXSgtqpgkxgahghxaxxgyqtxoJHsLBXBZJKjkJZ zgbKHGZBZHBGDXHHKzhgzhhv")),l.a.createElement(h,null))),l.a.createElement("div",null,l.a.createElement("h5",null,"Footer area")))},y=(a(54),function(){return l.a.createElement("div",{className:"about"},l.a.createElement("div",{className:"about-page"},l.a.createElement("h1",null,"About US"),l.a.createElement("p",null,"About US page body content")))}),N=(a(55),function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"contact-page"},l.a.createElement("h1",null,"Contact US"),l.a.createElement("p",null,"Contact US page body content")))}),w=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Error: Page does not exist!"))},j=(a(56),function(){return l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("h1",null,"NutriCalc"),l.a.createElement("h5",null,"Your farm inputs calculator")),l.a.createElement(u.c,{classname:"nav-link",to:"/"},"Home"),l.a.createElement(u.c,{classname:"nav-link",to:"/about"},"About"),l.a.createElement(u.c,{classname:"nav-link",to:"/contact"},"Contact"))}),O=(a(58),a(42)),S=a.n(O),C=a(28),k=a.n(C);k.a.initializeApp({apiKey:"AIzaSyAPlp8cdax4s5bm8NifmmcVW8AoJVGQby8",authDomain:"nutricalc-dca46.firebaseapp.com",databaseURL:"https://nutricalc-dca46.firebaseio.com",projectId:"nutricalc-dca46",storageBucket:"nutricalc-dca46.appspot.com",messagingSenderId:"375679745437",appId:"1:375679745437:web:08ef675f8ed19509768374",measurementId:"G-KZZLP7LBBZ"});var x=k.a.auth(),I=new k.a.auth.FacebookAuthProvider,B=a(21),P="SET_USER",A="SET_COOD",F=function(e,t){switch(console.log(t),t.type){case P:return Object(B.a)(Object(B.a)({},e),{},{user:t.user});case A:return Object(B.a)(Object(B.a)({},e),{},{cood:t.cood});default:return e}},U=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),m=s[0],p=s[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),f=b[0],v=b[1],h=d(),g=Object(o.a)(h,2),y=g[0].user,N=g[1],w=function(e){console.log(f,m),N({type:P,user:{email:f,password:m}}),c(!0)};return a?l.a.createElement(i.a,{to:"/"}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",null,"Sign In")),l.a.createElement("div",{className:"form-body"},l.a.createElement("form",{onSubmit:w},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",name:"emailField",className:"form-control",id:"emailInput",placeholder:"your@example.com",value:f,onChange:function(e){v(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"passwordField",className:"form-control",id:"passwordInput",placeholder:"enter your password",value:m,onChange:function(e){p(e.target.value)}})),l.a.createElement("button",{type:"submit",onClick:w,className:"btn btn-primary btn-sm btn-block"},"Login"),l.a.createElement(u.b,{to:"/register",onClick:function(e){N({type:P,user:{name:"guest"}})}},"dont have an account? Register here")),l.a.createElement("hr",null),l.a.createElement("div",{class:"or-text d-flex align-items-center justify-content-center"},l.a.createElement("span",null,"or")),l.a.createElement("hr",null),l.a.createElement("button",{type:"button",onClick:function(e){e.preventDefault(),console.log(y),x.signInWithPopup(I).then((function(e){console.log(e);var t=e.user;N({type:P,user:t}),null===t||void 0===t||t.isNewUser})).catch((function(e){alert(e.message)})),c(!0)},className:"btn btn-primary btn-sm btn-block",id:"facebookBtn"},l.a.createElement("span",null,l.a.createElement(S.a,null)," ")," SIGN IN WITH FACEBOOK")))},H=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(o.a)(r,2),m=s[0],p=s[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),f=b[0],v=b[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),y=g[0],N=g[1],w=Object(n.useState)(null),j=Object(o.a)(w,2),O=j[0],S=j[1],C=d(),k=Object(o.a)(C,2),x=k[0].user,I=k[1];return O?l.a.createElement(i.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"page-header"},l.a.createElement("h2",null,"Sign Up ")),l.a.createElement("div",{className:"form-body"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),S(!0)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"email address"},"Username"),l.a.createElement("input",{type:"email",class:"form-control",id:"usernameField",placeholder:"your username",value:y,onChange:function(e){N(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",name:"emailField",className:"form-control",id:"emailInput",placeholder:"your@example.com",value:a,onChange:function(e){c(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"passwordField",className:"form-control",id:"passwordInput",placeholder:"enter your password",value:m,onChange:function(e){p(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"passwordConfirmField",className:"form-control",id:"passwordConfirmInput",placeholder:"enter your password",value:f,onChange:function(e){v(e.target.value)}})),l.a.createElement("button",{type:"submit",class:"btn btn-primary btn-sm btn-block"},"Register"),l.a.createElement(u.b,{to:"/login",onClick:function(e){"guest"===(null===x||void 0===x?void 0:x.name)&&I({type:P,user:{}})}},"already have an account? Login here")))))},K=function(){return l.a.createElement("div",{className:"side-bar"},l.a.createElement("div",{className:"side-bar-content"},l.a.createElement("h6",null,"sidebar"),l.a.createElement("ul",null,l.a.createElement("li",null,"Home"),l.a.createElement("li",null,"New farm input"),l.a.createElement("li",null,"My schedule"))))},Z=function(){return l.a.createElement("div",{className:"right-bar"},l.a.createElement("h6",null,"rightbar"))};a(71);var z=function(){var e=d(),t=Object(o.a)(e,2),a=t[0].user,c=t[1];return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.longitude,a=e.coords.latitude;console.log("longitude: ".concat(a," | latitude: ").concat(t)),c({type:A,cood:{lat:t,long:a}})}))}),[c]),"guest"===(null===a||void 0===a?void 0:a.name)?l.a.createElement(H,null):a?l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("div",{className:"side"},l.a.createElement(K,null),l.a.createElement(Z,null)),l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/",component:g,exact:!0}),l.a.createElement(i.b,{path:"/about",component:y}),l.a.createElement(i.b,{path:"/contact",component:N}),l.a.createElement(i.b,{path:"/login",component:U}),l.a.createElement(i.b,{path:"/register",component:H}),l.a.createElement(i.b,{component:w})))):l.a.createElement(U,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,{initialState:{user:null},reducer:F},l.a.createElement(u.a,null,l.a.createElement(z,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.eb3c073b.chunk.js.map