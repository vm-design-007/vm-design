import { defineComponent as s, useSlots as d, getCurrentInstance as f, ref as v, inject as _, computed as r, reactive as h, onMounted as S, onBeforeUnmount as b, unref as a, withDirectives as C, openBlock as B, createElementBlock as N, renderSlot as P, vShow as g, createCommentVNode as k } from "vue";
import { Props as w } from "./index3.js";
import { TABS_PROPS_KEY as j } from "../../tabs/src/index.js";
const y = {
  key: 0,
  role: "tabpanel",
  class: "v-tabs-pane"
}, E = s({
  name: "VTabsPane"
}), x = /* @__PURE__ */ s({
  ...E,
  props: w,
  setup(c) {
    const t = c, l = d(), i = f(), n = v(t.name), e = _(j, null), u = r(() => e ? e.activeName.value === n.value ? !0 : !t.lazy : !1), m = r(
      () => e && e.activeName.value === n.value
    ), o = h({
      paneName: n,
      label: t.label,
      uid: i.uid,
      slots: l,
      prop: t
    });
    return S(() => {
      e && e.registerChild(o);
    }), b(() => {
      e && e.unRegisterChild(o);
    }), (p, I) => a(u) ? C((B(), N("div", y, [
      P(p.$slots, "default")
    ], 512)), [
      [g, a(m)]
    ]) : k("", !0);
  }
});
export {
  x as default
};
