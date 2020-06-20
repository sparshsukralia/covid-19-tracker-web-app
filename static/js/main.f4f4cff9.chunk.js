(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{21:function(e,a,t){e.exports={heading:"App_heading__V6ZqE",subHeading:"App_subHeading__3gXQv",container:"App_container__GlPSg"}},39:function(e,a,t){},44:function(e,a,t){e.exports=t(73)},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),o=t.n(c),l=t(10),s=t.n(l),m=t(13),d=t(33),u=t(34),i=t(41),p=t(40),E=t(90),h=t(94),v=t(91),_=t(92),f=t(8),b=t.n(f),g=t(18),y=t.n(g),x=t(19),C=t.n(x),N=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return console.log(o),t?r.a.createElement("div",{className:b.a.container},r.a.createElement("h3",{className:b.a.date},"Latest of Date: ",new Date(o).toLocaleDateString()),r.a.createElement(E.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:3,className:C()(b.a.card,b.a.infected)},r.a.createElement(v.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("h1",null,"Infected")),r.a.createElement(_.a,{variant:"h5"},r.a.createElement("h1",{className:b.a.numbers1},r.a.createElement(y.a,{start:0,end:t.value,duration:2.5,separator:","}))),r.a.createElement(_.a,{color:"textSecondary"}),r.a.createElement(_.a,{variant:"body2"},r.a.createElement("h2",null,"Total cases of COVID-19")))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:3,className:C()(b.a.card,b.a.recovered)},r.a.createElement(v.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("h1",null,"Recovered")),r.a.createElement(_.a,{variant:"h5"},r.a.createElement("h1",{className:b.a.numbers2},r.a.createElement(y.a,{start:0,end:n.value,duration:2.5,separator:","}))),r.a.createElement(_.a,{color:"textSecondary"})," ",r.a.createElement(_.a,{variant:"body2"},r.a.createElement("h2",null,"Recoveries from COVID-19")))),r.a.createElement(E.a,{item:!0,component:h.a,xs:12,md:3,className:C()(b.a.card,b.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(_.a,{color:"textSecondary",gutterBottom:!0},r.a.createElement("h1",null,"Deaths")),r.a.createElement(_.a,{variant:"h5"},r.a.createElement("h1",{className:b.a.numbers3},r.a.createElement(y.a,{start:0,end:c.value,duration:2.5,separator:","}))),r.a.createElement(_.a,{color:"textSecondary"})," ",r.a.createElement(_.a,{variant:"body2"},r.a.createElement("h2",null,"Deaths from COVID-19")))))):"loading.."},D=t(95),O=t(93),I=t(39),S=t.n(I),k=function(){return r.a.createElement(D.a,{className:S.a.formControl},r.a.createElement(O.a,null,r.a.createElement("option",{value:"global"},"Global")))},w=t(21),j=t.n(w),R=t(22),V=t.n(R),A="https://covid19.mathdro.id/api",B=function(){var e=Object(m.a)(s.a.mark((function e(){var a,t,n,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get(A);case 3:return a=e.sent,t=a.data,n=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate,e.abrupt("return",{confirmed:n,recovered:r,deaths:c,lastUpdate:o});case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),U=function(e){Object(i.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{}},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:a=e.sent,this.setState({data:a});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:j.a.container},r.a.createElement("h1",{className:j.a.heading},"COVID-19 TRACKER"),r.a.createElement(k,null),r.a.createElement(N,{data:e}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(U,null),document.getElementById("root"))},8:function(e,a,t){e.exports={container:"Cards_container__3FsUT",date:"Cards_date__2VXLp",card:"Cards_card__3avzp",numbers1:"Cards_numbers1__3NlIc",numbers2:"Cards_numbers2___IB-R",numbers3:"Cards_numbers3__1YaQf",infected:"Cards_infected__Z6MsW",recovered:"Cards_recovered__FuNah",deaths:"Cards_deaths__3EURI"}}},[[44,1,2]]]);
//# sourceMappingURL=main.f4f4cff9.chunk.js.map