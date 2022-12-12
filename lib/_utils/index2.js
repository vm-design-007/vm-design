"use strict";var l=Object.defineProperty;var c=(t,r,e)=>r in t?l(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var o=(t,r,e)=>(c(t,typeof r!="symbol"?r+"":r,e),e);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("./index3.js");class n{constructor(r,e,s,i){o(this,"node");o(this,"props");o(this,"emit");o(this,"callback");o(this,"loadCreateImg",r=>{const e=new Image;r?e.src=r:e.src=this.props.src,e.addEventListener("error",s=>{this.onerror(s)}),e.addEventListener("load",s=>{this.onload(s,e.src)})});o(this,"onerror",r=>{if(this.props.errSrc){this.loadCreateImg(this.props.errSrc),this.props.errSrc="";return}this.emit("error",r),this.callback&&this.callback(!1)});o(this,"onload",(r,e)=>{this.node.src=e,this.emit("load",r),this.callback&&this.callback(!0)});this.node=r,this.props=e,this.emit=s,this.callback=i}}class h extends n{constructor(e,s,i,a){super(e,s,i,a);o(this,"observer",()=>{const e=new IntersectionObserver(s=>{s[0].isIntersecting&&(this.loadCreateImg(),e.unobserve(this.node))},{rootMargin:d.isString(this.props.rootMargin)?this.props.rootMargin:this.props.rootMargin+"px"});return e});o(this,"lazyCreateImg",()=>{this.observer().observe(this.node)})}}const g=(t,r,e,s)=>r.lazy?new h(t,r,e,s).lazyCreateImg():new n(t,r,e,s).loadCreateImg();exports.loadImage=g;