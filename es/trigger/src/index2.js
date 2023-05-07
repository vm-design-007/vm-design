import { defineComponent as h, ref as O, reactive as R, computed as a, provide as b, openBlock as d, createElementBlock as D, mergeProps as v, unref as l, toHandlerKey as p, withModifiers as m, createElementVNode as g, renderSlot as f, createBlock as H, Teleport as N, createVNode as P, Transition as V, withCtx as G, withDirectives as K, normalizeClass as X, normalizeStyle as Y, vShow as $ } from "vue";
import { Props as I, TRIGGER_CLOSE_KEY as M } from "./index3.js";
import { sizeChange as j } from "../../_utils/utils/index.js";
import { useRun as q } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const A = { class: "v-trigger__content" }, F = h({
  name: "VTrigger"
}), te = /* @__PURE__ */ h({
  ...F,
  props: I,
  setup(_, { expose: w }) {
    const t = _, { run: s } = q(), o = O(!1), i = R({ x: "", y: "" }), y = a(() => ({
      "--trigger-content-x": i.x,
      "--trigger-content-y": i.y
    })), C = (e) => {
      if (t.disabled)
        return;
      const r = e.target, { left: n, top: T, height: B } = r.getBoundingClientRect(), S = n + window.scrollX, z = T + window.scrollY + B;
      i.x = S + "px", i.y = z + "px", console.log(window.pageXOffset), o.value = !0, s(t.onOpen, o.value), s(t.onChange, o.value);
    }, c = () => {
      o.value = !1, s(t.onClose, o.value), s(t.onChange, o.value);
    }, E = a(() => t.trigger === "hover" ? "mouseover" : "click"), x = a(() => t.trigger === "hover" ? "mouseleave" : ""), k = a(() => {
      const { spacing: e, enterDuration: r, leaveDuration: n } = t;
      return {
        "--trigger-spacing-size": j(e),
        "--trigger-enter-duration": r && r + "s",
        "--trigger-leave-duration": n && n + "s"
      };
    }), u = (e) => {
      e.composedPath().some(
        (n) => n.className === "v-trigger"
      ) || (c(), document.removeEventListener("click", u));
    }, L = () => {
      document.addEventListener("click", u);
    };
    return b(M, {
      handelClose: () => {
        o.value = !1;
      }
    }), w({ handelClose: c }), (e, r) => (d(), D("div", v({
      class: "v-trigger",
      style: l(k)
    }, {
      [p(l(x))]: m(c, ["stop"])
    }), [
      g("div", v({ class: "v-trigger__trigger" }, {
        [p(l(E))]: m(C, ["stop"])
      }), [
        f(e.$slots, "default")
      ], 16),
      (d(), H(N, { to: "body" }, [
        P(V, {
          name: "v-trigger",
          onBeforeEnter: L
        }, {
          default: G(() => [
            K(g("div", {
              class: X(["v-trigger__content-box", { "v-trigger__arrow": e.arrow }]),
              style: Y(l(y))
            }, [
              g("div", A, [
                f(e.$slots, "content")
              ])
            ], 6), [
              [$, o.value]
            ])
          ]),
          _: 3
        })
      ]))
    ], 16));
  }
});
export {
  te as default
};
