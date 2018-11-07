(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{412:function(e,t,n){},419:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(8),c=n.n(i),s=(n(56),n(13)),o=n(14),l=n(27),d=n(15),h=n(28),u=n(7),g=n(42),p=function(){return r.a.createElement("a",{className:"skip-link screen-reader-text",href:"#content"},"Skip to content")},f=n(3),m=function(e){var t=e.category,n=e.onChange,a=e.id;return r.a.createElement(f.f,null,r.a.createElement(f.g,{href:"#",onClick:function(){n(a,-1)}},t))},x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={isOpen:!1},n.toggle=n.toggle.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{isOpen:!e.isOpen}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.categories,a=e.onChange,i=this.state.isOpen,c=n.map(function(e){return r.a.createElement(m,{category:e.category,key:e.id,onChange:a,id:e.id})});return r.a.createElement("div",null,r.a.createElement(f.h,{color:"light",light:!0,expand:"md"},r.a.createElement(f.i,{href:"#"},t),r.a.createElement(f.j,{onClick:this.toggle}),r.a.createElement(f.b,{isOpen:i,navbar:!0},r.a.createElement(f.e,{className:"ml-auto",navbar:!0},c))))}}]),t}(r.a.Component),v=function(e){var t=e.title,n=e.categories,a=e.onChange;return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(x,{title:t,categories:n,onChange:a}))};v.defaultProps={title:"JS Documentation"};var b=v,y=function(e){var t=e.category,n=e.id,a=e.onClick;return r.a.createElement(f.d,{className:"sideMenu-category",tag:"a",href:"#",action:!0,onClick:function(){a(n,-1)}},t)},A=function(e){var t=e.name,n=e.id,a=e.category_id,i=e.onClick;return r.a.createElement(f.d,{tag:"a",href:"#",action:!0,onClick:function(){i(a,n)}},t)},E=function(e){var t=e.categories,n=e.onChange,a=t.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(y,{category:e.category,id:e.id,onClick:n}),e.articles.map(function(t){return r.a.createElement(A,{name:t.title,key:t.id,category_id:e.id,id:t.id,onClick:n})}))});return r.a.createElement("aside",{className:"sideMenu"},r.a.createElement(f.c,null,a))},T=n(26),j=function(e){var t=e.name,n=e.explanation,a=e.example;return r.a.createElement("div",null,r.a.createElement("h4",{className:"article-parameters"},t),r.a.createElement("p",null,n),r.a.createElement("pre",null,r.a.createElement(T.a,{language:"javascript"},a)))},k=function(e){var t=e.title,n=e.description,a=e.example,i=e.syntax,c=Object.values(i.parameters).map(function(e){return r.a.createElement(j,{key:e.id,name:e.name,explanation:e.explanation,example:e.example})});return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},t),r.a.createElement("p",null,n),r.a.createElement("pre",null,r.a.createElement(T.a,{language:"javascript"},a)),r.a.createElement("div",null,r.a.createElement("h3",{className:"article-subtitle"},"Parameters:"),c,r.a.createElement("h3",{className:"article-subtitle"},"Return Value:"),r.a.createElement("p",null,i.return),r.a.createElement(f.a,{outline:!0,color:"link"},r.a.createElement("a",{className:"learnMore-button",href:i.link,target:"_blank",rel:"noopener noreferrer"},"Learn More"))," "))},w=function(e){var t=e.section;return r.a.createElement("div",{className:"mainHeader-style"},r.a.createElement("h2",{className:"mainHeader"},t))},O=function(e){var t=e.articles,n=e.section,a=Object.values(t).map(function(e){return r.a.createElement(k,{title:e.title,key:e.id,description:e.description,example:e.example,syntax:e.syntax})});return r.a.createElement("main",{id:"content"},r.a.createElement(w,{section:n}),a)},S=(n(412),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={data:g,active_category_id:-1,active_article_id:-1},n.updateActiveCategory=n.updateActiveCategory.bind(Object(u.a)(Object(u.a)(n))),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getAllArticles",value:function(){return Object.values(this.state.data).map(function(e){return e.articles}).reduce(function(e,t){return e.concat(t)},[])}},{key:"updateActiveCategory",value:function(e,t){this.setState({active_category_id:e,active_article_id:t})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.active_category_id,a=e.active_article_id,i=Object.values(t).map(function(e){return{id:e.id,category:e.category,articles:e.articles}}),c=n>0?t[n].category:"Articles",s=-1===n?this.getAllArticles():-1===a?t[n].articles:t[n].articles.filter(function(e){return e.id===a});return r.a.createElement("div",null,r.a.createElement(b,{categories:i,onChange:this.updateActiveCategory}),r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(E,{categories:i,onChange:this.updateActiveCategory}),r.a.createElement(O,{articles:s,section:c})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(417);c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e){e.exports={1:{id:1,category:"String",articles:[{title:"charAt()",id:20,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:80}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"},{title:"substring()",id:21,description:"The substring() method returns the part of the string between the start and end indexes, or to the end of the string.",syntax:{parameters:[{name:"indexStart",explanation:"The index of the first character to include in the returned substring.",example:"str.substring(indexStart[, indexEnd])",id:81}],return:"A new string containing the specified part of the given string.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring"},example:"var str = 'Mozilla';\nconsole.log(str.substring(1, 3));\n// expected output: 'oz'\nconsole.log(str.substring(2));\n// expected output: 'zilla'"},{title:"indexOf()",id:22,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:82}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"}]},2:{id:2,category:"Array",articles:[{title:"filter()",id:23,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:83}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"},{title:"push()",id:24,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:84}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"},{title:"concat()",id:25,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:85}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"}]},3:{id:3,category:"Object",articles:[{title:"hasOwnProperty()",id:26,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:86}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"},{title:"Object.keys()",id:27,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:87}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"},{title:"Object.values()",id:28,description:"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.",syntax:{parameters:[{name:"index",explanation:"An integer between 0 and 1-less-than the length of the string. If no index is provided, the default is 0, so the first character in the string is returned.",example:"character = str.charAt(index)",id:88}],return:"A string representing the character (exactly one UTF-16 code unit) at the specified index; empty string if index is out of range.",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},example:"var sentence = 'The quick brown fox jumped over the lazy dog.'; \nvar index = 4; \nconsole.log('The character at index ' + index + ' is ' + sentence.charAt(index)); \n// expected output: 'The character at index 4 is q;'"}]}}},51:function(e,t,n){e.exports=n(419)},56:function(e,t,n){}},[[51,2,1]]]);
//# sourceMappingURL=main.82176211.chunk.js.map