"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=require("../../src/index3.js"),a=require("../../../_hooks/use-list/index.js");require("../../../loading/src/index2.js");require("../../../_hooks/use-message/index.js");const l=["aria-value"],u={class:"v-progress__bar"},_={class:"v-progress__fill"},d={key:0,class:"v-progress__percentage"},p={key:0,class:"v-progress__text"},m=e.defineComponent({__name:"index",setup(v){const s=e.inject(i.PROGRESS_PROPS_KEY),{classes:t,styles:r}=a.useList(s,"progress"),o=t(["type","stripe","state"],"v-progress"),n=r(["height","color","textColor","background"]),c=e.computed(()=>({"--progress-width":`${s.percent}%`}));return(g,f)=>(e.openBlock(),e.createElementBlock("div",{role:"progressbar",class:e.normalizeClass(e.unref(o)),style:e.normalizeStyle([e.unref(n),e.unref(c)]),"aria-value":e.unref(s).percent,"aria-valuemin":0,"aria-valuemax":100},[e.createElementVNode("div",u,[e.createElementVNode("div",_,[!e.unref(s).outsideText&&e.unref(s).showText?(e.openBlock(),e.createElementBlock("div",d,e.toDisplayString(e.unref(s).percent)+"% ",1)):e.createCommentVNode("",!0)])]),e.unref(s).outsideText&&e.unref(s).showText?(e.openBlock(),e.createElementBlock("div",p,e.toDisplayString(e.unref(s).percent)+"% ",1)):e.createCommentVNode("",!0)],14,l))}});exports.default=m;