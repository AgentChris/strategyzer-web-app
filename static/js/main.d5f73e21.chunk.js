(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(19),c=t.n(o),l=(t(46),t(34)),r=t(12),i=t(35),m=t(36),u=t(39),h=t(37),d=t(40),p=t(2),v=t.n(p),f=t(38),g=t.n(f);t(100);function E(e){var a=[];for(var t in e)e.hasOwnProperty(t)&&a.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return a.join("&")}var w="What can the company not do so it can focus on its Key Activities? <br/> For example: Lemonade Stand we would have: Municipalities",y="What uniquely strategic things does the business do to deliver its proposition? <br/> For example: Lemonade Stand we would have: Making lemonade, Marketing, Selling",N="What unique strategic assets must the business have to compete? <br/> For example: Lemonade Stand we would have: Ingredients, Sales people, Both & equipment",b="How do you interact with the customer through their \u2018journey\u2019? <br/> For example: Lemonade Stand we would have: Personal",k="Who are the customers? What do they think? See? Feel? Do? <br/> For example: Lemonade Stand we would have: Park visitors",_="How are these propositions promoted, sold and delivered? Why? Is it working? <br/>  For example: Lemonade Stand we would have: Booth sale WWW.Kellyslemonade.com",C="What\u2019s compelling about the proposition? Why do customers buy, use? <br/>  For example: Lemonade Stand we would have: Cold tasty natural lemonade on-the-go",S="What are the business\u2019 major cost drivers? How are they linked to revenue? <br/>  For example: Lemonade Stand we would have: Ingredients, Salaries/commission, Equipment, Flayers",D="How does the business earn revenue from the value propositions? <br/> For example: Lemonade Stand we would have: Lemonade sales, Tips";var L=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).generateURL=function(){var e=new URL(window.location);delete t.state.savedURL,e.search=E(t.state),localStorage.setItem("history_"+t.state.version,e),t.setState({savedURL:e})},t.changeData=function(e,a){t.setState(Object(r.a)({},e,a.target.value),function(){var e=window.location.pathname+"?"+E(t.state);window.history.pushState(null,"",e)})},t.handleFocus=function(e){e.target.select()},t.state={designed_for:"",designed_by:"",date:function(){var e=new Date,a=e.getDate(),t=e.getMonth()+1;return a<10&&(a="0"+a),t<10&&(t="0"+t),a+"/"+t+"/"+e.getFullYear()}(),version:"0.0.1",key_partners:"",key_activities:"",key_resources:"",customer_relationship:"",customer_segments:"",channels:"",value_proposition:"",cost_structure:"",revenue_stream:"",savedURL:""},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,a={};Object.keys(this.state).forEach(function(t){a[t]=function(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}(t)||e.state[t]}),delete a.savedURL,this.setState(Object(l.a)({},a))}},{key:"render",value:function(){var e=this,a=this.state,t=a.designed_for,n=a.key_partners,o=a.version,c=a.key_activities,l=a.designed_by,r=a.date,i=a.key_resources,m=a.savedURL,u=a.customer_relationship,h=a.customer_segments,d=a.channels,p=a.value_proposition,f=a.cost_structure,E=a.revenue_stream;return s.a.createElement("div",{className:"App"},s.a.createElement(g.a,{place:"bottom",type:"dark",effect:"float",multiline:!0}),s.a.createElement("section",{className:"header"},s.a.createElement("h1",{className:"title"},"The Business Model Canvas"),s.a.createElement("div",{className:"header-container"},s.a.createElement("span",{className:"header-input design-input"},s.a.createElement("label",{className:"label"},"Designed for:"),s.a.createElement("input",{value:t,type:"text",onChange:function(a){e.changeData("designed_for",a)}})),s.a.createElement("span",{className:"header-input design-input"},s.a.createElement("label",{className:"label"},"Designed by:"),s.a.createElement("input",{value:l,type:"text",onChange:function(a){e.changeData("designed_by",a)}})),s.a.createElement("span",{className:"header-input date"},s.a.createElement("label",{className:"label"},"Date:"),s.a.createElement("input",{value:r,type:"text",onChange:function(a){e.changeData("date",a)}})),s.a.createElement("span",{className:"header-input version"},s.a.createElement("label",{className:"label"},"Version:"),s.a.createElement("input",{value:o,type:"text",onChange:function(a){e.changeData("version",a)}})))),s.a.createElement("section",{className:"container"},s.a.createElement("div",{className:"canvas-item key-partners"},s.a.createElement("span",null,"Key Partners"),s.a.createElement("i",{className:"fas fa-link","data-tip":w}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("key_partners",a)},html:n})),s.a.createElement("section",{className:"canvas-item key-activities"},s.a.createElement("span",null,"Key Activities"),s.a.createElement("i",{className:"fas fa-check-circle","data-tip":y}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("key_activities",a)},html:c})),s.a.createElement("section",{className:"canvas-item key-resources"},s.a.createElement("span",null,"Key Resources"),s.a.createElement("i",{className:"fas fa-industry","data-tip":N}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("key_resources",a)},html:i})),s.a.createElement("div",{className:"canvas-item customer-relationship"},s.a.createElement("span",null,"Customer Relationship"),s.a.createElement("i",{className:"fas fa-heart","data-tip":b}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("customer_relationship",a)},html:u})),s.a.createElement("div",{className:"canvas-item customer-segments"},s.a.createElement("span",null,"Customer Segments"),s.a.createElement("i",{className:"fas fa-users","data-tip":k}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("customer_segments",a)},html:h})),s.a.createElement("div",{className:"canvas-item channels"},s.a.createElement("span",null,"Channels"),s.a.createElement("i",{className:"fas fa-shuttle-van","data-tip":_}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("channels",a)},html:d})),s.a.createElement("div",{className:"canvas-item value-proposition"},s.a.createElement("span",null,"Value Proposition"),s.a.createElement("i",{className:"fas fa-gift","data-tip":C}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("value_proposition",a)},html:p})),s.a.createElement("div",{className:"canvas-item cost-structure"},s.a.createElement("span",null,"Cost Structure"),s.a.createElement("i",{className:"fas fa-tags","data-tip":S}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("cost_structure",a)},html:f})),s.a.createElement("div",{className:"canvas-item revenue-streams"},s.a.createElement("span",null,"Revenue Streams"),s.a.createElement("i",{className:"fas fa-money-bill-wave","data-tip":D}),s.a.createElement(v.a,{className:"content-info",onChange:function(a){e.changeData("revenue_stream",a)},html:E}))),s.a.createElement("section",{className:"save-section"},s.a.createElement("button",{onClick:this.generateURL,className:"btn-save"},"Save"),m?[s.a.createElement("label",null,"Share URL:"),s.a.createElement("input",{type:"text",className:"save-url-input",value:m,onFocus:this.handleFocus})]:null,s.a.createElement("div",{className:"contact-link-container"},"You can contact me ",s.a.createElement("a",{href:"https://www.linkedin.com/in/christian-poputea-0a3b49122",className:"contact-link"},"here"),".")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e,a,t){e.exports=t(102)},46:function(e,a,t){},61:function(e,a){},63:function(e,a){},72:function(e,a){}},[[41,2,1]]]);
//# sourceMappingURL=main.d5f73e21.chunk.js.map