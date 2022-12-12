"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=require("./index3.js"),m=require("../../svg-icon/index.js"),p=e.defineComponent({name:"VSwitch"}),v=e.defineComponent({...p,props:i.Props,emits:i.Emits,setup(r,{emit:n}){const l=r,c=()=>{l.disabled||(n("update:modelValue",!l.modelValue),n("change",!l.modelValue))},a=e.computed(()=>{const{modelValue:o,closeColor:t,openColor:s,size:d}=l;return{right:o?"0px":{large:"24px",middle:"20px",small:"16px"}[d],borderColor:o?s:t}}),u=e.computed(()=>{const{size:o,modelValue:t,square:s}=l;return["v-switch__input",{[`v-switch__${o}`]:o,"v-switch__close":!t,"v-switch__square":s}]});return(o,t)=>(e.openBlock(),e.createElementBlock("div",{role:"switch",class:e.normalizeClass(["v-switch",{"v-switch__disabled":o.disabled}])},[o.closeText?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(["v-switch__right-text",{"v-switch__text-active":!o.modelValue}])},e.toDisplayString(o.closeText),3)):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(e.unref(u)),style:e.normalizeStyle({background:o.modelValue?o.openColor:o.closeColor}),onClick:c},[e.createElementVNode("span",{class:"v-switch__roll",style:e.normalizeStyle(e.unref(a))},[o.icon?(e.openBlock(),e.createBlock(e.unref(m.VSvgIcon),{key:0,icon:o.icon,size:14},null,8,["icon"])):e.createCommentVNode("",!0)],4)],6),o.openText?(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(["v-switch__left-text",{"v-switch__text-active":o.modelValue}])},e.toDisplayString(o.openText),3)):e.createCommentVNode("",!0)],2))}});exports.default=v;