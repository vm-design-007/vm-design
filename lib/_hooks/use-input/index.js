"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});require("vue");const r=require("../../_tokens/emits/index.js"),a=require("../use-run/index.js");require("../../loading/src/index2.js");require("../use-message/index.js");const i=(e,t,u)=>{const{run:s}=a.useRun();return{handleInput:n=>{s(e.onInput,u.value,n)},handleChange:n=>{s(e.onChange,u.value,n)},handleClear:()=>{e.disabled||t(r.EMIT_UPDATE,"")}}};exports.useInput=i;