(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(24)},16:function(e,a,t){},22:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(4),l=t.n(c),o=(t(16),t(5)),r=t(2),i=t(6),m=t(7),u=t(9),h=t(8),p=t(10),v=t(1),d=t.n(v);t(22);var g=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).generateURL=function(){var e=new URL(window.location);Object.keys(t.state).forEach(function(a){e.searchParams.append(a,t.state[a])}),t.setState({savedURL:e})},t.changeData=function(e,a){t.setState(Object(r.a)({},e,a.target.value));var n=new URLSearchParams(window.location.search);Object.keys(t.state).forEach(function(e){n.set(e,t.state[e])});var s=window.location.pathname+"?"+n.toString();window.history.pushState(null,"",s)},t.handleFocus=function(e){e.target.select()},t.state={designed_for:"",designed_by:"",date:function(){var e=new Date,a=e.getDate(),t=e.getMonth()+1;return a<10&&(a="0"+a),t<10&&(t="0"+t),a+"/"+t+"/"+e.getFullYear()}(),version:"0.0.1",key_partners:"",key_activities:"",key_resources:"",customer_relationship:"",customer_segments:"",channels:"",value_proposition:"",cost_structure:"",revenue_stream:"",savedURL:""},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,a={};Object.keys(this.state).forEach(function(t){a[t]=function(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}(t)||e.state[t]}),this.setState(Object(o.a)({},a))}},{key:"render",value:function(){var e=this,a=this.state,t=a.designed_for,n=a.key_partners,c=a.version,l=a.key_activities,o=a.designed_by,r=a.date,i=a.key_resources,m=a.savedURL,u=a.customer_relationship,h=a.customer_segments,p=a.channels,v=a.value_proposition,g=a.cost_structure,E=a.revenue_stream;return s.a.createElement("div",{className:"App"},s.a.createElement("section",{className:"header"},s.a.createElement("h1",{className:"title"},"The Business Model Canvas"),s.a.createElement("div",{className:"header-container"},s.a.createElement("span",{className:"header-input design-input"},s.a.createElement("label",{className:"label"},"Designed for:"),s.a.createElement("input",{value:t,type:"text",onChange:function(a){e.changeData("designed_for",a)}})),s.a.createElement("span",{className:"header-input design-input"},s.a.createElement("label",{className:"label"},"Designed by:"),s.a.createElement("input",{value:o,type:"text",onChange:function(a){e.changeData("designed_by",a)}})),s.a.createElement("span",{className:"header-input date"},s.a.createElement("label",{className:"label"},"Date:"),s.a.createElement("input",{value:r,type:"text",onChange:function(a){e.changeData("date",a)}})),s.a.createElement("span",{className:"header-input version"},s.a.createElement("label",{className:"label"},"Version:"),s.a.createElement("input",{value:c,type:"text",onChange:function(a){e.changeData("version",a)}})))),s.a.createElement("section",{className:"container"},s.a.createElement("div",{className:"canvas-item key-partners"},s.a.createElement("span",null,"Key Partners"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("key_partners",a)},html:n})),s.a.createElement("section",{className:"canvas-item key-activities"},s.a.createElement("span",null,"Key Activities"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("key_activities",a)},html:l})),s.a.createElement("section",{className:"canvas-item key-resources"},s.a.createElement("span",null,"Key Resources"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("key_resources",a)},html:i})),s.a.createElement("div",{className:"canvas-item customer-relationship"},s.a.createElement("span",null,"Customer Relationship"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("customer_relationship",a)},html:u})),s.a.createElement("div",{className:"canvas-item customer-segments"},s.a.createElement("span",null,"Customer Segments"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("customer_segments",a)},html:h})),s.a.createElement("div",{className:"canvas-item channels"},s.a.createElement("span",null,"Channels"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("channels",a)},html:p})),s.a.createElement("div",{className:"canvas-item value-proposition"},s.a.createElement("span",null,"Value Proposition"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("value_proposition",a)},html:v})),s.a.createElement("div",{className:"canvas-item cost-structure"},s.a.createElement("span",null,"Cost Structure"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("cost_structure",a)},html:g})),s.a.createElement("div",{className:"canvas-item revenue-streams"},s.a.createElement("span",null,"Revenue Streams"),s.a.createElement(d.a,{className:"content-info",onChange:function(a){e.changeData("revenue_stream",a)},html:E}))),s.a.createElement("section",{className:"save-section"},s.a.createElement("button",{onClick:this.generateURL,className:"btn-save"},"Save"),m?[s.a.createElement("label",null,"Share URL:"),s.a.createElement("input",{type:"text",className:"save-url-input",value:m,onFocus:this.handleFocus})]:null,s.a.createElement("div",{className:"contact-link-container"},"You can contact me ",s.a.createElement("a",{href:"https://www.linkedin.com/in/christian-poputea-0a3b49122",className:"contact-link"},"here"),".")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.5a9fd596.chunk.js.map