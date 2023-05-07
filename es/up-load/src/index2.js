import { defineComponent as I, ref as p, resolveComponent as d, openBlock as l, createElementBlock as s, Fragment as y, createElementVNode as v, withModifiers as D, renderSlot as E, createVNode as m, unref as b, withCtx as T, createTextVNode as F, renderList as $, toDisplayString as M, createBlock as P, createCommentVNode as L, watch as U, toRefs as j } from "vue";
import { Props as q } from "./index3.js";
import { EMIT_FILES as V } from "../../_tokens/emits/index.js";
import { useRun as A } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import G from "../../_svg/v-icon-notes/index.js";
import H from "../../_svg/v-icon-plus/index.js";
const J = { class: "v-up-load" }, K = ["onDrop", "onDragover"], O = ["name", "disabled", "accept", "multiple"], Q = {
  key: 0,
  class: "v-up-load__file-list"
}, W = { class: "v-up-load__file-name" }, X = I({
  name: "FUpLoad"
}), ie = /* @__PURE__ */ I({
  ...X,
  props: q,
  emits: {
    [V]: (r) => r
  },
  setup(r, { emit: N }) {
    const a = r, { run: f } = A(), _ = p(!1), n = p(), c = p(), h = () => {
      c.value && c.value.click();
    }, g = (e) => {
      n.value = e, N(V, e), f(a.onLoad, e);
    }, k = (e) => {
      const { maxSize: o, maxLength: i } = j(a);
      let t = [...e];
      return o.value && (t = t.filter((u) => u.size < o.value)), i.value && (t = t.splice(0, i.value)), t;
    }, w = (e) => {
      const o = e.target.files;
      o && g(k(o));
    }, S = (e) => {
      n.value && n.value.splice(e, 1);
    }, z = (e) => {
      e.preventDefault(), _.value = !0;
    }, B = (e) => {
      _.value = !1;
      const o = e.dataTransfer.files;
      o && g(k(o));
    };
    return (() => {
      !a.onChange || U(
        () => a.files,
        () => {
          f(a.onChange, n.value);
        },
        { deep: !0 }
      );
    })(), (e, o) => {
      const i = d("v-svg-icon"), t = d("v-button"), u = d("v-close-btn");
      return l(), s(y, null, [
        v("div", J, [
          e.drag ? (l(), s("div", {
            key: 0,
            class: "v-up-load__drag",
            onClick: h,
            onDrop: D(B, ["prevent"]),
            onDragover: D(z, ["prevent"])
          }, [
            E(e.$slots, "default", {}, () => [
              m(i, { icon: b(H) }, null, 8, ["icon"])
            ])
          ], 40, K)) : (l(), s("div", {
            key: 1,
            class: "v-up-load__content",
            onClick: h
          }, [
            E(e.$slots, "default", {}, () => [
              m(t, null, {
                default: T(() => [
                  F("\u9009\u62E9\u6587\u4EF6")
                ]),
                _: 1
              })
            ])
          ])),
          v("input", {
            ref_key: "inputEl",
            ref: c,
            type: "file",
            hidden: "",
            name: e.name,
            disabled: e.disabled,
            accept: e.accept,
            multiple: e.multiple,
            onChange: w
          }, null, 40, O)
        ]),
        e.showList && n.value && n.value.length ? (l(), s("ul", Q, [
          (l(!0), s(y, null, $(n.value, (R, C) => (l(), s("li", {
            key: C,
            class: "v-up-load__file-list-item"
          }, [
            v("span", W, [
              m(i, { icon: b(G) }, null, 8, ["icon"]),
              F(" " + M(R.name), 1)
            ]),
            e.isRemove ? (l(), P(u, {
              key: 0,
              size: 14,
              onClick: (Z) => S(C)
            }, null, 8, ["onClick"])) : L("", !0)
          ]))), 128))
        ])) : L("", !0)
      ], 64);
    };
  }
});
export {
  ie as default
};
