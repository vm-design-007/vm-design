import { defineComponent as f, useSlots as g, reactive as a, computed as _, provide as k, toRefs as E, openBlock as R, createElementBlock as C, renderSlot as b, createCommentVNode as v } from "vue";
import { Props as S, FORM_PROVIDE_KEY as x } from "./index3.js";
import { getChildren as y } from "../../_utils/get-children/index.js";
import { isString as F, isArray as O, isObject as V } from "../../_utils/is/index.js";
import { useRun as j } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const B = f({
  name: "VForm"
}), L = /* @__PURE__ */ f({
  ...B,
  props: S,
  setup(l) {
    const t = l, p = g(), { run: m } = j(), s = a({}), i = _(() => {
      if (!p.default)
        return [];
      const r = y(p.default(), "FFormItem");
      return r.forEach((e) => {
        e.props && e.props.name && (s[e.props.name] = !1);
      }), r;
    }), u = (r, e) => {
      const n = (o) => {
        const c = r.length + 1;
        return !(o.required && !r || o.max && c > o.max || o.min && c < o.min || o.regExp && !o.regExp.test(r));
      };
      if (O(e)) {
        for (const o of e)
          if (!n(o))
            return o.message || !1;
      } else if (V(e) && !n(e))
        return e.message || !1;
      return !0;
    }, d = () => {
      i.value.forEach((e) => {
        if (e.props && e.props.rules && e.props.name && t.model) {
          const n = u(
            t.model[e.props.name],
            e.props.rules
          );
          s[e.props.name] = n;
        }
      });
      const r = Object.values(s);
      return r.length ? r.every((e) => !!e && !F(e)) : !0;
    }, h = (r) => {
      r.preventDefault();
      const e = t.model ? d() : !0;
      m(t.onSubmit, { ok: e, res: s, evt: r });
    };
    return k(
      x,
      a({
        ...E(t),
        childrenCheckResult: s
      })
    ), (r, e) => r.$slots.default ? (R(), C("form", {
      key: 0,
      role: "form",
      class: "v-form",
      onsubmit: h
    }, [
      b(r.$slots, "default")
    ])) : v("", !0);
  }
});
export {
  L as default
};
