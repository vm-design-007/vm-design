"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),a=require("./index3.js"),d=require("../../_hooks/use-run/index.js");require("../../loading/src/index2.js");require("../../_hooks/use-message/index.js");const f={key:0,class:"v-infinite-scrolling__loading"},p=e.defineComponent({name:"VInfiniteScrolling"}),g=e.defineComponent({...p,props:a.Props,setup(i){const o=i,{run:s}=d.useRun(),l=e.ref(!1),t=e.ref(),c=()=>{if(o.loading)return;const n=t.value;if(!n)return;const r=Math.ceil(n.scrollTop+n.clientHeight+o.distance);s(o.onScrollWhen,Math.ceil(n.scrollTop)),r>=n.scrollHeight&&!l.value&&(l.value=!0,s(u=>{o.onScrollEnd(u),l.value=!1},r))};return(n,r)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"scrollEl",ref:t,class:"v-infinite-scrolling",style:e.normalizeStyle(n.styles),onScroll:c},[e.renderSlot(n.$slots,"default"),n.loading?(e.openBlock(),e.createElementBlock("div",f,"\u52A0\u8F7D\u4E2D...")):e.createCommentVNode("",!0)],36))}});exports.default=g;