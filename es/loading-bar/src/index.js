import r from "./index3.js";
import { h as n, render as t } from "vue";
const m = () => ({
  start: () => {
    const o = n(r);
    t(o, document.body);
  },
  finish: () => {
    const o = n(r, { type: "finish" });
    t(o, document.body);
  },
  error: () => {
    const o = n(r, { type: "error" });
    t(o, document.body);
  }
});
export {
  m as useLoadingBar
};
