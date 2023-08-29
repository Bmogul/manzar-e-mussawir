(()=>{"use strict";var n,e,t,o,r,a,i,c,s,l,d,p,u,f,g={786:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(425),t.b),d=i()(r()),p=s()(l);d.push([n.id,`.card {\n    /* border: 1px solid #a01010; */\n    border-radius: 8px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    margin: auto;\n    width: 65%;\n    transition: transform 0.5s, box-shadow 0.3s;\n    padding: 10px;\n    text-align: left;\n    margin-bottom: 50px;\n\n}\n\n.expand:hover {\n    transform: scale(1.1);\n    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow on hover */\n}\n\n.maincard {\n    display: flex;\n    flex-direction: column; /* Stack items vertically */\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 50px;\n    /* margin-top: 50px; */\n    height: 300px;\n\n    background-image: url(${p});\n    position: relative;\n    width: 100%;\n    height: 100vh;\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    /* background-image: url("sibghatallah-03.png"); */\n\n    /* background-image: url(bgImg.png"); */\n}\n\n\n.button{\n    display: inline-block;\n    padding: 5px 20px;\n    background-color: #e2cdaf; /* Fill color */\n    text-decoration: none;  /* removes the line */\n    border: 1px solid #603813; /* Outline color */\n    border-radius: 5px;\n    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Box shadow */\n    cursor: pointer;\n    transition: background-color 0.3s, color 0.3s; /* Smooth transition effect */\n}\n\n.button:hover {\n    background-color: #c29c66; /* Darker fill color on hover */\n    color: #452c1f; /* Darker text color on hover */\n    border-color: #452c1f; /* Darker outline color on hover */\n}`,""]);const u=d},484:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"body {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n    background-color: #e2cdaf;\n}\n\n.logo {\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.nav-links {\n    list-style: none;\n    display: flex;\n    align-items: center;\n    margin: 0;\n    padding: 0;\n}\n\n.nav-links li {\n    margin: 0 10px;\n}\n\n.nav-links a {\n    text-decoration: none;\n    color: #603813;\n    transition: color 0.3s ease-in-out;\n}\n\n.nav-links a:hover {\n    color: white;\n}\n\n.dropdown {\n    position: relative;\n    border-radius: 100%;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #ba8448;\n    border-radius: 10%;\n    z-index: 2;\n    text-align: center;\n    justify-content: center;\n    padding: 10px;\n}\n\n.dropdown-content li {\n    list-style: none;\n    padding: 0px;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.dropdown-content li {\n    margin: 0;\n    padding: 10px;\n}\n\n.dropdown-content a {\n    color: #603813;\n    text-decoration: none;\n}\n\n.dropdown-content a:hover {\n    color: white;\n}\n\n.navbar {\n    background-color: #ba8448;\n    color: #603813;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px 20px;\n    z-index: 1;\n    position: fixed;\n    top: 0;\n    width: 98%;\n    border-radius: 2%;\n    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out, display 0.32s ease-in-out;\n}\n\n.navbar.transparent {\n    opacity: 0;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}\n",""]);const c=i},402:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(484),s=t(786),l=t(667),d=t.n(l),p=new URL(t(9),t.b),u=i()(r());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300&family=Playfair+Display&display=swap);"]),u.i(c.Z),u.i(s.Z);var f=d()(p);u.push([n.id,`*{\n    /* font-family: 'IBM Plex Sans', sans-serif; */\n    font-family: 'Playfair Display', serif;\n    color: #603813;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.header {\n    position: relative;\n    width: 100%;\n    height: 90vh; /* Adjust the height as needed */\n    background-image: url(${f});\n    background-size: cover;\n    background-position: center;\n    display: flex;\n    flex-direction: column; /* Stack elements vertically */\n    background-attachment: fixed;\n\n}\n\n.content-header {\n    flex: 1; /* Take available space and push the other elements down */\n    display: flex;\n    flex-direction: column;\n    justify-content: center; /* Center content vertically */\n    align-items: center; /* Center content horizontally */\n    margin-top: 50px;\n}\n\n.content-header img {\n    max-width: 100%;\n    /* height: 20%; */\n}\n\n.subtitle {\n    text-align: center;\n    max-width: 600px;\n    font-size: 25px;\n}\n\n.titlediv {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end; /* Align content to the bottom */\n    align-items: flex-start; /* Align content to the left */\n    padding: 20px;\n    margin: 0px;\n}\n\n#mainTitle{\n    margin-bottom: 0px;\n}\n\n.dates {\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    gap: 5px; /* Add a gap between infoDivs */\n    background-color: #603813;\n    padding: 10px;\n    text-align: center;\n}\n\n.infoDiv {\n    padding: 10px 0; /* Add padding for spacing */\n}\n.infoDiv label:hover{\n    color: white;\n}\n\n.infoDiv:not(:last-child) {\n    border-right: 1px solid #e2cdaf; /* Add a border line to all but the last infoDiv */\n}\n\n\n.dates label{\n    color: #e2cdaf;\n    font-size: 25px;\n    transition: color 0.3s ease-in-out;\n    cursor: pointer;\n}\n\nbody{\n\n    background-color: #e2cdaf;\n}\n\n.img{\n\n    height: 40px;\n}\n\n.centered-text {\n    text-align: center;\n}\n.minititle{\n    margin-left:15%;\n}\n\nh1{\n    font-size: 50px;\n}\nh2{\n    font-size: 40px;\n}\nlabel{\n    font-size: 30px;\n}\n/* #e2cdaf = main background color\n#603813 = text color\n#ba8448 = header color */\n\n\nfooter {\n    background-color: #603813;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n}\n\n.contact-info {\n    max-width: 50%;\n}\n.contact-info p{\n    color: #e2cdaf;\n}\n\n.map {\n    max-width: 50%;\n}\n`,""]);const g=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},425:(n,e,t)=>{n.exports=t.p+"09a422f541f65957cee3.png"},9:(n,e,t)=>{n.exports=t.p+"85c686bbc48d0ef9d6f0.png"}},h={};function m(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return g[n](t,t.exports,m),t.exports}m.m=g,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(379),e=m.n(n),t=m(795),o=m.n(t),r=m(569),a=m.n(r),i=m(565),c=m.n(i),s=m(216),l=m.n(s),d=m(589),p=m.n(d),u=m(402),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,m.p})();