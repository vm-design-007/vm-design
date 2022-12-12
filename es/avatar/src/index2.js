import { defineComponent as y, useSlots as V, ref as l, computed as c, onMounted as b, openBlock as a, createElementBlock as i, normalizeClass as f, unref as s, normalizeStyle as _, createBlock as w, withCtx as D, renderSlot as p, toDisplayString as z, withDirectives as I, vShow as B, createElementVNode as E } from "vue";
import { Props as L, Emits as N } from "./index3.js";
import { loadImage as P } from "../../_utils/index2.js";
import { isString as g, isNumber as F, sizeChange as M } from "../../_utils/index3.js";
import { VSvgIcon as j } from "../../svg-icon/index.js";
import { useFilterProps as q } from "../../_hooks/use-filter-props/index.js";
const G = {
  key: 1,
  class: "v-avatar__text"
}, H = ["alt"], J = { class: "v-avatar__error-text" }, K = y({
  name: "VAvatar"
}), X = /* @__PURE__ */ y({
  ...K,
  props: L,
  emits: N,
  setup(k, { emit: S }) {
    const e = k, h = V(), v = l(!0), u = l(e.lazy), m = l(
      null
    ), C = c(() => {
      const { round: o, size: t, fit: r } = e;
      return [
        "v-avatar__img",
        {
          "v-avatar__round": o,
          [`v-avatar__${t}`]: g(t),
          [`v-avatar__${r}`]: r
        }
      ];
    }), $ = c(() => {
      const { size: o, round: t } = e;
      return [
        "v-avatar",
        {
          "v-avatar__round": t,
          [`v-avatar__${o}`]: g(o)
        }
      ];
    }), d = c(() => {
      const { background: o, size: t, fontColor: r, fontSize: n } = e;
      return {
        "--v-avatar-size": F(t) ? t + "px" : "",
        "--v-avatar-background-color": o,
        "--v-avatar-font-color": r,
        "--v-avatar-font-size": M(n)
      };
    }), A = () => {
      const o = m.value, t = (n) => {
        v.value = n, u.value = n;
      }, r = q(e, [
        "src",
        "errSrc",
        "rootMargin",
        "lazy"
      ]);
      P(o, r, S, t);
    };
    return b(() => {
      !h.icon && !e.icon && !e.text && A();
    }), (o, t) => v.value ? (a(), i("div", {
      key: 0,
      role: "img",
      class: f(s($)),
      style: _(s(d))
    }, [
      o.$slots.icon || o.icon ? (a(), w(s(j), {
        key: 0,
        size: o.fontSize,
        color: o.fontColor,
        icon: o.icon
      }, {
        default: D(() => [
          p(o.$slots, "icon")
        ]),
        _: 3
      }, 8, ["size", "color", "icon"])) : o.text ? (a(), i("span", G, z(o.text), 1)) : I((a(), i("img", {
        key: 2,
        ref_key: "VAvatarImg",
        ref: m,
        src: "",
        class: f(s(C)),
        alt: o.alt
      }, null, 10, H)), [
        [B, u.value]
      ])
    ], 6)) : (a(), i("div", {
      key: 1,
      class: "v-avatar__error",
      style: _(s(d))
    }, [
      p(o.$slots, "error", {}, () => [
        E("span", J, z(o.alt || "\u52A0\u8F7D\u5931\u8D25"), 1)
      ])
    ], 4));
  }
});
export {
  X as default
};
