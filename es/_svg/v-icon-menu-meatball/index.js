import { openBlock as c, createElementBlock as o, createElementVNode as e } from "vue";
import r from "../../_virtual/index.js";
const t = {}, n = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16"
}, i = /* @__PURE__ */ e("g", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ e("circle", {
    cx: "2.5",
    cy: "8",
    r: ".75"
  }),
  /* @__PURE__ */ e("circle", {
    cx: "8",
    cy: "8",
    r: ".75"
  }),
  /* @__PURE__ */ e("circle", {
    cx: "13.5",
    cy: "8",
    r: ".75"
  })
], -1), s = [
  i
];
function l(_, d) {
  return c(), o("svg", n, s);
}
const f = /* @__PURE__ */ r(t, [["render", l]]);
export {
  f as default
};
