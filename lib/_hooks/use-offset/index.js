"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("vue"),c=require("../../_tokens/emits/index.js"),v=(f,i,l)=>{const r=s.ref(0),a=e=>{let o=e.offsetLeft,t=e.offsetParent;for(;t!==null;)o+=t.offsetLeft,t=t.offsetParent;return o},n=()=>{f.value&&(r.value=a(f.value))};s.onMounted(()=>{n(),window&&window.addEventListener("resize",n)}),s.onUnmounted(()=>{window&&window.removeEventListener("resize",n)});const u=s.ref(0);return{offset:u,offsetLeft:r,setPosition:e=>{e<0?e=0:e>100&&(e=100);const t=Math.round(e/i.step)*i.step;u.value=t,l(c.EMIT_UPDATE,t)}}};exports.useOffset=v;