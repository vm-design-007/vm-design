"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t={ripplesColor:{type:String,default:()=>""},duration:{type:Number,default:()=>400,validator:e=>e>0},type:{type:String,default:()=>"default",validator:e=>["default","primary","success","danger","warning"].includes(e)},disabled:{type:Boolean,default:()=>!1},startOpacity:{type:Number,default:()=>.5,validator:e=>[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1].includes(e)},endOpacity:{type:Number,default:()=>0,validator:e=>[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1].includes(e)},noSelect:{type:Boolean,default:()=>!0}};exports.Props=t;