import { useSlots as S, inject as v, computed as c, reactive as w, toRefs as x } from "vue";
import { sizeChange as i } from "../../_utils/utils/index.js";
import { useList as y } from "../use-list/index.js";
import { useColor as L } from "../use-color/index.js";
import { useGlobal as k } from "../use-global/index.js";
import { BUTTON_GROUP_PROPS_KEY as C } from "../../button-group/src/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const I = (t) => {
  const o = S(), { getType: r, getSize: u } = k(t), m = v(C, null), a = c(
    () => !(o.default && o.default() && o.default()[0].children)
  ), b = w({
    ...x(t),
    size: u("middle", m),
    type: !t.color && r(),
    simple: t.simple && !t.color,
    text: t.text && !t.color,
    icon: a
  }), { classes: f } = y(b, "button"), d = f(
    [
      "type",
      "icon",
      "round",
      "simple",
      "block",
      "bold",
      "text",
      "size",
      "circle",
      "spread"
    ],
    "v-button"
  ), h = c(() => {
    const { color: e, fontColor: n, shadow: s, fontSize: l } = t;
    if (t.color) {
      const { getLight: g, getDark: z } = L(t.color);
      return {
        "--button-background": e || null,
        "--button-hover": e ? g(0.4) : null,
        "--button-active": e ? z(0.2) : null,
        "--button-color": n,
        "--button-shadow": s,
        "--button-font-size": i(l)
      };
    }
    return {
      "--button-color": n,
      "--button-shadow": s,
      "--button-font-size": i(l)
    };
  });
  return {
    classList: d,
    styleList: h
  };
};
export {
  I as useButton
};
