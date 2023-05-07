import { openBlock as o, createElementBlock as t, createElementVNode as e } from "vue";
import r from "../../_virtual/index.js";
const c = {}, n = {
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
  /* @__PURE__ */ e("path", { d: "m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5" }),
  /* @__PURE__ */ e("circle", {
    cx: "8",
    cy: "8",
    r: "6.25"
  })
], -1), i = [
  s
];
function l(_, d) {
  return o(), t("svg", n, i);
}
const a = /* @__PURE__ */ r(c, [["render", l]]);
export {
  a as default
};
