import { reactive as h, h as I, render as E } from "vue";
import { VM_TYPE as v } from "../../_tokens/attrs/index.js";
import { isNumber as x, isString as T } from "../../_utils/is/index.js";
import { warning as H } from "../../_utils/tips/index.js";
const r = h({}), i = (n) => n.props.placement, p = (n) => {
  const o = i(n);
  return r[o].findIndex(
    (s) => s.uid == n.uid
  );
}, f = (n) => n.vnode.el.offsetHeight + 16, M = (n) => {
  const o = p(n), s = i(n);
  if (!(o < 0))
    for (let c = o + 1; c < r[s].length; c++) {
      const u = r[s][c];
      u.exposed.offsetVal.value -= f(n);
    }
}, P = (n) => {
  M(n);
  const o = i(n);
  r[o].splice(
    p(n),
    1
  );
}, y = (n, o) => {
  const s = (e) => {
    const t = i(e);
    r[t] ? r[t].push(e) : r[t] = [e];
  }, c = (e) => {
    let t = e.offset || 20;
    const a = r[e.placement ? e.placement : o === "message" ? "top" : "top-right"];
    return a && a.forEach((g) => {
      t += f(g);
    }), t;
  }, u = (e) => {
    const t = I(n, e), a = document.createElement("div");
    return E(t, a), document.body.appendChild(a.firstElementChild), t.component;
  }, l = (e) => {
    const t = u(e);
    return s(t), t.proxy;
  }, m = (e) => {
    const t = {
      duration: 2500,
      placement: o === "message" ? "top" : "top-right",
      offset: c(e),
      ...e
    };
    return x(t.duration) || (t.duration = 2500, H(
      `F${o}`,
      "Parameters `duration` is not a number.The default value has been used 2500."
    )), t;
  }, d = (e) => {
    const t = T(e) ? { message: e } : e;
    return l(m(t));
  };
  return v.forEach((e) => {
    d[e] = (t) => l(m({ message: t, type: e }));
  }), { Message: d };
};
export {
  P as removeInstance,
  y as useMessage
};
