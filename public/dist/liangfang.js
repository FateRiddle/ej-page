webpackJsonp([3],{214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addUser=t.fetchUser=void 0;var r=n(88),a=function(e){return e&&e.__esModule?e:{default:e}}(r),u=a.default.create({baseURL:"/api"});t.fetchUser=function(){return u.get("/user").then(function(e){return e.data})},t.addUser=function(e){var t=e.name,n=e.phone,r=e.area,a=e.address;return u.post("/liangfang",{name:t,phone:n,area:r,address:a}).then(function(e){return e.data.output.msg},function(e){return console.log(e),"预约失败。"})}},254:function(e,t,n){"use strict";var r=n(214),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r);document.getElementById("yuyue").addEventListener("click",function(){var e="";document.getElementById("address")&&(e=document.getElementById("address").value);var t=document.getElementById("name").value,n=document.getElementById("phone").value,r=document.getElementById("area").value,u=document.querySelector(".message");if(""===t||""===n||""===r)return void(u.textContent="请填写完整信息。");a.addUser({name:t,phone:n,area:r,address:e}).then(function(e){u.textContent=e})},!1)}},[254]);