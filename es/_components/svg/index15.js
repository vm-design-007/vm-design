import { openBlock as o, createElementBlock as t, createElementVNode as e } from "vue";
import r from "../../_virtual/index.js";
const n = {}, c = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
}, s = /* @__PURE__ */ e("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ e("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "4.75"
  }),
  /* @__PURE__ */ e("path", { d: "M9.25 7.5h-3.5M7.5 5.75v3.5m3.75 2l3 3" })
], -1), i = [
  s
];
function _(d, l) {
  return o(), t("svg", c, i);
}
const a = /* @__PURE__ */ r(n, [["render", _]]);
export {
  a as default
};
