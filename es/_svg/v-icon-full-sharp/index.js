import { openBlock as e, createElementBlock as o, createElementVNode as t } from "vue";
import r from "../../_virtual/index.js";
const c = {}, n = {
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, l = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M128 128h256v38H128zm-16 64h288v38H112z"
}, null, -1), _ = /* @__PURE__ */ t("path", {
  fill: "currentColor",
  d: "M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z"
}, null, -1), h = [
  l,
  _
];
function s(i, d) {
  return e(), o("svg", n, h);
}
const m = /* @__PURE__ */ r(c, [["render", s]]);
export {
  m as default
};
