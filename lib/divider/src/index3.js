"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t={position:{type:String,default:()=>"center",validator:e=>["left","center","right"].includes(e)},vertical:{type:Boolean,default:()=>!1},color:{type:String,default:()=>""},fontColor:{type:String,default:()=>""},margin:{type:String,default:()=>""},background:{type:String,default:()=>""},type:{type:String,validator:e=>["dashed","dotted","double","solid"].includes(e),default:()=>"solid"}};exports.Props=t;