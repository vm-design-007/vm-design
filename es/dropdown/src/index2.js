import { defineComponent as r, openBlock as a, createElementBlock as t, createVNode as s, unref as i, withCtx as o, renderSlot as n } from "vue";
import { Props as d } from "./index3.js";
import { VTrigger as l } from "../../trigger/index.js";
const p = { class: "v-dropdown" }, g = r({
  name: "VDropdown"
}), w = /* @__PURE__ */ r({
  ...g,
  props: d,
  setup(u) {
    return (e, c) => (a(), t("div", p, [
      s(i(l), {
        trigger: e.trigger,
        disabled: e.disabled,
        spacing: e.spacing,
        arrow: e.arrow,
        "enter-duration": e.enterDuration,
        "leave-duration": e.leaveDuration,
        "on-change": e.onChange,
        "on-open": e.onOpen,
        "on-close": e.onClose
      }, {
        content: o(() => [
          n(e.$slots, "content")
        ]),
        default: o(() => [
          n(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["trigger", "disabled", "spacing", "arrow", "enter-duration", "leave-duration", "on-change", "on-open", "on-close"])
    ]));
  }
});
export {
  w as default
};
