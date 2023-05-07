import { defineComponent as m, useSlots as z, ref as S, unref as e, openBlock as s, createElementBlock as r, normalizeClass as g, normalizeStyle as i, createBlock as h, withCtx as b, renderSlot as n, toDisplayString as c, createElementVNode as C } from "vue";
import { Props as E } from "./index3.js";
import { VSvgIcon as L } from "../../svg-icon/index.js";
import { isString as B, isNumber as D } from "../../_utils/is/index.js";
import { useList as N } from "../../_hooks/use-list/index.js";
import { useProps as V } from "../../_hooks/use-props/index.js";
import { useLoadImg as $ } from "../../_hooks/use-load-img/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const w = {
  key: 1,
  class: "v-avatar__text"
}, A = ["alt"], I = { class: "v-avatar__error-text" }, P = m({
  name: "VAvatar"
}), R = /* @__PURE__ */ m({
  ...P,
  props: E,
  setup(f) {
    const t = f, p = z(), { filter: u } = V(t), a = S(), { isSuccess: v, isShowNode: d } = $(
      a,
      u([
        "src",
        "errSrc",
        "rootMargin",
        "lazy",
        "onLoad",
        "onError"
      ]),
      () => !p.icon && !t.icon && !t.text && a.value
    ), { styles: y, classes: k } = N(t, "avatar"), _ = k(
      [
        "round",
        "fit",
        {
          key: "size",
          callback: () => B(t.size)
        }
      ],
      "v-avatar"
    ), l = y([
      "background",
      "fontColor",
      "fontSize",
      {
        key: "size",
        callback: () => D(t.size)
      }
    ]);
    return (o, F) => e(v) ? (s(), r("div", {
      key: 0,
      role: "img",
      class: g(e(_)),
      style: i(e(l))
    }, [
      o.$slots.icon || o.icon ? (s(), h(e(L), {
        key: 0,
        size: o.fontSize || 15,
        color: o.fontColor,
        icon: o.icon
      }, {
        default: b(() => [
          n(o.$slots, "icon")
        ]),
        _: 3
      }, 8, ["size", "color", "icon"])) : o.text ? (s(), r("span", w, c(o.text), 1)) : (s(), r("img", {
        key: 2,
        ref_key: "avatarEl",
        ref: a,
        class: "v-avatar__img",
        src: "",
        style: i(e(d) ? "" : "visibility: hidden"),
        alt: o.alt
      }, null, 12, A))
    ], 6)) : (s(), r("div", {
      key: 1,
      class: "v-avatar__error",
      style: i(e(l))
    }, [
      n(o.$slots, "error", {}, () => [
        C("span", I, c(o.alt || "\u52A0\u8F7D\u5931\u8D25"), 1)
      ])
    ], 4));
  }
});
export {
  R as default
};
