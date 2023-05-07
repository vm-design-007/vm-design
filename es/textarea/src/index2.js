import { defineComponent as p, openBlock as u, createElementBlock as C, normalizeClass as V, unref as r, normalizeStyle as B, withDirectives as I, createElementVNode as b, isRef as w, vModelText as z, createBlock as E, createCommentVNode as T } from "vue";
import { Props as g } from "./index3.js";
import { useInput as F } from "../../_hooks/use-input/index.js";
import { useList as L } from "../../_hooks/use-list/index.js";
import { EMIT_UPDATE as d } from "../../_tokens/emits/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { useModel as M } from "../../_hooks/use-model/index.js";
import S from "../../_svg/v-icon-cross/index.js";
import { VSvgIcon as D } from "../../svg-icon/index.js";
const N = ["rows", "disabled", "readonly", "autofocus", "placeholder", "name"], P = p({
  name: "VTextarea"
}), O = /* @__PURE__ */ p({
  ...P,
  props: g,
  emits: {
    [d]: (t) => !!t
  },
  setup(t, { emit: a }) {
    const l = t, { keyword: n } = M(l, "modelValue", a, d), { handleInput: i, handleClear: f, handleChange: m } = F(l, a, n), { classes: c, styles: y } = L(l, "textarea"), v = c(["disabled"], "v-textarea"), k = y(["resize", "fontSize"]);
    return (e, o) => (u(), C("div", {
      class: V(r(v)),
      style: B(r(k))
    }, [
      I(b("textarea", {
        "onUpdate:modelValue": o[0] || (o[0] = (s) => w(n) ? n.value = s : null),
        class: "v-textarea__textarea",
        rows: e.rows,
        disabled: e.disabled,
        readonly: e.readonly,
        autofocus: e.autofocus,
        placeholder: e.placeholder,
        name: e.name,
        onInput: o[1] || (o[1] = (...s) => r(i) && r(i)(...s)),
        onChange: o[2] || (o[2] = (...s) => r(m) && r(m)(...s)),
        onBlur: o[3] || (o[3] = (...s) => e.onBlur && e.onBlur(...s)),
        onFocus: o[4] || (o[4] = (...s) => e.onFocus && e.onFocus(...s))
      }, null, 40, N), [
        [z, r(n)]
      ]),
      e.clear ? (u(), E(r(D), {
        key: 0,
        class: "v-textarea__clear-btn",
        icon: r(S),
        size: 14,
        "on-click": r(f)
      }, null, 8, ["icon", "on-click"])) : T("", !0)
    ], 6));
  }
});
export {
  O as default
};
