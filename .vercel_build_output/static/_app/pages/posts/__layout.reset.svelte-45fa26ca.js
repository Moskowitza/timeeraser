import{_ as P}from"../../chunks/cleanCode-e2a484ff.js";import{_ as S}from"../../chunks/cleanGit-2cee3a05.js";import{S as $,i as D,s as H,e as d,t as w,c as v,a as g,h as C,d as h,b as y,g as E,G as k,j as J,H as K,k as G,m as q,I as O,J as U,K as V,q as z,o as B,a5 as F}from"../../chunks/vendor-e8be0e5b.js";function A(i,t,s){const o=i.slice();return o[3]=t[s],o}function M(i){let t,s,o=i[3].title+"",_,u;return{c(){t=d("li"),s=d("a"),_=w(o),this.h()},l(l){t=v(l,"LI",{});var n=g(t);s=v(n,"A",{"sveltekit:prefetch":!0,href:!0});var p=g(s);_=C(p,o),p.forEach(h),n.forEach(h),this.h()},h(){y(s,"sveltekit:prefetch",""),y(s,"href",u=`/posts/${i[3].slug}`)},m(l,n){E(l,t,n),k(t,s),k(s,_)},p(l,n){n&1&&o!==(o=l[3].title+"")&&J(_,o),n&1&&u!==(u=`/posts/${l[3].slug}`)&&y(s,"href",u)},d(l){l&&h(t)}}}function N(i){let t,s,o,_,u,l,n,p,m=i[0],r=[];for(let e=0;e<m.length;e+=1)r[e]=M(A(i,m,e));const j=i[2].default,c=K(j,i,i[1],null);return{c(){t=d("ul"),s=d("li"),o=d("a"),_=w("home"),u=G();for(let e=0;e<r.length;e+=1)r[e].c();l=G(),n=d("div"),c&&c.c(),this.h()},l(e){t=v(e,"UL",{});var f=g(t);s=v(f,"LI",{});var a=g(s);o=v(a,"A",{href:!0});var b=g(o);_=C(b,"home"),b.forEach(h),a.forEach(h),u=q(f);for(let L=0;L<r.length;L+=1)r[L].l(f);f.forEach(h),l=q(e),n=v(e,"DIV",{class:!0});var I=g(n);c&&c.l(I),I.forEach(h),this.h()},h(){y(o,"href","/"),y(n,"class","container svelte-41ukt8")},m(e,f){E(e,t,f),k(t,s),k(s,o),k(o,_),k(t,u);for(let a=0;a<r.length;a+=1)r[a].m(t,null);E(e,l,f),E(e,n,f),c&&c.m(n,null),p=!0},p(e,[f]){if(f&1){m=e[0];let a;for(a=0;a<m.length;a+=1){const b=A(e,m,a);r[a]?r[a].p(b,f):(r[a]=M(b),r[a].c(),r[a].m(t,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=m.length}c&&c.p&&(!p||f&2)&&O(c,j,e,e[1],p?V(j,e[1],f,null):U(e[1]),null)},i(e){p||(z(c,e),p=!0)},o(e){B(c,e),p=!1},d(e){e&&h(t),F(r,e),e&&h(l),e&&h(n),c&&c.d(e)}}}async function X({params:i,fetch:t,session:s,stuff:o}){try{const _=await{"../../markdownPosts/cleanCode.svx":P,"../../markdownPosts/cleanGit.svx":S};return{props:{posts:Object.values(_).map(n=>n.metadata)}}}catch{return{status:303,redirect:"/"}}}function Q(i,t,s){let{$$slots:o={},$$scope:_}=t,{posts:u}=t;return i.$$set=l=>{"posts"in l&&s(0,u=l.posts),"$$scope"in l&&s(1,_=l.$$scope)},[u,_,o]}class Y extends ${constructor(t){super();D(this,t,Q,N,H,{posts:0})}}export{Y as default,X as load};
