"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t={modelValue:{type:Boolean,default:()=>!1,require:!0},size:{type:String,default:()=>"small",validator:e=>["large","middle","small"].includes(e)},type:{type:String,default:()=>"sound",validator:e=>["sound","theme","rotate","flip","favorites"].includes(e)},sound:{type:String,default:()=>""},theme:{type:String,default:()=>""},unfold:{type:String,default:()=>""},favorites:{type:String,default:()=>""}},l={"update:modelValue":e=>e,change:e=>e};exports.Emits=l;exports.Props=t;