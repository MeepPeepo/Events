(this["webpackJsonpevents.toughlovearena.com"]=this["webpackJsonpevents.toughlovearena.com"]||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var r,c,a=n(2),i=n.n(a),o=n(19),s=n.n(o),l=n(7),u=n.n(l),d=n(9),h=n(8),j=n(5),b=n(6),m=n(11),f=n(20),p=n.n(f);!function(e){e.Stream="stream",e.Tournament="tournament",e.Meetup="meetup"}(c||(c={}));var g=(r={},Object(m.a)(r,c.Stream,"#6441a5"),Object(m.a)(r,c.Tournament,"#aa6c39"),Object(m.a)(r,c.Meetup,"#ed1c40"),r);function v(e){return t=e.concat(),n=function(e){return e.start.getTime()},t.sort((function(e,t){return function(e,t){return e<t?-1:e>t?1:0}(n(e),n(t))})),t;var t,n}function x(e){return e.when.map((function(t){var n=t.date.split("/").map((function(e){return parseFloat(e)})),r=Object(h.a)(n,3),c=r[0],a=r[1],i=r[2],o=t.time.split(":").map((function(e){return parseFloat(e)})),s=Object(h.a)(o,2),l=function(e,t,n,r,c,a,i){var o=new Date(Date.UTC(t,n-1,r,c,a,i)),s=new Date(o.toLocaleString("en-US",{timeZone:"UTC"})),l=new Date(o.toLocaleString("en-US",{timeZone:e})),u=s.getTime()-l.getTime();return o.setTime(o.getTime()+u),o}("America/New_York",c,a,i,s[0],s[1],0),u=new Date(l.getTime()+60*t.hours*60*1e3);return{title:e.title,type:e.type,description:e.description,twitch:e.twitch,challonge:e.challonge,start:l,end:u}}))}function O(){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(u.a.mark((function e(){var t,n,r,c,a,i,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("events.yaml");case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.next=8,p.a.parse(n);case 8:return r=e.sent,c=r.events,a=v(c.map(x).flat()),i=new Date,o=a.filter((function(e){return e.end>i})),s={upcoming:o,all:a},console.log(s),e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k,y,T,S,C,D,F,L,z,U=n(12),E=n(3),_=b.a.div(k||(k=Object(j.a)(["\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border-radius: 1rem;\n  ","\n\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n\n  & > * {\n    margin: 0.5rem 0;\n  }\n"])),(function(e){return"\n    border: 0.5em solid ".concat(function(e){var t;return null!==(t=g[e])&&void 0!==t?t:"black"}(e.type),";\n  ")})),M=b.a.div(y||(y=Object(j.a)(["\n  font-size: 1.5em;\n  text-decoration: underline;\n"]))),A=b.a.div(T||(T=Object(j.a)(["\n"]))),B=b.a.div(S||(S=Object(j.a)(["\n  font-size: 1.3em;\n"])));function I(e){var t=e.event,n=[],r=t.description?t.description+"\n\n":"";if(t.challonge){var c="https://challonge.com/"+t.challonge;n.push({name:"challonge",url:c}),r+="challonge: ".concat(c," \n")}if(t.twitch){var a="https://twitch.tv/"+t.twitch;n.push({name:"twitch",url:a}),r+="twitch: ".concat(a," \n")}var i={title:t.title,description:r,start:t.start,end:t.end};return Object(E.jsxs)(_,{type:t.type,children:[Object(E.jsx)(M,{children:t.title}),t.description&&Object(E.jsx)("div",{children:t.description}),n.length&&Object(E.jsxs)(A,{children:["links:\xa0",n.map((function(e,t){return Object(E.jsxs)("span",{children:[t>0&&" / ",Object(E.jsx)("a",{href:e.url,children:e.name})]},t)}))]}),Object(E.jsxs)("div",{children:[Object(E.jsx)(B,{children:t.start.toLocaleString()}),Object(E.jsxs)("div",{children:["add to:\xa0",Object(E.jsx)("a",{rel:"noreferrer",target:"_blank",href:U.google(i),children:"gcal"}),"\xa0/\xa0",Object(E.jsx)("a",{rel:"noreferrer",target:"_blank",href:U.ics(i),children:"ics"}),"\xa0/\xa0",Object(E.jsx)("a",{rel:"noreferrer",target:"_blank",href:U.outlook(i),children:"outlook"})]})]})]})}var J=b.a.div(C||(C=Object(j.a)(["\n  max-width: 600px;\n  min-height: 100vh;\n  margin: 0 auto;\n  padding: 1em;\n  border: 1px solid black;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  box-sizing: border-box;\n  background-color: white;\n\n\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n"]))),P=b.a.div(D||(D=Object(j.a)(["\n  margin: 1em;\n"]))),Z=b.a.div(F||(F=Object(j.a)(["\n  font-size: 3em;\n  margin-bottom: 0.2em;\n"]))),G=b.a.div(L||(L=Object(j.a)(["\n"]))),H=b.a.div(z||(z=Object(j.a)(["\n  font-size: 2em;\n  margin-bottom: 0.2em;\n"])));function N(){var e=Object(a.useState)(void 0),t=Object(h.a)(e,2),n=t[0],r=t[1],c=Object(a.useCallback)(Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,n=t.upcoming,r(n);case 5:case"end":return e.stop()}}),e)}))),[]);return Object(a.useEffect)((function(){c()}),[c]),Object(E.jsxs)(J,{children:[Object(E.jsxs)(P,{children:[Object(E.jsx)(Z,{children:"Tough Love Arena Events"}),Object(E.jsxs)("div",{children:["Want to submit your own event? Check the ",Object(E.jsx)("a",{href:"https://github.com/toughlovearena/events",children:"GitHub"})," for instructions"]})]}),Object(E.jsxs)(G,{children:[Object(E.jsx)(H,{children:"Upcoming Events"}),n?Object(E.jsx)("div",{children:n.map((function(e,t){return Object(E.jsx)(I,{event:e},t)}))}):Object(E.jsx)("div",{children:"loading..."})]})]})}var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};s.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(N,{})}),document.getElementById("root")),W()}},[[57,1,2]]]);
//# sourceMappingURL=main.830c4e3e.chunk.js.map