(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"0":{"id":0,"bgColor":"#C2A255","textColor":"#705523","image":"./moodCalendar.png","title":"Mood Calendar","summary":"A calendar that keeps track of how you feel throughout the month and what has been going on. Made with React Redux Firebase and Typescript.","description":"<img src=\'https://media.giphy.com/media/14wTbNneogwjba/giphy.gif\'/> <h1> Mood Calendar </h1> <p> some description goes here </p> <img src=\'https://media.giphy.com/media/3oEhmCmDzqV12kkwdW/giphy.gif\'/> <p> another description goes here</p>"},"1":{"id":1,"bgColor":"#A6C39E","textColor":"#597161","image":"./markdownTab.png","title":"Markdown Tab","summary":"A chrome extension that opens an editable Markdown file that is synced between all chrome browsers that you are logged in to.","description":"<img src=\'https://media.giphy.com/media/N18WLp1lduj2U/giphy.gif\'/> <h1> Markdown Tab </h1>"},"2":{"id":2,"bgColor":"#8888AF","textColor":"#2F2E51","image":"./moodCalendar.png","title":"Open Source","summary":"Coming Soon","description":"<img src=\'https://media.giphy.com/media/3ov9k1173PdfJWRsoE/giphy.gif\'/> <h1> Open Source </h1>"}}')},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(4),r=a.n(o),l=(a(10),a(11),function(){return c.a.createElement("div",{className:"about"},c.a.createElement("h1",null,"Michael Paguay"),c.a.createElement("p",null," Self taught programmer "),c.a.createElement("p",null," Traditionally educated Designer "),c.a.createElement("p",null," Experienced Educator "),c.a.createElement("h3",null," New York | Front End Dev. "))}),i=a(2),s=(a(12),a(1)),m=(a(13),function(e){var t={background:"".concat(e.project.bgColor),color:"".concat(e.project.textColor)};return c.a.createElement("div",{className:"projectDetails"},c.a.createElement("div",{className:"projectDetails-nav"},e.nav),c.a.createElement("div",{className:"projectDetails-content",style:t},c.a.createElement("button",{className:"close-btn",onClick:function(){e.close(!1)}},"X"),c.a.createElement("div",{className:"projectDetails-content-text",dangerouslySetInnerHTML:{__html:e.project.description}})))}),d=function(e){var t={color:"white"},a=s;return c.a.createElement("div",{className:"projects-nav"},c.a.createElement("button",{style:0===e.currentId?t:{},onClick:function(){return e.changeId(0)}},a[0].title),c.a.createElement("button",{style:1===e.currentId?t:{},onClick:function(){return e.changeId(1)}},a[1].title),c.a.createElement("button",{style:2===e.currentId?t:{},onClick:function(){return e.changeId(2)}},a[2].title))},u=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(!1),l=Object(i.a)(r,2),u=l[0],p=l[1],g=Object(n.useRef)(),h=s[a],f={background:"".concat(h.bgColor),color:"".concat(h.textColor)},E={border:"1px solid ".concat(h.textColor),color:"".concat(h.textColor)};return Object(n.useEffect)((function(){g.current.classList.add("show")}),[]),c.a.createElement("div",{className:"projects"},c.a.createElement("div",{className:"projects-content",style:f,ref:g},c.a.createElement("div",{className:"projects-description"},c.a.createElement("h3",null,h.title),c.a.createElement("p",null,h.summary),c.a.createElement("button",{onClick:function(){return p(!0)},style:E},"More Info.")),c.a.createElement("div",{className:"projects-image"},c.a.createElement("img",{alt:"screenshot",src:h.image}))),c.a.createElement(d,{currentId:a,changeId:o}),u?c.a.createElement(m,{close:p,project:h,nav:c.a.createElement(d,{currentId:a,changeId:o})}):"")},p=(a(14),function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("img",{src:"https://camo.githubusercontent.com/9bbddae7e626bda73c943e06b4568a7a02e193b4/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f747769747465722e737667",alt:"twitter logo"}),c.a.createElement("img",{src:"https://camo.githubusercontent.com/d0518022b7a02d405ad5112a0c8aa455cbfe952e/68747470733a2f2f6564656e742e6769746875622e696f2f537570657254696e7949636f6e732f696d616765732f7376672f6769746875622e737667",alt:"github logo"}))});function g(){return c.a.createElement("div",{className:"container"},c.a.createElement(l,null),c.a.createElement(u,null),c.a.createElement(p,null))}r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.369cf333.chunk.js.map