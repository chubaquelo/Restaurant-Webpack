(()=>{var e={899:e=>{e.exports=function(){const e=document.createElement("footer");return e.textContent="Copyrighted® Meals and Restaurant 2021 - Do not copy our recipes.",e}()},354:e=>{e.exports=function(){const e=document.createElement("header"),t=document.createElement("nav"),n=document.createElement("ul"),o=document.createElement("li"),c=document.createElement("li"),a=document.createElement("li"),r=document.createElement("li");return o.textContent="Home",c.textContent="About Us",a.textContent="Our Meals",r.textContent="Contact Us",e.append(t),t.append(n),n.append(o,c,a,r),e}()},186:e=>{e.exports=function(){document.querySelector("#content").textContent="";const e=document.createElement("div"),t=document.createElement("main"),n=document.createElement("div");n.className="welcome";const o=document.createElement("h1"),c=document.createElement("div");c.className="welcome-content-second";const a=document.createElement("p");a.className="welcome-text";const r=document.createElement("img");return r.className="about-img",r.src="./img/about-us.jpg",o.textContent="About Us",a.textContent="We are the oldest restaurant on earth. We cook from rats to caviar, just ask.",e.append(t),t.append(n),n.append(o,c),c.append(a,r),e}()},940:e=>{e.exports=function(){document.querySelector("#content").textContent="";const e=document.createElement("div"),t=document.createElement("main"),n=document.createElement("div");n.className="welcome";const o=document.createElement("h1"),c=document.createElement("div");c.className="welcome-content-second";const a=document.createElement("p");a.className="welcome-text";const r=document.createElement("img");return r.className="contact-img",r.src="./img/pidgeon.jpg",o.textContent="Contact Us",a.textContent="You can scream out loud with our name, phone us or send a pidgeon with your order.",e.append(t),t.append(n),n.append(o,c),c.append(a,r),e}()},90:e=>{e.exports=function(){const e=document.createElement("div"),t=document.createElement("main"),n=document.createElement("div");n.className="welcome";const o=document.createElement("h1"),c=document.createElement("div");c.className="welcome-content";const a=document.createElement("img");a.src="./img/restaurant.jpg";const r=document.createElement("p");return r.className="welcome-text",o.textContent="Welcome to Microrestaurant!",r.textContent="Welcome to our restaurant. We are pleased to receive you and we are commited to treat you as our most important friend in here. Our meals will deloit you.",e.append(t),t.append(n),n.append(o,c),c.append(a,r),e}()},55:e=>{e.exports=function(){document.querySelector("#content").textContent="";const e=document.createElement("div"),t=document.createElement("main"),n=document.createElement("div");n.className="welcome";const o=document.createElement("h1"),c=document.createElement("div");c.className="welcome-content-second";const a=document.createElement("p"),r=document.createElement("img");return r.className="meals-img",r.src="./img/meals.jpg",a.className="welcome-text",o.textContent="Our Meals",a.textContent="We have all kind of meals. Pizza, sandwiches, pasta, ice cream, and tomato flowers.",e.append(t),t.append(n),n.append(o,c),c.append(a,r),e}()}},t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(90),t=n.n(e),o=n(186),c=n.n(o),a=n(55),r=n.n(a),m=n(940),d=n.n(m),l=n(354),s=n.n(l),u=n(899),p=n.n(u);const i=document.querySelector("body"),E=document.querySelector("#content");i.prepend(s()),E.appendChild(t()),i.append(p()),document.querySelector("li:first-of-type").addEventListener("click",(()=>{E.textContent="",E.appendChild(t())})),document.querySelector("li:nth-of-type(2)").addEventListener("click",(()=>{E.textContent="",E.appendChild(c())})),document.querySelector("li:nth-of-type(3)").addEventListener("click",(()=>{E.textContent="",E.appendChild(r())})),document.querySelector("li:last-of-type").addEventListener("click",(()=>{E.textContent="",E.appendChild(d())}))})()})();