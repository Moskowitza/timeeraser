import{_ as c}from"../../chunks/preload-helper-ec9aa979.js";import{S as d,i as m,s as _,e as f,t as h,k as p,w as v,c as P,a as k,h as w,m as y,x as g,d as u,g as x,G as l,y as E,j,q as D,o as b,B as q}from"../../chunks/vendor-d4cd4022.js";function I(n){switch(n){case"../../markdownPosts/cleanCode.svx":return c(()=>import("../../chunks/cleanCode-15062116.js").then(function(t){return t._}),["chunks/cleanCode-15062116.js","chunks/vendor-d4cd4022.js"]);case"../../markdownPosts/cleanGit.svx":return c(()=>import("../../chunks/cleanGit-b7cd7f89.js").then(function(t){return t._}),["chunks/cleanGit-b7cd7f89.js","chunks/vendor-d4cd4022.js"]);default:return new Promise(function(t,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+n)))})}}function C(n){let t,s,r,e,o;return e=new n[1]({}),{c(){t=f("div"),s=h(n[0]),r=p(),v(e.$$.fragment)},l(a){t=P(a,"DIV",{});var i=k(t);s=w(i,n[0]),r=y(i),g(e.$$.fragment,i),i.forEach(u)},m(a,i){x(a,t,i),l(t,s),l(t,r),E(e,t,null),o=!0},p(a,[i]){(!o||i&1)&&j(s,a[0])},i(a){o||(D(e.$$.fragment,a),o=!0)},o(a){b(e.$$.fragment,a),o=!1},d(a){a&&u(t),q(e)}}}async function V({params:n,fetch:t,session:s,stuff:r}){try{const e=await I(`../../markdownPosts/${n.slug}.svx`);return{props:{title:e.metadata.title,Post:e.default}}}catch{return{status:404,error:"Post Not Found"}}}function G(n,t,s){let{title:r}=t,{Post:e}=t;return n.$$set=o=>{"title"in o&&s(0,r=o.title),"Post"in o&&s(1,e=o.Post)},n.$$.update=()=>{n.$$.dirty&1&&(document.title=r)},[r,e]}class A extends d{constructor(t){super();m(this,t,G,C,_,{title:0,Post:1})}}export{A as default,V as load};