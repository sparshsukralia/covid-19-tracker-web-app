(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{35:function(e,a,t){e.exports={container:"App_container__GlPSg"}},39:function(e,a,t){e.exports=t(68)},4:function(e,a,t){e.exports={container:"Cards_container__3FsUT",card:"Cards_card__3avzp",numbers1:"Cards_numbers1__3NlIc",numbers2:"Cards_numbers2___IB-R",numbers3:"Cards_numbers3__1YaQf",infected:"Cards_infected__Z6MsW",recovered:"Cards_recovered__FuNah",deaths:"Cards_deaths__3EURI"}},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(28),o=t.n(c),l=t(9),s=t.n(l),m=t(11),d=t(29),u=t(30),i=t(37),v=t(36),E=t(82),h=t(84),p=t(83),f=t(85),_=t(4),b=t.n(_),y=t(15),x=t.n(y),g=t(16),C=t.n(g),S=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return console.log(t),t?r.a.createElement("div",{className:b.a.container},r.a.createElement(E.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:3,className:C()(b.a.card,b.a.infected)},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("h1",null,"Infected")),r.a.createElement(f.a,{variant:"h5"},r.a.createElement("h1",{className:b.a.numbers1},r.a.createElement(x.a,{start:0,end:t.value,duration:2.5,separator:","}))),r.a.createElement(f.a,{color:"textSecondary"},r.a.createElement("h3",null,new Date(o).toDateString())),r.a.createElement(f.a,{variant:"body2"},r.a.createElement("h2",null,"Active Cases of Covid-19")))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:3,className:C()(b.a.card,b.a.recovered)},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("h1",null,"Recovered")),r.a.createElement(f.a,{variant:"h5"},r.a.createElement("h1",{className:b.a.numbers2},r.a.createElement(x.a,{start:0,end:n.value,duration:2.5,separator:","}))),r.a.createElement(f.a,{color:"textSecondary"},r.a.createElement("h3",null,new Date(o).toDateString()))," ",r.a.createElement(f.a,{variant:"body2"},r.a.createElement("h2",null,"Recoveries from Covid-19")))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:3,className:C()(b.a.card,b.a.deaths)},r.a.createElement(p.a,null,r.a.createElement(f.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("h1",null,"Deaths")),r.a.createElement(f.a,{variant:"h5"},r.a.createElement("h1",{className:b.a.numbers3},r.a.createElement(x.a,{start:0,end:c.value,duration:2.5,separator:","}))),r.a.createElement(f.a,{color:"textSecondary"},r.a.createElement("h3",null,new Date(o).toDateString()))," ",r.a.createElement(f.a,{variant:"body2"},r.a.createElement("h2",null,"Deaths from Covid-19")))))):"loading.."},w=function(){return r.a.createElement("h1",null)},N=t(35),D=t.n(N),k=t(18),j=t.n(k),O="https://covid19.mathdro.id/api",B=function(){var e=Object(m.a)(s.a.mark((function e(){var a,t,n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get(O);case 3:return a=e.sent,t=a.data,n=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),I=function(e){Object(i.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{}},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:D.a.container},r.a.createElement(S,{data:e}),r.a.createElement(w,null))}}]),t}(r.a.Component);o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9b969b2c.chunk.js.map