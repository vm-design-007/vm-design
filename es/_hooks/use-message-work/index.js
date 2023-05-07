import { getCurrentInstance as b, ref as a, computed as m } from "vue";
import { useList as p } from "../use-list/index.js";
import { useRun as I } from "../use-run/index.js";
import "../../loading/src/index2.js";
import { removeInstance as g } from "../use-message/index.js";
const P = (e, c) => {
  const { classes: u, styles: f } = p(e, c), { run: d } = I(), o = b(), l = a(!0), v = u(["type", "placement", "round"], `v-${c}`), T = f(["color", "background", "zIndex"], "zIndex"), y = m(() => e.placement.includes("top")), n = a(e.offset);
  let s;
  const r = (t) => {
    l.value = !1, d(e.onClose, t), clearTimeout(s);
  }, x = () => {
    g(o);
  }, C = () => {
    o.vnode.el && o.vnode.el.parentElement.removeChild(o.vnode.el);
  }, i = () => {
    e.duration > 0 && (s = setTimeout(() => {
      r();
    }, e.duration));
  };
  i();
  const L = m(() => {
    const t = {};
    return e.placement.includes("bottom") ? t.bottom = n.value + "px" : t.top = n.value + "px", t;
  });
  return {
    classList: v,
    styleList: T,
    visible: l,
    isPosition: y,
    offsetStyle: L,
    offsetVal: n,
    onBeforeLeave: x,
    onAfterLeave: C,
    clearTimer: () => {
      !s || clearTimeout(s);
    },
    startTime: () => {
      i();
    },
    handelClose: r
  };
};
export {
  P as useMessageWork
};
